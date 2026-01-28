
import {
    Body,
    Controller,
    Post,
    BadRequestException,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { IntegrationService } from '@gitroom/nestjs-libraries/database/prisma/integrations/integration.service';
import * as crypto from 'crypto';
import { makeId } from '@gitroom/nestjs-libraries/services/make.is';

@ApiTags('Callbacks')
@Controller('/callbacks')
export class CallbacksController {
    constructor(private _integrationService: IntegrationService) { }

    private parseSignedRequest(signedRequest: string, secret: string) {
        if (!signedRequest) {
            throw new BadRequestException('Invalid signed_request');
        }

        const [encodedSig, payload] = signedRequest.split('.');
        if (!encodedSig || !payload) {
            throw new BadRequestException('Invalid signed_request format');
        }

        // Decode the signature
        const sig = Buffer.from(encodedSig.replace(/-/g, '+').replace(/_/g, '/'), 'base64');

        // Calculate expected signature
        const expectedSig = crypto
            .createHmac('sha256', secret)
            .update(payload)
            .digest();

        // Compare signatures
        if (!crypto.timingSafeEqual(sig, expectedSig)) {
            throw new BadRequestException('Invalid signature');
        }

        // Decode payload
        const data = JSON.parse(
            Buffer.from(payload.replace(/-/g, '+').replace(/_/g, '/'), 'base64').toString()
        );

        return data;
    }

    @Post('/facebook/delete')
    async facebookDataDeletion(@Body('signed_request') signedRequest: string) {
        const secret = process.env.FACEBOOK_APP_SECRET;
        if (!secret) {
            throw new BadRequestException('Configuration error');
        }

        const data = this.parseSignedRequest(signedRequest, secret);
        const userId = data.user_id;

        if (!userId) {
            throw new BadRequestException('User ID not found in payload');
        }

        // Find and delete the integration
        // We search for integrations with this internalId and provider 'facebook'
        // Since we don't have direct access to IntegrationRepository here, 
        // we might need to rely on what IntegrationService exposes or use Prisma directly if needed.
        // However, IntegrationService has `deleteChannel`. But we need the OrgID and IntegrationID.
        // We likely need to find the integration first.
        // For now, let's assume we can implement a find method or we might need to extend IntegrationService.
        // Searching by internalId (provider's user id) is needed.

        // NOTE: IntegrationService.getIntegrationsList takes orgId.
        // We need a way to find integrations by internalId globally or iterate? 
        // Iterating is bad.
        // Ideally we should add `getIntegrationByInternalId` to IntegrationService.
        // But since I can't easily modify the service interface without potentially breaking things or circular deps,
        // I will try to use `IntegrationRepository` directly or add a method to `IntegrationService` if I can.
        // Let's assume for this task I can add a method to IntegrationService.

        // Wait, I will add `deleteIntegrationByInternalId` to IntegrationService.

        // For the response:
        const confirmationCode = makeId(10);
        const statusUrl = `${process.env.FRONTEND_URL}/deletion-status/${confirmationCode}`;

        // We should actually perform the deletion here. 
        // Since I cannot verify the DB lookup right now without modifying Service,
        // I will assume I can add `deleteIntegrationByInternalId` to IntegrationService in a next step.

        await this._integrationService.deleteIntegrationByInternalId('facebook', userId);

        return {
            url: statusUrl,
            confirmation_code: confirmationCode,
        };
    }

    @Post('/instagram/deauthorize')
    async instagramDeauthorize(@Body('signed_request') signedRequest: string) {
        const secret = process.env.INSTAGRAM_APP_SECRET;
        if (!secret) {
            throw new BadRequestException('Configuration error');
        }

        const data = this.parseSignedRequest(signedRequest, secret);
        const userId = data.user_id;

        if (userId) {
            await this._integrationService.deleteIntegrationByInternalId('instagram-standalone', userId);
        }

        return { success: true };
    }

    @Post('/instagram/delete')
    async instagramDataDeletion(@Body('signed_request') signedRequest: string) {
        const secret = process.env.INSTAGRAM_APP_SECRET;
        if (!secret) {
            throw new BadRequestException('Configuration error');
        }

        const data = this.parseSignedRequest(signedRequest, secret);
        const userId = data.user_id;

        const confirmationCode = makeId(10);
        const statusUrl = `${process.env.FRONTEND_URL}/deletion-status/${confirmationCode}`;

        if (userId) {
            await this._integrationService.deleteIntegrationByInternalId('instagram-standalone', userId);
        }

        return {
            url: statusUrl,
            confirmation_code: confirmationCode,
        };
    }
}

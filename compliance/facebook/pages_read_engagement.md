# Facebook App Review Guide: `pages_read_engagement` Permission

This document provides the specific text and instructions you need to submit the `pages_read_engagement` permission request for Vinsmoke Media.

**Important Note:** Based on the current codebase, your app does **not** appear to have a "Social Inbox" or "Feed" feature that reads comments or timeline posts. Therefore, the justification below is tailored to what you *actually* use it for: **Page Identity (Profile Picture/Name)** and **Post Existence Verification** for analytics.

## 1. Form Section: "Tell us why you're requesting pages_read_engagement"

**Question:** Please provide a detailed description of how your app uses the permission or feature requested, how it adds value for a person using your app, and why it's necessary for app functionality.

**Suggested Response:**

> Vinsmoke Media is a social media management platform that helps businesses manage their content and analytics.
>
> **How we use this permission:**
> We use the `pages_read_engagement` permission to retrieve the public profile information (Name, Username, and Profile Picture) of the Facebook Page via the Graph API (`/me/accounts` and `/{page-id}`) when a user connects their account. We also use it to read specific Post objects (`/{post-id}`) to verify their existence and metadata before attaching performance analytics to them.
>

> **How it adds value:**
> This permissions adds value by ensuring the user can clearly identify which Facebook Page they have connected to the dashboard through its correct branding (Profile Picture) and verified Username. It also ensures that the "Post Performance" reports in our Analytics section are accurate by allowing us to verify the content we are reporting on.
>
> **Why it is necessary:**
> Without `pages_read_engagement`, we cannot fetch the Facebook Page's profile picture or full details to display in the "Integrations" manager. This would lead to a confusing user experience where users cannot visually distinguish between multiple connected pages.

---

## 2. Screen Recording Guide

You need to upload a screen recording that clearly demonstrates this usage. Since you do not have an Inbox, you must show the **Integration** and **Analytics** flow.

**Script / Flow for the Recording:**

1.  **Start at the Login Screen:**
    *   Show yourself logging into Vinsmoke Media.
2.  **Connect a Facebook Page:**
    *   Navigate to the "Integrations" settings.
    *   Click "Connect" for Facebook.
    *   Authorize the app.
    *   **CRITICAL:** Once connected, hover over or highlight the **Facebook Page Name** and **Profile Picture** that appears in the list.
    *   *Voiceover/Caption:* "The app uses `pages_read_engagement` to fetch and display the Page's profile picture and username here."
3.  **Navigate to Analytics/Posts:**
    *   Go to the Analytics section.
    *   Show a list of **Posts** that have been published.
    *   *Voiceover/Caption:* "We also use this permission to read the metadata of specific posts to display them here alongside their metrics."
4.  **Conclusion:**
    *   End the video.

**Tips:**
*   Ensure the Profile Picture loads correctly in the recording.
*   Do NOT claim to read comments or messages if the feature is not in the UI.

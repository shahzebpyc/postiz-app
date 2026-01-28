# Facebook App Review Guide: `pages_manage_engagement` Permission

This document provides the specific text and instructions you need to submit the `pages_manage_engagement` permission request for Vinsmoke Media.

**Verified Use Case:** "First Comment" / Threading Automation.
Your application allows users to create multi-part posts (Threads), where the second part is published as a comment on the first. This is the **only** active use of this permission in your codebase.

## 1. Form Section: "Tell us why you're requesting pages_manage_engagement"

**Question:** Please provide a detailed description of how your app uses the permission or feature requested, how it adds value for a person using your app, and why it's necessary for app functionality.

**Suggested Response:**

> Vinsmoke Media is a social media management platform that allows businesses to schedule and publish complex content strategies.
>
> **How we use this permission:**
> We use the `pages_manage_engagement` permission specifically to allow our users to publish "Threaded Posts" or "First Comments" on their Facebook Page. When a user schedules a multi-part post in our composer, our system publishes the first part as a standard Page Post, and immediately uses this permission to publish the subsequent parts as **comments** on that main post.
>
> **How it adds value:**
> This feature adds value by allowing users to keep their main captions clean while still including necessary hashtags, "Link in bio" pointers, or additional context in the comments section. It automates a manual workflow (posting, then manually commenting) that is critical for maximizing engagement and reach.
>
> **Why it is necessary:**
> Without `pages_manage_engagement`, the "Add Comment" / "Thread" features in our composer would fail for Facebook Pages. Users would be able to draft these comments, but our system would encounter an API error when attempting to publish them, resulting in incomplete content delivery.

---

## 2. Screen Recording Guide

You need to upload a screen recording that specifically demonstrates the **Threading/First Comment** feature.

**Script / Flow for the Recording:**

1.  **Start at the Login Screen:**
    *   Show yourself logging into Vinsmoke Media.
2.  **Connect a Facebook Page:**
    *   Navigate to "Integrations" and ensure a Facebook Page is connected. (Briefly show the connection if needed).
3.  **Open the "Create Post" (Composer) Modal:**
    *   Click the "Create Post" or "+" button to open the editor.
4.  **Select Facebook Page:**
    *   Select the connected Facebook Page as the channel.
5.  **Draft the Main Post:**
    *   Type "This is a test post from Vinsmoke Media." in the main editor window.
6.  **Add a Thread / First Comment (CRITICAL STEP):**
    *   Click the **"+" (Add Post/Thread)** button (usually located at the bottom or side of the editor).
    *   This opens a second editor block below the first one.
    *   Type "This is the first comment/thread added automatically via Vinsmoke Media."
    *   *Voiceover/Caption:* "Here I am using the composer to add a threaded comment that will be published immediately after the main post using `pages_manage_engagement`."
7.  **Publish:**
    *   Click "Post Now".
8.  **Verify Success:**
    *   Wait for the success notification/toast.
    *   (Optional but recommended) Open the actual Facebook Page in a new tab and show the post with the comment attached.

**Tips:**
*   Ensure the "+" button is clearly visible when you click it.
*   Do not mention "deleting comments" or "moderation" as your app does not appear to have a UI for that. Stick to the "Publishing Comments" use case.

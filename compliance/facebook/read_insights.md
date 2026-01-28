# Facebook App Review Guide: `read_insights` Permission

This document provides the specific text and instructions you need to submit the `read_insights` permission request for Vinsmoke Media.

## 1. Form Section: "Tell us why you're requesting read_insights"

**Question:** Please provide a detailed description of how your app uses the permission or feature requested, how it adds value for a person using your app, and why it's necessary for app functionality.

**Suggested Response:**

> Vinsmoke Media is a social media management and analytics platform that helps businesses and creators optimize their online presence.
>
> **How we use this permission:**
> We use the `read_insights` permission to fetch aggregated performance metrics for Facebook Pages and specific Posts connected to our platform. Specifically, we use the Graph API to retrieve:
> *   **Page Metrics:** `page_impressions_unique`, `page_posts_impressions_unique`, `page_post_engagements`, `page_daily_follows`, and `page_video_views`.
> *   **Post Metrics:** `post_impressions_unique`, `post_reactions_by_type_total`, `post_clicks`, and `post_clicks_by_type`.
>
> **How it adds value:**
> This permission allows our users to view comprehensive analytics for their Facebook Pages directly within their Vinsmoke Media dashboard. Instead of manually checking Facebook Insights, users get a unified view of their performance. This helps them identify high-performing content (via impressions and clicks) and understand their audience growth (via daily follows).
>
> **Why it is necessary:**
> The core functionality of Vinsmoke Media is "Unified Analytics." Without `read_insights`, we cannot display any performance data for Facebook Pages, rendering the Analytics section of our application broken for Facebook users. This permission is strictly used to display these insights to the page owner themselves.

---

## 2. Screen Recording Guide

You need to upload a screen recording that clearly demonstrates how the `read_insights` permission is utilized. Do not edit the video (no cuts).

**Script / Flow for the Recording:**

1.  **Start at the Login Screen:**
    *   Show yourself logging into Vinsmoke Media.
2.  **Connect a Facebook Page:**
    *   Navigate to the "Integrations" page.
    *   Click "Connect" for Facebook and complete the flow (ensure `read_insights` is checked in the review screen if shown).
3.  **Navigate to Analytics:**
    *   Go to the "Analytics" or "Dashboard" section.
4.  **Show the Data:**
    *   Select the Facebook Page you connected.
    *   **Highlight Specific Charts:** Point to widgets labeled "Page Impressions," "New Followers," or "Engagement."
    *   *Voiceover/Caption:* "Here you can see the charts populated with data fetched using `read_insights`, including Page Impressions and Post Engagement."
5.  **Drill Down (Optional):**
    *   If you have a "Posts" table, show that individual posts have metrics like "Clicks" or "Reactions" associated with them.
6.  **Conclusion:**
    *   Briefly scroll through the report to show it provides a valuable summary for the user.

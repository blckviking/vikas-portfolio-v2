/* ============================================================================
   BLOG POSTS — single source of truth
   ----------------------------------------------------------------------------
   To add a new post, copy one { ... } block below and edit its fields.
   Put the NEWEST post at the TOP of the list.

   FIELDS (per post):
     slug        Unique URL id, lowercase-with-dashes. Used in the link:
                 post.html?slug=your-slug   (must be unique, no spaces)
     title       Post title (shown big)
     description Short summary (shown on cards + top of the post + SEO)
     date        Publish date "YYYY-MM-DD" (used for ordering label)
     readTime    e.g. "5 min read"
     tag         Short category label, e.g. "Product" or "AI"
     cover       Optional cover image. Use a path like "blog-images/my-post.jpg"
                 or a full "https://..." URL. Leave "" to auto-generate a
                 branded placeholder.
     content     Array of blocks that make up the article body. Block types:

         { type: "heading",   text: "Section title" }
         { type: "paragraph", text: "A paragraph. You may use <b>bold</b>,
                                     <i>italic</i> and <a href='...'>links</a>." }
         { type: "image",     src: "blog-images/pic.jpg",
                               alt: "describe the image",
                               caption: "Optional caption shown under it" }
         { type: "quote",     text: "A pull quote.", cite: "Optional — who said it" }
         { type: "list",      items: ["First point", "Second point"] }

   IMAGES:
     Put image files in a folder next to this file (e.g. create "blog-images/")
     and reference them as "blog-images/filename.jpg". External URLs also work.
   ============================================================================ */

const BLOG_POSTS = [
  {
    slug: "why-traditional-prioritization-fails-startups",
    title: "Why Traditional Product Prioritization Models Fail Startups (And What to Use Instead)",
    description:
      "Why frameworks like RICE and MoSCoW fail early-stage startups. Discover a 4-tier framework built for cash runway, early adopter feedback, and real traction.",
    date: "2026-07-23",
    readTime: "9 min read",
    tag: "Product",
    cover: "blog-images/prioritization-startups.jpg",
    content: [
      {
        type: "paragraph",
        text: "Hello fellow Product Managers, developers frustrated with their Product Managers and QA frustrated with the developers. Whoever you are, you have stumbled upon this blog. You may be an experienced professional, someone who did a few courses in Product Management or trying to pivot to it from another tech role, or you are and big shot MBA in something something reading this but you are gonna pretend this whole thing was your idea in the next meeting, it's okay, we won't tell.",
      },
      {
        type: "paragraph",
        text: "Chances are, you are working for a startup, where most of us get our feet wet in Product Management. There lies the problem, the course you did is not going to help you. Well, not as much as you think they will. It's not their fault, those courses are built with some base assumption. Assumptions like, the teams know what they are doing, there is an established process, a fall back in case of failures, the team lead is not an overworked frustrated individual who can fix anything and your CEO is not some kid who thought they had a dream (Almost forgot, Hi CEO pretending you know what you are doing)",
      },
      {
        type: "paragraph",
        text: "One such thing, that the course taught you wrong, or rather won't help you in a startup is product prioritisation. Unlike mature companies that prioritise incremental revenue or retention tweaks, startups are locked in a race against time. No matter what your management thinks, you are not the first to have that idea. With the rise in AI and people who think they can code, someone is bound to catch up and possibly get ahead of you. So in the early stages of a startup, your priority is to capture the market and keep those users with you.",
      },
      {
        type: "paragraph",
        text: "So, how does a Product Manager prioritise? Ask yourself this:",
      },
      {
        type: "list",
        items: [
          "1. What is the ‘Immediate Business Needs’ (Must-Fix)",
          "2. What is the Fastest way to help Users (Core User Feedback)",
          "3. What can we expand into? (Possible Verticals)",
          "4. How do we set our foundation? (Long-Term Planning)",
        ],
      },
      {
        type: "paragraph",
        text: "So what do each of these mean?",
      },
      { type: "heading", text: "1. What is the ‘Immediate Business Needs’ (Must-Fix)" },
      {
        type: "paragraph",
        text: "These are your non-negotiable blockers that directly impact your ability to operate or generate revenue. For example, broken payment gateways, severe security vulnerabilities or onboarding crashes. You can identify these with two simple questions:",
      },
      {
        type: "list",
        items: [
          "Can the user do what the Product says it does?",
          "Can the user do this without any hiccups?",
        ],
      },
      {
        type: "paragraph",
        text: "The hierarchy of the questions is important. For example, you may identify that incorporating a payment gateway will reduce payment processing time to a few seconds. Great, that solved the second question but what if the user was never able to get to the payment portal because a bug prevented them. Hence, always fix the first question then the second.",
      },
      { type: "heading", text: "2. What is the Fastest way to help Users (Core User Feedback)" },
      {
        type: "paragraph",
        text: "Your product has a core idea followed by secondary ideas. If your app is a fitness app that shows users how to do an exercise, those animations and database is your primary idea. A way for the user to add friends to the app would be a secondary idea built around this. Like an umbrella if you will. So simply ask yourself,",
      },
      {
        type: "list",
        items: [
          "Can I do something to make users perform the primary idea better?",
          "Can I do something to make users perform the secondary idea better?",
        ],
      },
      {
        type: "paragraph",
        text: "For example, in our fitness app’s case giving a better navigation menu to make it easier to search the workouts. Adding an injury and recovery segment as the secondary idea. Remember these come from core user query. How to interpret the user query is another story. Considering 90% of you have stopped reading and the other 10% is asking Claude what this means.",
      },
      { type: "heading", text: "3. What can we expand into? (Possible Verticals)" },
      {
        type: "paragraph",
        text: "You have built your app, addressing the core business ideas and user needs. Now what? Now you need to think about what we can do to make sure my business stays relevant. It's important to make sure your expansion doesn't alienate your primary user base. For an e-commerce website this would be expanding to other products.",
      },
      { type: "heading", text: "4. How do we set our foundation? (Long-Term Planning)" },
      {
        type: "paragraph",
        text: "Congratulations, you have made it to the last step. You have done all the prior steps and made your founders proud. What next? Step 1, try not to get laid off. Step 2, you need to now transition your company from a startup with the above priority method to a functioning organisation with established frameworks. This step is important as it does two things.",
      },
      {
        type: "list",
        items: [
          "We need to eventually stop being a startup",
          "We need to onboard other teams and they would appreciate frameworks",
        ],
      },
      {
        type: "paragraph",
        text: "This is done by establishing long term goals. Move away from weekly or monthly updates to plan, scheduled and announced updates. You can now run A/B tests, have product teams work on each aspect of your business or have internal product teams handling your team segments.",
      },
      {
        type: "paragraph",
        text: "Please remember, what I mentioned here is an ‘in general’ idea of how to prioritise your work. Your intuition and experience will help you navigate the day to day. I believe in you.",
      },
    ],
  },
  {
    slug: "nothing-more-permanent-than-a-temporary-solution",
    title: "Nothing Is More Permanent Than a Temporary Solution",
    description:
      "Quick patches have a way of becoming permanent. How temporary fixes quietly calcify into architecture — and when a hotfix is actually the right call.",
    date: "2026-07-29",
    readTime: "5 min read",
    tag: "Engineering",
    cover: "blog-images/house-cards-falling-pink-background.jpg",
    content: [
      {
        type: "paragraph",
        text: "In fast paced development and operational environments, urgency often trumps elegance. When deadlines loom, systems crash or team bandwidth reaches its absolute limit, the path of least resistance becomes irresistible. We apply a quick patch, push a hotfix and promise ourselves we will return later to build the \"proper\" solution.",
      },
      { type: "paragraph", text: "More often than not, that \"later\" never arrives." },
      {
        type: "paragraph",
        text: "What began as a 20-minute stopgap quietly bakes into the system architecture, becoming an invisible dependency that lasts for years.",
      },
      { type: "heading", text: "1. The Anatomy of Quick Patches vs. Refined Solutions" },
      {
        type: "paragraph",
        text: "The fundamental risk of a temporary fix is not that it fails, but that <b>it works just well enough to lose priority</b>. Once the immediate pain point subsides, the motivation to build a scalable, long term solution drops to zero.",
      },
      { type: "heading", text: "Example 1: The Feature Scope Creep" },
      {
        type: "list",
        items: [
          "<b>The Quick Patch:</b> A client requests three specific new data columns in their export report. Pressure is high, so the team hardcodes those three additional fields into the report generation script and deploys it.",
          "<b>The Refined Solution:</b> Build a customisable, self service column selector.",
          "<b>The Long-Term Cost:</b> Hardcoding solves today's problem, but next month the user will ask for two <i>different</i> columns, or a new client might not see these metrics as key data. The team ends up trapped in an endless loop of minor, repetitive manual tweaks. A self-service feature completely eliminates this operational overhead moving forward.",
        ],
      },
      { type: "heading", text: "Example 2: The Manual Data Patch" },
      {
        type: "list",
        items: [
          "<b>The Quick Patch:</b> A legacy database sync between two systems occasionally drops record updates, causing user accounts to desync. The temporary fix is a scheduled cron job to force sync desynced records.",
          "<b>The Refined Solution:</b> Fix the underlying webhook retry logic and event listener that caused the drop in the first place.",
          "<b>The Long-Term Cost:</b> The nightly patch masks the underlying bug. As data volume scales, the batch script slows down, eventually timing out and causing massive silent data corruption down the road.",
        ],
      },
      { type: "heading", text: "Example 3: The \"Temporary\" Manual Admin Step" },
      {
        type: "list",
        items: [
          "<b>The Quick Patch:</b> A new product feature lacks an admin dashboard UI, so customer support staff are instructed to process refunds or updates by filling out an internal form that triggers a developer to run a manual script.",
          "<b>The Refined Solution:</b> Build a dedicated, permission controlled self-service admin portal.",
          "<b>The Long-Term Cost:</b> As user volume grows, developers spend 15% of their working week running manual scripts for support tickets — creating friction for both teams and a massive operational bottleneck.",
        ],
      },
      { type: "heading", text: "2. The Exception: Strategic Technical Debt & Firefighting" },
      {
        type: "paragraph",
        text: "While temporary solutions can turn into permanent architectural rot, treating all hotfixes as \"bad practice\" is equally foolish. Pragmatic engineering requires knowing when a quick patch is not only acceptable, but <b>objectively the correct business decision</b>.",
      },
      { type: "heading", text: "When a Quick Fix is the Right Call:" },
      {
        type: "list",
        items: [
          "<b>Massive Failure &amp; High Blast Radius:</b> If a critical service is down and thousands of users are actively affected, taking weeks to engineer an elegant solution while the system is broken is a failure of prioritization. <b>Stop the bleeding first.</b>",
          "<b>High Opportunity Cost:</b> If the \"proper\" architectural refactor will take 4 months but a 2-day patch resolves 90% of the pain point during a crucial launch window, the temporary fix buys the team time to validate whether the feature is even worth a 4-month investment. Users will thank you for the quick fix, and the long term solution shows your commitment to quality.",
          "<b>Throwaway Experiments:</b> If you are testing a hypothesis to see if users even want a feature, hardcoding the backend logic (or running it via manual processes behind the scenes) prevents wasting engineering cycles on code destined for the trash bin.",
        ],
      },
      {
        type: "paragraph",
        text: "If you must apply a hotfix to survive today, treat it as a deliberate trade off: log the technical debt explicitly, define the trigger conditions for when it must be replaced and ensure the team agrees on when that loan will be repaid. Otherwise, today's quick patch will become tomorrow's permanent system boundary.",
      },
    ],
  },
];

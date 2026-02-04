export interface Article {
  id: string
  title: string
  author: string
  description: string
  summary: string
  datePublished: string
  url: string
  chatCompletionSummary: string | null
  image?: string
  tags?: string[]
}

// Articles fetched from RSS feeds
export const articles: Article[] = [
  {
    "id": "aHR0cHM6Ly9yZXNlYXJjaC5nb29nbGUvYmxvZy9jb2xsYWJvcmF0aW5nLW9uLWEtbmF0aW9ud2lkZS1yYW5kb21pemVkLXN0dWR5LW9mLWFpLWluLXJlYWwtd29ybGQtdmlydHVhbC1jYXJlLw==",
    "title": "Collaborating on a nationwide randomized study of AI in real-world virtual care",
    "author": "Google Research",
    "description": "Generative AI...",
    "summary": "Generative AI",
    "datePublished": "2026-02-03T18:15:01.000Z",
    "url": "https://research.google/blog/collaborating-on-a-nationwide-randomized-study-of-ai-in-real-world-virtual-care/",
    "chatCompletionSummary": null,
    "image": "https://storage.googleapis.com/gweb-research2023-media/original_images/ATS-gif-1.gif",
    "tags": [
      "AI News",
      "Google Research"
    ]
  },
  {
    "id": "aHR0cHM6Ly90ZWNoY3J1bmNoLmNvbS8yMDI2LzAyLzAzL2FnZW50aWMtY29kaW5nLWNvbWVzLXRvLWFwcGxlcy14Y29kZS0yNi0zLXdpdGgtYWdlbnRzLWZyb20tYW50aHJvcGljLWFuZC1vcGVuYWkv",
    "title": "Agentic coding comes to Apple’s Xcode with agents from Anthropic and OpenAI",
    "author": "Sarah Perez",
    "description": "Xcode 26.3 offers agentic coding capabilities with Anthropic's Claude Agent and OpenAI's Codex....",
    "summary": "Xcode 26.3 offers agentic coding capabilities with Anthropic's Claude Agent and OpenAI's Codex.",
    "datePublished": "2026-02-03T18:00:00.000Z",
    "url": "https://techcrunch.com/2026/02/03/agentic-coding-comes-to-apples-xcode-26-3-with-agents-from-anthropic-and-openai/",
    "chatCompletionSummary": null,
    "tags": [
      "AI News",
      "TechCrunch AI"
    ]
  },
  {
    "id": "aHR0cHM6Ly90ZWNoY3J1bmNoLmNvbS8yMDI2LzAyLzAzL2xvdHVzLWhlYWx0aC1uYWJzLTM1bS1mb3ItYWktZG9jdG9yLXRoYXQtc2Vlcy1wYXRpZW50cy1mb3ItZnJlZS8=",
    "title": "Lotus Health nabs $35M for AI doctor that sees patients for free",
    "author": "Marina Temkin",
    "description": "This AI doctor is licensed in all 50 states, the startup says. The deal was led by CRV and Kleiner Perkins....",
    "summary": "This AI doctor is licensed in all 50 states, the startup says. The deal was led by CRV and Kleiner Perkins.",
    "datePublished": "2026-02-03T17:14:27.000Z",
    "url": "https://techcrunch.com/2026/02/03/lotus-health-nabs-35m-for-ai-doctor-that-sees-patients-for-free/",
    "chatCompletionSummary": null,
    "tags": [
      "AI News",
      "TechCrunch AI"
    ]
  },
  {
    "id": "aHR0cHM6Ly90ZWNoY3J1bmNoLmNvbS8yMDI2LzAyLzAzL2ZpdGJpdC1mb3VuZGVycy1sYXVuY2gtYWktcGxhdGZvcm0tdG8taGVscC1mYW1pbGllcy1tb25pdG9yLXRoZWlyLWhlYWx0aC8=",
    "title": "Fitbit founders launch AI platform to help families monitor their health",
    "author": "Aisha Malik",
    "description": "Luffu uses AI in the background to gather and organize family information, learn day-to-day patterns, and flag notable changes so families can stay aligned and address potential well-being issues....",
    "summary": "Luffu uses AI in the background to gather and organize family information, learn day-to-day patterns, and flag notable changes so families can stay aligned and address potential well-being issues.",
    "datePublished": "2026-02-03T15:53:36.000Z",
    "url": "https://techcrunch.com/2026/02/03/fitbit-founders-launch-ai-platform-to-help-families-monitor-their-health/",
    "chatCompletionSummary": null,
    "tags": [
      "AI News",
      "TechCrunch AI"
    ]
  },
  {
    "id": "aHR0cHM6Ly9uZXdzLm1pdC5lZHUvMjAyNi9zbWFydC1sYXVuY2hlcy13ZWFyYWJsZS1pbWFnaW5nLXRyYW5zZm9ybWluZy1lbGRlcmx5LWNhcmUtcmVzZWFyY2gtZ3JvdXAtMDIwMw==",
    "title": "SMART launches new Wearable Imaging for Transforming Elderly Care research group",
    "author": "Singapore-MIT Alliance for Research and Technology",
    "description": "WITEC is working to develop the first wearable ultrasound imaging system to monitor chronic conditions in real-time, with the goal of enabling earlier detection and timely intervention....",
    "summary": "WITEC is working to develop the first wearable ultrasound imaging system to monitor chronic conditions in real-time, with the goal of enabling earlier detection and timely intervention.",
    "datePublished": "2026-02-03T15:00:00.000Z",
    "url": "https://news.mit.edu/2026/smart-launches-wearable-imaging-transforming-elderly-care-research-group-0203",
    "chatCompletionSummary": null,
    "image": "https://news.mit.edu/sites/default/files/styles/news_article__cover_image__original/public/images/202602/smart-witec-patch-prototype-00_0.jpeg?itok=EHlc_92n",
    "tags": [
      "AI News",
      "MIT News"
    ]
  },
  {
    "id": "aHR0cHM6Ly90ZWNoY3J1bmNoLmNvbS8yMDI2LzAyLzAzL3BlYWsteHYtc2F5cy1pbnRlcm5hbC1kaXNhZ3JlZW1lbnQtbGVkLXRvLXBhcnRuZXItZXhpdHMtYXMtaXQtZG91Ymxlcy1kb3duLW9uLWFpLw==",
    "title": "Peak XV says internal disagreement led to partner exits as it doubles down on AI",
    "author": "Jagmeet Singh",
    "description": "Peak XV is transitioning board roles and opening a U.S. office while continuing to view India as its largest market....",
    "summary": "Peak XV is transitioning board roles and opening a U.S. office while continuing to view India as its largest market.",
    "datePublished": "2026-02-03T14:14:33.000Z",
    "url": "https://techcrunch.com/2026/02/03/peak-xv-says-internal-disagreement-led-to-partner-exits-as-it-doubles-down-on-ai/",
    "chatCompletionSummary": null,
    "tags": [
      "AI News",
      "TechCrunch AI"
    ]
  },
  {
    "id": "aHR0cHM6Ly93d3cuYW5hbHl0aWNzdmlkaHlhLmNvbS9ibG9nLzIwMjYvMDIvZ3Jvay1pbWFnaW5lLTEtMC1pcy1oZXJlLw==",
    "title": "6 New Features of Grok Imagine 1.0 [MUST TRY]",
    "author": "Sarthak Dogra",
    "description": "Ever since its announcement, Grok has been among the leading generative AI platforms across the globe. Reason – its quick and accurate outputs, longer context handling, and of course, a bit of wit tha...",
    "summary": "Ever since its announcement, Grok has been among the leading generative AI platforms across the globe. Reason – its quick and accurate outputs, longer context handling, and of course, a bit of wit that accompanies all its responses. It is easy to see the AI model’s sharpness across output formats, be it textual responses, or […]\nThe post 6 New Features of Grok Imagine 1.0 [MUST TRY] appeared first on Analytics Vidhya.",
    "datePublished": "2026-02-03T12:33:53.000Z",
    "url": "https://www.analyticsvidhya.com/blog/2026/02/grok-imagine-1-0-is-here/",
    "chatCompletionSummary": null,
    "tags": [
      "AI News",
      "Analytics Vidhya"
    ]
  },
  {
    "id": "aHR0cHM6Ly93d3cud2lyZWQuY29tL3N0b3J5L3RoZS1iaWctaW50ZXJ2aWV3LXBvZGNhc3Qtam9uYXRoYW4tbm9sYW4tZmFsbG91dC8=",
    "title": "‘Fallout’ Producer Jonathan Nolan on AI: ‘We’re in Such a Frothy Moment’",
    "author": "Katie Drummond",
    "description": "The Westworld showrunner thinks AI will be good for burgeoning filmmakers, but not for Hollywood blockbusters....",
    "summary": "The Westworld showrunner thinks AI will be good for burgeoning filmmakers, but not for Hollywood blockbusters.",
    "datePublished": "2026-02-03T12:00:00.000Z",
    "url": "https://www.wired.com/story/the-big-interview-podcast-jonathan-nolan-fallout/",
    "chatCompletionSummary": null,
    "tags": [
      "AI News",
      "Wired AI"
    ]
  },
  {
    "id": "aHR0cHM6Ly93d3cuYW5hbHl0aWNzdmlkaHlhLmNvbS9ibG9nLzIwMjYvMDIvYnVpbGQtYW4tYWktc3R1ZHktYXNzaXN0YW50LXdpdGgtY2xhdWRlLWNvZGUtYW5kcm9pZC1zdHVkaW8v",
    "title": "Build an AI Study Assistant with Claude Code + Android Studio",
    "author": "Riya Bansal",
    "description": "Imagine building a full Android app that generates AI questions, runs on a real backend, and uses a database without writing a single line of code. Claude Code, Anthropic’s terminal-based assistant, m...",
    "summary": "Imagine building a full Android app that generates AI questions, runs on a real backend, and uses a database without writing a single line of code. Claude Code, Anthropic’s terminal-based assistant, makes it possible to ship a working product from one clear prompt. This tutorial shows how to create an AI Study Assistant that ingests […]\nThe post Build an AI Study Assistant with Claude Code + Android Studio appeared first on Analytics Vidhya.",
    "datePublished": "2026-02-03T11:53:13.000Z",
    "url": "https://www.analyticsvidhya.com/blog/2026/02/build-an-ai-study-assistant-with-claude-code-android-studio/",
    "chatCompletionSummary": null,
    "tags": [
      "AI News",
      "Analytics Vidhya"
    ]
  },
  {
    "id": "aHR0cHM6Ly93d3cuYW5hbHl0aWNzdmlkaHlhLmNvbS9ibG9nLzIwMjYvMDIvaG93LXRvLWJ1aWxkLWFuLW9wZW5jbGF3LWFnZW50Lw==",
    "title": "How to Build an OpenClaw Agent in Less Than 10 Minutes",
    "author": "Riya Bansal.",
    "description": "OpenClaw is everywhere right now. People are talking about the platform and the kinds of agents you can build with it. But what is all this hype really about? Most AI assistants still stop at conversa...",
    "summary": "OpenClaw is everywhere right now. People are talking about the platform and the kinds of agents you can build with it. But what is all this hype really about? Most AI assistants still stop at conversation. They answer questions, forget context, and never actually take action. OpenClaw agents change that. Instead of living inside a […]\nThe post How to Build an OpenClaw Agent in Less Than 10 Minutes appeared first on Analytics Vidhya.",
    "datePublished": "2026-02-03T09:27:00.000Z",
    "url": "https://www.analyticsvidhya.com/blog/2026/02/how-to-build-an-openclaw-agent/",
    "chatCompletionSummary": null,
    "tags": [
      "AI News",
      "Analytics Vidhya"
    ]
  },
  {
    "id": "aHR0cHM6Ly93d3cubWFya3RlY2hwb3N0LmNvbS8yMDI2LzAyLzAyL2hvdy10by1idWlsZC1tdWx0aS1sYXllcmVkLWxsbS1zYWZldHktZmlsdGVycy10by1kZWZlbmQtYWdhaW5zdC1hZGFwdGl2ZS1wYXJhcGhyYXNlZC1hbmQtYWR2ZXJzYXJpYWwtcHJvbXB0LWF0dGFja3Mv",
    "title": "How to Build Multi-Layered LLM Safety Filters to Defend Against Adaptive, Paraphrased, and Adversarial Prompt Attacks",
    "author": "Asif Razzaq",
    "description": "In this tutorial, we build a robust, multi-layered safety filter designed to defend large language models against adaptive and paraphrased attacks. We combine semantic similarity analysis, rule-based ...",
    "summary": "In this tutorial, we build a robust, multi-layered safety filter designed to defend large language models against adaptive and paraphrased attacks. We combine semantic similarity analysis, rule-based pattern detection, LLM-driven intent classification, and anomaly detection to create a defense system that relies on no single point of failure. Also, we demonstrate how practical, production-style safety […]\nThe post How to Build Multi-Layered LLM Safety Filters to Defend Against Adaptive, Paraphrased, and Adversarial Prompt Attacks appeared first on MarkTechPost.",
    "datePublished": "2026-02-03T01:41:19.000Z",
    "url": "https://www.marktechpost.com/2026/02/02/how-to-build-multi-layered-llm-safety-filters-to-defend-against-adaptive-paraphrased-and-adversarial-prompt-attacks/",
    "chatCompletionSummary": null,
    "image": "https://s.w.org/images/core/emoji/16.0.1/72x72/1f534.png",
    "tags": [
      "AI News",
      "MarkTechPost"
    ]
  },
  {
    "id": "aHR0cHM6Ly9vcGVuYWkuY29tL2luZGV4L3NvcmEtZmVlZC1waGlsb3NvcGh5",
    "title": "The Sora feed philosophy",
    "author": "OpenAI",
    "description": "Discover the Sora feed philosophy—built to spark creativity, foster connections, and keep experiences safe with personalized recommendations, parental controls, and strong guardrails....",
    "summary": "Discover the Sora feed philosophy—built to spark creativity, foster connections, and keep experiences safe with personalized recommendations, parental controls, and strong guardrails.",
    "datePublished": "2026-02-03T00:00:00.000Z",
    "url": "https://openai.com/index/sora-feed-philosophy",
    "chatCompletionSummary": null,
    "image": "https://images.openai.com/blob/8b9658d3-5750-45j6-a4c4-7299c8515320/openai-logo.svg",
    "tags": [
      "AI News",
      "OpenAI"
    ]
  },
  {
    "id": "aHR0cHM6Ly93d3cud2lyZWQuY29tL3N0b3J5L3NwYWNleC1hY3F1aXJlcy14YWktZWxvbi1tdXNrLw==",
    "title": "Elon Musk Is Rolling xAI Into SpaceX—Creating the World’s Most Valuable Private Company",
    "author": "Maxwell Zeff",
    "description": "By fusing SpaceX and xAI—which acquired X last year—Elon Musk tightens his grip over technologies that shape national security, social media, and artificial intelligence....",
    "summary": "By fusing SpaceX and xAI—which acquired X last year—Elon Musk tightens his grip over technologies that shape national security, social media, and artificial intelligence.",
    "datePublished": "2026-02-02T23:07:19.000Z",
    "url": "https://www.wired.com/story/spacex-acquires-xai-elon-musk/",
    "chatCompletionSummary": null,
    "tags": [
      "AI News",
      "Wired AI"
    ]
  },
  {
    "id": "aHR0cHM6Ly90ZWNoY3J1bmNoLmNvbS8yMDI2LzAyLzAyL2Vsb24tbXVzay1zcGFjZXgtYWNxdWlyZXMteGFpLWRhdGEtY2VudGVycy1zcGFjZS1tZXJnZXIv",
    "title": "Elon Musk’s SpaceX officially acquires Elon Musk’s xAI, with plan to build data centers in space",
    "author": "Sean O'Kane",
    "description": "The merger creates the world's most valuable private company and paves the way for Musk to try and prove out the usefulness of space-based data centers....",
    "summary": "The merger creates the world's most valuable private company and paves the way for Musk to try and prove out the usefulness of space-based data centers.",
    "datePublished": "2026-02-02T22:21:57.000Z",
    "url": "https://techcrunch.com/2026/02/02/elon-musk-spacex-acquires-xai-data-centers-space-merger/",
    "chatCompletionSummary": null,
    "tags": [
      "AI News",
      "TechCrunch AI"
    ]
  },
  {
    "id": "aHR0cHM6Ly93d3cubWFya3RlY2hwb3N0LmNvbS8yMDI2LzAyLzAyL2dvb2dsZS1yZWxlYXNlcy1jb25kdWN0b3ItYS1jb250ZXh0LWRyaXZlbi1nZW1pbmktY2xpLWV4dGVuc2lvbi10aGF0LXN0b3Jlcy1rbm93bGVkZ2UtYXMtbWFya2Rvd24tYW5kLW9yY2hlc3RyYXRlcy1hZ2VudGljLXdvcmtmbG93cy8=",
    "title": "Google Releases Conductor: a context driven Gemini CLI extension that stores knowledge as Markdown and orchestrates agentic workflows",
    "author": "Michal Sutter",
    "description": "Google has introduced Conductor, an open source preview extension for Gemini CLI that turns AI code generation into a structured, context driven workflow. Conductor stores product knowledge, technical...",
    "summary": "Google has introduced Conductor, an open source preview extension for Gemini CLI that turns AI code generation into a structured, context driven workflow. Conductor stores product knowledge, technical decisions, and work plans as versioned Markdown inside the repository, then drives Gemini agents from those files instead of ad hoc chat prompts. From chat based coding […]\nThe post Google Releases Conductor: a context driven Gemini CLI extension that stores knowledge as Markdown and orchestrates agentic workflows appeared first on MarkTechPost.",
    "datePublished": "2026-02-02T21:49:31.000Z",
    "url": "https://www.marktechpost.com/2026/02/02/google-releases-conductor-a-context-driven-gemini-cli-extension-that-stores-knowledge-as-markdown-and-orchestrates-agentic-workflows/",
    "chatCompletionSummary": null,
    "tags": [
      "AI News",
      "MarkTechPost"
    ]
  },
  {
    "id": "aHR0cHM6Ly93d3cud2lyZWQuY29tL3N0b3J5L2hocy1pcy11c2luZy1haS10b29scy1mcm9tLXBhbGFudGlyLXRvLXRhcmdldC1kZWktYW5kLWdlbmRlci1pZGVvbG9neS1pbi1ncmFudHMv",
    "title": "HHS Is Using AI Tools From Palantir to Target ‘DEI’ and ‘Gender Ideology’ in Grants",
    "author": "Caroline Haskins",
    "description": "Since March of 2025, the Department of Health and Human Services has been using tools from Palantir and the startup Credal AI to weed out perceived alignment with “DEI” or “gender ideology.”...",
    "summary": "Since March of 2025, the Department of Health and Human Services has been using tools from Palantir and the startup Credal AI to weed out perceived alignment with “DEI” or “gender ideology.”",
    "datePublished": "2026-02-02T20:56:41.000Z",
    "url": "https://www.wired.com/story/hhs-is-using-ai-tools-from-palantir-to-target-dei-and-gender-ideology-in-grants/",
    "chatCompletionSummary": null,
    "tags": [
      "AI News",
      "Wired AI"
    ]
  },
  {
    "id": "aHR0cHM6Ly90ZWNoY3J1bmNoLmNvbS8yMDI2LzAyLzAyL3doYXQtc25vd2ZsYWtlcy1kZWFsLXdpdGgtb3BlbmFpLXRlbGxzLXVzLWFib3V0LXRoZS1lbnRlcnByaXNlLWFpLXJhY2Uv",
    "title": "What Snowflake’s deal with OpenAI tells us about the enterprise AI race",
    "author": "Rebecca Szkutak",
    "description": "Snowflake is the latest enterprise to sign multi-year deals with multiple AI companies in what could be a sign to come of a future trend....",
    "summary": "Snowflake is the latest enterprise to sign multi-year deals with multiple AI companies in what could be a sign to come of a future trend.",
    "datePublished": "2026-02-02T19:09:44.000Z",
    "url": "https://techcrunch.com/2026/02/02/what-snowflakes-deal-with-openai-tells-us-about-the-enterprise-ai-race/",
    "chatCompletionSummary": null,
    "tags": [
      "AI News",
      "TechCrunch AI"
    ]
  },
  {
    "id": "aHR0cHM6Ly90ZWNoY3J1bmNoLmNvbS8yMDI2LzAyLzAyL2ZpcmVmb3gtd2lsbC1zb29uLWxldC15b3UtYmxvY2stYWxsLW9mLWl0cy1nZW5lcmF0aXZlLWFpLWZlYXR1cmVzLw==",
    "title": "Firefox will soon let you block all of its generative AI features",
    "author": "Aisha Malik",
    "description": "Starting with Firefox 148 arriving later this month, users will find a new AI controls section within the desktop browser settings....",
    "summary": "Starting with Firefox 148 arriving later this month, users will find a new AI controls section within the desktop browser settings.",
    "datePublished": "2026-02-02T18:34:45.000Z",
    "url": "https://techcrunch.com/2026/02/02/firefox-will-soon-let-you-block-all-of-its-generative-ai-features/",
    "chatCompletionSummary": null,
    "tags": [
      "AI News",
      "TechCrunch AI"
    ]
  },
  {
    "id": "aHR0cHM6Ly93d3cubWFya3RlY2hwb3N0LmNvbS8yMDI2LzAyLzAyL3RoZS1zdGF0aXN0aWNhbC1jb3N0LW9mLXplcm8tcGFkZGluZy1pbi1jb252b2x1dGlvbmFsLW5ldXJhbC1uZXR3b3Jrcy1jbm5zLw==",
    "title": "The Statistical Cost of Zero Padding in Convolutional Neural Networks (CNNs)",
    "author": "Arham Islam",
    "description": "What is Zero Padding Zero padding is a technique used in convolutional neural networks where additional pixels with a value of zero are added around the borders of an image. This allows convolutional ...",
    "summary": "What is Zero Padding Zero padding is a technique used in convolutional neural networks where additional pixels with a value of zero are added around the borders of an image. This allows convolutional kernels to slide over edge pixels and helps control how much the spatial dimensions of the feature map shrink after convolution. Padding […]\nThe post The Statistical Cost of Zero Padding in Convolutional Neural Networks (CNNs) appeared first on MarkTechPost.",
    "datePublished": "2026-02-02T18:29:22.000Z",
    "url": "https://www.marktechpost.com/2026/02/02/the-statistical-cost-of-zero-padding-in-convolutional-neural-networks-cnns/",
    "chatCompletionSummary": null,
    "image": "https://www.marktechpost.com/wp-content/uploads/2026/02/image-2.png",
    "tags": [
      "AI News",
      "MarkTechPost"
    ]
  },
  {
    "id": "aHR0cHM6Ly90ZWNoY3J1bmNoLmNvbS8yMDI2LzAyLzAyL29wZW5haS1sYXVuY2hlcy1uZXctbWFjb3MtYXBwLWZvci1hZ2VudGljLWNvZGluZy8=",
    "title": "OpenAI launches new macOS app for agentic coding",
    "author": "Russell Brandom",
    "description": "OpenAI has released a new macOS app for Codex, integrating many of the agentic coding practices that have become popular since Codex launched last year....",
    "summary": "OpenAI has released a new macOS app for Codex, integrating many of the agentic coding practices that have become popular since Codex launched last year.",
    "datePublished": "2026-02-02T18:19:31.000Z",
    "url": "https://techcrunch.com/2026/02/02/openai-launches-new-macos-app-for-agentic-coding/",
    "chatCompletionSummary": null,
    "tags": [
      "AI News",
      "TechCrunch AI"
    ]
  },
  {
    "id": "aHR0cHM6Ly90ZWNoY3J1bmNoLmNvbS8yMDI2LzAyLzAyL3JpbmctYnJpbmdzLWl0cy1zZWFyY2gtcGFydHktZmVhdHVyZS1mb3ItZmluZGluZy1sb3N0LWRvZ3MtdG8tbm9uLXJpbmctY2FtZXJhLW93bmVycy8=",
    "title": "Ring brings its ‘Search Party’ feature for finding lost dogs to non-Ring camera owners",
    "author": "Sarah Perez",
    "description": "Ring's Search Party feature for finding lost dogs is now available across the U.S. — even if you don't own a Ring camera....",
    "summary": "Ring's Search Party feature for finding lost dogs is now available across the U.S. — even if you don't own a Ring camera.",
    "datePublished": "2026-02-02T15:33:45.000Z",
    "url": "https://techcrunch.com/2026/02/02/ring-brings-its-search-party-feature-for-finding-lost-dogs-to-non-ring-camera-owners/",
    "chatCompletionSummary": null,
    "tags": [
      "AI News",
      "TechCrunch AI"
    ]
  },
  {
    "id": "aHR0cHM6Ly90ZWNoY3J1bmNoLmNvbS8yMDI2LzAyLzAyL2NhcmJvbi1yb2JvdGljcy1idWlsdC1hbi1haS1tb2RlbC10aGF0LWRldGVjdHMtYW5kLWlkZW50aWZpZXMtcGxhbnRzLw==",
    "title": "Carbon Robotics built an AI model that detects and identifies plants ",
    "author": "Rebecca Szkutak",
    "description": "Carbon Robotics' Large Plant Model will allow farmers to kill new types of weeds without having to retrain the machines....",
    "summary": "Carbon Robotics' Large Plant Model will allow farmers to kill new types of weeds without having to retrain the machines.",
    "datePublished": "2026-02-02T15:00:00.000Z",
    "url": "https://techcrunch.com/2026/02/02/carbon-robotics-built-an-ai-model-that-detects-and-identifies-plants/",
    "chatCompletionSummary": null,
    "tags": [
      "AI News",
      "TechCrunch AI"
    ]
  },
  {
    "id": "aHR0cHM6Ly90ZWNoY3J1bmNoLmNvbS8yMDI2LzAyLzAyL2NvYWxpdGlvbi1kZW1hbmRzLWZlZGVyYWwtZ3Jvay1iYW4tb3Zlci1ub25jb25zZW5zdWFsLXNleHVhbC1jb250ZW50Lw==",
    "title": "Coalition demands federal Grok ban over nonconsensual sexual content",
    "author": "Rebecca Bellan",
    "description": "Nonprofits urge the U.S. government to suspend Grok in federal agencies after the xAI chatbot generated thousands of nonconsensual sexual images, raising national security and child safety concerns....",
    "summary": "Nonprofits urge the U.S. government to suspend Grok in federal agencies after the xAI chatbot generated thousands of nonconsensual sexual images, raising national security and child safety concerns.",
    "datePublished": "2026-02-02T15:00:00.000Z",
    "url": "https://techcrunch.com/2026/02/02/coalition-demands-federal-grok-ban-over-nonconsensual-sexual-content/",
    "chatCompletionSummary": null,
    "tags": [
      "AI News",
      "TechCrunch AI"
    ]
  },
  {
    "id": "aHR0cHM6Ly9uZXdzLm1pY3Jvc29mdC5jb20vc2lnbmFsbWFnYXppbmUvaXNzdWUvaXNzdWUtMDMvI3Jpc2hpLXN1bmFrLWludGVydmlldw==",
    "title": "From Signal magazine: Rishi Sunak on why leaders must drive AI from the top",
    "author": "stclarke",
    "description": "The post From Signal magazine: Rishi Sunak on why leaders must drive AI from the top appeared first on Source....",
    "summary": "The post From Signal magazine: Rishi Sunak on why leaders must drive AI from the top appeared first on Source.",
    "datePublished": "2026-02-02T14:58:27.000Z",
    "url": "https://news.microsoft.com/signalmagazine/issue/issue-03/#rishi-sunak-interview",
    "chatCompletionSummary": null,
    "tags": [
      "AI News",
      "Microsoft AI"
    ]
  },
  {
    "id": "aHR0cHM6Ly90ZWNoY3J1bmNoLmNvbS8yMDI2LzAyLzAyL2xpbnEtcmFpc2VzLTIwbS10by1lbmFibGUtYWktYXNzaXN0YW50cy10by1saXZlLXdpdGhpbi1tZXNzYWdpbmctYXBwcy8=",
    "title": "Linq raises $20M to enable AI assistants to live within messaging apps",
    "author": "Ram Iyer",
    "description": "Linq offers an API that lets  companies offer their AI assistants via iMessage, RCS, and SMS....",
    "summary": "Linq offers an API that lets  companies offer their AI assistants via iMessage, RCS, and SMS.",
    "datePublished": "2026-02-02T14:16:13.000Z",
    "url": "https://techcrunch.com/2026/02/02/linq-raises-20m-to-enable-ai-assistants-to-live-within-messaging-apps/",
    "chatCompletionSummary": null,
    "tags": [
      "AI News",
      "TechCrunch AI"
    ]
  },
  {
    "id": "aHR0cHM6Ly93d3cuYW5hbHl0aWNzdmlkaHlhLmNvbS9ibG9nLzIwMjYvMDIvcHJvbXB0LWluamVjdGlvbi1hdHRhY2tzLWluLWxsbS8=",
    "title": "Prompt Injection Attack: What They Are and How to Prevent Them",
    "author": "Janvi Kumari",
    "description": "Large language models like ChatGPT, Claude are made to follow user instructions. But following user instructions indiscriminately creates a serious weakness. Attackers can slip in hidden commands to m...",
    "summary": "Large language models like ChatGPT, Claude are made to follow user instructions. But following user instructions indiscriminately creates a serious weakness. Attackers can slip in hidden commands to manipulate how these systems behave, a technique called prompt injection, much like SQL injection in databases. This can lead to harmful or misleading outputs if not handled […]\nThe post Prompt Injection Attack: What They Are and How to Prevent Them appeared first on Analytics Vidhya.",
    "datePublished": "2026-02-02T13:22:19.000Z",
    "url": "https://www.analyticsvidhya.com/blog/2026/02/prompt-injection-attacks-in-llm/",
    "chatCompletionSummary": null,
    "tags": [
      "AI News",
      "Analytics Vidhya"
    ]
  },
  {
    "id": "aHR0cHM6Ly93d3cuYW5hbHl0aWNzdmlkaHlhLmNvbS9ibG9nLzIwMjYvMDIvYWlydGVsLWZyZWUtYWRvYmUtZXhwcmVzcy1wcmVtaXVtLW9mZmVyLw==",
    "title": "Big Offer for Airtel Users: Free Access to Adobe Express Premium Worth Rs 4,000",
    "author": "Sarthak Dogra",
    "description": "Historically, India’s telecom majors have been among the frontrunners to boost the adoption of new-age digital services. With a similar deal made recently between two bigwigs, Airtel now offers its 36...",
    "summary": "Historically, India’s telecom majors have been among the frontrunners to boost the adoption of new-age digital services. With a similar deal made recently between two bigwigs, Airtel now offers its 360 million users across the country free access to Adobe Express Premium. Note that this is a global-first move and will clearly prove to be […]\nThe post Big Offer for Airtel Users: Free Access to Adobe Express Premium Worth Rs 4,000 appeared first on Analytics Vidhya.",
    "datePublished": "2026-02-02T10:39:36.000Z",
    "url": "https://www.analyticsvidhya.com/blog/2026/02/airtel-free-adobe-express-premium-offer/",
    "chatCompletionSummary": null,
    "tags": [
      "AI News",
      "Analytics Vidhya"
    ]
  },
  {
    "id": "aHR0cHM6Ly9uZXdzLm1pdC5lZHUvMjAyNi9ob3ctZ2VuZXJhdGl2ZS1haS1jYW4taGVscC1zY2llbnRpc3RzLXN5bnRoZXNpemUtY29tcGxleC1tYXRlcmlhbHMtMDIwMg==",
    "title": "How generative AI can help scientists synthesize complex materials",
    "author": "Zach Winn | MIT News",
    "description": "MIT researchers’ DiffSyn model offers recipes for synthesizing new materials, enabling faster experimentation and a shorter journey from hypothesis to use....",
    "summary": "MIT researchers’ DiffSyn model offers recipes for synthesizing new materials, enabling faster experimentation and a shorter journey from hypothesis to use.",
    "datePublished": "2026-02-02T10:00:00.000Z",
    "url": "https://news.mit.edu/2026/how-generative-ai-can-help-scientists-synthesize-complex-materials-0202",
    "chatCompletionSummary": null,
    "image": "https://news.mit.edu/sites/default/files/styles/news_article__cover_image__original/public/images/202601/MIT-DiffSyn-01.jpg?itok=7TQIoUod",
    "tags": [
      "AI News",
      "MIT News"
    ]
  },
  {
    "id": "aHR0cHM6Ly90ZWNoY3J1bmNoLmNvbS8yMDI2LzAyLzAyL2FpLW5vdGV0YWtlci1oYXJkd2FyZS1kZXZpY2VzLXBpbnMtcGVuZGFudHMtcmVjb3JkLXRyYW5zY3JpYmUv",
    "title": "These AI notetaking devices can help you record and transcribe your meetings",
    "author": "Ivan Mehta",
    "description": "These physical notetakers transcribe audio and give users summaries and action items of meetings using AI. Some even offer live translation....",
    "summary": "These physical notetakers transcribe audio and give users summaries and action items of meetings using AI. Some even offer live translation.",
    "datePublished": "2026-02-02T08:00:00.000Z",
    "url": "https://techcrunch.com/2026/02/02/ai-notetaker-hardware-devices-pins-pendants-record-transcribe/",
    "chatCompletionSummary": null,
    "tags": [
      "AI News",
      "TechCrunch AI"
    ]
  },
  {
    "id": "aHR0cHM6Ly93d3cubWFya3RlY2hwb3N0LmNvbS8yMDI2LzAyLzAxL252aWRpYS1haS1icmluZ3MtbmVtb3Ryb24tMy1uYW5vLTMwYi10by1udmZwNC13aXRoLXF1YW50aXphdGlvbi1hd2FyZS1kaXN0aWxsYXRpb24tcWFkLWZvci1lZmZpY2llbnQtcmVhc29uaW5nLWluZmVyZW5jZS8=",
    "title": "NVIDIA AI Brings Nemotron-3-Nano-30B to NVFP4 with Quantization Aware Distillation (QAD) for Efficient Reasoning Inference",
    "author": "Asif Razzaq",
    "description": "NVIDIA has released Nemotron-Nano-3-30B-A3B-NVFP4, a production checkpoint that runs a 30B parameter reasoning model in 4 bit NVFP4 format while keeping accuracy close to its BF16 baseline. The model ...",
    "summary": "NVIDIA has released Nemotron-Nano-3-30B-A3B-NVFP4, a production checkpoint that runs a 30B parameter reasoning model in 4 bit NVFP4 format while keeping accuracy close to its BF16 baseline. The model combines a hybrid Mamba2 Transformer Mixture of Experts architecture with a Quantization Aware Distillation (QAD) recipe designed specifically for NVFP4 deployment. Overall, it is an ultra-efficient […]\nThe post NVIDIA AI Brings Nemotron-3-Nano-30B to NVFP4 with Quantization Aware Distillation (QAD) for Efficient Reasoning Inference appeared first on MarkTechPost.",
    "datePublished": "2026-02-02T07:26:12.000Z",
    "url": "https://www.marktechpost.com/2026/02/01/nvidia-ai-brings-nemotron-3-nano-30b-to-nvfp4-with-quantization-aware-distillation-qad-for-efficient-reasoning-inference/",
    "chatCompletionSummary": null,
    "image": "https://www.marktechpost.com/wp-content/uploads/2026/02/G_w1-DBXUAU2mwv-1-scaled.jpeg",
    "tags": [
      "AI News",
      "MarkTechPost"
    ]
  },
  {
    "id": "aHR0cHM6Ly9vcGVuYWkuY29tL2luZGV4L3Nub3dmbGFrZS1wYXJ0bmVyc2hpcA==",
    "title": "Snowflake and OpenAI partner to bring frontier intelligence to enterprise data",
    "author": "OpenAI",
    "description": "OpenAI and Snowflake partner in a $200M agreement to bring frontier intelligence into enterprise data, enabling AI agents and insights directly in Snowflake....",
    "summary": "OpenAI and Snowflake partner in a $200M agreement to bring frontier intelligence into enterprise data, enabling AI agents and insights directly in Snowflake.",
    "datePublished": "2026-02-02T06:00:00.000Z",
    "url": "https://openai.com/index/snowflake-partnership",
    "chatCompletionSummary": null,
    "image": "https://images.openai.com/blob/8b9658d3-5750-45j6-a4c4-7299c8515320/openai-logo.svg",
    "tags": [
      "AI News",
      "OpenAI"
    ]
  },
  {
    "id": "aHR0cHM6Ly93d3cubWFya3RlY2hwb3N0LmNvbS8yMDI2LzAyLzAxL2hvdy10by1idWlsZC1tZW1vcnktZHJpdmVuLWFpLWFnZW50cy13aXRoLXNob3J0LXRlcm0tbG9uZy10ZXJtLWFuZC1lcGlzb2RpYy1tZW1vcnkv",
    "title": "How to Build Memory-Driven AI Agents with Short-Term, Long-Term, and Episodic Memory",
    "author": "Asif Razzaq",
    "description": "In this tutorial, we build a memory-engineering layer for an AI agent that separates short-term working context from long-term vector memory and episodic traces. We implement semantic storage using em...",
    "summary": "In this tutorial, we build a memory-engineering layer for an AI agent that separates short-term working context from long-term vector memory and episodic traces. We implement semantic storage using embeddings and FAISS for fast similarity search, and we add episodic memory that captures what worked, what failed, and why, so the agent can reuse successful […]\nThe post How to Build Memory-Driven AI Agents with Short-Term, Long-Term, and Episodic Memory appeared first on MarkTechPost.",
    "datePublished": "2026-02-02T04:40:03.000Z",
    "url": "https://www.marktechpost.com/2026/02/01/how-to-build-memory-driven-ai-agents-with-short-term-long-term-and-episodic-memory/",
    "chatCompletionSummary": null,
    "image": "https://s.w.org/images/core/emoji/16.0.1/72x72/2705.png",
    "tags": [
      "AI News",
      "MarkTechPost"
    ]
  },
  {
    "id": "aHR0cHM6Ly93d3cubWFya3RlY2hwb3N0LmNvbS8yMDI2LzAyLzAxL2EtY29kaW5nLWFuZC1leHBlcmltZW50YWwtYW5hbHlzaXMtb2YtZGVjZW50cmFsaXplZC1mZWRlcmF0ZWQtbGVhcm5pbmctd2l0aC1nb3NzaXAtcHJvdG9jb2xzLWFuZC1kaWZmZXJlbnRpYWwtcHJpdmFjeS8=",
    "title": "A Coding and Experimental Analysis of Decentralized Federated Learning with Gossip Protocols and Differential Privacy",
    "author": "Asif Razzaq",
    "description": "In this tutorial, we explore how federated learning behaves when the traditional centralized aggregation server is removed and replaced with a fully decentralized, peer-to-peer gossip mechanism. We im...",
    "summary": "In this tutorial, we explore how federated learning behaves when the traditional centralized aggregation server is removed and replaced with a fully decentralized, peer-to-peer gossip mechanism. We implement both centralized FedAvg and decentralized Gossip Federated Learning from scratch and introduce client-side differential privacy by injecting calibrated noise into local model updates. By running controlled experiments […]\nThe post A Coding and Experimental Analysis of Decentralized Federated Learning with Gossip Protocols and Differential Privacy appeared first on MarkTechPost.",
    "datePublished": "2026-02-02T01:14:35.000Z",
    "url": "https://www.marktechpost.com/2026/02/01/a-coding-and-experimental-analysis-of-decentralized-federated-learning-with-gossip-protocols-and-differential-privacy/",
    "chatCompletionSummary": null,
    "tags": [
      "AI News",
      "MarkTechPost"
    ]
  },
  {
    "id": "aHR0cHM6Ly9vcGVuYWkuY29tL2luZGV4L2ludHJvZHVjaW5nLXRoZS1jb2RleC1hcHA=",
    "title": "Introducing the Codex app",
    "author": "OpenAI",
    "description": "Introducing the Codex app for macOS—a command center for AI coding and software development with multiple agents, parallel workflows, and long-running tasks....",
    "summary": "Introducing the Codex app for macOS—a command center for AI coding and software development with multiple agents, parallel workflows, and long-running tasks.",
    "datePublished": "2026-02-02T00:00:00.000Z",
    "url": "https://openai.com/index/introducing-the-codex-app",
    "chatCompletionSummary": null,
    "image": "https://images.openai.com/blob/8b9658d3-5750-45j6-a4c4-7299c8515320/openai-logo.svg",
    "tags": [
      "AI News",
      "OpenAI"
    ]
  },
  {
    "id": "aHR0cHM6Ly90ZWNoY3J1bmNoLmNvbS8yMDI2LzAyLzAxL2FpLWxheW9mZnMtb3ItYWktd2FzaGluZy8=",
    "title": "AI layoffs or ‘AI-washing’?",
    "author": "Anthony Ha",
    "description": "How many of the companies with recent layoffs are just using AI as an excuse?...",
    "summary": "How many of the companies with recent layoffs are just using AI as an excuse?",
    "datePublished": "2026-02-01T22:15:53.000Z",
    "url": "https://techcrunch.com/2026/02/01/ai-layoffs-or-ai-washing/",
    "chatCompletionSummary": null,
    "tags": [
      "AI News",
      "TechCrunch AI"
    ]
  },
  {
    "id": "aHR0cHM6Ly90ZWNoY3J1bmNoLmNvbS8yMDI2LzAyLzAxL3doeS10ZXRoZXJzLWNlby1pcy1ldmVyeXdoZXJlLXJpZ2h0LW5vdy8=",
    "title": "Why Tether’s CEO is everywhere right now",
    "author": "Connie Loizos",
    "description": "For years, Tether's CEO avoided the United States, watching from offshore as regulators circled and prosecutors investigated. Those days are over....",
    "summary": "For years, Tether's CEO avoided the United States, watching from offshore as regulators circled and prosecutors investigated. Those days are over.",
    "datePublished": "2026-02-01T20:32:21.000Z",
    "url": "https://techcrunch.com/2026/02/01/why-tethers-ceo-is-everywhere-right-now/",
    "chatCompletionSummary": null,
    "tags": [
      "AI News",
      "TechCrunch AI"
    ]
  },
  {
    "id": "aHR0cHM6Ly90ZWNoY3J1bmNoLmNvbS8yMDI2LzAyLzAxL2luZG9uZXNpYS1jb25kaXRpb25hbGx5LWxpZnRzLWJhbi1vbi1ncm9rLw==",
    "title": "Indonesia ‘conditionally’ lifts ban on Grok",
    "author": "Anthony Ha",
    "description": "Indonesia has followed Malaysia and the Philippines in lifting a ban on xAI’s chatbot Grok....",
    "summary": "Indonesia has followed Malaysia and the Philippines in lifting a ban on xAI’s chatbot Grok.",
    "datePublished": "2026-02-01T17:20:00.000Z",
    "url": "https://techcrunch.com/2026/02/01/indonesia-conditionally-lifts-ban-on-grok/",
    "chatCompletionSummary": null,
    "tags": [
      "AI News",
      "TechCrunch AI"
    ]
  },
  {
    "id": "aHR0cHM6Ly90ZWNoY3J1bmNoLmNvbS8yMDI2LzAyLzAxL2luZGlhLW9mZmVycy16ZXJvLXRheGVzLXRocm91Z2gtMjA0Ny10by1sdXJlLWdsb2JhbC1haS13b3JrbG9hZHMv",
    "title": "India offers zero taxes through 2047 to lure global AI workloads",
    "author": "Jagmeet Singh",
    "description": "New Delhi's latest move comes as Amazon, Google, and Microsoft expand data center investments in India....",
    "summary": "New Delhi's latest move comes as Amazon, Google, and Microsoft expand data center investments in India.",
    "datePublished": "2026-02-01T16:30:00.000Z",
    "url": "https://techcrunch.com/2026/02/01/india-offers-zero-taxes-through-2047-to-lure-global-ai-workloads/",
    "chatCompletionSummary": null,
    "tags": [
      "AI News",
      "TechCrunch AI"
    ]
  },
  {
    "id": "aHR0cHM6Ly90ZWNoY3J1bmNoLmNvbS8yMDI2LzAyLzAxL2J5ZS1ieWUtY29ycG9yYXRlLWNvbmdsb21lcmF0ZXMtaGVsbG8tcGVyc29uYWwtY29uZ2xvbWVyYXRlcy8=",
    "title": "Bye-bye, corporate conglomerates. Hello personal conglomerates.",
    "author": "Tim De Chant",
    "description": "Elon Musk's reported merging of SpaceX, xAI, and Tesla harkens back to the heyday of General Electric — or maybe the robber barons of the Gilded Age....",
    "summary": "Elon Musk's reported merging of SpaceX, xAI, and Tesla harkens back to the heyday of General Electric — or maybe the robber barons of the Gilded Age.",
    "datePublished": "2026-02-01T15:39:08.000Z",
    "url": "https://techcrunch.com/2026/02/01/bye-bye-corporate-conglomerates-hello-personal-conglomerates/",
    "chatCompletionSummary": null,
    "tags": [
      "AI News",
      "TechCrunch AI"
    ]
  },
  {
    "id": "aHR0cHM6Ly93d3cuYW5hbHl0aWNzdmlkaHlhLmNvbS9ibG9nLzIwMjYvMDIvZ3JhZGllbnQtYm9vc3RpbmctdnMtYWRhYm9vc3QtdnMteGdib29zdC12cy1jYXRib29zdC12cy1saWdodGdibS8=",
    "title": "Gradient Boosting vs AdaBoost vs XGBoost vs CatBoost vs LightGBM: Finding the Best Gradient Boosting Method",
    "author": "Janvi Kumari",
    "description": "One of the best-performing algorithms in machine learning is the boosting algorithm. These are characterised by good predictive abilities and accuracy. All the methods of gradient boosting are based o...",
    "summary": "One of the best-performing algorithms in machine learning is the boosting algorithm. These are characterised by good predictive abilities and accuracy. All the methods of gradient boosting are based on a universal notion. They get to learn through the errors of the former models. Each new model is aimed at correcting the previous mistakes. This […]\nThe post Gradient Boosting vs AdaBoost vs XGBoost vs CatBoost vs LightGBM: Finding the Best Gradient Boosting Method appeared first on Analytics Vidhya.",
    "datePublished": "2026-02-01T00:13:35.000Z",
    "url": "https://www.analyticsvidhya.com/blog/2026/02/gradient-boosting-vs-adaboost-vs-xgboost-vs-catboost-vs-lightgbm/",
    "chatCompletionSummary": null,
    "tags": [
      "AI News",
      "Analytics Vidhya"
    ]
  },
  {
    "id": "aHR0cHM6Ly93d3cuYW5hbHl0aWNzdmlkaHlhLmNvbS9ibG9nLzIwMjYvMDIvbW9sdGJvb2stZm9yLW9wZW5jbGF3LWFnZW50cy8=",
    "title": "Moltbook: Where Your AI Agent Goes to Socialize",
    "author": "Nitika Sharma",
    "description": "In late 2025, an open-source project called Clawdbot was released. Built by Peter Steinberger, it was designed to be a practical personal AI assistant: not a chatbot, but a system that could actually ...",
    "summary": "In late 2025, an open-source project called Clawdbot was released. Built by Peter Steinberger, it was designed to be a practical personal AI assistant: not a chatbot, but a system that could actually do things. As it evolved, Clawdbot was renamed twice. First to Moltbot, and then to OpenClaw. You can run it on your own machine, connect it to email, files, APIs, and […]\nThe post Moltbook: Where Your AI Agent Goes to Socialize appeared first on Analytics Vidhya.",
    "datePublished": "2026-01-31T22:49:21.000Z",
    "url": "https://www.analyticsvidhya.com/blog/2026/02/moltbook-for-openclaw-agents/",
    "chatCompletionSummary": null,
    "tags": [
      "AI News",
      "Analytics Vidhya"
    ]
  },
  {
    "id": "aHR0cHM6Ly90ZWNoY3J1bmNoLmNvbS8yMDI2LzAxLzMxL252aWRpYS1jZW8tcHVzaGVzLWJhY2stYWdhaW5zdC1yZXBvcnQtdGhhdC1oaXMtY29tcGFueXMtMTAwYi1vcGVuYWktaW52ZXN0bWVudC1oYXMtc3RhbGxlZC8=",
    "title": "Nvidia CEO pushes back against report that his company’s $100B OpenAI investment has stalled",
    "author": "Anthony Ha",
    "description": "Nvidia CEO Jensen Huang said that a recent report of friction between his company and OpenAI was “nonsense.”...",
    "summary": "Nvidia CEO Jensen Huang said that a recent report of friction between his company and OpenAI was “nonsense.”",
    "datePublished": "2026-01-31T17:54:12.000Z",
    "url": "https://techcrunch.com/2026/01/31/nvidia-ceo-pushes-back-against-report-that-his-companys-100b-openai-investment-has-stalled/",
    "chatCompletionSummary": null,
    "tags": [
      "AI News",
      "TechCrunch AI"
    ]
  },
  {
    "id": "aHR0cHM6Ly93d3cuYW5hbHl0aWNzdmlkaHlhLmNvbS9ibG9nLzIwMjYvMDEvbWFjaGluZS1sZWFybmluZy1wcm9qZWN0LW9uLWFtYXpvbi1zYWxlcy1kYXRhLXVzaW5nLXB5dGhvbi8=",
    "title": "End-to-End Machine Learning Project on Amazon Sales Data Using Python ",
    "author": "Vipin Vashisth",
    "description": "Machine learning projects work best when they connect theory to real business outcomes. In e-commerce, that means better revenue, smoother operations, and happier customers, all driven by data. By wor...",
    "summary": "Machine learning projects work best when they connect theory to real business outcomes. In e-commerce, that means better revenue, smoother operations, and happier customers, all driven by data. By working with realistic datasets, practitioners learn how models turn patterns into decisions that actually matter. This article walks through a full machine learning workflow using an […]\nThe post End-to-End Machine Learning Project on Amazon Sales Data Using Python  appeared first on Analytics Vidhya.",
    "datePublished": "2026-01-31T17:48:56.000Z",
    "url": "https://www.analyticsvidhya.com/blog/2026/01/machine-learning-project-on-amazon-sales-data-using-python/",
    "chatCompletionSummary": null,
    "tags": [
      "AI News",
      "Analytics Vidhya"
    ]
  },
  {
    "id": "aHR0cHM6Ly93d3cud2lyZWQuY29tL3N0b3J5L3NlY3VyaXR5LW5ld3MtdGhpcy13ZWVrLWplZmZyZXktZXBzdGVpbi1oYWQtYS1wZXJzb25hbC1oYWNrZXItaW5mb3JtYW50LWNsYWltcy8=",
    "title": "Jeffrey Epstein Had a ‘Personal Hacker,’ Informant Claims",
    "author": "Lily Hay Newman, Matt Burgess, Andy Greenberg",
    "description": "Plus: AI agent OpenClaw gives cybersecurity experts the willies, China executes 11 scam compound bosses, a $40 million crypto theft has an unexpected alleged culprit, and more....",
    "summary": "Plus: AI agent OpenClaw gives cybersecurity experts the willies, China executes 11 scam compound bosses, a $40 million crypto theft has an unexpected alleged culprit, and more.",
    "datePublished": "2026-01-31T11:30:00.000Z",
    "url": "https://www.wired.com/story/security-news-this-week-jeffrey-epstein-had-a-personal-hacker-informant-claims/",
    "chatCompletionSummary": null,
    "tags": [
      "AI News",
      "Wired AI"
    ]
  },
  {
    "id": "aHR0cHM6Ly93d3cubWFya3RlY2hwb3N0LmNvbS8yMDI2LzAxLzMwL3JvYmJ5YW50LW9wZW4tc291cmNlcy1saW5nYm90LXdvcmxkLWEtcmVhbC10aW1lLXdvcmxkLW1vZGVsLWZvci1pbnRlcmFjdGl2ZS1zaW11bGF0aW9uLWFuZC1lbWJvZGllZC1haS8=",
    "title": "Robbyant Open Sources LingBot World: a Real Time World Model for Interactive Simulation and Embodied AI",
    "author": "Asif Razzaq",
    "description": "Robbyant, the embodied AI unit inside Ant Group, has open sourced LingBot-World, a large scale world model that turns video generation into an interactive simulator for embodied agents, autonomous dri...",
    "summary": "Robbyant, the embodied AI unit inside Ant Group, has open sourced LingBot-World, a large scale world model that turns video generation into an interactive simulator for embodied agents, autonomous driving and games. The system is designed to render controllable environments with high visual fidelity, strong dynamics and long temporal horizons, while staying responsive enough for […]\nThe post Robbyant Open Sources LingBot World: a Real Time World Model for Interactive Simulation and Embodied AI appeared first on MarkTechPost.",
    "datePublished": "2026-01-31T01:53:19.000Z",
    "url": "https://www.marktechpost.com/2026/01/30/robbyant-open-sources-lingbot-world-a-real-time-world-model-for-interactive-simulation-and-embodied-ai/",
    "chatCompletionSummary": null,
    "image": "https://www.marktechpost.com/wp-content/uploads/2026/01/Screenshot-2026-01-30-at-5.41.01-PM-1.png",
    "tags": [
      "AI News",
      "MarkTechPost"
    ]
  },
  {
    "id": "aHR0cHM6Ly90ZWNoY3J1bmNoLmNvbS8yMDI2LzAxLzMwL3BoeXNpY2FsLWludGVsbGlnZW5jZS1zdHJpcGUtdmV0ZXJhbi1sYWNoeS1ncm9vbXMtbGF0ZXN0LWJldC1pcy1idWlsZGluZy1zaWxpY29uLXZhbGxleXMtYnV6emllc3Qtcm9ib3QtYnJhaW5zLw==",
    "title": "A peek inside Physical Intelligence, the startup building Silicon Valley’s buzziest robot brains",
    "author": "Connie Loizos",
    "description": "If co-founder Lachy Groom has any doubts, he doesn’t show it. He’s working with people who've been working on this problem for decades and who believe the timing is finally right, which is all he need...",
    "summary": "If co-founder Lachy Groom has any doubts, he doesn’t show it. He’s working with people who've been working on this problem for decades and who believe the timing is finally right, which is all he needs to know.",
    "datePublished": "2026-01-31T00:09:54.000Z",
    "url": "https://techcrunch.com/2026/01/30/physical-intelligence-stripe-veteran-lachy-grooms-latest-bet-is-building-silicon-valleys-buzziest-robot-brains/",
    "chatCompletionSummary": null,
    "tags": [
      "AI News",
      "TechCrunch AI"
    ]
  },
  {
    "id": "aHR0cHM6Ly93d3cubWFya3RlY2hwb3N0LmNvbS8yMDI2LzAxLzMwL2FpMi1yZWxlYXNlcy1zZXJhLXNvZnQtdmVyaWZpZWQtY29kaW5nLWFnZW50cy1idWlsdC13aXRoLXN1cGVydmlzZWQtdHJhaW5pbmctb25seS1mb3ItcHJhY3RpY2FsLXJlcG9zaXRvcnktbGV2ZWwtYXV0b21hdGlvbi13b3JrZmxvd3Mv",
    "title": "AI2 Releases SERA, Soft Verified Coding Agents Built with Supervised Training Only for Practical Repository Level Automation Workflows",
    "author": "Asif Razzaq",
    "description": "Allen Institute for AI (AI2) Researchers introduce SERA, Soft Verified Efficient Repository Agents, as a coding agent family that aims to match much larger closed systems using only supervised trainin...",
    "summary": "Allen Institute for AI (AI2) Researchers introduce SERA, Soft Verified Efficient Repository Agents, as a coding agent family that aims to match much larger closed systems using only supervised training and synthetic trajectories. What is SERA? SERA is the first release in AI2’s Open Coding Agents series. The flagship model, SERA-32B, is built on the […]\nThe post AI2 Releases SERA, Soft Verified Coding Agents Built with Supervised Training Only for Practical Repository Level Automation Workflows appeared first on MarkTechPost.",
    "datePublished": "2026-01-30T22:53:51.000Z",
    "url": "https://www.marktechpost.com/2026/01/30/ai2-releases-sera-soft-verified-coding-agents-built-with-supervised-training-only-for-practical-repository-level-automation-workflows/",
    "chatCompletionSummary": null,
    "image": "https://www.marktechpost.com/wp-content/uploads/2026/01/Screenshot-2026-01-30-at-2.46.19-PM-1.png",
    "tags": [
      "AI News",
      "MarkTechPost"
    ]
  },
  {
    "id": "aHR0cHM6Ly9uZXdzLm1pdC5lZHUvMjAyNi9waGlsb3NvcGhpY2FsLXB1enpsZS1yYXRpb25hbC1hcnRpZmljaWFsLWludGVsbGlnZW5jZS0wMTMw",
    "title": "The philosophical puzzle of rational artificial intelligence",
    "author": "Amanda Diehl | MIT Schwarzman College of Computing",
    "description": "As AI technology advances, a new interdisciplinary course seeks to equip students with foundational critical thinking skills in computing....",
    "summary": "As AI technology advances, a new interdisciplinary course seeks to equip students with foundational critical thinking skills in computing.",
    "datePublished": "2026-01-30T21:50:00.000Z",
    "url": "https://news.mit.edu/2026/philosophical-puzzle-rational-artificial-intelligence-0130",
    "chatCompletionSummary": null,
    "image": "https://news.mit.edu/sites/default/files/styles/news_article__cover_image__original/public/images/202601/Leslie-Kaelbling-MIT-00.jpg?itok=Mx-0HAqW",
    "tags": [
      "AI News",
      "MIT News"
    ]
  },
  {
    "id": "aHR0cHM6Ly93d3cubWFya3RlY2hwb3N0LmNvbS8yMDI2LzAxLzMwL2EtY29kaW5nLWltcGxlbWVudGF0aW9uLXRvLXRyYWluaW5nLW9wdGltaXppbmctZXZhbHVhdGluZy1hbmQtaW50ZXJwcmV0aW5nLWtub3dsZWRnZS1ncmFwaC1lbWJlZGRpbmdzLXdpdGgtcHlrZWVuLw==",
    "title": "A Coding Implementation to Training, Optimizing, Evaluating, and Interpreting Knowledge Graph Embeddings with PyKEEN",
    "author": "Asif Razzaq",
    "description": "In this tutorial, we walk through an end-to-end, advanced workflow for knowledge graph embeddings using PyKEEN, actively exploring how modern embedding models are trained, evaluated, optimized, and in...",
    "summary": "In this tutorial, we walk through an end-to-end, advanced workflow for knowledge graph embeddings using PyKEEN, actively exploring how modern embedding models are trained, evaluated, optimized, and interpreted in practice. We start by understanding the structure of a real knowledge graph dataset, then systematically train and compare multiple embedding models, tune their hyperparameters, and analyze […]\nThe post A Coding Implementation to Training, Optimizing, Evaluating, and Interpreting Knowledge Graph Embeddings with PyKEEN appeared first on MarkTechPost.",
    "datePublished": "2026-01-30T21:18:32.000Z",
    "url": "https://www.marktechpost.com/2026/01/30/a-coding-implementation-to-training-optimizing-evaluating-and-interpreting-knowledge-graph-embeddings-with-pykeen/",
    "chatCompletionSummary": null,
    "tags": [
      "AI News",
      "MarkTechPost"
    ]
  },
  {
    "id": "aHR0cHM6Ly93d3cud2lyZWQuY29tL3N0b3J5L2dvb2dsZS1jaHJvbWUtYXV0by1icm93c2UtaGFuZHMtb24v",
    "title": "I Let Google’s ‘Auto Browse’ AI Agent Take Over Chrome. It Didn’t Quite Click",
    "author": "Reece Rogers",
    "description": "Auto Browse can shop for clothes, plan a trip, and buy tickets for you. Or at least, that’s the idea....",
    "summary": "Auto Browse can shop for clothes, plan a trip, and buy tickets for you. Or at least, that’s the idea.",
    "datePublished": "2026-01-30T20:41:49.000Z",
    "url": "https://www.wired.com/story/google-chrome-auto-browse-hands-on/",
    "chatCompletionSummary": null,
    "tags": [
      "AI News",
      "Wired AI"
    ]
  },
  {
    "id": "aHR0cHM6Ly93d3cuYW5hbHl0aWNzdmlkaHlhLmNvbS9ibG9nLzIwMjYvMDEvamVlLXByZXBhcmF0aW9uLXdpdGgtZ2VtaW5pLXRvcC1wcm9tcHRzLw==",
    "title": "5 Gemini Prompts for JEE Preparation",
    "author": "Sarthak Dogra",
    "description": "Hot take – just like the Internet era, Google is leading the AI revolution. While there are many AI solutions out there, almost none of them integrate with the daily lives of users as deeply as Google...",
    "summary": "Hot take – just like the Internet era, Google is leading the AI revolution. While there are many AI solutions out there, almost none of them integrate with the daily lives of users as deeply as Google’s AI ecosystem. Case in point: the tech giant has now partnered with PhysicsWallah and Career360 and come up […]\nThe post 5 Gemini Prompts for JEE Preparation appeared first on Analytics Vidhya.",
    "datePublished": "2026-01-30T11:58:49.000Z",
    "url": "https://www.analyticsvidhya.com/blog/2026/01/jee-preparation-with-gemini-top-prompts/",
    "chatCompletionSummary": null,
    "tags": [
      "AI News",
      "Analytics Vidhya"
    ]
  },
  {
    "id": "aHR0cHM6Ly93d3cuYW5hbHl0aWNzdmlkaHlhLmNvbS9ibG9nLzIwMjYvMDEvbGxtLWludGVydmlldy1xdWVzdGlvbnMtYW5kLWFuc3dlcnMv",
    "title": "20 LLM Questions You’ll See Everywhere in 2026",
    "author": "Vasu Deo Sankrityayan",
    "description": "LLMs aren’t limited to AI and related fields! They’re powering almost every tech, and thereby is one of the most asked about topics in interviews. This makes it essential to have a surface level famil...",
    "summary": "LLMs aren’t limited to AI and related fields! They’re powering almost every tech, and thereby is one of the most asked about topics in interviews. This makes it essential to have a surface level familiarity of the technology. This article is designed to mirror how LLMs show up in real interviews. We’ll start from first […]\nThe post 20 LLM Questions You’ll See Everywhere in 2026 appeared first on Analytics Vidhya.",
    "datePublished": "2026-01-30T11:53:09.000Z",
    "url": "https://www.analyticsvidhya.com/blog/2026/01/llm-interview-questions-and-answers/",
    "chatCompletionSummary": null,
    "tags": [
      "AI News",
      "Analytics Vidhya"
    ]
  },
  {
    "id": "aHR0cHM6Ly93d3cubWFya3RlY2hwb3N0LmNvbS8yMDI2LzAxLzMwL21pY3Jvc29mdC11bnZlaWxzLW1haWEtMjAwLWFuLWZwNC1hbmQtZnA4LW9wdGltaXplZC1haS1pbmZlcmVuY2UtYWNjZWxlcmF0b3ItZm9yLWF6dXJlLWRhdGFjZW50ZXJzLw==",
    "title": "Microsoft Unveils Maia 200, An FP4 and FP8 Optimized AI Inference Accelerator for Azure Datacenters",
    "author": "Michal Sutter",
    "description": "Maia 200 is Microsoft’s new in house AI accelerator designed for inference in Azure datacenters. It targets the cost of token generation for large language models and other reasoning workloads by comb...",
    "summary": "Maia 200 is Microsoft’s new in house AI accelerator designed for inference in Azure datacenters. It targets the cost of token generation for large language models and other reasoning workloads by combining narrow precision compute, a dense on chip memory hierarchy and an Ethernet based scale up fabric. Why Microsoft built a dedicated inference chip? […]\nThe post Microsoft Unveils Maia 200, An FP4 and FP8 Optimized AI Inference Accelerator for Azure Datacenters appeared first on MarkTechPost.",
    "datePublished": "2026-01-30T09:01:55.000Z",
    "url": "https://www.marktechpost.com/2026/01/30/microsoft-unveils-maia-200-an-fp4-and-fp8-optimized-ai-inference-accelerator-for-azure-datacenters/",
    "chatCompletionSummary": null,
    "tags": [
      "AI News",
      "MarkTechPost"
    ]
  },
  {
    "id": "aHR0cHM6Ly93d3cud2lyZWQuY29tL3N0b3J5L3VuY2FubnktdmFsbGV5LXBvZGNhc3QtaWNlLW1pbm5lYXBvbGlzLXRpa3Rvay1tb2x0Ym90Lw==",
    "title": "‘Uncanny Valley’: Minneapolis Misinformation, TikTok’s New Owners, and Moltbot Hype",
    "author": "Brian Barrett, Zoë Schiffer, Tim Marchman",
    "description": "On this episode of Uncanny Valley, we dive into the news that's held our attention this week: ICE activity as it's been unfolding in Minnesota....",
    "summary": "On this episode of Uncanny Valley, we dive into the news that's held our attention this week: ICE activity as it's been unfolding in Minnesota.",
    "datePublished": "2026-01-29T22:19:59.000Z",
    "url": "https://www.wired.com/story/uncanny-valley-podcast-ice-minneapolis-tiktok-moltbot/",
    "chatCompletionSummary": null,
    "tags": [
      "AI News",
      "Wired AI"
    ]
  },
  {
    "id": "aHR0cHM6Ly93d3cud2lyZWQuY29tL3N0b3J5L2FudGktaWNlLXZpZGVvcy1hcmUtZ2V0dGluZy10aGUtYWktZmFuZmljLXRyZWF0bWVudC1vbmxpbmUv",
    "title": "AI-Generated Anti-ICE Videos Are Getting the Fanfic Treatment",
    "author": "Jason Parham",
    "description": "Across Instagram and Facebook, AI-generated videos show people of color putting ICE agents in their place. Are they cathartic or just adding to a stew of misinformation?...",
    "summary": "Across Instagram and Facebook, AI-generated videos show people of color putting ICE agents in their place. Are they cathartic or just adding to a stew of misinformation?",
    "datePublished": "2026-01-29T19:07:14.000Z",
    "url": "https://www.wired.com/story/anti-ice-videos-are-getting-the-ai-fanfic-treatment-online/",
    "chatCompletionSummary": null,
    "tags": [
      "AI News",
      "Wired AI"
    ]
  },
  {
    "id": "aHR0cHM6Ly93d3cud2lyZWQuY29tL3N0b3J5L2xvZ2ljYWwtaW50ZWxsaWdlbmNlLXlhbm4tbGVjdW4tc3RhcnR1cC1jaGFydC1uZXctY291cnNlLWFnaS8=",
    "title": "A Yann LeCun–Linked Startup Charts a New Path to AGI",
    "author": "Joel Khalili",
    "description": "As the world’s largest companies pour hundreds of billions of dollars into large language models, San Francisco-based Logical Intelligence is trying something different in pursuit of AI that can mimic...",
    "summary": "As the world’s largest companies pour hundreds of billions of dollars into large language models, San Francisco-based Logical Intelligence is trying something different in pursuit of AI that can mimic the human brain.",
    "datePublished": "2026-01-29T19:00:00.000Z",
    "url": "https://www.wired.com/story/logical-intelligence-yann-lecun-startup-chart-new-course-agi/",
    "chatCompletionSummary": null,
    "tags": [
      "AI News",
      "Wired AI"
    ]
  },
  {
    "id": "aHR0cHM6Ly9uZXdzLm1pY3Jvc29mdC5jb20vc2lnbmFsL2FydGljbGVzL29wZW4tZGlnaXRhbC1tYXJrZXRzLWFnZW50aWMtZWNvbm9teS8=",
    "title": "Opening digital markets so AI can shop — and negotiate — for you",
    "author": "stclarke",
    "description": "The post Opening digital markets so AI can shop — and negotiate — for you appeared first on Source....",
    "summary": "The post Opening digital markets so AI can shop — and negotiate — for you appeared first on Source.",
    "datePublished": "2026-01-29T18:56:18.000Z",
    "url": "https://news.microsoft.com/signal/articles/open-digital-markets-agentic-economy/",
    "chatCompletionSummary": null,
    "tags": [
      "AI News",
      "Microsoft AI"
    ]
  },
  {
    "id": "aHR0cHM6Ly93d3cud2lyZWQuY29tL3N0b3J5L2FuLWFpLXRveS1leHBvc2VkLTUwMDAwLWxvZ3Mtb2YtaXRzLWNoYXRzLXdpdGgta2lkcy10by1hbnlvbmUtd2l0aC1hLWdtYWlsLWFjY291bnQv",
    "title": "An AI Toy Exposed 50,000 Logs of Its Chats With Kids to Anyone With a Gmail Account",
    "author": "Andy Greenberg",
    "description": "AI chat toy company Bondu left its web console almost entirely unprotected. Researchers who accessed it found nearly all the conversations children had with the company’s stuffed animals....",
    "summary": "AI chat toy company Bondu left its web console almost entirely unprotected. Researchers who accessed it found nearly all the conversations children had with the company’s stuffed animals.",
    "datePublished": "2026-01-29T17:00:00.000Z",
    "url": "https://www.wired.com/story/an-ai-toy-exposed-50000-logs-of-its-chats-with-kids-to-anyone-with-a-gmail-account/",
    "chatCompletionSummary": null,
    "tags": [
      "AI News",
      "Wired AI"
    ]
  },
  {
    "id": "aHR0cHM6Ly9vcGVuYWkuY29tL2luZGV4L2luc2lkZS1vdXItaW4taG91c2UtZGF0YS1hZ2VudA==",
    "title": "Inside OpenAI’s in-house data agent",
    "author": "OpenAI",
    "description": "How OpenAI built an in-house AI data agent that uses GPT-5, Codex, and memory to reason over massive datasets and deliver reliable insights in minutes....",
    "summary": "How OpenAI built an in-house AI data agent that uses GPT-5, Codex, and memory to reason over massive datasets and deliver reliable insights in minutes.",
    "datePublished": "2026-01-29T10:00:00.000Z",
    "url": "https://openai.com/index/inside-our-in-house-data-agent",
    "chatCompletionSummary": null,
    "image": "https://images.openai.com/blob/8b9658d3-5750-45j6-a4c4-7299c8515320/openai-logo.svg",
    "tags": [
      "AI News",
      "OpenAI"
    ]
  },
  {
    "id": "aHR0cHM6Ly9vcGVuYWkuY29tL2luZGV4L3JldGlyaW5nLWdwdC00by1hbmQtb2xkZXItbW9kZWxz",
    "title": "Retiring GPT-4o, GPT-4.1, GPT-4.1 mini, and OpenAI o4-mini in ChatGPT",
    "author": "OpenAI",
    "description": "On February 13, 2026, alongside the previously announced retirement⁠ of GPT‑5 (Instant, Thinking, and Pro), we will retire GPT‑4o, GPT‑4.1, GPT‑4.1 mini, and OpenAI o4-mini from ChatGPT. In the API, t...",
    "summary": "On February 13, 2026, alongside the previously announced retirement⁠ of GPT‑5 (Instant, Thinking, and Pro), we will retire GPT‑4o, GPT‑4.1, GPT‑4.1 mini, and OpenAI o4-mini from ChatGPT. In the API, there are no changes at this time.",
    "datePublished": "2026-01-29T00:00:00.000Z",
    "url": "https://openai.com/index/retiring-gpt-4o-and-older-models",
    "chatCompletionSummary": null,
    "image": "https://images.openai.com/blob/8b9658d3-5750-45j6-a4c4-7299c8515320/openai-logo.svg",
    "tags": [
      "AI News",
      "OpenAI"
    ]
  },
  {
    "id": "aHR0cHM6Ly9vcGVuYWkuY29tL2luZGV4L3RhaXNlaQ==",
    "title": "Taisei Corporation shapes the next generation of talent with ChatGPT",
    "author": "OpenAI",
    "description": "Taisei Corporation uses ChatGPT Enterprise to support HR-led talent development and scale generative AI across its global construction business....",
    "summary": "Taisei Corporation uses ChatGPT Enterprise to support HR-led talent development and scale generative AI across its global construction business.",
    "datePublished": "2026-01-29T00:00:00.000Z",
    "url": "https://openai.com/index/taisei",
    "chatCompletionSummary": null,
    "image": "https://images.openai.com/blob/8b9658d3-5750-45j6-a4c4-7299c8515320/openai-logo.svg",
    "tags": [
      "AI News",
      "OpenAI"
    ]
  },
  {
    "id": "aHR0cHM6Ly93d3cud2lyZWQuY29tL3N0b3J5L2RhdGEtY2VudGVycy1hcmUtZHJpdmluZy1hLXVzLWdhcy1ib29tLw==",
    "title": "Data Centers Are Driving a US Gas Boom",
    "author": "Molly Taft",
    "description": "Gas projects in the US pipeline explicitly linked to data centers increased by almost 25 times over the past two years, according to new research from Global Energy Monitor....",
    "summary": "Gas projects in the US pipeline explicitly linked to data centers increased by almost 25 times over the past two years, according to new research from Global Energy Monitor.",
    "datePublished": "2026-01-29T00:00:00.000Z",
    "url": "https://www.wired.com/story/data-centers-are-driving-a-us-gas-boom/",
    "chatCompletionSummary": null,
    "tags": [
      "AI News",
      "Wired AI"
    ]
  },
  {
    "id": "aHR0cHM6Ly9yZXNlYXJjaC5nb29nbGUvYmxvZy90b3dhcmRzLWEtc2NpZW5jZS1vZi1zY2FsaW5nLWFnZW50LXN5c3RlbXMtd2hlbi1hbmQtd2h5LWFnZW50LXN5c3RlbXMtd29yay8=",
    "title": "Towards a science of scaling agent systems: When and why agent systems work",
    "author": "Google Research",
    "description": "Generative AI...",
    "summary": "Generative AI",
    "datePublished": "2026-01-28T11:00:00.000Z",
    "url": "https://research.google/blog/towards-a-science-of-scaling-agent-systems-when-and-why-agent-systems-work/",
    "chatCompletionSummary": null,
    "image": "https://storage.googleapis.com/gweb-research2023-media/original_images/AgentScaling3_TaskPerformanceHERO.png",
    "tags": [
      "AI News",
      "Google Research"
    ]
  },
  {
    "id": "aHR0cHM6Ly9vcGVuYWkuY29tL2luZGV4L3RoZS1uZXh0LWNoYXB0ZXItZm9yLWFpLWluLXRoZS1ldQ==",
    "title": "The next chapter for AI in the EU",
    "author": "OpenAI",
    "description": "OpenAI launches the EU Economic Blueprint 2.0 with new data, partnerships, and initiatives to accelerate AI adoption, skills, and growth across Europe....",
    "summary": "OpenAI launches the EU Economic Blueprint 2.0 with new data, partnerships, and initiatives to accelerate AI adoption, skills, and growth across Europe.",
    "datePublished": "2026-01-28T01:00:00.000Z",
    "url": "https://openai.com/index/the-next-chapter-for-ai-in-the-eu",
    "chatCompletionSummary": null,
    "image": "https://images.openai.com/blob/8b9658d3-5750-45j6-a4c4-7299c8515320/openai-logo.svg",
    "tags": [
      "AI News",
      "OpenAI"
    ]
  },
  {
    "id": "aHR0cHM6Ly9vcGVuYWkuY29tL2luZGV4L2VtZWEteW91dGgtYW5kLXdlbGxiZWluZy1ncmFudA==",
    "title": "EMEA Youth & Wellbeing Grant",
    "author": "OpenAI",
    "description": "Apply for the EMEA Youth & Wellbeing Grant, a €500,000 program funding NGOs and researchers advancing youth safety and wellbeing in the age of AI....",
    "summary": "Apply for the EMEA Youth & Wellbeing Grant, a €500,000 program funding NGOs and researchers advancing youth safety and wellbeing in the age of AI.",
    "datePublished": "2026-01-28T01:00:00.000Z",
    "url": "https://openai.com/index/emea-youth-and-wellbeing-grant",
    "chatCompletionSummary": null,
    "image": "https://images.openai.com/blob/8b9658d3-5750-45j6-a4c4-7299c8515320/openai-logo.svg",
    "tags": [
      "AI News",
      "OpenAI"
    ]
  },
  {
    "id": "aHR0cHM6Ly9vcGVuYWkuY29tL2luZGV4L2FpLWFnZW50LWxpbmstc2FmZXR5",
    "title": "Keeping your data safe when an AI agent clicks a link",
    "author": "OpenAI",
    "description": "Learn how OpenAI protects user data when AI agents open links, preventing URL-based data exfiltration and prompt injection with built-in safeguards....",
    "summary": "Learn how OpenAI protects user data when AI agents open links, preventing URL-based data exfiltration and prompt injection with built-in safeguards.",
    "datePublished": "2026-01-28T00:00:00.000Z",
    "url": "https://openai.com/index/ai-agent-link-safety",
    "chatCompletionSummary": null,
    "image": "https://images.openai.com/blob/8b9658d3-5750-45j6-a4c4-7299c8515320/openai-logo.svg",
    "tags": [
      "AI News",
      "OpenAI"
    ]
  },
  {
    "id": "aHR0cHM6Ly9yZXNlYXJjaC5nb29nbGUvYmxvZy9hdGxhcy1wcmFjdGljYWwtc2NhbGluZy1sYXdzLWZvci1tdWx0aWxpbmd1YWwtbW9kZWxzLw==",
    "title": "ATLAS: Practical scaling laws for multilingual models",
    "author": "Google Research",
    "description": "Generative AI...",
    "summary": "Generative AI",
    "datePublished": "2026-01-27T18:58:00.000Z",
    "url": "https://research.google/blog/atlas-practical-scaling-laws-for-multilingual-models/",
    "chatCompletionSummary": null,
    "image": "https://storage.googleapis.com/gweb-research2023-media/original_images/ATLAS-2.png",
    "tags": [
      "AI News",
      "Google Research"
    ]
  },
  {
    "id": "aHR0cHM6Ly9uZXdzLm1pY3Jvc29mdC5jb20vamFudWFyeS0yMDI2LW5ld3M=",
    "title": "Introducing Maia 200: The AI accelerator built for inference",
    "author": "stclarke",
    "description": "The post Introducing Maia 200: The AI accelerator built for inference appeared first on Source....",
    "summary": "The post Introducing Maia 200: The AI accelerator built for inference appeared first on Source.",
    "datePublished": "2026-01-26T16:01:26.000Z",
    "url": "https://news.microsoft.com/january-2026-news",
    "chatCompletionSummary": null,
    "tags": [
      "AI News",
      "Microsoft AI"
    ]
  },
  {
    "id": "aHR0cHM6Ly9yZXNlYXJjaC5nb29nbGUvYmxvZy9pbnRyb2R1Y2luZy1naXN0LXRoZS1uZXh0LXN0YWdlLWluLXNtYXJ0LXNhbXBsaW5nLw==",
    "title": "Introducing GIST: The next stage in smart sampling",
    "author": "Google Research",
    "description": "Algorithms & Theory...",
    "summary": "Algorithms & Theory",
    "datePublished": "2026-01-23T17:46:00.000Z",
    "url": "https://research.google/blog/introducing-gist-the-next-stage-in-smart-sampling/",
    "chatCompletionSummary": null,
    "image": "https://storage.googleapis.com/gweb-research2023-media/original_images/GIST-0-Hero.png",
    "tags": [
      "AI News",
      "Google Research"
    ]
  },
  {
    "id": "aHR0cHM6Ly9yZXNlYXJjaC5nb29nbGUvYmxvZy9zbWFsbC1tb2RlbHMtYmlnLXJlc3VsdHMtYWNoaWV2aW5nLXN1cGVyaW9yLWludGVudC1leHRyYWN0aW9uLXRocm91Z2gtZGVjb21wb3NpdGlvbi8=",
    "title": "Small models, big results: Achieving superior intent extraction through decomposition",
    "author": "Google Research",
    "description": "Generative AI...",
    "summary": "Generative AI",
    "datePublished": "2026-01-22T16:56:44.000Z",
    "url": "https://research.google/blog/small-models-big-results-achieving-superior-intent-extraction-through-decomposition/",
    "chatCompletionSummary": null,
    "image": "https://storage.googleapis.com/gweb-research2023-media/original_images/IntentExtraction-2-Stage2.jpg",
    "tags": [
      "AI News",
      "Google Research"
    ]
  },
  {
    "id": "aHR0cHM6Ly9uZXdzLm1pY3Jvc29mdC5jb20vc2lnbmFsL2FydGljbGVzL3doYXQtYWktbWVhbnMtZm9yLWhpZ2hlci1lZHVjYXRpb24v",
    "title": "Exploring what AI means for education and the next generation",
    "author": "stclarke",
    "description": "The post Exploring what AI means for education and the next generation appeared first on Source....",
    "summary": "The post Exploring what AI means for education and the next generation appeared first on Source.",
    "datePublished": "2026-01-21T16:13:47.000Z",
    "url": "https://news.microsoft.com/signal/articles/what-ai-means-for-higher-education/",
    "chatCompletionSummary": null,
    "tags": [
      "AI News",
      "Microsoft AI"
    ]
  },
  {
    "id": "aHR0cHM6Ly9uZXdzLm1pdC5lZHUvMjAyNi93aHktaXRzLWNyaXRpY2FsLXRvLW1vdmUtYmV5b25kLW92ZXJseS1hZ2dyZWdhdGVkLW1hY2hpbmUtbGVhcm5pbmctbWV0cmljcy0wMTIw",
    "title": "Why it’s critical to move beyond overly aggregated machine-learning metrics",
    "author": "Michaela Jarvis | MIT Laboratory for Information and Decision Systems",
    "description": "New research detects hidden evidence of mistaken correlations — and provides a method to improve accuracy....",
    "summary": "New research detects hidden evidence of mistaken correlations — and provides a method to improve accuracy.",
    "datePublished": "2026-01-20T21:30:00.000Z",
    "url": "https://news.mit.edu/2026/why-its-critical-to-move-beyond-overly-aggregated-machine-learning-metrics-0120",
    "chatCompletionSummary": null,
    "image": "https://news.mit.edu/sites/default/files/styles/news_article__cover_image__original/public/images/202601/mit-lids-Ghassemi.jpg?itok=0Xn50RHx",
    "tags": [
      "AI News",
      "MIT News"
    ]
  },
  {
    "id": "aHR0cHM6Ly9yZXNlYXJjaC5nb29nbGUvYmxvZy91bmxvY2tpbmctaGVhbHRoLWluc2lnaHRzLWVzdGltYXRpbmctYWR2YW5jZWQtd2Fsa2luZy1tZXRyaWNzLXdpdGgtc21hcnR3YXRjaGVzLw==",
    "title": "Unlocking health insights: Estimating advanced walking metrics with smartwatches",
    "author": "Google Research",
    "description": "Health & Bioscience...",
    "summary": "Health & Bioscience",
    "datePublished": "2026-01-15T22:56:49.000Z",
    "url": "https://research.google/blog/unlocking-health-insights-estimating-advanced-walking-metrics-with-smartwatches/",
    "chatCompletionSummary": null,
    "image": "https://storage.googleapis.com/gweb-research2023-media/original_images/GaitMetrics-1-Performance.png",
    "tags": [
      "AI News",
      "Google Research"
    ]
  },
  {
    "id": "aHR0cHM6Ly9uZXdzLm1pY3Jvc29mdC5jb20vc291cmNlL2VtZWEvZmVhdHVyZXMvbWljcm9zb2Z0LWNvcGlsb3QtemVuZGF3YS1haS1rZW55YS1waGFybWFjaWVzLw==",
    "title": "The digital medicine for pharmacies: How AI is powering Kenya’s chemists",
    "author": "stclarke",
    "description": "The post The digital medicine for pharmacies: How AI is powering Kenya’s chemists appeared first on Source....",
    "summary": "The post The digital medicine for pharmacies: How AI is powering Kenya’s chemists appeared first on Source.",
    "datePublished": "2026-01-15T07:07:48.000Z",
    "url": "https://news.microsoft.com/source/emea/features/microsoft-copilot-zendawa-ai-kenya-pharmacies/",
    "chatCompletionSummary": null,
    "tags": [
      "AI News",
      "Microsoft AI"
    ]
  },
  {
    "id": "aHR0cHM6Ly9uZXdzLm1pdC5lZHUvMjAyNi9jb250aW51ZWQtY29tbWl0bWVudC10by11bmRlcnN0YW5kaW5nLWludGVsbGlnZW5jZS0wMTE0",
    "title": "At MIT, a continued commitment to understanding intelligence",
    "author": "Rachel Kemper | MIT Quest for Intelligence",
    "description": "With support from the Siegel Family Endowment, the newly renamed MIT Siegel Family Quest for Intelligence investigates how brains produce intelligence and how it can be replicated to solve problems....",
    "summary": "With support from the Siegel Family Endowment, the newly renamed MIT Siegel Family Quest for Intelligence investigates how brains produce intelligence and how it can be replicated to solve problems.",
    "datePublished": "2026-01-14T21:50:00.000Z",
    "url": "https://news.mit.edu/2026/continued-commitment-to-understanding-intelligence-0114",
    "chatCompletionSummary": null,
    "image": "https://news.mit.edu/sites/default/files/styles/news_article__cover_image__original/public/images/202601/mit-quest.jpg?itok=Z4AIAI6Y",
    "tags": [
      "AI News",
      "MIT News"
    ]
  },
  {
    "id": "aHR0cHM6Ly9uZXdzLm1pdC5lZHUvMjAyNi9nZW5haS10b29sLWhlbHBzLTNkLXByaW50LXBlcnNvbmFsLWl0ZW1zLXN1c3RhaW4tZGFpbHktdXNlLTAxMTQ=",
    "title": "Generative AI tool helps 3D print personal items that sustain daily use",
    "author": "Alex Shipps | MIT CSAIL",
    "description": "“MechStyle” allows users to personalize 3D models, while ensuring they’re physically viable after fabrication, producing unique personal items and assistive technology....",
    "summary": "“MechStyle” allows users to personalize 3D models, while ensuring they’re physically viable after fabrication, producing unique personal items and assistive technology.",
    "datePublished": "2026-01-14T21:00:00.000Z",
    "url": "https://news.mit.edu/2026/genai-tool-helps-3d-print-personal-items-sustain-daily-use-0114",
    "chatCompletionSummary": null,
    "image": "https://news.mit.edu/sites/default/files/styles/news_article__cover_image__original/public/images/202512/MIT-MechStyle.jpg?itok=R7YZJuH2",
    "tags": [
      "AI News",
      "MIT News"
    ]
  },
  {
    "id": "aHR0cHM6Ly9uZXdzLm1pY3Jvc29mdC5jb20vc2lnbmFsL2FydGljbGVzLzQtd2F5cy1haS1pcy1yZXNoYXBpbmctZGlzY292ZXJ5LWhlYWx0aC13b3JrLWFuZC1yZXNwb25zaWJpbGl0eS8=",
    "title": "4 ways AI is reshaping discovery, health, work and responsibility",
    "author": "stclarke",
    "description": "The post 4 ways AI is reshaping discovery, health, work and responsibility appeared first on Source....",
    "summary": "The post 4 ways AI is reshaping discovery, health, work and responsibility appeared first on Source.",
    "datePublished": "2026-01-14T17:15:11.000Z",
    "url": "https://news.microsoft.com/signal/articles/4-ways-ai-is-reshaping-discovery-health-work-and-responsibility/",
    "chatCompletionSummary": null,
    "tags": [
      "AI News",
      "Microsoft AI"
    ]
  },
  {
    "id": "aHR0cHM6Ly9yZXNlYXJjaC5nb29nbGUvYmxvZy9oYXJkLWJyYWtpbmctZXZlbnRzLWFzLWluZGljYXRvcnMtb2Ytcm9hZC1zZWdtZW50LWNyYXNoLXJpc2sv",
    "title": "Hard-braking events as indicators of road segment crash risk",
    "author": "Google Research",
    "description": "Algorithms & Theory...",
    "summary": "Algorithms & Theory",
    "datePublished": "2026-01-13T22:44:00.000Z",
    "url": "https://research.google/blog/hard-braking-events-as-indicators-of-road-segment-crash-risk/",
    "chatCompletionSummary": null,
    "image": "https://storage.googleapis.com/gweb-research2023-media/original_images/HBEs-0-Hero.png",
    "tags": [
      "AI News",
      "Google Research"
    ]
  },
  {
    "id": "aHR0cHM6Ly9yZXNlYXJjaC5nb29nbGUvYmxvZy9uZXh0LWdlbmVyYXRpb24tbWVkaWNhbC1pbWFnZS1pbnRlcnByZXRhdGlvbi13aXRoLW1lZGdlbW1hLTE1LWFuZC1tZWRpY2FsLXNwZWVjaC10by10ZXh0LXdpdGgtbWVkYXNyLw==",
    "title": "Next generation medical image interpretation with MedGemma 1.5 and medical speech to text with MedASR",
    "author": "Google Research",
    "description": "Generative AI...",
    "summary": "Generative AI",
    "datePublished": "2026-01-13T20:57:16.000Z",
    "url": "https://research.google/blog/next-generation-medical-image-interpretation-with-medgemma-15-and-medical-speech-to-text-with-medasr/",
    "chatCompletionSummary": null,
    "image": "https://storage.googleapis.com/gweb-research2023-media/original_images/MedGemma15-0a-Hero.png",
    "tags": [
      "AI News",
      "Google Research"
    ]
  },
  {
    "id": "aHR0cHM6Ly9yZXNlYXJjaC5nb29nbGUvYmxvZy9keW5hbWljLXN1cmZhY2UtY29kZXMtb3Blbi1uZXctYXZlbnVlcy1mb3ItcXVhbnR1bS1lcnJvci1jb3JyZWN0aW9uLw==",
    "title": "Dynamic surface codes open new avenues for quantum error correction",
    "author": "Google Research",
    "description": "Quantum...",
    "summary": "Quantum",
    "datePublished": "2026-01-13T17:32:00.000Z",
    "url": "https://research.google/blog/dynamic-surface-codes-open-new-avenues-for-quantum-error-correction/",
    "chatCompletionSummary": null,
    "image": "https://storage.googleapis.com/gweb-research2023-media/original_images/DynamicSC2_DetectingRegionsHERO.png",
    "tags": [
      "AI News",
      "Google Research"
    ]
  },
  {
    "id": "aHR0cHM6Ly9yZXNlYXJjaC5nb29nbGUvYmxvZy9uZXVyYWxnY20taGFybmVzc2VzLWFpLXRvLWJldHRlci1zaW11bGF0ZS1sb25nLXJhbmdlLWdsb2JhbC1wcmVjaXBpdGF0aW9uLw==",
    "title": "NeuralGCM harnesses AI to better simulate long-range global precipitation",
    "author": "Google Research",
    "description": "Climate & Sustainability...",
    "summary": "Climate & Sustainability",
    "datePublished": "2026-01-12T17:52:00.000Z",
    "url": "https://research.google/blog/neuralgcm-harnesses-ai-to-better-simulate-long-range-global-precipitation/",
    "chatCompletionSummary": null,
    "image": "https://storage.googleapis.com/gweb-research2023-media/original_images/NeuralGCM-precipitation-hero.webp",
    "tags": [
      "AI News",
      "Google Research"
    ]
  },
  {
    "id": "aHR0cHM6Ly9uZXdzLm1pdC5lZHUvMjAyNi8zLXF1ZXN0aW9ucy1ob3ctYWktY291bGQtb3B0aW1pemUtcG93ZXItZ3JpZC0wMTA5",
    "title": "3 Questions: How AI could optimize the power grid",
    "author": "Adam Zewe | MIT News",
    "description": "While the growing energy demands of AI are worrying, some techniques can also help make power grids cleaner and more efficient....",
    "summary": "While the growing energy demands of AI are worrying, some techniques can also help make power grids cleaner and more efficient.",
    "datePublished": "2026-01-09T05:00:00.000Z",
    "url": "https://news.mit.edu/2026/3-questions-how-ai-could-optimize-power-grid-0109",
    "chatCompletionSummary": null,
    "image": "https://news.mit.edu/sites/default/files/styles/news_article__cover_image__original/public/images/202601/MIT_AI-Power-01-update-press.jpg?itok=w4OT9btX",
    "tags": [
      "AI News",
      "MIT News"
    ]
  },
  {
    "id": "aHR0cHM6Ly9uZXdzLm1pdC5lZHUvMjAyNi9kZWNvZGluZy1hcmN0aWMtdG8tcHJlZGljdC13aW50ZXItd2VhdGhlci0wMTA4",
    "title": "Decoding the Arctic to predict winter weather",
    "author": "Stephanie Martinovich | Department of Civil and Environmental Engineering",
    "description": "With the help of AI, MIT Research Scientist Judah Cohen is reshaping subseasonal forecasting, with the goal of extending the lead time for predicting impactful weather....",
    "summary": "With the help of AI, MIT Research Scientist Judah Cohen is reshaping subseasonal forecasting, with the goal of extending the lead time for predicting impactful weather.",
    "datePublished": "2026-01-08T21:55:00.000Z",
    "url": "https://news.mit.edu/2026/decoding-arctic-to-predict-winter-weather-0108",
    "chatCompletionSummary": null,
    "image": "https://news.mit.edu/sites/default/files/styles/news_article__cover_image__original/public/images/202512/mit-Judah-Cohen-weather-map.jpg?itok=bQl3bqvA",
    "tags": [
      "AI News",
      "MIT News"
    ]
  },
  {
    "id": "aHR0cHM6Ly9uZXdzLm1pY3Jvc29mdC5jb20vc291cmNlL2VtZWEvZmVhdHVyZXMvYWktdGhhdC1kcml2ZXMtY2hhbmdlLXdheXZlLXJld3JpdGVzLXNlbGYtZHJpdmluZy1wbGF5Ym9vay13aXRoLWRlZXAtbGVhcm5pbmctaW4tYXp1cmUv",
    "title": "AI that drives change: Wayve rewrites self-driving playbook with deep learning in Azure",
    "author": "stclarke",
    "description": "The post AI that drives change: Wayve rewrites self-driving playbook with deep learning in Azure appeared first on Source....",
    "summary": "The post AI that drives change: Wayve rewrites self-driving playbook with deep learning in Azure appeared first on Source.",
    "datePublished": "2026-01-08T14:36:51.000Z",
    "url": "https://news.microsoft.com/source/emea/features/ai-that-drives-change-wayve-rewrites-self-driving-playbook-with-deep-learning-in-azure/",
    "chatCompletionSummary": null,
    "tags": [
      "AI News",
      "Microsoft AI"
    ]
  },
  {
    "id": "aHR0cHM6Ly9uZXdzLm1pdC5lZHUvMjAyNi9zdG9uZS1jZW50ZXItaW5lcXVhbGl0eS1zaGFwaW5nLWZ1dHVyZS13b3JrLWxhdW5jaGVzLTAxMDc=",
    "title": "Stone Center on Inequality and Shaping the Future of Work Launches at MIT",
    "author": "Julia Regier | Blueprint Labs",
    "description": "Recent launch event for the center featured discussions on pro-worker AI, wealth inequality, and the future of liberal democracy....",
    "summary": "Recent launch event for the center featured discussions on pro-worker AI, wealth inequality, and the future of liberal democracy.",
    "datePublished": "2026-01-07T20:30:00.000Z",
    "url": "https://news.mit.edu/2026/stone-center-inequality-shaping-future-work-launches-0107",
    "chatCompletionSummary": null,
    "image": "https://news.mit.edu/sites/default/files/styles/news_article__cover_image__original/public/images/202512/mit-stone-center-launch.jpg?itok=6BtJlLDS",
    "tags": [
      "AI News",
      "MIT News"
    ]
  },
  {
    "id": "aHR0cHM6Ly9uZXdzLm1pY3Jvc29mdC5jb20vc2lnbmFsbWFnYXppbmUvaXNzdWUvaXNzdWUtMDIvI2EtbmV3LXBlcnNwZWN0aXZlLW9uLWFp",
    "title": "From Signal magazine: How Jaron Lanier is reframing what it means to build – and trust – AI",
    "author": "stclarke",
    "description": "The post From Signal magazine: How Jaron Lanier is reframing what it means to build – and trust – AI appeared first on Source....",
    "summary": "The post From Signal magazine: How Jaron Lanier is reframing what it means to build – and trust – AI appeared first on Source.",
    "datePublished": "2026-01-07T15:14:55.000Z",
    "url": "https://news.microsoft.com/signalmagazine/issue/issue-02/#a-new-perspective-on-ai",
    "chatCompletionSummary": null,
    "tags": [
      "AI News",
      "Microsoft AI"
    ]
  },
  {
    "id": "aHR0cHM6Ly9uZXdzLm1pdC5lZHUvMjAyNi9taXQtc2NpZW50aXN0cy1pbnZlc3RpZ2F0ZS1tZW1vcml6YXRpb24tcmlzay1jbGluaWNhbC1haS0wMTA1",
    "title": "MIT scientists investigate memorization risk in the age of clinical AI",
    "author": "Alex Ouyang | Abdul Latif Jameel Clinic for Machine Learning in Health",
    "description": "New research demonstrates how AI models can be tested to ensure they don’t cause harm by revealing anonymized patient health data....",
    "summary": "New research demonstrates how AI models can be tested to ensure they don’t cause harm by revealing anonymized patient health data.",
    "datePublished": "2026-01-05T21:55:00.000Z",
    "url": "https://news.mit.edu/2026/mit-scientists-investigate-memorization-risk-clinical-ai-0105",
    "chatCompletionSummary": null,
    "image": "https://news.mit.edu/sites/default/files/styles/news_article__cover_image__original/public/images/202512/mit-j-clinic-EHR-Memorization.jpg?itok=VrtzS0Gi",
    "tags": [
      "AI News",
      "MIT News"
    ]
  },
  {
    "id": "aHR0cHM6Ly9tYWNoaW5lbGVhcm5pbmdtYXN0ZXJ5LmNvbS83LWFnZW50aWMtYWktdHJlbmRzLXRvLXdhdGNoLWluLTIwMjYv",
    "title": "7 Agentic AI Trends to Watch in 2026",
    "author": "Vinod Chugani",
    "description": "The agentic AI field is moving from experimental prototypes to production-ready autonomous systems....",
    "summary": "The agentic AI field is moving from experimental prototypes to production-ready autonomous systems.",
    "datePublished": "2026-01-05T11:00:16.000Z",
    "url": "https://machinelearningmastery.com/7-agentic-ai-trends-to-watch-in-2026/",
    "chatCompletionSummary": null,
    "image": "https://machinelearningmastery.com/wp-content/uploads/2025/12/mlm-chugani-agentic-ai-trends-watch-2026-feature-2.png",
    "tags": [
      "AI News",
      "Machine Learning Mastery"
    ]
  },
  {
    "id": "aHR0cHM6Ly9tYWNoaW5lbGVhcm5pbmdtYXN0ZXJ5LmNvbS9ncmFkaWVudC1kZXNjZW50dGhlLWVuZ2luZS1vZi1tYWNoaW5lLWxlYXJuaW5nLW9wdGltaXphdGlvbi8=",
    "title": "Gradient Descent:The Engine of Machine Learning Optimization",
    "author": "Matthew Mayo",
    "description": "Editor's note: This article is a part of our series on visualizing the foundations of machine learning....",
    "summary": "Editor's note: This article is a part of our series on visualizing the foundations of machine learning.",
    "datePublished": "2026-01-02T11:00:17.000Z",
    "url": "https://machinelearningmastery.com/gradient-descentthe-engine-of-machine-learning-optimization/",
    "chatCompletionSummary": null,
    "image": "https://machinelearningmastery.com/wp-content/uploads/2026/01/mlm-visualizing-foundations-ml-gradient-descent-feature.png",
    "tags": [
      "AI News",
      "Machine Learning Mastery"
    ]
  },
  {
    "id": "aHR0cHM6Ly9tYWNoaW5lbGVhcm5pbmdtYXN0ZXJ5LmNvbS90cmFpbi15b3VyLWxhcmdlLW1vZGVsLW9uLW11bHRpcGxlLWdwdXMtd2l0aC10ZW5zb3ItcGFyYWxsZWxpc20v",
    "title": "Train Your Large Model on Multiple GPUs with Tensor Parallelism",
    "author": "Adrian Tam",
    "description": "This article is divided into five parts; they are: • An Example of Tensor Parallelism • Setting Up Tensor Parallelism • Preparing Model for Tensor Parallelism • Train a Model with Tensor Parallelism •...",
    "summary": "This article is divided into five parts; they are: • An Example of Tensor Parallelism • Setting Up Tensor Parallelism • Preparing Model for Tensor Parallelism • Train a Model with Tensor Parallelism • Combining Tensor Parallelism with FSDP Tensor parallelism originated from the Megatron-LM paper.",
    "datePublished": "2025-12-31T21:22:39.000Z",
    "url": "https://machinelearningmastery.com/train-your-large-model-on-multiple-gpus-with-tensor-parallelism/",
    "chatCompletionSummary": null,
    "image": "https://machinelearningmastery.com/wp-content/uploads/2026/01/seth-kane-XOEAHbE_vO8-unsplash-scaled.jpg",
    "tags": [
      "AI News",
      "Machine Learning Mastery"
    ]
  },
  {
    "id": "aHR0cHM6Ly9tYWNoaW5lbGVhcm5pbmdtYXN0ZXJ5LmNvbS90cmFpbi15b3VyLWxhcmdlLW1vZGVsLW9uLW11bHRpcGxlLWdwdXMtd2l0aC1mdWxseS1zaGFyZGVkLWRhdGEtcGFyYWxsZWxpc20v",
    "title": "Train Your Large Model on Multiple GPUs with Fully Sharded Data Parallelism",
    "author": "Adrian Tam",
    "description": "This article is divided into five parts; they are: • Introduction to Fully Sharded Data Parallel • Preparing Model for FSDP Training • Training Loop with FSDP • Fine-Tuning FSDP Behavior • Checkpointi...",
    "summary": "This article is divided into five parts; they are: • Introduction to Fully Sharded Data Parallel • Preparing Model for FSDP Training • Training Loop with FSDP • Fine-Tuning FSDP Behavior • Checkpointing FSDP Models Sharding is a term originally used in database management systems, where it refers to dividing a database into smaller units, called shards, to improve performance.",
    "datePublished": "2025-12-30T22:12:18.000Z",
    "url": "https://machinelearningmastery.com/train-your-large-model-on-multiple-gpus-with-fully-sharded-data-parallelism/",
    "chatCompletionSummary": null,
    "image": "https://machinelearningmastery.com/wp-content/uploads/2025/12/ferenc-horvath-9cYiqVDeXDc-unsplash-scaled.jpg",
    "tags": [
      "AI News",
      "Machine Learning Mastery"
    ]
  },
  {
    "id": "aHR0cHM6Ly9tYWNoaW5lbGVhcm5pbmdtYXN0ZXJ5LmNvbS9iZXlvbmQtc2hvcnQtdGVybS1tZW1vcnktdGhlLTMtdHlwZXMtb2YtbG9uZy10ZXJtLW1lbW9yeS1haS1hZ2VudHMtbmVlZC8=",
    "title": "Beyond Short-term Memory: The 3 Types of Long-term Memory AI Agents Need",
    "author": "Vinod Chugani",
    "description": "If you've built chatbots or worked with language models, you're already familiar with how AI systems handle memory within a single conversation....",
    "summary": "If you've built chatbots or worked with language models, you're already familiar with how AI systems handle memory within a single conversation.",
    "datePublished": "2025-12-30T11:00:59.000Z",
    "url": "https://machinelearningmastery.com/beyond-short-term-memory-the-3-types-of-long-term-memory-ai-agents-need/",
    "chatCompletionSummary": null,
    "image": "https://machinelearningmastery.com/wp-content/uploads/2025/12/mlm-chugani-beyond-short-term-memory-3-types-long-term-memory-ai-agents-need-feature-b.png",
    "tags": [
      "AI News",
      "Machine Learning Mastery"
    ]
  },
  {
    "id": "aHR0cHM6Ly9tYWNoaW5lbGVhcm5pbmdtYXN0ZXJ5LmNvbS90cmFpbi15b3VyLWxhcmdlLW1vZGVsLW9uLW11bHRpcGxlLWdwdXMtd2l0aC1waXBlbGluZS1wYXJhbGxlbGlzbS8=",
    "title": "Train Your Large Model on Multiple GPUs with Pipeline Parallelism",
    "author": "Adrian Tam",
    "description": "This article is divided into six parts; they are: • Pipeline Parallelism Overview • Model Preparation for Pipeline Parallelism • Stage and Pipeline Schedule • Training Loop • Distributed Checkpointing...",
    "summary": "This article is divided into six parts; they are: • Pipeline Parallelism Overview • Model Preparation for Pipeline Parallelism • Stage and Pipeline Schedule • Training Loop • Distributed Checkpointing • Limitations of Pipeline Parallelism Pipeline parallelism means creating the model as a pipeline of stages.",
    "datePublished": "2025-12-29T20:56:53.000Z",
    "url": "https://machinelearningmastery.com/train-your-large-model-on-multiple-gpus-with-pipeline-parallelism/",
    "chatCompletionSummary": null,
    "image": "https://machinelearningmastery.com/wp-content/uploads/2025/12/ivan-ivankovic-M0uDTaOUZmw-unsplash-scaled.jpg",
    "tags": [
      "AI News",
      "Machine Learning Mastery"
    ]
  },
  {
    "id": "aHR0cHM6Ly9tYWNoaW5lbGVhcm5pbmdtYXN0ZXJ5LmNvbS81LXB5dGhvbi1saWJyYXJpZXMtZm9yLWFkdmFuY2VkLXRpbWUtc2VyaWVzLWZvcmVjYXN0aW5nLw==",
    "title": "5 Python Libraries for Advanced Time Series Forecasting",
    "author": "Iván Palomares Carrascosa",
    "description": "Predicting the future has always been the holy grail of analytics....",
    "summary": "Predicting the future has always been the holy grail of analytics.",
    "datePublished": "2025-12-29T11:00:23.000Z",
    "url": "https://machinelearningmastery.com/5-python-libraries-for-advanced-time-series-forecasting/",
    "chatCompletionSummary": null,
    "image": "https://machinelearningmastery.com/wp-content/uploads/2025/12/Untitled-design.png",
    "tags": [
      "AI News",
      "Machine Learning Mastery"
    ]
  },
  {
    "id": "aHR0cHM6Ly9tYWNoaW5lbGVhcm5pbmdtYXN0ZXJ5LmNvbS90cmFpbmluZy1hLW1vZGVsLW9uLW11bHRpcGxlLWdwdXMtd2l0aC1kYXRhLXBhcmFsbGVsaXNtLw==",
    "title": "Training a Model on Multiple GPUs with Data Parallelism",
    "author": "Adrian Tam",
    "description": "This article is divided into two parts; they are: • Data Parallelism • Distributed Data Parallelism If you have multiple GPUs, you can combine them to operate as a single GPU with greater memory capac...",
    "summary": "This article is divided into two parts; they are: • Data Parallelism • Distributed Data Parallelism If you have multiple GPUs, you can combine them to operate as a single GPU with greater memory capacity.",
    "datePublished": "2025-12-26T06:44:15.000Z",
    "url": "https://machinelearningmastery.com/training-a-model-on-multiple-gpus-with-data-parallelism/",
    "chatCompletionSummary": null,
    "image": "https://machinelearningmastery.com/wp-content/uploads/2025/12/ilse-orsel-hjmV0xG-KPk-unsplash-scaled.jpg",
    "tags": [
      "AI News",
      "Machine Learning Mastery"
    ]
  },
  {
    "id": "aHR0cHM6Ly9tYWNoaW5lbGVhcm5pbmdtYXN0ZXJ5LmNvbS90cmFpbi1hLW1vZGVsLWZhc3Rlci13aXRoLXRvcmNoLWNvbXBpbGUtYW5kLWdyYWRpZW50LWFjY3VtdWxhdGlvbi8=",
    "title": "Train a Model Faster with torch.compile and Gradient Accumulation",
    "author": "Adrian Tam",
    "description": "This article is divided into two parts; they are: • Using `torch....",
    "summary": "This article is divided into two parts; they are: • Using `torch.",
    "datePublished": "2025-12-25T16:44:48.000Z",
    "url": "https://machinelearningmastery.com/train-a-model-faster-with-torch-compile-and-gradient-accumulation/",
    "chatCompletionSummary": null,
    "image": "https://machinelearningmastery.com/wp-content/uploads/2025/12/francois-genon-IvlV_Dlt9hg-unsplash-scaled.jpg",
    "tags": [
      "AI News",
      "Machine Learning Mastery"
    ]
  },
  {
    "id": "aHR0cHM6Ly9tYWNoaW5lbGVhcm5pbmdtYXN0ZXJ5LmNvbS90cmFpbmluZy1hLW1vZGVsLXdpdGgtbGltaXRlZC1tZW1vcnktdXNpbmctbWl4ZWQtcHJlY2lzaW9uLWFuZC1ncmFkaWVudC1jaGVja3BvaW50aW5nLw==",
    "title": "Training a Model with Limited Memory using Mixed Precision and Gradient Checkpointing",
    "author": "Adrian Tam",
    "description": "This article is divided into three parts; they are: • Floating-point Numbers • Automatic Mixed Precision Training • Gradient Checkpointing Let's get started! The default data type in PyTorch is the IE...",
    "summary": "This article is divided into three parts; they are: • Floating-point Numbers • Automatic Mixed Precision Training • Gradient Checkpointing Let's get started! The default data type in PyTorch is the IEEE 754 32-bit floating-point format, also known as single precision.",
    "datePublished": "2025-12-24T17:43:03.000Z",
    "url": "https://machinelearningmastery.com/training-a-model-with-limited-memory-using-mixed-precision-and-gradient-checkpointing/",
    "chatCompletionSummary": null,
    "image": "https://machinelearningmastery.com/wp-content/uploads/2025/12/meduana-PdnseHuDFZU-unsplash-scaled.jpg",
    "tags": [
      "AI News",
      "Machine Learning Mastery"
    ]
  },
  {
    "id": "aHR0cHM6Ly9uZXdzLm1pY3Jvc29mdC5jb20vc2lnbmFsL2FydGljbGVzL2Nhbi1haS1sZWFybi10aGUtbGFuZ3VhZ2Utb2YtYmlvbG9neS10by1yZWltYWdpbmUtbWVkaWNpbmUv",
    "title": "Can AI learn the language of biology to reimagine medicine?",
    "author": "stclarke",
    "description": "The post Can AI learn the language of biology to reimagine medicine? appeared first on Source....",
    "summary": "The post Can AI learn the language of biology to reimagine medicine? appeared first on Source.",
    "datePublished": "2025-12-19T16:07:02.000Z",
    "url": "https://news.microsoft.com/signal/articles/can-ai-learn-the-language-of-biology-to-reimagine-medicine/",
    "chatCompletionSummary": null,
    "tags": [
      "AI News",
      "Microsoft AI"
    ]
  },
  {
    "id": "aHR0cHM6Ly9uZXdzLm1pY3Jvc29mdC5jb20vc2lnbmFsLz9wPTcyNA==",
    "title": "Startups can do more right now with AI: 5 insights from Microsoft CTO Kevin Scott",
    "author": "stclarke",
    "description": "The post Startups can do more right now with AI: 5 insights from Microsoft CTO Kevin Scott appeared first on Source....",
    "summary": "The post Startups can do more right now with AI: 5 insights from Microsoft CTO Kevin Scott appeared first on Source.",
    "datePublished": "2025-12-18T17:04:49.000Z",
    "url": "https://news.microsoft.com/signal/?p=724",
    "chatCompletionSummary": null,
    "tags": [
      "AI News",
      "Microsoft AI"
    ]
  },
  {
    "id": "aHR0cDovL2JhaXIuYmVya2VsZXkuZWR1L2Jsb2cvMjAyNS8xMS8wMS9ybC13aXRob3V0LXRkLWxlYXJuaW5nLw==",
    "title": "RL without TD learning",
    "author": "BAIR",
    "description": "In this post, I’ll introduce a reinforcement learning (RL) algorithm based on an “alternative” paradigm: divide and conquer. Unlike traditional methods, this algorithm is not based on temporal differe...",
    "summary": "In this post, I’ll introduce a reinforcement learning (RL) algorithm based on an “alternative” paradigm: divide and conquer. Unlike traditional methods, this algorithm is not based on temporal difference (TD) learning (which has scalability challenges), and scales well to long-horizon tasks.\nWe can do Reinforcement Learning (RL) based on divide and conquer, instead of temporal difference (TD) learning.\n\n\n\n\nProblem setting: off-policy RL\nOur problem setting is off-policy RL. Let’s briefly review what this means.\nThere are two classes of algorithms in RL: on-policy RL and off-policy RL. On-policy RL means we can only use fresh data collected by the current policy. In other words, we have to throw away old data each time we update the policy. Algorithms like PPO and GRPO (and policy gradient methods in general) belong to this category.\nOff-policy RL means we don’t have this restriction: we can use any kind of data, including old experience, human demonstrations, Internet data, and so on. So off-policy RL is more general and flexible than on-policy RL (and of course harder!). Q-learning is the most well-known off-policy RL algorithm. In domains where data collection is expensive (e.g., robotics, dialogue systems, healthcare, etc.), we often have no choice but to use off-policy RL. That’s why it’s such an important problem.\nAs of 2025, I think we have reasonably good recipes for scaling up on-policy RL (e.g., PPO, GRPO, and their variants). However, we still haven’t found a “scalable” off-policy RL algorithm that scales well to complex, long-horizon tasks. Let me briefly explain why.\nTwo paradigms in value learning: Temporal Difference (TD) and Monte Carlo (MC)\nIn off-policy RL, we typically train a value function using temporal difference (TD) learning (i.e., Q-learning), with the following Bellman update rule:\nThe problem is this: the error in the next value $Q(s’, a’)$ propagates to the current value $Q(s, a)$ through bootstrapping, and these errors accumulate over the entire horizon. This is basically what makes TD learning struggle to scale to long-horizon tasks (see this post if you’re interested in more details).\nTo mitigate this problem, people have mixed TD learning with Monte Carlo (MC) returns. For example, we can do $n$-step TD learning (TD-$n$):\nHere, we use the actual Monte Carlo return (from the dataset) for the first $n$ steps, and then use the bootstrapped value for the rest of the horizon. This way, we can reduce the number of Bellman recursions by $n$ times, so errors accumulate less. In the extreme case of $n = \\infty$, we recover pure Monte Carlo value learning.\nWhile this is a reasonable solution (and often works well), it is highly unsatisfactory. First, it doesn’t fundamentally solve the error accumulation problem; it only reduces the number of Bellman recursions by a constant factor ($n$). Second, as $n$ grows, we suffer from high variance and suboptimality. So we can’t just set $n$ to a large value, and need to carefully tune it for each task.\nIs there a fundamentally different way to solve this problem?\nThe “Third” Paradigm: Divide and Conquer\nMy claim is that a third paradigm in value learning, divide and conquer, may provide an ideal solution to off-policy RL that scales to arbitrarily long-horizon tasks.\nDivide and conquer reduces the number of Bellman recursions logarithmically.\n\n\nThe key idea of divide and conquer is to divide a trajectory into two equal-length segments, and combine their values to update the value of the full trajectory. This way, we can (in theory) reduce the number of Bellman recursions logarithmically (not linearly!). Moreover, it doesn’t require choosing a hyperparameter like $n$, and it doesn’t necessarily suffer from high variance or suboptimality, unlike $n$-step TD learning.\nConceptually, divide and conquer really has all the nice properties we want in value learning. So I’ve long been excited about this high-level idea. The problem was that it wasn’t clear how to actually do this in practice… until recently.\nA practical algorithm\nIn a recent work co-led with Aditya, we made meaningful progress toward realizing and scaling up this idea. Specifically, we were able to scale up divide-and-conquer value learning to highly complex tasks (as far as I know, this is the first such work!) at least in one important class of RL problems, goal-conditioned RL. Goal-conditioned RL aims to learn a policy that can reach any state from any other state. This provides a natural divide-and-conquer structure. Let me explain this.\nThe structure is as follows. Let’s first assume that the dynamics is deterministic, and denote the shortest path distance (“temporal distance”) between two states $s$ and $g$ as $d^*(s, g)$. Then, it satisfies the triangle inequality:\nfor all $s, g, w \\in \\mathcal{S}$.\nIn terms of values, we can equivalently translate this triangle inequality to the following “transitive” Bellman update rule:\nwhere $\\mathcal{E}$ is the set of edges in the environment’s transition graph, and $V$ is the value function associated with the sparse reward $r(s, g) = 1(s = g)$. Intuitively, this means that we can update the value of $V(s, g)$ using two “smaller” values: $V(s, w)$ and $V(w, g)$, provided that $w$ is the optimal “midpoint” (subgoal) on the shortest path. This is exactly the divide-and-conquer value update rule that we were looking for!\nThe problem\nHowever, there’s one problem here. The issue is that it’s unclear how to choose the optimal subgoal $w$ in practice. In tabular settings, we can simply enumerate all states to find the optimal $w$ (this is essentially the Floyd-Warshall shortest path algorithm). But in continuous environments with large state spaces, we can’t do this. Basically, this is why previous works have struggled to scale up divide-and-conquer value learning, even though this idea has been around for decades (in fact, it dates back to the very first work in goal-conditioned RL by Kaelbling (1993) – see our paper for a further discussion of related works). The main contribution of our work is a practical solution to this issue.\nThe solution\nHere’s our key idea: we restrict the search space of $w$ to the states that appear in the dataset, specifically, those that lie between $s$ and $g$ in the dataset trajectory. Also, instead of searching for the optimal $\\text{argmax}_w$, we compute a “soft” $\\text{argmax}$ using expectile regression. Namely, we minimize the following loss:\nwhere $\\bar{V}$ is the target value network, $\\ell^2_\\kappa$ is the expectile loss with an expectile $\\kappa$, and the expectation is taken over all $(s_i, s_k, s_j)$ tuples with $i \\leq k \\leq j$ in a randomly sampled dataset trajectory.\nThis has two benefits. First, we don’t need to search over the entire state space. Second, we prevent value overestimation from the $\\max$ operator by instead using the “softer” expectile regression. We call this algorithm Transitive RL (TRL). Check out our paper for more details and further discussions!\nDoes it work well?\nhumanoidmaze\n  \npuzzle\n  \nTo see whether our method scales well to complex tasks, we directly evaluated TRL on some of the most challenging tasks in OGBench, a benchmark for offline goal-conditioned RL. We mainly used the hardest versions of humanoidmaze and puzzle tasks with large, 1B-sized datasets. These tasks are highly challenging: they require performing combinatorially complex skills across up to 3,000 environment steps.\nTRL achieves the best performance on highly challenging, long-horizon tasks.\n\n\nThe results are quite exciting! Compared to many strong baselines across different categories (TD, MC, quasimetric learning, etc.), TRL achieves the best performance on most tasks.\nTRL matches the best, individually tuned TD-$n$, without needing to set $\\boldsymbol{n}$.\n\n\nThis is my favorite plot. We compared TRL with $n$-step TD learning with different values of $n$, from $1$ (pure TD) to $\\infty$ (pure MC). The result is really nice. TRL matches the best TD-$n$ on all tasks, without needing to set $\\boldsymbol{n}$! This is exactly what we wanted from the divide-and-conquer paradigm. By recursively splitting a trajectory into smaller ones, it can naturally handle long horizons, without having to arbitrarily choose the length of trajectory chunks.\nThe paper has a lot of additional experiments, analyses, and ablations. If you’re interested, check out our paper!\nWhat’s next?\nIn this post, I shared some promising results from our new divide-and-conquer value learning algorithm, Transitive RL. This is just the beginning of the journey. There are many open questions and exciting directions to explore:\nPerhaps the most important question is how to extend TRL to regular, reward-based RL tasks beyond goal-conditioned RL. Would regular RL have a similar divide-and-conquer structure that we can exploit? I’m quite optimistic about this, given that it is possible to convert any reward-based RL task to a goal-conditioned one at least in theory (see page 40 of this book).\nAnother important challenge is to deal with stochastic environments. The current version of TRL assumes deterministic dynamics, but many real-world environments are stochastic, mainly due to partial observability. For this, “stochastic” triangle inequalities might provide some hints.\nPractically, I think there is still a lot of room to further improve TRL. For example, we can find better ways to choose subgoal candidates (beyond the ones from the same trajectory), further reduce hyperparameters, further stabilize training, and simplify the algorithm even more.\nIn general, I’m really excited about the potential of the divide-and-conquer paradigm. I still think one of the most important problems in RL (and even in machine learning) is to find a scalable off-policy RL algorithm. I don’t know what the final solution will look like, but I do think divide and conquer, or recursive decision-making in general, is one of the strongest candidates toward this holy grail (by the way, I think the other strong contenders are (1) model-based RL and (2) TD learning with some “magic” tricks). Indeed, several recent works in other fields have shown the promise of recursion and divide-and-conquer strategies, such as shortcut models, log-linear attention, and recursive language models (and of course, classic algorithms like quicksort, segment trees, FFT, and so on). I hope to see more exciting progress in scalable off-policy RL in the near future!\nAcknowledgments\nI’d like to thank Kevin and Sergey for their helpful feedback on this post.\nThis post originally appeared on Seohong Park’s blog.",
    "datePublished": "2025-11-01T09:00:00.000Z",
    "url": "http://bair.berkeley.edu/blog/2025/11/01/rl-without-td-learning/",
    "chatCompletionSummary": null,
    "image": "https://bair.berkeley.edu/static/blog/rl-without-td-learning/teaser_short.png",
    "tags": [
      "AI News",
      "BAIR"
    ]
  }
]

export const getArticleById = (id: string): Article | undefined => {
  return articles.find((article) => article.id === id)
}

export const formatDate = (dateString: string): string => {
  try {
    const date = new Date(dateString)
    return new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    }).format(date)
  } catch (e) {
    return dateString
  }
}

export const extractImageFromDescription = (description: string): string | undefined => {
  const imgRegex = /<img.*?src=["'](.*?)["']/
  const match = description.match(imgRegex)
  return match ? match[1] : undefined
}

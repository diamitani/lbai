import Parser from "rss-parser";
import fs from "fs";
import path from "path";

// Define the Article interface matching the frontend
interface Article {
    id: string;
    title: string;
    author: string;
    description: string;
    summary: string;
    datePublished: string;
    url: string;
    chatCompletionSummary: string | null;
    image?: string;
    tags?: string[];
    category?: string;
}

const FEEDS = [
    // --- TEXT FEEDS ---
    { url: "https://machinelearningmastery.com/blog/feed/", source: "Machine Learning Mastery", type: "text" },
    { url: "https://marktechpost.com/feed/", source: "MarkTechPost", type: "text" },
    { url: "https://bair.berkeley.edu/blog/feed.xml", source: "BAIR", type: "text" },
    { url: "https://research.google/blog/rss", source: "Google Research", type: "text", image: "https://lh3.googleusercontent.com/1-qFkQ_sF6Yx6qw8z7_yZ5_8xJ6_qFkQ_sF6Yx6qw8z=w1200" },
    { url: "https://www.analyticsvidhya.com/feed/", source: "Analytics Vidhya", type: "text" },
    { url: "https://news.mit.edu/rss/topic/artificial-intelligence2", source: "MIT News", type: "text" },
    { url: "https://openai.com/news/rss.xml", source: "OpenAI", type: "text", image: "https://images.openai.com/blob/8b9658d3-5750-45j6-a4c4-7299c8515320/openai-logo.svg" },
    { url: "https://news.microsoft.com/source/topics/ai/feed/", source: "Microsoft AI", type: "text" },
    { url: "https://techcrunch.com/category/artificial-intelligence/feed/", source: "TechCrunch AI", type: "text" },
    { url: "https://www.wired.com/feed/tag/ai/latest/rss", source: "Wired AI", type: "text" },

    // --- YOUTUBE FEEDS ---
    { url: "https://www.youtube.com/feeds/videos.xml?channel_id=UCPjNBjflYl0-HQtUvOx0Ibw", source: "Greg Isenberg", type: "video" },
    { url: "https://www.youtube.com/feeds/videos.xml?channel_id=UCGf4yI4sM4-A7T6o-J_Y3qA", source: "Nick Saraev", type: "video" },
    { url: "https://www.youtube.com/feeds/videos.xml?channel_id=UCui4jxDaMb53Gdh-AZUTPAg", source: "Liam Ottley", type: "video" },
    { url: "https://www.youtube.com/feeds/videos.xml?channel_id=UC-zVytOQB62OwMhKRi0TDvg", source: "Nate Herk", type: "video" },
    { url: "https://www.youtube.com/feeds/videos.xml?channel_id=UC6sI43A0-a-P5k-d3D64B5g", source: "n8n", type: "video" },
];

const parser = new Parser({
    customFields: {
        item: [
            ['media:content', 'media'],
            ['content:encoded', 'contentEncoded'],
            ['media:group', 'mediaGroup'],
        ],
    },
});

function getPlaceholderImage(title: string): string {
    const placeholders = [
        "/placeholders/ai-1.png",
        "/placeholders/ai-2.png",
        "/placeholders/ai-3.png",
        "/placeholders/ai-4.png",
        "/placeholders/ai-5.png",
    ];
    let hash = 0;
    for (let i = 0; i < title.length; i++) {
        hash = title.charCodeAt(i) + ((hash << 5) - hash);
    }
    return placeholders[Math.abs(hash) % placeholders.length];
}

function categorize(title: string, summary: string): string {
    const text = (title + " " + summary).toLowerCase();

    if (text.includes("n8n") || text.includes("automation") || text.includes("workflow") || text.includes("make.com") || text.includes("zapier"))
        return "Automation";

    if (text.includes("agent") || text.includes("autonomous") || text.includes("crewai") || text.includes("autogen") || text.includes("agency") || text.includes("gpts") || text.includes("clawd") || text.includes("codex"))
        return "AI Agents";

    if (text.includes("tutorial") || text.includes("how to") || text.includes("guide") || text.includes("step-by-step") || text.includes("breakdown") || text.includes("explained") || text.includes("course"))
        return "Tutorials";

    if (text.includes("research") || text.includes("paper") || text.includes("study") || text.includes("model") || text.includes("benchmarks") || text.includes("scientific"))
        return "Research";

    return "AI News";
}

async function fetchFeeds() {
    console.log("Fetching AI News & YouTube feeds...");
    let articles: Article[] = [];

    const dateThreshold = new Date();
    dateThreshold.setDate(dateThreshold.getDate() - 30); // 30 days back

    for (const feedSource of FEEDS) {
        try {
            console.log(`Fetching ${feedSource.source}...`);
            const feed = await Promise.race([
                parser.parseURL(feedSource.url),
                new Promise<any>((_, reject) => setTimeout(() => reject(new Error('Timeout')), 15000))
            ]);

            let feedItems = feed.items.filter((item: any) => {
                const pubDate = new Date(item.isoDate || item.pubDate || new Date());
                if (isNaN(pubDate.getTime())) return true;
                return pubDate > dateThreshold;
            });

            if (feedItems.length < 5) {
                feedItems = feed.items.slice(0, 15);
            }

            const mappedItems = feedItems.map((item: any) => {
                let image = feedSource.image;

                if (feedSource.type === "video" && item.mediaGroup && item.mediaGroup['media:thumbnail']) {
                    image = item.mediaGroup['media:thumbnail'][0].$.url;
                }

                if (!image && item.media && item.media.$ && item.media.$.url) {
                    image = item.media.$.url;
                }

                if (!image && (item.content || item.contentEncoded)) {
                    const content = item.contentEncoded || item.content;
                    const imgMatch = content.match(/<img[^>]+src="([^">]+)"/);
                    if (imgMatch) image = imgMatch[1];
                }

                const category = categorize(item.title || "", item.contentSnippet || "");
                const author = item.creator || item.author || feedSource.source;

                return {
                    id: Buffer.from(item.link || item.title || "").toString('base64'),
                    title: item.title || "No Title",
                    author: author,
                    description: (item.contentSnippet || item.description || "").substring(0, 200) + "...",
                    summary: item.contentSnippet || "",
                    datePublished: item.isoDate || item.pubDate || new Date().toISOString(),
                    url: item.link || "",
                    chatCompletionSummary: null,
                    image: image || getPlaceholderImage(item.title || ""),
                    category: category,
                    tags: ["AI News", category, feedSource.source]
                };
            });

            articles = [...articles, ...mappedItems];
        } catch (error) {
            console.error(`  Error fetching ${feedSource.source}:`, error);
        }
    }

    articles = articles.filter((a, i, self) => i === self.findIndex((t) => t.url === a.url));
    articles.sort((a, b) => new Date(b.datePublished).getTime() - new Date(a.datePublished).getTime());

    articles = articles.slice(0, 250);

    const outputPath = path.resolve(__dirname, "../lib/article-data.ts");
    const fileContent = `export interface Article {
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
  category?: string
}

export const articles: Article[] = ${JSON.stringify(articles, null, 2)}

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
`;
    fs.writeFileSync(outputPath, fileContent);
    console.log(`Successfully synced ${articles.length} articles.`);
}

fetchFeeds();

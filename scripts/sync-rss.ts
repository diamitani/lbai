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
}

const FEEDS = [
    // 1. Machine Learning Mastery
    {
        url: "https://machinelearningmastery.com/blog/feed/",
        source: "Machine Learning Mastery",
    },
    // 2. MarkTechPost
    {
        url: "https://marktechpost.com/feed/",
        source: "MarkTechPost",
    },
    // 3. BAIR (Berkeley AI Research)
    {
        url: "https://bair.berkeley.edu/blog/feed.xml",
        source: "BAIR",
    },
    // 4. Google Research
    {
        url: "https://research.google/blog/rss",
        source: "Google Research",
        image: "https://lh3.googleusercontent.com/1-qFkQ_sF6Yx6qw8z7_yZ5_8xJ6_qFkQ_sF6Yx6qw8z=w1200",
    },
    // 5. Analytics Vidhya
    {
        url: "https://www.analyticsvidhya.com/feed/",
        source: "Analytics Vidhya",
    },
    // 6. MIT News » AI
    {
        url: "https://news.mit.edu/rss/topic/artificial-intelligence2",
        source: "MIT News",
    },
    // 7. OpenAI
    {
        url: "https://openai.com/news/rss.xml",
        source: "OpenAI",
        image: "https://images.openai.com/blob/8b9658d3-5750-45j6-a4c4-7299c8515320/openai-logo.svg",
    },
    // 8. Microsoft AI
    {
        url: "https://news.microsoft.com/source/topics/ai/feed/",
        source: "Microsoft AI",
    },
    // 9. TechCrunch AI
    {
        url: "https://techcrunch.com/category/artificial-intelligence/feed/",
        source: "TechCrunch AI",
    },
    // 10. Wired AI
    {
        url: "https://www.wired.com/feed/tag/ai/latest/rss",
        source: "Wired AI",
    }
];

const parser = new Parser({
    customFields: {
        item: [
            ['media:content', 'media'],
            ['content:encoded', 'contentEncoded'],
        ],
    },
});

async function fetchFeeds() {
    console.log("Fetching Expanded AI RSS feeds...");
    let articles: Article[] = [];

    // Calculate date threshold (7 days ago)
    // Extended to 7 days to ensure sufficient content from feeds that don't update daily
    // Fallback: If date filtering returns too few results, we'll take top 10 from each feed
    const sevenDaysAgo = new Date();
    sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);

    for (const feedSource of FEEDS) {
        try {
            console.log(`Fetching ${feedSource.source}...`);
            // Add timeout to prevent hanging
            const feed = await Promise.race([
                parser.parseURL(feedSource.url),
                new Promise<any>((_, reject) => setTimeout(() => reject(new Error('Timeout')), 10000))
            ]);

            // First, try date filtering (7 days)
            let feedArticles = feed.items
                .filter((item: any) => {
                    // Filter out old articles
                    const pubDate = new Date(item.isoDate || item.pubDate || new Date());
                    // If date processing fails, default to include it (it's better to show something than nothing if date parsing is weird)
                    if (isNaN(pubDate.getTime())) return true;
                    return pubDate > sevenDaysAgo;
                });

            // Fallback: If we got fewer than 5 articles, just take the top 10 most recent regardless of date
            if (feedArticles.length < 5) {
                console.log(`  Only ${feedArticles.length} recent articles found, taking top 10 regardless of date...`);
                feedArticles = feed.items.slice(0, 10);
            }

            feedArticles = feedArticles.map((item: any) => {
                // Advanced image extraction
                // 1. Check explicit source image
                let image = feedSource.image;

                // 2. Check media:content
                if (item.media && item.media.$ && item.media.$.url) {
                    image = item.media.$.url;
                }

                // 3. Check content for img tag
                if ((!image || image === feedSource.image) && (item.content || item.contentEncoded)) {
                    const content = item.contentEncoded || item.content;
                    const imgMatch = content.match(/<img[^>]+src="([^">]+)"/);
                    if (imgMatch) image = imgMatch[1];
                }

                return {
                    id: Buffer.from(item.link || item.title || "").toString('base64'),
                    title: item.title || "No Title",
                    author: item.creator || item.author || feedSource.source,
                    description: (item.contentSnippet || item.description || "").substring(0, 200) + "...",
                    summary: item.contentSnippet || "",
                    datePublished: item.isoDate || item.pubDate || new Date().toISOString(),
                    url: item.link || "",
                    chatCompletionSummary: null,
                    image: image,
                    tags: ["AI News", feedSource.source]
                };
            });

            console.log(`  ✓ Fetched ${feedArticles.length} articles from ${feedSource.source}`);
            articles = [...articles, ...feedArticles];
        } catch (error) {
            console.error(`  Error fetching ${feedSource.source}:`, error);
        }
    }

    // Deduplicate by URL
    articles = articles.filter(
        (article, index, self) =>
            index === self.findIndex((t) => t.url === article.url)
    );

    // Sort by date descending
    articles.sort((a, b) => new Date(b.datePublished).getTime() - new Date(a.datePublished).getTime());

    // Limit to 100 items
    articles = articles.slice(0, 100);

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
}

// Articles fetched from RSS feeds
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

export const extractImageFromDescription = (description: string): string | undefined => {
  const imgRegex = /<img.*?src=["'](.*?)["']/
  const match = description.match(imgRegex)
  return match ? match[1] : undefined
}
`;

    fs.writeFileSync(outputPath, fileContent);
    console.log(`Successfully synced ${articles.length} articles to ${outputPath}`);
}

fetchFeeds();

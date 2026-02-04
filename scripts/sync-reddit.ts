import fs from "fs";
import path from "path";

// Define the Trend interface
interface Trend {
    topic: string;
    count: number;
    sentiment: "positive" | "negative" | "neutral";
    threads: { title: string; url: string; score: number }[];
}

const SUBREDDITS = [
    "ArtificialInteligence",
    "OpenAI",
    "Singularity",
    "MachineLearning",
    "LocalLLaMA"
];

const IGNORE_WORDS = ["the", "and", "for", "that", "this", "with", "from", "pdf", "what", "how", "why", "are", "you", "can", "not", "have", "has", "had", "will", "would", "could", "should", "but", "about", "into", "over", "after", "before", "under", "some", "any", "all", "most", "more", "less", "few", "many", "much", "such", "own", "other", "another", "one", "two", "three", "first", "second", "third", "last", "next", "previous", "same", "different", "good", "bad", "great", "best", "better", "worse", "worst", "high", "low", "big", "small", "large", "tiny", "huge", "long", "short", "old", "new", "young", "early", "late", "recent", "past", "future", "now", "then", "here", "there", "where", "when", "who", "whom", "whose", "which"];

async function fetchRedditTrends() {
    console.log("Fetching Reddit trends...");
    let allThreads: any[] = [];

    for (const sub of SUBREDDITS) {
        try {
            console.log(`Fetching r/${sub}...`);
            const response = await fetch(`https://www.reddit.com/r/${sub}/hot.json?limit=10`, {
                headers: {
                    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
                }
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            const posts = data.data.children.map((child: any) => child.data);
            allThreads = [...allThreads, ...posts];

            // Wait a bit to be nice to Reddit
            await new Promise(resolve => setTimeout(resolve, 1000));

        } catch (error) {
            console.error(`Error fetching r/${sub}:`, error);
        }
    }

    // Simple keyword analysis
    const wordCounts: Record<string, number> = {};
    const topicThreads: Record<string, any[]> = {};

    allThreads.forEach(thread => {
        if (thread.stickied) return; // Ignore pinned posts

        const text = `${thread.title} ${thread.selftext}`.toLowerCase();
        const words = text.match(/\b[a-z]{3,}\b/g) || [];

        words.forEach(word => {
            if (!IGNORE_WORDS.includes(word)) {
                wordCounts[word] = (wordCounts[word] || 0) + 1 + (thread.score > 100 ? 1 : 0); // Boost usage by score heavily simplified

                if (!topicThreads[word]) topicThreads[word] = [];
                // Only add if not already present
                if (!topicThreads[word].find(t => t.url === thread.url)) {
                    topicThreads[word].push({
                        title: thread.title,
                        url: `https://reddit.com${thread.permalink}`,
                        score: thread.score
                    });
                }
            }
        });
    });

    // Sort by count
    const sortedTrends = Object.entries(wordCounts)
        .sort(([, a], [, b]) => b - a)
        .slice(0, 10)
        .map(([topic, count]) => ({
            topic: topic.charAt(0).toUpperCase() + topic.slice(1),
            count,
            sentiment: "neutral", // consistent placeholder
            threads: topicThreads[topic].sort((a, b) => b.score - a.score).slice(0, 3)
        }));

    const outputPath = path.resolve(__dirname, "../lib/trending-data.ts");

    const fileContent = `export interface Trend {
  topic: string
  count: number
  sentiment: "positive" | "negative" | "neutral"
  threads: { title: string; url: string; score: number }[]
}

export const trends: Trend[] = ${JSON.stringify(sortedTrends, null, 2)}
`;

    fs.writeFileSync(outputPath, fileContent);
    console.log(`Successfully synced ${sortedTrends.length} trends to ${outputPath}`);
}

fetchRedditTrends();

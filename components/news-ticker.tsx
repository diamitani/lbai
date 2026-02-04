import { articles } from "@/lib/article-data"
import { Card, CardContent } from "@/components/ui/card"
import { formatDate } from "@/lib/article-data"
import Link from "next/link"

export default function NewsTicker() {
    const latestArticles = articles.slice(0, 3)

    return (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {latestArticles.map((article) => (
                <Link href={article.url} target="_blank" key={article.id} className="block group">
                    <Card className="h-full bg-card/40 border-white/5 hover:border-primary/50 transition-all overflow-hidden">
                        {article.image && (
                            <div className="aspect-video w-full overflow-hidden">
                                <img src={article.image} alt={article.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                            </div>
                        )}
                        <CardContent className="p-4 flex flex-col gap-2">
                            <div className="flex items-center justify-between text-xs text-muted-foreground">
                                <span>{article.author}</span>
                                <span>{formatDate(article.datePublished)}</span>
                            </div>
                            <h4 className="font-semibold text-white group-hover:text-primary transition-colors line-clamp-2 leading-tight">
                                {article.title}
                            </h4>
                            <p className="text-xs text-muted-foreground line-clamp-2">
                                {article.summary}
                            </p>
                        </CardContent>
                    </Card>
                </Link>
            ))}
        </div>
    )
}

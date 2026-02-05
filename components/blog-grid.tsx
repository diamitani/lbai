import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Article, formatDate } from "@/lib/article-data"

interface BlogGridProps {
  articles: Article[]
}

export default function BlogGrid({ articles }: BlogGridProps) {
  if (articles.length === 0) {
    return (
      <div className="text-center py-20">
        <p className="text-muted-foreground">No articles found matching your criteria.</p>
      </div>
    )
  }

  return (
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
      {articles.map((article) => (
        <Link href={article.url} key={article.id} target="_blank" rel="noopener noreferrer">
          <Card className="overflow-hidden h-full hover:shadow-xl transition-all duration-300 border-white/10 bg-white/5 backdrop-blur-sm group">
            <div className="relative overflow-hidden aspect-[16/9]">
              <img
                src={article.image || "/placeholder.svg?height=250&width=500&query=AI technology"}
                alt={article.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute top-3 left-3">
                <Badge className="bg-violet-600 hover:bg-violet-700">{article.category || "AI News"}</Badge>
              </div>
            </div>
            <CardContent className="p-6">
              <div className="flex justify-between items-center mb-3">
                <span className="text-xs text-muted-foreground">{formatDate(article.datePublished)}</span>
              </div>
              <h3 className="font-bold text-xl mb-2 line-clamp-2 text-white group-hover:text-violet-400 transition-colors">
                {article.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                {article.chatCompletionSummary || article.summary}
              </p>
            </CardContent>
            <CardFooter className="px-6 py-4 border-t border-white/5">
              <div className="flex items-center gap-3">
                <Avatar className="h-8 w-8 border border-white/10">
                  <AvatarFallback className="bg-violet-950 text-[10px] text-violet-200">
                    {article.author
                      .split(" ")
                      .map((n) => n[0])
                      .slice(0, 2)
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <div className="flex flex-col">
                  <span className="text-sm font-medium text-white/80">{article.author}</span>
                </div>
              </div>
            </CardFooter>
          </Card>
        </Link>
      ))}
    </div>
  )
}

"use client"

import { useState, useMemo } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search, Filter } from "lucide-react"
import BlogGrid from "@/components/blog-grid"
import { articles } from "@/lib/article-data"
import { Badge } from "@/components/ui/badge"

const CATEGORIES = ["All", "AI News", "Automation", "AI Agents", "Tutorials", "Research"]

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")

  const filteredArticles = useMemo(() => {
    return articles.filter((article) => {
      const matchesSearch =
        article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.summary.toLowerCase().includes(searchQuery.toLowerCase())

      const matchesCategory = selectedCategory === "All" || article.category === selectedCategory

      return matchesSearch && matchesCategory
    })
  }, [searchQuery, selectedCategory])

  return (
    <div className="container py-12">
      <div className="flex flex-col gap-12">
        {/* Header */}
        <div className="space-y-4 max-w-2xl">
          <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl text-white">
            AI <span className="text-gradient">Knowledge Hub</span>
          </h1>
          <p className="text-muted-foreground text-lg">
            Explore the latest in artificial intelligence, automation, and intelligent agents through our curated articles and tutorials.
          </p>
        </div>

        {/* Filters and Search */}
        <div className="flex flex-col md:flex-row gap-6 items-start md:items-center justify-between bg-white/5 p-6 rounded-2xl border border-white/10 backdrop-blur-sm">
          <div className="relative w-full max-w-md group">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground group-focus-within:text-violet-400 transition-colors" />
            <Input
              placeholder="Search articles, authors or topics..."
              className="pl-10 h-12 bg-black/40 border-white/10 focus:border-violet-500/50 transition-all rounded-xl"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${selectedCategory === category
                    ? "bg-violet-600 text-white shadow-lg shadow-violet-500/25"
                    : "bg-white/5 text-muted-foreground hover:bg-white/10 hover:text-white"
                  }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Filter className="h-4 w-4" />
          <span>Showing {filteredArticles.length} articles</span>
          {selectedCategory !== "All" && (
            <Badge variant="secondary" className="bg-violet-500/10 text-violet-400 border-none">
              Category: {selectedCategory}
            </Badge>
          )}
        </div>

        {/* Grid */}
        <BlogGrid articles={filteredArticles} />
      </div>
    </div>
  )
}

"use client"

import type React from "react"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Search, ExternalLink } from "lucide-react"
import ToolsGrid from "@/components/tools-grid"
import { getAllCategories } from "@/lib/tools-data"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"

export default function ToolsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const categories = ["all", ...getAllCategories()]

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    // Search functionality would be implemented here
  }

  return (
    <div className="container py-12">
      <div className="flex flex-col gap-6">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tight text-white mb-2"><span className="text-gradient">AI Tools</span> & Resources</h1>
          <p className="text-muted-foreground text-lg max-w-2xl">
            A curated collection of state-of-the-art AI tools, rigorously tested to help you build faster and better.
            Includes affiliate partner exclusives for our community.
          </p>
        </div>

        <Card className="bg-primary/10 border-primary/20 backdrop-blur-md">
          <CardContent className="p-6 flex flex-col sm:flex-row justify-between items-center gap-4">
            <div>
              <h2 className="text-xl font-bold mb-1 text-white">Have a tool to submit?</h2>
              <p className="text-muted-foreground">We are constantly scouting for the bleeding edge of AI technology.</p>
            </div>
            <Button size="lg" className="whitespace-nowrap bg-primary hover:bg-primary/90 text-white shadow-[0_0_15px_rgba(124,58,237,0.5)]" asChild>
              <Link href="#" target="_blank" rel="noopener noreferrer">
                Submit Tool
                <ExternalLink className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </CardContent>
        </Card>

        <form onSubmit={handleSearch} className="flex w-full max-w-lg items-center space-x-2">
          <Input
            placeholder="Search for tools..."
            className="h-10"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <Button type="submit" size="icon" className="h-10 w-10">
            <Search className="h-4 w-4" />
          </Button>
        </form>

        <Tabs defaultValue="all" className="w-full">
          <TabsList className="mb-8 flex flex-wrap h-auto">
            {categories.map((category) => (
              <TabsTrigger key={category} value={category} className="capitalize">
                {category === "all" ? "All Tools" : category}
              </TabsTrigger>
            ))}
          </TabsList>

          {categories.map((category) => (
            <TabsContent key={category} value={category} className="mt-0">
              <ToolsGrid category={category} searchQuery={searchQuery} />
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </div>
  )
}

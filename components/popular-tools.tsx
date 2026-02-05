import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, ExternalLink, Star } from "lucide-react"
import { getFeaturedTools } from "@/lib/tools-data"

export default function PopularTools() {
  // Get up to 8 featured tools for the homepage
  const featuredTools = getFeaturedTools().slice(0, 8)

  return (
    <section className="container py-8 md:py-10">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
        <div>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-2">Popular AI Tools</h2>
          <p className="text-muted-foreground text-lg">
            Discover our featured AI tools and custom GPTs to supercharge your workflow.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 mt-4 md:mt-0">
          <Button variant="ghost" asChild>
            <Link href="/tools">
              View All Tools
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {featuredTools.map((tool) => (
          <Card key={tool.id} className="flex flex-col bg-card/50 border-white/10 hover:border-primary/50 transition-all group">
            <CardHeader className="pb-2">
              <div className="flex justify-between items-start">
                <CardTitle className="text-lg font-bold group-hover:text-primary transition-colors">{tool.name}</CardTitle>
                <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
              </div>
              <div className="flex gap-2 items-center mt-1">
                <Badge variant="secondary" className="text-[10px] py-0 px-2">
                  {tool.category}
                </Badge>
                <span className={`text-[10px] font-medium uppercase tracking-wider ${tool.type === 'Custom GPT' ? 'text-orange-400' : 'text-blue-400'}`}>
                  {tool.type}
                </span>
              </div>
            </CardHeader>
            <CardContent className="py-4 flex-grow">
              <p className="text-muted-foreground text-sm line-clamp-2">{tool.description}</p>
            </CardContent>
            <CardFooter className="pt-0">
              <Button className={`${tool.type === 'Custom GPT' ? 'bg-orange-500/10 border-orange-500/20 text-orange-300 hover:bg-orange-500/30' : 'bg-primary/20 hover:bg-primary/40 text-primary-foreground'} w-full border border-primary/20`} asChild>
                <Link href={tool.link} target="_blank" rel="noopener noreferrer">
                  {tool.type === 'Custom GPT' ? 'Try GPT' : 'Try Tool'}
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  )
}

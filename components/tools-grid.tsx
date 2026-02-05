import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Star } from "lucide-react"
import Link from "next/link"
import { tools } from "@/lib/tools-data"

interface ToolsGridProps {
  category: string
  searchQuery?: string
}

export default function ToolsGrid({ category, searchQuery = "" }: ToolsGridProps) {
  // Filter tools based on category and search query
  const filteredTools = tools.filter((tool) => {
    // Filter by category
    const categoryMatch = category === "all" || tool.category === category

    // Filter by search query if provided
    const searchMatch =
      searchQuery === "" ||
      tool.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tool.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tool.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (tool.useCase && tool.useCase.toLowerCase().includes(searchQuery.toLowerCase())) ||
      (tool.industry && tool.industry.toLowerCase().includes(searchQuery.toLowerCase()))

    return categoryMatch && searchMatch
  })

  if (filteredTools.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-muted-foreground">No tools found matching your criteria.</p>
      </div>
    )
  }

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {filteredTools.map((tool) => (
        <Card key={tool.id} className="flex flex-col bg-card/50 backdrop-blur-sm border-white/10 hover:border-primary/50 transition-colors group relative overflow-hidden">
          <CardHeader className="pb-2">
            <div className="flex justify-between items-start gap-2">
              <CardTitle className="text-lg font-bold text-white group-hover:text-primary transition-colors">{tool.name}</CardTitle>
              {tool.featured && <Star className="h-4 w-4 text-yellow-500 fill-yellow-500 shrink-0" />}
            </div>
            <div className="flex gap-2 mt-1 flex-wrap">
              <Badge variant="secondary" className="bg-secondary/50 text-[10px] py-0 px-2 h-5">
                {tool.category}
              </Badge>
              <Badge variant="outline" className={`text-[10px] py-0 px-2 h-5 ${tool.type === 'Custom GPT' ? 'border-orange-500/50 text-orange-400' : 'border-blue-500/50 text-blue-400'}`}>
                {tool.type}
              </Badge>
            </div>
          </CardHeader>
          <CardContent className="py-4 flex-grow space-y-4">
            <p className="text-muted-foreground text-sm line-clamp-3 leading-relaxed">{tool.description}</p>

            {tool.educationalValue && (
              <div className="text-[11px] text-primary/80 italic border-l-2 border-primary/30 pl-2 py-0.5">
                "{tool.educationalValue}"
              </div>
            )}

            <div className="flex flex-wrap gap-2">
              {tool.useCase && (
                <Badge variant="outline" className="text-[10px] border-white/10 text-muted-foreground py-0">
                  {tool.useCase}
                </Badge>
              )}
              {tool.industry && (
                <Badge variant="outline" className="text-[10px] border-white/10 text-muted-foreground py-0">
                  {tool.industry}
                </Badge>
              )}
            </div>
          </CardContent>
          <CardFooter className="pt-0">
            <Button className={`${tool.type === 'Custom GPT' ? 'bg-orange-500/10 border-orange-500/20 text-orange-300 hover:bg-orange-500/30' : 'bg-primary/20 hover:bg-primary/40 text-primary-foreground'} w-full border border-primary/20`} asChild>
              <Link href={tool.affiliateLink || tool.link} target="_blank" rel="noopener noreferrer">
                {tool.type === 'Custom GPT' ? 'Try GPT' : 'Open Tool'}
                <ExternalLink className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}

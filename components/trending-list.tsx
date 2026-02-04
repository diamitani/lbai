import { trends } from "@/lib/trending-data"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

export default function TrendingList() {
    if (trends.length === 0) {
        return <div className="text-muted-foreground text-sm">No trend data available.</div>
    }

    return (
        <div className="grid gap-3">
            {trends.slice(0, 5).map((trend, i) => (
                <div key={i} className="group flex items-center justify-between p-3 rounded-lg bg-card/40 border border-white/5 hover:bg-card/60 transition-all">
                    <div className="flex flex-col gap-1">
                        <div className="flex items-center gap-2">
                            <span className="text-base font-semibold text-white group-hover:text-primary transition-colors">#{trend.topic}</span>
                            <Badge variant="secondary" className="text-[10px] h-5 px-1.5">{trend.count} mentions</Badge>
                        </div>
                        <div className="text-xs text-muted-foreground truncate max-w-[200px]">
                            {trend.threads[0]?.title || "Trending discussion..."}
                        </div>
                    </div>
                    <Link href={trend.threads[0]?.url || "#"} target="_blank" className="p-2 rounded-full hover:bg-white/10 text-muted-foreground hover:text-white transition-colors">
                        <ArrowUpRight className="h-4 w-4" />
                    </Link>
                </div>
            ))}
        </div>
    )
}

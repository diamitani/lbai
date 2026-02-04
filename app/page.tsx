import Hero from "@/components/hero"
import Features from "@/components/features"
import NewsletterFeature from "@/components/newsletter-feature"
import LatestVideos from "@/components/latest-videos"
import PopularTools from "@/components/popular-tools"
import CallToAction from "@/components/call-to-action"
import FeaturedArticle from "@/components/featured-article"
import TrendingList from "@/components/trending-list"
import NewsTicker from "@/components/news-ticker"

export default function Home() {
  return (
    <div className="flex flex-col gap-12 pb-20">
      <Hero />

      {/* What's Trending in AI Section */}
      <section className="container py-8">
        <div className="flex flex-col gap-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold tracking-tight text-white flex items-center gap-2">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
              </span>
              What's Trending in AI
            </h2>
            <span className="text-sm text-muted-foreground">Live from Reddit & News</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Reddit Trends Column */}
            <div className="lg:col-span-1 space-y-4">
              <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">Community Buzz</h3>
              <div className="space-y-3">
                <TrendingList />
              </div>
            </div>

            {/* News Ticker / Latest Column */}
            <div className="lg:col-span-2 space-y-4">
              <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">Latest Headlines</h3>
              <NewsTicker />
            </div>
          </div>
        </div>
      </section>

      {/* Education / US AI Action Plan Section */}
      <section className="container relative group">
        <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-violet-600 via-fuchsia-600 to-cyan-500 opacity-20 blur transition duration-500 group-hover:opacity-40" />
        <div className="relative rounded-xl border border-white/10 bg-black/50 p-8 backdrop-blur-xl sm:p-12">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="space-y-4 md:w-2/3">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Aligning with the <span className="text-gradient">US AI Action Plan</span>
              </h2>
              <p className="text-lg text-muted-foreground/90">
                We are committed to educating the next generation of AI builders. Our platform provides the resources, tools, and community needed to master state-of-the-art AI development securely and ethically.
              </p>
            </div>
            <div className="flex flex-col gap-3 md:w-auto">
              {/* Placeholder buttons for future implementation */}
              <div className="h-10 w-40 rounded-full bg-white/5 animate-pulse" />
            </div>
          </div>
        </div>
      </section>

      <Features />
      <PopularTools />
      <LatestVideos />
      <FeaturedArticle />
      <NewsletterFeature />
      <CallToAction />
    </div>
  )
}

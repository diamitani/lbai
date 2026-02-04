import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Header from "@/components/header"
import Footer from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Live Build AI - Learn, Build, Love AI",
  description: "The premier platform for building state-of-the-art AI applications. Join the revolution.",
  generator: 'Live Build AI',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <body className={`${inter.className} min-h-screen bg-background antialiased selection:bg-primary/20 selection:text-primary`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange>
          <div className="relative flex min-h-screen flex-col overflow-hidden">
            {/* Ambient Background Effects */}
            <div className="pointer-events-none fixed inset-0 z-0 bg-[radial-gradient(circle_at_50%_-20%,rgba(120,40,200,0.15),rgba(0,0,0,0))]" />
            <div className="pointer-events-none fixed inset-0 z-0 bg-[radial-gradient(circle_at_80%_80%,rgba(0,200,255,0.05),rgba(0,0,0,0))]" />

            <Header />
            <main className="flex-1 relative z-10">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}

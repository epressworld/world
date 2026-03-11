import fs from "node:fs/promises"
import path from "node:path"
import GithubSlugger from "github-slugger"
import { Github } from "lucide-react"
import { SiteFooter } from "@/components/home/site-footer"
import { SiteNav } from "@/components/home/site-nav"
import { TocNav } from "@/components/whitepaper/toc-nav"
import { WhitepaperRenderer } from "@/components/whitepaper-renderer"

function extractToc(content) {
  const lines = content.replace(/\r/g, "").split("\n")
  const items = []
  const slugger = new GithubSlugger()
  let inFence = false

  for (const line of lines) {
    if (line.startsWith("```")) {
      inFence = !inFence
      continue
    }
    if (inFence) {
      continue
    }
    const match = line.match(/^(#{1,3})\s+(.+)$/)
    if (!match) {
      continue
    }
    const level = match[1].length
    const text = match[2].replace(/\\\./g, ".").trim()
    const id = slugger.slug(text)
    items.push({ level, text, id })
  }
  return items
}

export const metadata = {
  title: "epress world protocol Whitepaper",
  description:
    "Read the epress world protocol whitepaper with proper markdown, math, and diagram rendering.",
}

export default async function WhitepaperPage() {
  const whitepaperPath = path.join(process.cwd(), "WHITEPAPER.md")
  const content = await fs.readFile(whitepaperPath, "utf8")
  const toc = extractToc(content)

  return (
    <div className="min-h-screen bg-dark-bg text-dark-text flex flex-col">
      <SiteNav />

      <main className="flex-1 py-12">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-8">
            <div>
              <h1 className="text-2xl font-bold text-white mb-2">Whitepaper</h1>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-dark-muted">
                <span>Version 1.0</span>
                <span>•</span>
                <span>
                  Author:{" "}
                  <a
                    href="https://garbin.blog"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary-300"
                  >
                    Garbin Huang
                  </a>
                </span>
                <span>•</span>
                <span>September 24, 2025</span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <a
                href="https://github.com/epressworld/epress/blob/main/WHITEPAPER.md"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary inline-flex items-center gap-2"
              >
                <Github className="w-4 h-4" />
                View on GitHub
              </a>
            </div>
          </div>

          <div className="grid gap-8 lg:grid-cols-[280px_minmax(0,1fr)]">
            <aside className="lg:sticky lg:top-24 lg:h-[calc(100vh-8rem)] lg:overflow-auto">
              <details
                className="rounded-xl border border-dark-border bg-dark-surface/70 p-4 lg:hidden"
                open
              >
                <summary className="cursor-pointer text-sm font-semibold text-white">
                  Table of Contents
                </summary>
                <div className="mt-3">
                  <TocNav items={toc} />
                </div>
              </details>

              <div className="hidden rounded-xl border border-dark-border bg-dark-surface/70 p-4 lg:block">
                <p className="mb-3 text-sm font-semibold text-white">
                  Table of Contents
                </p>
                <TocNav items={toc} />
              </div>
            </aside>

            <div className="min-w-0">
              <WhitepaperRenderer content={content} />
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  )
}

import fs from "node:fs/promises"
import path from "node:path"
import GithubSlugger from "github-slugger"
import Link from "next/link"
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
    <div className="min-h-screen bg-dark-bg text-dark-text">
      <header className="border-b border-dark-border">
        <div className="container-custom flex min-h-16 flex-wrap items-center justify-between gap-3 py-2">
          <Link
            href="/"
            className="text-sm text-dark-muted hover:text-dark-text"
          >
            Back to Home
          </Link>
          <div className="flex flex-wrap items-center gap-4 text-sm">
            <a
              href="/WHITEPAPER.md"
              className="text-primary hover:text-primary-300"
            >
              Source Markdown
            </a>
            <a
              href="https://github.com/epressworld/epress/blob/main/WHITEPAPER.md"
              target="_blank"
              rel="noopener noreferrer"
              className="text-dark-muted hover:text-dark-text"
            >
              View on GitHub
            </a>
          </div>
        </div>
      </header>

      <main className="container-custom py-12">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[280px_minmax(0,1fr)]">
          <aside className="lg:sticky lg:top-8 lg:h-[calc(100vh-4rem)] lg:overflow-auto">
            <details
              className="rounded-xl border border-dark-border bg-dark-surface/70 p-4 lg:hidden"
              open
            >
              <summary className="cursor-pointer text-sm font-semibold text-white">
                Table of Contents
              </summary>
              <nav className="mt-3 space-y-1 text-sm">
                {toc.map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    className={`block rounded px-2 py-1 text-dark-muted hover:bg-dark-bg hover:text-primary ${item.level === 3 ? "ml-3" : ""}`}
                  >
                    {item.text}
                  </a>
                ))}
              </nav>
            </details>

            <div className="hidden rounded-xl border border-dark-border bg-dark-surface/70 p-4 lg:block">
              <p className="mb-3 text-sm font-semibold text-white">
                Table of Contents
              </p>
              <nav className="space-y-1 text-sm">
                {toc.map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    className={`block rounded px-2 py-1 text-dark-muted hover:bg-dark-bg hover:text-primary ${item.level === 1 ? "font-semibold text-gray-300" : ""} ${item.level === 3 ? "ml-3" : ""}`}
                  >
                    {item.text}
                  </a>
                ))}
              </nav>
            </div>
          </aside>

          <div className="min-w-0">
            <WhitepaperRenderer content={content} />
          </div>
        </div>
      </main>
    </div>
  )
}

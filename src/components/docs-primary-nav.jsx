"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

export function DocsPrimaryNav() {
  const pathname = usePathname()
  const isDeveloper = pathname.startsWith("/docs/developer")

  return (
    <div className="flex w-full items-center gap-2 overflow-x-auto rounded-lg border border-dark-border bg-dark-surface/70 p-1 sm:w-auto">
      <Link
        href="/docs"
        className={`whitespace-nowrap rounded-md px-3 py-1.5 text-sm transition-colors ${!isDeveloper ? "bg-primary/15 text-primary border border-primary/35" : "text-dark-muted hover:text-dark-text"}`}
      >
        Node Operator Docs
      </Link>
      <Link
        href="/docs/developer"
        className={`whitespace-nowrap rounded-md px-3 py-1.5 text-sm transition-colors ${isDeveloper ? "bg-primary/15 text-primary border border-primary/35" : "text-dark-muted hover:text-dark-text"}`}
      >
        Developer Docs
      </Link>
    </div>
  )
}

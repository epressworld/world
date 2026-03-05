"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  ewpDocsNav,
  ewpDocsNavGroups,
  nodeDeveloperDocsNav,
  nodeOperatorDocsNav,
} from "@/app/docs/config"

export function DocsSidebar() {
  const pathname = usePathname()
  const isMatch = (href) => {
    if (href === "/docs") return pathname === "/docs"
    return pathname === href || pathname.startsWith(`${href}/`)
  }
  const getActiveHref = (items) => {
    const matched = items
      .map((item) => item.href)
      .filter((href) => isMatch(href))
    if (matched.length === 0) return null
    return matched.sort((a, b) => b.length - a.length)[0]
  }
  const isDeveloper = pathname.startsWith("/docs/developer")

  if (!isDeveloper) {
    const activeHref = getActiveHref(nodeOperatorDocsNav)
    return (
      <div className="space-y-6">
        <div className="rounded-xl border border-dark-border bg-dark-surface/70 p-4">
          <p className="mb-3 text-sm font-semibold text-white">
            Node Operator Docs
          </p>
          <nav className="space-y-1">
            {nodeOperatorDocsNav.map((item) => {
              const active = activeHref === item.href
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`block rounded-lg px-3 py-2 text-sm transition-colors ${active ? "bg-primary/15 text-primary border border-primary/35" : "text-dark-muted hover:bg-dark-bg hover:text-dark-text border border-transparent"}`}
                >
                  {item.label}
                </Link>
              )
            })}
          </nav>
        </div>
      </div>
    )
  }

  const ewpActiveHref = getActiveHref(ewpDocsNav)
  const nodeDevActiveHref = getActiveHref(nodeDeveloperDocsNav)
  const activeDeveloperTrack = pathname.startsWith("/docs/developer/ewp")
    ? "ewp"
    : pathname.startsWith("/docs/developer/node")
      ? "node"
      : null
  const showEwpNav = activeDeveloperTrack === "ewp"
  const showNodeNav = activeDeveloperTrack === "node"

  return (
    <div className="space-y-6">
      <div className="rounded-xl border border-dark-border bg-dark-surface/70 p-4">
        <div className="mb-3 flex items-center justify-between gap-2">
          <p className="text-sm font-semibold text-white">
            epress world protocol
          </p>
          {!showEwpNav ? (
            <Link
              href="/docs/developer/ewp"
              className="rounded-md border border-dark-border px-2 py-1 text-xs text-dark-muted hover:text-dark-text"
            >
              Open
            </Link>
          ) : null}
        </div>
        {showEwpNav ? (
          <div className="space-y-4">
            {ewpDocsNavGroups.map((group) => (
              <div key={group.label} className="space-y-1">
                <p className="px-1 text-xs uppercase tracking-wide text-dark-muted">
                  {group.label}
                </p>
                <nav className="space-y-1">
                  {group.items.map((item) => {
                    const active = ewpActiveHref === item.href
                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        className={`block rounded-lg px-3 py-2 text-sm transition-colors ${active ? "bg-primary/15 text-primary border border-primary/35" : "text-dark-muted hover:bg-dark-bg hover:text-dark-text border border-transparent"}`}
                      >
                        {item.label}
                      </Link>
                    )
                  })}
                </nav>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-xs text-dark-muted">
            Collapsed while browsing epress node docs.
          </p>
        )}
      </div>

      <div className="rounded-xl border border-dark-border bg-dark-surface/70 p-4">
        <div className="mb-3 flex items-center justify-between gap-2">
          <p className="text-sm font-semibold text-white">
            epress node Developer Docs
          </p>
          {!showNodeNav ? (
            <Link
              href="/docs/developer/node"
              className="rounded-md border border-dark-border px-2 py-1 text-xs text-dark-muted hover:text-dark-text"
            >
              Open
            </Link>
          ) : null}
        </div>
        {showNodeNav ? (
          <nav className="space-y-1">
            {nodeDeveloperDocsNav.map((item) => {
              const active = nodeDevActiveHref === item.href
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`block rounded-lg px-3 py-2 text-sm transition-colors ${active ? "bg-primary/15 text-primary border border-primary/35" : "text-dark-muted hover:bg-dark-bg hover:text-dark-text border border-transparent"}`}
                >
                  {item.label}
                </Link>
              )
            })}
          </nav>
        ) : (
          <p className="text-xs text-dark-muted">
            Collapsed while browsing epress world protocol docs.
          </p>
        )}
      </div>
    </div>
  )
}

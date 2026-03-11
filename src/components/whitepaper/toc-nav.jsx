"use client"

import { useEffect, useState } from "react"

export function TocNav({ items }) {
  const [activeId, setActiveId] = useState(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        })
      },
      {
        rootMargin: "-20% 0px -80% 0px",
        threshold: 0,
      },
    )

    const headings = items
      .map((item) => document.getElementById(item.id))
      .filter(Boolean)

    headings.forEach((heading) => {
      observer.observe(heading)
    })

    return () => {
      headings.forEach((heading) => {
        observer.unobserve(heading)
      })
    }
  }, [items])

  return (
    <nav className="space-y-1 text-sm">
      {items.map((item) => (
        <a
          key={item.id}
          href={`#${item.id}`}
          className={`block rounded px-2 py-1 transition-colors ${
            item.level === 1 ? "font-semibold text-gray-300" : ""
          } ${item.level === 3 ? "ml-3" : ""} ${
            activeId === item.id
              ? "bg-primary/20 text-primary"
              : "text-dark-muted hover:bg-dark-bg hover:text-primary"
          }`}
        >
          {item.text}
        </a>
      ))}
    </nav>
  )
}

"use client"

import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

const SECTIONS = [
  { id: "identity", label: "Identity" },
  { id: "proof-of-source", label: "Proof of Source" },
  { id: "nodes-protocol", label: "Nodes & Protocol" },
  { id: "content-flow", label: "Content Flow" },
  { id: "timeline", label: "Timeline" },
]

export function StickyNav() {
  const [activeSection, setActiveSection] = useState("identity")

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      {
        rootMargin: "-20% 0px -80% 0px",
        threshold: 0,
      },
    )

    SECTIONS.forEach(({ id }) => {
      const element = document.getElementById(id)
      if (element) observer.observe(element)
    })

    return () => observer.disconnect()
  }, [])

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <nav className="sticky top-0 z-40 border-b border-dark-border bg-dark-bg/95 backdrop-blur-md">
      <div className="container-custom">
        <div className="flex items-center gap-1 overflow-x-auto py-3 scrollbar-hide">
          {SECTIONS.map((section) => (
            <button
              key={section.id}
              type="button"
              onClick={() => scrollToSection(section.id)}
              className={cn(
                "shrink-0 rounded-full px-4 py-1.5 text-sm font-medium transition-colors",
                activeSection === section.id
                  ? "bg-primary text-white"
                  : "text-dark-muted hover:text-dark-text hover:bg-dark-surface",
              )}
            >
              {section.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  )
}

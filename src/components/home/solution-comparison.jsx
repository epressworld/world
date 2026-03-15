"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"

const features = [
  { name: "Data ownership", traditional: "company", epress: "user" },
  { name: "Identity portability", traditional: false, epress: true },
  { name: "API access", traditional: "limited", epress: true },
  { name: "AI Agent compatible", traditional: false, epress: true },
  { name: "Self-hosted", traditional: false, epress: true },
  { name: "No algorithmic feed", traditional: false, epress: true },
]

function StatusIndicator({ value }) {
  if (value === true) {
    return <span className="text-green-500 text-lg">✓</span>
  }
  if (value === false) {
    return <span className="text-red-500 text-lg">✗</span>
  }
  if (value === "limited") {
    return <span className="text-dark-muted text-lg">△</span>
  }
  return <span className="text-dark-muted">{value}</span>
}

export function SolutionComparison() {
  const [hoveredColumn, setHoveredColumn] = useState(null)

  return (
    <section className="landing-section bg-dark-surface/40">
      <div className="container-custom">
        <p className="section-label text-center">The Solution</p>
        <h2 className="landing-heading mb-4 text-center">
          Traditional Platforms vs epress
        </h2>
        <p className="landing-subheading mb-12 text-center mx-auto">
          A fundamental shift in how social networks should work.
        </p>

        <div className="overflow-x-auto">
          <table className="w-full max-w-2xl mx-auto">
            <thead>
              <tr>
                <th className="text-left p-4 text-dark-muted font-normal">
                  Feature
                </th>
                <th
                  className={cn(
                    "p-4 text-center transition-colors duration-200",
                    hoveredColumn === "traditional" && "bg-dark-border/30",
                  )}
                  onMouseEnter={() => setHoveredColumn("traditional")}
                  onMouseLeave={() => setHoveredColumn(null)}
                >
                  Traditional
                </th>
                <th
                  className={cn(
                    "p-4 text-center transition-colors duration-200 border-2 border-primary/50 rounded-t-lg",
                    hoveredColumn === "epress" && "bg-primary/10",
                  )}
                  onMouseEnter={() => setHoveredColumn("epress")}
                  onMouseLeave={() => setHoveredColumn(null)}
                >
                  <span className="text-primary font-semibold">epress</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {features.map((feature, idx) => (
                <tr
                  key={feature.name}
                  className={cn(
                    "border-t border-dark-border",
                    idx === features.length - 1 && "last:border-b-0",
                  )}
                >
                  <td className="p-4 text-dark-text">{feature.name}</td>
                  <td
                    className={cn(
                      "p-4 text-center transition-colors duration-200",
                      hoveredColumn === "traditional" && "bg-dark-border/30",
                    )}
                    onMouseEnter={() => setHoveredColumn("traditional")}
                    onMouseLeave={() => setHoveredColumn(null)}
                  >
                    <StatusIndicator value={feature.traditional} />
                  </td>
                  <td
                    className={cn(
                      "p-4 text-center transition-colors duration-200 border-x-2 border-primary/50",
                      hoveredColumn === "epress" && "bg-primary/10",
                      idx === features.length - 1 && "rounded-b-lg border-b-2",
                    )}
                    onMouseEnter={() => setHoveredColumn("epress")}
                    onMouseLeave={() => setHoveredColumn(null)}
                  >
                    <StatusIndicator value={feature.epress} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}

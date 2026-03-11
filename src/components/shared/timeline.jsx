"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"

export function Timeline({ items }) {
  const [hoveredIndex, setHoveredIndex] = useState(null)

  return (
    <div className="relative max-w-4xl mx-auto">
      <div className="absolute top-12 left-0 right-0 h-0.5 bg-primary/30" />

      <div className="flex justify-between relative">
        {items.map((item, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center flex-1 relative"
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}
            aria-hidden="true"
          >
            <div className="text-2xl mb-2">{item.icon}</div>

            <div
              className={cn(
                "w-12 h-12 rounded-full border-2 border-primary bg-dark-bg flex items-center justify-center transition-all duration-300",
                hoveredIndex === idx &&
                  "scale-110 shadow-[0_0_20px_rgba(247,147,26,0.5)]",
                "animate-pulse",
              )}
              style={{
                animationDuration: hoveredIndex === idx ? "0.5s" : "2s",
              }}
            >
              <span className="text-primary font-bold text-xs">{idx + 1}</span>
            </div>

            <div className="mt-3 text-center">
              <div className="font-sans text-lg font-semibold text-white mb-1">
                {item.title}
              </div>
              <div
                className={cn(
                  "text-sm text-dark-muted transition-all duration-300 overflow-hidden",
                  hoveredIndex === idx
                    ? "max-h-20 opacity-100"
                    : "max-h-10 opacity-70",
                )}
              >
                {item.description}
              </div>
            </div>

            {idx < items.length - 1 && (
              <div className="absolute top-[4.5rem] left-[calc(50%+2rem)] w-[calc(100%-4rem)] h-0.5 bg-gradient-to-r from-primary/50 to-transparent">
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-0 h-0 border-l-4 border-l-primary/50 border-t-2 border-t-transparent border-b-2 border-b-transparent" />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

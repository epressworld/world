"use client"

import { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"

export function FadeInSection({ children, className }) {
  const ref = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={cn("fade-in-section", isVisible && "visible", className)}
    >
      {children}
    </div>
  )
}

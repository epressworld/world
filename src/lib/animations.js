"use client"

import { useEffect, useRef, useState } from "react"

export function useScrollReveal(threshold = 0.2) {
  const ref = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(element)
        }
      },
      { threshold },
    )

    observer.observe(element)

    return () => observer.disconnect()
  }, [threshold])

  return { ref, isVisible }
}

export function useStaggeredReveal(itemCount, staggerDelay = 0.1) {
  const ref = useRef(null)
  const [visibleItems, setVisibleItems] = useState([])

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const items = []
          for (let i = 0; i < itemCount; i++) {
            setTimeout(
              () => {
                setVisibleItems((prev) => [...prev, i])
              },
              i * staggerDelay * 1000,
            )
          }
          observer.unobserve(element)
        }
      },
      { threshold: 0.1 },
    )

    observer.observe(element)

    return () => observer.disconnect()
  }, [itemCount, staggerDelay])

  return { ref, visibleItems }
}

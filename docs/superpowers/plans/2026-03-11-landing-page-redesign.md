# Landing Page Redesign Implementation Plan

> **For agentic workers:** REQUIRED: Use superpowers:subagent-driven-development (if subagents available) or superpowers:executing-plans to implement this plan. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Redesign the epress.world homepage with diagram-first sections to drive GitHub stars and node deployments.

**Architecture:** React components in Next.js App Router, each section as a dedicated component. Hybrid SVG + Canvas for hero network animation. Minimal line-art diagrams with accent color highlights.

**Tech Stack:** Next.js 16, React 19, Tailwind CSS, next/font/google (Playfair Display, IBM Plex Mono)

---

## Chunk 1: Foundation - Fonts, CSS, Shared Components

### Task 1: Update Fonts in Layout

**Files:**
- Modify: `src/app/layout.js`

- [ ] **Step 1: Add Playfair Display and IBM Plex Mono fonts**

```javascript
import { Playfair_Display, IBM_Plex_Mono } from "next/font/google"
import "./globals.css"
import { Analytics } from "@vercel/analytics/next"
import { ThemeProvider } from "@/components/theme-provider"

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
})

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
})

export const metadata = {
  title: "epress - Your Home on the Decentralized Web",
  description:
    "A decentralized content and social network built on self-hosting. Take back your digital sovereignty.",
  icons: {
    icon: "/favicon.ico",
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${playfair.variable} ${ibmPlexMono.variable} font-mono antialiased bg-light-bg text-light-text dark:bg-dark-bg dark:text-dark-text`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}
```

- [ ] **Step 2: Verify fonts load correctly**

Run: `npm run dev`
Expected: Dev server starts, fonts load without errors in console

- [ ] **Step 3: Commit fonts update**

```bash
git add src/app/layout.js
git commit -m "feat: add Playfair Display and IBM Plex Mono fonts"
```

---

### Task 2: Update Tailwind Config for New Fonts

**Files:**
- Modify: `tailwind.config.mjs`

- [ ] **Step 1: Add font family utilities to Tailwind config**

```javascript
/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./src/pages/**/*.{js,jsx,mdx}",
    "./src/components/**/*.{js,jsx,mdx}",
    "./src/app/**/*.{js,jsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#F7931A",
          50: "#FEF3E3",
          100: "#FDE6C7",
          200: "#FBCD8F",
          300: "#FAB457",
          400: "#F89B1F",
          500: "#F7931A",
          600: "#C67315",
          700: "#945410",
          800: "#62360A",
          900: "#311805",
        },
        dark: {
          bg: "#0f0f0f",
          surface: "#1a1a1a",
          border: "#2a2a2a",
          text: "#f5f5f5",
          muted: "#a0a0a0",
        },
        light: {
          bg: "#ffffff",
          surface: "#fafafa",
          border: "#e5e5e5",
          text: "#1a1a1a",
          muted: "#666666",
        },
      },
      fontFamily: {
        sans: ["var(--font-playfair)", "Georgia", "serif"],
        mono: ["var(--font-ibm-plex)", "monospace"],
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "4rem",
          xl: "5rem",
        },
      },
    },
  },
  plugins: [],
}

export default config
```

- [ ] **Step 2: Verify Tailwind config compiles**

Run: `npm run build`
Expected: Build succeeds without errors

- [ ] **Step 3: Commit Tailwind config update**

```bash
git add tailwind.config.mjs
git commit -m "feat: update font families to Playfair Display and IBM Plex Mono"
```

---

### Task 3: Add CSS Utilities for Landing Page

**Files:**
- Modify: `src/app/globals.css`

- [ ] **Step 1: Add new CSS components for landing page**

Add after the existing `@layer components` block:

```css
@layer components {
  .container-custom {
    @apply mx-auto max-w-7xl px-4 sm:px-6 lg:px-8;
  }

  .btn-primary {
    @apply inline-flex items-center justify-center rounded-xl bg-primary px-6 py-3 font-semibold text-white transition-colors hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-dark-bg;
  }

  .btn-secondary {
    @apply inline-flex items-center justify-center rounded-xl border border-dark-border bg-transparent px-6 py-3 font-semibold text-dark-text transition-colors hover:border-primary/60 hover:bg-dark-surface;
  }

  .btn-ghost {
    @apply inline-flex items-center justify-center rounded-lg px-4 py-2 font-medium text-dark-muted transition-colors hover:text-dark-text;
  }

  .landing-section {
    @apply py-16 md:py-24;
  }

  .landing-heading {
    @apply font-sans text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight;
  }

  .landing-subheading {
    @apply text-lg md:text-xl text-dark-muted max-w-2xl;
  }

  .landing-card {
    @apply rounded-2xl border border-dark-border bg-dark-surface/70 p-6 backdrop-blur-sm;
  }

  .landing-card-warning {
    @apply rounded-2xl border border-red-500/30 bg-gradient-to-br from-red-950/30 to-dark-surface/70 p-6;
  }

  .landing-card-success {
    @apply rounded-2xl border border-primary/30 bg-gradient-to-br from-primary/10 to-dark-surface/70 p-6;
  }

  .diagram-frame {
    @apply rounded-xl border border-dark-border bg-dark-bg p-4 overflow-hidden;
  }

  .section-label {
    @apply text-xs font-mono uppercase tracking-widest text-dark-muted mb-4;
  }
}
```

- [ ] **Step 2: Verify CSS compiles**

Run: `npm run dev`
Expected: No CSS compilation errors

- [ ] **Step 3: Commit CSS updates**

```bash
git add src/app/globals.css
git commit -m "feat: add landing page CSS utilities"
```

---

### Task 4: Create Shared ComparisonCard Component

**Files:**
- Create: `src/components/shared/comparison-card.jsx`

- [ ] **Step 1: Create ComparisonCard component**

```javascript
import { cn } from "@/lib/utils"

export function ComparisonCard({ variant = "default", title, children, caption, className }) {
  const variantStyles = {
    default: "landing-card",
    warning: "landing-card-warning",
    success: "landing-card-success",
  }

  return (
    <div className={cn(variantStyles[variant], className)}>
      {title && (
        <h3 className="font-sans text-lg font-semibold mb-4">{title}</h3>
      )}
      <div className="mb-4">{children}</div>
      {caption && (
        <p className="text-sm text-dark-muted">{caption}</p>
      )}
    </div>
  )
}
```

- [ ] **Step 2: Verify component imports correctly**

Run: `npm run build`
Expected: Build succeeds

- [ ] **Step 3: Commit shared component**

```bash
git add src/components/shared/comparison-card.jsx
git commit -m "feat: add ComparisonCard shared component"
```

---

### Task 5: Create Shared MiniDiagram Component

**Files:**
- Create: `src/components/shared/mini-diagram.jsx`

- [ ] **Step 1: Create MiniDiagram wrapper component**

```javascript
import { cn } from "@/lib/utils"

export function MiniDiagram({ children, className }) {
  return (
    <div className={cn("diagram-frame", className)}>
      {children}
    </div>
  )
}
```

- [ ] **Step 2: Verify component imports correctly**

Run: `npm run build`
Expected: Build succeeds

- [ ] **Step 3: Commit MiniDiagram component**

```bash
git add src/components/shared/mini-diagram.jsx
git commit -m "feat: add MiniDiagram wrapper component"
```

---

### Task 6: Create Animation Utilities

**Files:**
- Create: `src/lib/animations.js`

- [ ] **Step 1: Create scroll reveal animation hook**

```javascript
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
      { threshold }
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
            setTimeout(() => {
              setVisibleItems(prev => [...prev, i])
            }, i * staggerDelay * 1000)
          }
          observer.unobserve(element)
        }
      },
      { threshold: 0.1 }
    )

    observer.observe(element)

    return () => observer.disconnect()
  }, [itemCount, staggerDelay])

  return { ref, visibleItems }
}
```

- [ ] **Step 2: Verify animation utilities build**

Run: `npm run build`
Expected: Build succeeds

- [ ] **Step 3: Commit animation utilities**

```bash
git add src/lib/animations.js
git commit -m "feat: add scroll reveal animation hooks"
```

---

## Chunk 2: Hero and Era Comparison Sections

### Task 7: Create Hero Network SVG with Hover Tooltip

**Files:**
- Create: `src/components/home/hero-network-svg.jsx`

- [ ] **Step 1: Create interactive network SVG with hover tooltip**

```javascript
"use client"

import { useState } from "react"

export function HeroNetworkSvg() {
  const [hoveredNode, setHoveredNode] = useState(null)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

  const nodes = [
    { id: 1, cx: 150, cy: 100, r: 8 },
    { id: 2, cx: 280, cy: 60, r: 10 },
    { id: 3, cx: 400, cy: 120, r: 8 },
    { id: 4, cx: 520, cy: 80, r: 9 },
    { id: 5, cx: 180, cy: 200, r: 8 },
    { id: 6, cx: 320, cy: 180, r: 11 },
    { id: 7, cx: 450, cy: 220, r: 8 },
    { id: 8, cx: 550, cy: 180, r: 9 },
    { id: 9, cx: 100, cy: 150, r: 7 },
    { id: 10, cx: 380, cy: 40, r: 7 },
  ]

  const connections = [
    [1, 2], [2, 3], [3, 4], [1, 5], [5, 6], [6, 7], [7, 8], [2, 6], [3, 7],
    [1, 9], [9, 5], [3, 10], [10, 4], [6, 3], [5, 2],
  ]

  const handleMouseMove = (e) => {
    const svg = e.currentTarget
    const rect = svg.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width) * 650
    const y = ((e.clientY - rect.top) / rect.height) * 280
    setMousePos({ x, y })

    let closestNode = null
    let minDist = 30

    nodes.forEach(node => {
      const dist = Math.sqrt((node.cx - x) ** 2 + (node.cy - y) ** 2)
      if (dist < minDist) {
        minDist = dist
        closestNode = node
      }
    })

    setHoveredNode(closestNode)
  }

  return (
    <svg
      viewBox="0 0 650 280"
      className="w-full h-auto"
      xmlns="http://www.w3.org/2000/svg"
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setHoveredNode(null)}
    >
      <defs>
        <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="2" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      
      {connections.map(([from, to], idx) => {
        const fromNode = nodes.find(n => n.id === from)
        const toNode = nodes.find(n => n.id === to)
        const isHighlighted = hoveredNode && (hoveredNode.id === from || hoveredNode.id === to)
        return (
          <line
            key={idx}
            x1={fromNode.cx}
            y1={fromNode.cy}
            x2={toNode.cx}
            y2={toNode.cy}
            stroke={isHighlighted ? "rgba(247, 147, 26, 0.8)" : "rgba(247, 147, 26, 0.3)"}
            strokeWidth={isHighlighted ? "2" : "1"}
            className="transition-all duration-200"
          />
        )
      })}
      
      {nodes.map(node => {
        const isHovered = hoveredNode?.id === node.id
        return (
          <circle
            key={node.id}
            cx={node.cx}
            cy={node.cy}
            r={isHovered ? node.r * 1.5 : node.r}
            fill={isHovered ? "rgba(247, 147, 26, 0.5)" : "rgba(255, 255, 255, 0.1)"}
            stroke={isHovered ? "#F7931A" : "rgba(247, 147, 26, 0.5)"}
            strokeWidth={isHovered ? "2" : "1"}
            filter="url(#glow)"
            className="transition-all duration-200"
          />
        )
      })}

      {hoveredNode && (
        <g>
          <rect
            x={hoveredNode.cx - 40}
            y={hoveredNode.cy - 35}
            width="80"
            height="24"
            rx="4"
            fill="#1a1a1a"
            stroke="#F7931A"
            strokeWidth="1"
          />
          <text
            x={hoveredNode.cx}
            y={hoveredNode.cy - 18}
            textAnchor="middle"
            fill="#F7931A"
            fontSize="10"
            fontFamily="monospace"
          >
            your node
          </text>
        </g>
      )}
    </svg>
  )
}
```

- [ ] **Step 2: Verify SVG renders**

Run: `npm run dev`
Expected: Dev server starts without errors

- [ ] **Step 3: Commit hero network SVG**

```bash
git add src/components/home/hero-network-svg.jsx
git commit -m "feat: add HeroNetworkSvg static component"
```

---

### Task 7: Create Hero Network Canvas Animation

**Files:**
- Create: `src/components/home/hero-network-canvas.jsx`

- [ ] **Step 1: Create Canvas particle animation component**

```javascript
"use client"

import { useEffect, useRef, useCallback } from "react"

export function HeroNetworkCanvas() {
  const canvasRef = useRef(null)
  const animationRef = useRef(null)
  const particlesRef = useRef([])

  const initParticles = useCallback((width, height) => {
    const particles = []
    const count = 15
    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        r: Math.random() * 2 + 1,
        alpha: Math.random() * 0.5 + 0.2,
      })
    }
    particlesRef.current = particles
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resizeCanvas = () => {
      const rect = canvas.parentElement?.getBoundingClientRect()
      if (rect) {
        canvas.width = rect.width
        canvas.height = rect.height
        initParticles(rect.width, rect.height)
      }
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particlesRef.current.forEach(p => {
        p.x += p.vx
        p.y += p.vy

        if (p.x < 0 || p.x > canvas.width) p.vx *= -1
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(247, 147, 26, ${p.alpha})`
        ctx.fill()
      })

      animationRef.current = requestAnimationFrame(animate)
    }

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (!prefersReducedMotion) {
      animate()
    }

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [initParticles])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none"
      style={{ mixBlendMode: "screen" }}
    />
  )
}
```

- [ ] **Step 2: Verify Canvas component builds**

Run: `npm run build`
Expected: Build succeeds

- [ ] **Step 3: Commit canvas animation**

```bash
git add src/components/home/hero-network-canvas.jsx
git commit -m "feat: add HeroNetworkCanvas particle animation"
```

---

### Task 8: Create Hero Section Component

**Files:**
- Create: `src/components/home/hero-section.jsx`

- [ ] **Step 1: Create Hero section combining SVG and Canvas**

```javascript
import { Github } from "lucide-react"
import Link from "next/link"
import { HeroNetworkSvg } from "./hero-network-svg"
import { HeroNetworkCanvas } from "./hero-network-canvas"

export function HeroSection() {
  return (
    <section className="relative min-h-[80vh] flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-dark-bg via-transparent to-dark-bg z-10" />
        <div className="relative w-full h-full">
          <HeroNetworkSvg />
          <HeroNetworkCanvas />
        </div>
      </div>

      <div className="container-custom relative z-20 py-20 md:py-32">
        <div className="max-w-2xl">
          <h1 className="landing-heading mb-6">
            Your Digital Home.
            <br />
            <span className="text-primary">For Life.</span>
          </h1>
          <p className="landing-subheading mb-8">
            Not a platform account. A self-hosted node you own, inherit, and pass down — like property.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="https://github.com/epressworld/epress"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              <Github className="w-5 h-5 mr-2" />
              Star on GitHub
            </a>
            <Link href="/vision" className="btn-secondary">
              Read the Vision →
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 2: Verify Hero section renders**

Run: `npm run dev`
Expected: Hero section displays with network background

- [ ] **Step 3: Commit Hero section**

```bash
git add src/components/home/hero-section.jsx
git commit -m "feat: add HeroSection with network animation background"
```

---

### Task 9: Create Era Comparison Diagram SVG

**Files:**
- Create: `src/components/home/era-comparison-svg.jsx`

- [ ] **Step 1: Create AI content flood diagram**

```javascript
export function AIContentFloodSvg() {
  return (
    <svg viewBox="0 0 280 160" className="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
      <rect width="280" height="160" rx="12" fill="#1a0a0a" />
      
      {[...Array(8)].map((_, i) => (
        <rect
          key={i}
          x="20"
          y={20 + i * 16}
          width={200 + Math.random() * 40}
          height="10"
          rx="3"
          fill={`rgba(239, 68, 68, ${0.1 + Math.random() * 0.2})`}
          filter="url(#blur)"
        />
      ))}
      
      <defs>
        <filter id="blur">
          <feGaussianBlur stdDeviation="1" />
        </filter>
      </defs>
      
      <text x="140" y="130" textAnchor="middle" fill="#fca5a5" fontSize="11" fontFamily="monospace">
        "Is this human or AI?"
      </text>
      <text x="140" y="148" textAnchor="middle" fill="#7f1d1d" fontSize="10" fontFamily="monospace">
        No way to know.
      </text>
    </svg>
  )
}
```

- [ ] **Step 2: Create Proof of Source diagram**

```javascript
export function ProofOfSourceSvg() {
  return (
    <svg viewBox="0 0 280 160" className="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
      <rect width="280" height="160" rx="12" fill="#0f1a12" />
      
      <text x="20" y="35" fill="#F7931A" fontSize="10" fontFamily="monospace">0x7a3f...c9d2</text>
      <text x="20" y="52" fill="#34D399" fontSize="9" fontFamily="monospace">Published: 2026-03-11</text>
      <text x="20" y="68" fill="#34D399" fontSize="9" fontFamily="monospace">Hash: verified ✓</text>
      <text x="20" y="84" fill="#34D399" fontSize="9" fontFamily="monospace">Signature: valid ✓</text>
      
      <rect x="20" y="100" width="240" height="3" rx="1" fill="#1a2a1a" />
      <rect x="20" y="100" width="180" height="3" rx="1" fill="#34D399" />
      
      <text x="140" y="135" textAnchor="middle" fill="#34D399" fontSize="11" fontFamily="monospace">
        "Cryptographically proven."
      </text>
    </svg>
  )
}
```

- [ ] **Step 3: Commit era comparison SVGs**

```bash
git add src/components/home/era-comparison-svg.jsx
git commit -m "feat: add AIContentFlood and ProofOfSource SVG diagrams"
```

---

### Task 10: Create Era Comparison Section

**Files:**
- Create: `src/components/home/era-comparison.jsx`

- [ ] **Step 1: Create Era Comparison section**

```javascript
import { ComparisonCard } from "@/components/shared/comparison-card"
import { AIContentFloodSvg, ProofOfSourceSvg } from "./era-comparison-svg"

export function EraComparison() {
  return (
    <section className="landing-section bg-dark-surface/40">
      <div className="container-custom">
        <p className="section-label">The Context</p>
        <h2 className="landing-heading mb-4">
          AI Content is Flooding the Internet
        </h2>
        <p className="landing-subheading mb-12">
          As AI-generated content grows, distinguishing authentic human voices becomes impossible — unless we have cryptographic proof.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          <ComparisonCard variant="warning" title="AI Content Flood">
            <AIContentFloodSvg />
          </ComparisonCard>

          <ComparisonCard variant="success" title="Proof of Source">
            <ProofOfSourceSvg />
          </ComparisonCard>
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 2: Verify section renders**

Run: `npm run dev`
Expected: Era comparison section displays with two cards

- [ ] **Step 3: Commit era comparison section**

```bash
git add src/components/home/era-comparison.jsx
git commit -m "feat: add EraComparison section"
```

---

## Chunk 3: AI Agent Era and Lifetime Timeline

### Task 11: Create AI Agent Era Diagram

**Files:**
- Create: `src/components/home/agent-era-svg.jsx`

- [ ] **Step 1: Create today vs epress flow diagram**

```javascript
export function AgentEraSvg() {
  return (
    <svg viewBox="0 0 700 200" className="w-full h-auto max-w-4xl mx-auto" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="dangerGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#1a0a0a" />
          <stop offset="100%" stopColor="#2a1515" />
        </linearGradient>
        <linearGradient id="successGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#0f1a12" />
          <stop offset="100%" stopColor="#1a2a1a" />
        </linearGradient>
      </defs>

      {}
      <rect x="10" y="10" width="300" height="180" rx="12" fill="url(#dangerGrad)" stroke="#ef4444" strokeOpacity="0.3" />
      <text x="160" y="35" textAnchor="middle" fill="#fca5a5" fontSize="10" fontFamily="monospace">TODAY</text>
      
      <circle cx="50" cy="80" r="20" fill="#2a1515" stroke="#ef4444" strokeOpacity="0.5" />
      <text x="50" y="84" textAnchor="middle" fill="#fca5a5" fontSize="8">AI</text>
      
      <path d="M75 80 L110 80" stroke="#ef4444" strokeWidth="2" strokeOpacity="0.5" />
      <polygon points="110,80 102,76 102,84" fill="#ef4444" fillOpacity="0.5" />
      
      <rect x="115" y="55" width="80" height="50" rx="6" fill="#2a1515" stroke="#ef4444" strokeOpacity="0.3" />
      <text x="155" y="75" textAnchor="middle" fill="#7f1d1d" fontSize="7">Centralized</text>
      <text x="155" y="88" textAnchor="middle" fill="#7f1d1d" fontSize="7">Platform</text>
      
      <path d="M200 80 L235 80" stroke="#ef4444" strokeWidth="2" strokeOpacity="0.5" />
      <polygon points="235,80 227,76 227,84" fill="#ef4444" fillOpacity="0.5" />
      
      <text x="260" y="65" fill="#ef4444" fontSize="8">✗ Pay limits</text>
      <text x="260" y="80" fill="#ef4444" fontSize="8">✗ Rate limited</text>
      <text x="260" y="95" fill="#ef4444" fontSize="8">✗ Content blocked</text>
      
      <text x="160" y="165" textAnchor="middle" fill="#7f1d1d" fontSize="9" fontFamily="monospace">Agent cannot work</text>

      {}
      <text x="350" y="105" textAnchor="middle" fill="#F7931A" fontSize="14" fontWeight="bold">VS</text>

      {}
      <rect x="390" y="10" width="300" height="180" rx="12" fill="url(#successGrad)" stroke="#F7931A" />
      <text x="540" y="35" textAnchor="middle" fill="#F7931A" fontSize="10" fontFamily="monospace">EPRESS</text>
      
      <circle cx="430" cy="80" r="20" fill="#1a2a1a" stroke="#34D399" />
      <text x="430" y="84" textAnchor="middle" fill="#34D399" fontSize="8">AI</text>
      
      <path d="M455 80 L490 80" stroke="#34D399" strokeWidth="2" />
      <polygon points="490,80 482,76 482,84" fill="#34D399" />
      
      <rect x="495" y="55" width="80" height="50" rx="6" fill="#1a2a1a" stroke="#F7931A" />
      <text x="535" y="75" textAnchor="middle" fill="#F7931A" fontSize="7">epress</text>
      <text x="535" y="88" textAnchor="middle" fill="#F7931A" fontSize="7">Network</text>
      
      <path d="M580 80 L615 80" stroke="#34D399" strokeWidth="2" />
      <polygon points="615,80 607,76 607,84" fill="#34D399" />
      
      <text x="640" y="65" fill="#34D399" fontSize="8">✓ Open RSS</text>
      <text x="640" y="80" fill="#34D399" fontSize="8">✓ Open API</text>
      <text x="640" y="95" fill="#34D399" fontSize="8">✓ No limits</text>
      
      <text x="540" y="165" textAnchor="middle" fill="#34D399" fontSize="9" fontFamily="monospace">Agent operates freely</text>
    </svg>
  )
}
```

- [ ] **Step 2: Verify SVG builds**

Run: `npm run build`
Expected: Build succeeds

- [ ] **Step 3: Commit agent era SVG**

```bash
git add src/components/home/agent-era-svg.jsx
git commit -m "feat: add AgentEraSvg comparison diagram"
```

---

### Task 12: Create AI Agent Era Section

**Files:**
- Create: `src/components/home/agent-era.jsx`

- [ ] **Step 1: Create Agent Era section**

```javascript
import { AgentEraSvg } from "./agent-era-svg"

export function AgentEra() {
  return (
    <section className="landing-section">
      <div className="container-custom">
        <p className="section-label">AI Agent Era</p>
        <h2 className="landing-heading mb-4">
          Your AI Agent Needs an Open Network
        </h2>
        <p className="landing-subheading mb-12">
          Today's centralized platforms block AI agents. epress provides the open interfaces your agent needs.
        </p>

        <AgentEraSvg />
      </div>
    </section>
  )
}
```

- [ ] **Step 2: Verify section renders**

Run: `npm run dev`
Expected: Agent era section displays with flow diagram

- [ ] **Step 3: Commit agent era section**

```bash
git add src/components/home/agent-era.jsx
git commit -m "feat: add AgentEra section"
```

---

### Task 13: Create Shared Timeline Component

**Files:**
- Create: `src/components/shared/timeline.jsx`

- [ ] **Step 1: Create Timeline component with pulse animation and hover expand**

```javascript
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
          >
            <div className="text-2xl mb-2">{item.icon}</div>
            
            <div
              className={cn(
                "w-12 h-12 rounded-full border-2 border-primary bg-dark-bg flex items-center justify-center transition-all duration-300",
                hoveredIndex === idx && "scale-110 shadow-[0_0_20px_rgba(247,147,26,0.5)]",
                "animate-pulse"
              )}
              style={{ animationDuration: hoveredIndex === idx ? "0.5s" : "2s" }}
            >
              <span className="text-primary font-bold text-xs">{idx + 1}</span>
            </div>
            
            <div className="mt-3 text-center">
              <div className="font-sans text-lg font-semibold text-white mb-1">{item.title}</div>
              <div
                className={cn(
                  "text-sm text-dark-muted transition-all duration-300 overflow-hidden",
                  hoveredIndex === idx ? "max-h-20 opacity-100" : "max-h-10 opacity-70"
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
```

- [ ] **Step 2: Verify Timeline component builds**

Run: `npm run build`
Expected: Build succeeds

- [ ] **Step 3: Commit Timeline component**

```bash
git add src/components/shared/timeline.jsx
git commit -m "feat: add Timeline component with pulse animation and hover expand"
```

---

### Task 14: Create Lifetime Timeline Section

**Files:**
- Create: `src/components/home/lifetime-timeline.jsx`

- [ ] **Step 1: Create Lifetime Timeline section using shared Timeline component**

```javascript
import { Timeline } from "@/components/shared/timeline"

const lifetimeStages = [
  {
    icon: "👶",
    title: "Birth",
    description: "Parents deploy your node",
  },
  {
    icon: "📖",
    title: "Growing",
    description: "Memories recorded on YOUR node",
  },
  {
    icon: "🔑",
    title: "Handover",
    description: "Private key yours forever",
  },
  {
    icon: "🏛️",
    title: "Legacy",
    description: "Children inherit your node",
  },
]

export function LifetimeTimeline() {
  return (
    <section className="landing-section bg-dark-surface/40">
      <div className="container-custom">
        <p className="section-label">A New Kind of Inheritance</p>
        <h2 className="landing-heading mb-4 text-center">
          One Node. One Lifetime.
        </h2>
        <p className="landing-subheading text-center mx-auto mb-12">
          Your epress node grows with you — and becomes something you can pass to the next generation.
        </p>

        <Timeline items={lifetimeStages} />
      </div>
    </section>
  )
}
```

- [ ] **Step 2: Verify section renders**

Run: `npm run dev`
Expected: Lifetime timeline section displays

- [ ] **Step 3: Commit lifetime timeline section**

```bash
git add src/components/home/lifetime-timeline.jsx
git commit -m "feat: add LifetimeTimeline section"
```

---

## Chunk 4: Tech Cards, Solution Comparison, CTA

### Task 15: Create Tech Card Diagrams

**Files:**
- Create: `src/components/home/tech-card-diagrams.jsx`

- [ ] **Step 1: Create three mini diagrams**

```javascript
export function ProofOfSourceDiagram() {
  return (
    <svg viewBox="0 0 240 140" className="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
      <rect width="240" height="140" rx="8" fill="#0f0f0f" />
      
      <text x="20" y="30" fill="#a0a0a0" fontSize="8" fontFamily="monospace">content</text>
      <path d="M55 28 L85 50" stroke="#F7931A" strokeWidth="1.5" />
      <text x="90" y="55" fill="#F7931A" fontSize="8" fontFamily="monospace">SHA-256</text>
      <path d="M120 52 L145 52" stroke="#F7931A" strokeWidth="1.5" />
      <text x="150" y="55" fill="#F7931A" fontSize="8" fontFamily="monospace">hash</text>
      
      <text x="20" y="75" fill="#a0a0a0" fontSize="8" fontFamily="monospace">address</text>
      <path d="M55 72 L90 72" stroke="#F7931A" strokeWidth="1.5" />
      
      <text x="20" y="95" fill="#a0a0a0" fontSize="8" fontFamily="monospace">timestamp</text>
      <path d="M60 92 L90 72" stroke="#F7931A" strokeWidth="1.5" />
      
      <rect x="90" y="62" width="40" height="20" rx="4" fill="#1a1a1a" stroke="#F7931A" />
      <text x="110" y="75" textAnchor="middle" fill="#F7931A" fontSize="8" fontFamily="monospace">SoS</text>
      
      <path d="M130 72 L155 72" stroke="#F7931A" strokeWidth="1.5" />
      <text x="160" y="75" fill="#a0a0a0" fontSize="8" fontFamily="monospace">sign</text>
      <path d="M180 72 L195 72" stroke="#F7931A" strokeWidth="1.5" />
      
      <rect x="200" y="62" width="35" height="20" rx="4" fill="#10281a" stroke="#34D399" />
      <text x="217" y="75" textAnchor="middle" fill="#34D399" fontSize="8" fontFamily="monospace">PoS</text>
      
      <text x="120" y="125" textAnchor="middle" fill="#34D399" fontSize="10" fontFamily="monospace">✓ Verifiable Source</text>
    </svg>
  )
}

export function OpenProtocolDiagram() {
  return (
    <svg viewBox="0 0 240 140" className="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
      <rect width="240" height="140" rx="8" fill="#0f0f0f" />
      
      <circle cx="60" cy="50" r="18" fill="#1a1a1a" stroke="#F7931A" />
      <text x="60" y="54" textAnchor="middle" fill="#F7931A" fontSize="8" fontFamily="monospace">A</text>
      
      <circle cx="180" cy="50" r="18" fill="#1a1a1a" stroke="#F7931A" />
      <text x="180" y="54" textAnchor="middle" fill="#F7931A" fontSize="8" fontFamily="monospace">B</text>
      
      <circle cx="120" cy="100" r="18" fill="#1a1a1a" stroke="#F7931A" />
      <text x="120" y="104" textAnchor="middle" fill="#F7931A" fontSize="8" fontFamily="monospace">C</text>
      
      <line x1="78" y1="50" x2="162" y2="50" stroke="#F7931A" strokeWidth="1.5" strokeDasharray="4 2" />
      <text x="120" y="44" textAnchor="middle" fill="#F7931A" fontSize="7" fontFamily="monospace">EWP</text>
      
      <line x1="70" y1="65" x2="105" y2="88" stroke="#F7931A" strokeWidth="1.5" strokeOpacity="0.5" />
      <line x1="170" y1="65" x2="135" y2="88" stroke="#F7931A" strokeWidth="1.5" strokeOpacity="0.5" />
      
      <text x="120" y="130" textAnchor="middle" fill="#a0a0a0" fontSize="8" fontFamily="monospace">No auth. No payment. Just protocol.</text>
    </svg>
  )
}

export function SelfHostedDiagram() {
  return (
    <svg viewBox="0 0 240 140" className="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
      <rect width="240" height="140" rx="8" fill="#0f0f0f" />
      
      <rect x="20" y="20" width="200" height="30" rx="6" fill="#1a1a1a" />
      <text x="30" y="40" fill="#34D399" fontSize="9" fontFamily="monospace">$ docker run epress</text>
      
      <rect x="20" y="60" width="200" height="20" rx="4" fill="#1a2a1a" />
      <rect x="20" y="60" width="180" height="20" rx="4" fill="#34D399" fillOpacity="0.3" />
      <text x="120" y="74" textAnchor="middle" fill="#34D399" fontSize="9" fontFamily="monospace">100%</text>
      
      <text x="30" y="105" fill="#34D399" fontSize="9" fontFamily="monospace">✓ Your machine</text>
      <text x="30" y="120" fill="#34D399" fontSize="9" fontFamily="monospace">✓ Your data</text>
      <text x="30" y="135" fill="#34D399" fontSize="9" fontFamily="monospace">✓ Your rules</text>
    </svg>
  )
}
```

- [ ] **Step 2: Verify diagrams build**

Run: `npm run build`
Expected: Build succeeds

- [ ] **Step 3: Commit tech card diagrams**

```bash
git add src/components/home/tech-card-diagrams.jsx
git commit -m "feat: add ProofOfSource, OpenProtocol, SelfHosted diagrams"
```

---

### Task 16: Create Tech Cards Section

**Files:**
- Create: `src/components/home/tech-cards.jsx`

- [ ] **Step 1: Create Tech Cards section**

```javascript
import { MiniDiagram } from "@/components/shared/mini-diagram"
import { ProofOfSourceDiagram, OpenProtocolDiagram, SelfHostedDiagram } from "./tech-card-diagrams"

const cards = [
  {
    title: "Proof of Source",
    diagram: ProofOfSourceDiagram,
    points: ["Content integrity", "Verifiable authorship", "Tamper-evident"],
  },
  {
    title: "Open Protocol",
    diagram: OpenProtocolDiagram,
    points: ["EWP standard", "No authentication", "Peer-to-peer"],
  },
  {
    title: "Self-Hosted",
    diagram: SelfHostedDiagram,
    points: ["Docker deployment", "Full data control", "Your infrastructure"],
  },
]

export function TechCards() {
  return (
    <section className="landing-section">
      <div className="container-custom">
        <p className="section-label">How It Works</p>
        <h2 className="landing-heading mb-4 text-center">
          Three Core Mechanisms
        </h2>
        <p className="landing-subheading text-center mx-auto mb-12">
          Simple concepts that enable a truly decentralized social network.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {cards.map((card, idx) => {
            const Diagram = card.diagram
            return (
              <div key={idx} className="landing-card">
                <MiniDiagram className="mb-4">
                  <Diagram />
                </MiniDiagram>
                <h3 className="font-sans text-lg font-semibold mb-3">{card.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {card.points.map((point) => (
                    <span
                      key={point}
                      className="inline-flex rounded-full border border-primary/35 bg-primary/10 px-3 py-1 text-xs text-primary"
                    >
                      {point}
                    </span>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 2: Verify section renders**

Run: `npm run dev`
Expected: Three tech cards display correctly

- [ ] **Step 3: Commit tech cards section**

```bash
git add src/components/home/tech-cards.jsx
git commit -m "feat: add TechCards section with three mechanism cards"
```

---

### Task 17: Create Solution Comparison Table

**Files:**
- Create: `src/components/home/solution-comparison.jsx`

- [ ] **Step 1: Create comparison table with column hover highlight**

```javascript
"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"

const features = [
  { name: "Data ownership", traditional: false, epress: true },
  { name: "Identity portability", traditional: false, epress: true },
  { name: "API access", traditional: "limited", epress: true },
  { name: "AI Agent compatible", traditional: false, epress: true },
  { name: "Self-hosted", traditional: false, epress: true },
  { name: "No algorithmic feed", traditional: false, epress: true },
]

function StatusCell({ value }) {
  if (value === true) {
    return (
      <div className="flex items-center justify-center">
        <span className="w-6 h-6 rounded bg-green-500/20 text-green-400 flex items-center justify-center text-sm">✓</span>
      </div>
    )
  }
  if (value === false) {
    return (
      <div className="flex items-center justify-center">
        <span className="w-6 h-6 rounded bg-red-500/20 text-red-400 flex items-center justify-center text-sm">✗</span>
      </div>
    )
  }
  return (
    <div className="flex items-center justify-center">
      <span className="w-6 h-6 rounded bg-gray-500/20 text-gray-400 flex items-center justify-center text-xs">△</span>
    </div>
  )
}

export function SolutionComparison() {
  const [hoveredColumn, setHoveredColumn] = useState(null)

  return (
    <section className="landing-section bg-dark-surface/40">
      <div className="container-custom">
        <p className="section-label">Why epress</p>
        <h2 className="landing-heading mb-4 text-center">
          Compare the Differences
        </h2>
        <p className="landing-subheading text-center mx-auto mb-12">
          Traditional platforms vs. decentralized epress nodes.
        </p>

        <div className="max-w-2xl mx-auto">
          <div className="rounded-2xl border border-dark-border overflow-hidden">
            <div className="grid grid-cols-3 bg-dark-surface border-b border-dark-border">
              <div className="p-4 font-semibold text-dark-muted">Feature</div>
              <div
                className={cn(
                  "p-4 font-semibold text-center transition-colors duration-200",
                  hoveredColumn === "traditional" ? "bg-dark-muted/10" : "text-dark-muted"
                )}
                onMouseEnter={() => setHoveredColumn("traditional")}
                onMouseLeave={() => setHoveredColumn(null)}
              >
                Traditional
              </div>
              <div
                className={cn(
                  "p-4 font-semibold text-center border-l-2 border-primary transition-colors duration-200",
                  hoveredColumn === "epress" ? "bg-primary/10" : "text-primary"
                )}
                onMouseEnter={() => setHoveredColumn("epress")}
                onMouseLeave={() => setHoveredColumn(null)}
              >
                epress
              </div>
            </div>
            {features.map((feature, idx) => (
              <div
                key={feature.name}
                className={cn(
                  "grid grid-cols-3 transition-colors duration-200",
                  idx % 2 === 0 ? "bg-dark-bg" : "bg-dark-surface/50",
                  hoveredColumn === "traditional" && "bg-dark-muted/5",
                  hoveredColumn === "epress" && "bg-primary/5"
                )}
              >
                <div className="p-4 text-sm">{feature.name}</div>
                <div
                  className={cn(
                    "p-4 border-l border-dark-border transition-colors duration-200",
                    hoveredColumn === "traditional" && "bg-dark-muted/10"
                  )}
                  onMouseEnter={() => setHoveredColumn("traditional")}
                  onMouseLeave={() => setHoveredColumn(null)}
                >
                  <StatusCell value={feature.traditional} />
                </div>
                <div
                  className={cn(
                    "p-4 border-l border-dark-border transition-colors duration-200",
                    hoveredColumn === "epress" ? "bg-primary/10" : "bg-primary/5"
                  )}
                  onMouseEnter={() => setHoveredColumn("epress")}
                  onMouseLeave={() => setHoveredColumn(null)}
                >
                  <StatusCell value={feature.epress} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 2: Verify table renders**

Run: `npm run dev`
Expected: Comparison table displays with proper styling

- [ ] **Step 3: Commit solution comparison**

```bash
git add src/components/home/solution-comparison.jsx
git commit -m "feat: add SolutionComparison table component"
```

---

### Task 18: Create CTA Section

**Files:**
- Create: `src/components/home/cta-section.jsx`

- [ ] **Step 1: Create call-to-action section**

```javascript
import { Github, ArrowRight } from "lucide-react"
import Link from "next/link"

export function CTASection() {
  return (
    <section className="landing-section">
      <div className="container-custom">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="landing-heading mb-4">
            The Direction is Right.
            <br />
            <span className="text-primary">Help Us Build It.</span>
          </h2>
          <p className="landing-subheading mx-auto mb-8">
            epress is open source. Join us in building the decentralized social layer the internet needs.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a
              href="https://github.com/epressworld/epress"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-lg px-8 py-4"
            >
              <Github className="w-5 h-5 mr-2" />
              Star on GitHub
            </a>
          </div>

          <div className="flex flex-wrap gap-6 justify-center text-sm">
            <Link href="/whitepaper" className="text-dark-muted hover:text-primary transition-colors inline-flex items-center">
              Read Whitepaper <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
            <Link href="/how-it-works" className="text-dark-muted hover:text-primary transition-colors inline-flex items-center">
              How It Works <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
            <Link href="/docs/getting-started" className="text-dark-muted hover:text-primary transition-colors inline-flex items-center">
              Deploy a Node <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 2: Verify CTA section renders**

Run: `npm run dev`
Expected: CTA section displays with buttons

- [ ] **Step 3: Commit CTA section**

```bash
git add src/components/home/cta-section.jsx
git commit -m "feat: add CTASection with GitHub star button"
```

---

## Chunk 5: Navigation, Footer, and Page Assembly

### Task 19: Update Navigation Component

**Files:**
- Create: `src/components/home/site-nav.jsx`

- [ ] **Step 1: Create shared navigation component**

```javascript
"use client"

import { Github, Menu, X } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

const navLinks = [
  { href: "/vision", label: "Vision" },
  { href: "/how-it-works", label: "How It Works" },
  { href: "/whitepaper", label: "Whitepaper" },
  { href: "/docs", label: "Docs" },
  { href: "https://blog.epress.world", label: "Blog", external: true },
]

export function SiteNav() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="border-b border-dark-border sticky top-0 bg-dark-bg/80 backdrop-blur-sm z-50">
      <nav className="container-custom flex items-center justify-between h-16">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo-light.svg"
            alt="epress"
            width={120}
            height={32}
            className="h-8 w-auto"
          />
        </Link>

        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) =>
            link.external ? (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost"
              >
                {link.label}
              </a>
            ) : (
              <Link key={link.href} href={link.href} className="btn-ghost">
                {link.label}
              </Link>
            )
          )}
          <a
            href="https://github.com/epressworld/epress"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost"
          >
            <Github className="w-5 h-5" />
          </a>
        </div>

        <button
          className="md:hidden p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {mobileOpen && (
        <div className="md:hidden border-t border-dark-border bg-dark-bg">
          <div className="container-custom py-4 flex flex-col gap-2">
            {navLinks.map((link) =>
              link.external ? (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ghost justify-start"
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className="btn-ghost justify-start"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              )
            )}
            <a
              href="https://github.com/epressworld/epress"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost justify-start"
            >
              <Github className="w-5 h-5 mr-2" />
              GitHub
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
```

- [ ] **Step 2: Verify navigation builds**

Run: `npm run build`
Expected: Build succeeds

- [ ] **Step 3: Commit navigation component**

```bash
git add src/components/home/site-nav.jsx
git commit -m "feat: add SiteNav component with mobile menu"
```

---

### Task 20: Update Footer Component

**Files:**
- Create: `src/components/home/site-footer.jsx`

- [ ] **Step 1: Create shared footer component**

```javascript
import Image from "next/image"
import Link from "next/link"

const footerLinks = [
  { href: "https://github.com/epressworld/epress", label: "GitHub" },
  { href: "/whitepaper", label: "Whitepaper" },
  { href: "/docs", label: "Docs" },
  { href: "/how-it-works", label: "How It Works" },
]

export function SiteFooter() {
  return (
    <footer className="border-t border-dark-border py-8">
      <div className="container-custom flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <Image
            src="/icon.svg"
            alt="epress"
            width={24}
            height={24}
            className="w-6 h-6"
          />
          <span className="text-sm text-dark-muted">© 2026 epress</span>
          <span className="text-sm text-dark-muted">·</span>
          <span className="text-sm text-dark-muted">Open Source</span>
          <span className="text-sm text-dark-muted">·</span>
          <span className="text-sm text-dark-muted">MIT License</span>
        </div>
        <div className="flex gap-6">
          {footerLinks.map((link) =>
            link.href.startsWith("http") ? (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-dark-muted hover:text-dark-text transition-colors"
              >
                {link.label}
              </a>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className="text-dark-muted hover:text-dark-text transition-colors"
              >
                {link.label}
              </Link>
            )
          )}
        </div>
      </div>
    </footer>
  )
}
```

- [ ] **Step 2: Verify footer builds**

Run: `npm run build`
Expected: Build succeeds

- [ ] **Step 3: Commit footer component**

```bash
git add src/components/home/site-footer.jsx
git commit -m "feat: add SiteFooter component"
```

---

### Task 21: Update Homepage to Use New Components

**Files:**
- Modify: `src/app/page.jsx`

- [ ] **Step 1: Replace homepage with new sections**

```javascript
import { HeroSection } from "@/components/home/hero-section"
import { EraComparison } from "@/components/home/era-comparison"
import { AgentEra } from "@/components/home/agent-era"
import { LifetimeTimeline } from "@/components/home/lifetime-timeline"
import { TechCards } from "@/components/home/tech-cards"
import { SolutionComparison } from "@/components/home/solution-comparison"
import { CTASection } from "@/components/home/cta-section"
import { SiteNav } from "@/components/home/site-nav"
import { SiteFooter } from "@/components/home/site-footer"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteNav />
      
      <main className="flex-1">
        <HeroSection />
        <EraComparison />
        <AgentEra />
        <LifetimeTimeline />
        <TechCards />
        <SolutionComparison />
        <CTASection />
      </main>

      <SiteFooter />
    </div>
  )
}
```

- [ ] **Step 2: Verify homepage builds and renders**

Run: `npm run build`
Expected: Build succeeds without errors

Run: `npm run dev`
Expected: All 7 sections render correctly

- [ ] **Step 3: Commit homepage update**

```bash
git add src/app/page.jsx
git commit -m "feat: replace homepage with redesigned 7-section layout"
```

---

### Task 22: Run Lint and Fix Issues

**Files:**
- Various

- [ ] **Step 1: Run lint check**

Run: `npm run lint`
Expected: List of any lint issues

- [ ] **Step 2: Fix lint issues**

Run: `npm run lint:fix`
Expected: All fixable issues resolved

- [ ] **Step 3: Re-run lint to verify**

Run: `npm run lint`
Expected: No lint errors remaining

- [ ] **Step 4: Commit lint fixes**

```bash
git add -A
git commit -m "fix: resolve lint issues"
```

---

### Task 23: Final Build Verification

**Files:**
- All

- [ ] **Step 1: Run production build**

Run: `npm run build`
Expected: Build succeeds with no errors

- [ ] **Step 2: Start production server locally**

Run: `npm start`
Expected: Server starts on port 3000

- [ ] **Step 3: Manual verification in browser**

Open: http://localhost:3000
Verify:
- [ ] All 7 sections render correctly
- [ ] Network animation in Hero works
- [ ] All diagrams display properly
- [ ] Navigation links work
- [ ] Mobile responsive layout works
- [ ] Fonts load correctly (Playfair Display for headings, IBM Plex Mono for body)

- [ ] **Step 4: Stop server and commit final changes**

```bash
git add -A
git commit -m "chore: final build verification"
```

---

## Summary

This plan implements the redesigned epress.world homepage with:

1. **Foundation**: New fonts (Playfair Display + IBM Plex Mono), CSS utilities, shared components
2. **Hero**: Hybrid SVG + Canvas network animation
3. **7 Sections**: Era Context, AI Agent Era, Lifetime Timeline, Tech Cards, Solution Comparison, CTA
4. **Navigation & Footer**: Updated with new links and styling

**Total Files Created**: 18
**Total Files Modified**: 4

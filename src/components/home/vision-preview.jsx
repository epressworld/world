"use client"

import useEmblaCarousel from "embla-carousel-react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useCallback, useEffect, useRef } from "react"

function MeritGraph() {
  const center = { x: 150, y: 80 }
  const R = 26
  const r = 10
  const arrowLen = 7

  const satellites = [
    { x: 38, y: 22 },
    { x: 150, y: 14 },
    { x: 262, y: 22 },
    { x: 278, y: 96 },
    { x: 198, y: 148 },
    { x: 54, y: 140 },
    { x: 14, y: 88, silent: true },
    { x: 270, y: 148, silent: true },
  ]

  const arrows = satellites
    .filter((s) => !s.silent)
    .map((s) => {
      const dx = center.x - s.x
      const dy = center.y - s.y
      const dist = Math.sqrt(dx * dx + dy * dy)
      const ux = dx / dist
      const uy = dy / dist
      const x1 = s.x + ux * r
      const y1 = s.y + uy * r
      const x2 = center.x - ux * (R + 2)
      const y2 = center.y - uy * (R + 2)
      const px = -uy * arrowLen * 0.45
      const py = ux * arrowLen * 0.45
      return { x1, y1, x2, y2, px, py }
    })

  return (
    <svg
      viewBox="0 0 300 168"
      width="100%"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden="true"
    >
      {arrows.map((a, i) => (
        <line
          key={i}
          x1={a.x1}
          y1={a.y1}
          x2={a.x2}
          y2={a.y2}
          strokeOpacity="0.35"
          strokeWidth="1.2"
        />
      ))}
      {arrows.map((a, i) => (
        <polygon
          key={i}
          points={`${a.x2},${a.y2} ${a.x2 - (a.x2 - a.x1) * 0.15 + a.px},${
            a.y2 - (a.y2 - a.y1) * 0.15 + a.py
          } ${a.x2 - (a.x2 - a.x1) * 0.15 - a.px},${
            a.y2 - (a.y2 - a.y1) * 0.15 - a.py
          }`}
          fill="currentColor"
          fillOpacity="0.5"
          stroke="none"
        />
      ))}
      {satellites.map((s, i) => (
        <circle
          key={i}
          cx={s.x}
          cy={s.y}
          r={r}
          fill="currentColor"
          fillOpacity={s.silent ? 0.04 : 0.1}
          strokeOpacity={s.silent ? 0.2 : 0.6}
          strokeWidth="1.2"
        />
      ))}
      <circle
        cx={center.x}
        cy={center.y}
        r={R + 8}
        fill="currentColor"
        fillOpacity="0.04"
        stroke="none"
        className="vision-glow-ring"
      />
      <circle
        cx={center.x}
        cy={center.y}
        r={R}
        fill="currentColor"
        fillOpacity="0.14"
        strokeWidth="2"
        className="vision-central-node"
      />
      <circle
        cx={center.x}
        cy={center.y}
        r={5}
        fill="currentColor"
        fillOpacity="0.5"
        stroke="none"
      />
    </svg>
  )
}

const todayCards = [
  { badge: "AI?", badgeColor: "badge-red" },
  { badge: "?", badgeColor: "badge-gray" },
  { badge: "AI?", badgeColor: "badge-orange" },
  { badge: "?", badgeColor: "badge-gray" },
  { badge: "AI?", badgeColor: "badge-red" },
  { badge: "AI?", badgeColor: "badge-orange" },
]

const epressCards = [
  { addr: "0x742d..." },
  { addr: "0x3f9a..." },
  { addr: "0x1c8e..." },
  { addr: "0x9b2f..." },
  { addr: "0xe47c..." },
  { addr: "0x5a1d..." },
]

function ContentCard({
  badge,
  badgeColor,
  addr,
  lineWidths = ["100%", "72%"],
}) {
  return (
    <div className="content-stream-card">
      <div className="stream-line" style={{ width: lineWidths[0] }} />
      <div className="stream-line short" style={{ width: lineWidths[1] }} />
      {badge && <span className={`stream-badge ${badgeColor}`}>{badge}</span>}
      {addr && (
        <>
          <span className="stream-badge badge-green">✓</span>
          <span className="stream-addr">{addr}</span>
        </>
      )}
    </div>
  )
}

function ScrollingStream({ cards, renderCard, delay = 0 }) {
  const ref = useRef(null)
  const animRef = useRef(null)
  const posRef = useRef(0)
  const CARD_H = 48
  const total = cards.length

  useEffect(() => {
    let startTime = null
    const SPEED = 18

    function step(ts) {
      if (!ref.current) return
      if (!startTime) startTime = ts - delay * 1000
      const elapsed = ts - startTime
      posRef.current = ((elapsed * SPEED) / 1000) % (total * CARD_H)
      ref.current.style.transform = `translateY(-${posRef.current}px)`
      animRef.current = requestAnimationFrame(step)
    }

    const mq = window.matchMedia("(prefers-reduced-motion: reduce)")
    if (!mq.matches) {
      animRef.current = requestAnimationFrame(step)
    }

    return () => {
      if (animRef.current) cancelAnimationFrame(animRef.current)
    }
  }, [delay, total])

  const doubled = [...cards, ...cards]

  return (
    <div className="stream-viewport">
      <div ref={ref} className="stream-track">
        {doubled.map((card, i) => renderCard(card, i))}
      </div>
    </div>
  )
}

function AIContentFloodSvg() {
  return (
    <svg
      viewBox="0 0 280 160"
      width="100%"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <filter id="blur">
          <feGaussianBlur stdDeviation="1" />
        </filter>
      </defs>

      <rect width="280" height="160" rx="12" fill="#1a0a0a" />

      <rect
        x="20"
        y="20"
        width="200"
        height="10"
        rx="3"
        fill="rgba(239, 68, 68, 0.15)"
        filter="url(#blur)"
      />
      <rect
        x="20"
        y="36"
        width="240"
        height="10"
        rx="3"
        fill="rgba(239, 68, 68, 0.22)"
        filter="url(#blur)"
      />
      <rect
        x="20"
        y="52"
        width="180"
        height="10"
        rx="3"
        fill="rgba(239, 68, 68, 0.12)"
        filter="url(#blur)"
      />
      <rect
        x="20"
        y="68"
        width="220"
        height="10"
        rx="3"
        fill="rgba(239, 68, 68, 0.28)"
        filter="url(#blur)"
      />
      <rect
        x="20"
        y="84"
        width="160"
        height="10"
        rx="3"
        fill="rgba(239, 68, 68, 0.18)"
        filter="url(#blur)"
      />
      <rect
        x="20"
        y="100"
        width="190"
        height="10"
        rx="3"
        fill="rgba(239, 68, 68, 0.14)"
        filter="url(#blur)"
      />
      <rect
        x="20"
        y="116"
        width="210"
        height="10"
        rx="3"
        fill="rgba(239, 68, 68, 0.20)"
        filter="url(#blur)"
      />

      <text
        x="140"
        y="130"
        textAnchor="middle"
        fill="#fca5a5"
        fontSize="11"
        fontFamily="monospace"
        stroke="none"
      >
        "Is this human or AI?"
      </text>
      <text
        x="140"
        y="148"
        textAnchor="middle"
        fill="#7f1d1d"
        fontSize="10"
        fontFamily="monospace"
        stroke="none"
      >
        No way to know.
      </text>
    </svg>
  )
}

function ProofOfSourceSvg() {
  return (
    <svg
      viewBox="0 0 280 160"
      width="100%"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="280" height="160" rx="12" fill="#0f1a12" />

      <text
        x="20"
        y="35"
        fill="#F7931A"
        fontSize="10"
        fontFamily="monospace"
        stroke="none"
      >
        0x7a3f...c9d2
      </text>
      <text
        x="20"
        y="52"
        fill="#34D399"
        fontSize="9"
        fontFamily="monospace"
        stroke="none"
      >
        Published: 2026-03-11
      </text>
      <text
        x="20"
        y="68"
        fill="#34D399"
        fontSize="9"
        fontFamily="monospace"
        stroke="none"
      >
        Hash: verified ✓
      </text>
      <text
        x="20"
        y="84"
        fill="#34D399"
        fontSize="9"
        fontFamily="monospace"
        stroke="none"
      >
        Signature: valid ✓
      </text>

      <rect x="20" y="100" width="240" height="3" rx="1" fill="#1a2a1a" />
      <rect x="20" y="100" width="180" height="3" rx="1" fill="#34D399" />

      <text
        x="140"
        y="142"
        textAnchor="middle"
        fill="#34D399"
        fontSize="11"
        fontFamily="monospace"
        stroke="none"
      >
        "Cryptographically proven."
      </text>
    </svg>
  )
}

function AgentDiagram() {
  return (
    <svg
      viewBox="0 0 800 420"
      width="100%"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="closedGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#2a1515" />
          <stop offset="100%" stopColor="#1a0f0f" />
        </linearGradient>
        <linearGradient id="openGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#1a2a1a" />
          <stop offset="100%" stopColor="#0f1a12" />
        </linearGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="2" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <rect
        x="40"
        y="30"
        width="320"
        height="340"
        rx="16"
        fill="url(#closedGrad)"
        stroke="#ef4444"
        strokeWidth="2"
        strokeOpacity="0.5"
      />
      <text
        x="200"
        y="65"
        textAnchor="middle"
        fill="#ef4444"
        fontSize="16"
        fontFamily="sans-serif"
        fontWeight="600"
        stroke="none"
      >
        Closed Platforms
      </text>

      <rect
        x="80"
        y="90"
        width="240"
        height="40"
        rx="8"
        fill="#1a1a1a"
        stroke="#ef4444"
        strokeOpacity="0.3"
      />
      <text
        x="200"
        y="115"
        textAnchor="middle"
        fill="#fca5a5"
        fontSize="12"
        fontFamily="monospace"
        stroke="none"
      >
        Your AI Agent
      </text>

      <line
        x1="200"
        y1="135"
        x2="200"
        y2="160"
        stroke="#666"
        strokeWidth="2"
        strokeDasharray="4,4"
      />
      <polygon points="200,165 194,155 206,155" fill="#666" stroke="none" />

      <rect
        x="80"
        y="170"
        width="240"
        height="45"
        rx="8"
        fill="#151515"
        stroke="#666"
        strokeOpacity="0.5"
      />
      <text
        x="200"
        y="190"
        textAnchor="middle"
        fill="#888"
        fontSize="11"
        fontFamily="monospace"
        stroke="none"
      >
        Twitter / Instagram
      </text>
      <text
        x="200"
        y="205"
        textAnchor="middle"
        fill="#666"
        fontSize="9"
        fontFamily="monospace"
        stroke="none"
      >
        (walled gardens)
      </text>

      <line
        x1="200"
        y1="220"
        x2="200"
        y2="245"
        stroke="#666"
        strokeWidth="2"
        strokeDasharray="4,4"
      />
      <polygon points="200,250 194,240 206,240" fill="#666" stroke="none" />

      <g transform="translate(70, 255)">
        <rect
          x="0"
          y="0"
          width="260"
          height="28"
          rx="6"
          fill="#1a0f0f"
          stroke="#ef4444"
          strokeOpacity="0.4"
        />
        <text x="15" y="18" fill="#ef4444" fontSize="12" stroke="none">
          ✗
        </text>
        <text
          x="35"
          y="18"
          fill="#fca5a5"
          fontSize="10"
          fontFamily="monospace"
          stroke="none"
        >
          Rate Limited
        </text>
      </g>

      <g transform="translate(70, 290)">
        <rect
          x="0"
          y="0"
          width="260"
          height="28"
          rx="6"
          fill="#1a0f0f"
          stroke="#ef4444"
          strokeOpacity="0.4"
        />
        <text x="15" y="18" fill="#ef4444" fontSize="12" stroke="none">
          ✗
        </text>
        <text
          x="35"
          y="18"
          fill="#fca5a5"
          fontSize="10"
          fontFamily="monospace"
          stroke="none"
        >
          Paywall
        </text>
      </g>

      <g transform="translate(70, 325)">
        <rect
          x="0"
          y="0"
          width="260"
          height="28"
          rx="6"
          fill="#1a0f0f"
          stroke="#ef4444"
          strokeOpacity="0.4"
        />
        <text x="15" y="18" fill="#ef4444" fontSize="12" stroke="none">
          ✗
        </text>
        <text
          x="35"
          y="18"
          fill="#fca5a5"
          fontSize="10"
          fontFamily="monospace"
          stroke="none"
        >
          API Blocked
        </text>
      </g>

      <text
        x="200"
        y="385"
        textAnchor="middle"
        fill="#ef4444"
        fontSize="12"
        fontFamily="monospace"
        opacity="0.9"
        stroke="none"
      >
        Agent cannot work
      </text>

      <rect
        x="440"
        y="30"
        width="320"
        height="340"
        rx="16"
        fill="url(#openGrad)"
        stroke="#34D399"
        strokeWidth="2"
        strokeOpacity="0.5"
      />
      <text
        x="600"
        y="65"
        textAnchor="middle"
        fill="#34D399"
        fontSize="16"
        fontFamily="sans-serif"
        fontWeight="600"
        stroke="none"
      >
        epress Network
      </text>

      <rect
        x="480"
        y="90"
        width="240"
        height="40"
        rx="8"
        fill="#1a2a1a"
        stroke="#34D399"
        strokeOpacity="0.3"
      />
      <text
        x="600"
        y="115"
        textAnchor="middle"
        fill="#6EE7B7"
        fontSize="12"
        fontFamily="monospace"
        stroke="none"
      >
        Your AI Agent
      </text>

      <line
        x1="600"
        y1="135"
        x2="600"
        y2="160"
        stroke="#34D399"
        strokeWidth="2"
        filter="url(#glow)"
      />
      <polygon points="600,165 594,155 606,155" fill="#34D399" stroke="none" />

      <rect
        x="480"
        y="170"
        width="240"
        height="45"
        rx="8"
        fill="#0f1a12"
        stroke="#34D399"
        strokeOpacity="0.5"
      />
      <text
        x="600"
        y="190"
        textAnchor="middle"
        fill="#6EE7B7"
        fontSize="11"
        fontFamily="monospace"
        stroke="none"
      >
        Any epress Node
      </text>
      <text
        x="600"
        y="205"
        textAnchor="middle"
        fill="#34D399"
        fontSize="9"
        fontFamily="monospace"
        stroke="none"
      >
        (self-hosted or public)
      </text>

      <line
        x1="600"
        y1="220"
        x2="600"
        y2="245"
        stroke="#34D399"
        strokeWidth="2"
        filter="url(#glow)"
      />
      <polygon points="600,250 594,240 606,240" fill="#34D399" stroke="none" />

      <g transform="translate(470, 255)">
        <rect
          x="0"
          y="0"
          width="260"
          height="28"
          rx="6"
          fill="#0f1a12"
          stroke="#34D399"
          strokeOpacity="0.4"
        />
        <text x="15" y="18" fill="#34D399" fontSize="12" stroke="none">
          ✓
        </text>
        <text
          x="35"
          y="18"
          fill="#6EE7B7"
          fontSize="10"
          fontFamily="monospace"
          stroke="none"
        >
          Open RSS
        </text>
      </g>

      <g transform="translate(470, 290)">
        <rect
          x="0"
          y="0"
          width="260"
          height="28"
          rx="6"
          fill="#0f1a12"
          stroke="#34D399"
          strokeOpacity="0.4"
        />
        <text x="15" y="18" fill="#34D399" fontSize="12" stroke="none">
          ✓
        </text>
        <text
          x="35"
          y="18"
          fill="#6EE7B7"
          fontSize="10"
          fontFamily="monospace"
          stroke="none"
        >
          Open API
        </text>
      </g>

      <g transform="translate(470, 325)">
        <rect
          x="0"
          y="0"
          width="260"
          height="28"
          rx="6"
          fill="#0f1a12"
          stroke="#34D399"
          strokeOpacity="0.4"
        />
        <text x="15" y="18" fill="#34D399" fontSize="12" stroke="none">
          ✓
        </text>
        <text
          x="35"
          y="18"
          fill="#6EE7B7"
          fontSize="10"
          fontFamily="monospace"
          stroke="none"
        >
          No limits
        </text>
      </g>

      <text
        x="600"
        y="385"
        textAnchor="middle"
        fill="#34D399"
        fontSize="12"
        fontFamily="monospace"
        opacity="0.9"
        stroke="none"
      >
        Agent operates freely
      </text>

      <rect
        x="370"
        y="170"
        width="60"
        height="40"
        rx="8"
        fill="#1a1a1a"
        stroke="#F7931A"
        strokeWidth="2"
      />
      <text
        x="400"
        y="195"
        textAnchor="middle"
        fill="#F7931A"
        fontSize="14"
        fontFamily="monospace"
        fontWeight="bold"
        stroke="none"
      >
        VS
      </text>
    </svg>
  )
}

const cardsData = [
  {
    id: "merit",
    title: "Merit Rises Naturally",
    description:
      "Content value is determined by who cites it — not by who paid the algorithm.",
    visual: <MeritGraph />,
  },
  {
    id: "reputation",
    title: "Your Reputation Is Yours",
    description: "No platform can revoke what the math has already proven.",
    visual: (
      <div>
        <div
          className="rounded-lg p-3 mb-2"
          style={{
            background: "rgba(239,68,68,0.06)",
            border: "1px solid rgba(239,68,68,0.12)",
          }}
        >
          <p
            className="text-[10px] uppercase tracking-wider font-semibold mb-1"
            style={{ color: "rgba(248,113,113,0.7)" }}
          >
            Every platform you&apos;ve ever used
          </p>
          <p className="text-xs text-dark-muted">
            Your followers, posts, reputation — stored in their database. Gone
            the day they&apos;re gone.
          </p>
        </div>
        <div
          className="rounded-lg p-3"
          style={{
            background: "rgba(34,197,94,0.06)",
            border: "1px solid rgba(34,197,94,0.14)",
          }}
        >
          <p
            className="text-[10px] uppercase tracking-wider font-semibold mb-1"
            style={{ color: "rgba(74,222,128,0.8)" }}
          >
            epress
          </p>
          <p className="text-xs text-dark-text">
            Your contribution history is cryptographically bound to your
            identity. Portable. Permanent. Provably yours.
          </p>
        </div>
      </div>
    ),
  },
  {
    id: "human",
    title: "Human Voices Stand Out Again",
    description:
      "Every post carries a verified identity with history. Accounts built over time — and backed by real assets — can't be faked at scale.",
    visual: (
      <div>
        <div className="grid grid-cols-2 gap-3 mb-4">
          <div>
            <p className="text-[10px] uppercase tracking-wider text-center text-dark-muted/60 font-semibold mb-2">
              Today
            </p>
            <AIContentFloodSvg />
          </div>
          <div>
            <p className="text-[10px] uppercase tracking-wider text-center text-green-400/70 font-semibold mb-2">
              epress
            </p>
            <ProofOfSourceSvg />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-2">
          <ScrollingStream
            cards={todayCards}
            delay={0}
            renderCard={(card, i) => (
              <ContentCard
                key={i}
                badge={card.badge}
                badgeColor={card.badgeColor}
                lineWidths={
                  i % 3 === 0
                    ? ["100%", "60%"]
                    : i % 3 === 1
                      ? ["85%", "75%"]
                      : ["92%", "50%"]
                }
              />
            )}
          />
          <ScrollingStream
            cards={epressCards}
            delay={4}
            renderCard={(card, i) => (
              <ContentCard
                key={i}
                addr={card.addr}
                lineWidths={
                  i % 3 === 0
                    ? ["88%", "65%"]
                    : i % 3 === 1
                      ? ["100%", "55%"]
                      : ["78%", "70%"]
                }
              />
            )}
          />
        </div>
      </div>
    ),
  },
  {
    id: "agent",
    title: "Your AI Agent Works Here",
    description:
      "Closed platforms are building walls exactly where AI agents need to move. epress nodes are open by default.",
    visual: <AgentDiagram />,
  },
]

export function VisionPreview() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })
  const sectionRef = useRef(null)

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return

    const handleEnter = () => {
      if (emblaApi) emblaApi.plugins().autoplay?.stop()
    }
    const handleLeave = () => {
      if (emblaApi) emblaApi.plugins().autoplay?.play()
    }

    el.addEventListener("mouseenter", handleEnter)
    el.addEventListener("mouseleave", handleLeave)

    return () => {
      el.removeEventListener("mouseenter", handleEnter)
      el.removeEventListener("mouseleave", handleLeave)
    }
  }, [emblaApi])

  return (
    <section
      ref={sectionRef}
      className="landing-section vision-preview-section"
    >
      <style>{`
        @keyframes vp-pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.06); }
        }
        @keyframes vp-glow {
          0%, 100% { opacity: 0.04; transform: scale(1); }
          50% { opacity: 0.10; transform: scale(1.15); }
        }
        .vision-central-node {
          transform-origin: 150px 80px;
          animation: vp-pulse 3.2s ease-in-out infinite;
        }
        .vision-glow-ring {
          transform-origin: 150px 80px;
          animation: vp-glow 3.2s ease-in-out infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .vision-central-node, .vision-glow-ring { animation: none; }
        }

        .stream-viewport {
          height: 140px;
          overflow: hidden;
          position: relative;
        }
        .stream-viewport::before, .stream-viewport::after {
          content: '';
          position: absolute;
          left: 0; right: 0;
          height: 24px;
          z-index: 2;
          pointer-events: none;
        }
        .stream-viewport::before {
          top: 0;
          background: linear-gradient(to bottom, rgba(10,10,10,0.9) 0%, transparent 100%);
        }
        .stream-viewport::after {
          bottom: 0;
          background: linear-gradient(to top, rgba(10,10,10,0.9) 0%, transparent 100%);
        }
        .stream-track { will-change: transform; }
        .content-stream-card {
          position: relative;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 6px;
          padding: 6px 8px;
          margin-bottom: 6px;
          min-height: 36px;
        }
        .stream-line {
          height: 4px;
          background: rgba(255,255,255,0.12);
          border-radius: 2px;
          margin-bottom: 4px;
        }
        .stream-line.short {
          background: rgba(255,255,255,0.07);
          margin-bottom: 0;
        }
        .stream-badge {
          position: absolute;
          top: 5px;
          right: 6px;
          font-size: 8px;
          padding: 1px 4px;
          border-radius: 3px;
          font-weight: 600;
        }
        .stream-addr {
          position: absolute;
          bottom: 4px;
          right: 6px;
          font-size: 7px;
          opacity: 0.35;
          font-family: monospace;
        }
        .badge-red { background: rgba(239,68,68,0.15); color: #f87171; }
        .badge-orange { background: rgba(249,115,22,0.15); color: #fb923c; }
        .badge-gray { background: rgba(107,114,128,0.2); color: #9ca3af; }
        .badge-green { background: rgba(34,197,94,0.15); color: #4ade80; }

        .embla {
          overflow: hidden;
          flex: 1;
          max-width: 800px;
        }
        .embla__container {
          display: flex;
        }
        .embla__slide {
          flex: 0 0 100%;
          min-width: 0;
        }
        .carousel-arrow {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background: transparent;
          border: none;
          color: rgba(255,255,255,0.3);
          cursor: pointer;
          transition: all 0.2s ease;
          flex-shrink: 0;
        }
        .carousel-arrow:hover {
          color: #e8a04a;
        }
        @media (max-width: 640px) {
          .carousel-arrow {
            width: 40px;
            height: 40px;
          }
        }
      `}</style>

      <div className="container-custom">
        <p className="section-label text-center">The Future</p>
        <h2 className="landing-heading mb-4 text-center">
          A Network That Changes What&apos;s Possible
        </h2>
        <p className="landing-subheading text-center mx-auto mb-8 max-w-xl">
          When millions of nodes connect through an open protocol, something
          larger emerges.
        </p>

        <div className="flex items-center justify-center gap-4">
          <button
            type="button"
            className="carousel-arrow"
            onClick={scrollPrev}
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>

          <div className="embla" ref={emblaRef}>
            <div className="embla__container">
              {cardsData.map((card) => (
                <div key={card.id} className="embla__slide px-4">
                  <div>
                    <h3 className="font-semibold text-2xl mb-2 text-center">
                      {card.title}
                    </h3>
                    <p className="text-sm text-dark-muted leading-relaxed text-center max-w-lg mx-auto mb-6">
                      {card.description}
                    </p>
                    <div>{card.visual}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            type="button"
            className="carousel-arrow"
            onClick={scrollNext}
            aria-label="Next slide"
          >
            <ChevronRight className="w-8 h-8" />
          </button>
        </div>

        <div className="text-center mt-12">
          <a
            href="/whitepaper"
            className="text-sm text-dark-muted hover:text-primary transition-colors inline-flex items-center gap-1"
          >
            Read the full vision in the whitepaper →
          </a>
        </div>
      </div>
    </section>
  )
}

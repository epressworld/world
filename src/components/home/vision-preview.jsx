"use client"

import Autoplay from "embla-carousel-autoplay"
import useEmblaCarousel from "embla-carousel-react"
import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useCallback, useEffect, useRef, useState } from "react"

function MeritGraph() {
  const [key, setKey] = useState(0)
  const [drawingLine, setDrawingLine] = useState(-1)
  const [centerStage, setCenterStage] = useState(0)
  const center = { x: 150, y: 84 }

  const satellites = [
    { x: 38, y: 22, offset: 0 },
    { x: 150, y: 14, offset: 0.5 },
    { x: 262, y: 22, offset: 1 },
    { x: 278, y: 96, offset: 1.5 },
    { x: 198, y: 148, offset: 2 },
    { x: 54, y: 140, offset: 2.5 },
  ]

  const radiusStages = [18, 20, 22, 24, 26, 28, 30]
  const centerRadius = radiusStages[centerStage]
  const textScale = centerRadius / 18

  useEffect(() => {
    setDrawingLine(-1)
    setCenterStage(0)

    for (let i = 0; i < 6; i++) {
      setTimeout(
        () => {
          setDrawingLine(i)
        },
        1000 + i * 1000,
      )

      setTimeout(
        () => {
          setCenterStage(i + 1)
        },
        1400 + i * 1000,
      )
    }
  }, [key])

  useEffect(() => {
    const timer = setInterval(() => {
      setKey((k) => k + 1)
    }, 10000)
    return () => clearInterval(timer)
  }, [])

  const arrows = satellites.map((s) => {
    const dx = center.x - s.x
    const dy = center.y - s.y
    const dist = Math.sqrt(dx * dx + dy * dy)
    const ux = dx / dist
    const uy = dy / dist
    return {
      x1: s.x + ux * 10,
      y1: s.y + uy * 10,
      x2: center.x - ux * centerRadius,
      y2: center.y - uy * centerRadius,
    }
  })

  return (
    <div
      key={key}
      className="relative"
      style={{ width: "100%", height: "300px" }}
    >
      <svg
        viewBox="0 0 300 168"
        width="100%"
        height="100%"
        preserveAspectRatio="xMidYMid meet"
        className="overflow-visible"
        aria-hidden="true"
      >
        {arrows.map((a, i) => (
          <motion.g key={`arrow-${i}`}>
            <motion.line
              x1={a.x1}
              y1={a.y1}
              x2={a.x2}
              y2={a.y2}
              stroke="#e8a04a"
              strokeWidth="1"
              strokeOpacity={0.4}
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{
                pathLength: i <= drawingLine ? 1 : 0,
                opacity: i <= drawingLine ? 1 : 0,
              }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            />
          </motion.g>
        ))}

        {satellites.map((s, i) => (
          <motion.g
            key={`sat-${i}`}
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              x: [0, 2, -1, 1, 0],
              y: [0, -1, 2, -1, 0],
            }}
            transition={{
              opacity: { duration: 0.3 },
              x: {
                duration: 4,
                repeat: Infinity,
                repeatType: "loop",
                delay: s.offset,
                ease: "easeInOut",
              },
              y: {
                duration: 3.5,
                repeat: Infinity,
                repeatType: "loop",
                delay: s.offset,
                ease: "easeInOut",
              },
            }}
          >
            <circle
              cx={s.x}
              cy={s.y}
              r={10}
              fill="#374151"
              fillOpacity={0.25}
              stroke="#6b7280"
              strokeWidth="1"
              strokeOpacity={0.4}
            />
            <motion.text
              x={s.x}
              y={s.y}
              dy="0.35em"
              textAnchor="middle"
              fill="#9ca3af"
              fontSize="6"
              fontWeight="400"
              fontFamily="sans-serif"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.3 }}
            >
              cites
            </motion.text>
          </motion.g>
        ))}

        <motion.circle
          cx={center.x}
          cy={center.y}
          r={centerRadius}
          fill="#e8a04a"
          fillOpacity={0.15}
          stroke="#f59e0b"
          strokeWidth="1.5"
          transition={{ duration: 0.4, ease: "easeOut" }}
        />

        <motion.text
          x={center.x}
          y={center.y}
          dy="0.35em"
          textAnchor="middle"
          fill="#fbbf24"
          fontSize="7"
          fontWeight="400"
          fontFamily="sans-serif"
          initial={{ opacity: 0, scale: 1 }}
          animate={{ opacity: 1, scale: textScale }}
          transition={{
            opacity: { delay: 0.3, duration: 0.4 },
            scale: { duration: 0.4, ease: "easeOut" },
          }}
        >
          original
        </motion.text>

        {centerStage === 6 && (
          <motion.circle
            cx={center.x}
            cy={center.y}
            r={centerRadius}
            fill="#e8a04a"
            fillOpacity={0}
            initial={{ scale: 1, fillOpacity: 0.25 }}
            animate={{
              scale: [1, 1.15, 1],
              fillOpacity: [0.25, 0.08, 0.25],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        )}
      </svg>
    </div>
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

      <rect
        width="280"
        height="160"
        rx="12"
        fill="#1a0a0a"
        stroke="#ef4444"
        strokeWidth="2"
        strokeOpacity="0.5"
      />

      <rect
        x="230"
        y="8"
        width="42"
        height="18"
        rx="4"
        fill="#ef4444"
        fillOpacity="0.2"
        stroke="#ef4444"
        strokeWidth="1"
        strokeOpacity="0.6"
      />
      <text
        x="251"
        y="20"
        textAnchor="middle"
        fill="#fca5a5"
        fontSize="9"
        fontFamily="monospace"
        fontWeight="600"
        stroke="none"
      >
        POST
      </text>

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
      <rect
        width="280"
        height="160"
        rx="12"
        fill="#0f1a12"
        stroke="#34D399"
        strokeWidth="2"
        strokeOpacity="0.5"
      />

      <rect
        x="230"
        y="8"
        width="42"
        height="18"
        rx="4"
        fill="#34D399"
        fillOpacity="0.15"
        stroke="#34D399"
        strokeWidth="1"
        strokeOpacity="0.6"
      />
      <text
        x="251"
        y="20"
        textAnchor="middle"
        fill="#6EE7B7"
        fontSize="9"
        fontFamily="monospace"
        fontWeight="600"
        stroke="none"
      >
        POST
      </text>

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
      height="300px"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden="true"
      preserveAspectRatio="xMidYMid meet"
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
    description: (
      <>
        Platform reputation: a number in their database.
        <br />
        epress reputation: a cryptographic fact no one can alter.
      </>
    ),
    visual: (
      <div className="reputation-comparison">
        <div className="reputation-cards flex flex-col md:flex-row gap-3 md:gap-5 max-w-full md:max-w-[700px] mx-auto">
          <div
            className="reputation-card flex-1 min-w-0 md:min-w-[280px]"
            style={{
              borderRadius: "14px",
              padding: "16px 20px",
              background:
                "linear-gradient(135deg, rgba(40,40,50,1) 0%, rgba(25,25,32,1) 100%)",
              border: "1px solid rgba(255,255,255,0.1)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <div>
              <div
                style={{
                  fontSize: "8px",
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  color: "rgba(255,255,255,0.25)",
                  marginBottom: "6px",
                }}
              >
                PLATFORM ACCOUNT
              </div>
              <div
                style={{
                  fontSize: "16px",
                  fontWeight: 700,
                  color: "rgba(255,255,255,0.85)",
                }}
              >
                @alice
              </div>
            </div>
            <div style={{ display: "flex", gap: "20px", marginTop: "12px" }}>
              <div>
                <div
                  style={{
                    fontSize: "18px",
                    fontWeight: 700,
                    color: "rgba(255,255,255,0.8)",
                  }}
                >
                  4.2K
                </div>
                <div
                  style={{
                    fontSize: "8px",
                    color: "rgba(255,255,255,0.3)",
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                  }}
                >
                  followers
                </div>
              </div>
              <div>
                <div
                  style={{
                    fontSize: "18px",
                    fontWeight: 700,
                    color: "rgba(255,255,255,0.8)",
                  }}
                >
                  847
                </div>
                <div
                  style={{
                    fontSize: "8px",
                    color: "rgba(255,255,255,0.3)",
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                  }}
                >
                  posts
                </div>
              </div>
            </div>
            <div
              style={{
                width: "100%",
                marginTop: "10px",
                padding: "6px 10px",
                borderRadius: "6px",
                background: "rgba(239,68,68,0.08)",
                border: "1px solid rgba(239,68,68,0.15)",
                display: "flex",
                alignItems: "center",
                gap: "6px",
              }}
            >
              <div
                style={{
                  width: "5px",
                  height: "5px",
                  borderRadius: "50%",
                  background: "rgba(251,191,36,0.7)",
                  flexShrink: 0,
                }}
              />
              <span
                style={{
                  fontSize: "9px",
                  color: "rgba(255,255,255,0.3)",
                  fontFamily: "monospace",
                  whiteSpace: "nowrap",
                }}
              >
                Valid until platform decides otherwise
              </span>
            </div>
          </div>
          <div
            className="reputation-card flex-1 min-w-0 md:min-w-[280px]"
            style={{
              borderRadius: "14px",
              padding: "16px 20px",
              background:
                "linear-gradient(135deg, rgba(10,28,18,1) 0%, rgba(8,20,14,1) 100%)",
              border: "1px solid rgba(52,211,153,0.2)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <div>
              <div
                style={{
                  fontSize: "8px",
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  color: "rgba(52,211,153,0.45)",
                  marginBottom: "6px",
                }}
              >
                EPRESS IDENTITY
              </div>
              <div
                style={{
                  fontSize: "13px",
                  fontWeight: 700,
                  color: "rgba(110,231,183,0.9)",
                  fontFamily: "monospace",
                }}
              >
                0x742d...f9a3
              </div>
            </div>
            <div style={{ display: "flex", gap: "20px", marginTop: "12px" }}>
              <div>
                <div
                  style={{
                    fontSize: "18px",
                    fontWeight: 700,
                    color: "rgba(110,231,183,0.85)",
                  }}
                >
                  4.2K
                </div>
                <div
                  style={{
                    fontSize: "8px",
                    color: "rgba(110,231,183,0.35)",
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                  }}
                >
                  cited by
                </div>
              </div>
              <div>
                <div
                  style={{
                    fontSize: "18px",
                    fontWeight: 700,
                    color: "rgba(110,231,183,0.85)",
                  }}
                >
                  847
                </div>
                <div
                  style={{
                    fontSize: "8px",
                    color: "rgba(110,231,183,0.35)",
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                  }}
                >
                  signed posts
                </div>
              </div>
            </div>
            <div
              style={{
                width: "100%",
                marginTop: "10px",
                padding: "6px 10px",
                borderRadius: "6px",
                background: "rgba(52,211,153,0.07)",
                border: "1px solid rgba(52,211,153,0.18)",
                display: "flex",
                alignItems: "center",
                gap: "6px",
              }}
            >
              <div
                style={{
                  width: "5px",
                  height: "5px",
                  borderRadius: "50%",
                  background: "rgba(52,211,153,0.8)",
                  flexShrink: 0,
                }}
              />
              <span
                style={{
                  fontSize: "9px",
                  color: "rgba(110,231,183,0.6)",
                  fontFamily: "monospace",
                }}
              >
                Valid forever. Verifiable by anyone.
              </span>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "human",
    title: "Human Voices Stand Out Again",
    description:
      "AI generates infinite content at zero cost. It can't fake years of signed history — or what's behind the address.",
    visual: (
      <div style={{ height: "300px" }}>
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
    title: "Your AI Agent Needs Open Networks",
    description:
      "Closed platforms are building walls exactly where AI agents need to move. epress nodes are open by default.",
    visual: <AgentDiagram />,
  },
]

export function VisionPreview() {
  const autoplayRef = useRef(
    Autoplay({ delay: 8000, stopOnInteraction: false }),
  )
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    autoplayRef.current,
  ])
  const carouselRef = useRef(null)
  const [selectedIndex, setSelectedIndex] = useState(0)

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  const scrollTo = useCallback(
    (index) => {
      if (emblaApi) emblaApi.scrollTo(index)
    },
    [emblaApi],
  )

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    onSelect()
    emblaApi.on("select", onSelect)
    return () => {
      emblaApi.off("select", onSelect)
    }
  }, [emblaApi, onSelect])

  useEffect(() => {
    const el = carouselRef.current
    if (!el) return

    const handleEnter = () => {
      autoplayRef.current.stop()
    }
    const handleLeave = () => {
      autoplayRef.current.play()
    }

    el.addEventListener("mouseenter", handleEnter)
    el.addEventListener("mouseleave", handleLeave)

    return () => {
      el.removeEventListener("mouseenter", handleEnter)
      el.removeEventListener("mouseleave", handleLeave)
    }
  }, [])

  return (
    <section className="landing-section vision-preview-section">
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
          width: 100%;
        }
        .embla__container {
          display: flex;
        }
        .embla__slide {
          flex: 0 0 100%;
          min-width: 0;
          width: 100%;
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
          color: rgba(255,255,255,0.32);
          cursor: pointer;
          transition: all 0.2s ease;
          flex-shrink: 0;
        }
        .carousel-arrow:hover {
          color: #e8a04a;
        }
        @media (max-width: 768px) {
          .carousel-arrow {
            display: none;
          }
          .embla__slide {
            padding-left: 8px;
            padding-right: 8px;
          }
          .slide-text {
            margin-top: 16px;
            padding: 12px 8px;
          }
          .slide-text h3 {
            font-size: 1.125rem;
          }
          .slide-text p {
            font-size: 0.75rem;
          }
          .reputation-comparison {
            height: auto !important;
          }
          .reputation-cards {
            flex-direction: column !important;
            gap: 12px !important;
          }
          .reputation-card {
            min-width: unset !important;
            width: 100%;
          }
        }
        .slide-card {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .slide-visual {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          z-index: 1;
        }
        .slide-text {
          width: 100%;
          text-align: center;
          margin-top: 24px;
          position: relative;
          z-index: 10;
          background: rgba(10,10,10,0.85);
          padding: 16px 0;
          border-radius: 8px;
        }
      `}</style>

      <div className="container-custom">
        <p className="section-label text-center">The Future</p>
        <h2 className="landing-heading mb-4 text-center">
          What the Network Makes Possible
        </h2>
        <p className="landing-subheading text-center mx-auto mb-8 max-w-xl">
          Open data. Verified identity. No gatekeepers. These three properties
          unlock things that weren&apos;t possible before.
        </p>

        <article
          className="flex flex-col items-center gap-4"
          onMouseEnter={() => autoplayRef.current.stop()}
          onMouseLeave={() => autoplayRef.current.play()}
        >
          <div className="flex items-center gap-4 w-full">
            <button
              type="button"
              className="carousel-arrow flex-shrink-0 hidden md:flex"
              onClick={scrollPrev}
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-6 h-6 md:w-8 md:h-8" />
            </button>

            <div className="embla flex-1 w-full" ref={emblaRef}>
              <div className="embla__container">
                {cardsData.map((card) => (
                  <div key={card.id} className="embla__slide px-2 md:px-4">
                    <div className="slide-card">
                      <div className="slide-visual">{card.visual}</div>
                      <div className="slide-text">
                        <h3 className="font-semibold text-xl md:text-2xl mb-2">
                          {card.title}
                        </h3>
                        <p className="text-xs md:text-sm text-dark-muted leading-relaxed max-w-lg mx-auto px-2">
                          {card.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <button
              type="button"
              className="carousel-arrow flex-shrink-0 hidden md:flex"
              onClick={scrollNext}
              aria-label="Next slide"
            >
              <ChevronRight className="w-6 h-6 md:w-8 md:h-8" />
            </button>
          </div>

          <div className="flex flex-col items-center gap-2 mt-2">
            <p
              className="text-[10px] uppercase text-center mb-2"
              style={{
                color: "rgba(255,255,255,0.18)",
                letterSpacing: "0.06em",
              }}
            >
              {`${selectedIndex + 1} of ${cardsData.length} — swipe or use arrows`}
            </p>
            <div className="flex items-center gap-2">
              {cardsData.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => scrollTo(index)}
                  className={`rounded-full transition-all duration-300 ${
                    index === selectedIndex
                      ? "bg-primary w-4 h-2"
                      : "bg-white/20 w-2 h-2"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </article>

        <div className="text-center mt-12">
          <span className="text-sm text-dark-muted">
            Want the full picture?{" "}
            <a href="/vision" className="text-primary hover:underline">
              See what's possible →
            </a>
          </span>
        </div>
      </div>
    </section>
  )
}

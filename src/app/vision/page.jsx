"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { useEffect, useState } from "react"
import { SiteFooter } from "@/components/home/site-footer"
import { SiteNav } from "@/components/home/site-nav"

function VisionMeritGraph() {
  const [step, setStep] = useState(0)

  const nodes = [
    {
      id: "center",
      cx: 350,
      cy: 160,
      r: 34,
      label: "Original Insight",
      sublabel: "cited 3,200 times",
    },
    {
      id: "A",
      cx: 120,
      cy: 60,
      r: 16,
      label: "Researcher",
      sublabel: "847 posts",
    },
    {
      id: "B",
      cx: 420,
      cy: 38,
      r: 14,
      label: "Journalist",
      sublabel: "1.2k posts",
    },
    {
      id: "C",
      cx: 610,
      cy: 100,
      r: 18,
      label: "Professor",
      sublabel: "2,100 posts",
    },
    {
      id: "D",
      cx: 580,
      cy: 260,
      r: 13,
      label: "Engineer",
      sublabel: "634 posts",
    },
    {
      id: "E",
      cx: 180,
      cy: 280,
      r: 15,
      label: "Writer",
      sublabel: "980 posts",
    },
    {
      id: "F",
      cx: 60,
      cy: 200,
      r: 12,
      label: "Analyst",
      sublabel: "445 posts",
    },
    { id: "G", cx: 490, cy: 290, r: 8, silent: true },
    { id: "H", cx: 260, cy: 30, r: 8, silent: true },
  ]

  const citingNodes = ["A", "B", "C", "D", "E", "F"]
  const centerRadius = 34 + step * 2.33
  const centerOpacity = 0.1 + step * 0.025

  useEffect(() => {
    const timer = setInterval(() => {
      setStep((prev) => {
        if (prev >= 6) {
          setTimeout(() => setStep(0), 3000)
          return prev
        }
        return prev + 1
      })
    }, 600)

    return () => clearInterval(timer)
  }, [])

  const getArrowCoords = (fromNode) => {
    const dx = 350 - fromNode.cx
    const dy = 160 - fromNode.cy
    const dist = Math.sqrt(dx * dx + dy * dy)
    const ux = dx / dist
    const uy = dy / dist
    return {
      x1: fromNode.cx + ux * fromNode.r,
      y1: fromNode.cy + uy * fromNode.r,
      x2: 350 - ux * (centerRadius + 2),
      y2: 160 - uy * (centerRadius + 2),
    }
  }

  return (
    <svg
      viewBox="0 0 700 320"
      className="w-full max-w-[700px] mx-auto block mt-12"
      fill="none"
      stroke="currentColor"
      aria-hidden="true"
    >
      <motion.circle
        cx={350}
        cy={160}
        r={centerRadius + 14}
        fill="currentColor"
        fillOpacity={0.03 + step * 0.008}
        stroke="none"
        initial={false}
        animate={{ r: centerRadius + 14 }}
        transition={{ type: "spring", stiffness: 60 }}
      />

      {citingNodes.slice(0, step).map((nodeId) => {
        const fromNode = nodes.find((n) => n.id === nodeId)
        const coords = getArrowCoords(fromNode)
        return (
          <motion.g key={nodeId}>
            <motion.line
              x1={coords.x1}
              y1={coords.y1}
              x2={coords.x2}
              y2={coords.y2}
              stroke="currentColor"
              strokeWidth="1.2"
              strokeOpacity="0.4"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            />
            <motion.polygon
              points={`${coords.x2},${coords.y2} ${coords.x2 - 6},${coords.y2 - 3} ${coords.x2 - 6},${coords.y2 + 3}`}
              fill="currentColor"
              fillOpacity="0.4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.3 }}
              style={{
                transformOrigin: `${coords.x2}px ${coords.y2}px`,
                transform: `rotate(${Math.atan2(160 - fromNode.cy, 350 - fromNode.cx) * (180 / Math.PI)}deg)`,
              }}
            />
          </motion.g>
        )
      })}

      {nodes.map((node) => {
        const isCenter = node.id === "center"
        const isCiting = citingNodes.includes(node.id)
        const showLabel = step >= 6 && isCiting

        return (
          <g key={node.id}>
            <motion.circle
              cx={node.cx}
              cy={node.cy}
              r={isCenter ? centerRadius : node.r}
              fill="currentColor"
              fillOpacity={isCenter ? centerOpacity : node.silent ? 0.03 : 0.08}
              stroke="currentColor"
              strokeWidth={isCenter ? 1.5 : 1}
              strokeOpacity={node.silent ? 0.15 : isCenter ? 0.6 : 0.35}
              initial={false}
              animate={{ r: isCenter ? centerRadius : node.r }}
              transition={
                isCenter ? { type: "spring", stiffness: 80, damping: 12 } : {}
              }
            />
            {showLabel && (
              <motion.g
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4 }}
              >
                <text
                  x={node.cx}
                  y={node.cy - node.r - 8}
                  textAnchor="middle"
                  fill="currentColor"
                  fillOpacity="0.85"
                  fontSize="10"
                  fontWeight="700"
                  fontFamily="system-ui, sans-serif"
                >
                  {node.label}
                </text>
                <text
                  x={node.cx}
                  y={node.cy - node.r - 2}
                  textAnchor="middle"
                  fill="currentColor"
                  fillOpacity="0.5"
                  fontSize="8"
                  fontFamily="monospace"
                >
                  {node.sublabel}
                </text>
              </motion.g>
            )}
          </g>
        )
      })}

      {step >= 2 && (
        <motion.g
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
        >
          <text
            x={350}
            y={160}
            dy="-0.2em"
            textAnchor="middle"
            fill="currentColor"
            fillOpacity="0.9"
            fontSize="11"
            fontWeight="700"
            fontFamily="system-ui, sans-serif"
          >
            Original Insight
          </text>
          <text
            x={350}
            y={160}
            dy="1em"
            textAnchor="middle"
            fill="currentColor"
            fillOpacity="0.5"
            fontSize="9"
            fontFamily="monospace"
          >
            cited 3,200×
          </text>
        </motion.g>
      )}
    </svg>
  )
}

function LevelDivider({ text, prominent = false }) {
  return (
    <div className="flex items-center gap-4 max-w-[280px] mx-auto py-8">
      <div className="flex-1 h-px bg-white/[0.07]" />
      <span
        className={`text-xs font-semibold uppercase tracking-widest ${
          prominent ? "text-white/25" : "text-white/[0.18]"
        }`}
      >
        {text}
      </span>
      <div className="flex-1 h-px bg-white/[0.07]" />
    </div>
  )
}

export default function VisionPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteNav />

      <style jsx global>{`
        @keyframes vp-fade-up {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes vp-cursor-blink {
          0%, 100% { opacity: 1; } 50% { opacity: 0; }
        }
        @keyframes vp-scroll-hint {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(4px); }
        }
        @media (prefers-reduced-motion: reduce) {
          * { animation: none !important; transition: none !important; }
        }
      `}</style>

      <main className="flex-1">
        <section className="relative min-h-[80vh] flex flex-col items-center justify-center text-center overflow-hidden">
          <svg
            viewBox="0 0 1200 600"
            className="absolute inset-0 w-full h-full pointer-events-none opacity-[0.06]"
            aria-hidden="true"
          >
            {[
              [80, 120],
              [200, 60],
              [380, 140],
              [520, 80],
              [700, 110],
              [850, 55],
              [980, 130],
              [1100, 90],
              [1150, 200],
              [950, 280],
              [1080, 350],
              [800, 400],
              [650, 320],
              [480, 380],
              [300, 300],
              [150, 350],
              [60, 280],
              [250, 480],
              [500, 520],
              [720, 490],
              [900, 510],
              [1050, 460],
            ].map(([cx, cy], i) => (
              <circle
                key={i}
                cx={cx}
                cy={cy}
                r="2.5"
                fill="currentColor"
                fillOpacity="0.08"
              />
            ))}
            {[
              [80, 120, 200, 60],
              [200, 60, 380, 140],
              [380, 140, 520, 80],
              [520, 80, 700, 110],
              [700, 110, 850, 55],
              [850, 55, 980, 130],
              [980, 130, 1100, 90],
              [1100, 90, 1150, 200],
              [1150, 200, 950, 280],
              [950, 280, 1080, 350],
              [1080, 350, 800, 400],
              [800, 400, 650, 320],
              [650, 320, 480, 380],
              [480, 380, 300, 300],
              [300, 300, 150, 350],
              [150, 350, 60, 280],
              [60, 280, 80, 120],
              [700, 110, 650, 320],
              [980, 130, 800, 400],
            ].map(([x1, y1, x2, y2], i) => (
              <line
                key={i}
                x1={x1}
                y1={y1}
                x2={x2}
                y2={y2}
                stroke="currentColor"
                strokeOpacity="0.04"
                strokeWidth="1"
              />
            ))}
          </svg>

          <div className="relative z-10 container-custom">
            <p
              className="section-label mb-5"
              style={{ animation: "vp-fade-up 0.6s ease both" }}
            >
              THE VISION
            </p>
            <h1
              className="landing-heading text-4xl md:text-6xl font-extrabold leading-tight mb-7"
              style={{ animation: "vp-fade-up 0.6s ease both" }}
            >
              The Internet Has a Second Chance.
            </h1>
            <div className="max-w-2xl mx-auto">
              <p
                className="text-lg md:text-xl text-white/65 mb-2"
                style={{ animation: "vp-fade-up 0.6s ease both 0.15s" }}
              >
                The first web was built on open protocols and equal peers.
              </p>
              <p
                className="text-lg md:text-xl text-white/45 mb-2"
                style={{ animation: "vp-fade-up 0.6s ease both 0.25s" }}
              >
                Then convenience won, and a handful of companies took control.
              </p>
              <p
                className="text-lg md:text-xl text-primary font-semibold"
                style={{ animation: "vp-fade-up 0.6s ease both 0.35s" }}
              >
                epress is a bet that the original vision was right.
              </p>
            </div>

            <div
              className="mt-12 text-white/25"
              style={{ animation: "vp-scroll-hint 2s ease-in-out infinite" }}
            >
              <svg viewBox="0 0 24 24" width="20" className="mx-auto">
                <path
                  d="M6 9l6 6 6-6"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  fill="none"
                  strokeLinecap="round"
                />
              </svg>
            </div>
          </div>
        </section>

        <LevelDivider text="FOR YOU" />

        <section className="py-16 md:py-24 bg-dark-surface/40">
          <div className="container-custom">
            <div className="text-center mb-12">
              <p className="section-label">FOR YOU</p>
              <h2 className="landing-heading mb-4">
                Your Digital Life, Finally Owned
              </h2>
              <p className="landing-subheading mx-auto">
                Four things that have never been simultaneously true — until
                now.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-4xl mx-auto">
              {[
                {
                  year: "2041",
                  icon: "🔑",
                  title: "A Reputation Decades in the Making",
                  scene:
                    "You've been publishing on the same node for 18 years. Every post signed. Every citation traceable. Your reputation isn't stored in anyone's database — it's mathematically proven.",
                },
                {
                  year: "2028",
                  icon: "✍️",
                  title: "Your Writing, Your Terms",
                  scene:
                    "You wrote something that still gets cited today. You set a reading fee. Every citation earns — directly, with no platform in the middle taking a cut.",
                },
                {
                  year: "2027",
                  icon: "🔗",
                  title: "Your Followers Follow You",
                  scene:
                    "You decide a platform isn't for you anymore. You leave. Your 40,000 followers come with you. They were always following you — not the platform.",
                },
                {
                  year: "2064",
                  icon: "🏛️",
                  title: "A Digital Estate Worth Inheriting",
                  scene:
                    "Your grandmother kept a node from 2026. Her recipes, her letters, her decades of thought — still there. Still hers. Now yours to read.",
                },
              ].map((card, i) => (
                <motion.div
                  key={i}
                  className="landing-card relative overflow-hidden group"
                  whileHover={{
                    y: -3,
                    boxShadow: "0 8px 32px rgba(0,0,0,0.3)",
                  }}
                  transition={{ duration: 0.25 }}
                >
                  <div className="absolute -bottom-2 right-2 text-[72px] font-black leading-none text-white/[0.035] pointer-events-none select-none font-mono z-0">
                    {card.year}
                  </div>
                  <div className="relative z-10">
                    <div className="text-2xl mb-2">{card.icon}</div>
                    <h3 className="font-semibold text-lg mb-2">{card.title}</h3>
                    <p className="text-sm text-dark-muted leading-relaxed">
                      {card.scene}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="container-custom">
            <div className="text-center mb-12">
              <p className="section-label">FOR CREATORS</p>
              <h2 className="landing-heading mb-4">
                The Economics of Creation, Rewritten
              </h2>
            </div>

            <div className="max-w-[680px] mx-auto">
              <div className="grid grid-cols-2 gap-0.5 mb-0.5">
                <div className="px-5 pb-2">
                  <span className="text-[10px] font-bold tracking-widest uppercase text-red-400/50">
                    Today
                  </span>
                </div>
                <div className="px-5 pb-2">
                  <span className="text-[10px] font-bold tracking-widest uppercase text-green-400/55">
                    With epress
                  </span>
                </div>
              </div>

              {[
                {
                  left: "You write. Platform monetizes. You get nothing.",
                  right: "You write. You set the terms. You receive.",
                },
                {
                  left: "Your behavior data is sold to advertisers. You get 'free' access.",
                  right:
                    "Apps that want your data ask your node. You decide the terms.",
                },
                {
                  left: "One algorithm, chosen by the platform, optimized for your attention.",
                  right:
                    "Any algorithm you choose, built by anyone, working for you.",
                },
              ].map((row, i) => (
                <motion.div
                  key={i}
                  className="grid grid-cols-2 gap-0.5 mb-0.5"
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{
                    duration: 0.45,
                    ease: "easeOut",
                    delay: i * 0.1,
                  }}
                >
                  <div
                    className={`p-4 md:p-5 bg-red-500/[0.06] border border-red-500/10 ${
                      i === 0 ? "rounded-tl-xl" : i === 2 ? "rounded-bl-xl" : ""
                    }`}
                  >
                    <p className="text-[13px] leading-relaxed text-white/50">
                      {row.left}
                    </p>
                  </div>
                  <div
                    className={`p-4 md:p-5 bg-green-500/[0.06] border border-green-500/10 ${
                      i === 0 ? "rounded-tr-xl" : i === 2 ? "rounded-br-xl" : ""
                    }`}
                  >
                    <p className="text-[13px] leading-relaxed text-white/80">
                      {row.right}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <LevelDivider text="FOR THE WORLD" />

        <section className="py-16 md:py-24 bg-dark-surface/40">
          <div className="container-custom">
            <div className="text-center mb-10">
              <p className="section-label">FOR THE WORLD</p>
              <h2 className="landing-heading mb-4">When Truth Has a Proof</h2>
              <p className="landing-subheading mx-auto">
                Not content moderation. Something more fundamental: a
                cryptographic proof of origin for every public statement.
              </p>
            </div>

            <svg
              viewBox="0 0 560 130"
              className="w-full max-w-[560px] mx-auto block mt-10 mb-4"
              fill="none"
              stroke="currentColor"
            >
              <rect
                x="20"
                y="32"
                width="520"
                height="36"
                rx="8"
                fill="currentColor"
                fillOpacity="0.06"
                stroke="currentColor"
                strokeOpacity="0.2"
                strokeWidth="1"
              />
              <text
                x="38"
                y="55"
                fontSize="12"
                fontWeight="700"
                fill="currentColor"
                fillOpacity="0.6"
                stroke="none"
                fontFamily="monospace"
              >
                HTTPS
              </text>
              <line
                x1="100"
                y1="50"
                x2="140"
                y2="50"
                stroke="currentColor"
                strokeOpacity="0.3"
                strokeWidth="1.2"
              />
              <polygon
                points="140,50 136,47 136,53"
                fill="currentColor"
                fillOpacity="0.3"
                stroke="none"
              />
              <text
                x="152"
                y="55"
                fontSize="11"
                fill="currentColor"
                fillOpacity="0.45"
                stroke="none"
                fontFamily="system-ui, sans-serif"
              >
                guarantees: you're talking to the right server, nothing
                intercepted
              </text>

              <rect
                x="16"
                y="78"
                width="528"
                height="44"
                rx="10"
                fill="currentColor"
                fillOpacity="0.04"
                stroke="none"
              />
              <rect
                x="20"
                y="82"
                width="520"
                height="36"
                rx="8"
                fill="currentColor"
                fillOpacity="0.09"
                stroke="currentColor"
                strokeOpacity="0.35"
                strokeWidth="1.2"
              />
              <text
                x="38"
                y="105"
                fontSize="12"
                fontWeight="700"
                fill="currentColor"
                fillOpacity="0.8"
                stroke="none"
                fontFamily="monospace"
              >
                PoS
              </text>
              <line
                x1="100"
                y1="100"
                x2="140"
                y2="100"
                stroke="currentColor"
                strokeOpacity="0.3"
                strokeWidth="1.2"
              />
              <polygon
                points="140,100 136,97 136,103"
                fill="currentColor"
                fillOpacity="0.3"
                stroke="none"
              />
              <text
                x="152"
                y="105"
                fontSize="11"
                fill="currentColor"
                fillOpacity="0.7"
                stroke="none"
                fontFamily="system-ui, sans-serif"
              >
                guarantees: this content came from this identity, unchanged, at
                this time
              </text>
            </svg>

            <p className="text-[13px] text-white/35 italic text-center">
              Not a replacement for judgment. A foundation for trust.
            </p>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="container-custom">
            <div className="text-center mb-10">
              <p className="section-label">FOR THE WORLD</p>
              <h2 className="landing-heading mb-4">
                A Search Engine for Ideas
              </h2>
              <p className="landing-subheading mx-auto">
                When every citation is a cryptographically signed, traceable
                link, something new becomes possible: idea value determined by
                merit, not by algorithm.
              </p>
            </div>

            <VisionMeritGraph />
          </div>
        </section>

        <section className="py-16 md:py-24 bg-dark-surface/40">
          <div className="container-custom">
            <div className="text-center mb-12">
              <p className="section-label">FOR THE WORLD</p>
              <h2 className="landing-heading mb-4">The AI Agent Layer</h2>
              <p className="landing-subheading mx-auto">
                AI agents need open networks to work. Closed platforms are
                building walls. epress nodes are open by design.
              </p>
            </div>

            <div className="max-w-[600px] mx-auto relative">
              <div
                className="absolute left-[23px] top-7 bottom-7 w-px"
                style={{
                  background:
                    "linear-gradient(to bottom, rgba(255,255,255,0.0) 0%, rgba(255,255,255,0.12) 20%, rgba(255,255,255,0.12) 80%, rgba(255,255,255,0.0) 100%)",
                }}
              />

              {[
                {
                  time: "7AM",
                  label: "MORNING BRIEFING",
                  action:
                    "Your AI agent scans every node you follow, filters for what actually matters, and surfaces three things worth your attention.",
                  detail: "open RSS · no rate limits · no permission needed",
                },
                {
                  time: "2PM",
                  label: "PUBLISHING",
                  action:
                    "You tell your agent to publish the draft you approved this morning. It signs with your key, broadcasts to your followers, done.",
                  detail: "open API · signed by your identity · your node",
                },
                {
                  time: "9PM",
                  label: "ENGAGEMENT",
                  action:
                    "Five nodes cited your post today. Your agent drafted replies in your voice. You approve two, edit one, skip two. Sent.",
                  detail: "EWP protocol · peer-to-peer · no intermediary",
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  className="flex items-start gap-5 mb-8 last:mb-0"
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-30px" }}
                  transition={{
                    duration: 0.5,
                    ease: "easeOut",
                    delay: i * 0.15,
                  }}
                >
                  <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[11px] font-bold font-mono text-white/40 flex-shrink-0 relative z-10">
                    {item.time}
                  </div>
                  <div className="flex-1 pt-1">
                    <p className="text-[9px] uppercase tracking-widest text-white/30 mb-1">
                      {item.label}
                    </p>
                    <p className="text-sm leading-relaxed text-white/80">
                      {item.action}
                    </p>
                    <p className="text-xs text-white/35 mt-1 font-mono">
                      {item.detail}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <LevelDivider text="FOR CIVILIZATION" prominent />

        <section className="py-16 md:py-24">
          <div className="container-custom">
            <div className="max-w-[640px] mx-auto text-center">
              <p className="section-label">FOR CIVILIZATION</p>

              <motion.blockquote
                className="text-2xl md:text-3xl font-light italic leading-snug text-white/70 mb-10"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: "easeOut" }}
              >
                "For the first time in history, an idea has an origin."
              </motion.blockquote>

              <h2 className="text-xl font-semibold mb-8">
                The First Time Ideas Have a Provenance
              </h2>

              <div className="space-y-5 mb-6">
                {[
                  "A rumor can be traced to its exact origin — not approximately, but cryptographically.",
                  "A scientific discovery can be timestamped, signed, and permanently attributed without relying on any journal.",
                  "A cultural movement can be mapped as it happens, not reconstructed years later from incomplete records.",
                ].map((statement, i) => (
                  <motion.div
                    key={i}
                    className="flex items-baseline gap-3 justify-center"
                    initial={{ opacity: 0, y: 8 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.12 }}
                  >
                    <span className="text-white/20 flex-shrink-0">—</span>
                    <span className="text-[15px] leading-relaxed text-white/65 text-left">
                      {statement}
                    </span>
                  </motion.div>
                ))}
              </div>

              <div className="space-y-1 mt-6">
                <p className="text-[13px] text-white/30 italic">
                  Not because someone decided to record it.
                </p>
                <p className="text-[13px] text-white/45 italic">
                  Because the network's architecture makes it inevitable.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-dark-surface/40">
          <div className="container-custom">
            <div className="text-center mb-10">
              <p className="section-label">FOR CIVILIZATION</p>
              <h2 className="landing-heading mb-4">
                Not a Platform. Infrastructure.
              </h2>
              <p className="landing-subheading mx-auto">
                HTTP didn't care what websites you built on it. EWP doesn't care
                what you build on it either. Here's what becomes possible when
                the data layer is open:
              </p>
            </div>

            <motion.div
              className="max-w-[560px] mx-auto mt-10"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                visible: { transition: { staggerChildren: 0.07 } },
              }}
            >
              {[
                "A reputation system for scientific peer review — where citations are cryptographic, not political",
                "A decentralized fact-checking network where every claim has a traceable author",
                "A content licensing marketplace where creators set terms and receive payment directly",
                "An AI training dataset composed entirely of verified human-authored content",
                "A cross-platform social graph that travels with you across every application you'll ever use",
                "A journalistic record that no government or corporation can quietly edit or erase",
              ].map((item, i) => (
                <motion.div
                  key={i}
                  className="flex items-center gap-3.5 px-4 py-3 mb-1.5 rounded-lg bg-white/[0.03] border border-white/[0.06]"
                  variants={{
                    hidden: { opacity: 0, x: -12 },
                    visible: {
                      opacity: 1,
                      x: 0,
                      transition: { duration: 0.4, ease: "easeOut" },
                    },
                  }}
                >
                  <div className="w-4 h-4 rounded-[3px] bg-white/[0.08] border border-white/[0.12] flex-shrink-0" />
                  <p className="text-[13px] text-white/70 leading-snug">
                    {item}
                  </p>
                </motion.div>
              ))}

              {/* Wildcard item */}
              <motion.div
                className="flex items-center gap-3.5 px-4 py-3 rounded-lg bg-transparent border border-dashed border-white/[0.12]"
                variants={{
                  hidden: { opacity: 0, x: -12 },
                  visible: {
                    opacity: 1,
                    x: 0,
                    transition: { duration: 0.4, ease: "easeOut" },
                  },
                }}
              >
                <div className="w-4 h-4 rounded-[3px] bg-white/[0.04] border border-white/[0.08] flex-shrink-0" />
                <p className="text-[13px] text-white/40 italic leading-snug">
                  Something no one has thought of yet.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="container-custom">
            <div className="max-w-[560px] mx-auto text-center">
              <motion.h2
                className="text-3xl md:text-4xl font-extrabold leading-tight mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                Every node makes the network more real.
              </motion.h2>

              <motion.div
                className="mb-10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.1 }}
              >
                <p className="text-[15px] text-white/45 mb-1">
                  The internet described on this page doesn't exist yet.
                </p>
                <p className="text-[15px] text-white/65">
                  It gets built one node at a time.
                </p>
              </motion.div>

              <motion.div
                className="flex flex-col items-center gap-3"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.2 }}
              >
                <Link
                  href="/docs/getting-started"
                  className="btn-primary text-base px-8 py-3"
                >
                  Deploy Your Node →
                </Link>
                <Link href="#" className="btn-secondary text-sm px-6 py-2.5">
                  Request a Trial Node
                </Link>
              </motion.div>

              <motion.div
                className="flex flex-wrap justify-center gap-6 mt-7 text-sm text-white/30"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.3 }}
              >
                <Link
                  href="/whitepaper"
                  className="hover:text-primary transition-colors duration-200"
                >
                  Read the Whitepaper
                </Link>
                <span className="text-white/20">·</span>
                <Link
                  href="/how-it-works"
                  className="hover:text-primary transition-colors duration-200"
                >
                  How It Works
                </Link>
                <span className="text-white/20">·</span>
                <a
                  href="https://t.me/+mZMgNSIVy1MwMmVl"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors duration-200"
                >
                  Join the Community
                </a>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}

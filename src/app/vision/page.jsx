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
      cx: 560,
      cy: 320,
      r: 80,
      label: "High-Value Idea",
      sublabel: "cited 3,200 times",
    },
    {
      id: "A",
      cx: 160,
      cy: 160,
      r: 36,
      label: "Researcher",
      sublabel: "847 posts",
      rep: 92,
    },
    {
      id: "B",
      cx: 680,
      cy: 100,
      r: 32,
      label: "Journalist",
      sublabel: "1.2k posts",
      rep: 78,
    },
    {
      id: "C",
      cx: 1000,
      cy: 200,
      r: 40,
      label: "Professor",
      sublabel: "2,100 posts",
      rep: 95,
    },
    {
      id: "D",
      cx: 960,
      cy: 480,
      r: 30,
      label: "Engineer",
      sublabel: "634 posts",
      rep: 64,
    },
    {
      id: "E",
      cx: 280,
      cy: 520,
      r: 34,
      label: "Writer",
      sublabel: "980 posts",
      rep: 71,
    },
    {
      id: "F",
      cx: 80,
      cy: 400,
      r: 28,
      label: "Analyst",
      sublabel: "445 posts",
      rep: 58,
    },
  ]

  const citingNodes = ["A", "B", "C", "D", "E", "F"]
  const centerRadius = 80 + step * 4
  const centerOpacity = 0.12 + step * 0.02
  const springConfig = { type: "spring", stiffness: 100, damping: 20 }

  const calculateValue = () => {
    const baseValue = 100
    const citationBoost = step * 45
    const reputationFactor = step * 12
    return baseValue + citationBoost + reputationFactor
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setStep((prev) => {
        if (prev >= 6) {
          setTimeout(() => setStep(0), 4000)
          return prev
        }
        return prev + 1
      })
    }, 800)

    return () => clearInterval(timer)
  }, [])

  const getArrowCoords = (fromNode) => {
    const dx = 560 - fromNode.cx
    const dy = 320 - fromNode.cy
    const dist = Math.sqrt(dx * dx + dy * dy)
    const ux = dx / dist
    const uy = dy / dist
    return {
      x1: fromNode.cx + ux * fromNode.r,
      y1: fromNode.cy + uy * fromNode.r,
      x2: 560 - ux * centerRadius,
      y2: 320 - uy * centerRadius,
      angle: Math.atan2(dy, dx) * (180 / Math.PI),
    }
  }

  return (
    <div className="relative w-full max-w-[800px] mx-auto mt-12">
      <svg
        viewBox="0 0 1120 680"
        className="w-full block"
        fill="none"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="centerGlow" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#e8a04a" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#e8a04a" stopOpacity="0.05" />
          </linearGradient>
          <linearGradient id="nodeGradA" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#34D399" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#34D399" stopOpacity="0.05" />
          </linearGradient>
        </defs>

        <motion.circle
          cx={560}
          cy={320}
          animate={{ r: centerRadius + 40, opacity: 0.3 + step * 0.05 }}
          transition={springConfig}
          fill="url(#centerGlow)"
          stroke="none"
        />

        {citingNodes.slice(0, step).map((nodeId, idx) => {
          const fromNode = nodes.find((n) => n.id === nodeId)
          const coords = getArrowCoords(fromNode)

          return (
            <g key={nodeId}>
              <motion.line
                x1={coords.x1}
                y1={coords.y1}
                animate={{ x2: coords.x2, y2: coords.y2 }}
                transition={springConfig}
                stroke="#e8a04a"
                strokeWidth="1.5"
                strokeOpacity="0.5"
              />
              <motion.circle
                cx={coords.x1}
                cy={coords.y1}
                r="6"
                fill="#e8a04a"
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 1, 0] }}
                transition={{
                  duration: 1.2,
                  delay: idx * 0.1,
                  repeat: Infinity,
                  repeatDelay: 2,
                }}
              />
              <motion.g
                initial={{ x: coords.x2, y: coords.y2 }}
                animate={{ x: coords.x2, y: coords.y2 }}
                transition={springConfig}
              >
                <polygon
                  points="-12,-7 0,0 -12,7"
                  fill="#e8a04a"
                  fillOpacity="0.8"
                  transform={`rotate(${coords.angle})`}
                />
              </motion.g>
            </g>
          )
        })}

        {nodes.map((node) => {
          const isCenter = node.id === "center"
          const isCiting = citingNodes.includes(node.id)
          const showLabel = step >= 2 && isCiting

          return (
            <g key={node.id}>
              <motion.circle
                cx={node.cx}
                cy={node.cy}
                animate={{ r: isCenter ? centerRadius : node.r }}
                transition={springConfig}
                fill={isCenter ? "#e8a04a" : "url(#nodeGradA)"}
                fillOpacity={isCenter ? centerOpacity : 0.8}
                stroke={isCenter ? "#e8a04a" : "#34D399"}
                strokeWidth={1}
                strokeOpacity={isCenter ? 1 : 0.4}
              />
              {showLabel && (
                <motion.g
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.4 }}
                >
                  <text
                    x={node.cx}
                    y={node.cy - node.r - 16}
                    textAnchor="middle"
                    fill="#34D399"
                    fillOpacity="0.9"
                    fontSize="16"
                    fontWeight="600"
                    fontFamily="system-ui, sans-serif"
                  >
                    {node.label}
                  </text>
                  <text
                    x={node.cx}
                    y={node.cy - node.r + 2}
                    textAnchor="middle"
                    fill="#34D399"
                    fillOpacity="0.5"
                    fontSize="12"
                    fontFamily="monospace"
                  >
                    {node.sublabel}
                  </text>
                </motion.g>
              )}
            </g>
          )
        })}

        {step >= 1 && (
          <motion.g
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
          >
            <text
              x={560}
              y={310}
              textAnchor="middle"
              fill="#e8a04a"
              fillOpacity="0.95"
              fontSize="18"
              fontWeight="600"
              fontFamily="system-ui, sans-serif"
            >
              High-Value Idea
            </text>
            <text
              x={560}
              y={336}
              textAnchor="middle"
              fill="#e8a04a"
              fillOpacity="0.6"
              fontSize="14"
              fontFamily="monospace"
            >
              cited {step * 534 + 1200}×
            </text>
          </motion.g>
        )}
      </svg>

      <motion.div
        className="absolute top-4 right-4 bg-dark-surface/90 backdrop-blur-sm rounded-xl border border-white/10 p-5 w-56"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
        <p className="text-xs uppercase tracking-wider text-white/40 mb-3 font-mono">
          IdeaRank Calculation
        </p>
        <div className="space-y-3">
          <div className="flex justify-between text-sm">
            <span className="text-white/50">Base Value</span>
            <span className="text-white/80 font-mono">100</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-white/50">Citations</span>
            <motion.span
              className="text-primary font-mono"
              key={step}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              +{step * 45}
            </motion.span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-white/50">Reputation</span>
            <motion.span
              className="text-primary font-mono"
              key={`rep-${step}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              +{step * 12}
            </motion.span>
          </div>
          <div className="h-px bg-white/10 my-2" />
          <div className="flex justify-between text-base font-semibold">
            <span className="text-white">Value</span>
            <motion.span
              className="text-primary font-mono"
              key={`total-${step}`}
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              {calculateValue()}
            </motion.span>
          </div>
        </div>
      </motion.div>
    </div>
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
                  icon: "🔑",
                  title: "Your Ethereum Wallet is Your Passport",
                  scene:
                    "No usernames. No passwords. No central registries. Your cryptographic identity works everywhere, controlled by you alone.",
                },
                {
                  icon: "✍️",
                  title: "Every Post, an Immutable Asset",
                  scene:
                    "Cryptographically bound to your identity, un-deletable by any third party. Your content is yours forever, with a permanent chain of attribution.",
                },
                {
                  icon: "🔗",
                  title: "A Persistent Social Graph",
                  scene:
                    "When you move, your audience moves with you. The connection is permanent. No platform can sever the bonds between you and your followers.",
                },
                {
                  icon: "🏛️",
                  title: "A Digital Estate Worth Preserving",
                  scene:
                    "Decades of thought, writing, and connection — cryptographically preserved. Pass it down. Archive it. It remains accessible as long as the internet exists.",
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
              viewBox="0 0 1360 320"
              className="w-full max-w-[680px] mx-auto block mt-10 mb-4"
              fill="none"
            >
              <defs>
                <linearGradient
                  id="httpsGrad"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="#ffffff" stopOpacity="0.08" />
                  <stop offset="100%" stopColor="#ffffff" stopOpacity="0.02" />
                </linearGradient>
                <linearGradient
                  id="posGrad"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="#e8a04a" stopOpacity="0.15" />
                  <stop offset="100%" stopColor="#e8a04a" stopOpacity="0.05" />
                </linearGradient>
              </defs>

              <rect
                x="48"
                y="60"
                width="1264"
                height="80"
                rx="16"
                fill="url(#httpsGrad)"
                stroke="#ffffff"
                strokeOpacity="0.15"
                strokeWidth="1"
              />
              <text
                x="92"
                y="110"
                fontSize="28"
                fontWeight="600"
                fill="#ffffff"
                fillOpacity="0.6"
                fontFamily="monospace"
              >
                HTTPS
              </text>
              <line
                x1="242"
                y1="100"
                x2="340"
                y2="100"
                stroke="#ffffff"
                strokeOpacity="0.25"
                strokeWidth="1"
              />
              <polygon
                points="340,100 330,94 330,106"
                fill="#ffffff"
                fillOpacity="0.25"
              />
              <text
                x="370"
                y="108"
                fontSize="24"
                fill="#ffffff"
                fillOpacity="0.45"
                fontFamily="system-ui, sans-serif"
              >
                guarantees: you're talking to the right server, nothing
                intercepted
              </text>

              <rect
                x="38"
                y="180"
                width="1284"
                height="88"
                rx="20"
                fill="url(#posGrad)"
                stroke="#e8a04a"
                strokeOpacity="0.4"
                strokeWidth="1"
              />
              <text
                x="92"
                y="240"
                fontSize="28"
                fontWeight="600"
                fill="#e8a04a"
                fontFamily="monospace"
              >
                PoS
              </text>
              <line
                x1="242"
                y1="228"
                x2="340"
                y2="228"
                stroke="#e8a04a"
                strokeOpacity="0.4"
                strokeWidth="1"
              />
              <polygon
                points="340,228 330,222 330,234"
                fill="#e8a04a"
                fillOpacity="0.6"
              />
              <text
                x="370"
                y="236"
                fontSize="24"
                fill="#ffffff"
                fillOpacity="0.7"
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
                Every Node Makes the Network More Real.
              </motion.h2>

              <motion.p
                className="landing-subheading mx-auto mb-10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.1 }}
              >
                The internet described on this page doesn't exist yet. It gets
                built one node at a time — starting with yours.
              </motion.p>

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
                <Link
                  href="/ecosystem"
                  className="hover:text-primary transition-colors duration-200"
                >
                  Explore Ecosystem
                </Link>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}

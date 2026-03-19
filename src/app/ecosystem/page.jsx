"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { SiteFooter } from "@/components/home/site-footer"
import { SiteNav } from "@/components/home/site-nav"

function EcoDivider({ number, label }) {
  return (
    <div className="flex items-center gap-4 max-w-md mx-auto py-8">
      <div className="flex-1 h-px bg-white/[0.07]" />
      <div className="flex items-center gap-2.5 px-4 py-2 rounded-full border border-white/[0.08] bg-white/[0.02]">
        <span className="text-xs font-bold text-primary/70">{number}</span>
        <span className="text-[10px] font-medium uppercase tracking-widest text-white/30">
          {label}
        </span>
      </div>
      <div className="flex-1 h-px bg-white/[0.07]" />
    </div>
  )
}

function HeroSvg() {
  const nodes = [
    { cx: 600, cy: 180, label: "Creator" },
    { cx: 840, cy: 320, label: "Developer" },
    { cx: 760, cy: 540, label: "Host" },
    { cx: 440, cy: 540, label: "Service" },
    { cx: 360, cy: 320, label: "User" },
  ]

  const connections = [
    { from: 0, to: 1 },
    { from: 1, to: 2 },
    { from: 2, to: 3 },
    { from: 3, to: 4 },
    { from: 4, to: 0 },
  ]

  const getArrowPath = (from, to) => {
    const f = nodes[from]
    const t = nodes[to]
    const dx = t.cx - f.cx
    const dy = t.cy - f.cy
    const dist = Math.sqrt(dx * dx + dy * dy)
    const ux = dx / dist
    const uy = dy / dist
    const startX = f.cx + ux * 20
    const startY = f.cy + uy * 20
    const endX = t.cx - ux * 20
    const endY = t.cy - uy * 20
    return { startX, startY, endX, endY, ux, uy }
  }

  return (
    <svg
      viewBox="0 0 1200 700"
      preserveAspectRatio="xMidYMid slice"
      className="absolute inset-0 w-full h-full pointer-events-none"
      aria-hidden="true"
    >
      <defs>
        <linearGradient
          id="eco-flow-gradient"
          x1="0%"
          y1="0%"
          x2="100%"
          y2="0%"
        >
          <stop offset="0%" stopColor="#e8a04a" stopOpacity="0" />
          <stop offset="50%" stopColor="#e8a04a" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#e8a04a" stopOpacity="0" />
        </linearGradient>
        <marker
          id="eco-arrow"
          markerWidth="6"
          markerHeight="6"
          refX="5"
          refY="3"
          orient="auto"
        >
          <polygon points="0,0 6,3 0,6" fill="#e8a04a" fillOpacity="0.4" />
        </marker>
      </defs>

      {connections.map((conn, i) => {
        const { startX, startY, endX, endY } = getArrowPath(conn.from, conn.to)
        return (
          <g key={i}>
            <line
              x1={startX}
              y1={startY}
              x2={endX}
              y2={endY}
              stroke="#e8a04a"
              strokeOpacity="0.15"
              strokeWidth="1"
              markerEnd="url(#eco-arrow)"
            />
          </g>
        )
      })}

      <g className="eco-flow-dot">
        <animateMotion
          dur="8s"
          repeatCount="indefinite"
          path="M 600,180 L 840,320 L 760,540 L 440,540 L 360,320 Z"
        />
        <circle r="4" fill="#e8a04a" fillOpacity="0.7">
          <animate
            attributeName="r"
            values="3;5;3"
            dur="2s"
            repeatCount="indefinite"
          />
        </circle>
        <circle r="8" fill="#e8a04a" fillOpacity="0.2">
          <animate
            attributeName="r"
            values="6;10;6"
            dur="2s"
            repeatCount="indefinite"
          />
        </circle>
      </g>

      {nodes.map((node, i) => (
        <g key={i}>
          <circle
            cx={node.cx}
            cy={node.cy}
            r="16"
            fill="#0f0f0f"
            stroke="#e8a04a"
            strokeOpacity="0.25"
            strokeWidth="1"
          />
          <circle
            cx={node.cx}
            cy={node.cy}
            r="6"
            fill="#e8a04a"
            fillOpacity="0.35"
          />
        </g>
      ))}
    </svg>
  )
}

function TimelineSvg() {
  const phases = [
    { x: 80, label: "Compile", sublabel: "from source" },
    { x: 200, label: "Docker", sublabel: "container" },
    { x: 320, label: "One-click", sublabel: "deploy" },
    { x: 440, label: "Managed", sublabel: "hosting" },
    { x: 560, label: "Plug-and-play", sublabel: "appliance" },
  ]

  return (
    <svg
      viewBox="0 0 640 140"
      className="w-full max-w-[640px] mx-auto block"
      aria-hidden="true"
    >
      <line
        x1="40"
        y1="70"
        x2="600"
        y2="70"
        stroke="currentColor"
        strokeOpacity="0.1"
        strokeWidth="2"
      />
      {phases.map((phase, i) => (
        <g key={i}>
          <circle
            cx={phase.x}
            cy="70"
            r={i === 2 ? 10 : 6}
            fill="currentColor"
            fillOpacity={i === 2 ? 0.25 : 0.1}
          />
          <circle
            cx={phase.x}
            cy="70"
            r={i === 2 ? 5 : 3}
            fill="currentColor"
            fillOpacity={i === 2 ? 0.9 : 0.4}
          />
          <text
            x={phase.x}
            y="40"
            fontSize="11"
            fontWeight="600"
            textAnchor="middle"
            fill="currentColor"
            fillOpacity={i === 2 ? 0.85 : 0.5}
            fontFamily="system-ui, sans-serif"
          >
            {phase.label}
          </text>
          <text
            x={phase.x}
            y="54"
            fontSize="8"
            textAnchor="middle"
            fill="currentColor"
            fillOpacity={i === 2 ? 0.5 : 0.3}
            fontFamily="system-ui, sans-serif"
          >
            {phase.sublabel}
          </text>
          <text
            x={phase.x}
            y="100"
            fontSize="8"
            textAnchor="middle"
            fill="currentColor"
            fillOpacity={i === 2 ? 0.6 : 0.25}
            fontFamily="monospace"
          >
            {i + 1}
          </text>
        </g>
      ))}
      <g transform="translate(320, 120)">
        <rect
          x="-45"
          y="-10"
          width="90"
          height="20"
          rx="4"
          fill="currentColor"
          fillOpacity="0.08"
        />
        <text
          x="0"
          y="4"
          fontSize="8"
          fontWeight="700"
          textAnchor="middle"
          fill="currentColor"
          fillOpacity="0.7"
          fontFamily="system-ui, sans-serif"
        >
          YOU ARE HERE
        </text>
      </g>
    </svg>
  )
}

function RadialDiagramSvg() {
  const satellites = [
    { angle: -90, label: "Theme\nDesigners" },
    { angle: -30, label: "Node\nInstallers" },
    { angle: 30, label: "Managed\nHosting" },
    { angle: 90, label: "Security" },
    { angle: 150, label: "Analytics" },
    { angle: 210, label: "Plugin\nDevelopers" },
  ]

  const toRad = (deg) => (deg * Math.PI) / 180
  const centerR = 36
  const satR = 22
  const distance = 100

  return (
    <svg
      viewBox="0 0 340 280"
      className="w-full max-w-[340px] mx-auto block"
      aria-hidden="true"
    >
      {satellites.map((sat, i) => {
        const rad = toRad(sat.angle)
        const cx = 170 + Math.cos(rad) * distance
        const cy = 140 + Math.sin(rad) * distance
        return (
          <g key={i}>
            <line
              x1={170 + Math.cos(rad) * centerR}
              y1={140 + Math.sin(rad) * centerR}
              x2={cx - Math.cos(rad) * satR}
              y2={cy - Math.sin(rad) * satR}
              stroke="currentColor"
              strokeOpacity="0.15"
              strokeWidth="1"
              strokeDasharray="4 3"
            />
          </g>
        )
      })}
      {satellites.map((sat, i) => {
        const rad = toRad(sat.angle)
        const cx = 170 + Math.cos(rad) * distance
        const cy = 140 + Math.sin(rad) * distance
        const lines = sat.label.split("\n")
        return (
          <g key={`sat-${i}`}>
            <circle
              cx={cx}
              cy={cy}
              r={satR}
              fill="currentColor"
              fillOpacity="0.08"
              stroke="currentColor"
              strokeOpacity="0.25"
            />
            {lines.map((line, j) => (
              <text
                key={j}
                x={cx}
                y={cy - 4 + j * 10}
                fontSize="8"
                fontWeight="600"
                textAnchor="middle"
                fill="currentColor"
                fillOpacity="0.65"
                fontFamily="system-ui, sans-serif"
              >
                {line}
              </text>
            ))}
          </g>
        )
      })}
      <circle
        cx="170"
        cy="140"
        r={centerR}
        fill="currentColor"
        fillOpacity="0.12"
        stroke="currentColor"
        strokeOpacity="0.4"
        strokeWidth="1.5"
      />
      <text
        x="170"
        y="137"
        fontSize="11"
        fontWeight="700"
        textAnchor="middle"
        fill="currentColor"
        fillOpacity="0.9"
        fontFamily="system-ui, sans-serif"
      >
        Your Node
      </text>
      <text
        x="170"
        y="150"
        fontSize="8"
        textAnchor="middle"
        fill="currentColor"
        fillOpacity="0.5"
        fontFamily="system-ui, sans-serif"
      >
        the center
      </text>
    </svg>
  )
}

function CostFlowSvg() {
  return (
    <svg
      viewBox="0 0 680 180"
      className="w-full max-w-[680px] mx-auto block"
      aria-hidden="true"
    >
      <g transform="translate(20, 20)">
        <rect
          x="0"
          y="0"
          width="280"
          height="140"
          rx="12"
          fill="currentColor"
          fillOpacity="0.03"
          stroke="currentColor"
          strokeOpacity="0.15"
        />
        <rect
          x="10"
          y="10"
          width="260"
          height="50"
          rx="8"
          fill="currentColor"
          fillOpacity="0.06"
        />
        <text
          x="140"
          y="40"
          fontSize="12"
          fontWeight="700"
          textAnchor="middle"
          fill="currentColor"
          fillOpacity="0.5"
          fontFamily="system-ui, sans-serif"
        >
          Platform
        </text>
        <line
          x1="140"
          y1="70"
          x2="140"
          y2="100"
          stroke="currentColor"
          strokeOpacity="0.3"
          strokeWidth="2"
        />
        <polygon
          points="140,105 135,95 145,95"
          fill="currentColor"
          fillOpacity="0.4"
        />
        <rect
          x="60"
          y="110"
          width="160"
          height="22"
          rx="4"
          fill="currentColor"
          fillOpacity="0.08"
        />
        <text
          x="140"
          y="125"
          fontSize="10"
          textAnchor="middle"
          fill="currentColor"
          fillOpacity="0.4"
          fontFamily="system-ui, sans-serif"
        >
          Captures 100% of value
        </text>
        <text
          x="140"
          y="165"
          fontSize="9"
          textAnchor="middle"
          fill="currentColor"
          fillOpacity="0.3"
          fontFamily="system-ui, sans-serif"
        >
          Centralized Model
        </text>
      </g>

      <text
        x="340"
        y="95"
        fontSize="14"
        fontWeight="700"
        textAnchor="middle"
        fill="currentColor"
        fillOpacity="0.3"
        fontFamily="system-ui, sans-serif"
      >
        VS
      </text>

      <g transform="translate(380, 20)">
        <rect
          x="0"
          y="0"
          width="280"
          height="140"
          rx="12"
          fill="currentColor"
          fillOpacity="0.03"
          stroke="currentColor"
          strokeOpacity="0.15"
        />
        <circle
          cx="140"
          cy="70"
          r="24"
          fill="currentColor"
          fillOpacity="0.1"
          stroke="currentColor"
          strokeOpacity="0.35"
        />
        <text
          x="140"
          y="73"
          fontSize="11"
          fontWeight="700"
          textAnchor="middle"
          fill="currentColor"
          fillOpacity="0.8"
          fontFamily="system-ui, sans-serif"
        >
          Creator
        </text>

        {[
          { angle: -135, label: "CDN" },
          { angle: -45, label: "Sponsors" },
          { angle: 45, label: "Subscribers" },
          { angle: 135, label: "Mirrors" },
        ].map((partner, i) => {
          const rad = (partner.angle * Math.PI) / 180
          const dist = 48
          const cx = 140 + Math.cos(rad) * dist
          const cy = 70 + Math.sin(rad) * dist
          return (
            <g key={i}>
              <line
                x1={140 + Math.cos(rad) * 24}
                y1={70 + Math.sin(rad) * 24}
                x2={cx - Math.cos(rad) * 14}
                y2={cy - Math.sin(rad) * 14}
                stroke="currentColor"
                strokeOpacity="0.25"
                strokeWidth="1"
              />
              <circle
                cx={cx}
                cy={cy}
                r="14"
                fill="currentColor"
                fillOpacity="0.08"
              />
              <text
                x={cx}
                y={cy + 2}
                fontSize="6"
                textAnchor="middle"
                fill="currentColor"
                fillOpacity="0.5"
                fontFamily="system-ui, sans-serif"
              >
                {partner.label}
              </text>
            </g>
          )
        })}

        <text
          x="140"
          y="165"
          fontSize="9"
          textAnchor="middle"
          fill="currentColor"
          fillOpacity="0.5"
          fontFamily="system-ui, sans-serif"
        >
          epress Model
        </text>
      </g>
    </svg>
  )
}

function NewJobsIcon() {
  return (
    <svg viewBox="0 0 48 48" className="w-12 h-12 mb-4" aria-hidden="true">
      <circle cx="24" cy="24" r="20" fill="currentColor" fillOpacity="0.08" />
      <path
        d="M16 20h16M16 28h10"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeOpacity="0.6"
      />
      <circle cx="34" cy="28" r="3" fill="currentColor" fillOpacity="0.5" />
    </svg>
  )
}

function AlignedIncentivesIcon() {
  return (
    <svg viewBox="0 0 48 48" className="w-12 h-12 mb-4" aria-hidden="true">
      <circle cx="24" cy="24" r="20" fill="currentColor" fillOpacity="0.08" />
      <path
        d="M15 24l6 6 12-12"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeOpacity="0.6"
        fill="none"
      />
    </svg>
  )
}

function PermissionlessIcon() {
  return (
    <svg viewBox="0 0 48 48" className="w-12 h-12 mb-4" aria-hidden="true">
      <circle cx="24" cy="24" r="20" fill="currentColor" fillOpacity="0.08" />
      <circle
        cx="24"
        cy="18"
        r="6"
        stroke="currentColor"
        strokeWidth="2"
        strokeOpacity="0.6"
        fill="none"
      />
      <path
        d="M14 32c0-5.5 4.5-10 10-10s10 4.5 10 10"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeOpacity="0.6"
        fill="none"
      />
    </svg>
  )
}

function ScrollHint() {
  return (
    <div
      className="mt-12 flex flex-col items-center gap-2 text-white/25"
      style={{ animation: "eco-fade-up 0.8s ease both 1.2s" }}
    >
      <span className="text-[10px] uppercase tracking-widest">Scroll</span>
      <div className="flex gap-1.5">
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            className="w-1.5 h-1.5 rounded-full bg-white/30"
            animate={{ y: [0, 3, 0] }}
            transition={{
              duration: 1.2,
              repeat: Infinity,
              delay: i * 0.15,
            }}
          />
        ))}
      </div>
    </div>
  )
}

export default function EcosystemPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteNav />

      <style jsx global>{`
        @keyframes eco-fade-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @media (prefers-reduced-motion: reduce) {
          * {
            animation: none !important;
            transition: none !important;
          }
          .eco-flow-dot {
            display: none;
          }
        }
      `}</style>

      <main className="flex-1">
        <section className="relative min-h-[80vh] flex flex-col items-center justify-center text-center overflow-hidden">
          <HeroSvg />

          <div className="relative z-10 container-custom">
            <p
              className="section-label mb-5"
              style={{ animation: "eco-fade-up 0.6s ease both" }}
            >
              THE OPPORTUNITY
            </p>
            <h1
              className="landing-heading text-3xl md:text-5xl lg:text-6xl font-extrabold leading-tight max-w-4xl mx-auto mb-7"
              style={{ animation: "eco-fade-up 0.6s ease both 0.1s" }}
            >
              A New Economy Built on Sovereign Infrastructure.
            </h1>
            <div className="max-w-2xl mx-auto space-y-2">
              <p
                className="text-lg md:text-xl text-white/65"
                style={{ animation: "eco-fade-up 0.6s ease both 0.2s" }}
              >
                Decentralized protocols create entirely new markets for
                infrastructure providers, developers, and service operators.
              </p>
              <p
                className="text-lg md:text-xl text-white/55"
                style={{ animation: "eco-fade-up 0.6s ease both 0.3s" }}
              >
                Early ecosystems rewarded early participants disproportionately.
              </p>
              <p
                className="text-lg md:text-xl text-primary font-semibold"
                style={{ animation: "eco-fade-up 0.6s ease both 0.4s" }}
              >
                The epress ecosystem is forming now.
              </p>
            </div>

            <ScrollHint />
          </div>
        </section>

        <EcoDivider number="01" label="Infrastructure Economy" />

        <section className="landing-section">
          <div className="container-custom">
            <div className="text-center mb-10">
              <p className="section-label">THE ECOSYSTEM EMERGES</p>
              <h2 className="landing-heading mb-4">
                The "Digital Plumber" Economy is Here
              </h2>
              <p className="landing-subheading mx-auto">
                You don&apos;t need to build a car to drive one. The epress
                ecosystem naturally incentivizes a new class of service
                providers: 1-click node hosts, specialized storage providers,
                and independent developers.
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <TimelineSvg />
            </motion.div>

            <motion.blockquote
              className="max-w-xl mx-auto text-center mt-12 mb-10"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-xl md:text-2xl font-light italic text-white/60 leading-relaxed">
                &ldquo;Every major technology started as 'too technical' until
                the ecosystem matured around it.&rdquo;
              </p>
              <p className="text-sm text-white/35 mt-3">
                The opportunity is in being early to the inevitable.
              </p>
            </motion.blockquote>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-4xl mx-auto">
              {[
                {
                  title: "Email",
                  before: "Required server administration",
                  after: "Gmail, Fastmail, hosted Exchange",
                },
                {
                  title: "WordPress",
                  before: "FTP uploads, database config",
                  after: "One-click installs, managed WP",
                },
                {
                  title: "Home Networking",
                  before: "Configure routers, port forwarding",
                  after: "Plug in, scan QR code",
                },
              ].map((example, i) => (
                <motion.div
                  key={i}
                  className="landing-card"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <h3 className="font-semibold text-lg mb-3">
                    {example.title}
                  </h3>
                  <div className="space-y-2">
                    <div className="flex items-start gap-2">
                      <span className="text-red-400/50 text-xs mt-0.5">
                        Then
                      </span>
                      <p className="text-sm text-white/45">{example.before}</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-green-400/50 text-xs mt-0.5">
                        Now
                      </span>
                      <p className="text-sm text-white/70">{example.after}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <EcoDivider number="02" label="Customization Economy" />

        <section className="landing-section bg-dark-surface/40">
          <div className="container-custom">
            <div className="text-center mb-10">
              <p className="section-label">THE NODE ECOSYSTEM</p>
              <h2 className="landing-heading mb-4">
                &ldquo;Every Node Is a Customer&rdquo;
              </h2>
              <p className="landing-subheading mx-auto">
                An open platform creates perpetual demand for services,
                customizations, and expertise.
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <RadialDiagramSvg />
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto mt-10">
              {[
                {
                  title: "Theme Designers",
                  desc: "Create beautiful node interfaces and sell them to thousands of node operators.",
                },
                {
                  title: "Node Installers",
                  desc: "Offer on-site or remote setup services for users who want professional help.",
                },
                {
                  title: "Managed Hosting",
                  desc: "Run nodes for others who prefer not to manage infrastructure themselves.",
                },
                {
                  title: "Plugin Developers",
                  desc: "Build extensions and integrations that enhance node capabilities.",
                },
              ].map((card, i) => (
                <motion.div
                  key={i}
                  className="landing-card"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <h3 className="font-semibold mb-2">{card.title}</h3>
                  <p className="text-sm text-dark-muted leading-relaxed">
                    {card.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <EcoDivider number="03" label="Value Economics" />

        <section className="landing-section">
          <div className="container-custom">
            <div className="text-center mb-10">
              <p className="section-label">COST AS INVESTMENT</p>
              <h2 className="landing-heading mb-4">
                Influence is an Asset. Infrastructure is the Cost.
              </h2>
              <p className="landing-subheading mx-auto">
                In Web2, platforms internalize your hosting costs in exchange
                for absolute control over your audience and monetization. In
                epress, the economics are transparent. Low-traffic nodes cost
                nearly zero. Massive reach requires proportional bandwidth
                investment—but in return, you retain 100% of the value you
                create.
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <CostFlowSvg />
            </motion.div>

            <div className="max-w-2xl mx-auto mt-12 space-y-6">
              {[
                {
                  title: "Transparent Costs Enable Markets",
                  desc: "When bandwidth costs are visible, markets organize around them. CDN partners, infrastructure sponsors, and paying subscribers emerge to share the load.",
                },
                {
                  title: "Value Flows to Value Creators",
                  desc: "Popular nodes attract partners who want to support them. Sponsorship, patronage, and partnership become the norm — not platform extraction.",
                },
                {
                  title: "Influence Has Always Had a Cost",
                  desc: "On centralized platforms, that cost is hidden in data extraction and attention monetization. epress makes it explicit and redirects it to those who earn it.",
                },
              ].map((arg, i) => (
                <motion.div
                  key={i}
                  className="flex gap-4"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.15 }}
                >
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-sm font-bold text-primary/70">
                      {i + 1}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{arg.title}</h3>
                    <p className="text-sm text-dark-muted leading-relaxed">
                      {arg.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              className="max-w-3xl mx-auto mt-14 pt-12 border-t border-white/[0.06]"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <h3 className="text-xl font-bold mb-3 text-white/80">
                Security Works the Same Way.
              </h3>
              <p className="text-sm text-white/40 mb-10 leading-relaxed">
                Self-hosted nodes face the same security questions as any
                website — and the internet has spent 30 years developing mature,
                affordable answers.
              </p>

              <div className="rounded-xl overflow-hidden border border-white/[0.07]">
                <div className="grid grid-cols-[1.8fr_1fr_1fr] bg-white/[0.03] border-b border-white/[0.07] px-5 py-2.5">
                  <span className="text-[10px] font-bold tracking-wider uppercase text-white/25">
                    Concern
                  </span>
                  <span className="text-[10px] font-bold tracking-wider uppercase text-red-400/45">
                    Centralized Platform
                  </span>
                  <span className="text-[10px] font-bold tracking-wider uppercase text-green-400/50">
                    epress Node
                  </span>
                </div>

                {[
                  {
                    concern: "DDoS attacks",
                    platform: "platform absorbs (you never see it)",
                    epress: "Cloudflare / CDN — one DNS change",
                  },
                  {
                    concern: "Malicious traffic",
                    platform: "platform's WAF, not your choice",
                    epress: "WAF services from $5/mo, you choose",
                  },
                  {
                    concern: "Security patches",
                    platform: "platform decides timing",
                    epress: "you update when ready (or auto-update)",
                  },
                  {
                    concern: "Attack blast radius",
                    platform: "your data on shared infrastructure",
                    epress: "only your node — others unaffected",
                  },
                ].map((row, i) => (
                  <motion.div
                    key={i}
                    className="grid grid-cols-[1.8fr_1fr_1fr] px-5 py-3.5 border-b border-white/[0.04] last:border-b-0 hover:bg-white/[0.015] transition-colors duration-150"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: i * 0.06 }}
                  >
                    <span className="text-sm text-white/65 font-medium">
                      {row.concern}
                    </span>
                    <span className="text-xs text-white/35 font-mono">
                      {row.platform}
                    </span>
                    <span
                      className="text-xs font-mono"
                      style={{ color: "rgba(110, 231, 183, 0.65)" }}
                    >
                      {row.epress}
                    </span>
                  </motion.div>
                ))}
              </div>

              <p className="mt-5 text-xs text-white/30 italic text-center">
                The cost moves from hidden (paid in data) to visible (paid in
                money). Visible costs have competitive markets. Competitive
                markets drive prices down.
              </p>
            </motion.div>
          </div>
        </section>

        <EcoDivider number="04" label="Three Economic Outcomes" />

        <section className="landing-section bg-dark-surface/40">
          <div className="container-custom">
            <div className="text-center mb-10">
              <p className="section-label">WHAT EMERGES</p>
              <h2 className="landing-heading mb-4">
                The Ecosystem Creates Economic Opportunity
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {[
                {
                  Icon: NewJobsIcon,
                  title: "New Jobs",
                  desc: "Every node needs services. Themes, hosting, security audits, analytics dashboards. An entire service industry forms around node operators.",
                  quote:
                    "Not just developers — installers, designers, consultants, and specialists of every kind.",
                },
                {
                  Icon: AlignedIncentivesIcon,
                  title: "Aligned Incentives",
                  desc: "When value flows directly between creators and supporters, the platform can't extract. Economics align with community interests.",
                  quote:
                    "The network grows when participants benefit. Not when a company profits.",
                },
                {
                  Icon: PermissionlessIcon,
                  title: "Permissionless Innovation",
                  desc: "Build what you want. No API approval. No terms of service restricting your use case. No platform risk.",
                  quote:
                    "Your node, your rules. The protocol guarantees interoperation.",
                },
              ].map((card, i) => (
                <motion.div
                  key={i}
                  className="landing-card flex flex-col"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.12 }}
                >
                  <card.Icon />
                  <h3 className="font-semibold text-lg mb-2">{card.title}</h3>
                  <p className="text-sm text-dark-muted leading-relaxed flex-1">
                    {card.desc}
                  </p>
                  <p className="text-xs text-white/35 italic mt-4 pt-4 border-t border-white/5">
                    {card.quote}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="landing-section">
          <div className="container-custom">
            <div className="max-w-2xl mx-auto text-center">
              <motion.h2
                className="landing-heading mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                The Ecosystem Starts With One Node.
              </motion.h2>

              <motion.div
                className="mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <p className="text-[15px] text-white/45 mb-2">
                  Every service provider, theme designer, and infrastructure
                  partner in this ecosystem
                </p>
                <p className="text-[15px] text-white/65">
                  needs a network to exist. That network starts here.
                </p>
              </motion.div>

              <motion.div
                className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Link
                  href="/docs/getting-started"
                  className="btn-primary px-8 py-3"
                >
                  Deploy Your Node →
                </Link>
                <Link href="#" className="btn-secondary px-8 py-3">
                  Request a Trial Node
                </Link>
              </motion.div>

              <motion.div
                className="flex flex-wrap justify-center gap-6 text-sm text-white/30"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <Link
                  href="/whitepaper"
                  className="hover:text-primary transition-colors"
                >
                  Read the Whitepaper
                </Link>
                <span className="text-white/15">·</span>
                <Link
                  href="/vision"
                  className="hover:text-primary transition-colors"
                >
                  Back to Vision
                </Link>
                <span className="text-white/15">·</span>
                <Link
                  href="/how-it-works"
                  className="hover:text-primary transition-colors"
                >
                  How It Works
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

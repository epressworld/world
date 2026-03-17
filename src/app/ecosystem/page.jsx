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
  const arcPositions = [
    { r: 320, opacity: 0.04 },
    { r: 480, opacity: 0.03 },
    { r: 640, opacity: 0.02 },
  ]

  const dots = [
    { cx: 600, cy: 250 },
    { cx: 650, cy: 280 },
    { cx: 700, cy: 240 },
    { cx: 550, cy: 270 },
    { cx: 480, cy: 290 },
    { cx: 420, cy: 300 },
    { cx: 750, cy: 220 },
    { cx: 800, cy: 260 },
    { cx: 850, cy: 230 },
    { cx: 900, cy: 250 },
    { cx: 950, cy: 220 },
    { cx: 1000, cy: 240 },
  ]

  return (
    <svg
      viewBox="0 0 1200 500"
      className="absolute inset-0 w-full h-full pointer-events-none"
      aria-hidden="true"
      fill="none"
      stroke="currentColor"
    >
      {arcPositions.map((arc, i) => (
        <circle
          key={i}
          cx="600"
          cy="500"
          r={arc.r}
          strokeOpacity={arc.opacity}
          strokeWidth="1"
        />
      ))}
      {dots.map((dot, i) => (
        <circle
          key={i}
          cx={dot.cx}
          cy={dot.cy}
          r="2"
          fill="currentColor"
          fillOpacity="0.06"
        />
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
  const distance = 110

  return (
    <svg
      viewBox="0 0 340 260"
      className="w-full max-w-[340px] mx-auto block"
      aria-hidden="true"
    >
      {satellites.map((sat, i) => {
        const rad = toRad(sat.angle)
        const cx = 170 + Math.cos(rad) * distance
        const cy = 130 + Math.sin(rad) * distance
        return (
          <g key={i}>
            <line
              x1={170 + Math.cos(rad) * centerR}
              y1={130 + Math.sin(rad) * centerR}
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
        const cy = 130 + Math.sin(rad) * distance
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
        cy="130"
        r={centerR}
        fill="currentColor"
        fillOpacity="0.12"
        stroke="currentColor"
        strokeOpacity="0.4"
        strokeWidth="1.5"
      />
      <text
        x="170"
        y="127"
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
        y="140"
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
          cy="55"
          r="28"
          fill="currentColor"
          fillOpacity="0.1"
          stroke="currentColor"
          strokeOpacity="0.35"
        />
        <text
          x="140"
          y="59"
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
          { angle: -90, label: "Sponsors" },
          { angle: -45, label: "Subscribers" },
          { angle: 45, label: "Mirrors" },
        ].map((partner, i) => {
          const rad = (partner.angle * Math.PI) / 180
          const dist = 70
          const cx = 140 + Math.cos(rad) * dist
          const cy = 55 + Math.sin(rad) * dist
          return (
            <g key={i}>
              <line
                x1={140 + Math.cos(rad) * 28}
                y1={55 + Math.sin(rad) * 28}
                x2={cx - Math.cos(rad) * 16}
                y2={cy - Math.sin(rad) * 16}
                stroke="currentColor"
                strokeOpacity="0.25"
                strokeWidth="1"
              />
              <circle
                cx={cx}
                cy={cy}
                r="16"
                fill="currentColor"
                fillOpacity="0.08"
              />
              <text
                x={cx}
                y={cy + 3}
                fontSize="7"
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
        }
      `}</style>

      <main className="flex-1">
        <section className="relative min-h-[60vh] flex flex-col items-center justify-center text-center overflow-hidden">
          <HeroSvg />

          <div className="relative z-10 container-custom">
            <p
              className="section-label mb-5"
              style={{ animation: "eco-fade-up 0.6s ease both" }}
            >
              THE ECOSYSTEM ARGUMENT
            </p>
            <h1
              className="landing-heading text-3xl md:text-5xl lg:text-6xl font-extrabold leading-tight max-w-4xl mx-auto mb-7"
              style={{ animation: "eco-fade-up 0.6s ease both 0.1s" }}
            >
              Every Transformative Technology Looked Impractical Until the
              Ecosystem Caught Up.
            </h1>
            <div className="max-w-2xl mx-auto space-y-2">
              <p
                className="text-lg md:text-xl text-white/65"
                style={{ animation: "eco-fade-up 0.6s ease both 0.2s" }}
              >
                Self-hosting sounds hard. Running a node sounds technical.
                Bandwidth sounds expensive.
              </p>
              <p
                className="text-lg md:text-xl text-white/55"
                style={{ animation: "eco-fade-up 0.6s ease both 0.3s" }}
              >
                The same was true for email servers, home routers, and personal
                websites.
              </p>
              <p
                className="text-lg md:text-xl text-primary font-semibold"
                style={{ animation: "eco-fade-up 0.6s ease both 0.4s" }}
              >
                Then ecosystems made them accessible.
              </p>
            </div>

            <ScrollHint />
          </div>
        </section>

        <EcoDivider number="01" label="Self-Hosting Myth" />

        <section className="landing-section">
          <div className="container-custom">
            <div className="text-center mb-10">
              <p className="section-label">THE COMPLEXITY CURVE</p>
              <h2 className="landing-heading mb-4">
                &ldquo;Self-Hosting Is Too Technical&rdquo;
              </h2>
              <p className="landing-subheading mx-auto">
                Everything starts hard. Then ecosystems form. Here&apos;s the
                trajectory.
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
                &ldquo;Neither was anyone who owns a router.&rdquo;
              </p>
              <p className="text-sm text-white/35 mt-3">
                — The answer to &ldquo;who sets up their own network?&rdquo;
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

        <EcoDivider number="03" label="Bandwidth Economy" />

        <section className="landing-section">
          <div className="container-custom">
            <div className="text-center mb-10">
              <p className="section-label">COST DISTRIBUTION</p>
              <h2 className="landing-heading mb-4">
                &ldquo;Bandwidth Costs Will Bankrupt Creators&rdquo;
              </h2>
              <p className="landing-subheading mx-auto">
                In centralized platforms, bandwidth is a hidden cost. In epress,
                it becomes a visible, marketable asset.
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
                className="landing-heading mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                The Economics Work. The Ecosystem Is Starting.
              </motion.h2>

              <motion.p
                className="text-lg text-white/55 mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                Early node operators aren&apos;t just early adopters.
                They&apos;re founders of the ecosystem that serves everyone who
                follows.
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Link href="/docs" className="btn-primary px-8 py-3">
                  Deploy Your Node
                </Link>
                <Link href="/how-it-works" className="btn-secondary px-8 py-3">
                  How It Works
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
                  The Vision
                </Link>
                <span className="text-white/15">·</span>
                <a
                  href="https://github.com/epressworld/epress"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  GitHub
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

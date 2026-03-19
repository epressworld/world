"use client"

import { motion } from "framer-motion"

function NodeDiagram() {
  return (
    <svg
      viewBox="0 0 480 200"
      width="100%"
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      aria-hidden="true"
    >
      <rect
        x="40"
        y="40"
        width="140"
        height="120"
        rx="12"
        stroke="#e8a04a"
        strokeWidth="1.5"
      />
      <line x1="60" y1="70" x2="160" y2="70" stroke="#666" strokeWidth="1" />
      <line x1="60" y1="90" x2="160" y2="90" stroke="#666" strokeWidth="1" />
      <line x1="60" y1="110" x2="120" y2="110" stroke="#666" strokeWidth="1" />
      <circle cx="110" cy="150" r="8" fill="#34D399" fillOpacity="0.8" />
      <circle cx="140" cy="150" r="8" fill="#e8a04a" fillOpacity="0.8" />

      <line
        x1="190"
        y1="100"
        x2="230"
        y2="100"
        stroke="#e8a04a"
        strokeWidth="1.5"
      />
      <polygon points="230,100 220,92 220,108" fill="#e8a04a" />

      <rect
        x="250"
        y="40"
        width="190"
        height="120"
        rx="12"
        stroke="#34D399"
        strokeWidth="1.5"
      />
      <text
        x="344"
        y="84"
        textAnchor="middle"
        fill="#34D399"
        fontSize="16"
        fontFamily="system-ui, sans-serif"
        fontWeight="600"
      >
        Your Server
      </text>
      <text
        x="344"
        y="116"
        textAnchor="middle"
        fill="#888"
        fontSize="14"
        fontFamily="system-ui, sans-serif"
      >
        Your Rules
      </text>
      <text
        x="344"
        y="144"
        textAnchor="middle"
        fill="#888"
        fontSize="14"
        fontFamily="system-ui, sans-serif"
      >
        Your Data
      </text>
    </svg>
  )
}

function P2PDiagram() {
  return (
    <svg
      viewBox="0 0 560 250"
      width="100%"
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      aria-hidden="true"
    >
      <circle
        cx="120"
        cy="70"
        r="24"
        fill="#34D399"
        fillOpacity="0.1"
        stroke="#34D399"
        strokeWidth="1"
      />
      <text
        x="120"
        y="76"
        textAnchor="middle"
        fill="#34D399"
        fontSize="16"
        fontFamily="system-ui, sans-serif"
        fontWeight="600"
      >
        A
      </text>

      <circle
        cx="260"
        cy="70"
        r="24"
        fill="#34D399"
        fillOpacity="0.1"
        stroke="#34D399"
        strokeWidth="1"
      />
      <text
        x="260"
        y="76"
        textAnchor="middle"
        fill="#34D399"
        fontSize="16"
        fontFamily="system-ui, sans-serif"
        fontWeight="600"
      >
        B
      </text>

      <circle
        cx="400"
        cy="70"
        r="24"
        fill="#34D399"
        fillOpacity="0.1"
        stroke="#34D399"
        strokeWidth="1"
      />
      <text
        x="400"
        y="76"
        textAnchor="middle"
        fill="#34D399"
        fontSize="16"
        fontFamily="system-ui, sans-serif"
        fontWeight="600"
      >
        C
      </text>

      <line
        x1="144"
        y1="70"
        x2="236"
        y2="70"
        stroke="#34D399"
        strokeOpacity="0.5"
        strokeWidth="1"
      />
      <line
        x1="284"
        y1="70"
        x2="376"
        y2="70"
        stroke="#34D399"
        strokeOpacity="0.5"
        strokeWidth="1"
      />

      <circle
        cx="190"
        cy="180"
        r="24"
        fill="#34D399"
        fillOpacity="0.1"
        stroke="#34D399"
        strokeWidth="1"
      />
      <text
        x="190"
        y="186"
        textAnchor="middle"
        fill="#34D399"
        fontSize="16"
        fontFamily="system-ui, sans-serif"
        fontWeight="600"
      >
        D
      </text>

      <circle
        cx="330"
        cy="180"
        r="24"
        fill="#34D399"
        fillOpacity="0.1"
        stroke="#34D399"
        strokeWidth="1"
      />
      <text
        x="330"
        y="186"
        textAnchor="middle"
        fill="#34D399"
        fontSize="16"
        fontFamily="system-ui, sans-serif"
        fontWeight="600"
      >
        E
      </text>

      <line
        x1="134"
        y1="90"
        x2="172"
        y2="160"
        stroke="#34D399"
        strokeOpacity="0.4"
        strokeWidth="1"
      />
      <line
        x1="248"
        y1="90"
        x2="212"
        y2="160"
        stroke="#34D399"
        strokeOpacity="0.4"
        strokeWidth="1"
      />
      <line
        x1="274"
        y1="90"
        x2="308"
        y2="160"
        stroke="#34D399"
        strokeOpacity="0.4"
        strokeWidth="1"
      />
      <line
        x1="386"
        y1="90"
        x2="348"
        y2="160"
        stroke="#34D399"
        strokeOpacity="0.4"
        strokeWidth="1"
      />
      <line
        x1="214"
        y1="180"
        x2="306"
        y2="180"
        stroke="#34D399"
        strokeOpacity="0.4"
        strokeWidth="1"
      />

      <text
        x="260"
        y="230"
        textAnchor="middle"
        fill="#34D399"
        fillOpacity="0.7"
        fontSize="14"
        fontFamily="system-ui, sans-serif"
      >
        Direct peer-to-peer connections
      </text>
    </svg>
  )
}

function CryptoDiagram() {
  return (
    <svg viewBox="0 0 600 200" width="100%" fill="none" aria-hidden="true">
      <defs>
        <linearGradient id="cardGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#e8a04a" stopOpacity="0.08" />
          <stop offset="100%" stopColor="#e8a04a" stopOpacity="0.02" />
        </linearGradient>
        <linearGradient id="cardGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#4af0d4" stopOpacity="0.08" />
          <stop offset="100%" stopColor="#4af0d4" stopOpacity="0.02" />
        </linearGradient>
        <linearGradient id="cardGrad3" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#34D399" stopOpacity="0.08" />
          <stop offset="100%" stopColor="#34D399" stopOpacity="0.02" />
        </linearGradient>
      </defs>

      <rect
        x="30"
        y="40"
        width="150"
        height="110"
        rx="12"
        fill="url(#cardGrad1)"
        stroke="#e8a04a"
        strokeWidth="1"
      />
      <text
        x="105"
        y="75"
        textAnchor="middle"
        fill="#e8a04a"
        fontSize="13"
        fontFamily="system-ui, sans-serif"
        fontWeight="600"
      >
        Content
      </text>
      <rect x="55" y="88" width="100" height="24" rx="4" fill="#0a0a0a" />
      <text
        x="105"
        y="105"
        textAnchor="middle"
        fill="#e8a04a"
        fontSize="12"
        fontFamily="monospace"
      >
        0x7a3f...9e2b
      </text>
      <text
        x="105"
        y="135"
        textAnchor="middle"
        fill="#666"
        fontSize="10"
        fontFamily="system-ui, sans-serif"
      >
        SHA-256 Hash
      </text>

      <line
        x1="190"
        y1="95"
        x2="220"
        y2="95"
        stroke="#e8a04a"
        strokeWidth="1.5"
        strokeDasharray="4 2"
      />
      <polygon points="220,95 212,90 212,100" fill="#e8a04a" />

      <rect
        x="225"
        y="40"
        width="150"
        height="110"
        rx="12"
        fill="url(#cardGrad2)"
        stroke="#4af0d4"
        strokeWidth="1"
      />
      <circle
        cx="300"
        cy="70"
        r="16"
        fill="#4af0d4"
        fillOpacity="0.1"
        stroke="#4af0d4"
        strokeWidth="1"
      />
      <path
        d="M292 70 L298 76 L308 64"
        stroke="#4af0d4"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <text
        x="300"
        y="105"
        textAnchor="middle"
        fill="#4af0d4"
        fontSize="13"
        fontFamily="system-ui, sans-serif"
        fontWeight="600"
      >
        Sign
      </text>
      <text
        x="300"
        y="125"
        textAnchor="middle"
        fill="#666"
        fontSize="10"
        fontFamily="system-ui, sans-serif"
      >
        with Private Key
      </text>

      <line
        x1="385"
        y1="95"
        x2="415"
        y2="95"
        stroke="#34D399"
        strokeWidth="1.5"
        strokeDasharray="4 2"
      />
      <polygon points="415,95 407,90 407,100" fill="#34D399" />

      <rect
        x="420"
        y="40"
        width="150"
        height="110"
        rx="12"
        fill="url(#cardGrad3)"
        stroke="#34D399"
        strokeWidth="1"
      />
      <circle cx="495" cy="70" r="20" fill="#34D399" fillOpacity="0.15" />
      <path
        d="M483 70 L491 78 L507 60"
        stroke="#34D399"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <text
        x="495"
        y="108"
        textAnchor="middle"
        fill="#34D399"
        fontSize="13"
        fontFamily="system-ui, sans-serif"
        fontWeight="600"
      >
        Verified
      </text>
      <text
        x="495"
        y="128"
        textAnchor="middle"
        fill="#666"
        fontSize="10"
        fontFamily="system-ui, sans-serif"
      >
        Cryptographic Proof
      </text>

      <text
        x="300"
        y="175"
        textAnchor="middle"
        fill="#34D399"
        fillOpacity="0.7"
        fontSize="12"
        fontFamily="system-ui, sans-serif"
      >
        Immutable. Verifiable. Yours.
      </text>
    </svg>
  )
}

const cards = [
  {
    title: "Run Your Own Node",
    caption:
      "Your server, your rules. No corporation or central authority can pull the plug on your digital life.",
    diagram: NodeDiagram,
  },
  {
    title: "Connect Peer-to-Peer",
    caption:
      "No middleman controls the data flow. Nodes communicate directly, building an unstoppable social graph.",
    diagram: P2PDiagram,
  },
  {
    title: "Cryptographic Truth",
    caption:
      "Sign every post with your Ethereum identity. Once published, your content is immutable, verifiable, and forever traceable to you.",
    diagram: CryptoDiagram,
  },
]

export function TechCards() {
  return (
    <section className="landing-section">
      <div className="container-custom">
        <motion.p
          className="section-label text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          THE SOLUTION
        </motion.p>

        <motion.h2
          className="landing-heading mb-4 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Three Simple Ideas
        </motion.h2>

        <motion.p
          className="text-center text-white/50 mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Technical features translated into real-world benefits that restore
          your digital sovereignty.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {cards.map((card, idx) => {
            const Diagram = card.diagram
            return (
              <motion.div
                key={idx}
                className="landing-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * (idx + 1) }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
              >
                <div className="bg-dark-surface/30 rounded-lg p-4 mb-4">
                  <Diagram />
                </div>
                <h3 className="font-bold text-lg text-white mb-2">
                  {card.title}
                </h3>
                <p className="text-sm text-white/60 leading-relaxed">
                  {card.caption}
                </p>
              </motion.div>
            )
          })}
        </div>

        <motion.p
          className="text-center text-sm text-white/40"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          Want the technical details?{" "}
          <a
            href="/how-it-works"
            className="text-primary hover:underline transition-colors"
          >
            See how it all works →
          </a>
        </motion.p>
      </div>
    </section>
  )
}

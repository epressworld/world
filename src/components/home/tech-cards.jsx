"use client"

import { motion } from "framer-motion"

function NodeDiagram() {
  return (
    <svg
      viewBox="0 0 240 100"
      width="100%"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden="true"
    >
      <rect
        x="20"
        y="20"
        width="70"
        height="60"
        rx="6"
        stroke="#e8a04a"
        strokeWidth="2"
      />
      <line x1="30" y1="35" x2="80" y2="35" stroke="#666" strokeWidth="1" />
      <line x1="30" y1="45" x2="80" y2="45" stroke="#666" strokeWidth="1" />
      <line x1="30" y1="55" x2="60" y2="55" stroke="#666" strokeWidth="1" />
      <circle cx="55" cy="75" r="4" fill="#34D399" fillOpacity="0.8" />
      <circle cx="70" cy="75" r="4" fill="#e8a04a" fillOpacity="0.8" />

      <line x1="95" y1="50" x2="115" y2="50" stroke="#e8a04a" strokeWidth="2" />
      <polygon points="115,50 110,46 110,54" fill="#e8a04a" />

      <rect
        x="125"
        y="20"
        width="95"
        height="60"
        rx="6"
        stroke="#34D399"
        strokeWidth="2"
      />
      <text
        x="172"
        y="42"
        textAnchor="middle"
        fill="#34D399"
        fontSize="9"
        fontFamily="system-ui, sans-serif"
        fontWeight="600"
      >
        Your Server
      </text>
      <text
        x="172"
        y="58"
        textAnchor="middle"
        fill="#888"
        fontSize="8"
        fontFamily="system-ui, sans-serif"
      >
        Your Rules
      </text>
      <text
        x="172"
        y="72"
        textAnchor="middle"
        fill="#888"
        fontSize="8"
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
      viewBox="0 0 280 125"
      width="100%"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden="true"
    >
      <circle
        cx="60"
        cy="35"
        r="12"
        fill="#34D399"
        fillOpacity="0.1"
        stroke="#34D399"
        strokeWidth="1.5"
      />
      <text
        x="60"
        y="38"
        textAnchor="middle"
        fill="#34D399"
        fontSize="8"
        fontFamily="system-ui, sans-serif"
        fontWeight="600"
      >
        A
      </text>

      <circle
        cx="130"
        cy="35"
        r="12"
        fill="#34D399"
        fillOpacity="0.1"
        stroke="#34D399"
        strokeWidth="1.5"
      />
      <text
        x="130"
        y="38"
        textAnchor="middle"
        fill="#34D399"
        fontSize="8"
        fontFamily="system-ui, sans-serif"
        fontWeight="600"
      >
        B
      </text>

      <circle
        cx="200"
        cy="35"
        r="12"
        fill="#34D399"
        fillOpacity="0.1"
        stroke="#34D399"
        strokeWidth="1.5"
      />
      <text
        x="200"
        y="38"
        textAnchor="middle"
        fill="#34D399"
        fontSize="8"
        fontFamily="system-ui, sans-serif"
        fontWeight="600"
      >
        C
      </text>

      <line
        x1="72"
        y1="35"
        x2="118"
        y2="35"
        stroke="#34D399"
        strokeOpacity="0.5"
        strokeWidth="1.5"
      />
      <line
        x1="142"
        y1="35"
        x2="188"
        y2="35"
        stroke="#34D399"
        strokeOpacity="0.5"
        strokeWidth="1.5"
      />

      <circle
        cx="95"
        cy="90"
        r="12"
        fill="#34D399"
        fillOpacity="0.1"
        stroke="#34D399"
        strokeWidth="1.5"
      />
      <text
        x="95"
        y="93"
        textAnchor="middle"
        fill="#34D399"
        fontSize="8"
        fontFamily="system-ui, sans-serif"
        fontWeight="600"
      >
        D
      </text>

      <circle
        cx="165"
        cy="90"
        r="12"
        fill="#34D399"
        fillOpacity="0.1"
        stroke="#34D399"
        strokeWidth="1.5"
      />
      <text
        x="165"
        y="93"
        textAnchor="middle"
        fill="#34D399"
        fontSize="8"
        fontFamily="system-ui, sans-serif"
        fontWeight="600"
      >
        E
      </text>

      <line
        x1="67"
        y1="45"
        x2="86"
        y2="80"
        stroke="#34D399"
        strokeOpacity="0.4"
        strokeWidth="1"
      />
      <line
        x1="124"
        y1="45"
        x2="106"
        y2="80"
        stroke="#34D399"
        strokeOpacity="0.4"
        strokeWidth="1"
      />
      <line
        x1="137"
        y1="45"
        x2="154"
        y2="80"
        stroke="#34D399"
        strokeOpacity="0.4"
        strokeWidth="1"
      />
      <line
        x1="193"
        y1="45"
        x2="174"
        y2="80"
        stroke="#34D399"
        strokeOpacity="0.4"
        strokeWidth="1"
      />
      <line
        x1="107"
        y1="90"
        x2="153"
        y2="90"
        stroke="#34D399"
        strokeOpacity="0.4"
        strokeWidth="1.5"
      />

      <text
        x="130"
        y="115"
        textAnchor="middle"
        fill="#34D399"
        fillOpacity="0.7"
        fontSize="8"
        fontFamily="system-ui, sans-serif"
      >
        Direct peer-to-peer connections
      </text>
    </svg>
  )
}

function CryptoDiagram() {
  return (
    <svg
      viewBox="0 0 260 100"
      width="100%"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden="true"
    >
      <rect
        x="20"
        y="25"
        width="80"
        height="50"
        rx="6"
        stroke="#e8a04a"
        strokeWidth="2"
      />
      <text
        x="60"
        y="45"
        textAnchor="middle"
        fill="#888"
        fontSize="8"
        fontFamily="monospace"
      >
        Content
      </text>
      <text
        x="60"
        y="58"
        textAnchor="middle"
        fill="#e8a04a"
        fontSize="9"
        fontFamily="monospace"
        fontWeight="600"
      >
        0x7a3f...
      </text>

      <line
        x1="105"
        y1="50"
        x2="125"
        y2="50"
        stroke="#e8a04a"
        strokeWidth="2"
      />
      <polygon points="125,50 120,46 120,54" fill="#e8a04a" />

      <rect
        x="135"
        y="20"
        width="50"
        height="60"
        rx="6"
        stroke="#4af0d4"
        strokeWidth="2"
      />
      <text
        x="160"
        y="38"
        textAnchor="middle"
        fill="#4af0d4"
        fontSize="8"
        fontFamily="system-ui, sans-serif"
        fontWeight="600"
      >
        Sign
      </text>
      <text
        x="160"
        y="52"
        textAnchor="middle"
        fill="#888"
        fontSize="7"
        fontFamily="monospace"
      >
        Private
      </text>
      <text
        x="160"
        y="63"
        textAnchor="middle"
        fill="#888"
        fontSize="7"
        fontFamily="monospace"
      >
        Key
      </text>

      <line
        x1="190"
        y1="50"
        x2="210"
        y2="50"
        stroke="#34D399"
        strokeWidth="2"
      />
      <polygon points="210,50 205,46 205,54" fill="#34D399" />

      <rect
        x="220"
        y="25"
        width="25"
        height="50"
        rx="4"
        stroke="#34D399"
        strokeWidth="2"
      />
      <path
        d="M228 45 L232 52 L240 38"
        stroke="#34D399"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />

      <text
        x="130"
        y="88"
        textAnchor="middle"
        fill="#34D399"
        fillOpacity="0.7"
        fontSize="8"
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

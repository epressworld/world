import { MiniDiagram } from "@/components/shared/mini-diagram"

function TimelineDiagram() {
  return (
    <svg
      viewBox="0 0 700 320"
      className="w-full h-auto"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="timelineGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#F7931A" stopOpacity="0.1" />
          <stop offset="100%" stopColor="#F7931A" stopOpacity="0.02" />
        </linearGradient>
      </defs>

      <rect
        x="30"
        y="30"
        width="120"
        height="50"
        rx="6"
        fill="#1a1a1a"
        stroke="#F7931A"
      />
      <text
        x="90"
        y="55"
        textAnchor="middle"
        fill="#F7931A"
        fontSize="9"
        fontFamily="monospace"
      >
        Alice&apos;s Node
      </text>
      <text x="90" y="70" textAnchor="middle" fontSize="10">
        📦
      </text>

      <rect
        x="170"
        y="30"
        width="120"
        height="50"
        rx="6"
        fill="#1a1a1a"
        stroke="#34D399"
      />
      <text
        x="230"
        y="55"
        textAnchor="middle"
        fill="#34D399"
        fontSize="9"
        fontFamily="monospace"
      >
        Bob&apos;s Node
      </text>
      <text x="230" y="70" textAnchor="middle" fontSize="10">
        📦
      </text>

      <rect
        x="310"
        y="30"
        width="120"
        height="50"
        rx="6"
        fill="#1a1a1a"
        stroke="#60a5fa"
      />
      <text
        x="370"
        y="55"
        textAnchor="middle"
        fill="#60a5fa"
        fontSize="9"
        fontFamily="monospace"
      >
        Carol&apos;s Node
      </text>
      <text x="370" y="70" textAnchor="middle" fontSize="10">
        📦
      </text>

      <rect
        x="450"
        y="30"
        width="120"
        height="50"
        rx="6"
        fill="#1a1a1a"
        stroke="#a855f7"
      />
      <text
        x="510"
        y="55"
        textAnchor="middle"
        fill="#a855f7"
        fontSize="9"
        fontFamily="monospace"
      >
        Public Node
      </text>
      <text x="510" y="70" textAnchor="middle" fontSize="10">
        🌐
      </text>

      <line
        x1="90"
        y1="85"
        x2="90"
        y2="130"
        stroke="#F7931A"
        strokeWidth="1"
        strokeDasharray="3 2"
        strokeOpacity="0.5"
      />
      <line
        x1="230"
        y1="85"
        x2="230"
        y2="130"
        stroke="#34D399"
        strokeWidth="1"
        strokeDasharray="3 2"
        strokeOpacity="0.5"
      />
      <line
        x1="370"
        y1="85"
        x2="370"
        y2="130"
        stroke="#60a5fa"
        strokeWidth="1"
        strokeDasharray="3 2"
        strokeOpacity="0.5"
      />
      <line
        x1="510"
        y1="85"
        x2="510"
        y2="130"
        stroke="#a855f7"
        strokeWidth="1"
        strokeDasharray="3 2"
        strokeOpacity="0.5"
      />

      <polygon
        points="90,130 230,130 370,130 510,130"
        fill="none"
        stroke="#666"
        strokeWidth="1"
        strokeDasharray="2 2"
      />

      <rect
        x="50"
        y="145"
        width="600"
        height="80"
        rx="8"
        fill="url(#timelineGrad)"
        stroke="#F7931A"
      />
      <text
        x="350"
        y="170"
        textAnchor="middle"
        fill="#F7931A"
        fontSize="11"
        fontFamily="monospace"
        fontWeight="bold"
      >
        Your Local Timeline
      </text>
      <text
        x="350"
        y="190"
        textAnchor="middle"
        fill="#666"
        fontSize="9"
        fontFamily="monospace"
      >
        Aggregated from: Alice · Bob · Carol · Public sources
      </text>
      <text
        x="350"
        y="210"
        textAnchor="middle"
        fill="#666"
        fontSize="8"
        fontFamily="monospace"
      >
        Sorted by timestamp — no algorithm, just chronology
      </text>

      <rect
        x="50"
        y="105"
        width="80"
        height="25"
        rx="4"
        fill="#1a1a1a"
        stroke="#F7931A"
        strokeOpacity="0.5"
      />
      <text
        x="90"
        y="122"
        textAnchor="middle"
        fill="#F7931A"
        fontSize="7"
        fontFamily="monospace"
      >
        Content A
      </text>

      <rect
        x="190"
        y="105"
        width="80"
        height="25"
        rx="4"
        fill="#1a1a1a"
        stroke="#34D399"
        strokeOpacity="0.5"
      />
      <text
        x="230"
        y="122"
        textAnchor="middle"
        fill="#34D399"
        fontSize="7"
        fontFamily="monospace"
      >
        Content B
      </text>

      <rect
        x="330"
        y="105"
        width="80"
        height="25"
        rx="4"
        fill="#1a1a1a"
        stroke="#60a5fa"
        strokeOpacity="0.5"
      />
      <text
        x="370"
        y="122"
        textAnchor="middle"
        fill="#60a5fa"
        fontSize="7"
        fontFamily="monospace"
      >
        Content C
      </text>

      <rect
        x="470"
        y="105"
        width="80"
        height="25"
        rx="4"
        fill="#1a1a1a"
        stroke="#a855f7"
        strokeOpacity="0.5"
      />
      <text
        x="510"
        y="122"
        textAnchor="middle"
        fill="#a855f7"
        fontSize="7"
        fontFamily="monospace"
      >
        Content D
      </text>

      <rect
        x="50"
        y="250"
        width="280"
        height="55"
        rx="8"
        fill="#1a1a1a"
        stroke="#ef4444"
        strokeOpacity="0.5"
      />
      <text
        x="190"
        y="275"
        textAnchor="middle"
        fill="#ef4444"
        fontSize="9"
        fontFamily="monospace"
      >
        Platform Algorithmic Feed
      </text>
      <text
        x="190"
        y="292"
        textAnchor="middle"
        fill="#666"
        fontSize="7"
        fontFamily="monospace"
      >
        Engagement-optimized · Ads injected · Shadow-bans
      </text>

      <rect
        x="370"
        y="250"
        width="280"
        height="55"
        rx="8"
        fill="url(#timelineGrad)"
        stroke="#34D399"
      />
      <text
        x="510"
        y="275"
        textAnchor="middle"
        fill="#34D399"
        fontSize="9"
        fontFamily="monospace"
      >
        epress Timestamp Timeline
      </text>
      <text
        x="510"
        y="292"
        textAnchor="middle"
        fill="#666"
        fontSize="7"
        fontFamily="monospace"
      >
        Chronological · No manipulation · You control sources
      </text>
    </svg>
  )
}

export function TimelineSection() {
  return (
    <section id="timeline" className="landing-section">
      <div className="container-custom">
        <p className="section-label">Experience</p>
        <h2 className="landing-heading mb-4">Local Timeline</h2>
        <p className="landing-subheading mb-12">
          Your timeline is generated locally by your node, aggregating content
          from everyone you follow. No algorithmic manipulation — just a simple,
          timestamp-ordered feed you control.
        </p>

        <MiniDiagram className="mb-8">
          <TimelineDiagram />
        </MiniDiagram>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-6 rounded-xl border border-red-500/30 bg-gradient-to-br from-red-950/20 to-dark-surface/50">
            <h3 className="text-lg font-semibold text-red-400 mb-3">
              Platform Algorithmic Feed
            </h3>
            <ul className="space-y-2 text-sm text-dark-muted">
              <li className="flex items-start gap-2">
                <span className="text-red-400">✗</span>
                <span>
                  Sorted by "engagement potential" — what keeps you scrolling
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-400">✗</span>
                <span>Ads and sponsored content injected</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-400">✗</span>
                <span>Shadow-bans and visibility throttling</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-400">✗</span>
                <span>Platform decides what you see</span>
              </li>
            </ul>
          </div>

          <div className="p-6 rounded-xl border border-primary/30 bg-gradient-to-br from-primary/10 to-dark-surface/50">
            <h3 className="text-lg font-semibold text-primary mb-3">
              epress Timestamp Timeline
            </h3>
            <ul className="space-y-2 text-sm text-dark-muted">
              <li className="flex items-start gap-2">
                <span className="text-primary">✓</span>
                <span>Sorted by timestamp — newest first, always</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">✓</span>
                <span>No ads — you control your timeline</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">✓</span>
                <span>No shadow-bans — content is either there or not</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">✓</span>
                <span>You choose sources, nothing hidden</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

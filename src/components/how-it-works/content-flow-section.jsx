import { MiniDiagram } from "@/components/shared/mini-diagram"

function NotifyPullDiagram() {
  return (
    <svg
      viewBox="0 0 700 300"
      className="w-full h-auto"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="flowGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#F7931A" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#34D399" stopOpacity="0.15" />
        </linearGradient>
      </defs>

      <rect
        x="50"
        y="40"
        width="100"
        height="60"
        rx="8"
        fill="#1a1a1a"
        stroke="#F7931A"
      />
      <text
        x="100"
        y="65"
        textAnchor="middle"
        fill="#F7931A"
        fontSize="10"
        fontFamily="monospace"
      >
        Publisher
      </text>
      <text x="100" y="82" textAnchor="middle" fontSize="14">
        ✍️
      </text>

      <rect
        x="250"
        y="20"
        width="80"
        height="50"
        rx="6"
        fill="#0f0f0f"
        stroke="#666"
      />
      <text
        x="290"
        y="42"
        textAnchor="middle"
        fill="#888"
        fontSize="9"
        fontFamily="monospace"
      >
        Follower 1
      </text>
      <text x="290" y="58" textAnchor="middle" fontSize="10">
        👤
      </text>

      <rect
        x="250"
        y="80"
        width="80"
        height="50"
        rx="6"
        fill="#0f0f0f"
        stroke="#666"
      />
      <text
        x="290"
        y="102"
        textAnchor="middle"
        fill="#888"
        fontSize="9"
        fontFamily="monospace"
      >
        Follower 2
      </text>
      <text x="290" y="118" textAnchor="middle" fontSize="10">
        👤
      </text>

      <rect
        x="250"
        y="140"
        width="80"
        height="50"
        rx="6"
        fill="#0f0f0f"
        stroke="#666"
      />
      <text
        x="290"
        y="162"
        textAnchor="middle"
        fill="#888"
        fontSize="9"
        fontFamily="monospace"
      >
        Follower 3
      </text>
      <text x="290" y="178" textAnchor="middle" fontSize="10">
        👤
      </text>

      <rect
        x="400"
        y="60"
        width="90"
        height="100"
        rx="8"
        fill="url(#flowGrad)"
        stroke="#34D399"
      />
      <text
        x="445"
        y="95"
        textAnchor="middle"
        fill="#34D399"
        fontSize="9"
        fontFamily="monospace"
        fontWeight="bold"
      >
        Notify Only
      </text>
      <text
        x="445"
        y="115"
        textAnchor="middle"
        fill="#666"
        fontSize="8"
        fontFamily="monospace"
      >
        "New content
      </text>
      <text
        x="445"
        y="128"
        textAnchor="middle"
        fill="#666"
        fontSize="8"
        fontFamily="monospace"
      >
        available"
      </text>
      <text x="445" y="145" textAnchor="middle" fontSize="12">
        🔔
      </text>

      <line
        x1="155"
        y1="70"
        x2="245"
        y2="45"
        stroke="#F7931A"
        strokeWidth="1.5"
        strokeDasharray="4 2"
      />
      <line
        x1="155"
        y1="70"
        x2="245"
        y2="105"
        stroke="#F7931A"
        strokeWidth="1.5"
        strokeDasharray="4 2"
      />
      <line
        x1="155"
        y1="70"
        x2="245"
        y2="165"
        stroke="#F7931A"
        strokeWidth="1.5"
        strokeDasharray="4 2"
      />

      <line
        x1="335"
        y1="45"
        x2="395"
        y2="90"
        stroke="#34D399"
        strokeWidth="1.5"
        strokeDasharray="4 2"
      />
      <line
        x1="335"
        y1="105"
        x2="395"
        y2="110"
        stroke="#34D399"
        strokeWidth="1.5"
        strokeDasharray="4 2"
      />
      <line
        x1="335"
        y1="165"
        x2="395"
        y2="130"
        stroke="#34D399"
        strokeWidth="1.5"
        strokeDasharray="4 2"
      />

      <text
        x="200"
        y="35"
        textAnchor="middle"
        fill="#F7931A"
        fontSize="8"
        fontFamily="monospace"
      >
        1. Publish
      </text>
      <text
        x="370"
        y="65"
        textAnchor="middle"
        fill="#34D399"
        fontSize="8"
        fontFamily="monospace"
      >
        2. Notify
      </text>

      <rect
        x="530"
        y="60"
        width="140"
        height="100"
        rx="8"
        fill="#0f0f0f"
        stroke="#666"
      />
      <text
        x="600"
        y="90"
        textAnchor="middle"
        fill="#888"
        fontSize="9"
        fontFamily="monospace"
      >
        Follower Nodes
      </text>
      <text
        x="600"
        y="110"
        textAnchor="middle"
        fill="#34D399"
        fontSize="8"
        fontFamily="monospace"
      >
        3. Pull content
      </text>
      <text
        x="600"
        y="125"
        textAnchor="middle"
        fill="#34D399"
        fontSize="8"
        fontFamily="monospace"
      >
        when ready
      </text>
      <text x="600" y="145" textAnchor="middle" fontSize="14">
        ⬇️
      </text>

      <line
        x1="495"
        y1="110"
        x2="525"
        y2="110"
        stroke="#666"
        strokeWidth="1.5"
      />
      <polygon points="525,110 520,107 520,113" fill="#666" />

      <rect
        x="50"
        y="220"
        width="280"
        height="60"
        rx="8"
        fill="#1a1a1a"
        stroke="#ef4444"
        strokeOpacity="0.5"
      />
      <text
        x="190"
        y="245"
        textAnchor="middle"
        fill="#ef4444"
        fontSize="10"
        fontFamily="monospace"
      >
        Push Model (Traditional)
      </text>
      <text
        x="190"
        y="265"
        textAnchor="middle"
        fill="#666"
        fontSize="8"
        fontFamily="monospace"
      >
        Full content pushed to ALL followers → High bandwidth
      </text>

      <rect
        x="370"
        y="220"
        width="280"
        height="60"
        rx="8"
        fill="url(#flowGrad)"
        stroke="#34D399"
      />
      <text
        x="510"
        y="245"
        textAnchor="middle"
        fill="#34D399"
        fontSize="10"
        fontFamily="monospace"
      >
        Notify-Pull Model (epress)
      </text>
      <text
        x="510"
        y="265"
        textAnchor="middle"
        fill="#666"
        fontSize="8"
        fontFamily="monospace"
      >
        Notify → Pull on demand → Low bandwidth
      </text>
    </svg>
  )
}

export function ContentFlowSection() {
  return (
    <section id="content-flow" className="landing-section bg-dark-surface/40">
      <div className="container-custom">
        <p className="section-label">Distribution</p>
        <h2 className="landing-heading mb-4">Content Flow</h2>
        <p className="landing-subheading mb-12">
          epress uses a Notify-Pull model instead of Push. When you publish,
          followers receive a notification and pull the content when
          they&apos;re ready — saving bandwidth and enabling offline operation.
        </p>

        <MiniDiagram className="mb-8">
          <NotifyPullDiagram />
        </MiniDiagram>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-6 rounded-xl border border-red-500/30 bg-gradient-to-br from-red-950/20 to-dark-surface/50">
            <h3 className="text-lg font-semibold text-red-400 mb-3">
              Push Model (Traditional)
            </h3>
            <ul className="space-y-2 text-sm text-dark-muted">
              <li className="flex items-start gap-2">
                <span className="text-red-400">✗</span>
                <span>Publisher bandwidth scales with follower count</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-400">✗</span>
                <span>Offline followers miss content</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-400">✗</span>
                <span>Requires central servers for delivery</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-400">✗</span>
                <span>Expensive for high-traffic publishers</span>
              </li>
            </ul>
          </div>

          <div className="p-6 rounded-xl border border-primary/30 bg-gradient-to-br from-primary/10 to-dark-surface/50">
            <h3 className="text-lg font-semibold text-primary mb-3">
              Notify-Pull (epress)
            </h3>
            <ul className="space-y-2 text-sm text-dark-muted">
              <li className="flex items-start gap-2">
                <span className="text-primary">✓</span>
                <span>
                  Publisher bandwidth is constant, regardless of followers
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">✓</span>
                <span>Followers pull when online — no missed content</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">✓</span>
                <span>Fully peer-to-peer, no central servers needed</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">✓</span>
                <span>Economical for any publisher size</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

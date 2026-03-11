import { MiniDiagram } from "@/components/shared/mini-diagram"

function FollowHandshakeDiagram() {
  return (
    <svg
      viewBox="0 0 700 280"
      className="w-full h-auto"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="nodeGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#1a1a1a" />
          <stop offset="100%" stopColor="#0f0f0f" />
        </linearGradient>
      </defs>

      <rect
        x="50"
        y="30"
        width="140"
        height="50"
        rx="8"
        fill="url(#nodeGrad)"
        stroke="#F7931A"
      />
      <text
        x="120"
        y="50"
        textAnchor="middle"
        fill="#F7931A"
        fontSize="11"
        fontFamily="monospace"
        fontWeight="bold"
      >
        Alice Browser
      </text>
      <text
        x="120"
        y="68"
        textAnchor="middle"
        fill="#666"
        fontSize="8"
        fontFamily="monospace"
      >
        Follow Request
      </text>

      <rect
        x="280"
        y="30"
        width="140"
        height="50"
        rx="8"
        fill="url(#nodeGrad)"
        stroke="#34D399"
      />
      <text
        x="350"
        y="50"
        textAnchor="middle"
        fill="#34D399"
        fontSize="11"
        fontFamily="monospace"
        fontWeight="bold"
      >
        Bob Node
      </text>
      <text
        x="350"
        y="68"
        textAnchor="middle"
        fill="#666"
        fontSize="8"
        fontFamily="monospace"
      >
        Target Node
      </text>

      <rect
        x="510"
        y="30"
        width="140"
        height="50"
        rx="8"
        fill="url(#nodeGrad)"
        stroke="#60a5fa"
      />
      <text
        x="580"
        y="50"
        textAnchor="middle"
        fill="#60a5fa"
        fontSize="11"
        fontFamily="monospace"
        fontWeight="bold"
      >
        Alice Node
      </text>
      <text
        x="580"
        y="68"
        textAnchor="middle"
        fill="#666"
        fontSize="8"
        fontFamily="monospace"
      >
        Home Node
      </text>

      <line
        x1="120"
        y1="85"
        x2="120"
        y2="250"
        stroke="#F7931A"
        strokeWidth="1.5"
        strokeDasharray="4 3"
        strokeOpacity="0.5"
      />
      <line
        x1="350"
        y1="85"
        x2="350"
        y2="250"
        stroke="#34D399"
        strokeWidth="1.5"
        strokeDasharray="4 3"
        strokeOpacity="0.5"
      />
      <line
        x1="580"
        y1="85"
        x2="580"
        y2="250"
        stroke="#60a5fa"
        strokeWidth="1.5"
        strokeDasharray="4 3"
        strokeOpacity="0.5"
      />

      <line
        x1="120"
        y1="110"
        x2="350"
        y2="110"
        stroke="#F7931A"
        strokeWidth="2"
      />
      <polygon points="350,110 343,106 343,114" fill="#F7931A" />
      <text
        x="235"
        y="100"
        textAnchor="middle"
        fill="#F7931A"
        fontSize="9"
        fontFamily="monospace"
      >
        1. Follow(Bob)
      </text>

      <line
        x1="350"
        y1="140"
        x2="580"
        y2="140"
        stroke="#34D399"
        strokeWidth="2"
      />
      <polygon points="580,140 573,136 573,144" fill="#34D399" />
      <text
        x="465"
        y="130"
        textAnchor="middle"
        fill="#34D399"
        fontSize="9"
        fontFamily="monospace"
      >
        2. Notify Alice Node
      </text>

      <line
        x1="580"
        y1="170"
        x2="350"
        y2="170"
        stroke="#60a5fa"
        strokeWidth="2"
      />
      <polygon points="350,170 357,166 357,174" fill="#60a5fa" />
      <text
        x="465"
        y="160"
        textAnchor="middle"
        fill="#60a5fa"
        fontSize="9"
        fontFamily="monospace"
      >
        3. Request Follow
      </text>

      <line
        x1="350"
        y1="200"
        x2="580"
        y2="200"
        stroke="#34D399"
        strokeWidth="2"
      />
      <polygon points="580,200 573,196 573,204" fill="#34D399" />
      <text
        x="465"
        y="190"
        textAnchor="middle"
        fill="#34D399"
        fontSize="9"
        fontFamily="monospace"
      >
        4. Confirm/Reject
      </text>

      <line
        x1="580"
        y1="230"
        x2="120"
        y2="230"
        stroke="#60a5fa"
        strokeWidth="2"
      />
      <polygon points="120,230 127,226 127,234" fill="#60a5fa" />
      <text
        x="350"
        y="220"
        textAnchor="middle"
        fill="#60a5fa"
        fontSize="9"
        fontFamily="monospace"
      >
        5. Sync Complete
      </text>

      <text
        x="350"
        y="270"
        textAnchor="middle"
        fill="#666"
        fontSize="8"
        fontFamily="monospace"
      >
        Synchronous confirmation — Alice knows immediately if Bob accepted
      </text>
    </svg>
  )
}

export function NodesProtocolSection() {
  return (
    <section id="nodes-protocol" className="landing-section">
      <div className="container-custom">
        <p className="section-label">Network</p>
        <h2 className="landing-heading mb-4">Nodes & Protocol</h2>
        <p className="landing-subheading mb-12">
          epress nodes communicate via the Ethereum Wire Protocol (EWP) — an
          open protocol for content distribution. Each node stores content,
          manages follows, and syncs with peers.
        </p>

        <MiniDiagram className="mb-8">
          <FollowHandshakeDiagram />
        </MiniDiagram>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-6 rounded-xl border border-dark-border bg-dark-surface/50">
            <h3 className="text-lg font-semibold text-white mb-3">
              EWP Interfaces
            </h3>
            <ul className="space-y-2 text-sm text-dark-muted">
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                <span>
                  <strong className="text-dark-text">Follow</strong> — Subscribe
                  to a publisher&apos;s content
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                <span>
                  <strong className="text-dark-text">Unfollow</strong> —
                  Unsubscribe from a publisher
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                <span>
                  <strong className="text-dark-text">Publish</strong> —
                  Broadcast new content to followers
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                <span>
                  <strong className="text-dark-text">Pull</strong> — Fetch
                  content from peer nodes
                </span>
              </li>
            </ul>
          </div>

          <div className="p-6 rounded-xl border border-dark-border bg-dark-surface/50">
            <h3 className="text-lg font-semibold text-white mb-3">
              Node Types
            </h3>
            <ul className="space-y-2 text-sm text-dark-muted">
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                <span>
                  <strong className="text-dark-text">Home Node</strong> — Your
                  personal server, stores your data
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                <span>
                  <strong className="text-dark-text">Public Node</strong> — Open
                  relay for content discovery
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                <span>
                  <strong className="text-dark-text">Browser Client</strong> —
                  Light client for reading only
                </span>
              </li>
            </ul>
          </div>

          <div className="p-6 rounded-xl border border-dark-border bg-dark-surface/50">
            <h3 className="text-lg font-semibold text-white mb-3">
              Synchronous Follow
            </h3>
            <p className="text-sm text-dark-muted leading-relaxed">
              When you follow someone, the protocol confirms success or failure
              immediately. No uncertainty about whether your follow went through
              — you&apos;ll know right away if they accepted.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

import { MiniDiagram } from "@/components/shared/mini-diagram"

function NetworkTopologyDiagram() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8 w-full">
      <div className="flex-1 w-full max-w-sm">
        <p className="text-xs font-mono text-dark-muted uppercase tracking-wider mb-4 text-center">
          Traditional Network
        </p>
        <svg
          viewBox="0 0 300 260"
          className="w-full h-auto"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <radialGradient id="centralGrad" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#2a1a1a" />
              <stop offset="100%" stopColor="#1a0a0a" />
            </radialGradient>
          </defs>

          <line
            x1="150"
            y1="80"
            x2="150"
            y2="40"
            stroke="#444"
            strokeWidth="1.5"
          />
          <line
            x1="150"
            y1="80"
            x2="75"
            y2="110"
            stroke="#444"
            strokeWidth="1.5"
          />
          <line
            x1="150"
            y1="80"
            x2="225"
            y2="110"
            stroke="#444"
            strokeWidth="1.5"
          />
          <line
            x1="150"
            y1="80"
            x2="100"
            y2="190"
            stroke="#444"
            strokeWidth="1.5"
          />
          <line
            x1="150"
            y1="80"
            x2="200"
            y2="190"
            stroke="#444"
            strokeWidth="1.5"
          />

          <circle
            cx="150"
            cy="80"
            r="40"
            fill="url(#centralGrad)"
            stroke="#ef4444"
            strokeWidth="2"
          />
          <text
            x="150"
            y="75"
            textAnchor="middle"
            fill="#ef4444"
            fontSize="9"
            fontFamily="monospace"
            fontWeight="bold"
          >
            Central
          </text>
          <text
            x="150"
            y="88"
            textAnchor="middle"
            fill="#ef4444"
            fontSize="9"
            fontFamily="monospace"
            fontWeight="bold"
          >
            Server
          </text>
          <text
            x="150"
            y="105"
            textAnchor="middle"
            fill="#666"
            fontSize="7"
            fontFamily="monospace"
            fontStyle="italic"
          >
            owns your data
          </text>

          <circle
            cx="150"
            cy="30"
            r="18"
            fill="#0f0f0f"
            stroke="#666"
            strokeWidth="1.5"
          />
          <text
            x="150"
            y="34"
            textAnchor="middle"
            fill="#888"
            fontSize="7"
            fontFamily="monospace"
          >
            User
          </text>

          <circle
            cx="60"
            cy="115"
            r="18"
            fill="#0f0f0f"
            stroke="#666"
            strokeWidth="1.5"
          />
          <text
            x="60"
            y="119"
            textAnchor="middle"
            fill="#888"
            fontSize="7"
            fontFamily="monospace"
          >
            User
          </text>

          <circle
            cx="240"
            cy="115"
            r="18"
            fill="#0f0f0f"
            stroke="#666"
            strokeWidth="1.5"
          />
          <text
            x="240"
            y="119"
            textAnchor="middle"
            fill="#888"
            fontSize="7"
            fontFamily="monospace"
          >
            User
          </text>

          <circle
            cx="90"
            cy="200"
            r="18"
            fill="#0f0f0f"
            stroke="#666"
            strokeWidth="1.5"
          />
          <text
            x="90"
            y="204"
            textAnchor="middle"
            fill="#888"
            fontSize="7"
            fontFamily="monospace"
          >
            User
          </text>

          <circle
            cx="210"
            cy="200"
            r="18"
            fill="#0f0f0f"
            stroke="#666"
            strokeWidth="1.5"
          />
          <text
            x="210"
            y="204"
            textAnchor="middle"
            fill="#888"
            fontSize="7"
            fontFamily="monospace"
          >
            User
          </text>

          <text
            x="150"
            y="248"
            textAnchor="middle"
            fill="#666"
            fontSize="8"
            fontFamily="monospace"
          >
            All traffic routes through one point
          </text>
        </svg>
      </div>

      <div className="flex flex-col items-center gap-2">
        <div className="hidden md:block w-px h-20 bg-dark-border" />
        <span className="text-xs font-mono text-dark-muted uppercase tracking-wider bg-dark-bg px-3 py-1 rounded">
          VS
        </span>
        <div className="hidden md:block w-px h-20 bg-dark-border" />
      </div>

      <div className="flex-1 w-full max-w-sm">
        <p className="text-xs font-mono text-dark-muted uppercase tracking-wider mb-4 text-center">
          epress Network
        </p>
        <svg
          viewBox="0 0 300 260"
          className="w-full h-auto"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <radialGradient id="nodeGrad" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#1a1508" />
              <stop offset="100%" stopColor="#0f0f0f" />
            </radialGradient>
          </defs>

          <line
            x1="80"
            y1="60"
            x2="150"
            y2="45"
            stroke="#F7931A"
            strokeWidth="1.5"
            opacity="0.6"
          />
          <text
            x="115"
            y="45"
            fill="#F7931A"
            fontSize="6"
            fontFamily="monospace"
          >
            EWP
          </text>

          <line
            x1="150"
            y1="45"
            x2="220"
            y2="60"
            stroke="#F7931A"
            strokeWidth="1.5"
            opacity="0.6"
          />
          <text
            x="185"
            y="45"
            fill="#F7931A"
            fontSize="6"
            fontFamily="monospace"
          >
            EWP
          </text>

          <line
            x1="80"
            y1="60"
            x2="60"
            y2="130"
            stroke="#F7931A"
            strokeWidth="1.5"
            opacity="0.6"
          />
          <text
            x="58"
            y="95"
            fill="#F7931A"
            fontSize="6"
            fontFamily="monospace"
          >
            EWP
          </text>

          <line
            x1="220"
            y1="60"
            x2="240"
            y2="130"
            stroke="#F7931A"
            strokeWidth="1.5"
            opacity="0.6"
          />
          <text
            x="235"
            y="95"
            fill="#F7931A"
            fontSize="6"
            fontFamily="monospace"
          >
            EWP
          </text>

          <line
            x1="60"
            y1="130"
            x2="100"
            y2="200"
            stroke="#F7931A"
            strokeWidth="1.5"
            opacity="0.6"
          />
          <text
            x="70"
            y="165"
            fill="#F7931A"
            fontSize="6"
            fontFamily="monospace"
          >
            EWP
          </text>

          <line
            x1="240"
            y1="130"
            x2="200"
            y2="200"
            stroke="#F7931A"
            strokeWidth="1.5"
            opacity="0.6"
          />
          <text
            x="225"
            y="165"
            fill="#F7931A"
            fontSize="6"
            fontFamily="monospace"
          >
            EWP
          </text>

          <line
            x1="100"
            y1="200"
            x2="200"
            y2="200"
            stroke="#F7931A"
            strokeWidth="1.5"
            opacity="0.6"
          />
          <text
            x="150"
            y="192"
            fill="#F7931A"
            fontSize="6"
            fontFamily="monospace"
          >
            EWP
          </text>

          <line
            x1="150"
            y1="45"
            x2="150"
            y2="130"
            stroke="#F7931A"
            strokeWidth="1.5"
            opacity="0.4"
          />

          <circle
            cx="80"
            cy="60"
            r="22"
            fill="url(#nodeGrad)"
            stroke="#F7931A"
            strokeWidth="1.5"
          />
          <text
            x="80"
            y="64"
            textAnchor="middle"
            fill="#F7931A"
            fontSize="7"
            fontFamily="monospace"
          >
            Node
          </text>

          <circle
            cx="150"
            cy="45"
            r="26"
            fill="url(#nodeGrad)"
            stroke="#e8a04a"
            strokeWidth="2"
          />
          <text
            x="150"
            y="42"
            textAnchor="middle"
            fill="#e8a04a"
            fontSize="6"
            fontFamily="monospace"
          >
            Your
          </text>
          <text
            x="150"
            y="52"
            textAnchor="middle"
            fill="#e8a04a"
            fontSize="7"
            fontFamily="monospace"
            fontWeight="bold"
          >
            Node
          </text>

          <circle
            cx="220"
            cy="60"
            r="22"
            fill="url(#nodeGrad)"
            stroke="#F7931A"
            strokeWidth="1.5"
          />
          <text
            x="220"
            y="64"
            textAnchor="middle"
            fill="#F7931A"
            fontSize="7"
            fontFamily="monospace"
          >
            Node
          </text>

          <circle
            cx="60"
            cy="130"
            r="22"
            fill="url(#nodeGrad)"
            stroke="#F7931A"
            strokeWidth="1.5"
          />
          <text
            x="60"
            y="134"
            textAnchor="middle"
            fill="#F7931A"
            fontSize="7"
            fontFamily="monospace"
          >
            Node
          </text>

          <circle
            cx="240"
            cy="130"
            r="22"
            fill="url(#nodeGrad)"
            stroke="#F7931A"
            strokeWidth="1.5"
          />
          <text
            x="240"
            y="134"
            textAnchor="middle"
            fill="#F7931A"
            fontSize="7"
            fontFamily="monospace"
          >
            Node
          </text>

          <circle
            cx="100"
            cy="200"
            r="22"
            fill="url(#nodeGrad)"
            stroke="#F7931A"
            strokeWidth="1.5"
          />
          <text
            x="100"
            y="204"
            textAnchor="middle"
            fill="#F7931A"
            fontSize="7"
            fontFamily="monospace"
          >
            Node
          </text>

          <circle
            cx="200"
            cy="200"
            r="22"
            fill="url(#nodeGrad)"
            stroke="#F7931A"
            strokeWidth="1.5"
          />
          <text
            x="200"
            y="204"
            textAnchor="middle"
            fill="#F7931A"
            fontSize="7"
            fontFamily="monospace"
          >
            Node
          </text>

          <text
            x="150"
            y="248"
            textAnchor="middle"
            fill="#34D399"
            fontSize="8"
            fontFamily="monospace"
          >
            No single point of failure or control
          </text>
        </svg>
      </div>
    </div>
  )
}

export function NodesProtocolSection() {
  return (
    <section id="nodes-protocol" className="landing-section">
      <div className="container-custom">
        <p className="section-label">Network</p>
        <h2 className="landing-heading mb-4">Nodes & Protocol</h2>
        <p className="landing-subheading mb-12">
          epress nodes communicate via the epress world protocol (EWP) — an open
          protocol for content distribution. Each node stores content, manages
          follows, and syncs with peers.
        </p>

        <MiniDiagram className="mb-8">
          <NetworkTopologyDiagram />
        </MiniDiagram>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="p-6 rounded-xl border border-dark-border bg-dark-surface/50">
            <h3 className="text-lg font-semibold text-white mb-3">
              No Central Server
            </h3>
            <p className="text-sm text-dark-muted leading-relaxed">
              Nodes communicate directly with each other. No company owns the
              network infrastructure.
            </p>
          </div>

          <div className="p-6 rounded-xl border border-dark-border bg-dark-surface/50">
            <h3 className="text-lg font-semibold text-white mb-3">
              Open Protocol
            </h3>
            <p className="text-sm text-dark-muted leading-relaxed">
              EWP is public. Anyone can implement a compatible node in any
              language.
            </p>
          </div>

          <div className="p-6 rounded-xl border border-dark-border bg-dark-surface/50">
            <h3 className="text-lg font-semibold text-white mb-3">
              Equal Peers
            </h3>
            <p className="text-sm text-dark-muted leading-relaxed">
              Every node has identical capabilities. No privileged nodes, no
              gatekeepers.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

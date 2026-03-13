import { MiniDiagram } from "@/components/shared/mini-diagram"

function NetworkTopologyDiagram() {
  return (
    <svg
      viewBox="0 0 520 360"
      className="w-full h-auto max-w-2xl mx-auto"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <marker
          id="arrowOrange"
          markerWidth="8"
          markerHeight="8"
          refX="7"
          refY="4"
          orient="auto"
        >
          <polygon points="0,0 8,4 0,8" fill="#F7931A" opacity="0.7" />
        </marker>
        <marker
          id="arrowOrangeReverse"
          markerWidth="8"
          markerHeight="8"
          refX="1"
          refY="4"
          orient="auto"
        >
          <polygon points="8,0 0,4 8,8" fill="#F7931A" opacity="0.7" />
        </marker>
        <marker
          id="arrowGray"
          markerWidth="8"
          markerHeight="8"
          refX="7"
          refY="4"
          orient="auto"
        >
          <polygon points="0,0 8,4 0,8" fill="#666" opacity="0.6" />
        </marker>
        <marker
          id="arrowGrayReverse"
          markerWidth="8"
          markerHeight="8"
          refX="1"
          refY="4"
          orient="auto"
        >
          <polygon points="8,0 0,4 8,8" fill="#666" opacity="0.6" />
        </marker>
      </defs>

      <line
        x1="175"
        y1="80"
        x2="330"
        y2="80"
        stroke="#F7931A"
        strokeWidth="1.5"
        strokeOpacity="0.6"
        markerStart="url(#arrowOrangeReverse)"
        markerEnd="url(#arrowOrange)"
      />
      <text
        x="252"
        y="72"
        textAnchor="middle"
        fill="#888"
        fontSize="9"
        fontFamily="monospace"
      >
        EWP
      </text>

      <line
        x1="90"
        y1="135"
        x2="90"
        y2="220"
        stroke="#666"
        strokeWidth="1.5"
        strokeOpacity="0.5"
        markerStart="url(#arrowGrayReverse)"
        markerEnd="url(#arrowGray)"
      />
      <text x="75" y="182" fill="#666" fontSize="9" fontFamily="monospace">
        EWP
      </text>

      <line
        x1="175"
        y1="275"
        x2="330"
        y2="275"
        stroke="#666"
        strokeWidth="1.5"
        strokeOpacity="0.5"
        markerStart="url(#arrowGrayReverse)"
        markerEnd="url(#arrowGray)"
      />
      <text
        x="252"
        y="267"
        textAnchor="middle"
        fill="#666"
        fontSize="9"
        fontFamily="monospace"
      >
        EWP
      </text>

      <line
        x1="415"
        y1="135"
        x2="415"
        y2="220"
        stroke="#666"
        strokeWidth="1.5"
        strokeOpacity="0.5"
        markerStart="url(#arrowGrayReverse)"
        markerEnd="url(#arrowGray)"
      />
      <text x="430" y="182" fill="#666" fontSize="9" fontFamily="monospace">
        EWP
      </text>

      <line
        x1="175"
        y1="95"
        x2="330"
        y2="260"
        stroke="#F7931A"
        strokeWidth="1.5"
        strokeOpacity="0.4"
        strokeDasharray="4 3"
        markerStart="url(#arrowOrangeReverse)"
        markerEnd="url(#arrowOrange)"
      />
      <text
        x="265"
        y="175"
        fill="#888"
        fontSize="8"
        fontFamily="monospace"
        opacity="0.7"
      >
        EWP
      </text>

      <line
        x1="175"
        y1="260"
        x2="330"
        y2="95"
        stroke="#666"
        strokeWidth="1.5"
        strokeOpacity="0.3"
        strokeDasharray="4 3"
        markerStart="url(#arrowGrayReverse)"
        markerEnd="url(#arrowGray)"
      />

      <g>
        <rect
          x="10"
          y="20"
          width="160"
          height="115"
          rx="8"
          fill="#1a1a1a"
          stroke="#F7931A"
          strokeWidth="2.5"
        />
        <text
          x="90"
          y="48"
          textAnchor="middle"
          fill="#F7931A"
          fontSize="11"
          fontFamily="monospace"
          fontWeight="bold"
        >
          Your Node
        </text>
        <text x="30" y="72" fill="#888" fontSize="9" fontFamily="monospace">
          · Content
        </text>
        <text x="30" y="88" fill="#888" fontSize="9" fontFamily="monospace">
          · Connections
        </text>
        <text x="30" y="104" fill="#888" fontSize="9" fontFamily="monospace">
          · Profile
        </text>
        <rect
          x="110"
          y="108"
          width="54"
          height="18"
          rx="9"
          fill="#22c55e"
          fillOpacity="0.2"
          stroke="#22c55e"
          strokeWidth="1"
        />
        <text
          x="137"
          y="121"
          textAnchor="middle"
          fill="#22c55e"
          fontSize="8"
          fontFamily="monospace"
        >
          self-hosted
        </text>
      </g>

      <g>
        <rect
          x="335"
          y="20"
          width="160"
          height="115"
          rx="8"
          fill="#1a1a1a"
          stroke="#444"
          strokeWidth="1.5"
        />
        <text
          x="415"
          y="48"
          textAnchor="middle"
          fill="#aaa"
          fontSize="10"
          fontFamily="monospace"
        >
          Node B
        </text>
        <text x="355" y="72" fill="#888" fontSize="9" fontFamily="monospace">
          · Content
        </text>
        <text x="355" y="88" fill="#888" fontSize="9" fontFamily="monospace">
          · Connections
        </text>
        <text x="355" y="104" fill="#888" fontSize="9" fontFamily="monospace">
          · Profile
        </text>
      </g>

      <g>
        <rect
          x="10"
          y="225"
          width="160"
          height="115"
          rx="8"
          fill="#1a1a1a"
          stroke="#444"
          strokeWidth="1.5"
        />
        <text
          x="90"
          y="253"
          textAnchor="middle"
          fill="#aaa"
          fontSize="10"
          fontFamily="monospace"
        >
          Node C
        </text>
        <text x="30" y="277" fill="#888" fontSize="9" fontFamily="monospace">
          · Content
        </text>
        <text x="30" y="293" fill="#888" fontSize="9" fontFamily="monospace">
          · Connections
        </text>
        <text x="30" y="309" fill="#888" fontSize="9" fontFamily="monospace">
          · Profile
        </text>
      </g>

      <g>
        <rect
          x="335"
          y="225"
          width="160"
          height="115"
          rx="8"
          fill="#1a1a1a"
          stroke="#444"
          strokeWidth="1.5"
        />
        <text
          x="415"
          y="253"
          textAnchor="middle"
          fill="#aaa"
          fontSize="10"
          fontFamily="monospace"
        >
          Node D
        </text>
        <text x="355" y="277" fill="#888" fontSize="9" fontFamily="monospace">
          · Content
        </text>
        <text x="355" y="293" fill="#888" fontSize="9" fontFamily="monospace">
          · Connections
        </text>
        <text x="355" y="309" fill="#888" fontSize="9" fontFamily="monospace">
          · Profile
        </text>
      </g>
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

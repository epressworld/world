import { MiniDiagram } from "@/components/shared/mini-diagram"

function ContentFlowDiagram() {
  return (
    <svg
      viewBox="0 0 800 400"
      className="w-full h-auto"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <marker
          id="arrowDashed"
          markerWidth="8"
          markerHeight="8"
          refX="7"
          refY="4"
          orient="auto"
        >
          <polygon points="0,0 8,4 0,8" fill="#F7931A" opacity="0.6" />
        </marker>
      </defs>

      <g>
        <rect
          x="20"
          y="140"
          width="130"
          height="90"
          rx="8"
          fill="#1a1a1a"
          stroke="#F7931A"
          strokeWidth="2"
        />
        <text
          x="85"
          y="168"
          textAnchor="middle"
          fill="#F7931A"
          fontSize="10"
          fontFamily="monospace"
          fontWeight="bold"
        >
          Alice&apos;s Node
        </text>
        <text x="40" y="190" fill="#888" fontSize="9" fontFamily="monospace">
          Signs content
        </text>
        <text x="40" y="206" fill="#888" fontSize="9" fontFamily="monospace">
          Generates PoS
        </text>

        <rect
          x="25"
          y="245"
          width="120"
          height="50"
          rx="6"
          fill="#0f0f0f"
          stroke="#34D399"
          strokeWidth="1.5"
          strokeDasharray="4 2"
        />
        <text
          x="85"
          y="268"
          textAnchor="middle"
          fill="#34D399"
          fontSize="8"
          fontFamily="monospace"
        >
          {"{"} hash · address
        </text>
        <text
          x="85"
          y="282"
          textAnchor="middle"
          fill="#34D399"
          fontSize="8"
          fontFamily="monospace"
        >
          timestamp · sig {"}"}
        </text>
      </g>

      <line
        x1="155"
        y1="155"
        x2="285"
        y2="95"
        stroke="#F7931A"
        strokeWidth="1.5"
        strokeDasharray="5 3"
        strokeOpacity="0.5"
        markerEnd="url(#arrowDashed)"
      />
      <text
        x="210"
        y="115"
        fill="#F7931A"
        fontSize="7"
        fontFamily="monospace"
        opacity="0.7"
      >
        PoS only · ~200 bytes
      </text>

      <line
        x1="155"
        y1="180"
        x2="285"
        y2="180"
        stroke="#F7931A"
        strokeWidth="1.5"
        strokeDasharray="5 3"
        strokeOpacity="0.5"
        markerEnd="url(#arrowDashed)"
      />
      <text
        x="210"
        y="172"
        fill="#F7931A"
        fontSize="7"
        fontFamily="monospace"
        opacity="0.7"
      >
        PoS only · ~200 bytes
      </text>

      <line
        x1="155"
        y1="215"
        x2="285"
        y2="265"
        stroke="#F7931A"
        strokeWidth="1.5"
        strokeDasharray="5 3"
        strokeOpacity="0.5"
        markerEnd="url(#arrowDashed)"
      />
      <text
        x="210"
        y="250"
        fill="#F7931A"
        fontSize="7"
        fontFamily="monospace"
        opacity="0.7"
      >
        PoS only · ~200 bytes
      </text>

      <g>
        <rect
          x="290"
          y="60"
          width="110"
          height="55"
          rx="6"
          fill="#1a1a1a"
          stroke="#444"
          strokeWidth="1.5"
        />
        <text
          x="345"
          y="85"
          textAnchor="middle"
          fill="#aaa"
          fontSize="9"
          fontFamily="monospace"
        >
          Bob&apos;s Node
        </text>
        <text x="305" y="102" fill="#666" fontSize="7" fontFamily="monospace">
          verify → pull → store
        </text>
      </g>

      <g>
        <rect
          x="290"
          y="145"
          width="110"
          height="55"
          rx="6"
          fill="#1a1a1a"
          stroke="#444"
          strokeWidth="1.5"
        />
        <text
          x="345"
          y="170"
          textAnchor="middle"
          fill="#aaa"
          fontSize="9"
          fontFamily="monospace"
        >
          Carol&apos;s Node
        </text>
        <text x="305" y="187" fill="#666" fontSize="7" fontFamily="monospace">
          verify → pull → store
        </text>
      </g>

      <g>
        <rect
          x="290"
          y="230"
          width="110"
          height="55"
          rx="6"
          fill="#1a1a1a"
          stroke="#444"
          strokeWidth="1.5"
        />
        <text
          x="345"
          y="255"
          textAnchor="middle"
          fill="#aaa"
          fontSize="9"
          fontFamily="monospace"
        >
          Dave&apos;s Node
        </text>
        <text x="305" y="272" fill="#666" fontSize="7" fontFamily="monospace">
          verify → pull → store
        </text>
      </g>

      <g>
        <rect
          x="430"
          y="60"
          width="100"
          height="55"
          rx="6"
          fill="#0f0f0f"
          stroke="#34D399"
          strokeWidth="1"
        />
        <text
          x="480"
          y="82"
          textAnchor="middle"
          fill="#34D399"
          fontSize="8"
          fontFamily="monospace"
        >
          Local Replica
        </text>
        <text x="445" y="100" fill="#666" fontSize="7" fontFamily="monospace">
          Content + PoS ✓
        </text>
      </g>

      <g>
        <rect
          x="430"
          y="145"
          width="100"
          height="55"
          rx="6"
          fill="#0f0f0f"
          stroke="#34D399"
          strokeWidth="1"
        />
        <text
          x="480"
          y="167"
          textAnchor="middle"
          fill="#34D399"
          fontSize="8"
          fontFamily="monospace"
        >
          Local Replica
        </text>
        <text x="445" y="185" fill="#666" fontSize="7" fontFamily="monospace">
          Content + PoS ✓
        </text>
      </g>

      <g>
        <rect
          x="430"
          y="230"
          width="100"
          height="55"
          rx="6"
          fill="#0f0f0f"
          stroke="#34D399"
          strokeWidth="1"
        />
        <text
          x="480"
          y="252"
          textAnchor="middle"
          fill="#34D399"
          fontSize="8"
          fontFamily="monospace"
        >
          Local Replica
        </text>
        <text x="445" y="270" fill="#666" fontSize="7" fontFamily="monospace">
          Content + PoS ✓
        </text>
      </g>

      <line
        x1="480"
        y1="290"
        x2="480"
        y2="325"
        stroke="#F7931A"
        strokeWidth="1.5"
        strokeDasharray="4 3"
        strokeOpacity="0.6"
      />
      <polygon points="480,335 475,325 485,325" fill="#F7931A" opacity="0.6" />

      <g>
        <rect
          x="350"
          y="340"
          width="260"
          height="50"
          rx="8"
          fill="#1a1a1a"
          stroke="#F7931A"
          strokeWidth="2"
        />
        <text
          x="480"
          y="362"
          textAnchor="middle"
          fill="#F7931A"
          fontSize="10"
          fontFamily="monospace"
          fontWeight="bold"
        >
          Local Timeline ↓
        </text>
        <text
          x="480"
          y="380"
          textAnchor="middle"
          fill="#666"
          fontSize="8"
          fontFamily="monospace"
        >
          Content lives here. Timeline builds from this.
        </text>
      </g>
    </svg>
  )
}

export function ContentFlowSection() {
  return (
    <section id="content-flow" className="landing-section bg-dark-surface/40">
      <div className="container-custom">
        <p className="section-label">Distribution</p>
        <h2 className="landing-heading mb-4">Content Flow</h2>
        <p className="landing-subheading mb-12 max-w-3xl">
          When you publish, content doesn&apos;t just reach your followers — it
          becomes permanently distributed across the network, each copy carrying
          its own cryptographic proof of origin.
        </p>

        <MiniDiagram className="mb-8 p-8 overflow-hidden">
          <ContentFlowDiagram />
        </MiniDiagram>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <div className="p-6 rounded-xl border border-primary/30 bg-gradient-to-br from-primary/10 to-dark-surface/50">
            <h3 className="text-lg font-semibold text-primary mb-3">
              PoS Travels With Content
            </h3>
            <p className="text-sm text-dark-muted leading-relaxed">
              Every replica carries the original cryptographic proof.
              Authenticity is verifiable anywhere in the network, without
              contacting Alice&apos;s node.
            </p>
          </div>

          <div className="p-6 rounded-xl border border-[#34D399]/30 bg-gradient-to-br from-[#34D399]/10 to-dark-surface/50">
            <h3 className="text-lg font-semibold text-[#34D399] mb-3">
              Local Storage Enables Local Timeline
            </h3>
            <p className="text-sm text-dark-muted leading-relaxed">
              Because each follower node stores content replicas locally, your
              timeline is generated entirely on your own node — no central
              server involved.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

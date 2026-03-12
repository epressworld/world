import { MiniDiagram } from "@/components/shared/mini-diagram"

function ProofOfSourceDiagram() {
  return (
    <svg
      viewBox="0 0 700 320"
      className="w-full h-auto"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="posGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F7931A" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#F7931A" stopOpacity="0.1" />
        </linearGradient>
      </defs>

      <rect
        x="270"
        y="20"
        width="160"
        height="160"
        rx="12"
        fill="url(#posGrad)"
        stroke="#F7931A"
        strokeWidth="2"
      />
      <text
        x="350"
        y="45"
        textAnchor="middle"
        fill="#F7931A"
        fontSize="12"
        fontFamily="monospace"
        fontWeight="bold"
      >
        Proof of Source (PoS)
      </text>

      <rect
        x="290"
        y="60"
        width="120"
        height="110"
        rx="6"
        fill="#0f0f0f"
        stroke="#F7931A"
        strokeOpacity="0.5"
      />
      <text
        x="350"
        y="80"
        textAnchor="middle"
        fill="#34D399"
        fontSize="10"
        fontFamily="monospace"
      >
        Statement of Source (SoS)
      </text>

      <rect
        x="300"
        y="90"
        width="100"
        height="18"
        rx="3"
        fill="#1a1a1a"
        stroke="#444"
      />
      <text
        x="350"
        y="103"
        textAnchor="middle"
        fill="#888"
        fontSize="8"
        fontFamily="monospace"
      >
        contentHash
      </text>

      <rect
        x="300"
        y="112"
        width="100"
        height="18"
        rx="3"
        fill="#1a1a1a"
        stroke="#444"
      />
      <text
        x="350"
        y="125"
        textAnchor="middle"
        fill="#888"
        fontSize="8"
        fontFamily="monospace"
      >
        publisherAddress
      </text>

      <rect
        x="300"
        y="134"
        width="100"
        height="18"
        rx="3"
        fill="#1a1a1a"
        stroke="#444"
      />
      <text
        x="350"
        y="147"
        textAnchor="middle"
        fill="#888"
        fontSize="8"
        fontFamily="monospace"
      >
        timestamp
      </text>

      <rect
        x="300"
        y="156"
        width="100"
        height="18"
        rx="3"
        fill="#1a1a1a"
        stroke="#444"
      />
      <text
        x="350"
        y="169"
        textAnchor="middle"
        fill="#888"
        fontSize="8"
        fontFamily="monospace"
      >
        signature
      </text>

      <rect
        x="30"
        y="200"
        width="80"
        height="50"
        rx="6"
        fill="#1a1a1a"
        stroke="#444"
      />
      <text
        x="70"
        y="220"
        textAnchor="middle"
        fill="#888"
        fontSize="9"
        fontFamily="monospace"
      >
        Content
      </text>
      <text x="70" y="238" textAnchor="middle" fontSize="14">
        📝
      </text>

      <line
        x1="115"
        y1="225"
        x2="145"
        y2="225"
        stroke="#666"
        strokeWidth="1.5"
      />
      <polygon points="145,225 140,222 140,228" fill="#666" />

      <rect
        x="150"
        y="200"
        width="80"
        height="50"
        rx="6"
        fill="#1a1a1a"
        stroke="#F7931A"
      />
      <text
        x="190"
        y="220"
        textAnchor="middle"
        fill="#F7931A"
        fontSize="8"
        fontFamily="monospace"
      >
        SHA-256
      </text>
      <text
        x="190"
        y="238"
        textAnchor="middle"
        fill="#666"
        fontSize="7"
        fontFamily="monospace"
      >
        Hash
      </text>

      <line
        x1="235"
        y1="225"
        x2="265"
        y2="225"
        stroke="#666"
        strokeWidth="1.5"
      />
      <polygon points="265,225 260,222 260,228" fill="#666" />

      <rect
        x="270"
        y="200"
        width="80"
        height="50"
        rx="6"
        fill="url(#posGrad)"
        stroke="#F7931A"
      />
      <text
        x="310"
        y="220"
        textAnchor="middle"
        fill="#F7931A"
        fontSize="9"
        fontFamily="monospace"
      >
        SoS
      </text>
      <text
        x="310"
        y="238"
        textAnchor="middle"
        fill="#666"
        fontSize="7"
        fontFamily="monospace"
      >
        Build
      </text>

      <line
        x1="355"
        y1="225"
        x2="385"
        y2="225"
        stroke="#666"
        strokeWidth="1.5"
      />
      <polygon points="385,225 380,222 380,228" fill="#666" />

      <rect
        x="390"
        y="200"
        width="80"
        height="50"
        rx="6"
        fill="#1a1a1a"
        stroke="#34D399"
      />
      <text
        x="430"
        y="220"
        textAnchor="middle"
        fill="#34D399"
        fontSize="9"
        fontFamily="monospace"
      >
        Sign
      </text>
      <text x="430" y="238" textAnchor="middle" fontSize="12">
        ✍️
      </text>

      <line
        x1="475"
        y1="225"
        x2="505"
        y2="225"
        stroke="#666"
        strokeWidth="1.5"
      />
      <polygon points="505,225 500,222 500,228" fill="#666" />

      <rect
        x="510"
        y="200"
        width="80"
        height="50"
        rx="6"
        fill="url(#posGrad)"
        stroke="#F7931A"
        strokeWidth="2"
      />
      <text
        x="550"
        y="220"
        textAnchor="middle"
        fill="#F7931A"
        fontSize="10"
        fontFamily="monospace"
        fontWeight="bold"
      >
        PoS
      </text>
      <text
        x="550"
        y="238"
        textAnchor="middle"
        fill="#666"
        fontSize="7"
        fontFamily="monospace"
      >
        Created
      </text>

      <line
        x1="550"
        y1="255"
        x2="550"
        y2="280"
        stroke="#666"
        strokeWidth="1.5"
      />
      <polygon points="550,280 547,275 553,275" fill="#666" />

      <rect
        x="500"
        y="285"
        width="100"
        height="30"
        rx="6"
        fill="#0f0f0f"
        stroke="#34D399"
      />
      <text
        x="550"
        y="305"
        textAnchor="middle"
        fill="#34D399"
        fontSize="9"
        fontFamily="monospace"
      >
        Verify ✓
      </text>

      <text
        x="350"
        y="290"
        textAnchor="middle"
        fill="#666"
        fontSize="8"
        fontFamily="monospace"
      >
        Anyone can verify: content hash → matches SoS → signature valid →
        publisher confirmed
      </text>
    </svg>
  )
}

export function ProofOfSourceSection() {
  return (
    <section
      id="proof-of-source"
      className="landing-section bg-dark-surface/40"
    >
      <div className="container-custom">
        <p className="section-label">Verification</p>
        <h2 className="landing-heading mb-4">Proof of Source</h2>
        <p className="landing-subheading mb-12">
          Every piece of content on epress comes with cryptographic proof of its
          origin. The Proof of Source (PoS) contains a Statement of Source (SoS)
          structure that binds content to its publisher.
        </p>

        <MiniDiagram className="mb-8">
          <ProofOfSourceDiagram />
        </MiniDiagram>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-6 rounded-xl border border-dark-border bg-dark-surface/50">
            <h3 className="text-lg font-semibold text-white mb-3">
              Statement of Source (SoS)
            </h3>
            <ul className="space-y-2 text-sm text-dark-muted">
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                <span>
                  <strong className="text-dark-text">contentHash</strong> —
                  SHA-256 hash of the content
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                <span>
                  <strong className="text-dark-text">publisherAddress</strong> —
                  Ethereum address of the publisher
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                <span>
                  <strong className="text-dark-text">timestamp</strong> — When
                  the content was signed
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                <span>
                  <strong className="text-dark-text">signature</strong> —
                  EIP-712 typed signature
                </span>
              </li>
            </ul>
          </div>

          <div className="p-6 rounded-xl border border-dark-border bg-dark-surface/50">
            <h3 className="text-lg font-semibold text-white mb-3">
              Why It Matters
            </h3>
            <ul className="space-y-2 text-sm text-dark-muted">
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                <span>Content cannot be forged or attributed falsely</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                <span>
                  Anyone can verify authenticity without a trusted third party
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                <span>
                  Timestamps are cryptographically bound, not server claims
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                <span>Builds trust through mathematics, not platforms</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

function ProofOfSourceDiagramDesktop() {
  return (
    <svg
      viewBox="0 0 800 540"
      className="w-full h-auto hidden md:block"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="posGradNew" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#e8a04a" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#e8a04a" stopOpacity="0.05" />
        </linearGradient>
      </defs>

      {}
      <rect
        x="40"
        y="20"
        width="120"
        height="80"
        rx="8"
        fill="#1a1a1a"
        stroke="#666"
        strokeWidth="1.5"
      />
      <text x="100" y="48" textAnchor="middle" fontSize="18">
        📄
      </text>
      <text
        x="100"
        y="68"
        textAnchor="middle"
        fill="#888"
        fontSize="10"
        fontFamily="monospace"
      >
        Content
      </text>
      <text
        x="100"
        y="82"
        textAnchor="middle"
        fill="#555"
        fontSize="8"
        fontFamily="monospace"
      >
        original content
      </text>

      <line
        x1="165"
        y1="60"
        x2="195"
        y2="60"
        stroke="#e8a04a"
        strokeWidth="2"
      />
      <polygon points="195,60 188,56 188,64" fill="#e8a04a" />

      <rect
        x="200"
        y="20"
        width="120"
        height="80"
        rx="8"
        fill="#1a1a1a"
        stroke="#e8a04a"
        strokeWidth="1.5"
      />
      <text
        x="260"
        y="48"
        textAnchor="middle"
        fill="#e8a04a"
        fontSize="11"
        fontFamily="monospace"
      >
        SHA-256
      </text>
      <text
        x="260"
        y="68"
        textAnchor="middle"
        fill="#666"
        fontSize="9"
        fontFamily="monospace"
      >
        hash compute
      </text>

      <line
        x1="325"
        y1="60"
        x2="355"
        y2="60"
        stroke="#e8a04a"
        strokeWidth="2"
      />
      <polygon points="355,60 348,56 348,64" fill="#e8a04a" />

      <rect
        x="360"
        y="20"
        width="120"
        height="80"
        rx="8"
        fill="#251a10"
        stroke="#e8a04a"
        strokeWidth="1.5"
      />
      <text
        x="420"
        y="48"
        textAnchor="middle"
        fill="#e8a04a"
        fontSize="10"
        fontFamily="monospace"
      >
        contentHash
      </text>
      <text
        x="420"
        y="68"
        textAnchor="middle"
        fill="#666"
        fontSize="9"
        fontFamily="monospace"
      >
        0x8f3a...
      </text>

      <line
        x1="485"
        y1="60"
        x2="515"
        y2="60"
        stroke="#e8a04a"
        strokeWidth="2"
      />
      <polygon points="515,60 508,56 508,64" fill="#e8a04a" />

      <rect
        x="520"
        y="20"
        width="120"
        height="80"
        rx="8"
        fill="#1a1a1a"
        stroke="#4af0d4"
        strokeWidth="1.5"
      />
      <text x="580" y="48" textAnchor="middle" fontSize="16">
        ✍
      </text>
      <text
        x="580"
        y="68"
        textAnchor="middle"
        fill="#4af0d4"
        fontSize="10"
        fontFamily="monospace"
      >
        Sign
      </text>
      <text
        x="580"
        y="82"
        textAnchor="middle"
        fill="#555"
        fontSize="8"
        fontFamily="monospace"
      >
        private key
      </text>

      <line
        x1="645"
        y1="60"
        x2="675"
        y2="60"
        stroke="#e8a04a"
        strokeWidth="2"
      />
      <polygon points="675,60 668,56 668,64" fill="#e8a04a" />

      <rect
        x="680"
        y="20"
        width="100"
        height="80"
        rx="8"
        fill="url(#posGradNew)"
        stroke="#e8a04a"
        strokeWidth="2"
      />
      <text
        x="730"
        y="48"
        textAnchor="middle"
        fill="#e8a04a"
        fontSize="12"
        fontFamily="monospace"
        fontWeight="bold"
      >
        PoS ✓
      </text>
      <text
        x="730"
        y="68"
        textAnchor="middle"
        fill="#e8a04a"
        fontSize="8"
        fontFamily="monospace"
      >
        Proof of Source
      </text>

      <line
        x1="730"
        y1="105"
        x2="730"
        y2="145"
        stroke="#e8a04a"
        strokeWidth="2"
        strokeDasharray="6,4"
      />
      <polygon points="730,145 725,135 735,135" fill="#e8a04a" />

      {}
      <rect
        x="40"
        y="170"
        width="720"
        height="260"
        rx="12"
        fill="url(#posGradNew)"
        stroke="#e8a04a"
        strokeWidth="2"
      />
      <text
        x="400"
        y="200"
        textAnchor="middle"
        fill="#e8a04a"
        fontSize="14"
        fontFamily="monospace"
        fontWeight="bold"
      >
        Proof of Source (PoS)
      </text>

      {}
      <rect
        x="60"
        y="220"
        width="680"
        height="125"
        rx="8"
        fill="#0f1a18"
        stroke="#4af0d4"
        strokeWidth="1.5"
      />
      <text
        x="400"
        y="245"
        textAnchor="middle"
        fill="#4af0d4"
        fontSize="11"
        fontFamily="monospace"
      >
        Statement of Source (SoS)
      </text>

      {}
      <g transform="translate(80, 260)">
        <text x="0" y="14" fill="#888" fontSize="10" fontFamily="monospace">
          contentHash
        </text>
        <text x="180" y="14" fill="#666" fontSize="10" fontFamily="monospace">
          0x8f3a2b...
        </text>

        <line x1="0" y1="28" x2="640" y2="28" stroke="#333" strokeWidth="1" />

        <text x="0" y="46" fill="#888" fontSize="10" fontFamily="monospace">
          publisherAddress
        </text>
        <text x="180" y="46" fill="#666" fontSize="10" fontFamily="monospace">
          0x742d...
        </text>

        <line x1="0" y1="60" x2="640" y2="60" stroke="#333" strokeWidth="1" />

        <text x="0" y="78" fill="#888" fontSize="10" fontFamily="monospace">
          timestamp
        </text>
        <text x="180" y="78" fill="#666" fontSize="10" fontFamily="monospace">
          2026-03-13 10:17:00
        </text>
      </g>

      {}
      <rect
        x="60"
        y="360"
        width="680"
        height="40"
        rx="6"
        fill="#0f0f0f"
        stroke="#e8a04a"
        strokeWidth="1"
        strokeOpacity="0.6"
      />
      <text x="80" y="385" fill="#888" fontSize="10" fontFamily="monospace">
        signature:
      </text>
      <text x="155" y="385" fill="#e8a04a" fontSize="10" fontFamily="monospace">
        0x1f9c8e7a2b3c4d5e6f...
      </text>

      {}
      <text
        x="400"
        y="460"
        textAnchor="middle"
        fill="#666"
        fontSize="10"
        fontFamily="monospace"
      >
        Anyone can verify: SHA-256(content) = contentHash → signature valid →
        publisher confirmed
      </text>
      <text
        x="758"
        y="460"
        textAnchor="end"
        fill="#4af0d4"
        fontSize="10"
        fontFamily="monospace"
      >
        ✓
      </text>
    </svg>
  )
}

function ProofOfSourceDiagramMobile() {
  return (
    <svg
      viewBox="0 0 400 670"
      className="w-full h-auto md:hidden"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="posGradMobile" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#e8a04a" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#e8a04a" stopOpacity="0.05" />
        </linearGradient>
      </defs>

      {}
      <rect
        x="10"
        y="10"
        width="115"
        height="65"
        rx="6"
        fill="#1a1a1a"
        stroke="#666"
        strokeWidth="1"
      />
      <text x="67" y="32" textAnchor="middle" fontSize="14">
        📄
      </text>
      <text
        x="67"
        y="48"
        textAnchor="middle"
        fill="#888"
        fontSize="8"
        fontFamily="monospace"
      >
        Content
      </text>

      <line
        x1="130"
        y1="42"
        x2="150"
        y2="42"
        stroke="#e8a04a"
        strokeWidth="1.5"
      />
      <polygon points="150,42 145,38 145,46" fill="#e8a04a" />

      <rect
        x="155"
        y="10"
        width="115"
        height="65"
        rx="6"
        fill="#1a1a1a"
        stroke="#e8a04a"
        strokeWidth="1"
      />
      <text
        x="212"
        y="32"
        textAnchor="middle"
        fill="#e8a04a"
        fontSize="9"
        fontFamily="monospace"
      >
        SHA-256
      </text>

      <line
        x1="275"
        y1="42"
        x2="295"
        y2="42"
        stroke="#e8a04a"
        strokeWidth="1.5"
      />
      <polygon points="295,42 290,38 290,46" fill="#e8a04a" />

      <rect
        x="300"
        y="10"
        width="90"
        height="65"
        rx="6"
        fill="#251a10"
        stroke="#e8a04a"
        strokeWidth="1"
      />
      <text
        x="345"
        y="32"
        textAnchor="middle"
        fill="#e8a04a"
        fontSize="7"
        fontFamily="monospace"
      >
        contentHash
      </text>
      <text
        x="345"
        y="48"
        textAnchor="middle"
        fill="#666"
        fontSize="7"
        fontFamily="monospace"
      >
        0x8f3a...
      </text>

      {}
      <rect
        x="10"
        y="95"
        width="115"
        height="65"
        rx="6"
        fill="#1a1a1a"
        stroke="#4af0d4"
        strokeWidth="1"
      />
      <text x="67" y="117" textAnchor="middle" fontSize="14">
        ✍
      </text>
      <text
        x="67"
        y="133"
        textAnchor="middle"
        fill="#4af0d4"
        fontSize="9"
        fontFamily="monospace"
      >
        Sign
      </text>

      <line
        x1="130"
        y1="127"
        x2="150"
        y2="127"
        stroke="#e8a04a"
        strokeWidth="1.5"
      />
      <polygon points="150,127 145,123 145,131" fill="#e8a04a" />

      <rect
        x="155"
        y="95"
        width="115"
        height="65"
        rx="6"
        fill="url(#posGradMobile)"
        stroke="#e8a04a"
        strokeWidth="1.5"
      />
      <text
        x="212"
        y="117"
        textAnchor="middle"
        fill="#e8a04a"
        fontSize="10"
        fontFamily="monospace"
        fontWeight="bold"
      >
        PoS ✓
      </text>
      <text
        x="212"
        y="133"
        textAnchor="middle"
        fill="#e8a04a"
        fontSize="7"
        fontFamily="monospace"
      >
        Proof of Source
      </text>

      <line
        x1="212"
        y1="165"
        x2="212"
        y2="195"
        stroke="#e8a04a"
        strokeWidth="1.5"
        strokeDasharray="4,3"
      />
      <polygon points="212,195 208,187 216,187" fill="#e8a04a" />

      {}
      <rect
        x="10"
        y="210"
        width="380"
        height="260"
        rx="10"
        fill="url(#posGradMobile)"
        stroke="#e8a04a"
        strokeWidth="1.5"
      />
      <text
        x="200"
        y="235"
        textAnchor="middle"
        fill="#e8a04a"
        fontSize="12"
        fontFamily="monospace"
        fontWeight="bold"
      >
        Proof of Source (PoS)
      </text>

      {}
      <rect
        x="25"
        y="250"
        width="350"
        height="130"
        rx="6"
        fill="#0f1a18"
        stroke="#4af0d4"
        strokeWidth="1"
      />
      <text
        x="200"
        y="272"
        textAnchor="middle"
        fill="#4af0d4"
        fontSize="9"
        fontFamily="monospace"
      >
        Statement of Source (SoS)
      </text>

      <g transform="translate(35, 285)">
        <text x="0" y="12" fill="#888" fontSize="8" fontFamily="monospace">
          contentHash
        </text>
        <text x="120" y="12" fill="#666" fontSize="8" fontFamily="monospace">
          0x8f3a2b...
        </text>

        <line x1="0" y1="24" x2="330" y2="24" stroke="#333" strokeWidth="1" />

        <text x="0" y="40" fill="#888" fontSize="8" fontFamily="monospace">
          publisherAddress
        </text>
        <text x="120" y="40" fill="#666" fontSize="8" fontFamily="monospace">
          0x742d...
        </text>

        <line x1="0" y1="52" x2="330" y2="52" stroke="#333" strokeWidth="1" />

        <text x="0" y="68" fill="#888" fontSize="8" fontFamily="monospace">
          timestamp
        </text>
        <text x="120" y="68" fill="#666" fontSize="8" fontFamily="monospace">
          2026-03-13 10:17:00
        </text>
      </g>

      {}
      <rect
        x="25"
        y="395"
        width="350"
        height="35"
        rx="4"
        fill="#0f0f0f"
        stroke="#e8a04a"
        strokeWidth="1"
        strokeOpacity="0.6"
      />
      <text x="35" y="417" fill="#888" fontSize="8" fontFamily="monospace">
        signature:
      </text>
      <text x="95" y="417" fill="#e8a04a" fontSize="8" fontFamily="monospace">
        0x1f9c8e7a2b3c...
      </text>

      {}
      <text
        x="200"
        y="500"
        textAnchor="middle"
        fill="#666"
        fontSize="8"
        fontFamily="monospace"
      >
        Anyone can verify: SHA-256(content) = contentHash
      </text>
      <text
        x="200"
        y="518"
        textAnchor="middle"
        fill="#666"
        fontSize="8"
        fontFamily="monospace"
      >
        → signature valid → publisher confirmed
      </text>
      <text
        x="355"
        y="518"
        textAnchor="end"
        fill="#4af0d4"
        fontSize="8"
        fontFamily="monospace"
      >
        ✓
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

        <div className="diagram-frame p-8 overflow-hidden mb-8">
          <ProofOfSourceDiagramDesktop />
          <ProofOfSourceDiagramMobile />
        </div>

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

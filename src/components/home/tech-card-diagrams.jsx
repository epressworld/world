export function ProofOfSourceDiagram() {
  return (
    <svg
      viewBox="0 0 240 140"
      className="w-full h-auto"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="posGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#F7931A" stopOpacity="0.1" />
          <stop offset="100%" stopColor="#F7931A" stopOpacity="0.05" />
        </linearGradient>
      </defs>

      <rect
        x="5"
        y="15"
        width="45"
        height="30"
        rx="4"
        fill="#1a1a1a"
        stroke="#444"
        strokeWidth="1"
      />
      <text
        x="27"
        y="34"
        textAnchor="middle"
        fill="#888"
        fontSize="8"
        fontFamily="monospace"
      >
        content
      </text>

      <line x1="52" y1="30" x2="62" y2="30" stroke="#666" strokeWidth="1" />
      <polygon points="62,30 58,27 58,33" fill="#666" />

      <rect
        x="65"
        y="15"
        width="45"
        height="30"
        rx="4"
        fill="#1a1a1a"
        stroke="#F7931A"
        strokeWidth="1"
      />
      <text
        x="87"
        y="30"
        textAnchor="middle"
        fill="#F7931A"
        fontSize="7"
        fontFamily="monospace"
      >
        SHA-256
      </text>

      <line x1="112" y1="30" x2="122" y2="30" stroke="#666" strokeWidth="1" />
      <polygon points="122,30 118,27 118,33" fill="#666" />

      <rect
        x="125"
        y="15"
        width="35"
        height="30"
        rx="4"
        fill="url(#posGrad)"
        stroke="#F7931A"
        strokeWidth="1"
      />
      <text
        x="142"
        y="30"
        textAnchor="middle"
        fill="#F7931A"
        fontSize="7"
        fontFamily="monospace"
      >
        hash
      </text>

      <line x1="142" y1="47" x2="142" y2="57" stroke="#666" strokeWidth="1" />
      <polygon points="142,57 139,53 145,53" fill="#666" />

      <rect
        x="115"
        y="60"
        width="55"
        height="25"
        rx="4"
        fill="#1a1a1a"
        stroke="#F7931A"
        strokeWidth="1"
      />
      <text
        x="142"
        y="76"
        textAnchor="middle"
        fill="#F7931A"
        fontSize="8"
        fontFamily="monospace"
      >
        SoS
      </text>

      <line x1="172" y1="72" x2="182" y2="72" stroke="#666" strokeWidth="1" />
      <polygon points="182,72 178,69 178,75" fill="#666" />

      <rect
        x="115"
        y="95"
        width="55"
        height="25"
        rx="4"
        fill="#1a1a1a"
        stroke="#444"
        strokeWidth="1"
      />
      <text
        x="142"
        y="111"
        textAnchor="middle"
        fill="#888"
        fontSize="7"
        fontFamily="monospace"
      >
        sign
      </text>

      <line x1="172" y1="107" x2="182" y2="107" stroke="#666" strokeWidth="1" />
      <polygon points="182,107 178,104 178,110" fill="#666" />

      <rect
        x="185"
        y="55"
        width="50"
        height="55"
        rx="6"
        fill="url(#posGrad)"
        stroke="#F7931A"
        strokeWidth="2"
      />
      <text
        x="210"
        y="78"
        textAnchor="middle"
        fill="#F7931A"
        fontSize="9"
        fontFamily="monospace"
        fontWeight="bold"
      >
        PoS
      </text>
      <text
        x="210"
        y="92"
        textAnchor="middle"
        fill="#666"
        fontSize="6"
        fontFamily="monospace"
      >
        Proof of
      </text>
      <text
        x="210"
        y="102"
        textAnchor="middle"
        fill="#666"
        fontSize="6"
        fontFamily="monospace"
      >
        Source
      </text>
    </svg>
  )
}

export function OpenProtocolDiagram() {
  return (
    <svg
      viewBox="0 0 240 140"
      className="w-full h-auto"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <filter id="nodeGlow">
          <feGaussianBlur stdDeviation="1.5" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <circle
        cx="50"
        cy="45"
        r="25"
        fill="#1a1a1a"
        stroke="#F7931A"
        strokeWidth="2"
        filter="url(#nodeGlow)"
      />
      <text
        x="50"
        y="50"
        textAnchor="middle"
        fill="#F7931A"
        fontSize="16"
        fontFamily="monospace"
        fontWeight="bold"
      >
        A
      </text>

      <circle
        cx="190"
        cy="45"
        r="25"
        fill="#1a1a1a"
        stroke="#F7931A"
        strokeWidth="2"
        filter="url(#nodeGlow)"
      />
      <text
        x="190"
        y="50"
        textAnchor="middle"
        fill="#F7931A"
        fontSize="16"
        fontFamily="monospace"
        fontWeight="bold"
      >
        B
      </text>

      <circle
        cx="120"
        cy="105"
        r="25"
        fill="#1a1a1a"
        stroke="#F7931A"
        strokeWidth="2"
        filter="url(#nodeGlow)"
      />
      <text
        x="120"
        y="110"
        textAnchor="middle"
        fill="#F7931A"
        fontSize="16"
        fontFamily="monospace"
        fontWeight="bold"
      >
        C
      </text>

      <line
        x1="72"
        y1="35"
        x2="168"
        y2="35"
        stroke="#F7931A"
        strokeWidth="1.5"
        strokeOpacity="0.6"
      />
      <line
        x1="72"
        y1="55"
        x2="168"
        y2="55"
        stroke="#F7931A"
        strokeWidth="1.5"
        strokeOpacity="0.6"
      />

      <line
        x1="60"
        y1="65"
        x2="105"
        y2="90"
        stroke="#F7931A"
        strokeWidth="1.5"
        strokeOpacity="0.6"
      />
      <line
        x1="180"
        y1="65"
        x2="135"
        y2="90"
        stroke="#F7931A"
        strokeWidth="1.5"
        strokeOpacity="0.6"
      />

      <rect
        x="85"
        y="55"
        width="70"
        height="20"
        rx="4"
        fill="#0f0f0f"
        stroke="#F7931A"
        strokeWidth="1"
      />
      <text
        x="120"
        y="69"
        textAnchor="middle"
        fill="#F7931A"
        fontSize="9"
        fontFamily="monospace"
      >
        EWP
      </text>

      <text
        x="120"
        y="8"
        textAnchor="middle"
        fill="#666"
        fontSize="8"
        fontFamily="monospace"
      >
        epress world protocol
      </text>
    </svg>
  )
}

export function SelfHostedDiagram() {
  return (
    <svg
      viewBox="0 0 240 140"
      className="w-full h-auto"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="progressGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#F7931A" />
          <stop offset="100%" stopColor="#34D399" />
        </linearGradient>
      </defs>

      <rect
        x="10"
        y="15"
        width="220"
        height="28"
        rx="4"
        fill="#0f0f0f"
        stroke="#333"
        strokeWidth="1"
      />
      <text x="20" y="33" fill="#F7931A" fontSize="10" fontFamily="monospace">
        $ docker run epress/node
      </text>

      <rect
        x="10"
        y="55"
        width="220"
        height="12"
        rx="2"
        fill="#1a1a1a"
        stroke="#333"
        strokeWidth="1"
      />
      <rect
        x="12"
        y="57"
        width="180"
        height="8"
        rx="1"
        fill="url(#progressGrad)"
      />

      <text x="14" y="85" fill="#34D399" fontSize="9" fontFamily="monospace">
        ✓ Image pulled
      </text>
      <text x="14" y="98" fill="#34D399" fontSize="9" fontFamily="monospace">
        ✓ Container started
      </text>
      <text x="14" y="111" fill="#34D399" fontSize="9" fontFamily="monospace">
        ✓ Node online
      </text>

      <rect
        x="140"
        y="75"
        width="90"
        height="45"
        rx="4"
        fill="#0f0f0f"
        stroke="#34D399"
        strokeWidth="1"
      />
      <text
        x="185"
        y="95"
        textAnchor="middle"
        fill="#34D399"
        fontSize="8"
        fontFamily="monospace"
      >
        localhost:3000
      </text>
      <text
        x="185"
        y="110"
        textAnchor="middle"
        fill="#666"
        fontSize="7"
        fontFamily="monospace"
      >
        Ready in 2.3s
      </text>
    </svg>
  )
}

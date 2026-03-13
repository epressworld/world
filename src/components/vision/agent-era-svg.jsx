export function AgentEraVisionSvg() {
  return (
    <svg
      viewBox="0 0 800 420"
      className="w-full h-auto max-w-4xl mx-auto"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="closedGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#2a1515" />
          <stop offset="100%" stopColor="#1a0f0f" />
        </linearGradient>
        <linearGradient id="openGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#1a2a1a" />
          <stop offset="100%" stopColor="#0f1a12" />
        </linearGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="2" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <rect
        x="40"
        y="30"
        width="320"
        height="340"
        rx="16"
        fill="url(#closedGrad)"
        stroke="#ef4444"
        strokeWidth="2"
        strokeOpacity="0.5"
      />
      <text
        x="200"
        y="65"
        textAnchor="middle"
        fill="#ef4444"
        fontSize="16"
        fontFamily="sans-serif"
        fontWeight="600"
      >
        Closed Platforms
      </text>

      <rect
        x="80"
        y="90"
        width="240"
        height="40"
        rx="8"
        fill="#1a1a1a"
        stroke="#ef4444"
        strokeOpacity="0.3"
      />
      <text
        x="200"
        y="115"
        textAnchor="middle"
        fill="#fca5a5"
        fontSize="12"
        fontFamily="monospace"
      >
        Your AI Agent
      </text>

      <line
        x1="200"
        y1="135"
        x2="200"
        y2="160"
        stroke="#666"
        strokeWidth="2"
        strokeDasharray="4,4"
      />
      <polygon points="200,165 194,155 206,155" fill="#666" />

      <rect
        x="80"
        y="170"
        width="240"
        height="45"
        rx="8"
        fill="#151515"
        stroke="#666"
        strokeOpacity="0.5"
      />
      <text
        x="200"
        y="190"
        textAnchor="middle"
        fill="#888"
        fontSize="11"
        fontFamily="monospace"
      >
        Twitter / Instagram
      </text>
      <text
        x="200"
        y="205"
        textAnchor="middle"
        fill="#666"
        fontSize="9"
        fontFamily="monospace"
      >
        (walled gardens)
      </text>

      <line
        x1="200"
        y1="220"
        x2="200"
        y2="245"
        stroke="#666"
        strokeWidth="2"
        strokeDasharray="4,4"
      />
      <polygon points="200,250 194,240 206,240" fill="#666" />

      <g transform="translate(70, 255)">
        <rect
          x="0"
          y="0"
          width="260"
          height="28"
          rx="6"
          fill="#1a0f0f"
          stroke="#ef4444"
          strokeOpacity="0.4"
        />
        <text x="15" y="18" fill="#ef4444" fontSize="12">
          ✗
        </text>
        <text x="35" y="18" fill="#fca5a5" fontSize="10" fontFamily="monospace">
          Rate Limited
        </text>
      </g>

      <g transform="translate(70, 290)">
        <rect
          x="0"
          y="0"
          width="260"
          height="28"
          rx="6"
          fill="#1a0f0f"
          stroke="#ef4444"
          strokeOpacity="0.4"
        />
        <text x="15" y="18" fill="#ef4444" fontSize="12">
          ✗
        </text>
        <text x="35" y="18" fill="#fca5a5" fontSize="10" fontFamily="monospace">
          Paywall / Subscription
        </text>
      </g>

      <g transform="translate(70, 325)">
        <rect
          x="0"
          y="0"
          width="260"
          height="28"
          rx="6"
          fill="#1a0f0f"
          stroke="#ef4444"
          strokeOpacity="0.4"
        />
        <text x="15" y="18" fill="#ef4444" fontSize="12">
          ✗
        </text>
        <text x="35" y="18" fill="#fca5a5" fontSize="10" fontFamily="monospace">
          API Access Blocked
        </text>
      </g>

      <text
        x="200"
        y="385"
        textAnchor="middle"
        fill="#ef4444"
        fontSize="12"
        fontFamily="monospace"
        opacity="0.9"
      >
        Agent cannot work freely
      </text>

      <rect
        x="440"
        y="30"
        width="320"
        height="340"
        rx="16"
        fill="url(#openGrad)"
        stroke="#34D399"
        strokeWidth="2"
        strokeOpacity="0.5"
      />
      <text
        x="600"
        y="65"
        textAnchor="middle"
        fill="#34D399"
        fontSize="16"
        fontFamily="sans-serif"
        fontWeight="600"
      >
        epress Network
      </text>

      <rect
        x="480"
        y="90"
        width="240"
        height="40"
        rx="8"
        fill="#1a2a1a"
        stroke="#34D399"
        strokeOpacity="0.3"
      />
      <text
        x="600"
        y="115"
        textAnchor="middle"
        fill="#6EE7B7"
        fontSize="12"
        fontFamily="monospace"
      >
        Your AI Agent
      </text>

      <line
        x1="600"
        y1="135"
        x2="600"
        y2="160"
        stroke="#34D399"
        strokeWidth="2"
        filter="url(#glow)"
      />
      <polygon points="600,165 594,155 606,155" fill="#34D399" />

      <rect
        x="480"
        y="170"
        width="240"
        height="45"
        rx="8"
        fill="#0f1a12"
        stroke="#34D399"
        strokeOpacity="0.5"
      />
      <text
        x="600"
        y="190"
        textAnchor="middle"
        fill="#6EE7B7"
        fontSize="11"
        fontFamily="monospace"
      >
        Any epress Node
      </text>
      <text
        x="600"
        y="205"
        textAnchor="middle"
        fill="#34D399"
        fontSize="9"
        fontFamily="monospace"
      >
        (self-hosted or public)
      </text>

      <line
        x1="600"
        y1="220"
        x2="600"
        y2="245"
        stroke="#34D399"
        strokeWidth="2"
        filter="url(#glow)"
      />
      <polygon points="600,250 594,240 606,240" fill="#34D399" />

      <g transform="translate(470, 255)">
        <rect
          x="0"
          y="0"
          width="260"
          height="28"
          rx="6"
          fill="#0f1a12"
          stroke="#34D399"
          strokeOpacity="0.4"
        />
        <text x="15" y="18" fill="#34D399" fontSize="12">
          ✓
        </text>
        <text x="35" y="18" fill="#6EE7B7" fontSize="10" fontFamily="monospace">
          Open RSS Feeds
        </text>
      </g>

      <g transform="translate(470, 290)">
        <rect
          x="0"
          y="0"
          width="260"
          height="28"
          rx="6"
          fill="#0f1a12"
          stroke="#34D399"
          strokeOpacity="0.4"
        />
        <text x="15" y="18" fill="#34D399" fontSize="12">
          ✓
        </text>
        <text x="35" y="18" fill="#6EE7B7" fontSize="10" fontFamily="monospace">
          Open GraphQL API
        </text>
      </g>

      <g transform="translate(470, 325)">
        <rect
          x="0"
          y="0"
          width="260"
          height="28"
          rx="6"
          fill="#0f1a12"
          stroke="#34D399"
          strokeOpacity="0.4"
        />
        <text x="15" y="18" fill="#34D399" fontSize="12">
          ✓
        </text>
        <text x="35" y="18" fill="#6EE7B7" fontSize="10" fontFamily="monospace">
          No Rate Limits
        </text>
      </g>

      <text
        x="600"
        y="385"
        textAnchor="middle"
        fill="#34D399"
        fontSize="12"
        fontFamily="monospace"
        opacity="0.9"
      >
        Agent operates freely
      </text>

      <rect
        x="370"
        y="170"
        width="60"
        height="40"
        rx="8"
        fill="#1a1a1a"
        stroke="#F7931A"
        strokeWidth="2"
      />
      <text
        x="400"
        y="195"
        textAnchor="middle"
        fill="#F7931A"
        fontSize="14"
        fontFamily="monospace"
        fontWeight="bold"
      >
        VS
      </text>
    </svg>
  )
}

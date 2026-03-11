export function HomeServerSvg() {
  return (
    <svg
      viewBox="0 0 600 320"
      className="w-full h-auto"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="roomGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#1a1a1a" />
          <stop offset="100%" stopColor="#0f0f0f" />
        </linearGradient>
        <linearGradient id="serverGlow" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#F7931A" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#F7931A" stopOpacity="0" />
        </linearGradient>
      </defs>

      <rect
        x="50"
        y="40"
        width="500"
        height="240"
        rx="16"
        fill="url(#roomGrad)"
        stroke="#2a2a2a"
      />

      <line
        x1="50"
        y1="200"
        x2="550"
        y2="200"
        stroke="#2a2a2a"
        strokeWidth="1"
      />

      <rect
        x="100"
        y="160"
        width="80"
        height="35"
        rx="4"
        fill="#1a1a1a"
        stroke="#3a3a3a"
      />
      <text
        x="140"
        y="182"
        textAnchor="middle"
        fill="#6b7280"
        fontSize="8"
        fontFamily="monospace"
      >
        ROUTER
      </text>

      <rect
        x="430"
        y="130"
        width="100"
        height="60"
        rx="8"
        fill="#0f1a12"
        stroke="#F7931A"
        strokeWidth="2"
      />
      <ellipse cx="480" cy="100" rx="50" ry="30" fill="url(#serverGlow)" />
      <rect x="440" y="140" width="80" height="8" rx="2" fill="#1a2a1a" />
      <circle cx="450" cy="160" r="3" fill="#34D399" />
      <circle cx="460" cy="160" r="3" fill="#34D399" />
      <circle cx="470" cy="160" r="3" fill="#F7931A">
        <animate
          attributeName="opacity"
          values="1;0.3;1"
          dur="1.5s"
          repeatCount="indefinite"
        />
      </circle>
      <text
        x="480"
        y="178"
        textAnchor="middle"
        fill="#F7931A"
        fontSize="7"
        fontFamily="monospace"
      >
        epress node
      </text>

      <rect
        x="70"
        y="220"
        width="60"
        height="55"
        rx="6"
        fill="#1a1a1a"
        stroke="#3a3a3a"
      />
      <rect x="75" y="230" width="50" height="6" rx="2" fill="#2a2a2a" />
      <rect x="75" y="240" width="50" height="6" rx="2" fill="#2a2a2a" />
      <rect x="75" y="250" width="50" height="6" rx="2" fill="#2a2a2a" />
      <text
        x="100"
        y="268"
        textAnchor="middle"
        fill="#6b7280"
        fontSize="6"
        fontFamily="monospace"
      >
        Books
      </text>

      <rect
        x="150"
        y="220"
        width="60"
        height="55"
        rx="6"
        fill="#1a1a1a"
        stroke="#3a3a3a"
      />
      <rect x="155" y="230" width="50" height="6" rx="2" fill="#2a2a2a" />
      <rect x="155" y="240" width="50" height="6" rx="2" fill="#2a2a2a" />
      <rect x="155" y="250" width="50" height="6" rx="2" fill="#2a2a2a" />
      <text
        x="180"
        y="268"
        textAnchor="middle"
        fill="#6b7280"
        fontSize="6"
        fontFamily="monospace"
      >
        Photos
      </text>

      <rect
        x="250"
        y="210"
        width="100"
        height="65"
        rx="8"
        fill="#1a1a1a"
        stroke="#3a3a3a"
      />
      <rect x="260" y="220" width="80" height="45" rx="4" fill="#0f0f0f" />
      <rect x="265" y="225" width="70" height="35" rx="2" fill="#1a2a1a" />
      <text
        x="300"
        y="245"
        textAnchor="middle"
        fill="#34D399"
        fontSize="6"
        fontFamily="monospace"
      >
        Your Blog
      </text>
      <text
        x="300"
        y="268"
        textAnchor="middle"
        fill="#6b7280"
        fontSize="6"
        fontFamily="monospace"
      >
        LAPTOP
      </text>

      <rect
        x="380"
        y="220"
        width="70"
        height="55"
        rx="6"
        fill="#1a1a1a"
        stroke="#3a3a3a"
      />
      <circle cx="415" cy="245" r="15" fill="#2a2a2a" />
      <text x="415" y="248" textAnchor="middle" fill="#6b7280" fontSize="8">
        📱
      </text>
      <text
        x="415"
        y="268"
        textAnchor="middle"
        fill="#6b7280"
        fontSize="6"
        fontFamily="monospace"
      >
        Phone
      </text>

      <rect
        x="470"
        y="220"
        width="70"
        height="55"
        rx="6"
        fill="#1a1a1a"
        stroke="#3a3a3a"
      />
      <circle cx="505" cy="245" r="15" fill="#2a2a2a" />
      <text x="505" y="248" textAnchor="middle" fill="#6b7280" fontSize="8">
        ⌚
      </text>
      <text
        x="505"
        y="268"
        textAnchor="middle"
        fill="#6b7280"
        fontSize="6"
        fontFamily="monospace"
      >
        Watch
      </text>

      <path
        d="M180 160 Q300 100 440 160"
        stroke="#F7931A"
        strokeWidth="2"
        strokeOpacity="0.6"
        strokeDasharray="4,4"
      />
      <polygon points="440,160 432,155 432,165" fill="#F7931A" />

      <path
        d="M300 210 L300 150 Q350 130 480 130"
        stroke="#F7931A"
        strokeWidth="1.5"
        strokeOpacity="0.5"
        strokeDasharray="3,3"
      />
      <polygon points="480,130 472,126 472,134" fill="#F7931A" />

      <text
        x="300"
        y="305"
        textAnchor="middle"
        fill="#34D399"
        fontSize="11"
        fontFamily="monospace"
      >
        Your home server: as simple as a refrigerator
      </text>
    </svg>
  )
}

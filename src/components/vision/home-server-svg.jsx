export function HomeServerSvg() {
  return (
    <svg
      viewBox="0 0 600 320"
      className="w-full h-auto"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="serverGlow" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#F7931A" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#F7931A" stopOpacity="0" />
        </linearGradient>
      </defs>

      {}
      <text
        x="300"
        y="25"
        textAnchor="middle"
        fill="#a0a0a0"
        fontSize="11"
        fontFamily="monospace"
      >
        Your Digital Home Server
      </text>

      {}
      <rect
        x="200"
        y="50"
        width="200"
        height="180"
        rx="12"
        fill="#151515"
        stroke="#F7931A"
        strokeWidth="2"
      />

      {}
      <ellipse cx="300" cy="30" rx="80" ry="20" fill="url(#serverGlow)" />

      {}
      <rect x="220" y="70" width="160" height="25" rx="4" fill="#1a1a1a" />
      <circle cx="235" cy="82" r="4" fill="#34D399" />
      <circle cx="248" cy="82" r="4" fill="#34D399" />
      <circle cx="261" cy="82" r="4" fill="#F7931A">
        <animate
          attributeName="opacity"
          values="1;0.3;1"
          dur="1.5s"
          repeatCount="indefinite"
        />
      </circle>
      <text
        x="320"
        y="86"
        textAnchor="middle"
        fill="#a0a0a0"
        fontSize="8"
        fontFamily="monospace"
      >
        RUNNING
      </text>

      {}
      <text
        x="300"
        y="115"
        textAnchor="middle"
        fill="#F7931A"
        fontSize="14"
        fontFamily="sans-serif"
        fontWeight="600"
      >
        epress Node
      </text>
      <text
        x="300"
        y="130"
        textAnchor="middle"
        fill="#34D399"
        fontSize="9"
        fontFamily="monospace"
      >
        your-node.example
      </text>

      {}
      <rect
        x="220"
        y="145"
        width="70"
        height="35"
        rx="4"
        fill="#0f1a12"
        stroke="#34D399"
        strokeOpacity="0.5"
      />
      <text
        x="255"
        y="160"
        textAnchor="middle"
        fill="#6EE7B7"
        fontSize="8"
        fontFamily="monospace"
      >
        Posts
      </text>
      <text
        x="255"
        y="172"
        textAnchor="middle"
        fill="#6EE7B7"
        fontSize="8"
        fontFamily="monospace"
      >
        128 items
      </text>

      <rect
        x="310"
        y="145"
        width="70"
        height="35"
        rx="4"
        fill="#0f1a12"
        stroke="#60A5FA"
        strokeOpacity="0.5"
      />
      <text
        x="345"
        y="160"
        textAnchor="middle"
        fill="#93C5FD"
        fontSize="8"
        fontFamily="monospace"
      >
        Following
      </text>
      <text
        x="345"
        y="172"
        textAnchor="middle"
        fill="#93C5FD"
        fontSize="8"
        fontFamily="monospace"
      >
        42 nodes
      </text>

      {}
      <rect
        x="220"
        y="190"
        width="160"
        height="30"
        rx="4"
        fill="#0f0f0f"
        stroke="#3a3a3a"
      />
      <text x="240" y="210" fill="#a0a0a0" fontSize="8" fontFamily="monospace">
        Your data. Your rules.
      </text>

      {}
      <rect
        x="50"
        y="260"
        width="90"
        height="50"
        rx="8"
        fill="#1a1a1a"
        stroke="#3a3a3a"
      />
      <text x="95" y="285" textAnchor="middle" fill="#a0a0a0" fontSize="10">
        📱
      </text>
      <text
        x="95"
        y="300"
        textAnchor="middle"
        fill="#6b7280"
        fontSize="7"
        fontFamily="monospace"
      >
        Phone
      </text>

      <rect
        x="160"
        y="260"
        width="90"
        height="50"
        rx="8"
        fill="#1a1a1a"
        stroke="#3a3a3a"
      />
      <text x="205" y="285" textAnchor="middle" fill="#a0a0a0" fontSize="10">
        💻
      </text>
      <text
        x="205"
        y="300"
        textAnchor="middle"
        fill="#6b7280"
        fontSize="7"
        fontFamily="monospace"
      >
        Laptop
      </text>

      <rect
        x="350"
        y="260"
        width="90"
        height="50"
        rx="8"
        fill="#1a1a1a"
        stroke="#3a3a3a"
      />
      <text x="395" y="285" textAnchor="middle" fill="#a0a0a0" fontSize="10">
        ⌚
      </text>
      <text
        x="395"
        y="300"
        textAnchor="middle"
        fill="#6b7280"
        fontSize="7"
        fontFamily="monospace"
      >
        Watch
      </text>

      <rect
        x="460"
        y="260"
        width="90"
        height="50"
        rx="8"
        fill="#1a1a1a"
        stroke="#3a3a3a"
      />
      <text x="505" y="285" textAnchor="middle" fill="#a0a0a0" fontSize="10">
        🖥️
      </text>
      <text
        x="505"
        y="300"
        textAnchor="middle"
        fill="#6b7280"
        fontSize="7"
        fontFamily="monospace"
      >
        Desktop
      </text>

      {}
      <path
        d="M95 260 L200 230"
        stroke="#F7931A"
        strokeWidth="1.5"
        strokeOpacity="0.5"
        strokeDasharray="3,3"
      />
      <path
        d="M205 260 L220 230"
        stroke="#F7931A"
        strokeWidth="1.5"
        strokeOpacity="0.5"
        strokeDasharray="3,3"
      />
      <path
        d="M395 260 L380 230"
        stroke="#F7931A"
        strokeWidth="1.5"
        strokeOpacity="0.5"
        strokeDasharray="3,3"
      />
      <path
        d="M505 260 L400 230"
        stroke="#F7931A"
        strokeWidth="1.5"
        strokeOpacity="0.5"
        strokeDasharray="3,3"
      />

      {}
      <text
        x="300"
        y="245"
        textAnchor="middle"
        fill="#a0a0a0"
        fontSize="8"
        fontFamily="monospace"
      >
        Access your node from any device
      </text>
    </svg>
  )
}

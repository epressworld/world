export function AgentEraSvg() {
  return (
    <svg
      viewBox="0 0 700 200"
      className="w-full h-auto max-w-4xl mx-auto"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="dangerGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#1a0a0a" />
          <stop offset="100%" stopColor="#2a1515" />
        </linearGradient>
        <linearGradient id="successGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#0f1a12" />
          <stop offset="100%" stopColor="#1a2a1a" />
        </linearGradient>
      </defs>

      {}
      <rect
        x="10"
        y="10"
        width="300"
        height="180"
        rx="12"
        fill="url(#dangerGrad)"
        stroke="#ef4444"
        strokeOpacity="0.3"
      />
      <text
        x="160"
        y="35"
        textAnchor="middle"
        fill="#fca5a5"
        fontSize="10"
        fontFamily="monospace"
      >
        TODAY
      </text>

      <circle
        cx="50"
        cy="80"
        r="20"
        fill="#2a1515"
        stroke="#ef4444"
        strokeOpacity="0.5"
      />
      <text x="50" y="84" textAnchor="middle" fill="#fca5a5" fontSize="8">
        AI
      </text>

      <path
        d="M75 80 L110 80"
        stroke="#ef4444"
        strokeWidth="2"
        strokeOpacity="0.5"
      />
      <polygon points="110,80 102,76 102,84" fill="#ef4444" fillOpacity="0.5" />

      <rect
        x="115"
        y="55"
        width="80"
        height="50"
        rx="6"
        fill="#2a1515"
        stroke="#ef4444"
        strokeOpacity="0.3"
      />
      <text x="155" y="75" textAnchor="middle" fill="#7f1d1d" fontSize="7">
        Centralized
      </text>
      <text x="155" y="88" textAnchor="middle" fill="#7f1d1d" fontSize="7">
        Platform
      </text>

      <path
        d="M200 80 L235 80"
        stroke="#ef4444"
        strokeWidth="2"
        strokeOpacity="0.5"
      />
      <polygon points="235,80 227,76 227,84" fill="#ef4444" fillOpacity="0.5" />

      <text x="260" y="65" fill="#ef4444" fontSize="8">
        ✗ Pay limits
      </text>
      <text x="260" y="80" fill="#ef4444" fontSize="8">
        ✗ Rate limited
      </text>
      <text x="260" y="95" fill="#ef4444" fontSize="8">
        ✗ Content blocked
      </text>

      <text
        x="160"
        y="165"
        textAnchor="middle"
        fill="#7f1d1d"
        fontSize="9"
        fontFamily="monospace"
      >
        Agent cannot work
      </text>

      {}
      <text
        x="350"
        y="105"
        textAnchor="middle"
        fill="#F7931A"
        fontSize="14"
        fontWeight="bold"
      >
        VS
      </text>

      {}
      <rect
        x="390"
        y="10"
        width="300"
        height="180"
        rx="12"
        fill="url(#successGrad)"
        stroke="#F7931A"
      />
      <text
        x="540"
        y="35"
        textAnchor="middle"
        fill="#F7931A"
        fontSize="10"
        fontFamily="monospace"
      >
        EPRESS
      </text>

      <circle cx="430" cy="80" r="20" fill="#1a2a1a" stroke="#34D399" />
      <text x="430" y="84" textAnchor="middle" fill="#34D399" fontSize="8">
        AI
      </text>

      <path d="M455 80 L490 80" stroke="#34D399" strokeWidth="2" />
      <polygon points="490,80 482,76 482,84" fill="#34D399" />

      <rect
        x="495"
        y="55"
        width="80"
        height="50"
        rx="6"
        fill="#1a2a1a"
        stroke="#F7931A"
      />
      <text x="535" y="75" textAnchor="middle" fill="#F7931A" fontSize="7">
        epress
      </text>
      <text x="535" y="88" textAnchor="middle" fill="#F7931A" fontSize="7">
        Network
      </text>

      <path d="M580 80 L615 80" stroke="#34D399" strokeWidth="2" />
      <polygon points="615,80 607,76 607,84" fill="#34D399" />

      <text x="640" y="65" fill="#34D399" fontSize="8">
        ✓ Open RSS
      </text>
      <text x="640" y="80" fill="#34D399" fontSize="8">
        ✓ Open API
      </text>
      <text x="640" y="95" fill="#34D399" fontSize="8">
        ✓ No limits
      </text>

      <text
        x="540"
        y="165"
        textAnchor="middle"
        fill="#34D399"
        fontSize="9"
        fontFamily="monospace"
      >
        Agent operates freely
      </text>
    </svg>
  )
}

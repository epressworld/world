export function AIContentCrisisSvg() {
  return (
    <svg
      viewBox="0 0 600 280"
      className="w-full h-auto"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="realGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#34D399" />
          <stop offset="100%" stopColor="#34D399" stopOpacity="0.3" />
        </linearGradient>
        <linearGradient id="aiGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#ef4444" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#ef4444" />
        </linearGradient>
      </defs>

      <text x="50" y="30" fill="#34D399" fontSize="10" fontFamily="monospace">
        Real Content
      </text>
      <rect x="50" y="40" width="500" height="30" rx="4" fill="#1a2a1a" />
      <rect
        x="50"
        y="40"
        width="500"
        height="30"
        rx="4"
        fill="url(#realGrad)"
        opacity="0.8"
      />

      <text x="50" y="95" fill="#ef4444" fontSize="10" fontFamily="monospace">
        AI Content
      </text>
      <rect x="50" y="105" width="500" height="30" rx="4" fill="#2a1515" />
      <rect
        x="50"
        y="105"
        width="80"
        height="30"
        rx="4"
        fill="url(#aiGrad)"
        opacity="0.5"
      />

      <text x="50" y="165" fill="#34D399" fontSize="10" fontFamily="monospace">
        Real Content
      </text>
      <rect x="50" y="175" width="500" height="30" rx="4" fill="#1a2a1a" />
      <rect
        x="50"
        y="175"
        width="250"
        height="30"
        rx="4"
        fill="url(#realGrad)"
        opacity="0.6"
      />

      <text x="50" y="230" fill="#ef4444" fontSize="10" fontFamily="monospace">
        AI Content
      </text>
      <rect x="50" y="240" width="500" height="30" rx="4" fill="#2a1515" />
      <rect
        x="50"
        y="240"
        width="400"
        height="30"
        rx="4"
        fill="url(#aiGrad)"
        opacity="0.7"
      />

      <text
        x="70"
        y="58"
        fill="#fff"
        fontSize="9"
        fontFamily="monospace"
        opacity="0.7"
      >
        100% human
      </text>
      <text x="70" y="123" fill="#fca5a5" fontSize="9" fontFamily="monospace">
        ~15% AI
      </text>
      <text
        x="70"
        y="193"
        fill="#34D399"
        fontSize="9"
        fontFamily="monospace"
        opacity="0.7"
      >
        50% human
      </text>
      <text x="70" y="258" fill="#fca5a5" fontSize="9" fontFamily="monospace">
        ~80% AI
      </text>

      <text
        x="50"
        y="15"
        fill="#F7931A"
        fontSize="12"
        fontFamily="monospace"
        fontWeight="bold"
      >
        2020
      </text>
      <text
        x="300"
        y="15"
        fill="#F7931A"
        fontSize="12"
        fontFamily="monospace"
        fontWeight="bold"
      >
        2024
      </text>
      <text
        x="530"
        y="15"
        fill="#F7931A"
        fontSize="12"
        fontFamily="monospace"
        fontWeight="bold"
      >
        2026+
      </text>

      <path
        d="M50 145 L550 145"
        stroke="#3a3a3a"
        strokeWidth="1"
        strokeDasharray="3,3"
      />
    </svg>
  )
}

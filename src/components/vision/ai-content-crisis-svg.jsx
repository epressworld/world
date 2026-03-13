export function AIContentCrisisSvg() {
  return (
    <svg
      viewBox="0 0 800 360"
      className="w-full h-auto"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="humanGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#34D399" />
          <stop offset="100%" stopColor="#059669" />
        </linearGradient>
        <linearGradient id="aiGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#ef4444" />
          <stop offset="100%" stopColor="#b91c1c" />
        </linearGradient>
        <filter id="blur1" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="0.5" />
        </filter>
        <filter id="blur2" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="1.5" />
        </filter>
      </defs>

      <rect
        x="40"
        y="30"
        width="220"
        height="280"
        rx="12"
        fill="#1a1a1a"
        stroke="#3a3a3a"
        strokeWidth="1"
      />
      <rect
        x="290"
        y="30"
        width="220"
        height="280"
        rx="12"
        fill="#1a1a1a"
        stroke="#3a3a3a"
        strokeWidth="1"
      />
      <rect
        x="540"
        y="30"
        width="220"
        height="280"
        rx="12"
        fill="#1a1a1a"
        stroke="#3a3a3a"
        strokeWidth="1"
      />

      <text
        x="150"
        y="65"
        fill="#F7931A"
        fontSize="22"
        fontFamily="monospace"
        fontWeight="bold"
        textAnchor="middle"
      >
        2020
      </text>
      <text
        x="400"
        y="65"
        fill="#F7931A"
        fontSize="22"
        fontFamily="monospace"
        fontWeight="bold"
        textAnchor="middle"
      >
        2023
      </text>
      <text
        x="650"
        y="65"
        fill="#F7931A"
        fontSize="22"
        fontFamily="monospace"
        fontWeight="bold"
        textAnchor="middle"
      >
        2026+
      </text>

      <rect
        x="60"
        y="90"
        width="180"
        height="28"
        rx="6"
        fill="url(#humanGrad)"
      />
      <text
        x="150"
        y="110"
        fill="#fff"
        fontSize="12"
        fontFamily="monospace"
        textAnchor="middle"
      >
        95% Human
      </text>

      <rect
        x="60"
        y="125"
        width="9"
        height="28"
        rx="4"
        fill="url(#aiGrad)"
        opacity="0.5"
      />
      <text x="80" y="145" fill="#fca5a5" fontSize="11" fontFamily="monospace">
        5% AI
      </text>

      <g transform="translate(60, 170)">
        {[0, 1, 2, 3, 4].map((i) => (
          <rect
            key={`h2020-${i}`}
            x={i * 36}
            y="0"
            width="32"
            height="32"
            rx="6"
            fill="#34D399"
            opacity="0.9"
          />
        ))}
        <rect
          x="180"
          y="0"
          width="32"
          height="32"
          rx="6"
          fill="#ef4444"
          opacity="0.3"
        />
      </g>
      <text
        x="150"
        y="230"
        fill="#34D399"
        fontSize="10"
        fontFamily="monospace"
        textAnchor="middle"
      >
        Clean • Authentic
      </text>

      <rect
        x="310"
        y="90"
        width="125"
        height="28"
        rx="6"
        fill="url(#humanGrad)"
      />
      <text
        x="372"
        y="110"
        fill="#fff"
        fontSize="12"
        fontFamily="monospace"
        textAnchor="middle"
      >
        70% Human
      </text>

      <rect
        x="435"
        y="90"
        width="55"
        height="28"
        rx="6"
        fill="url(#aiGrad)"
        opacity="0.7"
      />
      <text
        x="462"
        y="110"
        fill="#fff"
        fontSize="12"
        fontFamily="monospace"
        textAnchor="middle"
      >
        30% AI
      </text>

      <g transform="translate(310, 170)">
        {[0, 1, 2, 3].map((i) => (
          <rect
            key={`h2023-${i}`}
            x={i * 36}
            y="0"
            width="32"
            height="32"
            rx="6"
            fill="#34D399"
            opacity="0.8"
          />
        ))}
        {[0, 1].map((i) => (
          <rect
            key={`a2023-${i}`}
            x={144 + i * 36}
            y="0"
            width="32"
            height="32"
            rx="6"
            fill="#ef4444"
            opacity="0.6"
            filter="url(#blur1)"
          />
        ))}
      </g>
      <text
        x="400"
        y="230"
        fill="#fbbf24"
        fontSize="10"
        fontFamily="monospace"
        textAnchor="middle"
      >
        Mixed • Blurring
      </text>

      <rect
        x="560"
        y="90"
        width="55"
        height="28"
        rx="6"
        fill="url(#humanGrad)"
        opacity="0.7"
      />
      <text
        x="587"
        y="110"
        fill="#fff"
        fontSize="12"
        fontFamily="monospace"
        textAnchor="middle"
      >
        30%
      </text>

      <rect x="615" y="90" width="125" height="28" rx="6" fill="url(#aiGrad)" />
      <text
        x="677"
        y="110"
        fill="#fff"
        fontSize="12"
        fontFamily="monospace"
        textAnchor="middle"
      >
        70% AI
      </text>

      <g transform="translate(560, 170)">
        <rect
          x="0"
          y="0"
          width="32"
          height="32"
          rx="6"
          fill="#34D399"
          opacity="0.6"
        />
        {[0, 1, 2, 3].map((i) => (
          <rect
            key={`a2026-${i}`}
            x={36 + i * 36}
            y="0"
            width="32"
            height="32"
            rx="6"
            fill="#ef4444"
            opacity="0.8"
            filter="url(#blur2)"
          />
        ))}
      </g>
      <text
        x="650"
        y="230"
        fill="#ef4444"
        fontSize="10"
        fontFamily="monospace"
        textAnchor="middle"
      >
        Flooded • Indistinguishable
      </text>

      <rect
        x="60"
        y="250"
        width="180"
        height="45"
        rx="6"
        fill="#1a2a1a"
        stroke="#34D399"
        strokeWidth="1"
        opacity="0.5"
      />
      <rect
        x="310"
        y="250"
        width="180"
        height="45"
        rx="6"
        fill="#2a2518"
        stroke="#fbbf24"
        strokeWidth="1"
        opacity="0.5"
      />
      <rect
        x="560"
        y="250"
        width="180"
        height="45"
        rx="6"
        fill="#2a1515"
        stroke="#ef4444"
        strokeWidth="1"
        opacity="0.5"
      />

      <text
        x="150"
        y="278"
        fill="#34D399"
        fontSize="10"
        fontFamily="monospace"
        textAnchor="middle"
        opacity="0.9"
      >
        Easy to identify
      </text>
      <text
        x="400"
        y="278"
        fill="#fbbf24"
        fontSize="10"
        fontFamily="monospace"
        textAnchor="middle"
        opacity="0.9"
      >
        Harder to distinguish
      </text>
      <text
        x="650"
        y="278"
        fill="#ef4444"
        fontSize="10"
        fontFamily="monospace"
        textAnchor="middle"
        opacity="0.9"
      >
        Nearly impossible
      </text>

      <text
        x="400"
        y="345"
        fill="#888"
        fontSize="12"
        fontFamily="monospace"
        textAnchor="middle"
      >
        → Time →
      </text>
    </svg>
  )
}

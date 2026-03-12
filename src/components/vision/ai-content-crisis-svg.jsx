export function AIContentCrisisSvg() {
  return (
    <svg
      viewBox="0 0 700 320"
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
        <filter id="blur3" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="2.5" />
        </filter>
      </defs>

      <rect
        x="40"
        y="40"
        width="200"
        height="250"
        rx="8"
        fill="#1a1a1a"
        stroke="#3a3a3a"
        strokeWidth="1"
      />
      <rect
        x="250"
        y="40"
        width="200"
        height="250"
        rx="8"
        fill="#1a1a1a"
        stroke="#3a3a3a"
        strokeWidth="1"
      />
      <rect
        x="460"
        y="40"
        width="200"
        height="250"
        rx="8"
        fill="#1a1a1a"
        stroke="#3a3a3a"
        strokeWidth="1"
      />

      <text
        x="140"
        y="70"
        fill="#F7931A"
        fontSize="18"
        fontFamily="monospace"
        fontWeight="bold"
        textAnchor="middle"
      >
        2020
      </text>
      <text
        x="350"
        y="70"
        fill="#F7931A"
        fontSize="18"
        fontFamily="monospace"
        fontWeight="bold"
        textAnchor="middle"
      >
        2023
      </text>
      <text
        x="560"
        y="70"
        fill="#F7931A"
        fontSize="18"
        fontFamily="monospace"
        fontWeight="bold"
        textAnchor="middle"
      >
        2026+
      </text>

      <rect
        x="60"
        y="90"
        width="160"
        height="24"
        rx="4"
        fill="url(#humanGrad)"
      />
      <text
        x="140"
        y="107"
        fill="#fff"
        fontSize="10"
        fontFamily="monospace"
        textAnchor="middle"
      >
        95% Human
      </text>

      <rect
        x="60"
        y="120"
        width="8"
        height="24"
        rx="2"
        fill="url(#aiGrad)"
        opacity="0.5"
      />
      <text x="80" y="137" fill="#fca5a5" fontSize="9" fontFamily="monospace">
        5% AI
      </text>

      <g transform="translate(60, 150)">
        {[0, 1, 2, 3, 4].map((i) => (
          <rect
            key={`h2020-${i}`}
            x={i * 33}
            y="0"
            width="30"
            height="30"
            rx="4"
            fill="#34D399"
            opacity="0.9"
          />
        ))}
        <rect
          x="165"
          y="0"
          width="30"
          height="30"
          rx="4"
          fill="#ef4444"
          opacity="0.3"
        />
      </g>
      <text
        x="140"
        y="205"
        fill="#34D399"
        fontSize="9"
        fontFamily="monospace"
        textAnchor="middle"
      >
        Clean • Authentic
      </text>

      <rect
        x="270"
        y="90"
        width="112"
        height="24"
        rx="4"
        fill="url(#humanGrad)"
      />
      <text
        x="326"
        y="107"
        fill="#fff"
        fontSize="10"
        fontFamily="monospace"
        textAnchor="middle"
      >
        70% Human
      </text>

      <rect
        x="382"
        y="90"
        width="48"
        height="24"
        rx="4"
        fill="url(#aiGrad)"
        opacity="0.7"
      />
      <text
        x="406"
        y="107"
        fill="#fff"
        fontSize="10"
        fontFamily="monospace"
        textAnchor="middle"
      >
        30% AI
      </text>

      <g transform="translate(270, 150)">
        {[0, 1, 2, 3].map((i) => (
          <rect
            key={`h2023-${i}`}
            x={i * 33}
            y="0"
            width="30"
            height="30"
            rx="4"
            fill="#34D399"
            opacity="0.8"
          />
        ))}
        {[0, 1].map((i) => (
          <rect
            key={`a2023-${i}`}
            x={132 + i * 33}
            y="0"
            width="30"
            height="30"
            rx="4"
            fill="#ef4444"
            opacity="0.6"
            filter="url(#blur1)"
          />
        ))}
      </g>
      <text
        x="350"
        y="205"
        fill="#fbbf24"
        fontSize="9"
        fontFamily="monospace"
        textAnchor="middle"
      >
        Mixed • Blurring
      </text>

      <rect
        x="480"
        y="90"
        width="48"
        height="24"
        rx="4"
        fill="url(#humanGrad)"
        opacity="0.7"
      />
      <text
        x="504"
        y="107"
        fill="#fff"
        fontSize="10"
        fontFamily="monospace"
        textAnchor="middle"
      >
        30%
      </text>

      <rect x="528" y="90" width="112" height="24" rx="4" fill="url(#aiGrad)" />
      <text
        x="584"
        y="107"
        fill="#fff"
        fontSize="10"
        fontFamily="monospace"
        textAnchor="middle"
      >
        70% AI
      </text>

      <g transform="translate(480, 150)">
        <rect
          x="0"
          y="0"
          width="30"
          height="30"
          rx="4"
          fill="#34D399"
          opacity="0.6"
        />
        {[0, 1, 2, 3].map((i) => (
          <rect
            key={`a2026-${i}`}
            x={33 + i * 33}
            y="0"
            width="30"
            height="30"
            rx="4"
            fill="#ef4444"
            opacity="0.8"
            filter="url(#blur2)"
          />
        ))}
      </g>
      <text
        x="560"
        y="205"
        fill="#ef4444"
        fontSize="9"
        fontFamily="monospace"
        textAnchor="middle"
      >
        Flooded • Indistinguishable
      </text>

      <rect
        x="60"
        y="225"
        width="160"
        height="40"
        rx="4"
        fill="#1a2a1a"
        stroke="#34D399"
        strokeWidth="1"
        opacity="0.5"
      />
      <rect
        x="270"
        y="225"
        width="160"
        height="40"
        rx="4"
        fill="#2a2518"
        stroke="#fbbf24"
        strokeWidth="1"
        opacity="0.5"
      />
      <rect
        x="480"
        y="225"
        width="160"
        height="40"
        rx="4"
        fill="#2a1515"
        stroke="#ef4444"
        strokeWidth="1"
        opacity="0.5"
      />

      <text
        x="140"
        y="250"
        fill="#34D399"
        fontSize="8"
        fontFamily="monospace"
        textAnchor="middle"
        opacity="0.8"
      >
        Easy to identify
      </text>
      <text
        x="350"
        y="250"
        fill="#fbbf24"
        fontSize="8"
        fontFamily="monospace"
        textAnchor="middle"
        opacity="0.8"
      >
        Harder to distinguish
      </text>
      <text
        x="560"
        y="250"
        fill="#ef4444"
        fontSize="8"
        fontFamily="monospace"
        textAnchor="middle"
        opacity="0.8"
      >
        Nearly impossible
      </text>

      <text
        x="350"
        y="305"
        fill="#888"
        fontSize="10"
        fontFamily="monospace"
        textAnchor="middle"
      >
        → Time →
      </text>
    </svg>
  )
}

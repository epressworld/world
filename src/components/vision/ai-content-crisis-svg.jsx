export function AIContentCrisisSvg() {
  const cardWidth = 220
  const cardPadding = 20
  const contentWidth = cardWidth - cardPadding * 2

  return (
    <svg
      viewBox="0 0 800 280"
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

      {}
      <rect
        x="40"
        y="20"
        width={cardWidth}
        height="200"
        rx="12"
        fill="#1a1a1a"
        stroke="#3a3a3a"
        strokeWidth="1"
      />
      <rect
        x="290"
        y="20"
        width={cardWidth}
        height="200"
        rx="12"
        fill="#1a1a1a"
        stroke="#3a3a3a"
        strokeWidth="1"
      />
      <rect
        x="540"
        y="20"
        width={cardWidth}
        height="200"
        rx="12"
        fill="#1a1a1a"
        stroke="#3a3a3a"
        strokeWidth="1"
      />

      {}
      <text
        x="150"
        y="52"
        fill="#F7931A"
        fontSize="20"
        fontFamily="monospace"
        fontWeight="bold"
        textAnchor="middle"
      >
        2020
      </text>
      <text
        x="400"
        y="52"
        fill="#F7931A"
        fontSize="20"
        fontFamily="monospace"
        fontWeight="bold"
        textAnchor="middle"
      >
        2023
      </text>
      <text
        x="650"
        y="52"
        fill="#F7931A"
        fontSize="20"
        fontFamily="monospace"
        fontWeight="bold"
        textAnchor="middle"
      >
        2026+
      </text>

      {}
      <g transform="translate(60, 75)">
        {}
        {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
          <rect
            key={`h2020-${i}`}
            x={i * 18}
            y="0"
            width="16"
            height="28"
            rx="3"
            fill="#34D399"
            opacity="0.9"
          />
        ))}
        <rect
          x="162"
          y="0"
          width="16"
          height="28"
          rx="3"
          fill="#ef4444"
          opacity="0.4"
        />
      </g>
      <text x="60" y="122" fill="#34D399" fontSize="9" fontFamily="monospace">
        95% Human
      </text>
      <text
        x="240"
        y="122"
        fill="#ef4444"
        fontSize="9"
        fontFamily="monospace"
        textAnchor="end"
      >
        5% AI
      </text>
      <text
        x="150"
        y="140"
        fill="#34D399"
        fontSize="9"
        fontFamily="monospace"
        textAnchor="middle"
      >
        Clean • Authentic
      </text>

      {}
      <g transform="translate(310, 75)">
        {[0, 1, 2, 3, 4, 5, 6].map((i) => (
          <rect
            key={`h2023-${i}`}
            x={i * 18}
            y="0"
            width="16"
            height="28"
            rx="3"
            fill="#34D399"
            opacity="0.8"
          />
        ))}
        {[0, 1, 2].map((i) => (
          <rect
            key={`a2023-${i}`}
            x={126 + i * 18}
            y="0"
            width="16"
            height="28"
            rx="3"
            fill="#ef4444"
            opacity="0.6"
            filter="url(#blur1)"
          />
        ))}
      </g>
      <text x="310" y="122" fill="#34D399" fontSize="9" fontFamily="monospace">
        70% Human
      </text>
      <text
        x="490"
        y="122"
        fill="#ef4444"
        fontSize="9"
        fontFamily="monospace"
        textAnchor="end"
      >
        30% AI
      </text>
      <text
        x="400"
        y="140"
        fill="#fbbf24"
        fontSize="9"
        fontFamily="monospace"
        textAnchor="middle"
      >
        Mixed • Blurring
      </text>

      {}
      <g transform="translate(560, 75)">
        {[0, 1, 2].map((i) => (
          <rect
            key={`h2026-${i}`}
            x={i * 18}
            y="0"
            width="16"
            height="28"
            rx="3"
            fill="#34D399"
            opacity="0.6"
          />
        ))}
        {[0, 1, 2, 3, 4, 5, 6].map((i) => (
          <rect
            key={`a2026-${i}`}
            x={54 + i * 18}
            y="0"
            width="16"
            height="28"
            rx="3"
            fill="#ef4444"
            opacity="0.8"
            filter="url(#blur2)"
          />
        ))}
      </g>
      <text x="560" y="122" fill="#34D399" fontSize="9" fontFamily="monospace">
        30% Human
      </text>
      <text
        x="740"
        y="122"
        fill="#ef4444"
        fontSize="9"
        fontFamily="monospace"
        textAnchor="end"
      >
        70% AI
      </text>
      <text
        x="650"
        y="140"
        fill="#ef4444"
        fontSize="9"
        fontFamily="monospace"
        textAnchor="middle"
      >
        Flooded • Indistinguishable
      </text>

      {}
      <rect
        x="60"
        y="160"
        width={contentWidth}
        height="38"
        rx="6"
        fill="#1a2a1a"
        stroke="#34D399"
        strokeWidth="1"
        opacity="0.5"
      />
      <rect
        x="310"
        y="160"
        width={contentWidth}
        height="38"
        rx="6"
        fill="#2a2518"
        stroke="#fbbf24"
        strokeWidth="1"
        opacity="0.5"
      />
      <rect
        x="560"
        y="160"
        width={contentWidth}
        height="38"
        rx="6"
        fill="#2a1515"
        stroke="#ef4444"
        strokeWidth="1"
        opacity="0.5"
      />

      <text
        x="150"
        y="184"
        fill="#34D399"
        fontSize="9"
        fontFamily="monospace"
        textAnchor="middle"
        opacity="0.9"
      >
        Easy to identify
      </text>
      <text
        x="400"
        y="184"
        fill="#fbbf24"
        fontSize="9"
        fontFamily="monospace"
        textAnchor="middle"
        opacity="0.9"
      >
        Harder to distinguish
      </text>
      <text
        x="650"
        y="184"
        fill="#ef4444"
        fontSize="9"
        fontFamily="monospace"
        textAnchor="middle"
        opacity="0.9"
      >
        Nearly impossible
      </text>

      <text
        x="400"
        y="260"
        fill="#888"
        fontSize="11"
        fontFamily="monospace"
        textAnchor="middle"
      >
        → Time →
      </text>
    </svg>
  )
}

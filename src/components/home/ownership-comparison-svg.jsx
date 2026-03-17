export function OwnershipComparisonSvg() {
  return (
    <svg
      viewBox="0 0 800 400"
      className="w-full h-auto max-w-5xl mx-auto"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="platformGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#2a1515" />
          <stop offset="100%" stopColor="#1a0f0f" />
        </linearGradient>
        <linearGradient id="epressGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#1a2a2a" />
          <stop offset="100%" stopColor="#0f1a1a" />
        </linearGradient>
      </defs>

      <g transform="translate(40, 20)">
        <text
          x="140"
          y="20"
          textAnchor="middle"
          fill="#ef4444"
          fontSize="11"
          fontFamily="monospace"
          fontWeight="600"
          letterSpacing="0.1em"
        >
          PLATFORM ACCOUNT
        </text>

        <g transform="translate(40, 40)">
          <rect
            x="20"
            y="20"
            width="160"
            height="140"
            fill="#1a1a1a"
            stroke="#444"
            strokeWidth="1"
          />

          {[0, 1, 2, 3].map((row) =>
            [0, 1, 2, 3].map((col) => (
              <rect
                key={`win-${row}-${col}`}
                x={30 + col * 38}
                y={30 + row * 32}
                width="28"
                height="24"
                fill="#0a0a0a"
                stroke="#333"
                strokeWidth="0.5"
              />
            )),
          )}

          <polygon
            points="100,5 180,20 20,20"
            fill="#1a1a1a"
            stroke="#444"
            strokeWidth="1"
          />

          <text
            x="100"
            y="10"
            textAnchor="middle"
            fill="#666"
            fontSize="8"
            fontFamily="monospace"
          >
            Landlord's Property
          </text>

          <rect
            x="80"
            y="130"
            width="40"
            height="30"
            fill="#0a0a0a"
            stroke="#333"
            strokeWidth="1"
          />
        </g>

        <g transform="translate(20, 220)">
          {[
            "Platform can ban you anytime",
            "Data gone when platform shuts down",
            "Can't transfer to family",
            "You are a user, not an owner",
          ].map((text, idx) => (
            <g key={idx} transform={`translate(0, ${idx * 28})`}>
              <text x="0" y="15" fill="#ef4444" fontSize="14">
                ✗
              </text>
              <text
                x="20"
                y="15"
                fill="#888"
                fontSize="11"
                fontFamily="monospace"
              >
                {text}
              </text>
            </g>
          ))}
        </g>
      </g>

      <g transform="translate(370, 160)">
        <line
          x1="30"
          y1="0"
          x2="30"
          y2="80"
          stroke="#333"
          strokeWidth="1"
          strokeDasharray="4,4"
        />
        <rect
          x="10"
          y="30"
          width="40"
          height="24"
          rx="4"
          fill="#1a1a1a"
          stroke="#e8a04a"
          strokeWidth="2"
        />
        <text
          x="30"
          y="47"
          textAnchor="middle"
          fill="#e8a04a"
          fontSize="14"
          fontFamily="monospace"
          fontWeight="bold"
        >
          VS
        </text>
      </g>

      <g transform="translate(440, 20)">
        <text
          x="140"
          y="20"
          textAnchor="middle"
          fill="#4af0d4"
          fontSize="11"
          fontFamily="monospace"
          fontWeight="600"
          letterSpacing="0.1em"
        >
          EPRESS NODE
        </text>

        <g transform="translate(60, 40)">
          <rect
            x="20"
            y="60"
            width="120"
            height="100"
            fill="url(#epressGrad)"
            stroke="#4af0d4"
            strokeWidth="1"
          />

          <polygon
            points="80,20 150,60 10,60"
            fill="#1a2a2a"
            stroke="#4af0d4"
            strokeWidth="1"
          />

          <text
            x="80"
            y="45"
            textAnchor="middle"
            fill="#4af0d4"
            fontSize="8"
            fontFamily="monospace"
          >
            Your Property
          </text>

          <rect
            x="60"
            y="120"
            width="40"
            height="40"
            fill="#0a0a0a"
            stroke="#4af0d4"
            strokeWidth="1"
          />

          <rect
            x="100"
            y="80"
            width="30"
            height="30"
            fill="#0a0a0a"
            stroke="#4af0d4"
            strokeWidth="1"
          />
        </g>

        <g transform="translate(20, 220)">
          {[
            "No one can evict you",
            "Runs as long as you want",
            "Transfer, sell, or inherit",
            "You are the owner, not a user",
          ].map((text, idx) => (
            <g key={idx} transform={`translate(0, ${idx * 28})`}>
              <text x="0" y="15" fill="#4af0d4" fontSize="14">
                ✓
              </text>
              <text
                x="20"
                y="15"
                fill="#888"
                fontSize="11"
                fontFamily="monospace"
              >
                {text}
              </text>
            </g>
          ))}
        </g>
      </g>

      <text
        x="400"
        y="380"
        textAnchor="middle"
        fill="#666"
        fontSize="12"
        fontFamily="monospace"
      >
        Here's what owning actually means ↓
      </text>
    </svg>
  )
}

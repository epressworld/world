export function InternetPromisedCombinedSvg() {
  return (
    <svg
      viewBox="0 0 800 520"
      className="w-full h-auto max-w-5xl mx-auto"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="peerGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#0f1a12" />
          <stop offset="100%" stopColor="#1a2a1a" />
        </linearGradient>
        <linearGradient id="centralGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#2a1515" />
          <stop offset="100%" stopColor="#1a0a0a" />
        </linearGradient>
      </defs>

      <g transform="translate(40, 20)">
        <text
          x="160"
          y="15"
          textAnchor="middle"
          fill="#888"
          fontSize="10"
          fontFamily="monospace"
          fontWeight="600"
          letterSpacing="0.1em"
        >
          1990s — THE ORIGINAL VISION
        </text>

        {[
          "Peer-to-peer network of equals",
          "Anyone can run a server",
          "Open protocols connect everyone",
          "Data belongs to its creator",
        ].map((text, idx) => (
          <g key={idx} transform={`translate(0, ${40 + idx * 28})`}>
            <text x="0" y="15" fill="#4af0d4" fontSize="14">
              ✓
            </text>
            <text
              x="22"
              y="15"
              fill="#aaa"
              fontSize="11"
              fontFamily="monospace"
            >
              {text}
            </text>
          </g>
        ))}

        <g transform="translate(0, 170)">
          <rect
            x="0"
            y="0"
            width="320"
            height="200"
            rx="12"
            fill="url(#peerGrad)"
            stroke="#34D399"
            strokeOpacity="0.3"
          />
          <text
            x="160"
            y="25"
            textAnchor="middle"
            fill="#34D399"
            fontSize="10"
            fontFamily="monospace"
          >
            Peer-to-Peer Network
          </text>

          <circle cx="60" cy="70" r="12" fill="#1a2a1a" stroke="#34D399" />
          <circle cx="160" cy="50" r="12" fill="#1a2a1a" stroke="#34D399" />
          <circle cx="260" cy="70" r="12" fill="#1a2a1a" stroke="#34D399" />
          <circle cx="60" cy="130" r="12" fill="#1a2a1a" stroke="#34D399" />
          <circle cx="160" cy="150" r="12" fill="#1a2a1a" stroke="#34D399" />
          <circle cx="260" cy="130" r="12" fill="#1a2a1a" stroke="#34D399" />
          <circle cx="160" cy="100" r="12" fill="#1a2a1a" stroke="#34D399" />

          <line
            x1="60"
            y1="70"
            x2="160"
            y2="50"
            stroke="#34D399"
            strokeWidth="1"
            strokeOpacity="0.4"
          />
          <line
            x1="160"
            y1="50"
            x2="260"
            y2="70"
            stroke="#34D399"
            strokeWidth="1"
            strokeOpacity="0.4"
          />
          <line
            x1="60"
            y1="70"
            x2="60"
            y2="130"
            stroke="#34D399"
            strokeWidth="1"
            strokeOpacity="0.4"
          />
          <line
            x1="260"
            y1="70"
            x2="260"
            y2="130"
            stroke="#34D399"
            strokeWidth="1"
            strokeOpacity="0.4"
          />
          <line
            x1="60"
            y1="130"
            x2="160"
            y2="150"
            stroke="#34D399"
            strokeWidth="1"
            strokeOpacity="0.4"
          />
          <line
            x1="160"
            y1="150"
            x2="260"
            y2="130"
            stroke="#34D399"
            strokeWidth="1"
            strokeOpacity="0.4"
          />
          <line
            x1="60"
            y1="70"
            x2="160"
            y2="100"
            stroke="#34D399"
            strokeWidth="1"
            strokeOpacity="0.4"
          />
          <line
            x1="160"
            y1="50"
            x2="160"
            y2="100"
            stroke="#34D399"
            strokeWidth="1"
            strokeOpacity="0.4"
          />
          <line
            x1="260"
            y1="70"
            x2="160"
            y2="100"
            stroke="#34D399"
            strokeWidth="1"
            strokeOpacity="0.4"
          />
          <line
            x1="60"
            y1="130"
            x2="160"
            y2="100"
            stroke="#34D399"
            strokeWidth="1"
            strokeOpacity="0.4"
          />
          <line
            x1="160"
            y1="150"
            x2="160"
            y2="100"
            stroke="#34D399"
            strokeWidth="1"
            strokeOpacity="0.4"
          />
          <line
            x1="260"
            y1="130"
            x2="160"
            y2="100"
            stroke="#34D399"
            strokeWidth="1"
            strokeOpacity="0.4"
          />
          <line
            x1="60"
            y1="70"
            x2="260"
            y2="130"
            stroke="#34D399"
            strokeWidth="1"
            strokeOpacity="0.3"
          />
          <line
            x1="260"
            y1="70"
            x2="60"
            y2="130"
            stroke="#34D399"
            strokeWidth="1"
            strokeOpacity="0.3"
          />

          <text
            x="160"
            y="180"
            textAnchor="middle"
            fill="#34D399"
            fontSize="8"
            fontFamily="monospace"
          >
            Decentralized. Resilient. Open.
          </text>
        </g>
      </g>

      <g transform="translate(440, 20)">
        <text
          x="160"
          y="15"
          textAnchor="middle"
          fill="#888"
          fontSize="10"
          fontFamily="monospace"
          fontWeight="600"
          letterSpacing="0.1em"
        >
          TODAY — THE REALITY
        </text>

        {[
          "Few mega-servers own the network",
          "You can only register an account",
          "Closed platforms, isolated silos",
          "Data belongs to the platform",
        ].map((text, idx) => (
          <g key={idx} transform={`translate(0, ${40 + idx * 28})`}>
            <text x="0" y="15" fill="#ef4444" fontSize="14">
              ✗
            </text>
            <text
              x="22"
              y="15"
              fill="#888"
              fontSize="11"
              fontFamily="monospace"
            >
              {text}
            </text>
          </g>
        ))}

        <g transform="translate(0, 170)">
          <rect
            x="0"
            y="0"
            width="320"
            height="200"
            rx="12"
            fill="url(#centralGrad)"
            stroke="#ef4444"
            strokeOpacity="0.3"
          />
          <text
            x="160"
            y="25"
            textAnchor="middle"
            fill="#fca5a5"
            fontSize="10"
            fontFamily="monospace"
          >
            Centralized Network
          </text>

          <circle
            cx="160"
            cy="100"
            r="35"
            fill="#2a1515"
            stroke="#ef4444"
            strokeOpacity="0.5"
          />
          <text x="160" y="95" textAnchor="middle" fill="#fca5a5" fontSize="8">
            Central
          </text>
          <text x="160" y="108" textAnchor="middle" fill="#fca5a5" fontSize="8">
            Platform
          </text>

          <circle
            cx="60"
            cy="60"
            r="10"
            fill="#2a1515"
            stroke="#fca5a5"
            strokeOpacity="0.5"
          />
          <circle
            cx="260"
            cy="60"
            r="10"
            fill="#2a1515"
            stroke="#fca5a5"
            strokeOpacity="0.5"
          />
          <circle
            cx="60"
            cy="140"
            r="10"
            fill="#2a1515"
            stroke="#fca5a5"
            strokeOpacity="0.5"
          />
          <circle
            cx="260"
            cy="140"
            r="10"
            fill="#2a1515"
            stroke="#fca5a5"
            strokeOpacity="0.5"
          />
          <circle
            cx="40"
            cy="100"
            r="10"
            fill="#2a1515"
            stroke="#fca5a5"
            strokeOpacity="0.5"
          />
          <circle
            cx="280"
            cy="100"
            r="10"
            fill="#2a1515"
            stroke="#fca5a5"
            strokeOpacity="0.5"
          />

          <line
            x1="70"
            y1="60"
            x2="125"
            y2="85"
            stroke="#ef4444"
            strokeWidth="1"
            strokeOpacity="0.4"
          />
          <line
            x1="250"
            y1="60"
            x2="195"
            y2="85"
            stroke="#ef4444"
            strokeWidth="1"
            strokeOpacity="0.4"
          />
          <line
            x1="70"
            y1="140"
            x2="125"
            y2="115"
            stroke="#ef4444"
            strokeWidth="1"
            strokeOpacity="0.4"
          />
          <line
            x1="250"
            y1="140"
            x2="195"
            y2="115"
            stroke="#ef4444"
            strokeWidth="1"
            strokeOpacity="0.4"
          />
          <line
            x1="50"
            y1="100"
            x2="125"
            y2="100"
            stroke="#ef4444"
            strokeWidth="1"
            strokeOpacity="0.4"
          />
          <line
            x1="270"
            y1="100"
            x2="195"
            y2="100"
            stroke="#ef4444"
            strokeWidth="1"
            strokeOpacity="0.4"
          />

          <text
            x="160"
            y="180"
            textAnchor="middle"
            fill="#ef4444"
            fontSize="8"
            fontFamily="monospace"
          >
            Single points of failure. Locked data.
          </text>
        </g>
      </g>

      <line
        x1="400"
        y1="50"
        x2="400"
        y2="400"
        stroke="#333"
        strokeWidth="1"
        strokeDasharray="4,4"
      />

      <rect
        x="100"
        y="450"
        width="600"
        height="40"
        rx="8"
        fill="rgba(232,160,74,0.1)"
        stroke="#e8a04a"
        strokeWidth="1"
      />
      <text
        x="400"
        y="475"
        textAnchor="middle"
        fill="#e8a04a"
        fontSize="12"
        fontFamily="monospace"
      >
        epress is a return to the original architecture — rebuilt for today.
      </text>
    </svg>
  )
}

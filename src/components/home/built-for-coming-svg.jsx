export function AuthenticityCrisisSvg() {
  return (
    <svg
      viewBox="0 0 300 200"
      className="w-full h-auto"
      xmlns="http://www.w3.org/2000/svg"
    >
      {[
        { y: 20, hasPoS: false },
        { y: 50, hasPoS: true },
        { y: 80, hasPoS: false },
        { y: 110, hasPoS: false },
        { y: 140, hasPoS: true },
        { y: 170, hasPoS: false },
      ].map((item, idx) => (
        <g key={idx}>
          <rect
            x="40"
            y={item.y}
            width="220"
            height="24"
            rx="4"
            fill="#1a1a1a"
            stroke="#333"
            strokeWidth="0.5"
          />
          <rect
            x="45"
            y={item.y + 5}
            width="140"
            height="14"
            rx="2"
            fill="#2a2a2a"
          />
          {item.hasPoS ? (
            <g>
              <rect
                x="200"
                y={item.y + 4}
                width="35"
                height="16"
                rx="3"
                fill="rgba(74,240,212,0.2)"
                stroke="#4af0d4"
                strokeWidth="0.5"
              />
              <text
                x="217"
                y={item.y + 15}
                textAnchor="middle"
                fill="#4af0d4"
                fontSize="8"
                fontFamily="monospace"
              >
                PoS
              </text>
              <text x="250" y={item.y + 16} fill="#4af0d4" fontSize="12">
                ✓
              </text>
            </g>
          ) : (
            <g>
              <text
                x="200"
                y={item.y + 16}
                fill="#666"
                fontSize="10"
                fontFamily="monospace"
              >
                AI? Human?
              </text>
              <text x="255" y={item.y + 16} fill="#666" fontSize="12">
                ?
              </text>
            </g>
          )}
        </g>
      ))}
    </svg>
  )
}

export function AgentEraFlowSvg() {
  return (
    <svg
      viewBox="0 0 300 200"
      className="w-full h-auto"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="110"
        y="10"
        width="80"
        height="30"
        rx="6"
        fill="#1a1a1a"
        stroke="#888"
        strokeWidth="1"
      />
      <text
        x="150"
        y="30"
        textAnchor="middle"
        fill="#888"
        fontSize="10"
        fontFamily="monospace"
      >
        You
      </text>

      <line x1="150" y1="42" x2="150" y2="55" stroke="#666" strokeWidth="1" />
      <polygon points="150,60 146,52 154,52" fill="#666" />

      <rect
        x="100"
        y="60"
        width="100"
        height="30"
        rx="6"
        fill="#1a2a1a"
        stroke="#4af0d4"
        strokeWidth="1"
      />
      <text
        x="150"
        y="80"
        textAnchor="middle"
        fill="#4af0d4"
        fontSize="9"
        fontFamily="monospace"
      >
        Your AI Agent
      </text>

      <line
        x1="150"
        y1="92"
        x2="150"
        y2="105"
        stroke="#666"
        strokeWidth="1"
        strokeDasharray="3,3"
      />
      <polygon points="150,110 146,102 154,102" fill="#666" />

      <rect
        x="100"
        y="110"
        width="100"
        height="30"
        rx="6"
        fill="#2a1a0a"
        stroke="#e8a04a"
        strokeWidth="2"
      />
      <text
        x="150"
        y="130"
        textAnchor="middle"
        fill="#e8a04a"
        fontSize="9"
        fontFamily="monospace"
      >
        Your epress Node
      </text>

      <line
        x1="205"
        y1="125"
        x2="240"
        y2="125"
        stroke="#e8a04a"
        strokeWidth="2"
      />
      <polygon points="245,125 237,121 237,129" fill="#e8a04a" />
      <text
        x="225"
        y="118"
        textAnchor="middle"
        fill="#e8a04a"
        fontSize="7"
        fontFamily="monospace"
      >
        EWP
      </text>

      <circle
        cx="270"
        cy="125"
        r="20"
        fill="#1a1a1a"
        stroke="#666"
        strokeWidth="1"
      />
      <text
        x="270"
        y="129"
        textAnchor="middle"
        fill="#888"
        fontSize="8"
        fontFamily="monospace"
      >
        Node
      </text>

      <circle
        cx="30"
        cy="125"
        r="20"
        fill="#1a1a1a"
        stroke="#666"
        strokeWidth="1"
      />
      <text
        x="30"
        y="129"
        textAnchor="middle"
        fill="#888"
        fontSize="8"
        fontFamily="monospace"
      >
        Node
      </text>

      <line
        x1="55"
        y1="125"
        x2="95"
        y2="125"
        stroke="#e8a04a"
        strokeWidth="2"
      />
      <polygon points="98,125 90,121 90,129" fill="#e8a04a" />
      <text
        x="75"
        y="118"
        textAnchor="middle"
        fill="#e8a04a"
        fontSize="7"
        fontFamily="monospace"
      >
        EWP
      </text>

      <circle
        cx="150"
        cy="175"
        r="20"
        fill="#1a1a1a"
        stroke="#666"
        strokeWidth="1"
      />
      <text
        x="150"
        y="179"
        textAnchor="middle"
        fill="#888"
        fontSize="8"
        fontFamily="monospace"
      >
        Node
      </text>

      <line
        x1="150"
        y1="145"
        x2="150"
        y2="152"
        stroke="#e8a04a"
        strokeWidth="2"
      />
      <polygon points="150,155 146,147 154,147" fill="#e8a04a" />
    </svg>
  )
}

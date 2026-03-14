export function SovereigntyLoopSvg() {
  return (
    <svg
      viewBox="0 0 500 500"
      className="w-full h-auto max-w-2xl mx-auto"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <marker
          id="arrowhead"
          markerWidth="10"
          markerHeight="7"
          refX="9"
          refY="3.5"
          orient="auto"
        >
          <polygon points="0 0, 10 3.5, 0 7" fill="#e8a04a" />
        </marker>
      </defs>

      <circle
        cx="250"
        cy="250"
        r="150"
        fill="none"
        stroke="#333"
        strokeWidth="1"
        strokeDasharray="4,4"
      />

      <circle
        cx="250"
        cy="250"
        r="50"
        fill="rgba(232,160,74,0.1)"
        stroke="#e8a04a"
        strokeWidth="2"
      />
      <text
        x="250"
        y="245"
        textAnchor="middle"
        fill="#e8a04a"
        fontSize="10"
        fontFamily="monospace"
      >
        epress
      </text>
      <text
        x="250"
        y="260"
        textAnchor="middle"
        fill="#e8a04a"
        fontSize="10"
        fontFamily="monospace"
      >
        node
      </text>

      <g transform="translate(250, 100)">
        <text x="0" y="-15" textAnchor="middle" fill="#fff" fontSize="16">
          🔑
        </text>
        <text
          x="0"
          y="5"
          textAnchor="middle"
          fill="#fff"
          fontSize="11"
          fontFamily="monospace"
          fontWeight="600"
        >
          Identity
        </text>
        <text
          x="0"
          y="20"
          textAnchor="middle"
          fill="#888"
          fontSize="8"
          fontFamily="monospace"
        >
          Your Ethereum address.
        </text>
        <text
          x="0"
          y="32"
          textAnchor="middle"
          fill="#888"
          fontSize="8"
          fontFamily="monospace"
        >
          No platform can revoke it.
        </text>
      </g>

      <g transform="translate(400, 250)">
        <text x="0" y="-15" textAnchor="middle" fill="#fff" fontSize="16">
          📝
        </text>
        <text
          x="0"
          y="5"
          textAnchor="middle"
          fill="#fff"
          fontSize="11"
          fontFamily="monospace"
          fontWeight="600"
        >
          Content
        </text>
        <text
          x="0"
          y="20"
          textAnchor="middle"
          fill="#888"
          fontSize="8"
          fontFamily="monospace"
        >
          Self-hosted on your node.
        </text>
        <text
          x="0"
          y="32"
          textAnchor="middle"
          fill="#888"
          fontSize="8"
          fontFamily="monospace"
        >
          You decide what's public.
        </text>
      </g>

      <g transform="translate(250, 400)">
        <text x="0" y="-15" textAnchor="middle" fill="#fff" fontSize="16">
          🔗
        </text>
        <text
          x="0"
          y="5"
          textAnchor="middle"
          fill="#fff"
          fontSize="11"
          fontFamily="monospace"
          fontWeight="600"
        >
          Social Graph
        </text>
        <text
          x="0"
          y="20"
          textAnchor="middle"
          fill="#888"
          fontSize="8"
          fontFamily="monospace"
        >
          Your follows, your followers.
        </text>
        <text
          x="0"
          y="32"
          textAnchor="middle"
          fill="#888"
          fontSize="8"
          fontFamily="monospace"
        >
          Portable, not locked in.
        </text>
      </g>

      <g transform="translate(100, 250)">
        <text x="0" y="-15" textAnchor="middle" fill="#fff" fontSize="16">
          🏛
        </text>
        <text
          x="0"
          y="5"
          textAnchor="middle"
          fill="#fff"
          fontSize="11"
          fontFamily="monospace"
          fontWeight="600"
        >
          Legacy
        </text>
        <text
          x="0"
          y="20"
          textAnchor="middle"
          fill="#888"
          fontSize="8"
          fontFamily="monospace"
        >
          Inheritable like property.
        </text>
        <text
          x="0"
          y="32"
          textAnchor="middle"
          fill="#888"
          fontSize="8"
          fontFamily="monospace"
        >
          Outlasts any platform.
        </text>
      </g>

      <path
        d="M 290 115 A 150 150 0 0 1 385 215"
        fill="none"
        stroke="#e8a04a"
        strokeWidth="2"
        markerEnd="url(#arrowhead)"
      />
      <path
        d="M 385 285 A 150 150 0 0 1 290 385"
        fill="none"
        stroke="#e8a04a"
        strokeWidth="2"
        markerEnd="url(#arrowhead)"
      />
      <path
        d="M 210 385 A 150 150 0 0 1 115 285"
        fill="none"
        stroke="#e8a04a"
        strokeWidth="2"
        markerEnd="url(#arrowhead)"
      />
      <path
        d="M 115 215 A 150 150 0 0 1 210 115"
        fill="none"
        stroke="#e8a04a"
        strokeWidth="2"
        markerEnd="url(#arrowhead)"
      />
    </svg>
  )
}

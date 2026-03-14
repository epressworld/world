export function InternetPromisedSvg() {
  return (
    <svg
      viewBox="0 0 800 320"
      className="w-full h-auto max-w-5xl mx-auto"
      xmlns="http://www.w3.org/2000/svg"
    >
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
          <g key={idx} transform={`translate(0, ${40 + idx * 35})`}>
            <text x="0" y="15" fill="#4af0d4" fontSize="16">
              ✓
            </text>
            <text
              x="25"
              y="15"
              fill="#aaa"
              fontSize="12"
              fontFamily="monospace"
            >
              {text}
            </text>
          </g>
        ))}
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
          <g key={idx} transform={`translate(0, ${40 + idx * 35})`}>
            <text x="0" y="15" fill="#ef4444" fontSize="16">
              ✗
            </text>
            <text
              x="25"
              y="15"
              fill="#888"
              fontSize="12"
              fontFamily="monospace"
            >
              {text}
            </text>
          </g>
        ))}
      </g>

      <line
        x1="400"
        y1="50"
        x2="400"
        y2="200"
        stroke="#333"
        strokeWidth="1"
        strokeDasharray="4,4"
      />

      <rect
        x="100"
        y="250"
        width="600"
        height="40"
        rx="8"
        fill="rgba(232,160,74,0.1)"
        stroke="#e8a04a"
        strokeWidth="1"
      />
      <text
        x="400"
        y="275"
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

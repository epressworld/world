export function NodeNetworkSvg() {
  return (
    <svg
      viewBox="0 0 500 400"
      className="w-full h-auto max-w-2xl mx-auto"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <filter id="nodeGlow">
          <feGaussianBlur stdDeviation="2" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <circle
        cx="250"
        cy="200"
        r="70"
        fill="#1a1a1a"
        stroke="#e8a04a"
        strokeWidth="3"
        filter="url(#nodeGlow)"
      />
      <text
        x="250"
        y="175"
        textAnchor="middle"
        fill="#e8a04a"
        fontSize="12"
        fontFamily="monospace"
        fontWeight="bold"
      >
        Your Node
      </text>
      <text
        x="250"
        y="195"
        textAnchor="middle"
        fill="#888"
        fontSize="9"
        fontFamily="monospace"
      >
        Your Identity
      </text>
      <text
        x="250"
        y="210"
        textAnchor="middle"
        fill="#888"
        fontSize="9"
        fontFamily="monospace"
      >
        Your Content
      </text>
      <text
        x="250"
        y="225"
        textAnchor="middle"
        fill="#888"
        fontSize="9"
        fontFamily="monospace"
      >
        Your Connections
      </text>

      {[
        { x: 100, y: 80, label: "Node" },
        { x: 400, y: 80, label: "Node" },
        { x: 100, y: 320, label: "Node" },
        { x: 400, y: 320, label: "Node" },
        { x: 250, y: 350, label: "Node" },
      ].map((node, idx) => (
        <g key={idx}>
          <line
            x1={node.x}
            y1={node.y}
            x2="250"
            y2="200"
            stroke="#333"
            strokeWidth="1"
            strokeDasharray="4,4"
          />
          <circle
            cx={node.x}
            cy={node.y}
            r="35"
            fill="#1a1a1a"
            stroke="#666"
            strokeWidth="1.5"
          />
          <text
            x={node.x}
            y={node.y + 4}
            textAnchor="middle"
            fill="#888"
            fontSize="10"
            fontFamily="monospace"
          >
            {node.label}
          </text>
        </g>
      ))}

      {[
        {
          from: { x: 100, y: 80 },
          to: { x: 250, y: 200 },
          labelX: 160,
          labelY: 130,
        },
        {
          from: { x: 400, y: 80 },
          to: { x: 250, y: 200 },
          labelX: 340,
          labelY: 130,
        },
        {
          from: { x: 100, y: 320 },
          to: { x: 250, y: 200 },
          labelX: 160,
          labelY: 270,
        },
        {
          from: { x: 400, y: 320 },
          to: { x: 250, y: 200 },
          labelX: 340,
          labelY: 270,
        },
        {
          from: { x: 250, y: 350 },
          to: { x: 250, y: 200 },
          labelX: 280,
          labelY: 280,
        },
      ].map((line, idx) => (
        <text
          key={`label-${idx}`}
          x={line.labelX}
          y={line.labelY}
          fill="#e8a04a"
          fontSize="8"
          fontFamily="monospace"
        >
          EWP
        </text>
      ))}
    </svg>
  )
}

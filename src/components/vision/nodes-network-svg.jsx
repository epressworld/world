export function NodesNetworkSvg() {
  const nodes = [
    { x: 80, y: 60 },
    { x: 200, y: 40 },
    { x: 320, y: 70 },
    { x: 440, y: 50 },
    { x: 60, y: 150 },
    { x: 180, y: 140 },
    { x: 300, y: 160 },
    { x: 420, y: 130 },
    { x: 100, y: 240 },
    { x: 220, y: 220 },
    { x: 340, y: 250 },
    { x: 460, y: 210 },
    { x: 140, y: 320 },
    { x: 280, y: 300 },
    { x: 400, y: 330 },
  ]

  const connections = [
    [0, 1],
    [1, 2],
    [2, 3],
    [0, 4],
    [1, 5],
    [2, 6],
    [3, 7],
    [4, 5],
    [5, 6],
    [6, 7],
    [4, 8],
    [5, 9],
    [6, 10],
    [7, 11],
    [8, 9],
    [9, 10],
    [10, 11],
    [8, 12],
    [9, 13],
    [10, 14],
    [12, 13],
    [13, 14],
    [0, 5],
    [3, 6],
    [8, 13],
    [11, 14],
  ]

  const quoteChain = [1, 5, 9, 13]

  return (
    <svg
      viewBox="0 0 520 380"
      className="w-full h-auto max-w-3xl mx-auto"
      xmlns="http://www.w3.org/2000/svg"
    >
      <text
        x="260"
        y="20"
        textAnchor="middle"
        fill="#666"
        fontSize="10"
        fontFamily="monospace"
      >
        Every PoS is a node. Every quote is a directed edge.
      </text>

      {connections.map(([from, to], idx) => {
        const isQuoteChainEdge =
          quoteChain.includes(from) &&
          quoteChain.includes(to) &&
          Math.abs(quoteChain.indexOf(from) - quoteChain.indexOf(to)) === 1
        return (
          <line
            key={idx}
            x1={nodes[from].x}
            y1={nodes[from].y}
            x2={nodes[to].x}
            y2={nodes[to].y}
            stroke={isQuoteChainEdge ? "#e8a04a" : "#333"}
            strokeWidth={isQuoteChainEdge ? "2" : "1"}
          />
        )
      })}

      {nodes.map((node, idx) => (
        <g key={idx}>
          <circle
            cx={node.x}
            cy={node.y}
            r="20"
            fill="#1a1a1a"
            stroke={quoteChain.includes(idx) ? "#e8a04a" : "#444"}
            strokeWidth={quoteChain.includes(idx) ? "2" : "1"}
          />
          <text
            x={node.x}
            y={node.y + 3}
            textAnchor="middle"
            fill={quoteChain.includes(idx) ? "#e8a04a" : "#666"}
            fontSize="7"
            fontFamily="monospace"
          >
            PoS
          </text>
        </g>
      ))}

      {quoteChain.slice(0, -1).map((fromIdx, idx) => {
        const toIdx = quoteChain[idx + 1]
        const from = nodes[fromIdx]
        const to = nodes[toIdx]
        return (
          <g key={`quote-${idx}`}>
            <polygon
              points={`${to.x},${to.y} ${to.x - 8},${to.y - 5} ${to.x - 8},${to.y + 5}`}
              fill="#e8a04a"
              transform={`rotate(${(Math.atan2(to.y - from.y, to.x - from.x) * 180) / Math.PI}, ${to.x}, ${to.y})`}
            />
          </g>
        )
      })}
    </svg>
  )
}

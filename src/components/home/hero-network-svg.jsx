"use client"

import { useState } from "react"

export function HeroNetworkSvg() {
  const [hoveredNode, setHoveredNode] = useState(null)

  const nodes = [
    { id: 1, cx: 150, cy: 100, r: 8 },
    { id: 2, cx: 280, cy: 60, r: 10 },
    { id: 3, cx: 400, cy: 120, r: 8 },
    { id: 4, cx: 520, cy: 80, r: 9 },
    { id: 5, cx: 180, cy: 200, r: 8 },
    { id: 6, cx: 320, cy: 180, r: 11 },
    { id: 7, cx: 450, cy: 220, r: 8 },
    { id: 8, cx: 550, cy: 180, r: 9 },
    { id: 9, cx: 100, cy: 150, r: 7 },
    { id: 10, cx: 380, cy: 40, r: 7 },
  ]

  const connections = [
    [1, 2],
    [2, 3],
    [3, 4],
    [1, 5],
    [5, 6],
    [6, 7],
    [7, 8],
    [2, 6],
    [3, 7],
    [1, 9],
    [9, 5],
    [3, 10],
    [10, 4],
    [6, 3],
    [5, 2],
  ]

  const handleMouseMove = (e) => {
    const svg = e.currentTarget
    const rect = svg.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width) * 650
    const y = ((e.clientY - rect.top) / rect.height) * 280

    let closestNode = null
    let minDist = 30

    nodes.forEach((node) => {
      const dist = Math.sqrt((node.cx - x) ** 2 + (node.cy - y) ** 2)
      if (dist < minDist) {
        minDist = dist
        closestNode = node
      }
    })

    setHoveredNode(closestNode)
  }

  return (
    <svg
      viewBox="0 0 650 280"
      className="w-full h-auto"
      xmlns="http://www.w3.org/2000/svg"
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setHoveredNode(null)}
    >
      <defs>
        <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="2" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {connections.map(([from, to], idx) => {
        const fromNode = nodes.find((n) => n.id === from)
        const toNode = nodes.find((n) => n.id === to)
        const isHighlighted =
          hoveredNode && (hoveredNode.id === from || hoveredNode.id === to)
        return (
          <line
            key={idx}
            x1={fromNode.cx}
            y1={fromNode.cy}
            x2={toNode.cx}
            y2={toNode.cy}
            stroke={
              isHighlighted
                ? "rgba(247, 147, 26, 0.8)"
                : "rgba(247, 147, 26, 0.3)"
            }
            strokeWidth={isHighlighted ? "2" : "1"}
            className="transition-all duration-200"
          />
        )
      })}

      {nodes.map((node) => {
        const isHovered = hoveredNode?.id === node.id
        return (
          <circle
            key={node.id}
            cx={node.cx}
            cy={node.cy}
            r={isHovered ? node.r * 1.5 : node.r}
            fill={
              isHovered ? "rgba(247, 147, 26, 0.5)" : "rgba(255, 255, 255, 0.1)"
            }
            stroke={isHovered ? "#F7931A" : "rgba(247, 147, 26, 0.5)"}
            strokeWidth={isHovered ? "2" : "1"}
            filter="url(#glow)"
            className="transition-all duration-200"
          />
        )
      })}

      {hoveredNode && (
        <g>
          <rect
            x={hoveredNode.cx - 40}
            y={hoveredNode.cy - 35}
            width="80"
            height="24"
            rx="4"
            fill="#1a1a1a"
            stroke="#F7931A"
            strokeWidth="1"
          />
          <text
            x={hoveredNode.cx}
            y={hoveredNode.cy - 18}
            textAnchor="middle"
            fill="#F7931A"
            fontSize="10"
            fontFamily="monospace"
          >
            your node
          </text>
        </g>
      )}
    </svg>
  )
}

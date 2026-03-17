"use client"

import { motion } from "framer-motion"

export function NotifyPullAnimation() {
  const followerNodes = [
    { id: "bob", x: 120, y: 60, label: "Bob" },
    { id: "carol", x: 400, y: 80, label: "Carol" },
    { id: "dave", x: 260, y: 200, label: "Dave" },
  ]

  return (
    <div className="w-full max-w-[600px] mx-auto">
      <svg
        viewBox="0 0 520 280"
        className="w-full"
        fill="none"
        stroke="currentColor"
      >
        <defs>
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {followerNodes.map((follower) => (
          <g key={follower.id}>
            <motion.line
              x1={260}
              y1={140}
              x2={follower.x}
              y2={follower.y}
              stroke="#e8a04a"
              strokeOpacity="0.15"
              strokeWidth="1"
              strokeDasharray="4 4"
            />
          </g>
        ))}

        {followerNodes.map((follower, idx) => (
          <g key={`notify-${follower.id}`}>
            <motion.circle
              cx={260}
              cy={140}
              r="5"
              fill="#e8a04a"
              filter="url(#glow)"
              initial={{ cx: 260, cy: 140, opacity: 0 }}
              animate={{
                cx: [260, follower.x],
                cy: [140, follower.y],
                opacity: [0, 1, 1, 0],
              }}
              transition={{
                duration: 1.2,
                delay: idx * 0.3,
                repeat: Infinity,
                repeatDelay: 3,
                ease: "easeOut",
              }}
            />
          </g>
        ))}

        {followerNodes.map((follower, idx) => (
          <g key={`pull-${follower.id}`}>
            <motion.circle
              cx={follower.x}
              cy={follower.y}
              r="8"
              fill="#34D399"
              fillOpacity="0.8"
              filter="url(#glow)"
              initial={{ cx: follower.x, cy: follower.y, opacity: 0 }}
              animate={{
                cx: [follower.x, 260, follower.x],
                cy: [follower.y, 140, follower.y],
                opacity: [0, 1, 1, 0],
              }}
              transition={{
                duration: 2,
                delay: idx * 0.3 + 1.2,
                repeat: Infinity,
                repeatDelay: 2.2,
                ease: "easeInOut",
              }}
            />
          </g>
        ))}

        {followerNodes.map((follower, idx) => (
          <motion.g
            key={`verified-${follower.id}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 1, 0] }}
            transition={{
              duration: 4,
              delay: idx * 0.3 + 1.2,
              repeat: Infinity,
              repeatDelay: 1,
              times: [0, 0.1, 0.9, 1],
            }}
          >
            <circle
              cx={follower.x + 20}
              cy={follower.y - 15}
              r="10"
              fill="#34D399"
              fillOpacity="0.2"
              stroke="#34D399"
              strokeWidth="1.5"
            />
            <text
              x={follower.x + 20}
              y={follower.y - 12}
              textAnchor="middle"
              fill="#34D399"
              fontSize="8"
              fontWeight="bold"
            >
              ✓
            </text>
          </motion.g>
        ))}

        <motion.g
          initial={{ scale: 1 }}
          animate={{ scale: [1, 1.1, 1] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <circle
            cx="260"
            cy="140"
            r="35"
            fill="#e8a04a"
            fillOpacity="0.15"
            stroke="#e8a04a"
            strokeWidth="2"
            filter="url(#glow)"
          />
          <circle cx="260" cy="140" r="25" fill="#e8a04a" fillOpacity="0.25" />
          <text
            x="260"
            y="135"
            textAnchor="middle"
            fill="#e8a04a"
            fontSize="10"
            fontWeight="700"
          >
            Alice
          </text>
          <text
            x="260"
            y="148"
            textAnchor="middle"
            fill="#e8a04a"
            fillOpacity="0.8"
            fontSize="7"
          >
            Publisher
          </text>
        </motion.g>

        {followerNodes.map((follower) => (
          <g key={follower.id}>
            <motion.circle
              cx={follower.x}
              cy={follower.y}
              r="25"
              fill="currentColor"
              fillOpacity="0.08"
              stroke="currentColor"
              strokeOpacity="0.3"
              strokeWidth="1.5"
              initial={{ stroke: "#666", fillOpacity: 0.08 }}
              animate={{
                stroke: ["#666", "#34D399", "#34D399", "#666"],
                fillOpacity: [0.08, 0.15, 0.15, 0.08],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                times: [0, 0.25, 0.75, 1],
              }}
            />
            <text
              x={follower.x}
              y={follower.y - 5}
              textAnchor="middle"
              fill="currentColor"
              fillOpacity="0.9"
              fontSize="10"
              fontWeight="600"
            >
              {follower.label}
            </text>
            <text
              x={follower.x}
              y={follower.y + 8}
              textAnchor="middle"
              fill="currentColor"
              fillOpacity="0.5"
              fontSize="7"
            >
              Follower
            </text>
          </g>
        ))}

        <g transform="translate(10, 240)">
          <rect
            x="0"
            y="0"
            width="15"
            height="15"
            rx="3"
            fill="#e8a04a"
            fillOpacity="0.6"
          />
          <text
            x="22"
            y="11"
            fill="currentColor"
            fillOpacity="0.7"
            fontSize="9"
          >
            = PoS Notification (~200 bytes)
          </text>
        </g>

        <g transform="translate(200, 240)">
          <circle cx="7" cy="7" r="7" fill="#34D399" fillOpacity="0.8" />
          <text
            x="22"
            y="11"
            fill="currentColor"
            fillOpacity="0.7"
            fontSize="9"
          >
            = Content Pull (full data)
          </text>
        </g>
      </svg>
    </div>
  )
}

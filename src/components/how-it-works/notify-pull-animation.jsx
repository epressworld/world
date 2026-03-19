"use client"

import { motion } from "framer-motion"

export function NotifyPullAnimation() {
  const followerNodes = [
    { id: "bob", x: 180, y: 100, label: "Bob" },
    { id: "carol", x: 620, y: 120, label: "Carol" },
    { id: "dave", x: 400, y: 320, label: "Dave" },
  ]

  return (
    <div className="w-full max-w-[600px] mx-auto">
      <svg viewBox="0 0 800 420" className="w-full" fill="none">
        <defs>
          <filter id="glowNp" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="4" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <linearGradient id="aliceGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#e8a04a" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#e8a04a" stopOpacity="0.05" />
          </linearGradient>
          <linearGradient id="followerGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#34D399" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#34D399" stopOpacity="0.05" />
          </linearGradient>
        </defs>

        {followerNodes.map((follower) => (
          <motion.line
            key={`line-${follower.id}`}
            x1={400}
            y1={210}
            x2={follower.x}
            y2={follower.y}
            stroke="#e8a04a"
            strokeOpacity="0.12"
            strokeWidth="1"
            strokeDasharray="6 6"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.5 }}
          />
        ))}

        {followerNodes.map((follower, idx) => (
          <motion.circle
            key={`notify-${follower.id}`}
            cx={400}
            cy={210}
            r="6"
            fill="#e8a04a"
            filter="url(#glowNp)"
            initial={{ cx: 400, cy: 210, opacity: 0 }}
            animate={{
              cx: [400, follower.x],
              cy: [210, follower.y],
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
        ))}

        {followerNodes.map((follower, idx) => (
          <motion.circle
            key={`pull-${follower.id}`}
            cx={follower.x}
            cy={follower.y}
            r="10"
            fill="#34D399"
            fillOpacity="0.8"
            filter="url(#glowNp)"
            initial={{ cx: follower.x, cy: follower.y, opacity: 0 }}
            animate={{
              cx: [follower.x, 400, follower.x],
              cy: [follower.y, 210, follower.y],
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
              cx={follower.x + 30}
              cy={follower.y - 25}
              r="14"
              fill="#34D399"
              fillOpacity="0.15"
              stroke="#34D399"
              strokeWidth="1"
            />
            <path
              d={`M${follower.x + 24} ${follower.y - 25} L${follower.x + 28} ${follower.y - 21} L${follower.x + 36} ${follower.y - 29}`}
              stroke="#34D399"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            />
          </motion.g>
        ))}

        <motion.g
          initial={{ scale: 1 }}
          animate={{ scale: [1, 1.05, 1] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <circle
            cx="400"
            cy="210"
            r="55"
            fill="url(#aliceGrad)"
            stroke="#e8a04a"
            strokeWidth="1"
            filter="url(#glowNp)"
          />
          <circle cx="400" cy="210" r="40" fill="#e8a04a" fillOpacity="0.2" />
          <text
            x="400"
            y="202"
            textAnchor="middle"
            fill="#e8a04a"
            fontSize="18"
            fontFamily="system-ui, sans-serif"
            fontWeight="600"
          >
            Alice
          </text>
          <text
            x="400"
            y="224"
            textAnchor="middle"
            fill="#e8a04a"
            fillOpacity="0.7"
            fontSize="12"
            fontFamily="system-ui, sans-serif"
          >
            Publisher
          </text>
        </motion.g>

        {followerNodes.map((follower) => (
          <g key={follower.id}>
            <motion.circle
              cx={follower.x}
              cy={follower.y}
              r="40"
              fill="url(#followerGrad)"
              stroke="#34D399"
              strokeOpacity="0.3"
              strokeWidth="1"
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
              y={follower.y - 8}
              textAnchor="middle"
              fill="#34D399"
              fillOpacity="0.9"
              fontSize="16"
              fontFamily="system-ui, sans-serif"
              fontWeight="600"
            >
              {follower.label}
            </text>
            <text
              x={follower.x}
              y={follower.y + 12}
              textAnchor="middle"
              fill="#34D399"
              fillOpacity="0.6"
              fontSize="12"
              fontFamily="system-ui, sans-serif"
            >
              Follower
            </text>
          </g>
        ))}

        <g transform="translate(50, 370)">
          <rect
            x="0"
            y="0"
            width="24"
            height="24"
            rx="4"
            fill="#e8a04a"
            fillOpacity="0.6"
          />
          <text
            x="36"
            y="17"
            fill="#e8a04a"
            fillOpacity="0.8"
            fontSize="14"
            fontFamily="system-ui, sans-serif"
          >
            PoS Notification (~200 bytes)
          </text>
        </g>

        <g transform="translate(350, 370)">
          <circle cx="12" cy="12" r="12" fill="#34D399" fillOpacity="0.7" />
          <text
            x="36"
            y="17"
            fill="#34D399"
            fillOpacity="0.8"
            fontSize="14"
            fontFamily="system-ui, sans-serif"
          >
            Content Pull (full data)
          </text>
        </g>
      </svg>
    </div>
  )
}

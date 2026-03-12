export function AgentEraVisionSvg() {
  return (
    <svg
      viewBox="0 0 650 300"
      className="w-full h-auto max-w-4xl mx-auto"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="agentGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#1a2a1a" />
          <stop offset="100%" stopColor="#0f1a12" />
        </linearGradient>
      </defs>

      {}
      <text
        x="325"
        y="25"
        textAnchor="middle"
        fill="#a0a0a0"
        fontSize="11"
        fontFamily="monospace"
      >
        How AI Agents Work with epress
      </text>

      {}
      <rect
        x="30"
        y="50"
        width="180"
        height="220"
        rx="12"
        fill="url(#agentGrad)"
        stroke="#34D399"
        strokeOpacity="0.5"
      />
      <text
        x="120"
        y="75"
        textAnchor="middle"
        fill="#34D399"
        fontSize="12"
        fontFamily="sans-serif"
        fontWeight="600"
      >
        Scenario 1: You Follow Bob
      </text>

      {}
      <circle cx="70" cy="110" r="18" fill="#1a2a1a" stroke="#F7931A" />
      <text x="70" y="115" textAnchor="middle" fill="#FBBF24" fontSize="9">
        Alice
      </text>
      <circle cx="50" cy="150" r="14" fill="#0f1a12" stroke="#F7931A" />
      <text x="50" y="154" textAnchor="middle" fill="#F7931A" fontSize="8">
        Agent
      </text>
      <path d="M55 130 L55 135" stroke="#F7931A" strokeWidth="1.5" />
      <polygon points="55,135 52,130 58,130" fill="#F7931A" />

      {}
      <rect
        x="100"
        y="130"
        width="80"
        height="60"
        rx="6"
        fill="#151515"
        stroke="#34D399"
        strokeOpacity="0.7"
      />
      <text
        x="140"
        y="155"
        textAnchor="middle"
        fill="#6EE7B7"
        fontSize="8"
        fontFamily="monospace"
      >
        Alice's
      </text>
      <text
        x="140"
        y="170"
        textAnchor="middle"
        fill="#6EE7B7"
        fontSize="8"
        fontFamily="monospace"
      >
        epress Node
      </text>
      <path
        d="M70 150 L100 155"
        stroke="#34D399"
        strokeWidth="1.5"
        strokeOpacity="0.7"
      />
      <polygon
        points="100,155 92,152 95,158"
        fill="#34D399"
        fillOpacity="0.7"
      />

      {}
      <rect
        x="100"
        y="210"
        width="80"
        height="40"
        rx="6"
        fill="#0f1a12"
        stroke="#F7931A"
        strokeOpacity="0.5"
      />
      <text
        x="140"
        y="225"
        textAnchor="middle"
        fill="#FBBF24"
        fontSize="8"
        fontFamily="monospace"
      >
        Bob's updates
      </text>
      <text
        x="140"
        y="238"
        textAnchor="middle"
        fill="#34D399"
        fontSize="7"
        fontFamily="monospace"
      >
        (cached)
      </text>
      <path
        d="M140 190 L140 210"
        stroke="#34D399"
        strokeWidth="1.5"
        strokeOpacity="0.7"
      />
      <polygon
        points="140,210 137,205 143,205"
        fill="#34D399"
        fillOpacity="0.7"
      />

      {}
      <text
        x="120"
        y="280"
        textAnchor="middle"
        fill="#a0a0a0"
        fontSize="8"
        fontFamily="monospace"
      >
        Agent reads from YOUR node (Bob's content already cached)
      </text>

      {}
      <rect
        x="440"
        y="50"
        width="180"
        height="220"
        rx="12"
        fill="url(#agentGrad)"
        stroke="#F7931A"
        strokeOpacity="0.5"
      />
      <text
        x="530"
        y="75"
        textAnchor="middle"
        fill="#F7931A"
        fontSize="12"
        fontFamily="sans-serif"
        fontWeight="600"
      >
        Scenario 2: You Don't Follow Bob
      </text>

      {}
      <circle cx="480" cy="110" r="18" fill="#1a2a1a" stroke="#F7931A" />
      <text x="480" y="115" textAnchor="middle" fill="#FBBF24" fontSize="9">
        Alice
      </text>
      <circle cx="460" cy="150" r="14" fill="#0f1a12" stroke="#F7931A" />
      <text x="460" y="154" textAnchor="middle" fill="#F7931A" fontSize="8">
        Agent
      </text>
      <path d="M465 130 L465 135" stroke="#F7931A" strokeWidth="1.5" />
      <polygon points="465,135 462,130 468,130" fill="#F7931A" />

      {}
      <rect
        x="510"
        y="130"
        width="80"
        height="50"
        rx="6"
        fill="#151515"
        stroke="#34D399"
        strokeOpacity="0.7"
      />
      <text
        x="550"
        y="155"
        textAnchor="middle"
        fill="#6EE7B7"
        fontSize="8"
        fontFamily="monospace"
      >
        Alice's
      </text>
      <text
        x="550"
        y="168"
        textAnchor="middle"
        fill="#6EE7B7"
        fontSize="8"
        fontFamily="monospace"
      >
        epress Node
      </text>
      <path
        d="M480 150 L510 155"
        stroke="#34D399"
        strokeWidth="1.5"
        strokeOpacity="0.7"
      />
      <polygon
        points="510,155 502,152 505,158"
        fill="#34D399"
        fillOpacity="0.7"
      />

      {}
      <rect
        x="510"
        y="200"
        width="80"
        height="50"
        rx="6"
        fill="#1a1308"
        stroke="#F7931A"
        strokeOpacity="0.7"
      />
      <text
        x="550"
        y="220"
        textAnchor="middle"
        fill="#FBBF24"
        fontSize="8"
        fontFamily="monospace"
      >
        Bob's
      </text>
      <text
        x="550"
        y="233"
        textAnchor="middle"
        fill="#FBBF24"
        fontSize="8"
        fontFamily="monospace"
      >
        epress Node
      </text>

      {}
      <path
        d="M510 225 L475 225"
        stroke="#F7931A"
        strokeWidth="2"
        strokeDasharray="4,4"
      />
      <polygon points="475,225 483,221 483,229" fill="#F7931A" />
      <text
        x="492"
        y="218"
        textAnchor="middle"
        fill="#F7931A"
        fontSize="7"
        fontFamily="monospace"
      >
        direct
      </text>
      <text
        x="492"
        y="235"
        textAnchor="middle"
        fill="#F7931A"
        fontSize="7"
        fontFamily="monospace"
      >
        access
      </text>

      {}
      <text
        x="530"
        y="280"
        textAnchor="middle"
        fill="#a0a0a0"
        fontSize="8"
        fontFamily="monospace"
      >
        Agent directly queries Bob's node (no cache)
      </text>

      {}
      <text
        x="325"
        y="165"
        textAnchor="middle"
        fill="#34D399"
        fontSize="10"
        fontFamily="monospace"
      >
        VS
      </text>

      {}
      <rect
        x="280"
        y="180"
        width="90"
        height="50"
        rx="6"
        fill="#0f0f0f"
        stroke="#F7931A"
        strokeOpacity="0.3"
      />
      <text
        x="325"
        y="200"
        textAnchor="middle"
        fill="#FBBF24"
        fontSize="7"
        fontFamily="monospace"
      >
        No Agent-to-Agent
      </text>
      <text
        x="325"
        y="215"
        textAnchor="middle"
        fill="#a0a0a0"
        fontSize="7"
        fontFamily="monospace"
      >
        communication
      </text>

      {}
      <rect
        x="20"
        y="45"
        width="610"
        height="240"
        rx="0"
        fill="none"
        stroke="#34D399"
        strokeOpacity="0.2"
        strokeDasharray="8,4"
      />
      <text
        x="325"
        y="295"
        textAnchor="middle"
        fill="#a0a0a0"
        fontSize="8"
        fontFamily="monospace"
      >
        Agents act on behalf of owners, never interact with other Agents
      </text>
    </svg>
  )
}

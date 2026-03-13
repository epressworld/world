export function AgentEraVisionSvg() {
  return (
    <svg
      viewBox="0 0 800 480"
      className="w-full h-auto max-w-4xl mx-auto hidden md:block"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <filter id="agentGlow">
          <feGaussianBlur stdDeviation="2" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <filter id="nodeGlow">
          <feGaussianBlur stdDeviation="3" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <circle
        cx="150"
        cy="60"
        r="35"
        fill="#1a1a1a"
        stroke="#666"
        strokeWidth="2"
      />
      <text x="150" y="67" textAnchor="middle" fontSize="24">
        👤
      </text>
      <text
        x="150"
        y="110"
        textAnchor="middle"
        fill="#888"
        fontSize="11"
        fontFamily="monospace"
      >
        Alice
      </text>

      <circle
        cx="650"
        cy="60"
        r="35"
        fill="#1a1a1a"
        stroke="#666"
        strokeWidth="2"
      />
      <text x="650" y="67" textAnchor="middle" fontSize="24">
        👤
      </text>
      <text
        x="650"
        y="110"
        textAnchor="middle"
        fill="#888"
        fontSize="11"
        fontFamily="monospace"
      >
        Bob
      </text>

      <line x1="150" y1="125" x2="150" y2="160" stroke="#555" strokeWidth="2" />
      <polygon points="150,168 144,156 156,156" fill="#555" />

      <text
        x="110"
        y="145"
        textAnchor="end"
        fill="#666"
        fontSize="9"
        fontFamily="monospace"
      >
        "Post this article"
      </text>
      <text
        x="110"
        y="158"
        textAnchor="end"
        fill="#666"
        fontSize="9"
        fontFamily="monospace"
      >
        "Filter my timeline"
      </text>

      <line x1="650" y1="125" x2="650" y2="160" stroke="#555" strokeWidth="2" />
      <polygon points="650,168 644,156 656,156" fill="#555" />

      <text
        x="690"
        y="145"
        textAnchor="start"
        fill="#666"
        fontSize="9"
        fontFamily="monospace"
      >
        "Notify me of updates"
      </text>
      <text
        x="690"
        y="158"
        textAnchor="start"
        fill="#666"
        fontSize="9"
        fontFamily="monospace"
      >
        "Summarize posts"
      </text>

      <rect
        x="75"
        y="180"
        width="150"
        height="55"
        rx="12"
        fill="#1a150f"
        stroke="#e8a04a"
        strokeWidth="2"
        filter="url(#agentGlow)"
      />
      <text
        x="150"
        y="203"
        textAnchor="middle"
        fill="#e8a04a"
        fontSize="12"
        fontFamily="monospace"
        fontWeight="600"
      >
        Alice's Agent
      </text>
      <text
        x="150"
        y="222"
        textAnchor="middle"
        fill="#a08050"
        fontSize="9"
        fontFamily="monospace"
      >
        AI Assistant
      </text>

      <rect
        x="575"
        y="180"
        width="150"
        height="55"
        rx="12"
        fill="#1a150f"
        stroke="#e8a04a"
        strokeWidth="2"
        filter="url(#agentGlow)"
      />
      <text
        x="650"
        y="203"
        textAnchor="middle"
        fill="#e8a04a"
        fontSize="12"
        fontFamily="monospace"
        fontWeight="600"
      >
        Bob's Agent
      </text>
      <text
        x="650"
        y="222"
        textAnchor="middle"
        fill="#a08050"
        fontSize="9"
        fontFamily="monospace"
      >
        AI Assistant
      </text>

      <line
        x1="150"
        y1="240"
        x2="150"
        y2="290"
        stroke="#e8a04a"
        strokeWidth="2"
        strokeDasharray="6,4"
        strokeOpacity="0.7"
      />
      <polygon points="150,298 144,286 156,286" fill="#e8a04a" />
      <text
        x="165"
        y="270"
        textAnchor="start"
        fill="#a08050"
        fontSize="8"
        fontFamily="monospace"
      >
        operates
      </text>

      <line
        x1="650"
        y1="240"
        x2="650"
        y2="290"
        stroke="#e8a04a"
        strokeWidth="2"
        strokeDasharray="6,4"
        strokeOpacity="0.7"
      />
      <polygon points="650,298 644,286 656,286" fill="#e8a04a" />
      <text
        x="635"
        y="270"
        textAnchor="end"
        fill="#a08050"
        fontSize="8"
        fontFamily="monospace"
      >
        operates
      </text>

      <rect
        x="75"
        y="310"
        width="150"
        height="65"
        rx="12"
        fill="#0f1a18"
        stroke="#4af0d4"
        strokeWidth="2"
        filter="url(#nodeGlow)"
      />
      <text
        x="150"
        y="338"
        textAnchor="middle"
        fill="#4af0d4"
        fontSize="12"
        fontFamily="monospace"
        fontWeight="600"
      >
        Alice's Node
      </text>
      <text
        x="150"
        y="358"
        textAnchor="middle"
        fill="#2a9080"
        fontSize="9"
        fontFamily="monospace"
      >
        epress Node
      </text>

      <rect
        x="575"
        y="310"
        width="150"
        height="65"
        rx="12"
        fill="#0f1a18"
        stroke="#4af0d4"
        strokeWidth="2"
        filter="url(#nodeGlow)"
      />
      <text
        x="650"
        y="338"
        textAnchor="middle"
        fill="#4af0d4"
        fontSize="12"
        fontFamily="monospace"
        fontWeight="600"
      >
        Bob's Node
      </text>
      <text
        x="650"
        y="358"
        textAnchor="middle"
        fill="#2a9080"
        fontSize="9"
        fontFamily="monospace"
      >
        epress Node
      </text>

      <line
        x1="225"
        y1="342"
        x2="328"
        y2="342"
        stroke="#4af0d4"
        strokeWidth="3"
      />
      <line
        x1="472"
        y1="342"
        x2="575"
        y2="342"
        stroke="#4af0d4"
        strokeWidth="3"
      />

      <rect
        x="328"
        y="325"
        width="144"
        height="34"
        rx="6"
        fill="#0f1a18"
        stroke="#4af0d4"
        strokeWidth="1"
        strokeOpacity="0.6"
      />
      <text
        x="400"
        y="347"
        textAnchor="middle"
        fill="#4af0d4"
        fontSize="9"
        fontFamily="monospace"
        fontWeight="500"
      >
        epress world protocol
      </text>

      <polygon points="225,342 238,336 238,348" fill="#4af0d4" />
      <polygon points="575,342 562,336 562,348" fill="#4af0d4" />

      <text
        x="400"
        y="420"
        textAnchor="middle"
        fill="#666"
        fontSize="10"
        fontFamily="monospace"
      >
        Only open, decentralized networks can fully support this vision.
      </text>

      <rect
        x="40"
        y="25"
        width="220"
        height="360"
        rx="12"
        fill="none"
        stroke="#333"
        strokeWidth="1"
        strokeDasharray="4,4"
        strokeOpacity="0.3"
      />
      <rect
        x="540"
        y="25"
        width="220"
        height="360"
        rx="12"
        fill="none"
        stroke="#333"
        strokeWidth="1"
        strokeDasharray="4,4"
        strokeOpacity="0.3"
      />
    </svg>
  )
}

export function AgentEraVisionSvgMobile() {
  return (
    <svg
      viewBox="0 0 400 720"
      className="w-full h-auto md:hidden"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <filter id="agentGlowMobile">
          <feGaussianBlur stdDeviation="2" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <filter id="nodeGlowMobile">
          <feGaussianBlur stdDeviation="3" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <circle
        cx="100"
        cy="40"
        r="28"
        fill="#1a1a1a"
        stroke="#666"
        strokeWidth="2"
      />
      <text x="100" y="46" textAnchor="middle" fontSize="18">
        👤
      </text>
      <text
        x="100"
        y="82"
        textAnchor="middle"
        fill="#888"
        fontSize="10"
        fontFamily="monospace"
      >
        Alice
      </text>

      <line x1="100" y1="95" x2="100" y2="120" stroke="#555" strokeWidth="2" />
      <polygon points="100,128 94,118 106,118" fill="#555" />

      <text
        x="130"
        y="108"
        textAnchor="start"
        fill="#666"
        fontSize="8"
        fontFamily="monospace"
      >
        "Post this"
      </text>

      <rect
        x="35"
        y="140"
        width="130"
        height="50"
        rx="10"
        fill="#1a150f"
        stroke="#e8a04a"
        strokeWidth="2"
        filter="url(#agentGlowMobile)"
      />
      <text
        x="100"
        y="162"
        textAnchor="middle"
        fill="#e8a04a"
        fontSize="11"
        fontFamily="monospace"
        fontWeight="600"
      >
        Alice's Agent
      </text>
      <text
        x="100"
        y="178"
        textAnchor="middle"
        fill="#a08050"
        fontSize="8"
        fontFamily="monospace"
      >
        AI Assistant
      </text>

      <line
        x1="100"
        y1="195"
        x2="100"
        y2="235"
        stroke="#e8a04a"
        strokeWidth="2"
        strokeDasharray="6,4"
        strokeOpacity="0.7"
      />
      <polygon points="100,243 94,233 106,233" fill="#e8a04a" />

      <rect
        x="35"
        y="255"
        width="130"
        height="55"
        rx="10"
        fill="#0f1a18"
        stroke="#4af0d4"
        strokeWidth="2"
        filter="url(#nodeGlowMobile)"
      />
      <text
        x="100"
        y="280"
        textAnchor="middle"
        fill="#4af0d4"
        fontSize="11"
        fontFamily="monospace"
        fontWeight="600"
      >
        Alice's Node
      </text>
      <text
        x="100"
        y="297"
        textAnchor="middle"
        fill="#2a9080"
        fontSize="8"
        fontFamily="monospace"
      >
        epress Node
      </text>

      <line
        x1="165"
        y1="282"
        x2="235"
        y2="282"
        stroke="#4af0d4"
        strokeWidth="2"
        strokeOpacity="0.7"
      />
      <polygon points="165,282 178,276 178,288" fill="#4af0d4" />
      <polygon points="235,282 222,276 222,288" fill="#4af0d4" />

      <rect
        x="170"
        y="268"
        width="60"
        height="22"
        rx="4"
        fill="#0f1a18"
        stroke="#4af0d4"
        strokeWidth="1"
        strokeOpacity="0.6"
      />
      <text
        x="200"
        y="283"
        textAnchor="middle"
        fill="#4af0d4"
        fontSize="8"
        fontFamily="monospace"
        fontWeight="500"
      >
        EWP
      </text>

      <rect
        x="235"
        y="255"
        width="130"
        height="55"
        rx="10"
        fill="#0f1a18"
        stroke="#4af0d4"
        strokeWidth="2"
        filter="url(#nodeGlowMobile)"
      />
      <text
        x="300"
        y="280"
        textAnchor="middle"
        fill="#4af0d4"
        fontSize="11"
        fontFamily="monospace"
        fontWeight="600"
      >
        Bob's Node
      </text>
      <text
        x="300"
        y="297"
        textAnchor="middle"
        fill="#2a9080"
        fontSize="8"
        fontFamily="monospace"
      >
        epress Node
      </text>

      <line
        x1="300"
        y1="195"
        x2="300"
        y2="235"
        stroke="#e8a04a"
        strokeWidth="2"
        strokeDasharray="6,4"
        strokeOpacity="0.7"
      />
      <polygon points="300,243 294,233 306,233" fill="#e8a04a" />

      <rect
        x="235"
        y="140"
        width="130"
        height="50"
        rx="10"
        fill="#1a150f"
        stroke="#e8a04a"
        strokeWidth="2"
        filter="url(#agentGlowMobile)"
      />
      <text
        x="300"
        y="162"
        textAnchor="middle"
        fill="#e8a04a"
        fontSize="11"
        fontFamily="monospace"
        fontWeight="600"
      >
        Bob's Agent
      </text>
      <text
        x="300"
        y="178"
        textAnchor="middle"
        fill="#a08050"
        fontSize="8"
        fontFamily="monospace"
      >
        AI Assistant
      </text>

      <line x1="300" y1="95" x2="300" y2="120" stroke="#555" strokeWidth="2" />
      <polygon points="300,128 294,118 306,118" fill="#555" />

      <text
        x="270"
        y="108"
        textAnchor="end"
        fill="#666"
        fontSize="8"
        fontFamily="monospace"
      >
        "Notify me"
      </text>

      <circle
        cx="300"
        cy="40"
        r="28"
        fill="#1a1a1a"
        stroke="#666"
        strokeWidth="2"
      />
      <text x="300" y="46" textAnchor="middle" fontSize="18">
        👤
      </text>
      <text
        x="300"
        y="82"
        textAnchor="middle"
        fill="#888"
        fontSize="10"
        fontFamily="monospace"
      >
        Bob
      </text>

      <line
        x1="170"
        y1="378"
        x2="230"
        y2="378"
        stroke="#4af0d4"
        strokeWidth="2"
        strokeOpacity="0.5"
      />

      <text
        x="200"
        y="430"
        textAnchor="middle"
        fill="#666"
        fontSize="9"
        fontFamily="monospace"
      >
        Only open, decentralized networks
      </text>
      <text
        x="200"
        y="445"
        textAnchor="middle"
        fill="#666"
        fontSize="9"
        fontFamily="monospace"
      >
        can fully support this vision.
      </text>
    </svg>
  )
}

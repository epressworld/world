export function ComparisonSvg() {
  return (
    <svg
      viewBox="0 0 600 320"
      className="w-full max-w-3xl mx-auto"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="cardGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#2a2a2a" />
          <stop offset="100%" stopColor="#1a1a1a" />
        </linearGradient>
        <linearGradient id="epressGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#3a2a1a" />
          <stop offset="100%" stopColor="#2a1a0a" />
        </linearGradient>
      </defs>

      {/* Traditional Card */}
      <g transform="translate(20, 0)">
        <rect
          x="0"
          y="0"
          width="260"
          height="300"
          rx="12"
          fill="url(#cardGrad)"
          stroke="#444"
          strokeWidth="1"
        />
        <text
          x="130"
          y="35"
          textAnchor="middle"
          fill="#888"
          fontSize="14"
          fontWeight="600"
        >
          Traditional Social Network
        </text>

        {/* Row 1 */}
        <rect
          x="20"
          y="55"
          width="220"
          height="60"
          rx="8"
          fill="#1a1a1a"
          stroke="#333"
          strokeWidth="1"
        />
        <text x="130" y="78" textAnchor="middle" fill="#666" fontSize="11">
          Platform owns
        </text>
        <text
          x="130"
          y="95"
          textAnchor="middle"
          fill="#888"
          fontSize="13"
          fontWeight="600"
        >
          your data
        </text>

        {/* Row 2 */}
        <rect
          x="20"
          y="125"
          width="220"
          height="60"
          rx="8"
          fill="#1a1a1a"
          stroke="#333"
          strokeWidth="1"
        />
        <text x="130" y="148" textAnchor="middle" fill="#666" fontSize="11">
          You are a tenant
        </text>
        <text
          x="130"
          y="165"
          textAnchor="middle"
          fill="#888"
          fontSize="13"
          fontWeight="600"
        >
          (can be evicted)
        </text>

        {/* Row 3 */}
        <rect
          x="20"
          y="195"
          width="220"
          height="60"
          rx="8"
          fill="#1a1a1a"
          stroke="#333"
          strokeWidth="1"
        />
        <text x="130" y="218" textAnchor="middle" fill="#666" fontSize="11">
          Follow their rules
        </text>
        <text
          x="130"
          y="235"
          textAnchor="middle"
          fill="#888"
          fontSize="13"
          fontWeight="600"
        >
          or be banned
        </text>

        {/* Badges */}
        <circle cx="130" cy="300" r="12" fill="#ef4444" />
        <path d="M125 295 L135 305" stroke="white" strokeWidth="2" />
        <path d="M135 295 L125 305" stroke="white" strokeWidth="2" />
      </g>

      {/* VS */}
      <text
        x="300"
        y="155"
        textAnchor="middle"
        fill="#F7931A"
        fontSize="24"
        fontWeight="bold"
      >
        VS
      </text>

      {/* epress Card */}
      <g transform="translate(320, 0)">
        <rect
          x="0"
          y="0"
          width="260"
          height="300"
          rx="12"
          fill="url(#epressGrad)"
          stroke="#F7931A"
          strokeWidth="2"
        />
        <text
          x="130"
          y="35"
          textAnchor="middle"
          fill="#F7931A"
          fontSize="14"
          fontWeight="600"
        >
          epress
        </text>

        {/* Row 1 */}
        <rect
          x="20"
          y="55"
          width="220"
          height="60"
          rx="8"
          fill="#1a1a1a"
          stroke="#F7931A"
          strokeWidth="1"
        />
        <text x="130" y="78" textAnchor="middle" fill="#F7931A" fontSize="11">
          You own
        </text>
        <text
          x="130"
          y="95"
          textAnchor="middle"
          fill="#fff"
          fontSize="13"
          fontWeight="600"
        >
          your data
        </text>

        {/* Row 2 */}
        <rect
          x="20"
          y="125"
          width="220"
          height="60"
          rx="8"
          fill="#1a1a1a"
          stroke="#F7931A"
          strokeWidth="1"
        />
        <text x="130" y="148" textAnchor="middle" fill="#F7931A" fontSize="11">
          You are the host
        </text>
        <text
          x="130"
          y="165"
          textAnchor="middle"
          fill="#fff"
          fontSize="13"
          fontWeight="600"
        >
          (digital home)
        </text>

        {/* Row 3 */}
        <rect
          x="20"
          y="195"
          width="220"
          height="60"
          rx="8"
          fill="#1a1a1a"
          stroke="#F7931A"
          strokeWidth="1"
        />
        <text x="130" y="218" textAnchor="middle" fill="#F7931A" fontSize="11">
          Your rules
        </text>
        <text
          x="130"
          y="235"
          textAnchor="middle"
          fill="#fff"
          fontSize="13"
          fontWeight="600"
        >
          your choice
        </text>

        {/* Badge */}
        <circle cx="130" cy="300" r="12" fill="#F7931A" />
        <text
          x="130"
          y="304"
          textAnchor="middle"
          fill="white"
          fontSize="14"
          fontWeight="bold"
        >
          ✓
        </text>
      </g>
    </svg>
  )
}

export function WorkflowSvg() {
  return (
    <svg
      viewBox="0 0 800 200"
      className="w-full max-w-4xl mx-auto"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <filter id="glow">
          <feGaussianBlur stdDeviation="2" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Step 1: Create Node */}
      <g transform="translate(30, 60)">
        <circle cx="30" cy="30" r="25" fill="#F7931A" filter="url(#glow)" />
        <text
          x="30"
          y="36"
          textAnchor="middle"
          fill="white"
          fontSize="20"
          fontWeight="bold"
        >
          1
        </text>
        <text
          x="30"
          y="80"
          textAnchor="middle"
          fill="#fff"
          fontSize="12"
          fontWeight="600"
        >
          Create Node
        </text>
        <text x="30" y="95" textAnchor="middle" fill="#888" fontSize="10">
          Your personal website
        </text>
      </g>

      {/* Arrow 1 */}
      <path
        d="M90 85 L130 85"
        stroke="#F7931A"
        strokeWidth="2"
        fill="none"
        markerEnd="url(#arrowhead)"
      />
      <polygon points="135,85 130,80 130,90" fill="#F7931A" />

      {/* Step 2: Connect */}
      <g transform="translate(150, 60)">
        <circle cx="30" cy="30" r="25" fill="#F7931A" filter="url(#glow)" />
        <text
          x="30"
          y="36"
          textAnchor="middle"
          fill="white"
          fontSize="20"
          fontWeight="bold"
        >
          2
        </text>
        <text
          x="30"
          y="80"
          textAnchor="middle"
          fill="#fff"
          fontSize="12"
          fontWeight="600"
        >
          Connect
        </text>
        <text x="30" y="95" textAnchor="middle" fill="#888" fontSize="10">
          Follow others
        </text>
      </g>

      {/* Arrow 2 */}
      <path d="M210 85 L250 85" stroke="#F7931A" strokeWidth="2" fill="none" />
      <polygon points="255,85 250,80 250,90" fill="#F7931A" />

      {/* Step 3: Publish */}
      <g transform="translate(270, 60)">
        <circle cx="30" cy="30" r="25" fill="#F7931A" filter="url(#glow)" />
        <text
          x="30"
          y="36"
          textAnchor="middle"
          fill="white"
          fontSize="20"
          fontWeight="bold"
        >
          3
        </text>
        <text
          x="30"
          y="80"
          textAnchor="middle"
          fill="#fff"
          fontSize="12"
          fontWeight="600"
        >
          Publish
        </text>
        <text x="30" y="95" textAnchor="middle" fill="#888" fontSize="10">
          Sign & share
        </text>
      </g>

      {/* Arrow 3 */}
      <path d="M330 85 L370 85" stroke="#F7931A" strokeWidth="2" fill="none" />
      <polygon points="375,85 370,80 370,90" fill="#F7931A" />

      {/* Step 4: Circulate */}
      <g transform="translate(390, 60)">
        <circle cx="30" cy="30" r="25" fill="#F7931A" filter="url(#glow)" />
        <text
          x="30"
          y="36"
          textAnchor="middle"
          fill="white"
          fontSize="20"
          fontWeight="bold"
        >
          4
        </text>
        <text
          x="30"
          y="80"
          textAnchor="middle"
          fill="#fff"
          fontSize="12"
          fontWeight="600"
        >
          Circulate
        </text>
        <text x="30" y="95" textAnchor="middle" fill="#888" fontSize="10">
          Reach followers
        </text>
      </g>

      {/* Bottom flow arrows */}
      <path
        d="M420 130 Q420 160 450 160 L550 160 Q580 160 580 130"
        stroke="#666"
        strokeWidth="1.5"
        fill="none"
        strokeDasharray="4,4"
      />
      <polygon points="450,145 445,155 455,155" fill="#666" />

      {/* Notify-Pull illustration */}
      <g transform="translate(180, 140)">
        <rect
          x="0"
          y="0"
          width="440"
          height="50"
          rx="8"
          fill="#1a1a1a"
          stroke="#333"
          strokeWidth="1"
        />

        {/* Notify */}
        <circle cx="50" cy="25" r="12" fill="#F7931A" />
        <path
          d="M46 25 L52 25 M49 22 L49 28"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <text x="50" y="45" textAnchor="middle" fill="#888" fontSize="9">
          Notify
        </text>

        <line x1="70" y1="25" x2="100" y2="25" stroke="#666" strokeWidth="1" />

        {/* Node 1 */}
        <circle cx="130" cy="25" r="8" fill="#444" />
        <circle cx="170" cy="25" r="8" fill="#444" />
        <circle cx="210" cy="25" r="8" fill="#444" />

        <line x1="230" y1="25" x2="260" y2="25" stroke="#666" strokeWidth="1" />

        {/* Pull */}
        <circle cx="290" cy="25" r="12" fill="#4a9" />
        <path
          d="M286 20 L286 30 M281 25 L291 25"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <text x="290" y="45" textAnchor="middle" fill="#888" fontSize="9">
          Pull & Verify
        </text>

        <line x1="310" y1="25" x2="340" y2="25" stroke="#666" strokeWidth="1" />

        {/* Storage */}
        <rect
          x="350"
          y="15"
          width="70"
          height="20"
          rx="4"
          fill="#2a4a2a"
          stroke="#4a9"
          strokeWidth="1"
        />
        <text x="385" y="30" textAnchor="middle" fill="#4a9" fontSize="9">
          Store
        </text>
      </g>
    </svg>
  )
}

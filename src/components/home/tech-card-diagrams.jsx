export function ProofOfSourceDiagram() {
  return (
    <svg
      viewBox="0 0 120 80"
      className="w-full"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="15"
        y="10"
        width="90"
        height="60"
        rx="6"
        fill="#1a1a1a"
        stroke="#F7931A"
        strokeWidth="1"
      />
      <line x1="25" y1="25" x2="95" y2="25" stroke="#333" strokeWidth="1" />
      <line x1="25" y1="35" x2="85" y2="35" stroke="#333" strokeWidth="1" />
      <line x1="25" y1="45" x2="75" y2="45" stroke="#333" strokeWidth="1" />
      <circle cx="85" cy="55" r="10" fill="#F7931A" />
      <path
        d="M80 55 L83 58 L90 51"
        stroke="white"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function OpenProtocolDiagram() {
  return (
    <svg
      viewBox="0 0 120 80"
      className="w-full"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="60" cy="25" r="12" fill="#F7931A" />
      <circle cx="30" cy="55" r="12" fill="#F7931A" fillOpacity="0.6" />
      <circle cx="90" cy="55" r="12" fill="#F7931A" fillOpacity="0.6" />
      <line
        x1="60"
        y1="37"
        x2="35"
        y2="48"
        stroke="#F7931A"
        strokeWidth="1.5"
      />
      <line
        x1="60"
        y1="37"
        x2="85"
        y2="48"
        stroke="#F7931A"
        strokeWidth="1.5"
      />
      <line
        x1="42"
        y1="55"
        x2="78"
        y2="55"
        stroke="#F7931A"
        strokeWidth="1"
        strokeDasharray="3,2"
      />
      <text
        x="60"
        y="29"
        textAnchor="middle"
        fill="white"
        fontSize="8"
        fontWeight="bold"
      >
        EWP
      </text>
    </svg>
  )
}

export function SelfHostedDiagram() {
  return (
    <svg
      viewBox="0 0 120 80"
      className="w-full"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="30"
        y="15"
        width="60"
        height="50"
        rx="4"
        fill="#1a1a1a"
        stroke="#F7931A"
        strokeWidth="1"
      />
      <rect
        x="35"
        y="20"
        width="50"
        height="12"
        rx="2"
        fill="#2a2a2a"
        stroke="#333"
        strokeWidth="0.5"
      />
      <rect
        x="35"
        y="35"
        width="50"
        height="12"
        rx="2"
        fill="#2a2a2a"
        stroke="#333"
        strokeWidth="0.5"
      />
      <rect
        x="35"
        y="50"
        width="50"
        height="12"
        rx="2"
        fill="#2a2a2a"
        stroke="#333"
        strokeWidth="0.5"
      />
      <circle cx="42" cy="26" r="2" fill="#4a9" />
      <circle cx="42" cy="41" r="2" fill="#F7931A" />
      <circle cx="42" cy="56" r="2" fill="#4a9" />
      <text
        x="60"
        y="10"
        textAnchor="middle"
        fill="#F7931A"
        fontSize="7"
        fontWeight="600"
      >
        DOCKER
      </text>
    </svg>
  )
}

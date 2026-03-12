export function AIContentFloodSvg() {
  return (
    <svg
      viewBox="0 0 280 160"
      className="w-full h-auto"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="280" height="160" rx="12" fill="#1a0a0a" />

      {[...Array(8)].map((_, i) => (
        <rect
          key={i}
          x="20"
          y={20 + i * 16}
          width={200 + Math.random() * 40}
          height="10"
          rx="3"
          fill={`rgba(239, 68, 68, ${0.1 + Math.random() * 0.2})`}
          filter="url(#blur)"
        />
      ))}

      <defs>
        <filter id="blur">
          <feGaussianBlur stdDeviation="1" />
        </filter>
      </defs>

      <text
        x="140"
        y="130"
        textAnchor="middle"
        fill="#fca5a5"
        fontSize="11"
        fontFamily="monospace"
      >
        "Is this human or AI?"
      </text>
      <text
        x="140"
        y="148"
        textAnchor="middle"
        fill="#7f1d1d"
        fontSize="10"
        fontFamily="monospace"
      >
        No way to know.
      </text>
    </svg>
  )
}

export function ProofOfSourceSvg() {
  return (
    <svg
      viewBox="0 0 280 160"
      className="w-full h-auto"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="280" height="160" rx="12" fill="#0f1a12" />

      <text x="20" y="35" fill="#F7931A" fontSize="10" fontFamily="monospace">
        0x7a3f...c9d2
      </text>
      <text x="20" y="52" fill="#34D399" fontSize="9" fontFamily="monospace">
        Published: 2026-03-11
      </text>
      <text x="20" y="68" fill="#34D399" fontSize="9" fontFamily="monospace">
        Hash: verified ✓
      </text>
      <text x="20" y="84" fill="#34D399" fontSize="9" fontFamily="monospace">
        Signature: valid ✓
      </text>

      <rect x="20" y="100" width="240" height="3" rx="1" fill="#1a2a1a" />
      <rect x="20" y="100" width="180" height="3" rx="1" fill="#34D399" />

      <text
        x="140"
        y="135"
        textAnchor="middle"
        fill="#34D399"
        fontSize="11"
        fontFamily="monospace"
      >
        "Cryptographically proven."
      </text>
    </svg>
  )
}

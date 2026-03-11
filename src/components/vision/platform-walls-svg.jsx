export function PlatformWallsSvg() {
  return (
    <svg
      viewBox="0 0 600 280"
      className="w-full h-auto"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="wallGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#2a1515" />
          <stop offset="100%" stopColor="#1a0a0a" />
        </linearGradient>
      </defs>

      <rect
        x="30"
        y="60"
        width="100"
        height="160"
        rx="8"
        fill="url(#wallGrad)"
        stroke="#ef4444"
        strokeOpacity="0.4"
      />
      <text
        x="80"
        y="85"
        textAnchor="middle"
        fill="#fca5a5"
        fontSize="10"
        fontFamily="monospace"
      >
        Platform A
      </text>
      <circle
        cx="55"
        cy="120"
        r="15"
        fill="#2a1515"
        stroke="#fca5a5"
        strokeOpacity="0.5"
      />
      <text x="55" y="124" textAnchor="middle" fill="#fca5a5" fontSize="8">
        👤
      </text>
      <circle
        cx="105"
        cy="120"
        r="15"
        fill="#2a1515"
        stroke="#fca5a5"
        strokeOpacity="0.5"
      />
      <text x="105" y="124" textAnchor="middle" fill="#fca5a5" fontSize="8">
        👤
      </text>
      <circle
        cx="80"
        cy="170"
        r="15"
        fill="#2a1515"
        stroke="#fca5a5"
        strokeOpacity="0.5"
      />
      <text x="80" y="174" textAnchor="middle" fill="#fca5a5" fontSize="8">
        👤
      </text>

      <rect
        x="250"
        y="60"
        width="100"
        height="160"
        rx="8"
        fill="url(#wallGrad)"
        stroke="#ef4444"
        strokeOpacity="0.4"
      />
      <text
        x="300"
        y="85"
        textAnchor="middle"
        fill="#fca5a5"
        fontSize="10"
        fontFamily="monospace"
      >
        Platform B
      </text>
      <circle
        cx="275"
        cy="120"
        r="15"
        fill="#2a1515"
        stroke="#fca5a5"
        strokeOpacity="0.5"
      />
      <text x="275" y="124" textAnchor="middle" fill="#fca5a5" fontSize="8">
        👤
      </text>
      <circle
        cx="325"
        cy="120"
        r="15"
        fill="#2a1515"
        stroke="#fca5a5"
        strokeOpacity="0.5"
      />
      <text x="325" y="124" textAnchor="middle" fill="#fca5a5" fontSize="8">
        👤
      </text>
      <circle
        cx="300"
        cy="170"
        r="15"
        fill="#2a1515"
        stroke="#fca5a5"
        strokeOpacity="0.5"
      />
      <text x="300" y="174" textAnchor="middle" fill="#fca5a5" fontSize="8">
        👤
      </text>

      <rect
        x="470"
        y="60"
        width="100"
        height="160"
        rx="8"
        fill="url(#wallGrad)"
        stroke="#ef4444"
        strokeOpacity="0.4"
      />
      <text
        x="520"
        y="85"
        textAnchor="middle"
        fill="#fca5a5"
        fontSize="10"
        fontFamily="monospace"
      >
        Platform C
      </text>
      <circle
        cx="495"
        cy="120"
        r="15"
        fill="#2a1515"
        stroke="#fca5a5"
        strokeOpacity="0.5"
      />
      <text x="495" y="124" textAnchor="middle" fill="#fca5a5" fontSize="8">
        👤
      </text>
      <circle
        cx="545"
        cy="120"
        r="15"
        fill="#2a1515"
        stroke="#fca5a5"
        strokeOpacity="0.5"
      />
      <text x="545" y="124" textAnchor="middle" fill="#fca5a5" fontSize="8">
        👤
      </text>
      <circle
        cx="520"
        cy="170"
        r="15"
        fill="#2a1515"
        stroke="#fca5a5"
        strokeOpacity="0.5"
      />
      <text x="520" y="174" textAnchor="middle" fill="#fca5a5" fontSize="8">
        👤
      </text>

      <path
        d="M140 140 L245 140"
        stroke="#ef4444"
        strokeWidth="2"
        strokeDasharray="5,5"
        strokeOpacity="0.5"
      />
      <text x="192" y="135" textAnchor="middle" fill="#ef4444" fontSize="16">
        ✕
      </text>

      <path
        d="M360 140 L465 140"
        stroke="#ef4444"
        strokeWidth="2"
        strokeDasharray="5,5"
        strokeOpacity="0.5"
      />
      <text x="412" y="135" textAnchor="middle" fill="#ef4444" fontSize="16">
        ✕
      </text>

      <text
        x="300"
        y="250"
        textAnchor="middle"
        fill="#7f1d1d"
        fontSize="11"
        fontFamily="monospace"
      >
        Data locked. Users trapped. No interoperability.
      </text>
      <text
        x="300"
        y="268"
        textAnchor="middle"
        fill="#ef4444"
        fontSize="10"
        fontFamily="monospace"
      >
        "Take your data? No. Stay in our walled garden."
      </text>
    </svg>
  )
}

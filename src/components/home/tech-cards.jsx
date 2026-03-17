function SignatureDiagram() {
  return (
    <svg
      viewBox="0 0 240 100"
      width="100%"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden="true"
    >
      <rect
        x="18"
        y="12"
        width="52"
        height="68"
        rx="5"
        stroke="#a0a0a0"
        strokeWidth="1.5"
      />
      <line x1="27" y1="28" x2="62" y2="28" stroke="#a0a0a0" />
      <line x1="27" y1="38" x2="62" y2="38" stroke="#a0a0a0" />
      <line x1="27" y1="48" x2="62" y2="48" stroke="#a0a0a0" />
      <line x1="27" y1="58" x2="50" y2="58" stroke="#a0a0a0" />

      {/* Center arrow + label */}
      <line x1="82" y1="46" x2="118" y2="46" strokeWidth="1.5" />
      <polygon
        points="118,46 112,42 112,50"
        fill="currentColor"
        stroke="none"
      />
      <text
        x="100"
        y="40"
        fontSize="10"
        textAnchor="middle"
        fill="currentColor"
        stroke="none"
        style={{ fontFamily: "system-ui, sans-serif" }}
      >
        sign
      </text>

      {/* Right: signed document */}
      <rect x="130" y="12" width="52" height="68" rx="5" strokeWidth="1.5" />
      <line x1="139" y1="28" x2="174" y2="28" />
      <line x1="139" y1="38" x2="174" y2="38" />
      <line x1="139" y1="48" x2="174" y2="48" />
      <line x1="139" y1="58" x2="162" y2="58" />

      {/* Seal — larger, centered at bottom-right of doc */}
      <circle
        cx="177"
        cy="72"
        r="18"
        fill="currentColor"
        fillOpacity="0.08"
        strokeWidth="2"
      />
      <circle cx="177" cy="72" r="18" strokeWidth="2" />
      <path
        d="M 168 72 L 174 79 L 187 63"
        stroke="#4ade80"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function NetworkDiagram() {
  return (
    <svg
      viewBox="0 0 280 125"
      width="100%"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden="true"
    >
      <circle
        cx="58"
        cy="50"
        r="16"
        fill="#ef4444"
        fillOpacity="0.12"
        stroke="#ef4444"
        strokeWidth="1.5"
      />
      <text
        x="58"
        y="50"
        fontSize="11"
        textAnchor="middle"
        dominantBaseline="middle"
        fill="#ef4444"
        stroke="none"
        fontWeight="600"
        style={{ fontFamily: "system-ui, sans-serif" }}
      >
        P
      </text>

      <circle cx="20" cy="18" r="8" stroke="#ef4444" strokeWidth="1.5" />
      <circle cx="96" cy="18" r="8" stroke="#ef4444" strokeWidth="1.5" />
      <circle cx="12" cy="62" r="8" stroke="#ef4444" strokeWidth="1.5" />
      <circle cx="104" cy="62" r="8" stroke="#ef4444" strokeWidth="1.5" />
      <circle cx="58" cy="86" r="8" stroke="#ef4444" strokeWidth="1.5" />

      <line
        x1="20"
        y1="18"
        x2="58"
        y2="50"
        stroke="#ef4444"
        strokeOpacity="0.45"
      />
      <line
        x1="96"
        y1="18"
        x2="58"
        y2="50"
        stroke="#ef4444"
        strokeOpacity="0.45"
      />
      <line
        x1="12"
        y1="62"
        x2="58"
        y2="50"
        stroke="#ef4444"
        strokeOpacity="0.45"
      />
      <line
        x1="104"
        y1="62"
        x2="58"
        y2="50"
        stroke="#ef4444"
        strokeOpacity="0.45"
      />
      <line
        x1="58"
        y1="86"
        x2="58"
        y2="50"
        stroke="#ef4444"
        strokeOpacity="0.45"
      />

      <text
        x="58"
        y="110"
        fontSize="9"
        textAnchor="middle"
        fill="#ef4444"
        fillOpacity="0.7"
        stroke="none"
        style={{ fontFamily: "system-ui, sans-serif" }}
      >
        centralized
      </text>

      <line
        x1="140"
        y1="10"
        x2="140"
        y2="95"
        strokeDasharray="4 3"
        strokeOpacity="0.25"
      />
      <text
        x="140"
        y="55"
        fontSize="11"
        textAnchor="middle"
        fill="currentColor"
        stroke="none"
        fontWeight="700"
        style={{ fontFamily: "system-ui, sans-serif" }}
      >
        VS
      </text>

      <circle
        cx="182"
        cy="20"
        r="9"
        fill="#34D399"
        fillOpacity="0.1"
        stroke="#34D399"
        strokeWidth="1.5"
      />
      <circle
        cx="248"
        cy="20"
        r="9"
        fill="#34D399"
        fillOpacity="0.1"
        stroke="#34D399"
        strokeWidth="1.5"
      />
      <circle
        cx="165"
        cy="64"
        r="9"
        fill="#34D399"
        fillOpacity="0.1"
        stroke="#34D399"
        strokeWidth="1.5"
      />
      <circle
        cx="264"
        cy="64"
        r="9"
        fill="#34D399"
        fillOpacity="0.1"
        stroke="#34D399"
        strokeWidth="1.5"
      />
      <circle
        cx="215"
        cy="86"
        r="9"
        fill="#34D399"
        fillOpacity="0.1"
        stroke="#34D399"
        strokeWidth="1.5"
      />

      <line
        x1="182"
        y1="20"
        x2="248"
        y2="20"
        stroke="#34D399"
        strokeOpacity="0.55"
      />
      <line
        x1="182"
        y1="20"
        x2="165"
        y2="64"
        stroke="#34D399"
        strokeOpacity="0.55"
      />
      <line
        x1="248"
        y1="20"
        x2="264"
        y2="64"
        stroke="#34D399"
        strokeOpacity="0.55"
      />
      <line
        x1="165"
        y1="64"
        x2="215"
        y2="86"
        stroke="#34D399"
        strokeOpacity="0.55"
      />
      <line
        x1="264"
        y1="64"
        x2="215"
        y2="86"
        stroke="#34D399"
        strokeOpacity="0.55"
      />
      <line
        x1="182"
        y1="20"
        x2="215"
        y2="86"
        stroke="#34D399"
        strokeOpacity="0.35"
      />
      <line
        x1="248"
        y1="20"
        x2="165"
        y2="64"
        stroke="#34D399"
        strokeOpacity="0.35"
      />

      <text
        x="182"
        y="8"
        fontSize="8"
        textAnchor="middle"
        fill="#34D399"
        fillOpacity="0.7"
        stroke="none"
        style={{ fontFamily: "system-ui, sans-serif" }}
      >
        Node
      </text>
      <text
        x="248"
        y="8"
        fontSize="8"
        textAnchor="middle"
        fill="#34D399"
        fillOpacity="0.7"
        stroke="none"
        style={{ fontFamily: "system-ui, sans-serif" }}
      >
        Node
      </text>
      <text
        x="152"
        y="78"
        fontSize="8"
        textAnchor="middle"
        fill="#34D399"
        fillOpacity="0.7"
        stroke="none"
        style={{ fontFamily: "system-ui, sans-serif" }}
      >
        Node
      </text>
      <text
        x="277"
        y="78"
        fontSize="8"
        textAnchor="middle"
        fill="#34D399"
        fillOpacity="0.7"
        stroke="none"
        style={{ fontFamily: "system-ui, sans-serif" }}
      >
        Node
      </text>
      <text
        x="215"
        y="100"
        fontSize="8"
        textAnchor="middle"
        fill="#34D399"
        fillOpacity="0.7"
        stroke="none"
        style={{ fontFamily: "system-ui, sans-serif" }}
      >
        Node
      </text>

      <text
        x="215"
        y="118"
        fontSize="9"
        textAnchor="middle"
        fill="#34D399"
        fillOpacity="0.7"
        stroke="none"
        style={{ fontFamily: "system-ui, sans-serif" }}
      >
        epress
      </text>
    </svg>
  )
}

function OwnershipDiagram() {
  return (
    <svg
      viewBox="0 0 260 100"
      width="100%"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden="true"
    >
      {/* ── Server box (left) ── */}
      {/* Main chassis */}
      <rect x="14" y="22" width="62" height="56" rx="5" strokeWidth="1.5" />
      {/* Top drive bay strip */}
      <rect
        x="22"
        y="30"
        width="46"
        height="10"
        rx="2"
        strokeWidth="1"
        strokeOpacity="0.6"
      />
      {/* Bottom drive bay strip */}
      <rect
        x="22"
        y="46"
        width="46"
        height="10"
        rx="2"
        strokeWidth="1"
        strokeOpacity="0.6"
      />
      {/* LED dots on right side of chassis */}
      <circle
        cx="66"
        cy="64"
        r="2.5"
        fill="currentColor"
        fillOpacity="0.8"
        stroke="none"
      />
      <circle
        cx="66"
        cy="72"
        r="2.5"
        fill="currentColor"
        fillOpacity="0.45"
        stroke="none"
      />

      <circle cx="45" cy="12" r="8" strokeWidth="1.8" />
      <circle
        cx="45"
        cy="12"
        r="2.5"
        fill="currentColor"
        fillOpacity="0.15"
        strokeWidth="1"
      />
      <line
        x1="53"
        y1="12"
        x2="69"
        y2="12"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <line
        x1="61"
        y1="12"
        x2="61"
        y2="18"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <line
        x1="66"
        y1="12"
        x2="66"
        y2="16"
        strokeWidth="2"
        strokeLinecap="round"
      />

      {/* ── Radiating lines to 3 devices (right side) ── */}
      {/* Lines from server center-right to each device */}
      {/* Top device (laptop): end ~(195, 22) */}
      <line
        x1="98"
        y1="42"
        x2="186"
        y2="22"
        strokeOpacity="0.5"
        strokeDasharray="4 3"
      />
      {/* Middle device (phone): end ~(195, 50) */}
      <line
        x1="98"
        y1="50"
        x2="190"
        y2="50"
        strokeOpacity="0.5"
        strokeDasharray="4 3"
      />
      {/* Bottom device (tablet): end ~(195, 78) */}
      <line
        x1="98"
        y1="58"
        x2="186"
        y2="78"
        strokeOpacity="0.5"
        strokeDasharray="4 3"
      />

      {/* ── Device icons (right) ── */}

      {/* Laptop: screen rect + base rect */}
      <rect x="188" y="12" width="28" height="18" rx="2" strokeWidth="1.4" />
      <line x1="184" y1="30" x2="220" y2="30" strokeWidth="1.4" />
      <rect
        x="192"
        y="31"
        width="20"
        height="3"
        rx="1"
        strokeWidth="1"
        strokeOpacity="0.5"
      />
      {/* Laptop label */}
      <text
        x="202"
        y="10"
        fontSize="8"
        textAnchor="middle"
        fill="currentColor"
        fillOpacity="0.5"
        stroke="none"
        style={{ fontFamily: "system-ui, sans-serif" }}
      >
        laptop
      </text>

      {/* Phone: tall rounded rect */}
      <rect x="191" y="40" width="16" height="26" rx="3" strokeWidth="1.4" />
      <line
        x1="196"
        y1="63"
        x2="202"
        y2="63"
        strokeWidth="1"
        strokeOpacity="0.5"
      />
      {/* Phone label */}
      <text
        x="199"
        y="73"
        fontSize="8"
        textAnchor="middle"
        fill="currentColor"
        fillOpacity="0.5"
        stroke="none"
        style={{ fontFamily: "system-ui, sans-serif" }}
      >
        phone
      </text>

      {/* Tablet: wider portrait rect */}
      <rect x="186" y="78" width="32" height="20" rx="3" strokeWidth="1.4" />
      <circle cx="202" cy="88" r="3" strokeWidth="1" strokeOpacity="0.5" />
      {/* Tablet label */}
      <text
        x="202"
        y="105"
        fontSize="8"
        textAnchor="middle"
        fill="currentColor"
        fillOpacity="0.5"
        stroke="none"
        style={{ fontFamily: "system-ui, sans-serif" }}
      >
        tablet
      </text>

      {/* "yours" label under server */}
      <text
        x="45"
        y="88"
        fontSize="9"
        textAnchor="middle"
        fill="currentColor"
        fillOpacity="0.45"
        stroke="none"
        style={{ fontFamily: "system-ui, sans-serif" }}
      >
        your server
      </text>
    </svg>
  )
}

const cards = [
  {
    title: "Your Signature on Every Word",
    caption:
      "Like a notary stamp — except it's math, not paper. Every post you publish is cryptographically signed. Anyone can verify it came from you. No one can fake it.",
    diagram: SignatureDiagram,
  },
  {
    title: "No Company in the Middle",
    caption:
      "Nodes talk directly to each other. No platform routes your messages. No platform can slow them down, hide them, or cut the line.",
    diagram: NetworkDiagram,
  },
  {
    title: "You Own the Server",
    caption:
      "Your node runs on hardware you control — a cloud server, a home computer, anything in between. Your data stays yours. Access it from any device, anytime.",
    diagram: OwnershipDiagram,
  },
]

export function TechCards() {
  return (
    <section className="landing-section">
      <div className="container-custom">
        <p className="section-label text-center">How It Works</p>
        <h2 className="landing-heading mb-12 text-center">
          Three Simple Ideas
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {cards.map((card, idx) => {
            const Diagram = card.diagram
            return (
              <div key={idx} className="landing-card">
                <div className="bg-dark-surface/30 rounded-lg p-4 mb-4">
                  <Diagram />
                </div>
                <h3 className="font-semibold text-lg mb-2">{card.title}</h3>
                <p className="text-sm text-dark-muted leading-relaxed">
                  {card.caption}
                </p>
              </div>
            )
          })}
        </div>

        <p className="text-center text-sm text-dark-muted">
          Want to dive deeper?{" "}
          <a
            href="/how-it-works"
            className="text-primary hover:underline transition-colors"
          >
            See the full explanation →
          </a>
        </p>
      </div>
    </section>
  )
}

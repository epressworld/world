function SignatureDiagram() {
  return (
    <svg
      viewBox="0 0 220 90"
      width="100%"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <rect x="10" y="15" width="55" height="65" rx="4" />
      <line x1="18" y1="30" x2="57" y2="30" />
      <line x1="18" y1="42" x2="57" y2="42" />
      <line x1="18" y1="54" x2="47" y2="54" />

      <line x1="85" y1="47" x2="130" y2="47" />
      <polygon
        points="130,47 125,44 125,50"
        fill="currentColor"
        stroke="none"
      />
      <text
        x="100"
        y="42"
        fontSize="10"
        textAnchor="middle"
        fill="currentColor"
        stroke="none"
      >
        sign
      </text>

      <rect x="145" y="15" width="55" height="65" rx="4" />
      <line x1="153" y1="30" x2="192" y2="30" />
      <line x1="153" y1="42" x2="192" y2="42" />
      <line x1="153" y1="54" x2="182" y2="54" />
      <circle
        cx="192"
        cy="68"
        r="14"
        fill="currentColor"
        opacity="0.08"
        strokeWidth="2"
      />
      <circle cx="192" cy="68" r="14" />
      <path d="M 185 68 L 190 73 L 200 63" strokeWidth="2" />
    </svg>
  )
}

function NetworkDiagram() {
  return (
    <svg
      viewBox="0 0 260 100"
      width="100%"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <circle cx="55" cy="50" r="14" fill="currentColor" opacity="0.12" />
      <circle cx="55" cy="50" r="14" />
      <text
        x="55"
        y="50"
        fontSize="11"
        textAnchor="middle"
        dominantBaseline="middle"
        fill="currentColor"
        stroke="none"
      >
        P
      </text>

      <circle cx="18" cy="20" r="8" />
      <circle cx="92" cy="20" r="8" />
      <circle cx="10" cy="58" r="8" />
      <circle cx="100" cy="58" r="8" />
      <circle cx="55" cy="88" r="8" />

      <line x1="18" y1="20" x2="55" y2="50" strokeOpacity="0.5" />
      <line x1="92" y1="20" x2="55" y2="50" strokeOpacity="0.5" />
      <line x1="10" y1="58" x2="55" y2="50" strokeOpacity="0.5" />
      <line x1="100" y1="58" x2="55" y2="50" strokeOpacity="0.5" />
      <line x1="55" y1="88" x2="55" y2="50" strokeOpacity="0.5" />

      <text
        x="55"
        y="96"
        fontSize="9"
        textAnchor="middle"
        fill="currentColor"
        opacity="0.5"
        stroke="none"
      >
        centralized
      </text>

      <line
        x1="130"
        y1="15"
        x2="130"
        y2="85"
        strokeDasharray="4 3"
        strokeOpacity="0.3"
      />
      <text
        x="130"
        y="53"
        fontSize="11"
        textAnchor="middle"
        fill="currentColor"
        stroke="none"
        fontWeight="600"
      >
        VS
      </text>

      <circle cx="175" cy="22" r="9" fill="currentColor" opacity="0.1" />
      <circle cx="235" cy="22" r="9" fill="currentColor" opacity="0.1" />
      <circle cx="160" cy="65" r="9" fill="currentColor" opacity="0.1" />
      <circle cx="250" cy="65" r="9" fill="currentColor" opacity="0.1" />
      <circle cx="205" cy="85" r="9" fill="currentColor" opacity="0.1" />

      <line x1="175" y1="22" x2="235" y2="22" strokeOpacity="0.6" />
      <line x1="175" y1="22" x2="160" y2="65" strokeOpacity="0.6" />
      <line x1="235" y1="22" x2="250" y2="65" strokeOpacity="0.6" />
      <line x1="160" y1="65" x2="205" y2="85" strokeOpacity="0.6" />
      <line x1="250" y1="65" x2="205" y2="85" strokeOpacity="0.6" />
      <line x1="175" y1="22" x2="205" y2="85" strokeOpacity="0.6" />
      <line x1="235" y1="22" x2="205" y2="85" strokeOpacity="0.6" />

      <text
        x="175"
        y="36"
        fontSize="8"
        textAnchor="middle"
        fill="currentColor"
        opacity="0.7"
        stroke="none"
      >
        Node
      </text>
      <text
        x="235"
        y="36"
        fontSize="8"
        textAnchor="middle"
        fill="currentColor"
        opacity="0.7"
        stroke="none"
      >
        Node
      </text>
      <text
        x="160"
        y="79"
        fontSize="8"
        textAnchor="middle"
        fill="currentColor"
        opacity="0.7"
        stroke="none"
      >
        Node
      </text>
      <text
        x="250"
        y="79"
        fontSize="8"
        textAnchor="middle"
        fill="currentColor"
        opacity="0.7"
        stroke="none"
      >
        Node
      </text>
      <text
        x="205"
        y="99"
        fontSize="8"
        textAnchor="middle"
        fill="currentColor"
        opacity="0.7"
        stroke="none"
      >
        Node
      </text>

      <text
        x="205"
        y="96"
        fontSize="9"
        textAnchor="middle"
        fill="currentColor"
        opacity="0.5"
        stroke="none"
      >
        epress
      </text>
    </svg>
  )
}

function OwnershipDiagram() {
  return (
    <svg
      viewBox="0 0 220 90"
      width="100%"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <rect x="20" y="20" width="55" height="50" rx="4" />
      <rect x="28" y="28" width="20" height="14" rx="2" />
      <circle
        cx="60"
        cy="32"
        r="2"
        fill="currentColor"
        opacity="0.8"
        stroke="none"
      />
      <circle
        cx="60"
        cy="40"
        r="2"
        fill="currentColor"
        opacity="0.5"
        stroke="none"
      />
      <circle
        cx="60"
        cy="48"
        r="2"
        fill="currentColor"
        opacity="0.3"
        stroke="none"
      />

      <circle cx="70" cy="24" r="7" strokeWidth="1.5" />
      <line x1="77" y1="24" x2="88" y2="24" strokeWidth="1.5" />
      <line x1="82" y1="24" x2="82" y2="29" strokeWidth="1.5" />
      <line x1="86" y1="24" x2="86" y2="27" strokeWidth="1.5" />

      <path d="M 100 45 Q 120 35 140 45" strokeWidth="1.5" />
      <polygon
        points="140,45 135,42 135,48"
        fill="currentColor"
        stroke="none"
      />

      <circle cx="175" cy="45" r="22" />
      <ellipse cx="175" cy="45" rx="10" ry="22" />
      <line x1="153" y1="33" x2="197" y2="33" />
      <line x1="153" y1="57" x2="197" y2="57" />
      <circle
        cx="165"
        cy="40"
        r="3"
        fill="currentColor"
        opacity="0.7"
        stroke="none"
      />
      <circle
        cx="182"
        cy="38"
        r="3"
        fill="currentColor"
        opacity="0.7"
        stroke="none"
      />
      <circle
        cx="172"
        cy="53"
        r="3"
        fill="currentColor"
        opacity="0.7"
        stroke="none"
      />
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
      "Your node runs on hardware you control — a cloud server, a home computer, anything in between. Your data stays yours. No one can take it away.",
    diagram: OwnershipDiagram,
  },
]

export function TechCards() {
  return (
    <section className="landing-section">
      <div className="container-custom">
        <p className="section-label">How It Works</p>
        <h2 className="landing-heading mb-4 text-center">Three Simple Ideas</h2>
        <p className="landing-subheading text-center mx-auto mb-12">
          No technical background required.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
      </div>
    </section>
  )
}

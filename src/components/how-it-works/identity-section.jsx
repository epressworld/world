import { ComparisonCard } from "@/components/shared/comparison-card"
import { MiniDiagram } from "@/components/shared/mini-diagram"

function IdentityDiagram() {
  return (
    <svg
      viewBox="0 0 700 280"
      className="w-full h-auto"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="identityGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F7931A" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#F7931A" stopOpacity="0.05" />
        </linearGradient>
      </defs>

      <rect
        x="40"
        y="50"
        width="120"
        height="90"
        rx="10"
        fill="#1a1a1a"
        stroke="#444"
        strokeWidth="1.5"
      />
      <text
        x="100"
        y="85"
        textAnchor="middle"
        fill="#888"
        fontSize="12"
        fontFamily="monospace"
      >
        Private Key
      </text>
      <text
        x="100"
        y="105"
        textAnchor="middle"
        fill="#666"
        fontSize="10"
        fontFamily="monospace"
      >
        (secret)
      </text>
      <text x="100" y="125" textAnchor="middle" fontSize="20">
        🔑
      </text>

      <line
        x1="165"
        y1="95"
        x2="215"
        y2="95"
        stroke="#F7931A"
        strokeWidth="3"
      />
      <polygon points="215,95 205,89 205,101" fill="#F7931A" />

      <rect
        x="220"
        y="50"
        width="160"
        height="90"
        rx="10"
        fill="#1a1a1a"
        stroke="#F7931A"
        strokeWidth="1.5"
      />
      <text
        x="300"
        y="85"
        textAnchor="middle"
        fill="#F7931A"
        fontSize="12"
        fontFamily="monospace"
      >
        Sign Message
      </text>
      <text
        x="300"
        y="105"
        textAnchor="middle"
        fill="#666"
        fontSize="10"
        fontFamily="monospace"
      >
        SIWE
      </text>
      <text x="300" y="125" textAnchor="middle" fontSize="20">
        ✍️
      </text>

      <line
        x1="385"
        y1="95"
        x2="435"
        y2="95"
        stroke="#F7931A"
        strokeWidth="3"
      />
      <polygon points="435,95 425,89 425,101" fill="#F7931A" />

      <rect
        x="440"
        y="40"
        width="200"
        height="110"
        rx="12"
        fill="url(#identityGrad)"
        stroke="#F7931A"
        strokeWidth="2.5"
      />
      <text
        x="540"
        y="75"
        textAnchor="middle"
        fill="#F7931A"
        fontSize="13"
        fontFamily="monospace"
        fontWeight="bold"
      >
        Ethereum Address
      </text>
      <text
        x="540"
        y="100"
        textAnchor="middle"
        fill="#34D399"
        fontSize="11"
        fontFamily="monospace"
      >
        0x742d...f9
      </text>
      <text x="540" y="130" textAnchor="middle" fontSize="22">
        🆔
      </text>

      <text
        x="540"
        y="185"
        textAnchor="middle"
        fill="#34D399"
        fontSize="22"
        fontFamily="monospace"
        fontWeight="bold"
      >
        = Your Identity
      </text>

      <rect
        x="40"
        y="220"
        width="620"
        height="40"
        rx="8"
        fill="transparent"
        stroke="#34D399"
        strokeWidth="1.5"
        strokeDasharray="6 3"
      />
      <text
        x="350"
        y="245"
        textAnchor="middle"
        fill="#34D399"
        fontSize="11"
        fontFamily="monospace"
      >
        No password required — just prove you own the private key
      </text>
    </svg>
  )
}

function TraditionalVsSIWE() {
  return (
    <div className="grid md:grid-cols-2 gap-6">
      <ComparisonCard variant="warning" title="Traditional Account">
        <div className="space-y-3 text-sm">
          <div className="flex items-center gap-2">
            <span className="text-red-400">✗</span>
            <span className="text-dark-muted">Username + Password</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-red-400">✗</span>
            <span className="text-dark-muted">Stored on company servers</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-red-400">✗</span>
            <span className="text-dark-muted">Can be deleted or banned</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-red-400">✗</span>
            <span className="text-dark-muted">Password resets required</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-red-400">✗</span>
            <span className="text-dark-muted">Data breach exposure</span>
          </div>
        </div>
      </ComparisonCard>

      <ComparisonCard variant="success" title="Sign-In with Ethereum">
        <div className="space-y-3 text-sm">
          <div className="flex items-center gap-2">
            <span className="text-primary">✓</span>
            <span className="text-dark-muted">Your wallet = your identity</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-primary">✓</span>
            <span className="text-dark-muted">No central server stores it</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-primary">✓</span>
            <span className="text-dark-muted">Cannot be deleted by anyone</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-primary">✓</span>
            <span className="text-dark-muted">No password to forget</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-primary">✓</span>
            <span className="text-dark-muted">Cryptographic proof</span>
          </div>
        </div>
      </ComparisonCard>
    </div>
  )
}

export function IdentitySection() {
  return (
    <section id="identity" className="landing-section">
      <div className="container-custom">
        <p className="section-label">Foundation</p>
        <h2 className="landing-heading mb-4">Decentralized Identity</h2>
        <p className="landing-subheading mb-12">
          Your Ethereum address is your identity. No usernames, no passwords, no
          central authority. You prove who you are by signing a message with
          your private key.
        </p>

        <MiniDiagram className="mb-8">
          <IdentityDiagram />
        </MiniDiagram>

        <TraditionalVsSIWE />

        <div className="mt-8 p-6 rounded-xl border border-dark-border bg-dark-surface/50">
          <p className="text-dark-muted leading-relaxed">
            When you sign in to epress, you&apos;re not creating an account on
            our servers. You&apos;re proving ownership of an Ethereum address.
            This identity is portable — use it across any epress node or any
            other service that supports SIWE (EIP-4361).
          </p>
        </div>
      </div>
    </section>
  )
}

import Link from "next/link"
import { ApiReferenceTable } from "@/components/developer/api-reference-table"
import ewpEndpoints from "@/content/developer/ewp-endpoints.json"

function EwpOverviewSvg() {
  return (
    <svg
      viewBox="0 0 920 420"
      xmlns="http://www.w3.org/2000/svg"
      className="h-auto w-full"
    >
      <rect
        x="16"
        y="16"
        width="888"
        height="388"
        rx="16"
        fill="#0f0f0f"
        stroke="#27272a"
      />

      <rect
        x="60"
        y="72"
        width="210"
        height="96"
        rx="12"
        fill="#171717"
        stroke="#3f3f46"
      />
      <text x="165" y="106" textAnchor="middle" fill="#fafafa" fontSize="15">
        Node A (Self)
      </text>
      <text x="165" y="130" textAnchor="middle" fill="#a1a1aa" fontSize="12">
        owner identity + content
      </text>
      <text x="165" y="148" textAnchor="middle" fill="#a1a1aa" fontSize="12">
        sign + publish
      </text>

      <rect
        x="650"
        y="72"
        width="210"
        height="96"
        rx="12"
        fill="#171717"
        stroke="#3f3f46"
      />
      <text x="755" y="106" textAnchor="middle" fill="#fafafa" fontSize="15">
        Node B (Peer)
      </text>
      <text x="755" y="130" textAnchor="middle" fill="#a1a1aa" fontSize="12">
        verify + follow state
      </text>
      <text x="755" y="148" textAnchor="middle" fill="#a1a1aa" fontSize="12">
        pull + replicate
      </text>

      <rect
        x="280"
        y="208"
        width="360"
        height="148"
        rx="12"
        fill="#151515"
        stroke="#3f3f46"
      />
      <text x="460" y="240" textAnchor="middle" fill="#fbbf24" fontSize="16">
        epress world protocol (EWP)
      </text>
      <text x="460" y="268" textAnchor="middle" fill="#d4d4d8" fontSize="12">
        Identity Discovery
      </text>
      <text x="460" y="286" textAnchor="middle" fill="#d4d4d8" fontSize="12">
        Connection Handshake
      </text>
      <text x="460" y="304" textAnchor="middle" fill="#d4d4d8" fontSize="12">
        Content Hash + Signature
      </text>
      <text x="460" y="322" textAnchor="middle" fill="#d4d4d8" fontSize="12">
        Replication + Profile Sync
      </text>

      <path
        d="M270 120 L650 120"
        stroke="#fbbf24"
        strokeWidth="2"
        strokeDasharray="6 5"
      />
      <polygon points="650,120 639,114 639,126" fill="#fbbf24" />
      <path
        d="M650 136 L270 136"
        stroke="#60a5fa"
        strokeWidth="2"
        strokeDasharray="6 5"
      />
      <polygon points="270,136 281,130 281,142" fill="#60a5fa" />

      <path d="M205 168 L360 208" stroke="#fbbf24" strokeWidth="2" />
      <polygon points="360,208 349,202 351,214" fill="#fbbf24" />
      <path d="M715 168 L560 208" stroke="#60a5fa" strokeWidth="2" />
      <polygon points="560,208 569,198 572,210" fill="#60a5fa" />

      <text x="460" y="92" textAnchor="middle" fill="#d4d4d8" fontSize="12">
        signed protocol messages over /ewp endpoints
      </text>
      <text x="460" y="382" textAnchor="middle" fill="#71717a" fontSize="11">
        Protocol overview: identity, relationship, proof, and replication
      </text>
    </svg>
  )
}

export default function EwpDocsPage() {
  const tableRows = ewpEndpoints.map((item) => ({
    method: item.method,
    path: item.path,
    scope: item.stability,
    auth: item.auth,
    summary: item.summary,
    href: "/docs/developer/ewp/reference",
  }))

  return (
    <div className="space-y-6">
      <article className="rounded-2xl border border-dark-border bg-dark-surface/70 p-6 md:p-8">
        <h1 className="text-3xl font-bold text-white">
          epress world protocol (EWP)
        </h1>
        <p className="mt-3 leading-7 text-gray-300">
          The <span className="text-white">epress world protocol</span> defines
          how autonomous nodes establish trust, exchange identity, and replicate
          signed content in <span className="text-white">epress world</span>.
        </p>
        <div className="mt-4 inline-flex rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs text-emerald-300">
          Protocol Baseline: EWP v1 semantics for node interoperability
        </div>
      </article>

      <article className="rounded-xl border border-primary/35 bg-primary/10 p-6">
        <h2 className="text-xl font-semibold text-white">
          Quick Start: Implement EWP
        </h2>
        <p className="mt-2 text-sm text-gray-200">
          Build a minimal EWP-compatible node in under an hour.
        </p>
        <div className="mt-4">
          <Link href="/docs/developer/ewp/quick-start" className="btn-primary">
            Start Tutorial
          </Link>
        </div>
      </article>

      <article className="rounded-xl border border-dark-border bg-dark-surface/70 p-6">
        <h2 className="text-xl font-semibold text-white">
          Overview: Protocol at a Glance
        </h2>
        <p className="mt-2 text-sm leading-7 text-gray-300">
          EWP is the interoperability layer between autonomous nodes. It defines
          how nodes prove identity, establish relationship state, publish signed
          content, and synchronize data over time without central coordination.
        </p>
        <div className="mt-4 rounded-lg border border-dark-border bg-dark-bg/50 p-3">
          <EwpOverviewSvg />
        </div>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          <div className="rounded-lg border border-dark-border bg-dark-bg/60 p-4">
            <p className="text-sm font-semibold text-white">Identity Plane</p>
            <p className="mt-2 text-sm text-gray-300">
              Profile and address discovery provide the trust anchor for each
              node.
            </p>
          </div>
          <div className="rounded-lg border border-dark-border bg-dark-bg/60 p-4">
            <p className="text-sm font-semibold text-white">
              Interaction Plane
            </p>
            <p className="mt-2 text-sm text-gray-300">
              Follow/unfollow handshakes build and maintain relationship state.
            </p>
          </div>
          <div className="rounded-lg border border-dark-border bg-dark-bg/60 p-4">
            <p className="text-sm font-semibold text-white">Data Plane</p>
            <p className="mt-2 text-sm text-gray-300">
              Signed content and replication messages keep timelines consistent.
            </p>
          </div>
        </div>
      </article>

      <article className="rounded-xl border border-dark-border bg-dark-surface/70 p-6">
        <h2 className="text-xl font-semibold text-white">
          Core Design Principles
        </h2>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <div className="rounded-lg border border-dark-border bg-dark-bg/60 p-4">
            <h3 className="text-sm font-semibold text-white">Autonomy</h3>
            <p className="mt-2 text-sm text-gray-300">
              Each node operates independently. No central server or coordinator
              required. Nodes choose who to follow and what to publish.
            </p>
          </div>
          <div className="rounded-lg border border-dark-border bg-dark-bg/60 p-4">
            <h3 className="text-sm font-semibold text-white">
              Cryptographic Identity
            </h3>
            <p className="mt-2 text-sm text-gray-300">
              Ethereum wallet addresses serve as persistent identities. EIP-712
              signatures prove authorship without on-chain transactions.
            </p>
          </div>
          <div className="rounded-lg border border-dark-border bg-dark-bg/60 p-4">
            <h3 className="text-sm font-semibold text-white">
              Content Integrity
            </h3>
            <p className="mt-2 text-sm text-gray-300">
              Every signed publication includes a content hash. Content cannot
              be modified without invalidating the signature.
            </p>
          </div>
          <div className="rounded-lg border border-dark-border bg-dark-bg/60 p-4">
            <h3 className="text-sm font-semibold text-white">
              Replication on Demand
            </h3>
            <p className="mt-2 text-sm text-gray-300">
              Content replicates to followers on publish. No flooding or
              broadcast. Nodes pull only what they need.
            </p>
          </div>
          <div className="rounded-lg border border-dark-border bg-dark-bg/60 p-4">
            <h3 className="text-sm font-semibold text-white">
              Timestamp Ordering
            </h3>
            <p className="mt-2 text-sm text-gray-300">
              Signed timestamps establish publication order. Prevents replay
              attacks and enables timeline consistency.
            </p>
          </div>
          <div className="rounded-lg border border-dark-border bg-dark-bg/60 p-4">
            <h3 className="text-sm font-semibold text-white">HTTP Transport</h3>
            <p className="mt-2 text-sm text-gray-300">
              All protocol operations use standard HTTP. Works through proxies,
              CDNs, and firewalls without special configuration.
            </p>
          </div>
        </div>
      </article>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        <Link
          href="/docs/developer/ewp/architecture"
          className="rounded-xl border border-dark-border bg-dark-surface/70 p-5 transition-colors hover:border-primary/40"
        >
          <h2 className="text-lg font-semibold text-white">Architecture</h2>
          <p className="mt-2 text-sm text-dark-muted">
            Concept model, trust boundaries, and protocol primitives.
          </p>
        </Link>
        <Link
          href="/docs/developer/ewp/flows"
          className="rounded-xl border border-dark-border bg-dark-surface/70 p-5 transition-colors hover:border-primary/40"
        >
          <h2 className="text-lg font-semibold text-white">Core Flows</h2>
          <p className="mt-2 text-sm text-dark-muted">
            Follow/unfollow handshake, replication, and profile sync.
          </p>
        </Link>
        <Link
          href="/docs/developer/ewp/reference"
          className="rounded-xl border border-dark-border bg-dark-surface/70 p-5 transition-colors hover:border-primary/40"
        >
          <h2 className="text-lg font-semibold text-white">API Reference</h2>
          <p className="mt-2 text-sm text-dark-muted">
            Endpoint-level request, response, and error details.
          </p>
        </Link>
        <Link
          href="/docs/developer/ewp/eip712"
          className="rounded-xl border border-dark-border bg-dark-surface/70 p-5 transition-colors hover:border-primary/40"
        >
          <h2 className="text-lg font-semibold text-white">
            EIP-712 Signing Spec
          </h2>
          <p className="mt-2 text-sm text-dark-muted">
            Typed-data contracts, signer verification, and replay boundaries.
          </p>
        </Link>
      </div>

      <article className="rounded-xl border border-dark-border bg-dark-surface/70 p-6">
        <h2 className="text-xl font-semibold text-white">
          EWP Endpoint Inventory
        </h2>
        <p className="mt-2 text-sm text-dark-muted">
          Public protocol endpoints in the current EWP baseline.
        </p>
        <div className="mt-4">
          <ApiReferenceTable items={tableRows} />
        </div>
      </article>
    </div>
  )
}

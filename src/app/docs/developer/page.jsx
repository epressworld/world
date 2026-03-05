import Link from "next/link"

export default function DeveloperDocsPage() {
  return (
    <div className="space-y-6">
      <article className="rounded-2xl border border-dark-border bg-dark-surface/70 p-6 md:p-8">
        <h1 className="text-3xl font-bold text-white">Developer Docs</h1>
        <p className="mt-3 leading-7 text-gray-300">
          Build on <span className="text-white">epress world</span> through the{" "}
          <span className="text-white">epress world protocol</span>, and build
          or contribute to <span className="text-white">epress node</span>{" "}
          software.
        </p>
        <div className="mt-4 inline-flex rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs text-emerald-300">
          Implementation Status: Canonicalized against whitepaper and current
          node implementation
        </div>
      </article>

      <article className="rounded-xl border border-dark-border bg-dark-surface/70 p-6">
        <h2 className="text-xl font-semibold text-white">
          Canonical Terminology
        </h2>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          <div className="rounded-lg border border-dark-border bg-dark-bg/60 p-4">
            <p className="text-sm font-semibold text-white">epress world</p>
            <p className="mt-2 text-sm text-gray-300">
              The decentralized social network as a whole.
            </p>
          </div>
          <div className="rounded-lg border border-dark-border bg-dark-bg/60 p-4">
            <p className="text-sm font-semibold text-white">
              epress world protocol
            </p>
            <p className="mt-2 text-sm text-gray-300">
              The protocol layer used by nodes to interoperate.
            </p>
          </div>
          <div className="rounded-lg border border-dark-border bg-dark-bg/60 p-4">
            <p className="text-sm font-semibold text-white">epress node</p>
            <p className="mt-2 text-sm text-gray-300">
              The software implementation operated by node owners.
            </p>
          </div>
        </div>
      </article>

      <div className="grid gap-4 md:grid-cols-2">
        <article className="rounded-xl border border-primary/35 bg-primary/10 p-5">
          <h2 className="text-lg font-semibold text-white">
            If You Build on Protocol
          </h2>
          <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm text-gray-200">
            <li>Read protocol overview and architecture.</li>
            <li>Validate handshake and replication flows.</li>
            <li>Implement against EWP API and EIP-712 rules.</li>
          </ol>
        </article>
        <article className="rounded-xl border border-primary/35 bg-primary/10 p-5">
          <h2 className="text-lg font-semibold text-white">
            If You Build on Node
          </h2>
          <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm text-gray-200">
            <li>Set up local development and configuration.</li>
            <li>Understand architecture and auth model.</li>
            <li>Use GraphQL and REST references for integration.</li>
          </ol>
        </article>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <article className="rounded-xl border border-dark-border bg-dark-surface/70 p-5">
          <h2 className="text-xl font-semibold text-white">
            Build on epress world protocol
          </h2>
          <p className="mt-2 text-sm text-dark-muted">
            Understand protocol concepts, network flows, and integration
            endpoints.
          </p>
          <div className="mt-4">
            <Link href="/docs/developer/ewp" className="btn-primary">
              Open EWP Docs
            </Link>
          </div>
        </article>

        <article className="rounded-xl border border-dark-border bg-dark-surface/70 p-5">
          <h2 className="text-xl font-semibold text-white">
            Build and contribute to epress node
          </h2>
          <p className="mt-2 text-sm text-dark-muted">
            Set up development, understand architecture, and use GraphQL and
            REST APIs.
          </p>
          <div className="mt-4">
            <Link href="/docs/developer/node" className="btn-primary">
              Open Node Developer Docs
            </Link>
          </div>
        </article>
      </div>
    </div>
  )
}

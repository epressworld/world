import Link from "next/link"
import protocolMapping from "@/content/developer/protocol-mapping.json"

export default function EwpArchitecturePage() {
  return (
    <div className="space-y-6">
      <article className="rounded-2xl border border-dark-border bg-dark-surface/70 p-6 md:p-8">
        <h1 className="text-3xl font-bold text-white">EWP Architecture</h1>
        <p className="mt-3 leading-7 text-gray-300">
          The protocol model is organized as concepts, flows, and transport
          interfaces. This chapter documents the canonical structure of{" "}
          <span className="text-white">epress world protocol</span> for
          interoperable node behavior.
        </p>
      </article>

      <article className="rounded-xl border border-dark-border bg-dark-surface/70 p-6">
        <h2 className="text-xl font-semibold text-white">Protocol Concepts</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {protocolMapping.map((item) => (
            <div
              key={item.concept}
              className="rounded-lg border border-dark-border bg-dark-bg/60 p-4"
            >
              <p className="text-sm font-semibold text-white">{item.concept}</p>
              <p className="mt-2 text-sm text-gray-300">{item.definition}</p>
              <p className="mt-3 text-xs text-dark-muted">
                Routes: {item.routes.join(", ")}
              </p>
            </div>
          ))}
        </div>
      </article>

      <article className="rounded-xl border border-dark-border bg-dark-surface/70 p-6">
        <h2 className="text-xl font-semibold text-white">
          Trust and Verification Boundaries
        </h2>
        <ul className="mt-3 list-disc space-y-2 pl-6 text-gray-300">
          <li>Identity is anchored on Ethereum address verification.</li>
          <li>
            Cross-node writes require typed-data signature validation and
            freshness checks.
          </li>
          <li>
            Replication is gated by relationship state, not by anonymous push.
          </li>
          <li>
            Profile and publication updates are accepted only when signatures
            and timestamps are valid.
          </li>
        </ul>
        <div className="mt-4">
          <Link href="/docs/developer/ewp/eip712" className="btn-secondary">
            Open EIP-712 Signing Spec
          </Link>
        </div>
      </article>
    </div>
  )
}

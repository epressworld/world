import Link from "next/link";
import eip712Types from "@/content/developer/eip712-types.json";

export default function Eip712SpecPage() {
  const crossNode = eip712Types.filter((item) => item.scope === "Cross-node");
  const nodeLocal = eip712Types.filter((item) => item.scope === "Node-local");

  return (
    <div className="space-y-6">
      <article className="rounded-2xl border border-dark-border bg-dark-surface/70 p-6 md:p-8">
        <h1 className="text-3xl font-bold text-white">EIP-712 Signing Spec</h1>
        <p className="mt-3 leading-7 text-gray-300">
          EIP-712 typed data and Ethereum signatures are the trust backbone of <span className="text-white">epress world protocol</span>.
          For state-changing or provenance-critical interactions, nodes depend on typed-data signatures to verify signer
          identity, payload integrity, and intent timestamp.
        </p>
      </article>

      <article className="rounded-xl border border-primary/35 bg-primary/10 p-6">
        <h2 className="text-xl font-semibold text-white">What Is Signed vs What Is Read</h2>
        <ul className="mt-3 list-disc space-y-2 pl-6 text-gray-200">
          <li>Read-only discovery endpoints such as <span className="font-mono">GET /ewp/profile</span> and <span className="font-mono">GET /ewp/publications</span> are not signed requests.</li>
          <li>Cross-node state transitions and content provenance rely on EIP-712 signatures.</li>
          <li>Verification includes signer recovery, identity binding, and timestamp freshness checks.</li>
        </ul>
      </article>

      <div className="grid gap-4 md:grid-cols-2">
        <article className="rounded-xl border border-dark-border bg-dark-surface/70 p-5">
          <h2 className="text-lg font-semibold text-white">Cross-node Types</h2>
          <p className="mt-2 text-sm text-dark-muted">Protocol-level typed data shared between peer nodes.</p>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-gray-300">
            {crossNode.map((item) => (
              <li key={`cross-${item.id}`} className="font-mono">{item.primaryType}</li>
            ))}
          </ul>
        </article>

        <article className="rounded-xl border border-dark-border bg-dark-surface/70 p-5">
          <h2 className="text-lg font-semibold text-white">Node-local Types</h2>
          <p className="mt-2 text-sm text-dark-muted">Application-level typed data used by node runtime workflows.</p>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-gray-300">
            {nodeLocal.map((item) => (
              <li key={`local-${item.id}`} className="font-mono">{item.primaryType}</li>
            ))}
          </ul>
        </article>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <Link href="/docs/developer/ewp/eip712/typed-data-catalog" className="rounded-xl border border-dark-border bg-dark-surface/70 p-5 transition-colors hover:border-primary/40">
          <h2 className="text-lg font-semibold text-white">Typed Data Catalog</h2>
          <p className="mt-2 text-sm text-dark-muted">Structured field-level definitions for every current primaryType.</p>
        </Link>
        <Link href="/docs/developer/ewp/eip712/verification-rules" className="rounded-xl border border-dark-border bg-dark-surface/70 p-5 transition-colors hover:border-primary/40">
          <h2 className="text-lg font-semibold text-white">Verification Rules</h2>
          <p className="mt-2 text-sm text-dark-muted">Server-side acceptance checks and error mapping per type.</p>
        </Link>
        <Link href="/docs/developer/ewp/eip712/security-model" className="rounded-xl border border-dark-border bg-dark-surface/70 p-5 transition-colors hover:border-primary/40">
          <h2 className="text-lg font-semibold text-white">Security Model</h2>
          <p className="mt-2 text-sm text-dark-muted">Replay resistance, signer binding, and trust boundaries with flow diagrams.</p>
        </Link>
      </div>
    </div>
  );
}

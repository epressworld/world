import eip712Errors from "@/content/developer/eip712-errors.json";
import eip712Verification from "@/content/developer/eip712-verification.json";
import { VerificationChecklist } from "@/components/developer/verification-checklist";

function ErrorCard({ item }) {
  return (
    <article className="rounded-xl border border-dark-border bg-dark-surface/70 p-5">
      <div className="flex flex-wrap items-center gap-2">
        <span className="inline-flex rounded-full border border-primary/40 bg-primary/10 px-2 py-0.5 text-xs text-primary">
          {item.id}
        </span>
        <span className="inline-flex rounded-full border border-dark-border bg-dark-bg/60 px-2 py-0.5 text-xs text-dark-muted">
          {item.target}
        </span>
      </div>
      <ul className="mt-4 space-y-2">
        {item.errors.map((errorCode) => (
          <li
            key={`${item.id}-${errorCode}`}
            className="rounded-md border border-dark-border bg-dark-bg/50 px-3 py-2 font-mono text-xs text-gray-200"
          >
            {errorCode}
          </li>
        ))}
      </ul>
    </article>
  );
}

export default function Eip712VerificationRulesPage() {
  const crossNode = eip712Verification.filter((item) => item.scope === "Cross-node");
  const nodeLocal = eip712Verification.filter((item) => item.scope === "Node-local");

  return (
    <div className="space-y-6">
      <article className="rounded-2xl border border-dark-border bg-dark-surface/70 p-6 md:p-8">
        <h1 className="text-3xl font-bold text-white">EIP-712 Verification Rules</h1>
        <p className="mt-3 leading-7 text-gray-300">
          This chapter documents the acceptance checks executed by <span className="text-white">epress node</span> when receiving
          signed typed-data payloads in <span className="text-white">epress world protocol</span>.
        </p>
      </article>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-white">Cross-node Verification</h2>
        <p className="text-sm text-dark-muted">
          These rules gate protocol transitions between peer nodes in <span className="text-white">epress world protocol</span>.
        </p>
        <div className="grid gap-4 xl:grid-cols-2">
          {crossNode.map((item) => (
            <VerificationChecklist key={`cross-${item.id}`} item={item} />
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-white">Node-local Verification</h2>
        <p className="text-sm text-dark-muted">
          These rules apply to application-side workflows running inside one <span className="text-white">epress node</span>.
        </p>
        <div className="grid gap-4 xl:grid-cols-2">
          {nodeLocal.map((item) => (
            <VerificationChecklist key={`local-${item.id}`} item={item} />
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-white">Error Matrix</h2>
        <p className="text-sm text-dark-muted">Observed error outcomes mapped to each verification target.</p>
        <div className="grid gap-4 xl:grid-cols-2">
          {eip712Errors.map((item) => (
            <ErrorCard key={`err-${item.id}`} item={item} />
          ))}
        </div>
      </section>
    </div>
  );
}

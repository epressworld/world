import { AgentEraFlowSvg, AuthenticityCrisisSvg } from "./built-for-coming-svg"

export function BuiltForComing() {
  return (
    <section className="landing-section bg-dark-surface/40">
      <div className="container-custom">
        <h2 className="landing-heading mb-4 text-center">
          Built for What's Coming
        </h2>
        <p className="landing-subheading text-center mx-auto mb-12">
          Two irreversible trends. epress is ready for both.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl border-l-4 border-l-primary bg-dark-surface/70 p-6">
            <h3 className="text-primary text-sm font-mono font-semibold uppercase tracking-wider mb-4">
              The Authenticity Crisis
            </h3>
            <div className="diagram-frame mb-4">
              <AuthenticityCrisisSvg />
            </div>
            <p className="text-sm font-mono text-dark-muted leading-relaxed">
              AI generates infinite content at zero cost.
              <br />
              PoS doesn't stop AI — it makes human authorship
              <br />
              cryptographically provable.
            </p>
          </div>

          <div className="rounded-2xl border-l-4 border-l-accent-green bg-dark-surface/70 p-6">
            <h3 className="text-accent-green text-sm font-mono font-semibold uppercase tracking-wider mb-4">
              The Agent Era
            </h3>
            <div className="diagram-frame mb-4">
              <AgentEraFlowSvg />
            </div>
            <p className="text-sm font-mono text-dark-muted leading-relaxed">
              Everyone will have an AI agent acting on their behalf.
              <br />
              Open nodes, open APIs — your agent works freely
              <br />
              without walls, paywalls, or rate limits.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

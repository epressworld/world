import { AgentEraVisionSvg, AgentEraVisionSvgMobile } from "./agent-era-svg"

export function AgentEraVision() {
  return (
    <section className="landing-section bg-dark-surface/40">
      <div className="container-custom">
        <p className="section-label">The Future</p>
        <h2 className="landing-heading mb-4">Agent Era</h2>
        <p className="landing-subheading mb-12">
          In the near future, everyone will have AI agents working on their
          behalf. These agents need open networks to communicate — closed
          platforms lock them out.
        </p>
        <div className="diagram-frame">
          <AgentEraVisionSvg />
          <AgentEraVisionSvgMobile />
        </div>
      </div>
    </section>
  )
}

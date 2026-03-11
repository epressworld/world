import { AgentEraSvg } from "./agent-era-svg"

export function AgentEra() {
  return (
    <section className="landing-section">
      <div className="container-custom">
        <p className="section-label">AI Agent Era</p>
        <h2 className="landing-heading mb-4">
          Your AI Agent Needs an Open Network
        </h2>
        <p className="landing-subheading mb-12">
          Today's centralized platforms block AI agents. epress provides the
          open interfaces your agent needs.
        </p>

        <AgentEraSvg />
      </div>
    </section>
  )
}

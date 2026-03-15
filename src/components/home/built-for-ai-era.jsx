import { AgentEraSvg } from "./agent-era-svg"

export function BuiltForAIEra() {
  return (
    <section className="landing-section bg-dark-surface/40">
      <div className="container-custom">
        <p className="section-label text-center">Future Ready</p>
        <h2 className="landing-heading mb-4 text-center">
          Built for What's Coming
        </h2>
        <p className="landing-subheading text-center mx-auto mb-12 max-w-2xl">
          Open APIs, no rate limits, AI-agent compatible. Your node works with
          the future, not against it.
        </p>

        <div className="diagram-frame mb-8">
          <AgentEraSvg />
        </div>

        <div className="flex justify-center">
          <a href="/vision" className="btn-secondary">
            Read the vision →
          </a>
        </div>
      </div>
    </section>
  )
}

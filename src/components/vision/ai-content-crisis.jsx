import { AIContentCrisisSvg } from "./ai-content-crisis-svg"

export function AIContentCrisis() {
  return (
    <section className="landing-section">
      <div className="container-custom">
        <p className="section-label">The Crisis</p>
        <h2 className="landing-heading mb-4">AI Content Crisis</h2>
        <p className="landing-subheading mb-12">
          The internet is drowning in AI-generated content. Without
          cryptographic proof of source, distinguishing authentic human voices
          becomes impossible.
        </p>
        <div className="diagram-frame">
          <AIContentCrisisSvg />
        </div>
      </div>
    </section>
  )
}

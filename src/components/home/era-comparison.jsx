import { ComparisonCard } from "@/components/shared/comparison-card"
import { AIContentFloodSvg, ProofOfSourceSvg } from "./era-comparison-svg"

export function EraComparison() {
  return (
    <section className="landing-section bg-dark-surface/40">
      <div className="container-custom">
        <p className="section-label">The Context</p>
        <h2 className="landing-heading mb-4">
          AI Content is Flooding the Internet
        </h2>
        <p className="landing-subheading mb-12">
          As AI-generated content grows, distinguishing authentic human voices
          becomes impossible — unless we have cryptographic proof.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          <ComparisonCard variant="warning" title="AI Content Flood">
            <AIContentFloodSvg />
          </ComparisonCard>

          <ComparisonCard variant="success" title="Proof of Source">
            <ProofOfSourceSvg />
          </ComparisonCard>
        </div>
      </div>
    </section>
  )
}

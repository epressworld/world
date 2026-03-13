import { ComparisonCard } from "@/components/shared/comparison-card"
import { AIContentFloodSvg, ProofOfSourceSvg } from "./era-comparison-svg"

const posSteps = [
  {
    number: "01",
    title: "AI Can't Afford the Signal",
    content: `AI generates infinite addresses at zero cost.
But no one lets a bot sign with a wallet
that holds real assets.`,
  },
  {
    number: "02",
    title: "Assets Are the Anchor",
    content: `The more value behind an address,
the less likely it's disposable.
Real assets = real accountability.`,
  },
  {
    number: "03",
    title: "An Unfakeable Signal",
    content: `High-value address + signed content
= almost certainly human.
This cost asymmetry can't be faked at scale.`,
  },
]

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

        <div className="mt-12">
          <h3 className="font-sans text-2xl md:text-3xl font-bold text-white mb-2">
            Why PoS Actually Works
          </h3>
          <p className="text-sm font-mono text-dark-muted mb-8">
            Yes, Ethereum addresses are free to create. Here's why that doesn't
            matter.
          </p>

          <div className="flex flex-col md:flex-row gap-4 md:gap-2 items-stretch">
            {posSteps.map((step, idx) => (
              <div
                key={step.number}
                className="flex flex-col md:flex-row items-stretch flex-1"
              >
                <div className="rounded-2xl border border-dark-border bg-dark-surface/70 p-6 flex-1">
                  <span className="text-3xl font-mono font-bold text-primary">
                    {step.number}
                  </span>
                  <h4 className="font-sans text-lg font-semibold text-white mt-3 mb-3">
                    {step.title}
                  </h4>
                  <p className="text-sm font-mono text-dark-muted whitespace-pre-line leading-relaxed">
                    {step.content}
                  </p>
                </div>
                {idx < posSteps.length - 1 && (
                  <div className="flex items-center justify-center py-2 md:py-0 md:px-2">
                    <span className="text-2xl font-mono text-dark-muted md:hidden">
                      ↓
                    </span>
                    <span className="text-2xl font-mono text-dark-muted hidden md:inline">
                      →
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-xl border border-dashed border-[#4af0d4]/40 bg-dark-surface/50 p-5 text-center">
            <p className="text-sm font-mono text-dark-text">
              The signal isn't the signature. It's{" "}
              <span className="text-primary">what's behind the address</span>.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

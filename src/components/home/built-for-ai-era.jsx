import { AgentEraSvg } from "./agent-era-svg"
import { AgentEraFlowSvg, AuthenticityCrisisSvg } from "./built-for-coming-svg"
import { AIContentFloodSvg, ProofOfSourceSvg } from "./era-comparison-svg"

const trendCards = [
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
    title: "A Costly Signal",
    content: `High-value address + signed content
= skin in the game.
Costly signals are hard to fake at scale.`,
  },
]

export function BuiltForAIEra() {
  return (
    <section className="landing-section bg-dark-surface/40">
      <div className="container-custom">
        <h2 className="landing-heading mb-4 text-left">Built for the AI Era</h2>
        <p className="landing-subheading text-left mb-16 max-w-2xl">
          AI is reshaping the internet in two fundamental ways.
          <br />
          epress is designed for both.
        </p>

        <div className="space-y-16">
          <div>
            <p className="text-xs font-mono uppercase tracking-wider text-primary mb-3">
              TREND 01 — THE AGENT ERA
            </p>
            <h3 className="font-sans text-2xl md:text-3xl font-bold text-white mb-4">
              Everyone Will Have an AI Agent
            </h3>
            <p className="text-sm font-mono text-dark-muted leading-relaxed mb-8 max-w-2xl">
              In the near future, your AI agent will post, read,
              <br />
              and manage your social presence on your behalf.
              <br />
              Your agent operates your node —
              <br />
              the node communicates with the rest of the network.
            </p>

            <div className="diagram-frame mb-6 max-w-md mx-auto md:mx-0">
              <AgentEraFlowSvg />
            </div>

            <p className="text-sm font-mono text-dark-muted leading-relaxed mb-8">
              But there's a problem:
              <br />
              today's platforms actively block AI agents.
            </p>

            <div className="diagram-frame mb-8">
              <AgentEraSvg />
            </div>

            <p className="text-sm font-mono text-dark-muted leading-relaxed max-w-2xl">
              Rate limits. Paywalls. Anti-scraping.
              <br />
              Every major platform is building walls
              <br />
              exactly where your AI agent needs to move freely.
            </p>
            <p className="text-sm font-mono text-dark-muted leading-relaxed mt-4 max-w-2xl">
              epress nodes are natively open —
              <br />
              open RSS, open API, no authentication required.
              <br />
              Your agent works. No permission needed.
            </p>
          </div>

          <div className="relative py-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-dark-border" />
            </div>
            <div className="relative flex justify-center">
              <span className="bg-dark-surface px-4 text-xs font-mono text-dark-muted">
                — and there's a second shift coming
              </span>
            </div>
          </div>

          <div>
            <p className="text-xs font-mono uppercase tracking-wider text-primary mb-3">
              TREND 02 — THE AUTHENTICITY CRISIS
            </p>
            <h3 className="font-sans text-2xl md:text-3xl font-bold text-white mb-4">
              AI Content is Flooding the Internet
            </h3>
            <p className="text-sm font-mono text-dark-muted leading-relaxed mb-8 max-w-2xl">
              AI can generate infinite content at near-zero cost.
              <br />
              As machine-generated text floods every platform,
              <br />
              distinguishing authentic human voices
              <br />
              from AI output becomes increasingly impossible.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="rounded-2xl border border-dark-border bg-dark-surface/70 p-4">
                <h4 className="text-sm font-mono font-semibold text-red-400 mb-3">
                  AI Content Flood
                </h4>
                <AIContentFloodSvg />
              </div>
              <div className="rounded-2xl border border-dark-border bg-dark-surface/70 p-4">
                <h4 className="text-sm font-mono font-semibold text-[#4af0d4] mb-3">
                  Proof of Source
                </h4>
                <ProofOfSourceSvg />
              </div>
            </div>

            <div className="diagram-frame mb-8 max-w-sm mx-auto">
              <AuthenticityCrisisSvg />
            </div>

            <p className="text-sm font-mono text-dark-muted leading-relaxed mb-12 max-w-2xl">
              epress doesn't stop AI content —
              <br />
              it makes human authorship cryptographically provable.
            </p>

            <div className="flex flex-col md:flex-row gap-4 mb-8">
              {trendCards.map((card) => (
                <div
                  key={card.number}
                  className="flex-1 rounded-2xl border-l-4 border-l-primary bg-dark-surface/70 p-6"
                >
                  <span className="text-3xl font-mono font-bold text-primary">
                    {card.number}
                  </span>
                  <h4 className="font-sans text-lg font-semibold text-white mt-3 mb-3">
                    {card.title}
                  </h4>
                  <p className="text-sm font-mono text-dark-muted whitespace-pre-line leading-relaxed">
                    {card.content}
                  </p>
                </div>
              ))}
            </div>

            <div className="rounded-xl border border-dashed border-[#4af0d4]/40 bg-dark-surface/50 p-5 text-center">
              <p className="text-sm font-mono text-dark-text">
                The signal isn't the signature. It's{" "}
                <span className="text-primary">
                  the real-world cost behind the address
                </span>
                .
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

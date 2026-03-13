import { MiniDiagram } from "@/components/shared/mini-diagram"

function ContentFlowDiagram() {
  return (
    <div className="space-y-10">
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary rounded-full" />
        <div className="pl-8">
          <p className="text-xs font-mono text-primary uppercase tracking-wider mb-3">
            Publish
          </p>
          <div className="flex flex-col md:flex-row items-start gap-4 md:gap-8">
            <div className="flex-1">
              <div className="p-4 rounded-lg border border-primary/30 bg-gradient-to-br from-primary/10 to-dark-surface/50">
                <p className="text-sm font-mono text-primary font-semibold mb-2">
                  Alice&apos;s Node
                </p>
                <p className="text-xs text-dark-muted">
                  1. Write &amp; sign content
                </p>
                <p className="text-xs text-dark-muted">
                  Generates PoS credential
                </p>
              </div>
            </div>
            <div className="flex items-center justify-center px-4">
              <svg
                width="40"
                height="20"
                viewBox="0 0 40 20"
                className="rotate-90 md:rotate-0"
              >
                <line
                  x1="0"
                  y1="10"
                  x2="30"
                  y2="10"
                  stroke="#F7931A"
                  strokeWidth="2"
                />
                <polygon points="40,10 30,5 30,15" fill="#F7931A" />
              </svg>
              <span className="text-xs font-mono text-primary ml-2">signs</span>
            </div>
            <div className="flex-1">
              <div className="p-3 rounded-lg border border-[#34D399]/40 bg-gradient-to-br from-[#34D399]/10 to-dark-surface/50">
                <p className="text-xs font-mono text-[#34D399] font-semibold mb-1">
                  PoS Structure
                </p>
                <p className="text-[10px] font-mono text-dark-muted leading-relaxed">
                  {"{"} contentHash, publisherAddress, timestamp, signature{" "}
                  {"}"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#e8a04a] rounded-full" />
        <div className="pl-8">
          <p className="text-xs font-mono text-[#e8a04a] uppercase tracking-wider mb-3">
            Notify
          </p>
          <div className="p-4 rounded-lg border border-[#e8a04a]/30 bg-gradient-to-br from-[#e8a04a]/10 to-dark-surface/50 mb-4">
            <div className="flex flex-col items-center">
              <div className="flex items-center gap-2 mb-4">
                <div className="p-2 rounded border border-primary/40 bg-dark-bg">
                  <span className="text-xs font-mono text-primary">
                    Alice&apos;s Node
                  </span>
                </div>
                <span className="text-xs text-dark-muted italic">
                  Sends proof, not content
                </span>
              </div>
              <div className="flex flex-col md:flex-row items-center gap-4 w-full justify-center">
                <div className="flex flex-col items-center gap-2">
                  <svg width="60" height="40" viewBox="0 0 60 40">
                    <line
                      x1="0"
                      y1="20"
                      x2="50"
                      y2="20"
                      stroke="#e8a04a"
                      strokeWidth="1.5"
                      strokeDasharray="4 2"
                    />
                    <polygon points="60,20 50,15 50,25" fill="#e8a04a" />
                  </svg>
                  <div className="p-2 rounded border border-dark-border bg-dark-bg text-center">
                    <p className="text-[10px] font-mono text-dark-muted">
                      Follower 1
                    </p>
                  </div>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <svg width="60" height="40" viewBox="0 0 60 40">
                    <line
                      x1="0"
                      y1="20"
                      x2="50"
                      y2="20"
                      stroke="#e8a04a"
                      strokeWidth="1.5"
                      strokeDasharray="4 2"
                    />
                    <polygon points="60,20 50,15 50,25" fill="#e8a04a" />
                  </svg>
                  <div className="p-2 rounded border border-dark-border bg-dark-bg text-center">
                    <p className="text-[10px] font-mono text-dark-muted">
                      Follower 2
                    </p>
                  </div>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <svg width="60" height="40" viewBox="0 0 60 40">
                    <line
                      x1="0"
                      y1="20"
                      x2="50"
                      y2="20"
                      stroke="#e8a04a"
                      strokeWidth="1.5"
                      strokeDasharray="4 2"
                    />
                    <polygon points="60,20 50,15 50,25" fill="#e8a04a" />
                  </svg>
                  <div className="p-2 rounded border border-dark-border bg-dark-bg text-center">
                    <p className="text-[10px] font-mono text-dark-muted">
                      Follower 3
                    </p>
                  </div>
                </div>
              </div>
              <p className="text-xs font-mono text-[#e8a04a] mt-3">
                PoS only (lightweight) ~200 bytes each
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#34D399] rounded-full" />
        <div className="pl-8">
          <p className="text-xs font-mono text-[#34D399] uppercase tracking-wider mb-3">
            Replicate
          </p>
          <div className="space-y-3">
            {[1, 2, 3].map((num) => (
              <div
                key={num}
                className="flex flex-col md:flex-row items-center gap-2 md:gap-3 text-xs font-mono"
              >
                <div className="p-2 rounded border border-dark-border bg-dark-bg">
                  <span className="text-dark-muted">Follower {num}</span>
                </div>
                <span className="text-[#34D399]">→</span>
                <span className="text-dark-muted">verify PoS</span>
                <span className="text-[#34D399]">→</span>
                <span className="text-dark-muted">pull content</span>
                <span className="text-[#34D399]">→</span>
                <span className="text-dark-muted">store replica</span>
                <span className="text-[#34D399]">→</span>
                <div className="p-2 rounded border border-[#34D399]/40 bg-[#34D399]/10">
                  <span className="text-[#34D399]">Content + PoS ✓</span>
                </div>
              </div>
            ))}
          </div>
          <p className="text-sm font-mono text-[#34D399] mt-4 text-center md:text-left p-3 rounded-lg bg-[#34D399]/10 border border-[#34D399]/20">
            Every replica carries the full PoS. Any node can verify the origin
            independently — no need to contact Alice&apos;s node.
          </p>
        </div>
      </div>
    </div>
  )
}

export function ContentFlowSection() {
  return (
    <section id="content-flow" className="landing-section bg-dark-surface/40">
      <div className="container-custom">
        <p className="section-label">Distribution</p>
        <h2 className="landing-heading mb-4">Content Flow</h2>
        <p className="landing-subheading mb-12 max-w-3xl">
          When you publish, content doesn&apos;t just reach your followers — it
          becomes permanently distributed across the network, each copy carrying
          its own cryptographic proof of origin.
        </p>

        <MiniDiagram className="mb-8 p-8 overflow-hidden">
          <ContentFlowDiagram />
        </MiniDiagram>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <div className="p-6 rounded-xl border border-primary/30 bg-gradient-to-br from-primary/10 to-dark-surface/50">
            <h3 className="text-lg font-semibold text-primary mb-3">
              PoS Travels With Content
            </h3>
            <p className="text-sm text-dark-muted leading-relaxed">
              Every copy of your content carries the original cryptographic
              proof. Authenticity is verifiable anywhere in the network,
              forever.
            </p>
          </div>

          <div className="p-6 rounded-xl border border-[#34D399]/30 bg-gradient-to-br from-[#34D399]/10 to-dark-surface/50">
            <h3 className="text-lg font-semibold text-[#34D399] mb-3">
              The More It Spreads, The Safer It Gets
            </h3>
            <p className="text-sm text-dark-muted leading-relaxed">
              Each follower stores an independent replica. The more people
              follow you, the more copies exist — making your content
              increasingly resilient to loss.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

import { Timeline } from "@/components/shared/timeline"

const lifetimeStages = [
  {
    icon: "👶",
    title: "Birth",
    description: "Parents deploy your node",
  },
  {
    icon: "📖",
    title: "Growing",
    description: "Memories recorded on YOUR node",
  },
  {
    icon: "🔑",
    title: "Handover",
    description: "Private key yours forever",
  },
  {
    icon: "🏛️",
    title: "Legacy",
    description: "Children inherit your node",
  },
]

const comparisonData = [
  {
    scenario: "Platform shuts down",
    scenarioShort: "Shutdown",
    platform: { icon: "✗", text: "Everything gone" },
    epress: { icon: "✓", text: "Node still runs" },
  },
  {
    scenario: "Account gets banned",
    scenarioShort: "Banned",
    platform: { icon: "✗", text: "Years of work deleted" },
    epress: { icon: "✓", text: "Nothing changes" },
  },
  {
    scenario: "You stop paying",
    scenarioShort: "No payment",
    platform: { icon: "✗", text: "Access lost" },
    epress: { icon: "✓", text: "Your data stays" },
  },
  {
    scenario: "You pass away",
    scenarioShort: "Pass away",
    platform: { icon: "✗", text: "Account eventually deleted" },
    epress: { icon: "✓", text: "Private key inheritable" },
  },
]

export function LifetimeDeep() {
  return (
    <section className="landing-section">
      <div className="container-custom">
        <p className="section-label">A New Kind of Inheritance</p>
        <h2 className="landing-heading mb-4 text-center">
          One Node. One Lifetime.
        </h2>
        <p className="landing-subheading text-center mx-auto mb-12">
          Your epress node grows with you — and becomes something you can pass
          to the next generation.
        </p>

        <Timeline items={lifetimeStages} />

        <div className="mt-12 max-w-3xl mx-auto">
          <p className="text-center text-xs font-mono uppercase tracking-wider text-dark-muted mb-6">
            What happens to your digital life
          </p>

          <div className="rounded-2xl border border-dark-border bg-dark-surface/70 p-6">
            <div className="grid grid-cols-3 gap-4">
              <div className="text-left">
                <span className="sr-only">Scenario</span>
              </div>
              <div className="text-center bg-[rgba(255,68,68,0.05)] rounded-lg py-2 -mx-2">
                <span className="text-sm font-mono font-semibold text-red-400">
                  Platform Account
                </span>
              </div>
              <div className="text-center bg-[rgba(74,240,212,0.05)] rounded-lg py-2 -mx-2">
                <span className="text-sm font-mono font-semibold text-accent-green">
                  epress Node
                </span>
              </div>
            </div>

            <div className="mt-4 space-y-0">
              {comparisonData.map((row, idx) => (
                <div
                  key={row.scenario}
                  className={`grid grid-cols-3 gap-4 py-3 ${
                    idx < comparisonData.length - 1
                      ? "border-b border-white/10"
                      : ""
                  }`}
                >
                  <div className="text-left">
                    <span className="text-sm font-mono text-dark-text/80 hidden md:inline">
                      {row.scenario}
                    </span>
                    <span className="text-xs font-mono text-dark-text/80 md:hidden">
                      {row.scenarioShort}
                    </span>
                  </div>
                  <div className="text-center bg-[rgba(255,68,68,0.05)] rounded-lg py-2 -mx-2">
                    <span className="text-sm font-mono text-red-400">
                      {row.platform.icon}{" "}
                      <span className="hidden md:inline">
                        {row.platform.text}
                      </span>
                      <span className="md:hidden text-xs">
                        {row.platform.text.split(" ")[0]}
                      </span>
                    </span>
                  </div>
                  <div className="text-center bg-[rgba(74,240,212,0.05)] rounded-lg py-2 -mx-2">
                    <span className="text-sm font-mono text-accent-green">
                      {row.epress.icon}{" "}
                      <span className="hidden md:inline">
                        {row.epress.text}
                      </span>
                      <span className="md:hidden text-xs">
                        {row.epress.text.split(" ")[0]}
                      </span>
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 max-w-3xl mx-auto">
          <h3 className="font-sans text-2xl md:text-3xl font-bold text-white mb-8 text-center">
            A New Category of Asset
          </h3>

          <div className="space-y-6 text-center">
            <p className="text-sm font-mono text-dark-muted leading-relaxed">
              Current platforms lock your digital life on servers that don't
              belong to you. When you die, that decade of work exists in a legal
              gray zone.
            </p>

            <p className="text-sm font-mono text-dark-muted leading-relaxed">
              An epress node is legally your property — the same as a house or a
              bank account. Include it in a will. Put it in a trust. Transfer it
              by handing over a private key.
            </p>

            <p className="text-sm font-mono text-accent-green leading-relaxed">
              No platform permission required.
              <br />
              No appeals process. No expiration date.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

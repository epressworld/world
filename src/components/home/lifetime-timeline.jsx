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

export function LifetimeTimeline() {
  return (
    <section className="landing-section bg-dark-surface/40">
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
                <span className="text-sm font-mono font-semibold text-[#4af0d4]">
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
                    <span className="text-sm font-mono text-[#4af0d4]">
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

        <div className="mt-16 max-w-3xl mx-auto text-center">
          <p className="text-lg md:text-xl text-dark-text leading-relaxed italic">
            Imagine your grandmother had an epress node in 1990. Her recipes,
            her letters, her thoughts — still there. Still hers. Still yours to
            inherit.
          </p>
        </div>
      </div>
    </section>
  )
}

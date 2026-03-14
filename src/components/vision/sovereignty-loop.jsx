import { SovereigntyLoopSvg } from "./sovereignty-loop-svg"

const comparisonColumns = [
  {
    name: "Mastodon / Bluesky",
    items: [
      { label: "Identity", status: "check" },
      { label: "Content", status: "partial" },
      { label: "Social Graph", status: "partial" },
      { label: "Legacy", status: "cross" },
    ],
  },
  {
    name: "Nostr / Farcaster",
    items: [
      { label: "Identity", status: "check" },
      { label: "Content", status: "partial" },
      { label: "Social Graph", status: "partial" },
      { label: "Legacy", status: "cross" },
    ],
  },
  {
    name: "epress",
    highlight: true,
    items: [
      { label: "Identity", status: "check" },
      { label: "Content", status: "check" },
      { label: "Social Graph", status: "check" },
      { label: "Legacy", status: "check" },
    ],
  },
]

function StatusIcon({ status }) {
  if (status === "check") {
    return <span className="text-accent-green">✓</span>
  }
  if (status === "partial") {
    return <span className="text-dark-muted">△</span>
  }
  return <span className="text-red-400">✗</span>
}

export function SovereigntyLoop() {
  return (
    <section className="landing-section bg-dark-surface/40">
      <div className="container-custom">
        <h2 className="landing-heading mb-4 text-center">
          Digital Sovereignty, Complete
        </h2>
        <p className="landing-subheading text-center mx-auto mb-12">
          Every existing solution gives back one piece.
          <br />
          epress gives back all four.
        </p>

        <div className="diagram-frame p-8 mb-12">
          <SovereigntyLoopSvg />
        </div>

        <div className="grid md:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {comparisonColumns.map((col) => (
            <div
              key={col.name}
              className={`rounded-xl border p-4 ${
                col.highlight
                  ? "border-primary bg-primary/5"
                  : "border-dark-border bg-dark-surface/50"
              }`}
            >
              <h3
                className={`text-sm font-mono font-semibold mb-3 ${
                  col.highlight ? "text-primary" : "text-dark-muted"
                }`}
              >
                {col.name}
              </h3>
              <div className="space-y-2">
                {col.items.map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center justify-between text-sm font-mono"
                  >
                    <span className="text-dark-text">{item.label}</span>
                    <StatusIcon status={item.status} />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

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
      </div>
    </section>
  )
}

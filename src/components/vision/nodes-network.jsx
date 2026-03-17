import { NodesNetworkSvg } from "./nodes-network-svg"

const cards = [
  {
    icon: "📊",
    title: "Decentralized PageRank",
    content:
      "Idea value determined by who quotes it — not by platform algorithms.",
  },
  {
    icon: "🏆",
    title: "Portable Reputation",
    content:
      "Your full contribution history, permanently verifiable, forever portable.",
  },
  {
    icon: "🧬",
    title: "Provenance-First Data",
    content:
      "Every piece of content has a traceable human origin — the foundation AI needs.",
  },
]

export function NodesNetwork() {
  return (
    <section className="landing-section bg-dark-surface/40">
      <div className="container-custom">
        <h2 className="landing-heading mb-4 text-center">
          When Nodes Become a Network
        </h2>
        <p className="landing-subheading text-center mx-auto mb-12">
          Something larger emerges.
        </p>

        <div className="diagram-frame p-8 mb-12">
          <NodesNetworkSvg />
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {cards.map((card) => (
            <div key={card.title} className="landing-card text-center">
              <div className="text-3xl mb-4">{card.icon}</div>
              <h3 className="font-sans text-lg font-semibold text-white mb-3">
                {card.title}
              </h3>
              <p className="text-sm font-mono text-dark-muted leading-relaxed">
                {card.content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

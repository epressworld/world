import { MiniDiagram } from "@/components/shared/mini-diagram"
import {
  OpenProtocolDiagram,
  ProofOfSourceDiagram,
  SelfHostedDiagram,
} from "./tech-card-diagrams"

const cards = [
  {
    title: "Proof of Source",
    diagram: ProofOfSourceDiagram,
    points: ["Content integrity", "Verifiable authorship", "Tamper-evident"],
  },
  {
    title: "Open Protocol",
    diagram: OpenProtocolDiagram,
    points: ["EWP standard", "No authentication", "Peer-to-peer"],
  },
  {
    title: "Self-Hosted",
    diagram: SelfHostedDiagram,
    points: ["Docker deployment", "Full data control", "Your infrastructure"],
  },
]

export function TechCards() {
  return (
    <section className="landing-section">
      <div className="container-custom">
        <p className="section-label">How It Works</p>
        <h2 className="landing-heading mb-4 text-center">
          Three Core Mechanisms
        </h2>
        <p className="landing-subheading text-center mx-auto mb-12">
          Simple concepts that enable a truly decentralized social network.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {cards.map((card, idx) => {
            const Diagram = card.diagram
            return (
              <div key={idx} className="landing-card">
                <MiniDiagram className="mb-4">
                  <Diagram />
                </MiniDiagram>
                <h3 className="font-sans text-lg font-semibold mb-3">
                  {card.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {card.points.map((point) => (
                    <span
                      key={point}
                      className="inline-flex rounded-full border border-primary/35 bg-primary/10 px-3 py-1 text-xs text-primary"
                    >
                      {point}
                    </span>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

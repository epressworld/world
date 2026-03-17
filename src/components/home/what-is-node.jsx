import { NodeNetworkSvg } from "./node-network-svg"

const nodeAspects = [
  { left: "Your Ethereum address", right: "your identity" },
  { left: "Your server", right: "your content" },
  { left: "Your follow list", right: "your social graph" },
  { left: "Your private key", right: "your sovereignty" },
]

export function WhatIsNode() {
  return (
    <section className="landing-section">
      <div className="container-custom">
        <p className="section-label">The Foundation</p>
        <h2 className="landing-heading mb-4 text-center">
          What is an epress Node
        </h2>
        <p className="landing-subheading text-center mx-auto mb-12">
          Your Node is Your Presence
        </p>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="diagram-frame p-8 order-2 md:order-1">
            <NodeNetworkSvg />
          </div>

          <div className="order-1 md:order-2">
            <div className="space-y-4">
              {nodeAspects.map((aspect, idx) => (
                <div key={idx} className="flex items-center font-mono text-sm">
                  <span className="text-dark-text flex-shrink-0">
                    {aspect.left}
                  </span>
                  <span className="text-primary mx-3">→</span>
                  <span className="text-dark-muted">{aspect.right}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

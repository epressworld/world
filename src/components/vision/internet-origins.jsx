import { InternetOriginsSvg } from "./internet-origins-svg"

export function InternetOrigins() {
  return (
    <section className="landing-section">
      <div className="container-custom">
        <p className="section-label">The Vision</p>
        <h2 className="landing-heading mb-4">Internet Origins</h2>
        <p className="landing-subheading mb-12">
          The internet was designed as a peer-to-peer network. We&apos;re
          returning to that original vision — decentralized, resilient, and open
          for all.
        </p>
        <div className="diagram-frame">
          <InternetOriginsSvg />
        </div>
      </div>
    </section>
  )
}

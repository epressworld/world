import { HomeServerSvg } from "./home-server-svg"

export function HomeServer() {
  return (
    <section className="landing-section bg-dark-surface/40">
      <div className="container-custom">
        <p className="section-label">The Dream</p>
        <h2 className="landing-heading mb-4">Home Server Vision</h2>
        <p className="landing-subheading mb-12">
          Self-hosting should be as simple as owning a refrigerator. Plug it in,
          connect to your network, and your digital home is online — hosting
          your blog, your data, your identity.
        </p>
        <div className="diagram-frame">
          <HomeServerSvg />
        </div>
      </div>
    </section>
  )
}

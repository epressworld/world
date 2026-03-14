import { InternetPromisedCombinedSvg } from "./internet-promised-combined-svg"

export function InternetPromised() {
  return (
    <section className="landing-section">
      <div className="container-custom">
        <h2 className="landing-heading mb-12 text-center">
          The Internet We Were Promised
        </h2>

        <div className="diagram-frame">
          <InternetPromisedCombinedSvg />
        </div>
      </div>
    </section>
  )
}

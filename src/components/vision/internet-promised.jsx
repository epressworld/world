import { InternetPromisedSvg } from "./internet-promised-svg"

export function InternetPromised() {
  return (
    <section className="landing-section">
      <div className="container-custom">
        <h2 className="landing-heading mb-12 text-center">
          The Internet We Were Promised
        </h2>

        <div className="diagram-frame p-8">
          <InternetPromisedSvg />
        </div>
      </div>
    </section>
  )
}

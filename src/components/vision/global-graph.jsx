import { GlobalGraphSvg } from "./global-graph-svg"

export function GlobalGraph() {
  return (
    <section className="landing-section">
      <div className="container-custom">
        <p className="section-label">The Goal</p>
        <h2 className="landing-heading mb-4">Global Thought Graph</h2>
        <p className="landing-subheading mb-12">
          Every epress node connects to form a global network of human thought —
          a new kind of conversation that spans continents, cultures, and ideas.
        </p>
        <div className="diagram-frame">
          <GlobalGraphSvg />
        </div>
      </div>
    </section>
  )
}

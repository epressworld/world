import { OwnershipComparisonSvg } from "./ownership-comparison-svg"

export function OwnershipComparison() {
  return (
    <section className="landing-section bg-dark-surface/40">
      <div className="container-custom">
        <h2 className="landing-heading mb-4 text-center">
          You Don't Own Your Digital Life
        </h2>
        <p className="landing-subheading text-center mx-auto mb-12">
          Platform accounts are rented. An epress node is owned.
        </p>

        <div className="diagram-frame p-8">
          <OwnershipComparisonSvg />
        </div>
      </div>
    </section>
  )
}

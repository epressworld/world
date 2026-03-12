import { PlatformWallsSvg } from "./platform-walls-svg"

export function PlatformWalls() {
  return (
    <section className="landing-section bg-dark-surface/40">
      <div className="container-custom">
        <p className="section-label">The Problem</p>
        <h2 className="landing-heading mb-4">Platform Walls</h2>
        <p className="landing-subheading mb-12">
          Centralized platforms trap users in walled gardens. Your data,
          connections, and content are locked away, inaccessible to other
          platforms or your own tools.
        </p>
        <div className="diagram-frame">
          <PlatformWallsSvg />
        </div>
      </div>
    </section>
  )
}

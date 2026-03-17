export function PainPointsSection() {
  return (
    <section className="landing-section">
      <div className="container-custom">
        <p className="section-label text-center">The Problem</p>
        <h2 className="landing-heading mb-12 text-center">
          It Happens More Than You Think
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="landing-card border-l-4 border-l-red-500">
            <p className="text-xs font-semibold uppercase tracking-widest text-red-400 mb-4">
              Censorship
            </p>
            <p className="text-dark-text mb-4 leading-relaxed">
              You spent years writing on a platform. Building an audience.
              Documenting your life. One morning, your account is gone. No
              reason. No appeal. No way back.
            </p>
            <p className="font-semibold text-base text-white">
              Years of work. Deleted overnight.
            </p>
          </div>

          <div className="landing-card border-l-4 border-l-amber-500">
            <p className="text-xs font-semibold uppercase tracking-widest text-amber-400 mb-4">
              Lock-in
            </p>
            <p className="text-dark-text mb-4 leading-relaxed">
              You want to read your own posts with a script. Maybe feed them to
              an AI, or back them up locally. The platform says: that requires a
              paid API subscription.
            </p>
            <p className="font-semibold text-base text-white">
              Your content. Behind their paywall.
            </p>
          </div>

          <div className="landing-card border-l-4 border-l-gray-500">
            <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-4">
              Impermanence
            </p>
            <p className="text-dark-text mb-4 leading-relaxed">
              You start to wonder — if something happens to me, can my family
              still read what I wrote? Will any of this still exist in twenty
              years?
            </p>
            <p className="font-semibold text-base text-white">
              Platform accounts aren't built to last a lifetime.
            </p>
          </div>
        </div>

        <p className="text-sm text-dark-muted text-center italic mb-3">
          "These aren't edge cases. They're the design."
        </p>
        <p className="text-center text-dark-text">
          epress is built to make all three impossible.
        </p>
      </div>
    </section>
  )
}

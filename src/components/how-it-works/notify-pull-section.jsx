"use client"

import { NotifyPullAnimation } from "./notify-pull-animation"

export function NotifyPullSection() {
  return (
    <section id="notify-pull" className="landing-section bg-dark-surface/30">
      <div className="container-custom">
        <p className="section-label">Distribution</p>
        <h2 className="landing-heading mb-4">
          Notify-Pull: Efficiency Meets Decentralization
        </h2>
        <p className="landing-subheading mb-12 max-w-3xl">
          Publishing doesn&apos;t crash your server. You broadcast a lightweight
          cryptographic proof. Followers independently pull the full content.
          Cost scales naturally with influence.
        </p>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <NotifyPullAnimation />
          </div>

          <div className="space-y-8">
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                <span className="text-primary font-bold">1</span>
              </div>
              <div>
                <h4 className="font-semibold text-white mb-2">
                  Publisher Broadcasts Proof
                </h4>
                <p className="text-sm text-white/60 leading-relaxed">
                  Alice creates content, generates a cryptographic hash, and
                  signs it with her private key. She broadcasts only the Proof
                  of Source (PoS)—about 200 bytes—to all her followers.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                <span className="text-primary font-bold">2</span>
              </div>
              <div>
                <h4 className="font-semibold text-white mb-2">
                  Followers Verify & Request
                </h4>
                <p className="text-sm text-white/60 leading-relaxed">
                  Each follower node receives the PoS, verifies the signature
                  against Alice&apos;s Ethereum address, and then initiates a
                  pull request for the full content.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                <span className="text-primary font-bold">3</span>
              </div>
              <div>
                <h4 className="font-semibold text-white mb-2">
                  Content Distributes On-Demand
                </h4>
                <p className="text-sm text-white/60 leading-relaxed">
                  Alice serves the content directly to each requesting node. The
                  cost is distributed: popular publishers invest more in
                  bandwidth, but retain full control and monetization.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 p-6 rounded-xl border border-primary/30 bg-gradient-to-br from-primary/10 to-dark-surface/50">
          <p className="text-sm text-white/70 leading-relaxed">
            <strong className="text-primary">Why this matters:</strong> In
            centralized platforms, viral content can bankrupt you with bandwidth
            costs. In epress, viral content creates economic opportunity. You
            control the infrastructure, you capture the value, and your reach is
            limited only by your willingness to serve your audience.
          </p>
        </div>
      </div>
    </section>
  )
}

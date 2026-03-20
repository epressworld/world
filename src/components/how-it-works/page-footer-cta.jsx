"use client"

import { Rocket, Users } from "lucide-react"
import Link from "next/link"

export function PageFooterCTA() {
  return (
    <section className="landing-section bg-dark-surface/40">
      <div className="container-custom">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="landing-heading mb-4">Ready to Run Your Own Node?</h2>
          <p className="landing-subheading mx-auto mb-8">
            Everything you just learned runs on your own server. One command to
            install.
          </p>

          <div className="max-w-lg mx-auto mb-8 text-left rounded-lg overflow-hidden bg-dark-card border border-white/10">
            <div className="px-3 py-2 text-[10px] font-medium bg-dark-input border-b border-white/10 text-dark-muted">
              Terminal
            </div>
            <pre className="p-4 text-[12px] font-mono overflow-x-auto text-dark-primary">
              <span className="text-dark-muted">$ </span>
              <span className="text-dark-muted">
                # Install epress on your server
              </span>
              {"\n\n"}
              <span className="text-dark-muted">$ </span>
              curl -fsSL https://epress.world/install.sh | bash
            </pre>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <Link
              href="/docs"
              className="btn-primary text-base px-7 py-3 inline-flex items-center justify-center"
            >
              <Rocket className="w-5 h-5 mr-2" />
              Deploy Your Node →
            </Link>
            <a
              href="https://t.me/+mZMgNSIVy1MwMmVl"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary text-base px-7 py-3 inline-flex items-center justify-center"
            >
              <Users className="w-5 h-5 mr-2" />
              Join Community
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

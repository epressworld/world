"use client"

import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { CopyableCode } from "@/components/shared/copy-button"

const INSTALL_COMMAND = "curl -fsSL https://epress.world/install.sh | bash"

export function PageFooterCTA() {
  return (
    <section className="landing-section bg-dark-surface/40">
      <div className="container-custom">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="landing-heading mb-4">
            Run Your Own
            <br />
            <span className="text-primary">epress Node</span>
          </h2>
          <p className="landing-subheading mx-auto mb-8">
            Your node, your data, your rules.
          </p>

          <div className="grid md:grid-cols-2 gap-6 text-left">
            <div className="landing-card p-6">
              <p className="text-[10px] uppercase tracking-wider text-white/40 mb-4">
                Ready to Deploy?
              </p>
              <CopyableCode code={INSTALL_COMMAND} className="mb-4" />
              <Link
                href="/docs"
                className="btn-primary w-full text-center inline-flex items-center justify-center"
              >
                Deploy Your Node →
              </Link>
            </div>

            <div className="landing-card p-6">
              <p className="text-[10px] uppercase tracking-wider text-white/40 mb-4">
                Want to Try First?
              </p>
              <p className="text-sm text-dark-muted mb-4 leading-relaxed">
                Browse blog.epress.world — a real epress node running live on
                the network. No account needed.
              </p>
              <a
                href="https://blog.epress.world"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary w-full text-center inline-flex items-center justify-center"
              >
                See a live node →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

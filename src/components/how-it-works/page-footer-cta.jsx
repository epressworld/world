"use client"

import { Check, Copy, Rocket, Users } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

const INSTALL_COMMAND = "curl -fsSL https://epress.world/install.sh | bash"

function TerminalBlock() {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    await navigator.clipboard.writeText(INSTALL_COMMAND)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="max-w-lg mx-auto mb-8 text-left rounded-lg overflow-hidden bg-dark-card border border-white/10">
      <div className="px-3 py-2 flex items-center justify-between bg-dark-input border-b border-white/10">
        <span className="text-[10px] font-medium text-dark-muted">
          Terminal
        </span>
        <button
          type="button"
          onClick={handleCopy}
          className="p-1 rounded transition-colors hover:bg-white/10"
          aria-label="Copy command"
        >
          {copied ? (
            <Check className="w-3.5 h-3.5 text-green-500" />
          ) : (
            <Copy className="w-3.5 h-3.5 text-dark-muted" />
          )}
        </button>
      </div>
      <pre className="p-4 text-[12px] font-mono overflow-x-auto text-dark-primary">
        <span className="text-dark-muted">$ </span>
        <span className="text-dark-muted"># Install epress on your server</span>
        {"\n\n"}
        <span className="text-dark-muted">$ </span>
        {INSTALL_COMMAND}
      </pre>
    </div>
  )
}

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

          <TerminalBlock />

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

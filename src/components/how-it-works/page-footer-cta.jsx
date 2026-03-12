"use client"

import { ArrowRight, Check, Copy, Github } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

const DOCKER_COMMAND =
  "docker run -d -p 8543:8543 -p 8544:8544 -v epress-data:/app/data --name my-epress-node ghcr.io/epressworld/epress"

export function PageFooterCTA() {
  const [copied, setCopied] = useState(false)

  const copyCommand = async () => {
    await navigator.clipboard.writeText(DOCKER_COMMAND)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

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
            One command to join the decentralized network. Your node, your data,
            your rules.
          </p>

          <div className="rounded-xl border border-dark-border bg-dark-bg p-4 mb-6">
            <div className="flex items-center justify-between gap-4">
              <code className="text-sm text-primary font-mono flex-1 overflow-x-auto">
                {DOCKER_COMMAND}
              </code>
              <button
                type="button"
                onClick={copyCommand}
                className="shrink-0 rounded-lg border border-dark-border bg-dark-surface p-2 transition-colors hover:bg-dark-surface/80"
                aria-label="Copy command"
              >
                {copied ? (
                  <Check className="w-4 h-4 text-green-500" />
                ) : (
                  <Copy className="w-4 h-4 text-dark-muted" />
                )}
              </button>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a
              href="https://github.com/epressworld/epress"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-lg px-8 py-4"
            >
              <Github className="w-5 h-5 mr-2" />
              Star on GitHub
            </a>
          </div>

          <div className="flex flex-wrap gap-6 justify-center text-sm">
            <Link
              href="/docs/getting-started"
              className="text-dark-muted hover:text-primary transition-colors inline-flex items-center"
            >
              Full Deployment Guide <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

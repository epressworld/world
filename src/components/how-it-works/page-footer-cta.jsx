"use client"

import { ArrowRight, Github } from "lucide-react"
import Link from "next/link"
import { CopyableCode } from "@/components/shared/copy-button"

const DOCKER_COMMAND =
  "docker run -d -p 8543:8543 -p 8544:8544 -v epress-data:/app/data --restart unless-stopped --name my-epress-node ghcr.io/epressworld/epress:latest"

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
            One command to join the decentralized network. Your node, your data,
            your rules.
          </p>

          <CopyableCode code={DOCKER_COMMAND} className="mb-6" />

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

import { ArrowRight, Github } from "lucide-react"
import Link from "next/link"

export function VisionCTA() {
  return (
    <section className="landing-section bg-dark-surface/40">
      <div className="container-custom">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="landing-heading mb-4">
            Join Us in Building
            <br />
            <span className="text-primary">This Future</span>
          </h2>
          <p className="landing-subheading mx-auto mb-8">
            epress is open source. The future of the internet belongs to those
            who build it.
          </p>

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
              href="/whitepaper"
              className="text-dark-muted hover:text-primary transition-colors inline-flex items-center"
            >
              Read Whitepaper <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
            <Link
              href="/docs/getting-started"
              className="text-dark-muted hover:text-primary transition-colors inline-flex items-center"
            >
              Deploy a Node <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

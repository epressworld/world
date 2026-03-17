import { Github, Rocket } from "lucide-react"
import Link from "next/link"

export function CTASection() {
  return (
    <section className="landing-section">
      <div className="container-custom">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="landing-heading mb-4">
            The Direction is Right.
            <br />
            <span className="text-primary">Help Us Build It.</span>
          </h2>
          <p className="landing-subheading mx-auto mb-10">
            epress is open source and early. Join us.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <Link
              href="/docs"
              className="btn-primary text-base px-7 py-3 inline-flex items-center justify-center"
            >
              <Rocket className="w-5 h-5 mr-2" />
              Deploy Your Node
            </Link>
            <Link
              href="/vision"
              className="btn-secondary text-base px-7 py-3 inline-flex items-center justify-center"
            >
              Read the Vision →
            </Link>
          </div>

          <div className="flex flex-wrap gap-x-6 gap-y-2 justify-center text-sm text-dark-muted">
            <Link
              href="/whitepaper"
              className="hover:text-primary transition-colors"
            >
              Read Whitepaper
            </Link>
            <span className="opacity-30">·</span>
            <a
              href="https://github.com/epressworld/epress"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors inline-flex items-center"
            >
              <Github className="w-3.5 h-3.5 mr-1" />
              Star on GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

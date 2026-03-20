import { ArrowRight, Rocket, Users } from "lucide-react"
import Link from "next/link"

export function CTASection() {
  return (
    <section className="landing-section">
      <div className="container-custom">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="landing-heading mb-4">
            The Direction is Right.
            <br />
            <span className="text-primary">Start Building.</span>
          </h2>
          <p className="landing-subheading mx-auto mb-10">
            epress is open source and early. Your node is the network.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
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

          <div className="flex flex-wrap gap-x-6 gap-y-2 justify-center text-sm text-dark-muted">
            <Link
              href="/whitepaper"
              className="hover:text-primary transition-colors"
            >
              Read Whitepaper
            </Link>
            <span className="opacity-30">·</span>
            <Link
              href="/how-it-works"
              className="hover:text-primary transition-colors"
            >
              How It Works
            </Link>
            <span className="opacity-30">·</span>
            <Link
              href="/features"
              className="hover:text-primary transition-colors"
            >
              See It in Action
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

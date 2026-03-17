import { ArrowRight, Github } from "lucide-react"
import Link from "next/link"

export function VisionCTA() {
  return (
    <section className="landing-section">
      <div className="container-custom">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="landing-heading mb-4">
            The direction is right.
            <br />
            <span className="text-primary">Help us build it.</span>
          </h2>
          <p className="landing-subheading mx-auto mb-8">
            epress is open source and early. If you believe the internet should
            work this way, the best thing you can do right now is star the repo.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://github.com/epressworld/epress"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-lg px-8 py-4"
            >
              <Github className="w-5 h-5 mr-2" />
              Star on GitHub
            </a>
            <Link
              href="/whitepaper"
              className="btn-secondary text-lg px-8 py-4"
            >
              Read the Whitepaper <ArrowRight className="w-4 h-4 ml-2 inline" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

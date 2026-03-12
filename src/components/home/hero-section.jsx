import { Github } from "lucide-react"
import Link from "next/link"
import { HeroNetworkCanvas } from "./hero-network-canvas"
import { HeroNetworkSvg } from "./hero-network-svg"

export function HeroSection() {
  return (
    <section className="relative min-h-[80vh] flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-dark-bg via-transparent to-dark-bg z-10" />
        <div className="relative w-full h-full">
          <HeroNetworkSvg />
          <HeroNetworkCanvas />
        </div>
      </div>

      <div className="container-custom relative z-20 py-20 md:py-32">
        <div className="max-w-2xl">
          <h1 className="landing-heading mb-6">
            Your Digital Home.
            <br />
            <span className="text-primary">For Life.</span>
          </h1>
          <p className="landing-subheading mb-8">
            Not a platform account. A self-hosted node you own, inherit, and
            pass down — like property.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="https://github.com/epressworld/epress"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              <Github className="w-5 h-5 mr-2" />
              Star on GitHub
            </a>
            <Link href="/vision" className="btn-secondary">
              Read the Vision →
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

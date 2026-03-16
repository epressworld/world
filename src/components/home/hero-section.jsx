import { Calendar, Rocket } from "lucide-react"
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
            Your posts, your friends, your memories — today they live on someone
            else's server. epress gives you a home on the internet that no one
            can take away.
          </p>
          <div className="flex flex-wrap gap-4 mb-4">
            <Link href="/docs" className="btn-primary">
              <Rocket className="w-5 h-5 mr-2" />
              Deploy Your Node
            </Link>
            <button type="button" className="btn-secondary">
              <Calendar className="w-5 h-5 mr-2" />
              Request a Demo
            </button>
          </div>
          <p className="text-sm font-mono text-[#888] hover:text-[#aaa] transition-colors">
            See it live →{" "}
            <a
              href="https://blog.epress.world"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#e8a04a] underline hover:text-[#f0b060] transition-colors"
            >
              blog.epress.world
            </a>{" "}
            is a real node on the network
          </p>
        </div>
      </div>
    </section>
  )
}

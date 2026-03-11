import { AgentEra } from "@/components/home/agent-era"
import { CTASection } from "@/components/home/cta-section"
import { EraComparison } from "@/components/home/era-comparison"
import { HeroSection } from "@/components/home/hero-section"
import { LifetimeTimeline } from "@/components/home/lifetime-timeline"
import { SiteFooter } from "@/components/home/site-footer"
import { SiteNav } from "@/components/home/site-nav"
import { SolutionComparison } from "@/components/home/solution-comparison"
import { TechCards } from "@/components/home/tech-cards"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteNav />

      <main className="flex-1">
        <HeroSection />
        <EraComparison />
        <AgentEra />
        <LifetimeTimeline />
        <TechCards />
        <SolutionComparison />
        <CTASection />
      </main>

      <SiteFooter />
    </div>
  )
}

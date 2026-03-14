import { BuiltForComing } from "@/components/home/built-for-coming"
import { CTASection } from "@/components/home/cta-section"
import { HeroSection } from "@/components/home/hero-section"
import { LifetimeTimeline } from "@/components/home/lifetime-timeline"
import { OwnershipComparison } from "@/components/home/ownership-comparison"
import { SiteFooter } from "@/components/home/site-footer"
import { SiteNav } from "@/components/home/site-nav"
import { SolutionComparison } from "@/components/home/solution-comparison"
import { TechCards } from "@/components/home/tech-cards"
import { WhatIsNode } from "@/components/home/what-is-node"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteNav />

      <main className="flex-1">
        <HeroSection />
        <OwnershipComparison />
        <LifetimeTimeline />
        <WhatIsNode />
        <TechCards />
        <BuiltForComing />
        <SolutionComparison />
        <CTASection />
      </main>

      <SiteFooter />
    </div>
  )
}

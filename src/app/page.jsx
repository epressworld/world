import { CTASection } from "@/components/home/cta-section"
import { HeroSection } from "@/components/home/hero-section"
import { LifetimeTimeline } from "@/components/home/lifetime-timeline"
import { PainPointsSection } from "@/components/home/pain-points-section"
import { SiteFooter } from "@/components/home/site-footer"
import { SiteNav } from "@/components/home/site-nav"
import { SolutionComparison } from "@/components/home/solution-comparison"
import { TechCards } from "@/components/home/tech-cards"
import { VisionPreview } from "@/components/home/vision-preview"
import { EcosystemPreview } from "@/components/landing/ecosystem-preview"
import { Homecoming } from "@/components/landing/homecoming"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteNav />

      <main className="flex-1">
        <HeroSection />
        <PainPointsSection />
        <LifetimeTimeline />
        <Homecoming />
        <TechCards />
        <SolutionComparison />
        <VisionPreview />
        <EcosystemPreview />
        <CTASection />
      </main>

      <SiteFooter />
    </div>
  )
}

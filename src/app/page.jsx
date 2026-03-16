import { CTASection } from "@/components/home/cta-section"
import { HeroSection } from "@/components/home/hero-section"
import { LifetimeTimeline } from "@/components/home/lifetime-timeline"
import { PainPointsSection } from "@/components/home/pain-points-section"
import { SiteFooter } from "@/components/home/site-footer"
import { SiteNav } from "@/components/home/site-nav"
import { SolutionComparison } from "@/components/home/solution-comparison"
import { TechCards } from "@/components/home/tech-cards"
import { VisionPreview } from "@/components/home/vision-preview"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteNav />

      <main className="flex-1">
        <HeroSection />
        <PainPointsSection />
        <LifetimeTimeline />
        <TechCards />
        <SolutionComparison />
        <VisionPreview />
        <CTASection />
      </main>

      <SiteFooter />
    </div>
  )
}

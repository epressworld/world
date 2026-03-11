import { SiteFooter } from "@/components/home/site-footer"
import { SiteNav } from "@/components/home/site-nav"
import { AgentEraVision } from "@/components/vision/agent-era"
import { AIContentCrisis } from "@/components/vision/ai-content-crisis"
import { GlobalGraph } from "@/components/vision/global-graph"
import { HomeServer } from "@/components/vision/home-server"
import { InternetOrigins } from "@/components/vision/internet-origins"
import { PlatformWalls } from "@/components/vision/platform-walls"
import { VisionCTA } from "@/components/vision/vision-cta"

export const metadata = {
  title: "Vision | epress",
  description:
    "Our vision for a decentralized internet — home servers, AI agents, and a global thought graph.",
}

export default function VisionPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteNav />

      <main className="flex-1">
        <PlatformWalls />
        <AIContentCrisis />
        <AgentEraVision />
        <InternetOrigins />
        <HomeServer />
        <GlobalGraph />
        <VisionCTA />
      </main>

      <SiteFooter />
    </div>
  )
}

import { SiteFooter } from "@/components/home/site-footer"
import { SiteNav } from "@/components/home/site-nav"
import { AgentEraVision } from "@/components/vision/agent-era"
import { GlobalGraph } from "@/components/vision/global-graph"
import { HomeServer } from "@/components/vision/home-server"
import { InternetPromised } from "@/components/vision/internet-promised"
import { NodesNetwork } from "@/components/vision/nodes-network"
import { PlatformWalls } from "@/components/vision/platform-walls"
import { SovereigntyLoop } from "@/components/vision/sovereignty-loop"
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
        <InternetPromised />
        <PlatformWalls />
        <SovereigntyLoop />
        <NodesNetwork />
        <AgentEraVision />
        <HomeServer />
        <GlobalGraph />
        <VisionCTA />
      </main>

      <SiteFooter />
    </div>
  )
}

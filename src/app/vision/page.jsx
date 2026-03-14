import { SiteFooter } from "@/components/home/site-footer"
import { SiteNav } from "@/components/home/site-nav"
import { AgentEraVision } from "@/components/vision/agent-era"
import { InternetPromised } from "@/components/vision/internet-promised"
import { LifetimeDeep } from "@/components/vision/lifetime-deep"
import { NodesNetwork } from "@/components/vision/nodes-network"
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
        <SovereigntyLoop />
        <LifetimeDeep />
        <NodesNetwork />
        <AgentEraVision />
        <VisionCTA />
      </main>

      <SiteFooter />
    </div>
  )
}

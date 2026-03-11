import { SiteFooter } from "@/components/home/site-footer"
import { SiteNav } from "@/components/home/site-nav"
import { ContentFlowSection } from "@/components/how-it-works/content-flow-section"
import { IdentitySection } from "@/components/how-it-works/identity-section"
import { NodesProtocolSection } from "@/components/how-it-works/nodes-protocol-section"
import { PageFooterCTA } from "@/components/how-it-works/page-footer-cta"
import { ProofOfSourceSection } from "@/components/how-it-works/proof-of-source-section"
import { StickyNav } from "@/components/how-it-works/sticky-nav"
import { TimelineSection } from "@/components/how-it-works/timeline-section"

export const metadata = {
  title: "How It Works | epress",
  description:
    "Understand the core concepts behind epress: decentralized identity, proof of source, the EWP protocol, content distribution, and local timelines.",
}

export default function HowItWorksPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteNav />

      <StickyNav />

      <main className="flex-1">
        <IdentitySection />
        <ProofOfSourceSection />
        <NodesProtocolSection />
        <ContentFlowSection />
        <TimelineSection />
        <PageFooterCTA />
      </main>

      <SiteFooter />
    </div>
  )
}

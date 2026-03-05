import Link from "next/link"

export default function UsagePage() {
  return (
    <div className="space-y-6">
      <article className="rounded-2xl border border-dark-border bg-dark-surface/70 p-6 md:p-8">
        <h1 className="text-3xl font-bold text-white">Usage Guide</h1>
        <p className="mt-3 leading-7 text-gray-300">
          After installation, your epress node becomes your personal publishing
          and social hub. This guide covers the typical first workflow for
          regular users.
        </p>
      </article>

      <article className="rounded-xl border border-dark-border bg-dark-surface/70 p-6">
        <h2 className="text-xl font-semibold text-white">
          How This Relates to Network and Protocol
        </h2>
        <p className="mt-3 text-gray-300 leading-7">
          Daily actions below are performed on epress node software. Signed and
          connected actions are then propagated in epress world through the
          epress world protocol.
        </p>
      </article>

      <article className="rounded-xl border border-dark-border bg-dark-surface/70 p-6">
        <h2 className="text-xl font-semibold text-white">
          1. Complete First-Time Setup
        </h2>
        <p className="mt-2 text-gray-300">
          Open your node at{" "}
          <code className="rounded bg-dark-bg px-1.5 py-0.5 text-primary">
            http://localhost:8543
          </code>{" "}
          and finish the installation wizard.
        </p>
      </article>

      <article className="rounded-xl border border-dark-border bg-dark-surface/70 p-6">
        <h2 className="text-xl font-semibold text-white">
          2. Configure Your Node Identity
        </h2>
        <ul className="mt-3 list-disc space-y-2 pl-6 text-gray-300">
          <li>Set node title, bio, and avatar.</li>
          <li>Connect your Ethereum wallet for identity operations (SIWE).</li>
          <li>Review privacy and interaction settings for your node.</li>
        </ul>
      </article>

      <article className="rounded-xl border border-dark-border bg-dark-surface/70 p-6">
        <h2 className="text-xl font-semibold text-white">
          3. Publish Your First Content
        </h2>
        <ul className="mt-3 list-disc space-y-2 pl-6 text-gray-300">
          <li>Create content with Markdown editor.</li>
          <li>Upload files if needed (images, video, PDF, and others).</li>
          <li>
            Publish locally, then sign content when you want it circulated on
            the network.
          </li>
        </ul>
      </article>

      <article className="rounded-xl border border-dark-border bg-dark-surface/70 p-6">
        <h2 className="text-xl font-semibold text-white">
          4. Connect and Follow Other Nodes
        </h2>
        <p className="mt-2 text-gray-300">
          Follow other epress nodes to establish social links and receive signed
          updates in your timeline.
        </p>
      </article>

      <article className="rounded-xl border border-dark-border bg-dark-surface/70 p-6">
        <h2 className="text-xl font-semibold text-white">
          5. Use RSS for External Apps
        </h2>
        <p className="mt-2 text-gray-300">
          epress node software supports RSS feeds. You can subscribe to content
          in RSS readers and connect timeline feeds to external tools, including
          AI workflows.
        </p>
      </article>

      <div className="flex flex-wrap gap-3">
        <Link href="/docs/faq" className="btn-primary">
          Open FAQ
        </Link>
        <Link href="/whitepaper" className="btn-secondary">
          Read Whitepaper
        </Link>
      </div>
    </div>
  )
}

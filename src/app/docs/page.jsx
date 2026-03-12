import Link from "next/link"

export default function DocsHomePage() {
  return (
    <div className="space-y-8">
      <article className="rounded-2xl border border-dark-border bg-dark-surface/70 p-6 md:p-8">
        <h1 className="text-3xl font-bold text-white">Node Operator Docs</h1>
        <p className="mt-3 max-w-3xl leading-7 text-gray-300">
          This section is for operating{" "}
          <span className="text-white">epress node</span>: install, run,
          upgrade, and troubleshoot your node in production or local
          self-hosting setups.
        </p>
      </article>

      <article className="rounded-xl border border-primary/35 bg-primary/10 p-6">
        <h2 className="text-xl font-semibold text-white">One-Line Install</h2>
        <p className="mt-2 text-sm text-gray-200">
          The fastest way to get started. Runs on any system with Git installed.
        </p>
        <div className="mt-4 overflow-x-auto rounded-lg border border-dark-border bg-dark-bg p-4">
          <code className="text-sm text-primary">
            curl -fsSL https://epress.world/install.sh | bash
          </code>
        </div>
        <p className="mt-3 text-sm text-gray-300">
          Then open{" "}
          <code className="rounded bg-dark-bg px-1.5 py-0.5 text-primary">
            http://localhost:8543
          </code>{" "}
          to complete setup.
        </p>
      </article>

      <article className="rounded-xl border border-dark-border bg-dark-surface/70 p-6">
        <h2 className="text-xl font-semibold text-white">Choose Your Method</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          <div className="rounded-lg border border-primary/30 bg-dark-bg/60 p-4">
            <p className="text-sm font-semibold text-white">One-line Install</p>
            <p className="mt-1 text-xs text-primary">Recommended</p>
            <p className="mt-2 text-sm text-gray-300">
              Auto-installs Node.js, clones repo, builds and starts.
            </p>
            <p className="mt-2 text-xs text-dark-muted">Requires: Git</p>
          </div>
          <div className="rounded-lg border border-dark-border bg-dark-bg/60 p-4">
            <p className="text-sm font-semibold text-white">Docker</p>
            <p className="mt-2 text-sm text-gray-300">
              Run in container with persistent volume.
            </p>
            <p className="mt-2 text-xs text-dark-muted">Requires: Docker</p>
          </div>
          <div className="rounded-lg border border-dark-border bg-dark-bg/60 p-4">
            <p className="text-sm font-semibold text-white">From Source</p>
            <p className="mt-2 text-sm text-gray-300">
              Clone manually for development or customization.
            </p>
            <p className="mt-2 text-xs text-dark-muted">
              Requires: Node.js v18+, Git
            </p>
          </div>
        </div>
        <div className="mt-4">
          <Link href="/docs/installation" className="btn-primary">
            View All Installation Options
          </Link>
        </div>
      </article>

      <div className="grid gap-4 md:grid-cols-2">
        <article className="rounded-xl border border-dark-border bg-dark-surface/70 p-5">
          <h2 className="text-xl font-semibold text-white">
            After Installation
          </h2>
          <p className="mt-2 text-sm text-dark-muted">
            Complete first-time setup, connect your wallet, and publish your
            first content.
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            <Link href="/docs/setup" className="btn-primary">
              First-Time Setup
            </Link>
            <Link href="/docs/usage" className="btn-secondary">
              Usage Guide
            </Link>
          </div>
        </article>

        <article className="rounded-xl border border-dark-border bg-dark-surface/70 p-5">
          <h2 className="text-xl font-semibold text-white">Need Help?</h2>
          <p className="mt-2 text-sm text-dark-muted">
            Common issues and troubleshooting for installation and operation.
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            <Link href="/docs/faq" className="btn-secondary">
              FAQ
            </Link>
            <Link href="/docs/developer" className="btn-secondary">
              Developer Docs
            </Link>
          </div>
        </article>
      </div>
    </div>
  )
}

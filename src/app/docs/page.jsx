import Link from "next/link";

export default function DocsHomePage() {
  return (
    <div className="space-y-8">
      <article className="rounded-2xl border border-dark-border bg-dark-surface/70 p-6 md:p-8">
        <h1 className="text-3xl font-bold text-white">Node Operator Docs</h1>
        <p className="mt-3 max-w-3xl leading-7 text-gray-300">
          This section is for operating <span className="text-white">epress node</span>: install, run, upgrade, and
          troubleshoot your node in production or local self-hosting setups.
        </p>
      </article>

      <article className="rounded-xl border border-primary/35 bg-primary/10 p-6">
        <h2 className="text-xl font-semibold text-white">Fast Path</h2>
        <p className="mt-2 text-sm text-gray-200">
          If you want the shortest route: open Getting Started and run the Docker command.
        </p>
        <div className="mt-4 overflow-x-auto rounded-lg border border-dark-border bg-dark-bg p-4">
          <code className="text-sm text-primary">
            docker run -d -p 8543:8543 -p 8544:8544 -v epress-data:/app/data --name my-epress-node ghcr.io/epressworld/epress
          </code>
        </div>
      </article>

      <div className="grid gap-4 md:grid-cols-2">
        <article className="rounded-xl border border-dark-border bg-dark-surface/70 p-5">
          <h2 className="text-xl font-semibold text-white">Operate Your Node</h2>
          <p className="mt-2 text-sm text-dark-muted">
            Start here for installation, runtime operations, and troubleshooting.
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            <Link href="/docs/getting-started" className="btn-primary">
              Getting Started
            </Link>
            <Link href="/docs/installation" className="btn-secondary">
              Installation
            </Link>
            <Link href="/docs/usage" className="btn-secondary">
              Usage Guide
            </Link>
            <Link href="/docs/faq" className="btn-secondary">
              FAQ
            </Link>
          </div>
        </article>

        <article className="rounded-xl border border-dark-border bg-dark-surface/70 p-5">
          <h2 className="text-xl font-semibold text-white">Need Protocol and Dev Details?</h2>
          <p className="mt-2 text-sm text-dark-muted">
            Architecture concepts, EWP protocol flows, and API references live in Developer Docs.
          </p>
          <div className="mt-4">
            <Link href="/docs/developer" className="btn-primary">
              Open Developer Docs
            </Link>
          </div>
        </article>
      </div>
    </div>
  );
}

import Link from "next/link";

export default function DocsHomePage() {
  return (
    <div className="space-y-8">
      <article className="rounded-2xl border border-dark-border bg-dark-surface/70 p-6 md:p-8">
        <h1 className="text-3xl font-bold text-white">Documentation</h1>
        <p className="mt-3 max-w-3xl leading-7 text-gray-300">
          This docs module is split into two tracks: user docs and developer docs. We are currently focusing on user
          docs for installation, first-run setup, daily usage, and common issues.
        </p>
      </article>

      <div className="grid gap-4 md:grid-cols-2">
        <article className="rounded-xl border border-dark-border bg-dark-surface/70 p-5">
          <h2 className="text-xl font-semibold text-white">User Docs</h2>
          <p className="mt-2 text-sm text-dark-muted">
            Install and run your epress node, then learn daily operations and troubleshooting.
          </p>
          <div className="mt-4">
            <Link href="/docs/getting-started" className="btn-primary">
              Open User Docs
            </Link>
          </div>
        </article>

        <article className="rounded-xl border border-dark-border bg-dark-surface/70 p-5">
          <h2 className="text-xl font-semibold text-white">Developer Docs</h2>
          <p className="mt-2 text-sm text-dark-muted">
            Development environment setup, configuration details, and API documentation.
          </p>
          <p className="mt-4 inline-flex rounded-lg border border-dark-border px-3 py-2 text-sm text-dark-muted">
            Coming next
          </p>
        </article>
      </div>
    </div>
  );
}

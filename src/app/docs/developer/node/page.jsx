import Link from "next/link"

export default function NodeDeveloperPage() {
  return (
    <div className="space-y-6">
      <article className="rounded-2xl border border-dark-border bg-dark-surface/70 p-6 md:p-8">
        <h1 className="text-3xl font-bold text-white">
          epress node Developer Docs
        </h1>
        <p className="mt-3 leading-7 text-gray-300">
          <span className="text-white">epress node</span> is the software
          implementation that participates in
          <span className="text-white"> epress world</span> and executes{" "}
          <span className="text-white">epress world protocol</span>. This track
          focuses on setup, architecture, auth, and API surfaces for developers.
        </p>
        <div className="mt-4 inline-flex rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs text-emerald-300">
          Implementation Scope: epressworld/epress main branch
        </div>
        <div className="mt-4">
          <a
            href="https://github.com/epressworld/epress"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
          >
            Open epress node Repository
          </a>
        </div>
      </article>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Link
          href="/docs/developer/node/setup"
          className="rounded-xl border border-dark-border bg-dark-surface/70 p-5 transition-colors hover:border-primary/40"
        >
          <h2 className="text-lg font-semibold text-white">Dev Setup</h2>
          <p className="mt-2 text-sm text-dark-muted">
            Run from source, local commands, and workflow baseline.
          </p>
        </Link>
        <Link
          href="/docs/developer/node/configuration"
          className="rounded-xl border border-dark-border bg-dark-surface/70 p-5 transition-colors hover:border-primary/40"
        >
          <h2 className="text-lg font-semibold text-white">Configuration</h2>
          <p className="mt-2 text-sm text-dark-muted">
            Infrastructure env vars and app-level settings model.
          </p>
        </Link>
        <Link
          href="/docs/developer/node/architecture"
          className="rounded-xl border border-dark-border bg-dark-surface/70 p-5 transition-colors hover:border-primary/40"
        >
          <h2 className="text-lg font-semibold text-white">Architecture</h2>
          <p className="mt-2 text-sm text-dark-muted">
            Server routes, GraphQL layer, models, and command entrypoints.
          </p>
        </Link>
        <Link
          href="/docs/developer/node/auth-permissions"
          className="rounded-xl border border-dark-border bg-dark-surface/70 p-5 transition-colors hover:border-primary/40"
        >
          <h2 className="text-lg font-semibold text-white">
            Auth and Permissions
          </h2>
          <p className="mt-2 text-sm text-dark-muted">
            SIWE, JWT audiences, and request.cani permission checks.
          </p>
        </Link>
        <Link
          href="/docs/developer/node/api/graphql"
          className="rounded-xl border border-dark-border bg-dark-surface/70 p-5 transition-colors hover:border-primary/40"
        >
          <h2 className="text-lg font-semibold text-white">GraphQL API</h2>
          <p className="mt-2 text-sm text-dark-muted">
            Operations for auth, profile, publication, connection, comment, and
            settings.
          </p>
        </Link>
        <Link
          href="/docs/developer/node/api/rest"
          className="rounded-xl border border-dark-border bg-dark-surface/70 p-5 transition-colors hover:border-primary/40"
        >
          <h2 className="text-lg font-semibold text-white">REST API</h2>
          <p className="mt-2 text-sm text-dark-muted">
            Operational and app endpoints under /api plus /api/graphql
            transport.
          </p>
        </Link>
      </div>
    </div>
  )
}

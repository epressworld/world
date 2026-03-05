import { toEpressSourceUrl } from "@/lib/epress-repo"

const moduleMap = [
  {
    title: "Commands",
    paths: [
      "commands/start.mjs",
      "commands/migrate.mjs",
      "commands/sync.mjs",
      "commands/clean.mjs",
    ],
  },
  {
    title: "Server Boot",
    paths: ["server/index.mjs"],
  },
  {
    title: "GraphQL",
    paths: [
      "server/graphql/index.mjs",
      "server/graphql/queries",
      "server/graphql/mutations",
    ],
  },
  {
    title: "REST Routes",
    paths: ["server/routes/ewp", "server/routes/api"],
  },
  {
    title: "Persistence Models",
    paths: ["server/models"],
  },
  {
    title: "Client App",
    paths: ["client/app", "client/components", "client/lib/apollo"],
  },
]

function ModuleCard({ title, paths }) {
  return (
    <div className="rounded-lg border border-dark-border bg-dark-bg/60 p-4">
      <p className="text-sm font-semibold text-white">{title}</p>
      <ul className="mt-2 space-y-1">
        {paths.map((path) => (
          <li key={`${title}-${path}`}>
            <a
              href={toEpressSourceUrl(path)}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs text-primary hover:underline"
            >
              {path}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function NodeArchitecturePage() {
  return (
    <div className="space-y-6">
      <article className="rounded-2xl border border-dark-border bg-dark-surface/70 p-6 md:p-8">
        <h1 className="text-3xl font-bold text-white">
          epress node Architecture
        </h1>
        <p className="mt-3 leading-7 text-gray-300">
          <span className="text-white">epress node</span> composes command
          entrypoints, a Fastify-based server, GraphQL and REST transport, and
          persistence models.
        </p>
      </article>

      <article className="rounded-xl border border-dark-border bg-dark-surface/70 p-6">
        <h2 className="text-xl font-semibold text-white">Module Map</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          {moduleMap.map((item) => (
            <ModuleCard
              key={item.title}
              title={item.title}
              paths={item.paths}
            />
          ))}
        </div>
      </article>

      <article className="rounded-xl border border-dark-border bg-dark-surface/70 p-6">
        <h2 className="text-xl font-semibold text-white">Runtime Boundaries</h2>
        <ul className="mt-3 list-disc space-y-2 pl-6 text-gray-300">
          <li>
            JWT and request context are attached in server preHandler hooks.
          </li>
          <li>
            GraphQL routes are mounted under /api/graphql via GraphQL plugin
            prefix /api.
          </li>
          <li>
            EWP endpoints are mounted under /ewp and perform their own
            installation and trust checks.
          </li>
          <li>
            App operational endpoints are mounted under /api and support
            installation and node operation workflows.
          </li>
        </ul>
      </article>
    </div>
  )
}

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

function RequestLifecycleSvg() {
  return (
    <svg
      viewBox="0 0 800 500"
      xmlns="http://www.w3.org/2000/svg"
      className="h-auto w-full"
    >
      <rect
        x="16"
        y="16"
        width="768"
        height="468"
        rx="12"
        fill="#0f0f0f"
        stroke="#27272a"
      />

      <text
        x="400"
        y="48"
        textAnchor="middle"
        fill="#fbbf24"
        fontSize="14"
        fontWeight="600"
      >
        Request Lifecycle
      </text>

      <rect
        x="60"
        y="80"
        width="120"
        height="50"
        rx="8"
        fill="#171717"
        stroke="#3f3f46"
      />
      <text x="120" y="110" textAnchor="middle" fill="#fafafa" fontSize="12">
        HTTP Request
      </text>

      <path d="M180 105 L240 105" stroke="#fbbf24" strokeWidth="2" />
      <polygon points="240,105 230,100 230,110" fill="#fbbf24" />

      <rect
        x="240"
        y="80"
        width="120"
        height="50"
        rx="8"
        fill="#171717"
        stroke="#3f3f46"
      />
      <text x="300" y="110" textAnchor="middle" fill="#fafafa" fontSize="12">
        Routes
      </text>

      <path d="M360 105 L420 105" stroke="#fbbf24" strokeWidth="2" />
      <polygon points="420,105 410,100 410,110" fill="#fbbf24" />

      <rect
        x="420"
        y="80"
        width="120"
        height="50"
        rx="8"
        fill="#171717"
        stroke="#3f3f46"
      />
      <text x="480" y="110" textAnchor="middle" fill="#fafafa" fontSize="12">
        Auth Layer
      </text>

      <path d="M540 105 L600 105" stroke="#fbbf24" strokeWidth="2" />
      <polygon points="600,105 590,100 590,110" fill="#fbbf24" />

      <rect
        x="600"
        y="80"
        width="120"
        height="50"
        rx="8"
        fill="#171717"
        stroke="#3f3f46"
      />
      <text x="660" y="110" textAnchor="middle" fill="#fafafa" fontSize="12">
        Business Logic
      </text>

      <path d="M660 130 L660 180" stroke="#fbbf24" strokeWidth="2" />
      <polygon points="660,180 655,170 665,170" fill="#fbbf24" />

      <rect
        x="600"
        y="180"
        width="120"
        height="50"
        rx="8"
        fill="#171717"
        stroke="#3f3f46"
      />
      <text x="660" y="210" textAnchor="middle" fill="#fafafa" fontSize="12">
        Models
      </text>

      <path d="M660 230 L660 280" stroke="#fbbf24" strokeWidth="2" />
      <polygon points="660,280 655,270 665,270" fill="#fbbf24" />

      <rect
        x="600"
        y="280"
        width="120"
        height="50"
        rx="8"
        fill="#171717"
        stroke="#3f3f46"
      />
      <text x="660" y="310" textAnchor="middle" fill="#fafafa" fontSize="12">
        Database
      </text>

      <path
        d="M600 305 L540 305"
        stroke="#60a5fa"
        strokeWidth="2"
        strokeDasharray="4 3"
      />
      <polygon points="540,305 550,300 550,310" fill="#60a5fa" />

      <rect
        x="420"
        y="280"
        width="120"
        height="50"
        rx="8"
        fill="#171717"
        stroke="#60a5fa"
        strokeDasharray="4 3"
      />
      <text x="480" y="310" textAnchor="middle" fill="#60a5fa" fontSize="12">
        Response Prep
      </text>

      <path
        d="M420 305 L360 305"
        stroke="#60a5fa"
        strokeWidth="2"
        strokeDasharray="4 3"
      />
      <polygon points="360,305 370,300 370,310" fill="#60a5fa" />

      <rect
        x="240"
        y="280"
        width="120"
        height="50"
        rx="8"
        fill="#171717"
        stroke="#60a5fa"
        strokeDasharray="4 3"
      />
      <text x="300" y="310" textAnchor="middle" fill="#60a5fa" fontSize="12">
        Serialization
      </text>

      <path
        d="M240 305 L180 305"
        stroke="#60a5fa"
        strokeWidth="2"
        strokeDasharray="4 3"
      />
      <polygon points="180,305 190,300 190,310" fill="#60a5fa" />

      <rect
        x="60"
        y="280"
        width="120"
        height="50"
        rx="8"
        fill="#171717"
        stroke="#60a5fa"
        strokeDasharray="4 3"
      />
      <text x="120" y="310" textAnchor="middle" fill="#60a5fa" fontSize="12">
        HTTP Response
      </text>

      <rect
        x="60"
        y="380"
        width="680"
        height="80"
        rx="8"
        fill="#151515"
        stroke="#3f3f46"
      />
      <text x="400" y="410" textAnchor="middle" fill="#a1a1aa" fontSize="11">
        Auth Layer: JWT verification, SIWE session, request.cani() permission
        checks
      </text>
      <text x="400" y="430" textAnchor="middle" fill="#a1a1aa" fontSize="11">
        Business Logic: GraphQL resolvers, REST handlers, EWP protocol
        operations
      </text>
      <text x="400" y="450" textAnchor="middle" fill="#a1a1aa" fontSize="11">
        Models: Sequelize/Objection ORM, database queries, data validation
      </text>
    </svg>
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
        <h2 className="text-xl font-semibold text-white">Request Lifecycle</h2>
        <p className="mt-2 text-sm text-gray-300">
          Every request flows through a consistent pipeline from HTTP to
          response.
        </p>
        <div className="mt-4 rounded-lg border border-dark-border bg-dark-bg/50 p-3">
          <RequestLifecycleSvg />
        </div>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <div className="rounded-lg border border-dark-border bg-dark-bg/60 p-4">
            <p className="text-sm font-semibold text-white">
              Request Path (Yellow)
            </p>
            <p className="mt-2 text-sm text-gray-300">
              Incoming requests are routed, authenticated, processed by business
              logic, and persisted via models.
            </p>
          </div>
          <div className="rounded-lg border border-dark-border bg-dark-bg/60 p-4">
            <p className="text-sm font-semibold text-white">
              Response Path (Blue)
            </p>
            <p className="mt-2 text-sm text-gray-300">
              Data flows back through serialization and response preparation
              before returning to the client.
            </p>
          </div>
        </div>
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

      <article className="rounded-xl border border-dark-border bg-dark-surface/70 p-6">
        <h2 className="text-xl font-semibold text-white">Key Directories</h2>
        <div className="mt-3 overflow-x-auto">
          <table className="min-w-full text-sm">
            <thead>
              <tr className="border-b border-dark-border text-left text-gray-300">
                <th className="px-3 py-2">Directory</th>
                <th className="px-3 py-2">Purpose</th>
              </tr>
            </thead>
            <tbody className="text-gray-300">
              <tr className="border-b border-dark-border/60">
                <td className="px-3 py-2 font-mono text-primary">/commands</td>
                <td className="px-3 py-2">
                  CLI entrypoints (start, migrate, sync)
                </td>
              </tr>
              <tr className="border-b border-dark-border/60">
                <td className="px-3 py-2 font-mono text-primary">/server</td>
                <td className="px-3 py-2">
                  Fastify server, routes, GraphQL, models
                </td>
              </tr>
              <tr className="border-b border-dark-border/60">
                <td className="px-3 py-2 font-mono text-primary">/client</td>
                <td className="px-3 py-2">Next.js frontend application</td>
              </tr>
              <tr className="border-b border-dark-border/60">
                <td className="px-3 py-2 font-mono text-primary">/data</td>
                <td className="px-3 py-2">
                  Runtime data (database, uploads, logs)
                </td>
              </tr>
              <tr>
                <td className="px-3 py-2 font-mono text-primary">/test</td>
                <td className="px-3 py-2">Test files and fixtures</td>
              </tr>
            </tbody>
          </table>
        </div>
      </article>
    </div>
  )
}

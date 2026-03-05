const infraConfig = [
  ["EPRESS_SERVER_HOST", "0.0.0.0", "Server listening address"],
  ["EPRESS_SERVER_PORT", "8544", "API server port"],
  ["EPRESS_CLIENT_PORT", "8543", "Client server port"],
  [
    "EPRESS_DATABASE_CLIENT",
    "sqlite3",
    "Database client (sqlite3/pg/mysql...)",
  ],
  [
    "EPRESS_DATABASE_CONNECTION",
    "./data/epress.sqlite",
    "Database connection string or sqlite path",
  ],
  [
    "EPRESS_API_URL",
    "http://localhost:8544",
    "Frontend proxy target for API calls",
  ],
  ["EPRESS_DEV_DEBUG", "false", "Enable pretty debug output"],
  ["EPRESS_DEV_LOG_LEVEL", "info", "Log level (error|warn|info|debug)"],
  ["EPRESS_LOG_FILE", "(empty)", "Optional log file path"],
]

export default function NodeConfigurationPage() {
  return (
    <div className="space-y-6">
      <article className="rounded-2xl border border-dark-border bg-dark-surface/70 p-6 md:p-8">
        <h1 className="text-3xl font-bold text-white">
          epress node Configuration
        </h1>
        <p className="mt-3 leading-7 text-gray-300">
          Configuration is split between infrastructure environment variables
          and application settings stored in database.
        </p>
      </article>

      <article className="rounded-xl border border-dark-border bg-dark-surface/70 p-6">
        <h2 className="text-xl font-semibold text-white">
          Infrastructure Variables (.env as Source of Truth)
        </h2>
        <p className="mt-2 text-sm text-dark-muted">
          Implementation reference:{" "}
          <a
            href="https://github.com/epressworld/epress/blob/main/.env"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-primary hover:underline"
          >
            .env
          </a>
        </p>
        <div className="mt-4 overflow-x-auto rounded-lg border border-dark-border bg-dark-bg p-4">
          <table className="min-w-full text-sm">
            <thead>
              <tr className="border-b border-dark-border text-left text-gray-300">
                <th className="px-2 py-2">Key</th>
                <th className="px-2 py-2">Default</th>
                <th className="px-2 py-2">Purpose</th>
              </tr>
            </thead>
            <tbody className="text-gray-300">
              {infraConfig.map((item) => (
                <tr
                  key={item[0]}
                  className="border-b border-dark-border/60 last:border-b-0"
                >
                  <td className="px-2 py-2 font-mono text-primary">
                    {item[0]}
                  </td>
                  <td className="px-2 py-2 font-mono">{item[1]}</td>
                  <td className="px-2 py-2">{item[2]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </article>

      <article className="rounded-xl border border-dark-border bg-dark-surface/70 p-6">
        <h2 className="text-xl font-semibold text-white">
          Recommended Override Strategy
        </h2>
        <p className="mt-2 text-gray-300">
          Keep repository <span className="font-mono">.env</span> unchanged and
          place environment-specific overrides in
          <span className="font-mono"> .env.local</span>. This aligns with the
          project workflow for pulling upstream updates without local config
          conflicts.
        </p>
        <pre className="mt-4 overflow-x-auto rounded-lg border border-dark-border bg-dark-bg p-4 text-primary">
          <code>{`# .env.local example\nEPRESS_SERVER_PORT=18544\nEPRESS_CLIENT_PORT=18543\nEPRESS_API_URL=http://localhost:18544`}</code>
        </pre>
      </article>

      <article className="rounded-xl border border-dark-border bg-dark-surface/70 p-6">
        <h2 className="text-xl font-semibold text-white">
          Application-Level Settings
        </h2>
        <p className="mt-2 text-gray-300">
          Runtime product settings are persisted in the settings table and
          include follow/comment toggles, theme/language, RSS, mail transport,
          and push notification keys.
        </p>
        <ul className="mt-3 list-disc space-y-2 pl-6 text-gray-300">
          <li>Settings are initialized during /api/install seed stage.</li>
          <li>
            GraphQL settings query/mutations expose and update these values.
          </li>
          <li>
            Sensitive fields are conditionally exposed depending on auth
            context.
          </li>
        </ul>
      </article>
    </div>
  )
}

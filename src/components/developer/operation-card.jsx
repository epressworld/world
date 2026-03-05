import { normalizeEpressSourcePath, toEpressSourceUrl } from "@/lib/epress-repo"

function DetailList({ items }) {
  if (!items || items.length === 0) return null
  return (
    <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-gray-300">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  )
}

function CodeBlock({ text }) {
  if (!text) return null
  return (
    <pre className="mt-2 overflow-x-auto rounded-lg border border-dark-border bg-dark-bg p-4 text-xs text-primary">
      <code>{text}</code>
    </pre>
  )
}

export function OperationCard({
  id,
  title,
  method,
  path,
  stability,
  purpose,
  auth,
  params,
  body,
  response,
  errors,
  example,
  source,
}) {
  const sourcePath = normalizeEpressSourcePath(source)
  const sourceUrl = toEpressSourceUrl(source)

  return (
    <article
      id={id}
      className="scroll-mt-24 rounded-xl border border-dark-border bg-dark-surface/70 p-5"
    >
      <div className="flex flex-wrap items-center gap-2">
        {method ? (
          <span className="inline-flex rounded-full border border-primary/40 bg-primary/10 px-2 py-0.5 font-mono text-xs text-primary">
            {method}
          </span>
        ) : null}
        {path ? (
          <span className="font-mono text-xs text-gray-200">{path}</span>
        ) : null}
        {stability ? (
          <span className="inline-flex rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2 py-0.5 text-xs text-emerald-300">
            {stability}
          </span>
        ) : null}
      </div>
      <h3 className="mt-3 text-lg font-semibold text-white">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-gray-300">{purpose}</p>

      <div className="mt-4 grid gap-4 lg:grid-cols-2">
        <div className="rounded-lg border border-dark-border bg-dark-bg/50 p-4">
          <p className="text-xs uppercase tracking-wide text-dark-muted">
            Auth
          </p>
          <p className="mt-1 text-sm text-gray-200">{auth}</p>
          <p className="mt-3 text-xs uppercase tracking-wide text-dark-muted">
            Params
          </p>
          <DetailList items={params} />
        </div>
        <div className="rounded-lg border border-dark-border bg-dark-bg/50 p-4">
          <p className="text-xs uppercase tracking-wide text-dark-muted">
            Body
          </p>
          <DetailList items={body} />
          <p className="mt-3 text-xs uppercase tracking-wide text-dark-muted">
            Response
          </p>
          <DetailList items={response} />
        </div>
      </div>

      {errors && errors.length > 0 ? (
        <div className="mt-4 rounded-lg border border-dark-border bg-dark-bg/50 p-4">
          <p className="text-xs uppercase tracking-wide text-dark-muted">
            Error Codes
          </p>
          <ul className="mt-2 grid gap-1 text-sm text-gray-300 md:grid-cols-2">
            {errors.map((item) => (
              <li key={item}>
                <span className="font-mono text-primary">
                  {item.split(" ")[0]}
                </span>
                {item.includes(" ")
                  ? ` ${item.split(" ").slice(1).join(" ")}`
                  : ""}
              </li>
            ))}
          </ul>
        </div>
      ) : null}

      {example ? (
        <div className="mt-4">
          <p className="text-xs uppercase tracking-wide text-dark-muted">
            Example
          </p>
          <CodeBlock text={example} />
        </div>
      ) : null}

      {sourcePath ? (
        <p className="mt-4 text-xs text-dark-muted">
          Implementation reference:{" "}
          {sourceUrl ? (
            <a
              href={sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-primary hover:underline"
            >
              {sourcePath}
            </a>
          ) : (
            <span className="font-mono text-gray-300">{sourcePath}</span>
          )}
        </p>
      ) : null}
    </article>
  )
}

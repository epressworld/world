import { TypedDataTable } from "@/components/developer/typed-data-table"

function Tag({ children, tone = "primary" }) {
  const classes = {
    primary: "border-primary/40 bg-primary/10 text-primary",
    success: "border-emerald-500/30 bg-emerald-500/10 text-emerald-300",
    muted: "border-dark-border bg-dark-bg/60 text-dark-muted",
  }

  return (
    <span
      className={`inline-flex rounded-full border px-2 py-0.5 text-xs ${classes[tone] || classes.primary}`}
    >
      {children}
    </span>
  )
}

export function Eip712TypeCard({ item }) {
  return (
    <article className="rounded-xl border border-dark-border bg-dark-surface/70 p-5">
      <div className="flex flex-wrap items-center gap-2">
        <Tag>{item.id}</Tag>
        <Tag tone="success">{item.stability}</Tag>
        <Tag tone="muted">{item.scope}</Tag>
      </div>

      <h3 className="mt-3 text-lg font-semibold text-white">
        {item.primaryType}
      </h3>
      <p className="mt-2 text-sm leading-6 text-gray-300">{item.purpose}</p>

      <div className="mt-4 grid gap-3 md:grid-cols-2">
        <div className="rounded-lg border border-dark-border bg-dark-bg/50 p-3">
          <p className="text-xs uppercase tracking-wide text-dark-muted">
            Producer
          </p>
          <p className="mt-1 text-sm text-gray-200">{item.producer}</p>
          <p className="mt-3 text-xs uppercase tracking-wide text-dark-muted">
            Consumer
          </p>
          <p className="mt-1 text-sm text-gray-200">{item.consumer}</p>
        </div>
        <div className="rounded-lg border border-dark-border bg-dark-bg/50 p-3">
          <p className="text-xs uppercase tracking-wide text-dark-muted">
            Protocol Domain
          </p>
          <p className="mt-1 text-sm text-gray-200 font-mono">{`name=${item.domain?.name}, version=${item.domain?.version}, chainId=${item.domain?.chainId}`}</p>
          <p className="mt-3 text-xs uppercase tracking-wide text-dark-muted">
            Attached Routes
          </p>
          <ul className="mt-1 list-disc pl-5 text-sm text-gray-200">
            {item.routes?.map((route) => (
              <li key={`${item.id}-${route}`} className="font-mono text-xs">
                {route}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-4 space-y-3">
        <TypedDataTable title="EIP712Domain Field" fields={item.domainFields} />
        <TypedDataTable
          title={`${item.primaryType} Message Field`}
          fields={item.messageFields}
        />
      </div>
    </article>
  )
}

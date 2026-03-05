export function VerificationChecklist({ item }) {
  return (
    <article className="rounded-xl border border-dark-border bg-dark-surface/70 p-5">
      <div className="flex flex-wrap items-center gap-2">
        <span className="inline-flex rounded-full border border-primary/40 bg-primary/10 px-2 py-0.5 text-xs text-primary">
          {item.id}
        </span>
        <span className="inline-flex rounded-full border border-dark-border bg-dark-bg/60 px-2 py-0.5 text-xs text-dark-muted">
          {item.scope}
        </span>
      </div>

      <p className="mt-3 text-xs uppercase tracking-wide text-dark-muted">
        Target
      </p>
      <p className="mt-1 font-mono text-xs text-gray-200">{item.target}</p>

      <p className="mt-4 text-xs uppercase tracking-wide text-dark-muted">
        Verification Checklist
      </p>
      <ul className="mt-2 space-y-2">
        {item.checks.map((check) => (
          <li
            key={`${item.id}-${check}`}
            className="flex gap-2 rounded-md border border-dark-border bg-dark-bg/50 p-2 text-sm text-gray-300"
          >
            <span className="mt-0.5 inline-block h-4 w-4 rounded-full border border-emerald-500/40 bg-emerald-500/10" />
            <span>{check}</span>
          </li>
        ))}
      </ul>
    </article>
  )
}

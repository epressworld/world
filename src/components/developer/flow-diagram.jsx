export function FlowDiagram({ title, steps }) {
  return (
    <article className="rounded-xl border border-dark-border bg-dark-surface/70 p-5">
      <h3 className="text-lg font-semibold text-white">{title}</h3>
      <div className="mt-4 space-y-3">
        {steps.map((step, index) => (
          <div key={`${title}-${step.title}`} className="flex gap-3">
            <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-primary/40 bg-primary/10 text-xs font-semibold text-primary">
              {index + 1}
            </div>
            <div className="min-w-0 rounded-lg border border-dark-border bg-dark-bg/60 p-3">
              <p className="text-sm font-semibold text-white">{step.title}</p>
              <p className="mt-1 text-sm text-gray-300">{step.detail}</p>
            </div>
          </div>
        ))}
      </div>
    </article>
  );
}

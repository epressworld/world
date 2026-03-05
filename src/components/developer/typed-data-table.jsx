export function TypedDataTable({ title, fields }) {
  if (!fields || fields.length === 0) return null

  return (
    <div className="overflow-x-auto rounded-lg border border-dark-border bg-dark-bg/60">
      <table className="min-w-full text-sm">
        <thead>
          <tr className="border-b border-dark-border text-left text-gray-300">
            <th className="px-3 py-2 font-medium">{title}</th>
            <th className="px-3 py-2 font-medium">Type</th>
            <th className="px-3 py-2 font-medium">Notes</th>
          </tr>
        </thead>
        <tbody>
          {fields.map((field) => (
            <tr
              key={`${title}-${field.name}`}
              className="border-b border-dark-border/60 text-gray-300 last:border-b-0"
            >
              <td className="px-3 py-2 font-mono text-primary">{field.name}</td>
              <td className="px-3 py-2 font-mono text-xs text-gray-200">
                {field.type}
              </td>
              <td className="px-3 py-2 text-xs text-dark-muted">
                {field.note || "-"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

import Link from "next/link";

export function ApiReferenceTable({ items }) {
  return (
    <div className="overflow-x-auto rounded-xl border border-dark-border bg-dark-surface/60">
      <table className="min-w-full text-sm">
        <thead>
          <tr className="border-b border-dark-border text-left text-gray-300">
            <th className="px-4 py-3 font-medium">Method</th>
            <th className="px-4 py-3 font-medium">Path / Operation</th>
            <th className="px-4 py-3 font-medium">Scope</th>
            <th className="px-4 py-3 font-medium">Auth</th>
            <th className="px-4 py-3 font-medium">Summary</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={`${item.method}-${item.path}`} className="border-b border-dark-border/60 text-dark-muted last:border-b-0">
              <td className="px-4 py-3">
                <span className="inline-flex rounded-full border border-primary/40 bg-primary/10 px-2 py-0.5 font-mono text-xs text-primary">
                  {item.method}
                </span>
              </td>
              <td className="px-4 py-3 font-mono text-xs text-gray-200">
                {item.href ? (
                  item.href.startsWith("#") ? (
                    <a href={item.href} className="hover:text-primary">
                      {item.path}
                    </a>
                  ) : (
                    <Link href={item.href} className="hover:text-primary">
                      {item.path}
                    </Link>
                  )
                ) : (
                  item.path
                )}
              </td>
              <td className="px-4 py-3">{item.scope}</td>
              <td className="px-4 py-3">{item.auth}</td>
              <td className="px-4 py-3">{item.summary}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

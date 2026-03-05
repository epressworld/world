import { Eip712TypeCard } from "@/components/developer/eip712-type-card"
import eip712Types from "@/content/developer/eip712-types.json"

export default function TypedDataCatalogPage() {
  const crossNode = eip712Types.filter((item) => item.scope === "Cross-node")
  const nodeLocal = eip712Types.filter((item) => item.scope === "Node-local")

  return (
    <div className="space-y-6">
      <article className="rounded-2xl border border-dark-border bg-dark-surface/70 p-6 md:p-8">
        <h1 className="text-3xl font-bold text-white">Typed Data Catalog</h1>
        <p className="mt-3 leading-7 text-gray-300">
          Field-level catalog for every implemented EIP-712{" "}
          <span className="font-mono">primaryType</span> currently used by
          protocol or node workflows.
        </p>
      </article>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-white">
          Cross-node Protocol Types
        </h2>
        {crossNode.map((item) => (
          <Eip712TypeCard key={`cross-${item.id}`} item={item} />
        ))}
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-white">
          Node-local Runtime Types
        </h2>
        {nodeLocal.map((item) => (
          <Eip712TypeCard key={`local-${item.id}`} item={item} />
        ))}
      </section>
    </div>
  )
}

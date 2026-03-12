import { InstallTabs } from "@/components/docs/install-tabs"

export default function InstallationPage() {
  return (
    <div className="space-y-6">
      <article className="rounded-2xl border border-dark-border bg-dark-surface/70 p-6 md:p-8">
        <h1 className="text-3xl font-bold text-white">Installation</h1>
        <p className="mt-3 leading-7 text-gray-300">
          Choose your preferred installation method. One-line install is
          recommended for most users.
        </p>
      </article>

      <article className="rounded-xl border border-dark-border bg-dark-surface/70 p-6">
        <h2 className="text-xl font-semibold text-white">
          How This Relates to Network and Protocol
        </h2>
        <p className="mt-3 text-gray-300 leading-7">
          Installation here is for epress node software only. After startup,
          your node joins epress world and follows the epress world protocol for
          identity, connection, and content exchange.
        </p>
      </article>

      <article className="rounded-xl border border-dark-border bg-dark-surface/70 p-6">
        <h2 className="text-xl font-semibold text-white">
          Requirements Comparison
        </h2>
        <div className="mt-4 overflow-x-auto">
          <table className="min-w-full text-sm">
            <thead>
              <tr className="border-b border-dark-border text-left text-gray-300">
                <th className="px-3 py-2">Method</th>
                <th className="px-3 py-2">Node.js</th>
                <th className="px-3 py-2">Docker</th>
                <th className="px-3 py-2">Git</th>
                <th className="px-3 py-2">Best For</th>
              </tr>
            </thead>
            <tbody className="text-gray-300">
              <tr className="border-b border-dark-border/60">
                <td className="px-3 py-2 font-medium text-white">One-line</td>
                <td className="px-3 py-2 text-primary">Auto-installed</td>
                <td className="px-3 py-2 text-gray-500">Not needed</td>
                <td className="px-3 py-2">Required</td>
                <td className="px-3 py-2">Most users</td>
              </tr>
              <tr className="border-b border-dark-border/60">
                <td className="px-3 py-2 font-medium text-white">Docker</td>
                <td className="px-3 py-2 text-gray-500">Not needed</td>
                <td className="px-3 py-2">Required</td>
                <td className="px-3 py-2 text-gray-500">Not needed</td>
                <td className="px-3 py-2">Container users</td>
              </tr>
              <tr>
                <td className="px-3 py-2 font-medium text-white">Source</td>
                <td className="px-3 py-2">Required</td>
                <td className="px-3 py-2 text-gray-500">Not needed</td>
                <td className="px-3 py-2">Required</td>
                <td className="px-3 py-2">Developers</td>
              </tr>
            </tbody>
          </table>
        </div>
      </article>

      <article className="rounded-xl border border-dark-border bg-dark-surface/70 p-6">
        <h2 className="text-xl font-semibold text-white">Install Methods</h2>
        <div className="mt-4">
          <InstallTabs />
        </div>
      </article>

      <article className="rounded-xl border border-dark-border bg-dark-surface/70 p-6">
        <h2 className="text-xl font-semibold text-white">Default Ports</h2>
        <div className="mt-3 overflow-x-auto">
          <table className="min-w-full text-sm">
            <thead>
              <tr className="border-b border-dark-border text-left text-gray-300">
                <th className="px-2 py-2">Port</th>
                <th className="px-2 py-2">Purpose</th>
              </tr>
            </thead>
            <tbody className="text-dark-muted">
              <tr className="border-b border-dark-border/60">
                <td className="px-2 py-2 font-mono text-primary">8543</td>
                <td className="px-2 py-2">Web interface</td>
              </tr>
              <tr>
                <td className="px-2 py-2 font-mono text-primary">8544</td>
                <td className="px-2 py-2">API service</td>
              </tr>
            </tbody>
          </table>
        </div>
      </article>
    </div>
  )
}

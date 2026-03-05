export default function NodeSetupPage() {
  return (
    <div className="space-y-6">
      <article className="rounded-2xl border border-dark-border bg-dark-surface/70 p-6 md:p-8">
        <h1 className="text-3xl font-bold text-white">
          epress node Development Setup
        </h1>
        <p className="mt-3 leading-7 text-gray-300">
          Local setup for developing and validating{" "}
          <span className="text-white">epress node</span> implementation.
        </p>
      </article>

      <article className="rounded-xl border border-dark-border bg-dark-surface/70 p-6">
        <h2 className="text-xl font-semibold text-white">Prerequisites</h2>
        <ul className="mt-3 list-disc space-y-2 pl-6 text-gray-300">
          <li>Node.js 20+</li>
          <li>npm</li>
          <li>Git</li>
        </ul>
      </article>

      <article className="rounded-xl border border-dark-border bg-dark-surface/70 p-6">
        <h2 className="text-xl font-semibold text-white">Bootstrap</h2>
        <pre className="mt-4 overflow-x-auto rounded-lg border border-dark-border bg-dark-bg p-4 text-primary">
          <code>{`git clone https://github.com/epressworld/epress.git\ncd epress\nnpm install`}</code>
        </pre>
      </article>

      <article className="rounded-xl border border-dark-border bg-dark-surface/70 p-6">
        <h2 className="text-xl font-semibold text-white">Core Commands</h2>
        <div className="mt-3 overflow-x-auto rounded-lg border border-dark-border bg-dark-bg p-4">
          <table className="min-w-full text-sm">
            <thead>
              <tr className="border-b border-dark-border text-left text-gray-300">
                <th className="px-2 py-2">Command</th>
                <th className="px-2 py-2">Purpose</th>
              </tr>
            </thead>
            <tbody className="text-gray-300">
              <tr className="border-b border-dark-border/60">
                <td className="px-2 py-2 font-mono text-primary">
                  npm run dev
                </td>
                <td className="px-2 py-2">Run development server</td>
              </tr>
              <tr className="border-b border-dark-border/60">
                <td className="px-2 py-2 font-mono text-primary">
                  npm run build
                </td>
                <td className="px-2 py-2">Build client app</td>
              </tr>
              <tr className="border-b border-dark-border/60">
                <td className="px-2 py-2 font-mono text-primary">
                  npm run start
                </td>
                <td className="px-2 py-2">Run production server</td>
              </tr>
              <tr className="border-b border-dark-border/60">
                <td className="px-2 py-2 font-mono text-primary">
                  npm run migrate
                </td>
                <td className="px-2 py-2">Apply database migrations</td>
              </tr>
              <tr>
                <td className="px-2 py-2 font-mono text-primary">npm test</td>
                <td className="px-2 py-2">Run Ava test suite</td>
              </tr>
            </tbody>
          </table>
        </div>
      </article>
    </div>
  )
}

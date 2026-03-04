import Link from "next/link";

export default function GettingStartedPage() {
  return (
    <div className="space-y-6">
      <article className="rounded-2xl border border-dark-border bg-dark-surface/70 p-6 md:p-8">
        <h1 className="text-3xl font-bold text-white">Getting Started</h1>
        <p className="mt-3 leading-7 text-gray-300">
          The fastest way to launch epress node software is Docker. Run one command, open your browser, and complete
          the installation wizard.
        </p>
      </article>

      <article className="rounded-xl border border-dark-border bg-dark-surface/70 p-6">
        <h2 className="text-xl font-semibold text-white">How This Relates to Network and Protocol</h2>
        <p className="mt-3 text-gray-300 leading-7">
          In this guide you operate epress node software. Once configured, your node participates in epress world and
          exchanges data with other nodes through the epress world protocol.
        </p>
      </article>

      <article className="rounded-xl border border-dark-border bg-dark-surface/70 p-6">
        <h2 className="text-xl font-semibold text-white">Quick Start (Docker)</h2>
        <p className="mt-2 text-sm text-dark-muted">Recommended for regular users.</p>
        <div className="mt-4 overflow-x-auto rounded-lg border border-dark-border bg-dark-bg p-4">
          <code className="text-sm text-primary">docker run -d -p 8543:8543 -p 8544:8544 -v epress-data:/app/data --name my-epress-node ghcr.io/epressworld/epress</code>
        </div>
      </article>

      <article className="rounded-xl border border-dark-border bg-dark-surface/70 p-6">
        <h2 className="text-xl font-semibold text-white">Complete Setup in Browser</h2>
        <ol className="mt-3 list-decimal space-y-2 pl-6 text-gray-300">
          <li>Open <code className="rounded bg-dark-bg px-1.5 py-0.5 text-primary">http://localhost:8543</code>.</li>
          <li>You will be redirected to the installation wizard automatically.</li>
          <li>Follow the wizard to initialize your node and finish first-time setup.</li>
        </ol>
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

      <div className="flex flex-wrap gap-3">
        <Link href="/docs/installation" className="btn-secondary">More Installation Options</Link>
        <Link href="/docs/usage" className="btn-primary">Continue to Usage Guide</Link>
      </div>
    </div>
  );
}

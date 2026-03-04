export default function InstallationPage() {
  return (
    <div className="space-y-6">
      <article className="rounded-2xl border border-dark-border bg-dark-surface/70 p-6 md:p-8">
        <h1 className="text-3xl font-bold text-white">Installation</h1>
        <p className="mt-3 leading-7 text-gray-300">
          epress node software supports two installation methods. Docker is recommended for standard self-hosting.
          Running from source is available for advanced users.
        </p>
      </article>

      <article className="rounded-xl border border-dark-border bg-dark-surface/70 p-6">
        <h2 className="text-xl font-semibold text-white">How This Relates to Network and Protocol</h2>
        <p className="mt-3 text-gray-300 leading-7">
          Installation here is for epress node software only. After startup, your node joins epress world and follows
          the epress world protocol for identity, connection, and content exchange.
        </p>
      </article>

      <article className="rounded-xl border border-primary/35 bg-primary/10 p-6">
        <h2 className="text-xl font-semibold text-white">Option 1: Docker (Recommended)</h2>
        <div className="mt-4 space-y-3 text-sm text-gray-200">
          <p>Start container:</p>
          <pre className="overflow-x-auto rounded-lg border border-dark-border bg-dark-bg p-4 text-primary">
            <code>docker run -d -p 8543:8543 -p 8544:8544 -v epress-data:/app/data --name my-epress-node ghcr.io/epressworld/epress</code>
          </pre>
          <p>View logs:</p>
          <pre className="overflow-x-auto rounded-lg border border-dark-border bg-dark-bg p-4 text-primary">
            <code>docker logs -f my-epress-node</code>
          </pre>
          <p>Stop / start:</p>
          <pre className="overflow-x-auto rounded-lg border border-dark-border bg-dark-bg p-4 text-primary">
            <code>{`docker stop my-epress-node\ndocker start my-epress-node`}</code>
          </pre>
        </div>
      </article>

      <article className="rounded-xl border border-dark-border bg-dark-surface/70 p-6">
        <h2 className="text-xl font-semibold text-white">Option 2: Run from Source</h2>
        <p className="mt-2 text-sm text-dark-muted">Useful if you need custom changes or local source control.</p>
        <pre className="mt-4 overflow-x-auto rounded-lg border border-dark-border bg-dark-bg p-4 text-primary">
          <code>{`git clone https://github.com/epressworld/epress.git\ncd epress\nnpm install\nnpm run build\nnpm run start`}</code>
        </pre>
      </article>

      <article className="rounded-xl border border-dark-border bg-dark-surface/70 p-6">
        <h2 className="text-xl font-semibold text-white">Upgrade Docker Deployment</h2>
        <pre className="mt-4 overflow-x-auto rounded-lg border border-dark-border bg-dark-bg p-4 text-primary">
          <code>{`docker pull ghcr.io/epressworld/epress\ndocker stop my-epress-node\ndocker rm my-epress-node\ndocker run -d -p 8543:8543 -p 8544:8544 -v epress-data:/app/data --name my-epress-node ghcr.io/epressworld/epress`}</code>
        </pre>
      </article>
    </div>
  );
}

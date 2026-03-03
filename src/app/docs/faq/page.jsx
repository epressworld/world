export default function FaqPage() {
  return (
    <div className="space-y-6">
      <article className="rounded-2xl border border-dark-border bg-dark-surface/70 p-6 md:p-8">
        <h1 className="text-3xl font-bold text-white">FAQ</h1>
        <p className="mt-3 leading-7 text-gray-300">
          Common installation and operation questions for regular users.
        </p>
      </article>

      <article className="rounded-xl border border-dark-border bg-dark-surface/70 p-6">
        <h2 className="text-lg font-semibold text-white">I cannot open http://localhost:8543. What should I check?</h2>
        <ul className="mt-3 list-disc space-y-2 pl-6 text-gray-300">
          <li>Confirm container is running: <code className="rounded bg-dark-bg px-1.5 py-0.5 text-primary">docker ps</code>.</li>
          <li>Check container logs: <code className="rounded bg-dark-bg px-1.5 py-0.5 text-primary">docker logs -f my-epress-node</code>.</li>
          <li>Verify port 8543 is not occupied by another service.</li>
        </ul>
      </article>

      <article className="rounded-xl border border-dark-border bg-dark-surface/70 p-6">
        <h2 className="text-lg font-semibold text-white">What is stored in epress-data?</h2>
        <p className="mt-3 text-gray-300">
          The Docker volume <code className="rounded bg-dark-bg px-1.5 py-0.5 text-primary">epress-data</code> stores your node data
          persistently. Recreating the container will not erase data as long as the same volume is used.
        </p>
      </article>

      <article className="rounded-xl border border-dark-border bg-dark-surface/70 p-6">
        <h2 className="text-lg font-semibold text-white">How do I restart my node?</h2>
        <pre className="mt-4 overflow-x-auto rounded-lg border border-dark-border bg-dark-bg p-4 text-primary">
          <code>{`docker stop my-epress-node\ndocker start my-epress-node`}</code>
        </pre>
      </article>

      <article className="rounded-xl border border-dark-border bg-dark-surface/70 p-6">
        <h2 className="text-lg font-semibold text-white">How do I update to the latest image?</h2>
        <pre className="mt-4 overflow-x-auto rounded-lg border border-dark-border bg-dark-bg p-4 text-primary">
          <code>{`docker pull ghcr.io/epressworld/epress\ndocker stop my-epress-node\ndocker rm my-epress-node\ndocker run -d -p 8543:8543 -p 8544:8544 -v epress-data:/app/data --name my-epress-node ghcr.io/epressworld/epress`}</code>
        </pre>
      </article>

      <article className="rounded-xl border border-dark-border bg-dark-surface/70 p-6">
        <h2 className="text-lg font-semibold text-white">Can I change default ports?</h2>
        <p className="mt-3 text-gray-300">
          Yes. Adjust the <code className="rounded bg-dark-bg px-1.5 py-0.5 text-primary">-p</code> mappings in your Docker command.
          Keep the internal ports unchanged and only change the host-side ports if needed.
        </p>
      </article>
    </div>
  );
}

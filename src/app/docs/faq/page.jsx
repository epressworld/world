export default function FaqPage() {
  return (
    <div className="space-y-6">
      <article className="rounded-2xl border border-dark-border bg-dark-surface/70 p-6 md:p-8">
        <h1 className="text-3xl font-bold text-white">FAQ</h1>
        <p className="mt-3 leading-7 text-gray-300">
          Common questions about installation, operation, identity, and usage.
        </p>
      </article>

      <article className="rounded-xl border border-dark-border bg-dark-surface/70 p-6">
        <h2 className="text-lg font-semibold text-white">Installation</h2>
      </article>

      <article className="rounded-xl border border-dark-border bg-dark-surface/70 p-6">
        <h2 className="text-lg font-semibold text-white">
          The curl install failed. What should I check?
        </h2>
        <ul className="mt-3 list-disc space-y-2 pl-6 text-gray-300">
          <li>
            Ensure you have Git installed:{" "}
            <code className="rounded bg-dark-bg px-1.5 py-0.5 text-primary">
              git --version
            </code>
          </li>
          <li>Check your internet connection</li>
          <li>
            Try running with verbose output:{" "}
            <code className="rounded bg-dark-bg px-1.5 py-0.5 text-primary">
              curl -fsSL https://epress.world/install.sh | bash -x
            </code>
          </li>
          <li>If nvm installation fails, install Node.js manually first</li>
        </ul>
      </article>

      <article className="rounded-xl border border-dark-border bg-dark-surface/70 p-6">
        <h2 className="text-lg font-semibold text-white">
          Port 8543 is already in use. How do I change it?
        </h2>
        <p className="mt-3 text-gray-300">
          For curl installs, edit the environment configuration:
        </p>
        <pre className="mt-2 overflow-x-auto rounded-lg border border-dark-border bg-dark-bg p-4 text-primary text-sm">
          <code>{`cd ~/epress\necho "PORT=8545" >> .env.local\nnpm run stop && npm run start`}</code>
        </pre>
        <p className="mt-2 text-gray-300">
          For Docker, adjust the{" "}
          <code className="rounded bg-dark-bg px-1.5 py-0.5 text-primary">
            -p
          </code>{" "}
          mapping:{" "}
          <code className="rounded bg-dark-bg px-1.5 py-0.5 text-primary">
            -p 8545:8543
          </code>
        </p>
      </article>

      <article className="rounded-xl border border-dark-border bg-dark-surface/70 p-6">
        <h2 className="text-lg font-semibold text-white">
          Where is my data stored?
        </h2>
        <ul className="mt-3 list-disc space-y-2 pl-6 text-gray-300">
          <li>
            <span className="text-white">Curl install:</span> ~/epress/data/
          </li>
          <li>
            <span className="text-white">Docker:</span> In the epress-data
            volume
          </li>
        </ul>
        <p className="mt-2 text-sm text-dark-muted">
          Back up this directory regularly to preserve your content.
        </p>
      </article>

      <article className="rounded-xl border border-dark-border bg-dark-surface/70 p-6">
        <h2 className="text-lg font-semibold text-white">
          How do I back up my node?
        </h2>
        <ul className="mt-3 list-disc space-y-2 pl-6 text-gray-300">
          <li>
            <span className="text-white">Curl install:</span> Copy the
            ~/epress/data/ directory
          </li>
          <li>
            <span className="text-white">Docker:</span> Use{" "}
            <code className="rounded bg-dark-bg px-1.5 py-0.5 text-primary">
              docker cp my-epress-node:/app/data ./backup
            </code>
          </li>
        </ul>
      </article>

      <article className="rounded-xl border border-dark-border bg-dark-surface/70 p-6">
        <h2 className="text-lg font-semibold text-white">Identity & Wallet</h2>
      </article>

      <article className="rounded-xl border border-dark-border bg-dark-surface/70 p-6">
        <h2 className="text-lg font-semibold text-white">
          Why do I need an Ethereum wallet?
        </h2>
        <p className="mt-3 text-gray-300">
          Your wallet provides cryptographic identity that works across all
          epress nodes:
        </p>
        <ul className="mt-2 list-disc space-y-2 pl-6 text-gray-300">
          <li>Your address is your unique identifier</li>
          <li>Signing content proves you authored it</li>
          <li>Other nodes verify signatures to confirm authenticity</li>
          <li>No central identity server required</li>
        </ul>
      </article>

      <article className="rounded-xl border border-dark-border bg-dark-surface/70 p-6">
        <h2 className="text-lg font-semibold text-white">
          Can I use wallets other than MetaMask?
        </h2>
        <p className="mt-3 text-gray-300">
          Yes. epress supports any wallet that implements WalletConnect or
          browser wallet injection:
        </p>
        <ul className="mt-2 list-disc space-y-2 pl-6 text-gray-300">
          <li>Rainbow</li>
          <li>Coinbase Wallet</li>
          <li>Trust Wallet</li>
          <li>Brave Wallet</li>
          <li>Any WalletConnect-compatible wallet</li>
        </ul>
      </article>

      <article className="rounded-xl border border-dark-border bg-dark-surface/70 p-6">
        <h2 className="text-lg font-semibold text-white">
          Are there gas fees for connecting my wallet?
        </h2>
        <p className="mt-3 text-gray-300">
          <span className="text-white">No.</span> Connecting your wallet and
          signing content are off-chain operations. You only sign messages, not
          blockchain transactions. No ETH is spent.
        </p>
      </article>

      <article className="rounded-xl border border-dark-border bg-dark-surface/70 p-6">
        <h2 className="text-lg font-semibold text-white">
          Is my wallet address visible to others?
        </h2>
        <p className="mt-3 text-gray-300">
          Yes, your address is public and serves as your identity. However, your
          private key and seed phrase never leave your device. They are only
          used to sign messages locally.
        </p>
      </article>

      <article className="rounded-xl border border-dark-border bg-dark-surface/70 p-6">
        <h2 className="text-lg font-semibold text-white">
          Can I move my identity to a different wallet?
        </h2>
        <p className="mt-3 text-gray-300">
          Your identity is tied to your wallet address. To use a different
          address, you would need to re-establish follow relationships from the
          new address. Your content remains on your node regardless of wallet.
        </p>
      </article>

      <article className="rounded-xl border border-dark-border bg-dark-surface/70 p-6">
        <h2 className="text-lg font-semibold text-white">Usage</h2>
      </article>

      <article className="rounded-xl border border-dark-border bg-dark-surface/70 p-6">
        <h2 className="text-lg font-semibold text-white">
          What is the difference between local and signed publish?
        </h2>
        <ul className="mt-3 list-disc space-y-2 pl-6 text-gray-300">
          <li>
            <span className="text-white">Local publish:</span> Content stored
            only on your node. Good for drafts and private content.
          </li>
          <li>
            <span className="text-white">Signed publish:</span> Content is
            cryptographically signed and can be verified by other nodes.
            Required for content to appear in followers timelines.
          </li>
        </ul>
      </article>

      <article className="rounded-xl border border-dark-border bg-dark-surface/70 p-6">
        <h2 className="text-lg font-semibold text-white">
          Why is my timeline empty?
        </h2>
        <p className="mt-3 text-gray-300">
          Your timeline shows signed content from nodes you follow. If empty:
        </p>
        <ul className="mt-2 list-disc space-y-2 pl-6 text-gray-300">
          <li>Follow some nodes to receive their content</li>
          <li>Wait for followed nodes to publish signed content</li>
          <li>
            Check that your node can reach other nodes (network connectivity)
          </li>
        </ul>
      </article>

      <article className="rounded-xl border border-dark-border bg-dark-surface/70 p-6">
        <h2 className="text-lg font-semibold text-white">
          How do I make my node publicly accessible?
        </h2>
        <ul className="mt-3 list-disc space-y-2 pl-6 text-gray-300">
          <li>Set up a domain with DNS pointing to your server</li>
          <li>Configure your router/firewall to forward port 8543</li>
          <li>Set your node URL in settings to your public domain</li>
          <li>Consider using a reverse proxy (nginx, Caddy) with HTTPS</li>
        </ul>
      </article>

      <article className="rounded-xl border border-dark-border bg-dark-surface/70 p-6">
        <h2 className="text-lg font-semibold text-white">Content</h2>
      </article>

      <article className="rounded-xl border border-dark-border bg-dark-surface/70 p-6">
        <h2 className="text-lg font-semibold text-white">
          Can I delete content after publishing?
        </h2>
        <p className="mt-3 text-gray-300">
          Yes, you can delete content from your node. However, content that has
          been replicated to other nodes may persist there. Signed content
          includes timestamps, so deleted content cannot be republished with the
          same signature.
        </p>
      </article>

      <article className="rounded-xl border border-dark-border bg-dark-surface/70 p-6">
        <h2 className="text-lg font-semibold text-white">
          How does epress prevent content forgery?
        </h2>
        <p className="mt-3 text-gray-300">Every signed publication includes:</p>
        <ul className="mt-2 list-disc space-y-2 pl-6 text-gray-300">
          <li>A content hash that uniquely identifies the content</li>
          <li>A timestamp to establish publication order</li>
          <li>An EIP-712 signature from the author wallet</li>
        </ul>
        <p className="mt-2 text-gray-300">
          Other nodes verify this signature before accepting content. Without
          the private key, content cannot be forged.
        </p>
      </article>

      <article className="rounded-xl border border-dark-border bg-dark-surface/70 p-6">
        <h2 className="text-lg font-semibold text-white">
          Does epress support private messages?
        </h2>
        <p className="mt-3 text-gray-300">
          Currently, epress focuses on public content. Private messaging is not
          yet implemented but may be added in future versions.
        </p>
      </article>

      <article className="rounded-xl border border-dark-border bg-dark-surface/70 p-6">
        <h2 className="text-lg font-semibold text-white">
          What is the difference between epress world, epress world protocol,
          and epress node?
        </h2>
        <ul className="mt-3 list-disc space-y-2 pl-6 text-gray-300">
          <li>
            <span className="text-white">epress world</span> is the
            decentralized social network as a whole.
          </li>
          <li>
            <span className="text-white">epress world protocol</span> is the
            interoperability protocol used by nodes.
          </li>
          <li>
            <span className="text-white">epress node</span> is the node software
            you install and operate.
          </li>
        </ul>
      </article>

      <article className="rounded-xl border border-dark-border bg-dark-surface/70 p-6">
        <h2 className="text-lg font-semibold text-white">
          I cannot open http://localhost:8543. What should I check?
        </h2>
        <ul className="mt-3 list-disc space-y-2 pl-6 text-gray-300">
          <li>
            <span className="text-white">Curl install:</span> Run{" "}
            <code className="rounded bg-dark-bg px-1.5 py-0.5 text-primary">
              cd ~/epress && npm run status
            </code>
          </li>
          <li>
            <span className="text-white">Docker:</span> Run{" "}
            <code className="rounded bg-dark-bg px-1.5 py-0.5 text-primary">
              docker ps
            </code>{" "}
            to confirm container is running
          </li>
          <li>
            Check logs for errors:{" "}
            <code className="rounded bg-dark-bg px-1.5 py-0.5 text-primary">
              docker logs -f my-epress-node
            </code>
          </li>
          <li>Verify port 8543 is not occupied by another service</li>
        </ul>
      </article>

      <article className="rounded-xl border border-dark-border bg-dark-surface/70 p-6">
        <h2 className="text-lg font-semibold text-white">
          How do I restart my node?
        </h2>
        <p className="mt-2 text-sm text-gray-300">
          <span className="text-white">Curl install:</span>
        </p>
        <pre className="mt-2 overflow-x-auto rounded-lg border border-dark-border bg-dark-bg p-4 text-primary">
          <code>cd ~/epress && npm run stop && npm run start</code>
        </pre>
        <p className="mt-3 text-sm text-gray-300">
          <span className="text-white">Docker:</span>
        </p>
        <pre className="mt-2 overflow-x-auto rounded-lg border border-dark-border bg-dark-bg p-4 text-primary">
          <code>{`docker stop my-epress-node\ndocker start my-epress-node`}</code>
        </pre>
      </article>

      <article className="rounded-xl border border-dark-border bg-dark-surface/70 p-6">
        <h2 className="text-lg font-semibold text-white">
          How do I update to the latest version?
        </h2>
        <p className="mt-2 text-sm text-gray-300">
          <span className="text-white">Curl install:</span>
        </p>
        <pre className="mt-2 overflow-x-auto rounded-lg border border-dark-border bg-dark-bg p-4 text-primary">
          <code>
            cd ~/epress && git pull && npm install && npm run build && npm run
            stop && npm run start
          </code>
        </pre>
        <p className="mt-3 text-sm text-gray-300">
          <span className="text-white">Docker:</span>
        </p>
        <pre className="mt-2 overflow-x-auto rounded-lg border border-dark-border bg-dark-bg p-4 text-primary">
          <code>{`docker pull ghcr.io/epressworld/epress\ndocker stop my-epress-node\ndocker rm my-epress-node\ndocker run -d -p 8543:8543 -p 8544:8544 -v epress-data:/app/data --name my-epress-node ghcr.io/epressworld/epress`}</code>
        </pre>
      </article>

      <article className="rounded-xl border border-dark-border bg-dark-surface/70 p-6">
        <h2 className="text-lg font-semibold text-white">
          Can I change default ports?
        </h2>
        <p className="mt-3 text-gray-300">
          Yes. Adjust the port mappings or environment variables. Keep internal
          ports unchanged and only modify the host-side ports.
        </p>
      </article>
    </div>
  )
}

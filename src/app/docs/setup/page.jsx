import Link from "next/link"

export default function SetupPage() {
  return (
    <div className="space-y-6">
      <article className="rounded-2xl border border-dark-border bg-dark-surface/70 p-6 md:p-8">
        <h1 className="text-3xl font-bold text-white">First-Time Setup</h1>
        <p className="mt-3 leading-7 text-gray-300">
          After installing epress node, complete these steps to configure your
          node and start publishing. Open{" "}
          <code className="rounded bg-dark-bg px-1.5 py-0.5 text-primary">
            http://localhost:8543
          </code>{" "}
          in your browser to begin.
        </p>
      </article>

      <article className="rounded-xl border border-dark-border bg-dark-surface/70 p-6">
        <div className="flex items-start gap-4">
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-dark-bg">
            1
          </span>
          <div className="flex-1">
            <h2 className="text-xl font-semibold text-white">
              Installation Wizard
            </h2>
            <p className="mt-2 text-gray-300">
              When you first open your node, you will be redirected to the
              installation wizard automatically.
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-6 text-gray-300">
              <li>Choose your database (SQLite is simplest for local use)</li>
              <li>Set your node URL (for public access, use your domain)</li>
              <li>Create your admin account</li>
            </ul>
          </div>
        </div>
      </article>

      <article className="rounded-xl border border-primary/35 bg-primary/10 p-6">
        <div className="flex items-start gap-4">
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-dark-bg">
            2
          </span>
          <div className="flex-1">
            <h2 className="text-xl font-semibold text-white">
              Connect Ethereum Wallet
            </h2>
            <p className="mt-2 text-gray-300">
              Your Ethereum wallet serves as your cryptographic identity on
              epress world. This enables signed publishing and cross-node
              verification.
            </p>
          </div>
        </div>

        <div className="mt-6 space-y-4 pl-12">
          <div className="rounded-lg border border-dark-border bg-dark-bg/50 p-4">
            <h3 className="text-lg font-semibold text-white">
              Why Wallet Required
            </h3>
            <ul className="mt-2 list-disc space-y-1 pl-6 text-sm text-gray-300">
              <li>
                <span className="text-white">Identity:</span> Your wallet
                address uniquely identifies you across all epress nodes
              </li>
              <li>
                <span className="text-white">Signing:</span> Sign content with
                your private key to prove authorship
              </li>
              <li>
                <span className="text-white">Verification:</span> Other nodes
                verify your signature to confirm authenticity
              </li>
            </ul>
          </div>

          <div className="rounded-lg border border-dark-border bg-dark-bg/50 p-4">
            <h3 className="text-lg font-semibold text-white">
              MetaMask Setup Guide
            </h3>
            <ol className="mt-2 list-decimal space-y-2 pl-6 text-sm text-gray-300">
              <li>
                Install MetaMask from{" "}
                <a
                  href="https://metamask.io"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  metamask.io
                </a>{" "}
                or your browser extension store
              </li>
              <li>Create a new wallet or import an existing one</li>
              <li>
                <span className="text-yellow-300">Important:</span> Back up your
                12-word seed phrase securely. Never share it.
              </li>
              <li>
                Fund your wallet with a small amount of ETH on any network (gas
                fees are minimal)
              </li>
            </ol>
          </div>

          <div className="rounded-lg border border-dark-border bg-dark-bg/50 p-4">
            <h3 className="text-lg font-semibold text-white">Connect Flow</h3>
            <ol className="mt-2 list-decimal space-y-2 pl-6 text-sm text-gray-300">
              <li>Click "Connect Wallet" in your node settings</li>
              <li>
                MetaMask will prompt you to sign a message (not a transaction)
              </li>
              <li>
                <span className="text-white">No gas fees:</span> This is a
                signature only, not an on-chain transaction
              </li>
              <li>Your wallet address is now linked to your node identity</li>
            </ol>
          </div>

          <div className="rounded-lg border border-dark-border bg-dark-bg/50 p-4">
            <h3 className="text-lg font-semibold text-white">
              Other Wallet Options
            </h3>
            <p className="mt-2 text-sm text-gray-300">
              epress supports any wallet that implements the WalletConnect
              standard, including Rainbow, Coinbase Wallet, Trust Wallet, and
              more.
            </p>
          </div>
        </div>
      </article>

      <article className="rounded-xl border border-dark-border bg-dark-surface/70 p-6">
        <div className="flex items-start gap-4">
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-dark-bg">
            3
          </span>
          <div className="flex-1">
            <h2 className="text-xl font-semibold text-white">
              Basic Configuration
            </h2>
            <ul className="mt-3 list-disc space-y-2 pl-6 text-gray-300">
              <li>
                <span className="text-white">Title:</span> Set your node name
                (displayed to other nodes)
              </li>
              <li>
                <span className="text-white">Avatar:</span> Upload an image for
                your node identity
              </li>
              <li>
                <span className="text-white">Bio:</span> Write a short
                description of your node
              </li>
            </ul>
          </div>
        </div>
      </article>

      <article className="rounded-xl border border-dark-border bg-dark-surface/70 p-6">
        <div className="flex items-start gap-4">
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-dark-bg">
            4
          </span>
          <div className="flex-1">
            <h2 className="text-xl font-semibold text-white">
              First Publication
            </h2>
            <p className="mt-2 text-gray-300">
              Create your first post and understand the publishing options.
            </p>
            <div className="mt-4 grid gap-4 md:grid-cols-2">
              <div className="rounded-lg border border-dark-border bg-dark-bg/60 p-4">
                <h3 className="text-sm font-semibold text-white">
                  Local Publish
                </h3>
                <p className="mt-2 text-sm text-gray-300">
                  Content stored only on your node. Not visible to other nodes
                  until signed.
                </p>
                <p className="mt-2 text-xs text-dark-muted">
                  Good for drafts and private content
                </p>
              </div>
              <div className="rounded-lg border border-primary/30 bg-primary/10 p-4">
                <h3 className="text-sm font-semibold text-white">
                  Signed Publish
                </h3>
                <p className="mt-2 text-sm text-gray-300">
                  Content signed with your wallet. Visible to nodes that follow
                  you.
                </p>
                <p className="mt-2 text-xs text-primary">
                  Required for public distribution
                </p>
              </div>
            </div>
          </div>
        </div>
      </article>

      <article className="rounded-xl border border-dark-border bg-dark-surface/70 p-6">
        <div className="flex items-start gap-4">
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-dark-bg">
            5
          </span>
          <div className="flex-1">
            <h2 className="text-xl font-semibold text-white">
              Follow Other Nodes
            </h2>
            <p className="mt-2 text-gray-300">
              Following nodes establishes relationships and brings their signed
              content into your timeline.
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-6 text-gray-300">
              <li>
                Visit a node URL and click "Follow" to initiate the handshake
              </li>
              <li>
                The other node will verify your signature and establish the
                relationship
              </li>
              <li>Their signed publications will appear in your timeline</li>
            </ul>
          </div>
        </div>
      </article>

      <div className="flex flex-wrap gap-3">
        <Link href="/docs/usage" className="btn-primary">
          Continue to Usage Guide
        </Link>
        <Link href="/docs/faq" className="btn-secondary">
          View FAQ
        </Link>
      </div>
    </div>
  )
}

import Link from "next/link"

export default function UsagePage() {
  return (
    <div className="space-y-6">
      <article className="rounded-2xl border border-dark-border bg-dark-surface/70 p-6 md:p-8">
        <h1 className="text-3xl font-bold text-white">Usage Guide</h1>
        <p className="mt-3 leading-7 text-gray-300">
          After installation, your epress node becomes your personal publishing
          and social hub. This guide covers daily operations and workflows.
        </p>
      </article>

      <article className="rounded-xl border border-dark-border bg-dark-surface/70 p-6">
        <h2 className="text-xl font-semibold text-white">
          How This Relates to Network and Protocol
        </h2>
        <p className="mt-3 text-gray-300 leading-7">
          Daily actions below are performed on epress node software. Signed and
          connected actions are then propagated in epress world through the
          epress world protocol.
        </p>
      </article>

      <article className="rounded-xl border border-dark-border bg-dark-surface/70 p-6">
        <h2 className="text-xl font-semibold text-white">
          Writing & Publishing
        </h2>

        <div className="mt-4 space-y-4">
          <div className="rounded-lg border border-dark-border bg-dark-bg/60 p-4">
            <h3 className="text-lg font-semibold text-white">
              Markdown Editor
            </h3>
            <p className="mt-2 text-sm text-gray-300">
              epress includes a rich Markdown editor with support for:
            </p>
            <ul className="mt-2 list-disc space-y-1 pl-6 text-sm text-gray-300">
              <li>Headers, lists, and text formatting</li>
              <li>Code blocks with syntax highlighting</li>
              <li>Links and images</li>
              <li>Tables</li>
              <li>Math equations (KaTeX)</li>
              <li>Diagrams (Mermaid)</li>
            </ul>
          </div>

          <div className="rounded-lg border border-dark-border bg-dark-bg/60 p-4">
            <h3 className="text-lg font-semibold text-white">Media Uploads</h3>
            <p className="mt-2 text-sm text-gray-300">
              Upload files to include in your publications:
            </p>
            <ul className="mt-2 list-disc space-y-1 pl-6 text-sm text-gray-300">
              <li>Images (PNG, JPG, GIF, WebP)</li>
              <li>Video files</li>
              <li>PDF documents</li>
              <li>Other binary files</li>
            </ul>
            <p className="mt-2 text-sm text-dark-muted">
              Files are stored locally and referenced by content hash.
            </p>
          </div>

          <div className="rounded-lg border border-dark-border bg-dark-bg/60 p-4">
            <h3 className="text-lg font-semibold text-white">
              Publishing Options
            </h3>
            <div className="mt-3 grid gap-4 md:grid-cols-2">
              <div>
                <h4 className="text-sm font-semibold text-white">
                  Local Publish
                </h4>
                <p className="mt-1 text-sm text-gray-300">
                  Content stored only on your node. Use for drafts, private
                  notes, or content you are not ready to share.
                </p>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-primary">
                  Signed Publish
                </h4>
                <p className="mt-1 text-sm text-gray-300">
                  Content is cryptographically signed and distributed to
                  followers. Required for public visibility in the network.
                </p>
              </div>
            </div>
          </div>
        </div>
      </article>

      <article className="rounded-xl border border-dark-border bg-dark-surface/70 p-6">
        <h2 className="text-xl font-semibold text-white">Managing Timeline</h2>

        <div className="mt-4 space-y-4">
          <div className="rounded-lg border border-dark-border bg-dark-bg/60 p-4">
            <h3 className="text-lg font-semibold text-white">
              What Appears in Timeline
            </h3>
            <p className="mt-2 text-sm text-gray-300">
              Your timeline shows signed content from nodes you follow. Content
              is pulled when:
            </p>
            <ul className="mt-2 list-disc space-y-1 pl-6 text-sm text-gray-300">
              <li>A followed node publishes new signed content</li>
              <li>Your node syncs with followed nodes</li>
              <li>Replication requests are received</li>
            </ul>
          </div>

          <div className="rounded-lg border border-dark-border bg-dark-bg/60 p-4">
            <h3 className="text-lg font-semibold text-white">No Algorithm</h3>
            <p className="mt-2 text-sm text-gray-300">
              Timeline is strictly chronological. Content appears in publication
              order, not ranked by engagement. You control what you see by
              choosing who to follow.
            </p>
          </div>

          <div className="rounded-lg border border-dark-border bg-dark-bg/60 p-4">
            <h3 className="text-lg font-semibold text-white">
              RSS Subscription
            </h3>
            <p className="mt-2 text-sm text-gray-300">
              Subscribe to any node content via RSS:
            </p>
            <pre className="mt-2 overflow-x-auto rounded-lg border border-dark-border bg-dark-bg p-3 text-primary text-sm">
              <code>https://your-node-url/rss</code>
            </pre>
          </div>
        </div>
      </article>

      <article className="rounded-xl border border-dark-border bg-dark-surface/70 p-6">
        <h2 className="text-xl font-semibold text-white">Using RSS</h2>

        <div className="mt-4 space-y-4">
          <div className="rounded-lg border border-dark-border bg-dark-bg/60 p-4">
            <h3 className="text-lg font-semibold text-white">
              Public RSS Feed
            </h3>
            <p className="mt-2 text-sm text-gray-300">
              Access any node public content via RSS at:
            </p>
            <pre className="mt-2 overflow-x-auto rounded-lg border border-dark-border bg-dark-bg p-3 text-primary text-sm">
              <code>https://node-url/rss</code>
            </pre>
          </div>

          <div className="rounded-lg border border-dark-border bg-dark-bg/60 p-4">
            <h3 className="text-lg font-semibold text-white">
              Timeline RSS with Auth
            </h3>
            <p className="mt-2 text-sm text-gray-300">
              Access your personalized timeline via RSS with authentication:
            </p>
            <pre className="mt-2 overflow-x-auto rounded-lg border border-dark-border bg-dark-bg p-3 text-primary text-sm">
              <code>https://your-node-url/rss/timeline?token=YOUR_TOKEN</code>
            </pre>
            <p className="mt-2 text-sm text-dark-muted">
              Generate an auth token in your node settings.
            </p>
          </div>

          <div className="rounded-lg border border-dark-border bg-dark-bg/60 p-4">
            <h3 className="text-lg font-semibold text-white">
              AI Tool Integration
            </h3>
            <p className="mt-2 text-sm text-gray-300">
              Use RSS feeds with AI tools like ChatGPT, Claude, or custom
              workflows:
            </p>
            <pre className="mt-2 overflow-x-auto rounded-lg border border-dark-border bg-dark-bg p-3 text-primary text-sm">
              <code>{`# Example: fetch RSS and process with AI\ncurl https://node-url/rss | your-ai-tool`}</code>
            </pre>
          </div>
        </div>
      </article>

      <article className="rounded-xl border border-dark-border bg-dark-surface/70 p-6">
        <h2 className="text-xl font-semibold text-white">Node Settings</h2>

        <div className="mt-4 space-y-4">
          <div className="rounded-lg border border-dark-border bg-dark-bg/60 p-4">
            <h3 className="text-lg font-semibold text-white">
              Profile Editing
            </h3>
            <ul className="mt-2 list-disc space-y-1 pl-6 text-sm text-gray-300">
              <li>Node title and description</li>
              <li>Avatar image</li>
              <li>Public URL for other nodes to connect</li>
            </ul>
          </div>

          <div className="rounded-lg border border-dark-border bg-dark-bg/60 p-4">
            <h3 className="text-lg font-semibold text-white">
              Follow Permissions
            </h3>
            <div className="mt-3 grid gap-4 md:grid-cols-2">
              <div>
                <h4 className="text-sm font-semibold text-white">Open</h4>
                <p className="mt-1 text-sm text-gray-300">
                  Anyone can follow your node. Follow requests are automatically
                  accepted.
                </p>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-white">
                  Approval Required
                </h4>
                <p className="mt-1 text-sm text-gray-300">
                  You approve each follow request manually.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-lg border border-dark-border bg-dark-bg/60 p-4">
            <h3 className="text-lg font-semibold text-white">
              Comment Authentication
            </h3>
            <p className="mt-2 text-sm text-gray-300">
              Choose how visitors can comment on your publications:
            </p>
            <ul className="mt-2 list-disc space-y-1 pl-6 text-sm text-gray-300">
              <li>
                <span className="text-white">Email verification:</span>{" "}
                Commenters confirm via email
              </li>
              <li>
                <span className="text-white">Wallet signature:</span> Commenters
                sign with their wallet
              </li>
            </ul>
          </div>
        </div>
      </article>

      <article className="rounded-xl border border-dark-border bg-dark-surface/70 p-6">
        <h2 className="text-xl font-semibold text-white">
          Following Other Nodes
        </h2>
        <p className="mt-2 text-gray-300">
          Following establishes a relationship and brings their signed content
          into your timeline.
        </p>
        <ol className="mt-3 list-decimal space-y-2 pl-6 text-gray-300">
          <li>Visit another node URL</li>
          <li>Click "Follow" button</li>
          <li>Your node sends a signed follow request</li>
          <li>Their node verifies and accepts (if open or approved)</li>
          <li>Their signed publications appear in your timeline</li>
        </ol>
      </article>

      <article className="rounded-xl border border-dark-border bg-dark-surface/70 p-6">
        <h2 className="text-xl font-semibold text-white">Discovering Nodes</h2>
        <p className="mt-2 text-gray-300">Find interesting nodes to follow:</p>
        <ul className="mt-2 list-disc space-y-1 pl-6 text-sm text-gray-300">
          <li>Check the awesome-nodes list on GitHub</li>
          <li>Ask for recommendations in the community</li>
          <li>Follow links from content you enjoy</li>
        </ul>
      </article>

      <div className="flex flex-wrap gap-3">
        <Link href="/docs/faq" className="btn-primary">
          Open FAQ
        </Link>
        <Link href="/whitepaper" className="btn-secondary">
          Read Whitepaper
        </Link>
      </div>
    </div>
  )
}

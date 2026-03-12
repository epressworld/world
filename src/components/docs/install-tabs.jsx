"use client"

import { useState } from "react"

const tabs = [
  { id: "curl", label: "One-line Install" },
  { id: "docker", label: "Docker" },
  { id: "source", label: "From Source" },
]

export function InstallTabs() {
  const [activeTab, setActiveTab] = useState("curl")

  return (
    <div className="space-y-4">
      <div className="flex border-b border-dark-border">
        {tabs.map((tab) => (
          <button
            type="button"
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 py-2 text-sm font-medium transition-colors ${
              activeTab === tab.id
                ? "border-b-2 border-primary text-white"
                : "text-gray-400 hover:text-gray-200"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {activeTab === "curl" && <CurlTab />}
      {activeTab === "docker" && <DockerTab />}
      {activeTab === "source" && <SourceTab />}
    </div>
  )
}

function CurlTab() {
  return (
    <div className="space-y-4">
      <div className="rounded-xl border border-primary/35 bg-primary/10 p-6">
        <h3 className="text-lg font-semibold text-white">Quickest Install</h3>
        <p className="mt-2 text-sm text-gray-200">
          Run this command to install epress node with all dependencies:
        </p>
        <pre className="mt-4 overflow-x-auto rounded-lg border border-dark-border bg-dark-bg p-4 text-primary">
          <code>curl -fsSL https://epress.world/install.sh | bash</code>
        </pre>
      </div>

      <div className="rounded-xl border border-dark-border bg-dark-surface/70 p-6">
        <h3 className="text-lg font-semibold text-white">What This Does</h3>
        <ul className="mt-3 list-disc space-y-2 pl-6 text-gray-300">
          <li>Checks for Node.js v18+ (installs via nvm if needed)</li>
          <li>Checks for Git (prompts to install if missing)</li>
          <li>Clones epress to ~/epress directory</li>
          <li>Installs dependencies and builds the application</li>
          <li>Starts the node with PM2 for automatic restarts</li>
        </ul>
      </div>

      <div className="rounded-xl border border-dark-border bg-dark-surface/70 p-6">
        <h3 className="text-lg font-semibold text-white">After Install</h3>
        <p className="mt-2 text-sm text-gray-300">
          Open{" "}
          <code className="rounded bg-dark-bg px-1.5 py-0.5 text-primary">
            http://localhost:8543
          </code>{" "}
          in your browser to complete setup.
        </p>
      </div>

      <div className="rounded-xl border border-dark-border bg-dark-surface/70 p-6">
        <h3 className="text-lg font-semibold text-white">Common Commands</h3>
        <div className="mt-3 space-y-2 text-sm">
          <div className="flex justify-between rounded-lg bg-dark-bg/50 p-2">
            <span className="text-gray-300">View logs</span>
            <code className="text-primary">cd ~/epress && npm run logs</code>
          </div>
          <div className="flex justify-between rounded-lg bg-dark-bg/50 p-2">
            <span className="text-gray-300">Stop node</span>
            <code className="text-primary">cd ~/epress && npm run stop</code>
          </div>
          <div className="flex justify-between rounded-lg bg-dark-bg/50 p-2">
            <span className="text-gray-300">Start node</span>
            <code className="text-primary">cd ~/epress && npm run start</code>
          </div>
          <div className="flex justify-between rounded-lg bg-dark-bg/50 p-2">
            <span className="text-gray-300">Check status</span>
            <code className="text-primary">cd ~/epress && npm run status</code>
          </div>
          <div className="flex justify-between rounded-lg bg-dark-bg/50 p-2">
            <span className="text-gray-300">Update</span>
            <code className="text-primary">
              cd ~/epress && git pull && npm install && npm run build && npm run
              stop && npm run start
            </code>
          </div>
        </div>
      </div>
    </div>
  )
}

function DockerTab() {
  return (
    <div className="space-y-4">
      <div className="rounded-xl border border-dark-border bg-dark-surface/70 p-6">
        <h3 className="text-lg font-semibold text-white">Start Container</h3>
        <pre className="mt-4 overflow-x-auto rounded-lg border border-dark-border bg-dark-bg p-4 text-primary">
          <code>
            docker run -d -p 8543:8543 -p 8544:8544 -v epress-data:/app/data
            --name my-epress-node ghcr.io/epressworld/epress
          </code>
        </pre>
      </div>

      <div className="rounded-xl border border-dark-border bg-dark-surface/70 p-6">
        <h3 className="text-lg font-semibold text-white">View Logs</h3>
        <pre className="mt-4 overflow-x-auto rounded-lg border border-dark-border bg-dark-bg p-4 text-primary">
          <code>docker logs -f my-epress-node</code>
        </pre>
      </div>

      <div className="rounded-xl border border-dark-border bg-dark-surface/70 p-6">
        <h3 className="text-lg font-semibold text-white">Stop / Start</h3>
        <pre className="mt-4 overflow-x-auto rounded-lg border border-dark-border bg-dark-bg p-4 text-primary">
          <code>{`docker stop my-epress-node\ndocker start my-epress-node`}</code>
        </pre>
      </div>

      <div className="rounded-xl border border-dark-border bg-dark-surface/70 p-6">
        <h3 className="text-lg font-semibold text-white">Upgrade</h3>
        <pre className="mt-4 overflow-x-auto rounded-lg border border-dark-border bg-dark-bg p-4 text-primary">
          <code>{`docker pull ghcr.io/epressworld/epress\ndocker stop my-epress-node\ndocker rm my-epress-node\ndocker run -d -p 8543:8543 -p 8544:8544 -v epress-data:/app/data --name my-epress-node ghcr.io/epressworld/epress`}</code>
        </pre>
      </div>
    </div>
  )
}

function SourceTab() {
  return (
    <div className="space-y-4">
      <div className="rounded-xl border border-dark-border bg-dark-surface/70 p-6">
        <h3 className="text-lg font-semibold text-white">Prerequisites</h3>
        <ul className="mt-3 list-disc space-y-2 pl-6 text-gray-300">
          <li>Node.js v18 or higher</li>
          <li>Git</li>
          <li>SQLite or PostgreSQL or MySQL</li>
        </ul>
      </div>

      <div className="rounded-xl border border-dark-border bg-dark-surface/70 p-6">
        <h3 className="text-lg font-semibold text-white">Clone and Build</h3>
        <pre className="mt-4 overflow-x-auto rounded-lg border border-dark-border bg-dark-bg p-4 text-primary">
          <code>{`git clone https://github.com/epressworld/epress.git\ncd epress\nnpm install\nnpm run build`}</code>
        </pre>
      </div>

      <div className="rounded-xl border border-dark-border bg-dark-surface/70 p-6">
        <h3 className="text-lg font-semibold text-white">
          Configuration (Optional)
        </h3>
        <p className="mt-2 text-sm text-gray-300">
          Create{" "}
          <code className="rounded bg-dark-bg px-1.5 py-0.5 text-primary">
            .env.local
          </code>{" "}
          to customize:
        </p>
        <pre className="mt-4 overflow-x-auto rounded-lg border border-dark-border bg-dark-bg p-4 text-primary">
          <code>{`DATABASE_URL=sqlite://./data/epress.db\nPORT=8543\nAPI_PORT=8544`}</code>
        </pre>
      </div>

      <div className="rounded-xl border border-dark-border bg-dark-surface/70 p-6">
        <h3 className="text-lg font-semibold text-white">Start</h3>
        <pre className="mt-4 overflow-x-auto rounded-lg border border-dark-border bg-dark-bg p-4 text-primary">
          <code>npm run start</code>
        </pre>
        <p className="mt-2 text-sm text-gray-300">
          For development with auto-reload:{" "}
          <code className="rounded bg-dark-bg px-1.5 py-0.5 text-primary">
            npm run dev
          </code>
        </p>
      </div>
    </div>
  )
}

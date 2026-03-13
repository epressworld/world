"use client"

import { useState } from "react"
import { CopyableCodeBlock, CopyButton } from "@/components/shared/copy-button"

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

function CodeLine({ label, code }) {
  return (
    <div className="group flex items-center justify-between gap-2 rounded-lg bg-dark-bg/50 p-2">
      <span className="shrink-0 text-gray-300">{label}</span>
      <div className="flex min-w-0 items-center gap-2">
        <code className="truncate text-sm text-primary">{code}</code>
        <CopyButton
          text={code}
          className="!rounded !border-0 !bg-transparent !p-1 opacity-0 group-hover:opacity-100"
        />
      </div>
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
        <div className="mt-4">
          <CopyableCodeBlock code="curl -fsSL https://epress.world/install.sh | bash" />
        </div>
      </div>

      <div className="rounded-xl border border-dark-border bg-dark-surface/70 p-6">
        <h3 className="text-lg font-semibold text-white">What This Does</h3>
        <ul className="mt-3 list-disc space-y-2 pl-6 text-gray-300">
          <li>Checks for Node.js v20+ (installs via nvm if needed)</li>
          <li>Checks for Git (prompts to install if missing)</li>
          <li>Clones epress to ~/epress directory</li>
          <li>Installs dependencies and builds the application</li>
          <li>Starts the node (use systemd for production)</li>
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
          <CodeLine label="Stop node" code="Ctrl+C" />
          <CodeLine label="Start node" code="cd ~/epress && npm start" />
          <CodeLine
            label="Development mode"
            code="cd ~/epress && npm run dev"
          />
          <CodeLine
            label="Update"
            code="cd ~/epress && git pull && npm install && npm run build && npm start"
          />
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
        <div className="mt-4">
          <CopyableCodeBlock
            code={`docker run -d -p 8543:8543 -p 8544:8544 -v epress-data:/app/data --restart unless-stopped --name my-epress-node ghcr.io/epressworld/epress:latest`}
          />
        </div>
      </div>

      <div className="rounded-xl border border-dark-border bg-dark-surface/70 p-6">
        <h3 className="text-lg font-semibold text-white">View Logs</h3>
        <div className="mt-4">
          <CopyableCodeBlock code="docker logs -f my-epress-node" />
        </div>
      </div>

      <div className="rounded-xl border border-dark-border bg-dark-surface/70 p-6">
        <h3 className="text-lg font-semibold text-white">Stop / Start</h3>
        <div className="mt-4">
          <CopyableCodeBlock
            code={`docker stop my-epress-node\ndocker start my-epress-node`}
          />
        </div>
      </div>

      <div className="rounded-xl border border-dark-border bg-dark-surface/70 p-6">
        <h3 className="text-lg font-semibold text-white">Upgrade</h3>
        <div className="mt-4">
          <CopyableCodeBlock
            code={`docker pull ghcr.io/epressworld/epress:latest\ndocker stop my-epress-node\ndocker rm my-epress-node\ndocker run -d -p 8543:8543 -p 8544:8544 -v epress-data:/app/data --restart unless-stopped --name my-epress-node ghcr.io/epressworld/epress:latest\ndocker exec my-epress-node npm run migrate`}
          />
        </div>
        <p className="mt-2 text-sm text-gray-300">
          The migrate step applies any database schema updates.
        </p>
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
          <li>Node.js v20 or higher</li>
          <li>Git</li>
          <li>SQLite (default), PostgreSQL, or MySQL</li>
        </ul>
      </div>

      <div className="rounded-xl border border-dark-border bg-dark-surface/70 p-6">
        <h3 className="text-lg font-semibold text-white">Clone and Build</h3>
        <div className="mt-4">
          <CopyableCodeBlock
            code={`git clone https://github.com/epressworld/epress.git\ncd epress\nnpm install\nnpm run build`}
          />
        </div>
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
          to customize ports or database:
        </p>
        <div className="mt-4">
          <CopyableCodeBlock
            code={`EPRESS_CLIENT_PORT=8543\nEPRESS_SERVER_PORT=8544`}
          />
        </div>
        <p className="mt-3 text-sm text-gray-300">
          For PostgreSQL:{" "}
          <code className="rounded bg-dark-bg px-1.5 py-0.5 text-primary">
            EPRESS_DATABASE_CLIENT=pg
          </code>{" "}
          and{" "}
          <code className="rounded bg-dark-bg px-1.5 py-0.5 text-primary">
            EPRESS_DATABASE_CONNECTION=postgres://...
          </code>
        </p>
      </div>

      <div className="rounded-xl border border-dark-border bg-dark-surface/70 p-6">
        <h3 className="text-lg font-semibold text-white">Start</h3>
        <div className="mt-4">
          <CopyableCodeBlock code="npm start" />
        </div>
        <p className="mt-2 text-sm text-gray-300">
          For development with auto-reload:{" "}
          <code className="rounded bg-dark-bg px-1.5 py-0.5 text-primary">
            npm run dev
          </code>
        </p>
      </div>

      <div className="rounded-xl border border-dark-border bg-dark-surface/70 p-6">
        <h3 className="text-lg font-semibold text-white">Upgrade</h3>
        <div className="mt-4">
          <CopyableCodeBlock
            code={`git pull\nnpm install\nnpm run migrate\nnpm run build\nnpm start`}
          />
        </div>
        <p className="mt-2 text-sm text-gray-300">
          Run migrations after pulling updates to apply database schema changes.
        </p>
      </div>
    </div>
  )
}

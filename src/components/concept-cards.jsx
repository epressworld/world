"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"

const concepts = [
  {
    id: "identity",
    title: "Identity",
    icon: "🔑",
    shortDesc: "Your Ethereum address is your identity",
    fullTitle: "Your Identity = Your Ethereum Address",
    fullDesc:
      "In epress, you don't create an account on a platform — your identity is your Ethereum address (like 0x1234...abcd). You control it with your private key. No username, no password, no platform can take it away. Your identity is truly yours, portable, and sovereign.",
  },
  {
    id: "node",
    title: "Node",
    icon: "🌐",
    shortDesc: "Your personal website as a node",
    fullTitle: "Your Node = Your Personal Website",
    fullDesc:
      "Every user runs their own node — a personal website that you fully control. Think of it as your digital home on the network. You publish posts, manage pages, and interact with visitors just like WordPress. But unlike centralized platforms, your node — and all your data — belongs entirely to you.",
  },
  {
    id: "connection",
    title: "Connection",
    icon: "🔗",
    shortDesc: "Follow with sync confirmation",
    fullTitle: "Connections = Follow with Mutual Agreement",
    fullDesc:
      "When you follow someone on epress, you're establishing a direct peer-to-peer connection. But here's the key: both parties must confirm the follow. This 'synchronous confirmation handshake' ensures that the relationship exists on both nodes simultaneously — no fake followers, no unilateral decisions. It's a true mutual agreement between two nodes.",
  },
  {
    id: "content",
    title: "Content",
    icon: "📄",
    shortDesc: "Proof of Source verification",
    fullTitle: "Content = Cryptographically Signed",
    fullDesc:
      "When you publish content on epress, it's not just uploaded — it's cryptographically signed with your private key. This creates a 'Proof of Source' that proves: (1) You created it, (2) It hasn't been tampered with, and (3) When you published it. Anyone can verify this signature. Your content is permanently verifiable.",
  },
  {
    id: "timeline",
    title: "Timeline",
    icon: "📅",
    shortDesc: "Local aggregation & sorting",
    fullTitle: "Timeline = Your Local Aggregation",
    fullDesc:
      "Your timeline is generated entirely on your node. It combines: (1) Your own posts, and (2) Posts from everyone you follow. All content is sorted by timestamp — no algorithm decides what you see, no one can manipulate your feed. When you visit your node, you see everything in chronological order. It's your personal news feed, generated locally, controlled by you.",
  },
]

export function ConceptCards() {
  const [expandedId, setExpandedId] = useState(null)

  const handleClick = (id) => {
    setExpandedId(expandedId === id ? null : id)
  }

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        {concepts.map((concept) => (
          <button
            key={concept.id}
            type="button"
            onClick={() => handleClick(concept.id)}
            className={cn(
              "cursor-pointer transition-all duration-300 rounded-lg border p-4 text-center",
              expandedId === concept.id
                ? "bg-dark-bg border-primary md:col-span-5"
                : "bg-dark-surface border-dark-border hover:border-primary/50",
            )}
          >
            <div className="text-3xl mb-2">{concept.icon}</div>
            <h3 className="font-semibold mb-1">{concept.title}</h3>
            <p
              className={cn(
                "text-sm text-dark-muted",
                expandedId === concept.id && "text-gray-300",
              )}
            >
              {expandedId === concept.id ? concept.fullDesc : concept.shortDesc}
            </p>
          </button>
        ))}
      </div>

      {/* Flow explanation */}
      <div className="mt-8 p-6 bg-dark-surface rounded-lg border border-dark-border">
        <h4 className="font-semibold text-center mb-4 text-primary">
          How Content Flows
        </h4>
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-sm text-gray-400">
          <div className="flex items-center gap-2">
            <span className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center text-primary">
              1
            </span>
            <span>You write & sign a post on your node</span>
          </div>
          <span className="text-primary">→</span>
          <div className="flex items-center gap-2">
            <span className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center text-primary">
              2
            </span>
            <span>Your followers receive a notification (PoS)</span>
          </div>
          <span className="text-primary">→</span>
          <div className="flex items-center gap-2">
            <span className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center text-primary">
              3
            </span>
            <span>They pull & verify the content</span>
          </div>
          <span className="text-primary">→</span>
          <div className="flex items-center gap-2">
            <span className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center text-primary">
              4
            </span>
            <span>Stored locally on their nodes</span>
          </div>
        </div>
      </div>

      <div className="mt-4 p-6 bg-dark-surface rounded-lg border border-dark-border">
        <h4 className="font-semibold text-center mb-4 text-primary">
          Your Timeline
        </h4>
        <p className="text-sm text-gray-400 text-center max-w-2xl mx-auto">
          When you log into your node, you see your timeline — a chronological
          feed combining your posts and posts from everyone you follow. No
          algorithms, no censorship, no manipulation. It's your personal view of
          the network, generated locally on your own node.
        </p>
      </div>
    </div>
  )
}

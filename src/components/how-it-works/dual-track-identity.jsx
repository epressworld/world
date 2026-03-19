"use client"

import { AnimatePresence, motion } from "framer-motion"
import { CheckCircle, Code, Edit3, Eye, Wallet } from "lucide-react"
import { useState } from "react"

function EditorMockup() {
  return (
    <div className="bg-dark-surface rounded-xl border border-white/10 p-6 max-w-md mx-auto">
      <div className="flex items-center gap-2 mb-4 pb-4 border-b border-white/5">
        <div className="w-3 h-3 rounded-full bg-red-500/60" />
        <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
        <div className="w-3 h-3 rounded-full bg-green-500/60" />
        <span className="ml-4 text-xs text-white/30">New Post</span>
      </div>
      <div className="space-y-3">
        <div className="h-4 bg-white/5 rounded w-3/4" />
        <div className="h-4 bg-white/5 rounded w-full" />
        <div className="h-4 bg-white/5 rounded w-5/6" />
        <div className="h-4 bg-white/5 rounded w-full" />
        <div className="h-4 bg-white/5 rounded w-2/3" />
      </div>
      <div className="mt-6 flex justify-between items-center">
        <span className="text-xs text-white/30">Draft saved</span>
        <motion.button
          type="button"
          className="bg-primary text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <Edit3 className="w-4 h-4" />
          Publish
        </motion.button>
      </div>
    </div>
  )
}

function WalletMockup() {
  return (
    <div className="bg-dark-surface rounded-xl border border-white/10 p-6 max-w-sm mx-auto">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
          <Wallet className="w-5 h-5 text-primary" />
        </div>
        <div>
          <p className="text-sm font-medium text-white">Sign Message</p>
          <p className="text-xs text-white/40">epress.world</p>
        </div>
      </div>

      <div className="bg-white/5 rounded-lg p-4 mb-6">
        <p className="text-xs text-white/40 mb-2">Message to sign:</p>
        <p className="text-xs text-white/60 font-mono break-all">
          Publish content: 0x7a3f...9e2b
        </p>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <button
          type="button"
          className="py-2.5 rounded-lg border border-white/10 text-white/60 text-sm font-medium hover:bg-white/5 transition-colors"
        >
          Cancel
        </button>
        <motion.button
          type="button"
          className="py-2.5 rounded-lg bg-primary text-white text-sm font-medium"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          Sign
        </motion.button>
      </div>
    </div>
  )
}

function SuccessMockup() {
  return (
    <div className="bg-dark-surface rounded-xl border border-green-500/30 p-8 max-w-sm mx-auto text-center">
      <motion.div
        className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-4"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 200, delay: 0.1 }}
      >
        <CheckCircle className="w-8 h-8 text-green-400" />
      </motion.div>
      <h4 className="text-lg font-semibold text-white mb-2">Published!</h4>
      <p className="text-sm text-white/60 mb-4">
        Your content is now signed and ready to be distributed to your
        followers.
      </p>
      <div className="bg-white/5 rounded-lg p-3">
        <p className="text-xs text-white/40 mb-1">Transaction Hash</p>
        <p className="text-xs text-primary font-mono">0x1a9f...8e3d</p>
      </div>
    </div>
  )
}

function TechnicalDetails() {
  return (
    <div className="bg-dark-surface rounded-xl border border-white/10 p-6">
      <div className="space-y-6">
        <div>
          <p className="text-xs text-white/40 mb-2 font-mono">
            Step 1: Content Hashing
          </p>
          <div className="bg-black/40 rounded-lg p-4 font-mono text-xs space-y-1">
            <p className="text-green-400/80">SHA-256(content)</p>
            <p className="text-white/60">↓</p>
            <p className="text-primary/80">contentHash = 0x7a3f...9e2b</p>
          </div>
        </div>

        <div>
          <p className="text-xs text-white/40 mb-2 font-mono">
            Step 2: EIP-712 Structured Data
          </p>
          <div className="bg-black/40 rounded-lg p-4 font-mono text-xs space-y-2">
            <p className="text-white/50">{"{"}</p>
            <p className="text-white/70 pl-4">
              <span className="text-blue-400/80">contentHash</span>:{" "}
              <span className="text-primary/80">&quot;0x7a3f...&quot;</span>
            </p>
            <p className="text-white/70 pl-4">
              <span className="text-blue-400/80">publisher</span>:{" "}
              <span className="text-primary/80">&quot;0x742d...&quot;</span>
            </p>
            <p className="text-white/70 pl-4">
              <span className="text-blue-400/80">timestamp</span>:{" "}
              <span className="text-yellow-400/80">1709876543</span>
            </p>
            <p className="text-white/50">{"}"}</p>
          </div>
        </div>

        <div>
          <p className="text-xs text-white/40 mb-2 font-mono">
            Step 3: Cryptographic Signature
          </p>
          <div className="bg-black/40 rounded-lg p-4 font-mono text-xs space-y-1">
            <p className="text-green-400/80">sign(hash, privateKey)</p>
            <p className="text-white/60">↓</p>
            <p className="text-primary/80 break-all">signature = 0x1f9c8e...</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export function DualTrackIdentity() {
  const [showTechnical, setShowTechnical] = useState(false)

  return (
    <section id="proof-of-source" className="landing-section">
      <div className="container-custom">
        <p className="section-label">Verification</p>
        <h2 className="landing-heading mb-4">Proof of Source</h2>
        <p className="landing-subheading mb-8 max-w-3xl">
          Every piece of content is cryptographically signed by your Ethereum
          identity. Simple to use, mathematically impossible to forge.
        </p>

        <div className="flex justify-center mb-8">
          <div className="inline-flex bg-dark-surface rounded-full p-1 border border-white/10">
            <button
              type="button"
              onClick={() => setShowTechnical(false)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all flex items-center gap-2 ${
                !showTechnical
                  ? "bg-primary text-white"
                  : "text-white/60 hover:text-white"
              }`}
            >
              <Eye className="w-4 h-4" />
              User Experience
            </button>
            <button
              type="button"
              onClick={() => setShowTechnical(true)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all flex items-center gap-2 ${
                showTechnical
                  ? "bg-primary text-white"
                  : "text-white/60 hover:text-white"
              }`}
            >
              <Code className="w-4 h-4" />
              Under the Hood
            </button>
          </div>
        </div>

        <AnimatePresence mode="wait">
          {!showTechnical ? (
            <motion.div
              key="ux"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="max-w-4xl mx-auto"
            >
              <div className="grid md:grid-cols-3 gap-6 items-center">
                <div className="text-center">
                  <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mx-auto mb-4">
                    <span className="text-xl font-bold text-primary">1</span>
                  </div>
                  <h4 className="font-semibold text-white mb-2">Write</h4>
                  <EditorMockup />
                </div>

                <div className="text-center">
                  <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mx-auto mb-4">
                    <span className="text-xl font-bold text-primary">2</span>
                  </div>
                  <h4 className="font-semibold text-white mb-2">Sign</h4>
                  <WalletMockup />
                </div>

                <div className="text-center">
                  <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mx-auto mb-4">
                    <span className="text-xl font-bold text-primary">3</span>
                  </div>
                  <h4 className="font-semibold text-white mb-2">Broadcast</h4>
                  <SuccessMockup />
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="technical"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="max-w-2xl mx-auto"
            >
              <TechnicalDetails />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}

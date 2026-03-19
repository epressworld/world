"use client"

import { motion, useInView } from "framer-motion"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"
import { SiteFooter } from "@/components/home/site-footer"
import { SiteNav } from "@/components/home/site-nav"

const UI = {
  pageBg: "#1a1a1a",
  navBg: "#1e1e1e",
  contentBg: "#242424",
  cardBg: "#2a2a2a",
  inputBg: "#1e1e1e",
  popoverBg: "#ffffff",
  textPrimary: "rgba(255,255,255,0.90)",
  textSecondary: "rgba(255,255,255,0.50)",
  textMuted: "rgba(255,255,255,0.28)",
  textAddress: "rgba(255,255,255,0.60)",
  orange: "#e8732a",
  orangeHover: "#d4621f",
  orangeDim: "rgba(232,115,42,0.15)",
  orangeBorder: "rgba(232,115,42,0.35)",
  green: "#22c55e",
  greenDim: "rgba(34,197,94,0.15)",
  border: "rgba(255,255,255,0.08)",
  borderMed: "rgba(255,255,255,0.12)",
  signedGreen: "#16a34a",
}

function SignedRibbon({ signed = true }) {
  const [showTooltip, setShowTooltip] = useState(false)

  const handleKeyDown = (e) => {
    if (!signed && (e.key === "Enter" || e.key === " ")) {
    }
  }

  return (
    <div
      className="absolute top-0 right-0 w-[60px] h-[60px] overflow-hidden"
      style={{ zIndex: 10 }}
      onMouseEnter={() => !signed && setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
      onKeyDown={handleKeyDown}
      role={!signed ? "button" : undefined}
      tabIndex={!signed ? 0 : undefined}
    >
      <motion.div
        className="absolute top-[10px] right-[-28px] w-[100px] text-center py-0.5 text-[9px] font-bold"
        style={{
          background: signed ? UI.signedGreen : "rgba(130,130,130,0.55)",
          color: signed ? "#fff" : "rgba(255,255,255,0.45)",
          transform: "rotate(45deg)",
          cursor: signed ? "default" : "pointer",
        }}
        animate={signed ? { scale: [1, 1.15, 1] } : {}}
        transition={{ duration: 0.4, ease: "easeInOut" }}
      >
        SIGNED
      </motion.div>
      {showTooltip && !signed && (
        <div
          className="absolute top-[62px] right-1 text-[9px] px-2 py-1 rounded whitespace-nowrap"
          style={{
            background: "rgba(0,0,0,0.85)",
            color: "rgba(255,255,255,0.8)",
            zIndex: 20,
            pointerEvents: "none",
          }}
        >
          Click to sign &amp; broadcast
        </div>
      )}
    </div>
  )
}

function PostCard({
  authorName,
  authorAddress,
  timeAgo,
  content,
  signed,
  showActions = true,
}) {
  return (
    <div
      className="relative p-3 rounded-lg"
      style={{
        background: UI.cardBg,
        border: `1px solid ${UI.border}`,
      }}
    >
      {signed !== undefined && <SignedRibbon signed={signed} />}
      <div className="flex items-center gap-2 mb-2">
        <div
          className="w-8 h-8 rounded-full flex items-center justify-center text-[11px] font-bold"
          style={{ background: UI.orange, color: UI.pageBg }}
        >
          {authorName.charAt(0).toUpperCase()}
        </div>
        <div className="flex-1 min-w-0">
          <div
            className="text-[13px] font-medium"
            style={{ color: UI.textPrimary }}
          >
            {authorName}
          </div>
          <div
            className="text-[10px] font-mono"
            style={{ color: UI.textMuted }}
          >
            {authorAddress}
          </div>
        </div>
      </div>

      <div
        className="text-[12px] leading-relaxed"
        style={{ color: UI.textPrimary }}
      >
        {content}
      </div>

      <div className="text-[11px]" style={{ color: UI.textMuted }}>
        {timeAgo}
      </div>

      {showActions && (
        <div
          className="flex items-center justify-end gap-4 pt-2"
          style={{ borderTop: `1px solid ${UI.border}`, color: UI.textMuted }}
        >
          <button
            type="button"
            className="flex items-center gap-1 hover:opacity-80"
          >
            <svg
              className="w-4 h-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path d="M12 20.5c4.5 0 8.5-3.5 8.5-8S16.5 4.5 12 4.5 3.5 8 3.5 12.5c0 1.5.5 3 1.3 4.2L3.5 21l4.3-1.3c1.2.5 2.6.8 4.2.8z" />
            </svg>
            <span>0</span>
          </button>
          <button
            type="button"
            className="flex items-center gap-1 hover:opacity-80"
          >
            <svg
              className="w-4 h-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path d="M17 1l4 4-4 4M3 11V9a4 4 0 014-4h14M7 23l-4-4 4-4M21 13v2a4 4 0 01-4 4H3" />
            </svg>
          </button>
          <button
            type="button"
            className="flex items-center gap-1 hover:opacity-80"
          >
            <svg
              className="w-4 h-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path d="M4 12v8a2 2 0 002 2h12a2 2 0 002-2v-8M16 6l-4-4-4 4M12 2v13" />
            </svg>
          </button>
        </div>
      )}
    </div>
  )
}

function NodeChrome({
  nodeUrl: _nodeUrl,
  nodeName = "epress",
  nodeTagline = "Rebuild the entire internet.",
  avatarLetter = "E",
  avatarColor = UI.orange,
  navState = "default",
  walletAddress = null,
  activeTab = "contents",
  children,
  overlayContent = null,
}) {
  const renderWalletSection = () => {
    switch (navState) {
      case "default":
        return (
          <div className="flex items-center gap-2">
            <button
              type="button"
              className="text-[11px] font-medium px-3 py-1.5 rounded-md"
              style={{
                background: UI.orange,
                color: UI.pageBg,
              }}
            >
              Connect Wallet
            </button>
            <button
              type="button"
              className="text-[11px] font-medium px-3 py-1.5 rounded-md"
              style={{
                background: "transparent",
                color: UI.textPrimary,
                border: `1px solid ${UI.borderMed}`,
              }}
            >
              Follow
            </button>
          </div>
        )
      case "wallet-connected":
        return (
          <div className="flex items-center gap-2">
            <div
              className="flex items-center gap-1.5 px-2 py-1 rounded-md"
              style={{ background: UI.greenDim }}
            >
              <div
                className="w-2 h-2 rounded-full"
                style={{ background: UI.green }}
              />
              <span
                className="text-[10px] font-mono"
                style={{ color: UI.textAddress }}
              >
                {walletAddress || "0x62...37E0"}
              </span>
            </div>
            <button
              type="button"
              className="text-[11px] font-medium px-3 py-1.5 rounded-md"
              style={{
                background: UI.orange,
                color: UI.pageBg,
              }}
            >
              Login
            </button>
          </div>
        )
      case "logged-in":
      case "owner":
        return (
          <div className="flex items-center gap-2">
            <div
              className="flex items-center gap-1.5 px-2 py-1 rounded-md"
              style={{ background: UI.greenDim }}
            >
              <div
                className="w-2 h-2 rounded-full"
                style={{ background: UI.green }}
              />
              <span
                className="text-[10px] font-mono"
                style={{ color: UI.textAddress }}
              >
                {walletAddress || "0x62...37E0"}
              </span>
            </div>
            <button
              type="button"
              className="text-[11px] font-medium px-3 py-1.5 rounded-md"
              style={{
                background: "transparent",
                color: UI.textPrimary,
                border: `1px solid ${UI.borderMed}`,
              }}
            >
              Logout
            </button>
            <button
              type="button"
              className="text-[11px] font-medium px-3 py-1.5 rounded-md"
              style={{
                background: "transparent",
                color: UI.textPrimary,
                border: `1px solid ${UI.borderMed}`,
              }}
            >
              Settings
            </button>
          </div>
        )
      default:
        return null
    }
  }

  return (
    <div
      className="w-full rounded-[14px] overflow-hidden relative"
      style={{
        border: `1px solid ${UI.border}`,
        boxShadow: "0 24px 60px rgba(0,0,0,0.55)",
      }}
    >
      <div
        className="flex items-center justify-between px-4"
        style={{ height: "64px", background: UI.navBg }}
      >
        <div className="flex items-center gap-3">
          <div
            className="w-9 h-9 rounded-full flex items-center justify-center text-[14px] font-bold"
            style={{ background: avatarColor, color: UI.pageBg }}
          >
            {avatarLetter}
          </div>
          <div>
            <div
              className="text-[14px] font-bold"
              style={{ color: UI.textPrimary }}
            >
              {nodeName}
            </div>
            <div className="text-[10px]" style={{ color: UI.textMuted }}>
              {nodeTagline}
            </div>
          </div>
        </div>
        {renderWalletSection()}
      </div>

      <div
        className="flex items-center border-b"
        style={{ height: "44px", background: UI.navBg, borderColor: UI.border }}
      >
        {["contents", "connections"].map((tab) => (
          <button
            type="button"
            key={tab}
            className="text-[11px] font-medium px-4 py-2 capitalize relative"
            style={{
              color: activeTab === tab ? UI.orange : UI.textSecondary,
            }}
          >
            {tab}
            {activeTab === tab && (
              <div
                className="absolute bottom-0 left-0 right-0 h-[2px]"
                style={{ background: UI.orange }}
              />
            )}
          </button>
        ))}
      </div>

      <div style={{ background: UI.pageBg, minHeight: "280px" }}>
        {children}
      </div>

      <div
        className="flex items-center justify-between px-4"
        style={{ height: "40px", background: UI.navBg }}
      >
        <div className="text-[10px]" style={{ color: UI.textMuted }}>
          epress
        </div>
        <div
          className="flex items-center gap-4 text-[10px]"
          style={{ color: UI.textMuted }}
        >
          <span>Visitors: 1,234</span>
          <span>Online: 142 days</span>
        </div>
      </div>

      {overlayContent && (
        <div className="absolute inset-0 z-20">{overlayContent}</div>
      )}
    </div>
  )
}

function WalletPickerModal({ onClose }) {
  return (
    <div
      className="absolute inset-0 flex items-center justify-center"
      style={{ background: "rgba(0,0,0,0.6)" }}
    >
      <div
        className="w-[280px] rounded-xl overflow-hidden"
        style={{ background: UI.popoverBg }}
      >
        <div className="flex items-center justify-between px-4 py-3 border-b border-gray-200">
          <span className="text-[14px] font-bold text-gray-900">
            Connect Wallet
          </span>
          <button
            type="button"
            onClick={onClose}
            className="text-[18px] text-gray-400 hover:text-gray-600"
          >
            ×
          </button>
        </div>
        <div className="p-3 space-y-2">
          {[
            { name: "Rainbow", color: "#fa52a0", comingSoon: true },
            { name: "Base Account", color: "#0052ff", comingSoon: false },
            { name: "MetaMask", color: "#f6851b", comingSoon: false },
            { name: "WalletConnect", color: "#3b99fc", comingSoon: false },
          ].map((wallet) => (
            <button
              type="button"
              key={wallet.name}
              className="w-full flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center"
                style={{ background: wallet.color }}
              >
                <span className="text-white text-[12px] font-bold">
                  {wallet.name.charAt(0)}
                </span>
              </div>
              <span className="text-[13px] text-gray-800 font-medium flex-1 text-left">
                {wallet.name}
              </span>
              {wallet.comingSoon && (
                <span className="text-[9px] font-bold px-1.5 py-0.5 rounded bg-gray-200 text-gray-600">
                  COMING SOON
                </span>
              )}
            </button>
          ))}
        </div>
        <div className="px-4 py-3 border-t border-gray-200 text-center">
          <span className="text-[11px] text-gray-500">
            New to Ethereum wallets?{" "}
          </span>
          <button
            type="button"
            className="text-[11px] text-blue-600 hover:underline"
          >
            Learn more
          </button>
        </div>
      </div>
    </div>
  )
}

function MetaMaskSigningModal({ onClose }) {
  return (
    <div
      className="absolute inset-0 flex items-center justify-center"
      style={{ background: "rgba(0,0,0,0.6)" }}
    >
      <div
        className="w-[300px] rounded-xl overflow-hidden"
        style={{ background: UI.cardBg, border: `1px solid ${UI.border}` }}
      >
        <div
          className="flex items-center gap-2 px-4 py-3 border-b"
          style={{ borderColor: UI.border }}
        >
          <span className="text-[20px]">🦊</span>
          <span
            className="text-[14px] font-bold"
            style={{ color: UI.textPrimary }}
          >
            Signature Request
          </span>
        </div>
        <div className="p-4">
          <div className="text-[10px] mb-3" style={{ color: UI.textMuted }}>
            <span style={{ color: UI.orange }}>blog.epress.world</span> is
            requesting your signature
          </div>
          <div
            className="text-[9px] p-3 rounded-lg font-mono leading-relaxed mb-4 max-h-[100px] overflow-y-auto"
            style={{ background: UI.inputBg, color: UI.textMuted }}
          >
            epress.world wants you to sign in with your Ethereum account:
            <br />
            <br />
            0x62D5...37E0
            <br />
            <br />
            Sign in to epress.world
            <br />
            <br />
            URI: https://blog.epress.world
            <br />
            Nonce: abc123...
          </div>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 text-[11px] font-medium py-2 rounded-md"
              style={{
                background: "transparent",
                color: UI.textPrimary,
                border: `1px solid ${UI.borderMed}`,
              }}
            >
              Cancel
            </button>
            <button
              type="button"
              className="flex-1 text-[11px] font-medium py-2 rounded-md"
              style={{
                background: UI.orange,
                color: UI.pageBg,
              }}
            >
              Sign
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

function FollowPopover({ inputValue, onFollow, onCancel }) {
  return (
    <div
      className="absolute top-[108px] right-4 z-10 w-[240px] rounded-lg p-3"
      style={{
        background: UI.popoverBg,
        boxShadow: "0 8px 32px rgba(0,0,0,0.3)",
      }}
    >
      <div className="text-[12px] font-medium text-gray-800 mb-2">
        Follow a Node
      </div>
      <input
        type="text"
        value={inputValue}
        readOnly
        className="w-full text-[11px] px-2 py-1.5 rounded border border-gray-300 mb-3 text-gray-700"
      />
      <div className="flex gap-2">
        <button
          type="button"
          onClick={onCancel}
          className="flex-1 text-[11px] font-medium py-1.5 rounded bg-gray-200 text-gray-700 hover:bg-gray-300"
        >
          Cancel
        </button>
        <button
          type="button"
          onClick={onFollow}
          className="flex-1 text-[11px] font-medium py-1.5 rounded text-white"
          style={{ background: UI.orange }}
        >
          Follow
        </button>
      </div>
    </div>
  )
}

function Act1NodeHomepage() {
  return (
    <NodeChrome
      nodeUrl="blog.epress.world"
      nodeName="epress"
      nodeTagline="Rebuild the entire internet."
      navState="default"
      activeTab="contents"
    >
      <div className="p-4 space-y-3">
        <PostCard
          authorName="epress"
          authorAddress="0x8a2f...9b3c"
          timeAgo="6 months ago"
          content="Hello World: epress is Now Open Source. We're excited to announce that epress is now fully open source under the MIT license. This is a major milestone in our mission to rebuild the internet as a truly decentralized network."
          signed
          showActions={false}
        />
        <PostCard
          authorName="epress"
          authorAddress="0x8a2f...9b3c"
          timeAgo="3 months ago"
          content="The internet used to feel personal. Your own corner of the web. Your own voice. Then platforms came and everything became about engagement metrics and algorithmic feeds. It's time to take back ownership."
          signed
          showActions={false}
        />
      </div>
    </NodeChrome>
  )
}

function Act2WalletConnectAnimation() {
  const [state, setState] = useState(0)
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: false, margin: "-60px" })

  useEffect(() => {
    if (!isInView) {
      setState(0)
      return
    }

    const timers = [
      setTimeout(() => setState(1), 2000),
      setTimeout(() => setState(2), 5000),
      setTimeout(() => setState(0), 7500),
    ]

    return () => timers.forEach(clearTimeout)
  }, [isInView, state])

  return (
    <div ref={containerRef}>
      <NodeChrome
        nodeUrl="blog.epress.world"
        nodeName="epress"
        nodeTagline="Rebuild the entire internet."
        navState={state === 2 ? "wallet-connected" : "default"}
        walletAddress="0x62...37E0"
        activeTab="contents"
        overlayContent={
          state === 1 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <WalletPickerModal onClose={() => setState(2)} />
            </motion.div>
          ) : null
        }
      >
        <div className="p-4 space-y-3">
          <PostCard
            authorName="epress"
            authorAddress="0x8a2f...9b3c"
            timeAgo="6 months ago"
            content="Hello World: epress is Now Open Source. We're excited to announce that epress is now fully open source."
            signed
            showActions={false}
          />
        </div>
      </NodeChrome>
    </div>
  )
}

function Act3SignInAnimation() {
  const [state, setState] = useState(0)
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: false, margin: "-60px" })

  useEffect(() => {
    if (!isInView) {
      setState(0)
      return
    }

    const timers = [
      setTimeout(() => setState(1), 2000),
      setTimeout(() => setState(2), 4500),
      setTimeout(() => setState(0), 6500),
    ]

    return () => timers.forEach(clearTimeout)
  }, [isInView, state])

  return (
    <div ref={containerRef}>
      <NodeChrome
        nodeUrl="blog.epress.world"
        nodeName="epress"
        nodeTagline="Rebuild the entire internet."
        navState={state === 0 ? "wallet-connected" : "owner"}
        walletAddress="0x62...37E0"
        activeTab="contents"
        overlayContent={
          state === 1 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <MetaMaskSigningModal onClose={() => setState(2)} />
            </motion.div>
          ) : null
        }
      >
        {state < 2 ? (
          <div className="p-4 space-y-3">
            <PostCard
              authorName="epress"
              authorAddress="0x8a2f...9b3c"
              timeAgo="6 months ago"
              content="Hello World: epress is Now Open Source."
              signed
              showActions={false}
            />
          </div>
        ) : (
          <div className="p-4 space-y-3">
            <div
              className="p-3 rounded-lg"
              style={{
                background: UI.cardBg,
                border: `1px solid ${UI.border}`,
              }}
            >
              <div className="text-[11px]" style={{ color: UI.textMuted }}>
                Write something...
              </div>
            </div>
            <PostCard
              authorName="epress"
              authorAddress="0x8a2f...9b3c"
              timeAgo="6 months ago"
              content="Hello World: epress is Now Open Source."
              signed
              showActions={false}
            />
          </div>
        )}
      </NodeChrome>
    </div>
  )
}

function Act4PublishAnimation() {
  const [state, setState] = useState(0)
  const [typedText, setTypedText] = useState("")
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: false, margin: "-60px" })

  useEffect(() => {
    if (!isInView) {
      setState(0)
      setTypedText("")
      return
    }

    const timers = []

    if (state === 0) {
      timers.push(setTimeout(() => setState(1), 1200))
    }

    if (state === 1) {
      const fullText = "The internet used to feel personal"
      let idx = 0
      const interval = setInterval(() => {
        if (idx < fullText.length) {
          setTypedText(fullText.slice(0, idx + 1))
          idx++
        } else {
          clearInterval(interval)
        }
      }, 55)
      timers.push(setTimeout(() => setState(2), 2200))
      return () => {
        clearInterval(interval)
        timers.forEach(clearTimeout)
      }
    }

    if (state === 2) {
      timers.push(setTimeout(() => setState(3), 2000))
    }

    if (state === 3) {
      timers.push(setTimeout(() => setState(4), 1800))
    }

    if (state === 4) {
      timers.push(
        setTimeout(() => {
          setState(0)
          setTypedText("")
        }, 2500),
      )
    }

    return () => timers.forEach(clearTimeout)
  }, [isInView, state])

  const showInfoStrip = state >= 2
  const showSuccessStrip = state === 4

  return (
    <div ref={containerRef}>
      <NodeChrome
        nodeUrl="blog.epress.world"
        nodeName="epress"
        nodeTagline="Rebuild the entire internet."
        navState="owner"
        walletAddress="0x62...37E0"
        activeTab="contents"
        overlayContent={
          state === 3 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <MetaMaskSigningModal onClose={() => setState(4)} />
            </motion.div>
          ) : null
        }
      >
        <div className="p-4 space-y-3">
          <div
            className="p-3 rounded-lg"
            style={{ background: UI.cardBg, border: `1px solid ${UI.border}` }}
          >
            {state === 0 ? (
              <div className="text-[12px]" style={{ color: UI.textMuted }}>
                Write something...
              </div>
            ) : state === 1 ? (
              <div className="text-[12px]" style={{ color: UI.textPrimary }}>
                {typedText}
                <span
                  className="inline-block w-0.5 h-4 ml-0.5 align-middle"
                  style={{
                    background: UI.orange,
                    animation: "feat-cursor-blink 0.8s step-end infinite",
                  }}
                />
              </div>
            ) : (
              <div className="text-[12px]" style={{ color: UI.textMuted }}>
                Write something...
              </div>
            )}
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              className="text-[10px] font-medium px-2 py-1 rounded"
              style={{
                background: UI.orangeDim,
                color: UI.orange,
                border: `1px solid ${UI.orangeBorder}`,
              }}
            >
              Post
            </button>
            <button
              type="button"
              className="text-[10px] font-medium px-2 py-1 rounded"
              style={{
                background: "transparent",
                color: UI.textMuted,
                border: `1px solid ${UI.border}`,
              }}
            >
              File
            </button>
            <div className="flex-1" />
            {state === 1 && (
              <button
                type="button"
                className="text-[11px] font-medium px-3 py-1.5 rounded flex items-center gap-1.5"
                style={{
                  background: UI.orange,
                  color: UI.pageBg,
                }}
              >
                Publish
              </button>
            )}
          </div>

          {state >= 2 && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              {showInfoStrip && !showSuccessStrip && (
                <div
                  className="text-[10px] px-2 py-1 rounded mb-3"
                  style={{
                    background: "rgba(130,130,130,0.15)",
                    color: "rgba(255,255,255,0.55)",
                    border: "1px solid rgba(130,130,130,0.25)",
                  }}
                >
                  Published locally. Click SIGNED to broadcast.
                </div>
              )}
              {showSuccessStrip && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-[10px] px-2 py-1 rounded mb-3"
                  style={{
                    background: UI.greenDim,
                    color: UI.green,
                    border: `1px solid ${UI.green}`,
                  }}
                >
                  Signed and broadcast to network.
                </motion.div>
              )}
              <PostCard
                authorName="epress"
                authorAddress="0x8a2f...9b3c"
                timeAgo="just now"
                content="The internet used to feel personal"
                signed={state === 4}
                showActions={false}
              />
            </motion.div>
          )}

          <PostCard
            authorName="epress"
            authorAddress="0x8a2f...9b3c"
            timeAgo="6 months ago"
            content="Hello World: epress is Now Open Source."
            signed
            showActions={false}
          />
        </div>
      </NodeChrome>
    </div>
  )
}

function Act5FollowAnimation() {
  const [state, setState] = useState(0)
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: false, margin: "-60px" })

  useEffect(() => {
    if (!isInView) {
      setState(0)
      return
    }

    const timers = [
      setTimeout(() => setState(1), 2000),
      setTimeout(() => setState(2), 5000),
      setTimeout(() => setState(0), 7000),
    ]

    return () => timers.forEach(clearTimeout)
  }, [isInView, state])

  return (
    <div ref={containerRef}>
      <NodeChrome
        nodeUrl="garbin.epress.world"
        nodeName="garbin"
        nodeTagline="Building decentralized tools"
        avatarLetter="G"
        navState="logged-in"
        walletAddress="0x62...37E0"
        activeTab="contents"
        overlayContent={
          state === 1 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <FollowPopover
                inputValue="alice.epress.world"
                onFollow={() => setState(2)}
                onCancel={() => setState(0)}
              />
            </motion.div>
          ) : null
        }
      >
        <div className="p-4">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center text-[12px] font-bold"
                style={{ background: "#6366f1", color: "#fff" }}
              >
                G
              </div>
              <div>
                <div
                  className="text-[13px] font-medium"
                  style={{ color: UI.textPrimary }}
                >
                  garbin
                </div>
                <div className="text-[10px]" style={{ color: UI.textMuted }}>
                  Building decentralized tools
                </div>
              </div>
            </div>
            {state === 2 && (
              <motion.button
                type="button"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="text-[11px] font-medium px-3 py-1.5 rounded-md text-white"
                style={{ background: UI.green }}
              >
                Following ✓
              </motion.button>
            )}
          </div>

          <PostCard
            authorName="garbin"
            authorAddress="0x4d7e...2a1f"
            timeAgo="2 days ago"
            content="Just shipped a new feature for epress. Decentralized identity is finally becoming a reality."
            signed
            showActions={false}
          />
        </div>
      </NodeChrome>
    </div>
  )
}

function Act6TimelineView() {
  return (
    <NodeChrome
      nodeUrl="blog.epress.world"
      nodeName="epress"
      nodeTagline="Rebuild the entire internet."
      navState="owner"
      walletAddress="0x62...37E0"
      activeTab="contents"
    >
      <div className="p-4 space-y-3">
        <div
          className="p-3 rounded-lg"
          style={{ background: UI.cardBg, border: `1px solid ${UI.border}` }}
        >
          <div className="text-[11px]" style={{ color: UI.textMuted }}>
            Write something...
          </div>
        </div>

        <PostCard
          authorName="alice"
          authorAddress="0x3f2a...8c4d"
          timeAgo="1 hour ago"
          content="Just deployed my own epress node. The future of personal content ownership is here. No more platforms controlling reach."
          signed
          showActions
        />

        <PostCard
          authorName="bob"
          authorAddress="0x9e1c...7b2f"
          timeAgo="3 hours ago"
          content="The internet used to feel personal. Your own corner of the web. Your own voice."
          signed
          showActions
        />

        <div
          className="relative p-3 rounded-lg"
          style={{
            background: UI.cardBg,
            border: `1px solid ${UI.border}`,
          }}
        >
          <SignedRibbon />
          <div className="flex items-center gap-2 mb-2">
            <div
              className="w-8 h-8 rounded-full flex items-center justify-center text-[11px] font-bold"
              style={{ background: "#f59e0b", color: UI.pageBg }}
            >
              C
            </div>
            <div className="flex-1 min-w-0">
              <div
                className="text-[13px] font-medium"
                style={{ color: UI.textPrimary }}
              >
                carol
              </div>
              <div
                className="text-[10px] font-mono truncate"
                style={{ color: UI.textAddress }}
              >
                0x7d4b...3e9a
              </div>
            </div>
          </div>
          <div
            className="text-[12px] leading-relaxed mb-2"
            style={{ color: UI.textSecondary }}
          >
            Finally made ramen from scratch today! 🍜
          </div>
          <div
            className="w-full h-32 rounded-lg mb-2 flex items-center justify-center"
            style={{ background: UI.inputBg }}
          >
            <span className="text-[32px]">🍜</span>
          </div>
          <div className="text-[10px] mb-2" style={{ color: UI.textMuted }}>
            5 hours ago
          </div>
          <div
            className="flex items-center gap-4 pt-2"
            style={{ borderTop: `1px solid ${UI.border}` }}
          >
            <button
              type="button"
              className="text-[10px] hover:opacity-80"
              style={{ color: UI.textMuted }}
            >
              💬 Comment
            </button>
            <button
              type="button"
              className="text-[10px] hover:opacity-80"
              style={{ color: UI.textMuted }}
            >
              📝 Quote
            </button>
            <button
              type="button"
              className="text-[10px] hover:opacity-80"
              style={{ color: UI.textMuted }}
            >
              🔗 Share
            </button>
          </div>
        </div>

        <PostCard
          authorName="dave"
          authorAddress="0x1a8f...5c7e"
          timeAgo="8 hours ago"
          content="Self-hosting your own infrastructure is liberating. No more asking permission to exist online."
          signed
          showActions
        />

        <button
          type="button"
          className="w-full text-[11px] font-medium py-2 rounded-lg hover:opacity-80"
          style={{
            background: UI.cardBg,
            color: UI.orange,
            border: `1px solid ${UI.border}`,
          }}
        >
          More →
        </button>
      </div>
    </NodeChrome>
  )
}

export default function FeaturesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteNav />

      <main className="flex-1">
        <section className="container-custom pt-24 pb-16 text-center">
          <div className="section-label">FEATURES</div>
          <h1 className="landing-heading">See the Real Thing.</h1>
          <p className="landing-subheading max-w-xl mx-auto mb-6">
            Six key interactions — shown with the actual epress interface, not
            illustrations.
          </p>
          <p className="text-sm italic" style={{ color: UI.textMuted }}>
            Real nodes are running now at{" "}
            <a
              href="https://blog.epress.world"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-primary transition-colors"
            >
              blog.epress.world
            </a>
          </p>
        </section>

        <section className="container-custom py-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55 }}
              viewport={{ once: true, margin: "-60px" }}
            >
              <Act1NodeHomepage />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true, margin: "-60px" }}
            >
              <div
                className="inline-block text-[11px] font-bold px-2 py-1 rounded mb-4"
                style={{
                  background: UI.orangeDim,
                  color: UI.orange,
                }}
              >
                01 — NODE HOMEPAGE
              </div>
              <h2
                className="text-2xl font-bold mb-4"
                style={{ color: UI.textPrimary }}
              >
                Your Personal Corner of the Decentralized Web
              </h2>
              <p className="text-sm mb-4" style={{ color: UI.textSecondary }}>
                Every user runs their own node — a personal server that stores
                content, manages identity, and connects to the network. No
                platform owns your data. No algorithm controls your reach.
              </p>
              <div
                className="p-3 rounded-lg border-l-2"
                style={{
                  background: UI.cardBg,
                  borderColor: UI.orange,
                }}
              >
                <p className="text-xs" style={{ color: UI.textSecondary }}>
                  <strong style={{ color: UI.textPrimary }}>
                    Key insight:
                  </strong>{" "}
                  Your node is your identity. Move it, back it up, or run
                  multiple — it&apos;s all under your control.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="py-16" style={{ background: "rgba(26,26,26,0.4)" }}>
          <div className="container-custom">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true, margin: "-60px" }}
                className="md:order-1"
              >
                <div
                  className="inline-block text-[11px] font-bold px-2 py-1 rounded mb-4"
                  style={{
                    background: UI.orangeDim,
                    color: UI.orange,
                  }}
                >
                  02 — CONNECT WALLET
                </div>
                <h2
                  className="text-2xl font-bold mb-4"
                  style={{ color: UI.textPrimary }}
                >
                  Connect Your Ethereum Wallet
                </h2>
                <p className="text-sm mb-4" style={{ color: UI.textSecondary }}>
                  No passwords. No email verification. Your Ethereum wallet is
                  your identity. Connect once and you&apos;re ready to interact
                  with any epress node.
                </p>
                <div
                  className="p-3 rounded-lg border-l-2"
                  style={{
                    background: UI.cardBg,
                    borderColor: UI.orange,
                  }}
                >
                  <p className="text-xs" style={{ color: UI.textSecondary }}>
                    <strong style={{ color: UI.textPrimary }}>
                      Key insight:
                    </strong>{" "}
                    Wallet connection is the first step — your address becomes
                    your universal identity across the network.
                  </p>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55 }}
                viewport={{ once: true, margin: "-60px" }}
                className="md:order-2"
              >
                <Act2WalletConnectAnimation />
              </motion.div>
            </div>
          </div>
        </section>

        <section className="container-custom py-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55 }}
              viewport={{ once: true, margin: "-60px" }}
            >
              <Act3SignInAnimation />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true, margin: "-60px" }}
            >
              <div
                className="inline-block text-[11px] font-bold px-2 py-1 rounded mb-4"
                style={{
                  background: UI.orangeDim,
                  color: UI.orange,
                }}
              >
                03 — SIGN IN
              </div>
              <h2
                className="text-2xl font-bold mb-4"
                style={{ color: UI.textPrimary }}
              >
                Sign In With Your Wallet
              </h2>
              <p className="text-sm mb-4" style={{ color: UI.textSecondary }}>
                No passwords. No email verification. Your Ethereum wallet is
                your identity. Sign a message to prove ownership — that&apos;s
                it. Your node recognizes you instantly.
              </p>
              <div
                className="p-3 rounded-lg border-l-2"
                style={{
                  background: UI.cardBg,
                  borderColor: UI.orange,
                }}
              >
                <p className="text-xs" style={{ color: UI.textSecondary }}>
                  <strong style={{ color: UI.textPrimary }}>
                    Key insight:
                  </strong>{" "}
                  This is EIP-4361 (Sign-In with Ethereum) — the standard for
                  wallet-based authentication.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="py-16" style={{ background: "rgba(26,26,26,0.4)" }}>
          <div className="container-custom">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true, margin: "-60px" }}
                className="md:order-1"
              >
                <div
                  className="inline-block text-[11px] font-bold px-2 py-1 rounded mb-4"
                  style={{
                    background: UI.orangeDim,
                    color: UI.orange,
                  }}
                >
                  04 — PUBLISH
                </div>
                <h2
                  className="text-2xl font-bold mb-4"
                  style={{ color: UI.textPrimary }}
                >
                  Publish First. Sign to Broadcast.
                </h2>
                <p className="text-sm mb-4" style={{ color: UI.textSecondary }}>
                  Publishing a post makes it available on your node like a
                  traditional blog — anyone with your URL can read it. But it
                  won&apos;t appear in your followers&apos; timelines until you
                  sign it. Signing generates a Proof of Source and broadcasts
                  the post to the entire network.
                </p>
                <div
                  className="p-3 rounded-lg border-l-2"
                  style={{
                    background: UI.cardBg,
                    borderColor: UI.orange,
                  }}
                >
                  <p className="text-xs" style={{ color: UI.textSecondary }}>
                    <strong style={{ color: UI.textPrimary }}>
                      Key insight:
                    </strong>{" "}
                    The grey &apos;SIGNED&apos; badge means published but not
                    yet broadcast. Click it, sign with your wallet, and it turns
                    green — meaning every node that follows you now has a
                    verified copy.
                  </p>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55 }}
                viewport={{ once: true, margin: "-60px" }}
                className="md:order-2"
              >
                <Act4PublishAnimation />
              </motion.div>
            </div>
          </div>
        </section>

        <section className="container-custom py-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55 }}
              viewport={{ once: true, margin: "-60px" }}
            >
              <Act5FollowAnimation />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true, margin: "-60px" }}
            >
              <div
                className="inline-block text-[11px] font-bold px-2 py-1 rounded mb-4"
                style={{
                  background: UI.orangeDim,
                  color: UI.orange,
                }}
              >
                05 — FOLLOW
              </div>
              <h2
                className="text-2xl font-bold mb-4"
                style={{ color: UI.textPrimary }}
              >
                Follow Other Nodes Directly
              </h2>
              <p className="text-sm mb-4" style={{ color: UI.textSecondary }}>
                Following is a direct connection between nodes. No central
                server tracks your follows. You subscribe to another node&apos;s
                content feed, and they notify you when something new is
                published.
              </p>
              <div
                className="p-3 rounded-lg border-l-2"
                style={{
                  background: UI.cardBg,
                  borderColor: UI.orange,
                }}
              >
                <p className="text-xs" style={{ color: UI.textSecondary }}>
                  <strong style={{ color: UI.textPrimary }}>
                    Key insight:
                  </strong>{" "}
                  Following creates a verified relationship — you know exactly
                  whose content you&apos;re receiving.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="py-16" style={{ background: "rgba(26,26,26,0.4)" }}>
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55 }}
              viewport={{ once: true, margin: "-60px" }}
              className="mb-8"
            >
              <div
                className="inline-block text-[11px] font-bold px-2 py-1 rounded mb-4"
                style={{
                  background: UI.orangeDim,
                  color: UI.orange,
                }}
              >
                06 — TIMELINE
              </div>
              <h2
                className="text-2xl font-bold mb-4"
                style={{ color: UI.textPrimary }}
              >
                Your Timeline, Your Rules
              </h2>
              <p
                className="text-sm max-w-2xl"
                style={{ color: UI.textSecondary }}
              >
                A clean timeline showing only what you chose to follow. Each
                post is signed by its author, so you always know the source. No
                algorithmic manipulation, no sponsored content.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true, margin: "-60px" }}
            >
              <Act6TimelineView />
            </motion.div>
          </div>
        </section>

        <section className="container-custom py-24 text-center">
          <h2
            className="text-3xl font-bold mb-2"
            style={{ color: UI.textPrimary }}
          >
            Ready to Run Your Own Node?
          </h2>
          <p
            className="text-sm mb-8 max-w-lg mx-auto"
            style={{ color: UI.textSecondary }}
          >
            Everything you just saw runs on your own server. One command to
            install.
          </p>

          <div
            className="max-w-lg mx-auto mb-8 text-left rounded-lg overflow-hidden"
            style={{
              background: UI.cardBg,
              border: `1px solid ${UI.border}`,
            }}
          >
            <div
              className="px-3 py-2 text-[10px] font-medium"
              style={{
                background: UI.inputBg,
                borderBottom: `1px solid ${UI.border}`,
                color: UI.textMuted,
              }}
            >
              Terminal
            </div>
            <pre
              className="p-4 text-[12px] font-mono overflow-x-auto"
              style={{ color: UI.textPrimary }}
            >
              <span style={{ color: UI.textMuted }}>$ </span>
              <span style={{ color: UI.textMuted }}>
                # Install epress on your server
              </span>
              {"\n\n"}
              <span style={{ color: UI.textMuted }}>$ </span>
              curl -fsSL https://epress.world/install.sh | bash
            </pre>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <Link href="/docs/getting-started" className="btn-primary">
              Deploy Your Node →
            </Link>
            <button type="button" className="btn-secondary">
              Request a Trial Node
            </button>
          </div>

          <div
            className="flex items-center justify-center gap-6 text-sm"
            style={{ color: UI.textMuted }}
          >
            <a
              href="https://blog.epress.world"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors underline"
            >
              Read the Blog
            </a>
            <span>•</span>
            <Link
              href="/whitepaper"
              className="hover:text-primary transition-colors underline"
            >
              Read the Whitepaper
            </Link>
          </div>
        </section>
      </main>

      <SiteFooter />

      <style jsx global>{`
        @keyframes feat-cursor-blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }
        @keyframes feat-spinner {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @media (prefers-reduced-motion: reduce) {
          * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </div>
  )
}

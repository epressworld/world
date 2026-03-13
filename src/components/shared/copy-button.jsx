"use client"

import { Check, Copy } from "lucide-react"
import { useState } from "react"

export function CopyButton({ text, className = "" }) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    await navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <button
      type="button"
      onClick={handleCopy}
      className={`shrink-0 rounded-lg border border-dark-border bg-dark-surface p-2 transition-colors hover:bg-dark-surface/80 ${className}`}
      aria-label="Copy command"
    >
      {copied ? (
        <Check className="h-4 w-4 text-green-500" />
      ) : (
        <Copy className="h-4 w-4 text-dark-muted" />
      )}
    </button>
  )
}

export function CopyableCode({ code, className = "" }) {
  return (
    <div
      className={`rounded-xl border border-dark-border bg-dark-bg p-4 ${className}`}
    >
      <div className="flex items-center justify-between gap-4">
        <code className="flex-1 overflow-x-auto font-mono text-sm text-primary">
          {code}
        </code>
        <CopyButton text={code} />
      </div>
    </div>
  )
}

export function CopyableCodeBlock({ code, className = "" }) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className={`relative group ${className}`}>
      <pre className="overflow-x-auto rounded-lg border border-dark-border bg-dark-bg p-4 text-primary">
        <code>{code}</code>
      </pre>
      <button
        type="button"
        onClick={handleCopy}
        className="absolute right-2 top-2 rounded bg-dark-surface/90 px-2 py-1 text-xs text-gray-400 opacity-0 transition-opacity hover:text-white group-hover:opacity-100"
      >
        {copied ? "Copied!" : "Copy"}
      </button>
    </div>
  )
}

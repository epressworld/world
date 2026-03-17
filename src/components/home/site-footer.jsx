import { Github, Send } from "lucide-react"
import Image from "next/image"

export function SiteFooter() {
  return (
    <footer className="border-t border-dark-border py-8">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col items-center md:items-start gap-3">
            <div className="flex items-center gap-2">
              <Image
                src="/icon.svg"
                alt="epress"
                width={24}
                height={24}
                className="w-6 h-6"
              />
              <span className="text-sm text-dark-muted">© 2026 epress</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-dark-muted">
              <span className="px-2 py-1 rounded bg-dark-surface border border-dark-border">
                Open Source
              </span>
              <span className="px-2 py-1 rounded bg-dark-surface border border-dark-border">
                MIT License
              </span>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-6">
            <a
              href="https://github.com/epressworld/epress"
              target="_blank"
              rel="noopener noreferrer"
              className="text-dark-muted hover:text-dark-text transition-colors flex items-center gap-1"
            >
              <Github className="w-4 h-4" />
              GitHub
            </a>
            <a
              href="https://t.me/+mZMgNSIVy1MwMmVl"
              target="_blank"
              rel="noopener noreferrer"
              className="text-dark-muted hover:text-dark-text transition-colors flex items-center gap-1"
            >
              <Send className="w-4 h-4" />
              Telegram
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

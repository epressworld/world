"use client"

import { Github, Menu, X } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

const NAV_LINKS = [
  { href: "/vision", label: "Vision" },
  { href: "/docs", label: "How It Works" },
  { href: "/whitepaper", label: "Whitepaper" },
  { href: "/docs", label: "Docs" },
  { href: "https://blog.epress.world", label: "Blog", external: true },
]

export function SiteNav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-dark-border bg-dark-bg/80 backdrop-blur-md">
      <nav className="container-custom flex items-center justify-between h-16">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo-light.svg"
            alt="epress"
            width={120}
            height={32}
            className="h-8 w-auto"
          />
        </Link>

        <div className="hidden md:flex items-center gap-6">
          {NAV_LINKS.map((link) =>
            link.external ? (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost"
              >
                {link.label}
              </a>
            ) : (
              <Link key={link.label} href={link.href} className="btn-ghost">
                {link.label}
              </Link>
            ),
          )}
          <a
            href="https://github.com/epressworld/epress"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost"
          >
            <Github className="w-5 h-5" />
          </a>
        </div>

        <button
          type="button"
          className="md:hidden btn-ghost p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <X className="w-5 h-5" />
          ) : (
            <Menu className="w-5 h-5" />
          )}
        </button>
      </nav>

      {mobileMenuOpen && (
        <div className="md:hidden border-t border-dark-border bg-dark-bg/95 backdrop-blur-md">
          <div className="container-custom py-4 flex flex-col gap-2">
            {NAV_LINKS.map((link) =>
              link.external ? (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ghost justify-start"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.label}
                  href={link.href}
                  className="btn-ghost justify-start"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ),
            )}
            <a
              href="https://github.com/epressworld/epress"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost justify-start gap-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              <Github className="w-5 h-5" />
              GitHub
            </a>
          </div>
        </div>
      )}
    </header>
  )
}

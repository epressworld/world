"use client"

import { AnimatePresence, motion } from "framer-motion"
import { ChevronDown, Github, Menu, X } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useRef, useState } from "react"

const NAV_LINKS = [
  { href: "/whitepaper", label: "Whitepaper" },
  { href: "/docs", label: "Docs" },
  { href: "https://blog.epress.world", label: "Blog", external: true },
]

const EXPLORE_MENU_ITEMS = [
  {
    href: "/vision",
    label: "Vision",
    description: "The future this network makes possible",
  },
  {
    href: "/how-it-works",
    label: "How It Works",
    description: "The protocol and architecture explained",
  },
  {
    href: "/ecosystem",
    label: "Ecosystem",
    description: "The economic case for self-hosting at scale",
  },
  {
    href: "/features",
    label: "Features",
    description: "What epress can do today",
    badge: "soon",
    disabled: true,
  },
]

function ExploreMenuItem({
  href,
  label,
  description,
  badge,
  disabled,
  onClick,
}) {
  const pathname = usePathname()
  const isActive = pathname === href

  const content = (
    <div
      className={`
        flex items-start gap-3 px-3 py-2.5 rounded-lg transition-colors duration-150
        ${disabled ? "opacity-45 cursor-default" : "cursor-pointer hover:bg-white/5"}
        ${isActive && !disabled ? "bg-white/5" : ""}
      `}
      aria-disabled={disabled}
    >
      <span
        className={`
          text-[8px] mt-1 flex-shrink-0
          ${isActive && !disabled ? "text-primary" : "text-primary/70"}
        `}
      >
        ◆
      </span>
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2">
          <span
            className={`
              text-[13px] font-semibold leading-tight
              ${isActive && !disabled ? "text-white" : "text-white/85"}
            `}
          >
            {label}
          </span>
          {badge && (
            <span className="text-[9px] font-bold tracking-wide uppercase text-white/35 bg-white/[0.06] border border-white/10 px-1.5 py-0.5 rounded">
              {badge}
            </span>
          )}
        </div>
        <p className="text-[11px] text-white/35 leading-snug mt-0.5">
          {description}
        </p>
      </div>
    </div>
  )

  if (disabled) {
    return content
  }

  return (
    <Link href={href} onClick={onClick}>
      {content}
    </Link>
  )
}

function ExploreMenu({ onItemClick }) {
  const [open, setOpen] = useState(false)
  const menuRef = useRef(null)

  useEffect(() => {
    function handleClick(e) {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClick)
    return () => document.removeEventListener("mousedown", handleClick)
  }, [])

  useEffect(() => {
    function handleKey(e) {
      if (e.key === "Escape") setOpen(false)
    }
    document.addEventListener("keydown", handleKey)
    return () => document.removeEventListener("keydown", handleKey)
  }, [])

  return (
    <div ref={menuRef} className="relative inline-block">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-haspopup="menu"
        aria-controls="explore-dropdown-menu"
        className="inline-flex items-center gap-1 font-medium text-dark-muted transition-colors hover:text-dark-text"
      >
        Explore
        <ChevronDown
          className={`w-3.5 h-3.5 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            id="explore-dropdown-menu"
            role="menu"
            initial={{ opacity: 0, y: -8, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.97 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            className="absolute top-[calc(100%+10px)] left-0 w-[260px] bg-[#0f0f0f] border border-white/[0.09] rounded-[14px] p-2 shadow-[0_16px_48px_rgba(0,0,0,0.5),0_0_0_1px_rgba(255,255,255,0.04)] z-[1000] overflow-hidden"
          >
            {EXPLORE_MENU_ITEMS.map((item) => (
              <ExploreMenuItem
                key={item.href}
                {...item}
                onClick={() => {
                  setOpen(false)
                  onItemClick?.()
                }}
              />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

function MobileExploreItem({ href, label, description, disabled, onClick }) {
  const pathname = usePathname()
  const isActive = pathname === href

  const content = (
    <div
      className={`
        flex items-start gap-2.5 py-2.5
        ${disabled ? "opacity-40 pointer-events-none" : ""}
        ${isActive && !disabled ? "text-white" : ""}
      `}
    >
      <span
        className={`
          w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0
          ${isActive && !disabled ? "bg-primary" : "bg-primary/70"}
        `}
      />
      <div className="flex-1 min-w-0">
        <span
          className={`
            text-sm font-medium block
            ${isActive && !disabled ? "text-white" : "text-white/75"}
          `}
        >
          {label}
        </span>
        <p className="text-[11px] text-white/30 mt-0.5">{description}</p>
      </div>
    </div>
  )

  if (disabled) {
    return content
  }

  return (
    <Link href={href} onClick={onClick}>
      {content}
    </Link>
  )
}

export function SiteNav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [exploreOpen, setExploreOpen] = useState(false)

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
          <ExploreMenu />
          {NAV_LINKS.map((link) =>
            link.external ? (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-dark-muted transition-colors hover:text-dark-text"
              >
                {link.label}
              </a>
            ) : (
              <Link
                key={link.label}
                href={link.href}
                className="font-medium text-dark-muted transition-colors hover:text-dark-text"
              >
                {link.label}
              </Link>
            ),
          )}
          <a
            href="https://github.com/epressworld/epress"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-dark-muted transition-colors hover:text-dark-text"
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
          <div className="container-custom py-4 flex flex-col gap-1">
            <div className="border-b border-white/[0.04] pb-2 mb-1">
              <button
                type="button"
                onClick={() => setExploreOpen(!exploreOpen)}
                className="flex items-center justify-between w-full py-2 text-left"
              >
                <span className="font-medium text-dark-muted hover:text-dark-text transition-colors">
                  Explore
                </span>
                <ChevronDown
                  className={`w-4 h-4 text-dark-muted transition-transform duration-200 ${exploreOpen ? "rotate-180" : ""}`}
                />
              </button>
              <AnimatePresence>
                {exploreOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.22, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="pl-5 pt-2 flex flex-col gap-1">
                      {EXPLORE_MENU_ITEMS.map((item, index) => (
                        <div key={item.href}>
                          {index > 0 && (
                            <div className="border-t border-white/[0.04] my-1" />
                          )}
                          <MobileExploreItem
                            {...item}
                            onClick={() => setMobileMenuOpen(false)}
                          />
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
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

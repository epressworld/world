import Link from "next/link";
import Image from "next/image";
import { Github, Terminal, ArrowDown } from "lucide-react";
import { ComparisonSvg } from "@/components/svgs";
import { ConceptSections } from "@/components/concept-sections";

function AgentNetworkSvg() {
  return (
    <svg viewBox="0 0 920 340" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
      <defs>
        <linearGradient id="agentCore" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#2e1d0a" />
          <stop offset="100%" stopColor="#171717" />
        </linearGradient>
      </defs>
      <rect width="920" height="340" rx="18" fill="#0f0f0f" />

      <circle cx="460" cy="170" r="64" fill="url(#agentCore)" stroke="#F7931A" strokeWidth="2.5" />
      <text x="460" y="164" textAnchor="middle" fill="#FBBF24" fontSize="15" fontWeight="700">Your Node</text>
      <text x="460" y="184" textAnchor="middle" fill="#FDE68A" fontSize="11">Social Agent</text>

      <rect x="120" y="64" width="182" height="82" rx="12" fill="#151515" stroke="#3a3a3a" />
      <text x="211" y="95" textAnchor="middle" fill="#E5E7EB" fontSize="12" fontWeight="600">Connect</text>
      <text x="211" y="116" textAnchor="middle" fill="#9CA3AF" fontSize="10">Mutual follow handshake</text>

      <rect x="120" y="194" width="182" height="82" rx="12" fill="#151515" stroke="#3a3a3a" />
      <text x="211" y="225" textAnchor="middle" fill="#E5E7EB" fontSize="12" fontWeight="600">Store</text>
      <text x="211" y="246" textAnchor="middle" fill="#9CA3AF" fontSize="10">Your posts + social graph</text>

      <rect x="618" y="64" width="182" height="82" rx="12" fill="#151515" stroke="#3a3a3a" />
      <text x="709" y="95" textAnchor="middle" fill="#E5E7EB" fontSize="12" fontWeight="600">Publish</text>
      <text x="709" y="116" textAnchor="middle" fill="#9CA3AF" fontSize="10">Signed content (PoS)</text>

      <rect x="618" y="194" width="182" height="82" rx="12" fill="#151515" stroke="#3a3a3a" />
      <text x="709" y="225" textAnchor="middle" fill="#E5E7EB" fontSize="12" fontWeight="600">AI Interface</text>
      <text x="709" y="246" textAnchor="middle" fill="#9CA3AF" fontSize="10">Agent-driven social actions</text>

      <path d="M302 105 L396 149" stroke="#F7931A" strokeWidth="2" />
      <polygon points="396,149 386,141 383,153" fill="#F7931A" />
      <path d="M302 235 L396 191" stroke="#F7931A" strokeWidth="2" />
      <polygon points="396,191 383,187 388,199" fill="#F7931A" />
      <path d="M524 149 L618 105" stroke="#F7931A" strokeWidth="2" />
      <polygon points="618,105 608,112 613,124" fill="#F7931A" />
      <path d="M524 191 L618 235" stroke="#F7931A" strokeWidth="2" />
      <polygon points="618,235 605,230 610,242" fill="#F7931A" />

      <circle cx="842" cy="100" r="30" fill="#121f16" stroke="#34D399" />
      <text x="842" y="105" textAnchor="middle" fill="#6EE7B7" fontSize="10">User A</text>
      <circle cx="842" cy="238" r="30" fill="#122031" stroke="#60A5FA" />
      <text x="842" y="243" textAnchor="middle" fill="#93C5FD" fontSize="10">User B</text>

      <path d="M800 100 L812 100" stroke="#6EE7B7" strokeWidth="2" />
      <path d="M800 238 L812 238" stroke="#93C5FD" strokeWidth="2" />
    </svg>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="border-b border-dark-border">
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
            <Link href="/docs" className="btn-ghost">
              Docs
            </Link>
            <Link href="/whitepaper" className="btn-ghost">
              Whitepaper
            </Link>
            <Link href="/community" className="btn-ghost">
              Community
            </Link>
            <Link href="/download" className="btn-ghost">
              Download
            </Link>
            <a
              href="https://github.com/epressworld/epress"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost"
            >
              <Github className="w-5 h-5" />
            </a>
          </div>

          <div className="flex items-center gap-3 md:hidden">
            <Link href="/docs" className="btn-ghost px-3">
              Docs
            </Link>
            <Link href="/whitepaper" className="btn-ghost px-3">
              Whitepaper
            </Link>
          </div>
        </nav>
      </header>

      <main className="flex-1">
        <section className="relative py-32 text-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="/hero-bg.svg"
              alt=""
              fill
              className="object-cover opacity-40"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-dark-bg/60 via-transparent to-dark-bg/60" />
          </div>
          <div className="container-custom relative z-10">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
              <span className="bg-gradient-to-r from-primary to-orange-400 bg-clip-text text-transparent">
                Your Social Network Agent
              </span>
              <br />
              in the AI & Decentralized Era
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
              A truly decentralized social network built on self-hosting.
              Your data, your identity, your rules - take back your digital sovereignty.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/docs/getting-started" className="btn-primary">
                <Terminal className="w-5 h-5 mr-2" />
                Get Started
              </Link>
              <a
                href="https://github.com/epressworld/epress"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                <Github className="w-5 h-5 mr-2" />
                View on GitHub
              </a>
            </div>
            <div className="mt-4">
              <Link href="/whitepaper" className="text-sm text-primary hover:text-primary-300 transition-colors">
                Read the Whitepaper
              </Link>
            </div>
            <Link
              href="#learn-more"
              className="inline-flex items-center gap-2 mt-6 text-gray-400 hover:text-primary transition-colors"
            >
              <ArrowDown className="w-4 h-4" />
              Learn More
            </Link>
          </div>
        </section>

        <section id="learn-more" className="py-20">
          <div className="container-custom">
            <h2 className="text-3xl font-bold text-center mb-4">What is epress?</h2>
            <p className="text-lg text-gray-400 text-center max-w-3xl mx-auto mb-12">
              epress gives you a personal social node you control, then connects it to an open network.
              It keeps the ease of social publishing, but replaces platform trust with cryptographic proof.
            </p>

            <ComparisonSvg />

            <div className="mt-10 rounded-2xl border border-dark-border bg-dark-surface/70 p-6">
              <h3 className="text-2xl font-bold mb-3 text-center">Your Node Is Your Social Agent</h3>
              <div className="rounded-xl border border-dark-border bg-dark-bg/60 p-3 md:p-4">
                <AgentNetworkSvg />
              </div>
              <p className="mt-4 text-gray-300 text-center max-w-3xl mx-auto">
                In the AI era, this node works as your personal social agent: it connects, stores, and publishes for you on an open network.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 bg-dark-surface">
          <div className="container-custom">
            <h2 className="text-3xl font-bold text-center mb-4">5 Core Concepts</h2>
            <p className="text-gray-400 text-center mb-10 max-w-3xl mx-auto">
              Simple visuals of how epress works.
            </p>
            <ConceptSections />
          </div>
        </section>
      </main>

      <footer className="border-t border-dark-border py-8">
        <div className="container-custom flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Image
              src="/logo-light.svg"
              alt="epress"
              width={24}
              height={24}
              className="w-6 h-6"
            />
            <span className="text-sm text-dark-muted">© 2026 epress</span>
          </div>
          <div className="flex gap-6">
            <a href="https://github.com/epressworld/epress" className="text-dark-muted hover:text-dark-text transition-colors">
              GitHub
            </a>
            <Link href="/whitepaper" className="text-dark-muted hover:text-dark-text transition-colors">
              Whitepaper
            </Link>
            <Link href="/docs" className="text-dark-muted hover:text-dark-text transition-colors">
              Docs
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

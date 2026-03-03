import Link from "next/link";
import Image from "next/image";
import { Github, Terminal } from "lucide-react";
import { ComparisonSvg } from "@/components/svgs";
import { ConceptSections } from "@/components/concept-sections";

function BeforeEraSvg() {
  return (
    <svg viewBox="0 0 340 180" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
      <rect width="340" height="180" rx="14" fill="#0f0f0f" />
      <circle cx="74" cy="90" r="28" fill="#1f1f1f" stroke="#7dd3fc" strokeWidth="2" />
      <text x="74" y="95" textAnchor="middle" fill="#bae6fd" fontSize="10">Person</text>
      <path d="M102 90 L144 90" stroke="#7dd3fc" strokeWidth="2" />
      <polygon points="144,90 134,84 134,96" fill="#7dd3fc" />
      <rect x="144" y="52" width="128" height="76" rx="12" fill="#161616" stroke="#3b3b3b" />
      <text x="208" y="81" textAnchor="middle" fill="#d4d4d8" fontSize="10">Centralized Platform</text>
      <rect x="172" y="92" width="72" height="20" rx="6" fill="#222" />
      <text x="208" y="106" textAnchor="middle" fill="#a1a1aa" fontSize="9">Account</text>
      <text x="170" y="146" fill="#71717a" fontSize="9">Identity depends on platform account</text>
    </svg>
  );
}

function NodeEraSvg() {
  return (
    <svg viewBox="0 0 340 180" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
      <rect width="340" height="180" rx="14" fill="#0f0f0f" />
      <rect x="48" y="38" width="150" height="104" rx="12" fill="#171717" stroke="#3b3b3b" />
      <rect x="60" y="52" width="126" height="14" rx="5" fill="#222" />
      <rect x="60" y="75" width="86" height="12" rx="4" fill="#2d2d2d" />
      <rect x="60" y="94" width="124" height="10" rx="4" fill="#262626" />
      <rect x="60" y="110" width="106" height="10" rx="4" fill="#262626" />
      <text x="123" y="135" textAnchor="middle" fill="#fbbf24" fontSize="9">your-node.site</text>
      <circle cx="256" cy="90" r="30" fill="#1f1f1f" stroke="#f7931a" strokeWidth="2" />
      <text x="256" y="86" textAnchor="middle" fill="#fbbf24" fontSize="9">Your</text>
      <text x="256" y="100" textAnchor="middle" fill="#fbbf24" fontSize="9">Identity</text>
      <path d="M198 90 L226 90" stroke="#f7931a" strokeWidth="2" />
      <polygon points="226,90 216,84 216,96" fill="#f7931a" />
      <text x="56" y="159" fill="#71717a" fontSize="9">Self-hosted node becomes your social presence</text>
    </svg>
  );
}

function AIAgentEraSvg() {
  return (
    <svg viewBox="0 0 340 180" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
      <rect width="340" height="180" rx="14" fill="#0f0f0f" />
      <circle cx="82" cy="90" r="24" fill="#1c1c1c" stroke="#60a5fa" strokeWidth="2" />
      <text x="82" y="95" textAnchor="middle" fill="#93c5fd" fontSize="10">You</text>
      <rect x="134" y="60" width="80" height="60" rx="10" fill="#1a130a" stroke="#f7931a" />
      <text x="174" y="84" textAnchor="middle" fill="#fbbf24" fontSize="9">epress</text>
      <text x="174" y="98" textAnchor="middle" fill="#fbbf24" fontSize="9">Node</text>
      <rect x="244" y="46" width="64" height="34" rx="8" fill="#10281a" stroke="#34d399" />
      <text x="276" y="67" textAnchor="middle" fill="#6ee7b7" fontSize="9">AI Agent</text>
      <rect x="244" y="98" width="64" height="34" rx="8" fill="#0f2238" stroke="#60a5fa" />
      <text x="276" y="119" textAnchor="middle" fill="#93c5fd" fontSize="9">APIs</text>
      <path d="M106 90 L134 90" stroke="#f7931a" strokeWidth="2" />
      <polygon points="134,90 124,84 124,96" fill="#f7931a" />
      <path d="M214 78 L244 63" stroke="#34d399" strokeWidth="2" />
      <polygon points="244,63 233,61 238,71" fill="#34d399" />
      <path d="M214 102 L244 115" stroke="#60a5fa" strokeWidth="2" />
      <polygon points="244,115 233,107 229,117" fill="#60a5fa" />
      <text x="38" y="159" fill="#71717a" fontSize="9">AI can operate your social interactions via open interfaces</text>
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
              Your self-hosted epress node is your social agent:
              it connects, stores, and publishes for you on an open network,
              and plugs directly into your AI workflows.
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
          </div>
        </section>

        <section id="why-agent" className="py-14 border-t border-dark-border bg-dark-surface/40">
          <div className="container-custom">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-3">Why “Social Network Agent”</h2>
            <p className="text-gray-400 text-center max-w-3xl mx-auto mb-8">
              The role shifts from platform account to self-hosted agent.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              <article className="rounded-xl border border-dark-border bg-dark-bg/70 p-4">
                <div className="rounded-lg border border-dark-border bg-dark-surface/60 p-2 mb-3">
                  <BeforeEraSvg />
                </div>
                <h3 className="font-semibold mb-1">Before</h3>
                <p className="text-sm text-gray-400">One person, one platform account. Identity is controlled by the platform.</p>
              </article>
              <article className="rounded-xl border border-dark-border bg-dark-bg/70 p-4">
                <div className="rounded-lg border border-dark-border bg-dark-surface/60 p-2 mb-3">
                  <NodeEraSvg />
                </div>
                <h3 className="font-semibold mb-1">Now</h3>
                <p className="text-sm text-gray-400">One person, one self-hosted node. Identity and data are controlled by you.</p>
              </article>
              <article className="rounded-xl border border-dark-border bg-dark-bg/70 p-4">
                <div className="rounded-lg border border-dark-border bg-dark-surface/60 p-2 mb-3">
                  <AIAgentEraSvg />
                </div>
                <h3 className="font-semibold mb-1">AI Era</h3>
                <p className="text-sm text-gray-400">Your node becomes a programmable social interface for your own AI agent.</p>
              </article>
            </div>
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
              <h3 className="text-xl md:text-2xl font-bold text-center mb-3">Run Your Node in One Command</h3>
              <p className="text-gray-400 text-center max-w-3xl mx-auto mb-5">
                Start a self-hosted epress node with Docker.
              </p>
              <div className="rounded-xl border border-dark-border bg-dark-bg p-4 overflow-x-auto">
                <code className="text-primary text-sm break-all">
                  docker run -d -p 8543:8543 -p 8544:8544 -v epress-data:/app/data --name my-epress-node ghcr.io/epressworld/epress
                </code>
              </div>
            </div>
          </div>
        </section>

        <section id="core-concepts" className="py-20 bg-dark-surface">
          <div className="container-custom">
            <h2 className="text-3xl font-bold text-center mb-4">How Your Social Agent Works</h2>
            <p className="text-gray-400 text-center mb-10 max-w-3xl mx-auto">
              Five mechanisms turn this idea into a working epress network.
            </p>
            <ConceptSections />
          </div>
        </section>
      </main>

      <footer className="border-t border-dark-border py-8">
        <div className="container-custom flex flex-col md:flex-row items-center justify-between gap-4">
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

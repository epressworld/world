import Link from "next/link";
import Image from "next/image";
import { Github, Terminal, ArrowDown } from "lucide-react";
import { ComparisonSvg } from "@/components/svgs";
import { ConceptSections } from "@/components/concept-sections";

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
          
          <div className="flex items-center gap-6">
            <Link href="/docs" className="btn-ghost">
              Docs
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
        </nav>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
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
              Your data, your identity, your rules — take back your digital sovereignty.
            </p>
            <div className="flex gap-4 justify-center">
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
            <Link 
              href="#learn-more" 
              className="inline-flex items-center gap-2 mt-6 text-gray-400 hover:text-primary transition-colors"
            >
              <ArrowDown className="w-4 h-4" />
              Learn More
            </Link>
          </div>
        </section>

        {/* Section 1: What is epress? */}
        <section id="learn-more" className="py-20">
          <div className="container-custom">
            <h2 className="text-3xl font-bold text-center mb-4">What is epress?</h2>
            <p className="text-lg text-gray-400 text-center max-w-2xl mx-auto mb-12">
              epress is a decentralized social network where you own your data, 
              control your identity, and host your own content. No platform can ban you — 
              you are the platform.
            </p>
            
            <ComparisonSvg />
          </div>
        </section>

        {/* Section 2: Core Concepts */}
        <section className="py-20 bg-dark-surface">
          <div className="container-custom">
            <h2 className="text-3xl font-bold text-center mb-4">Core Concepts</h2>
            <p className="text-gray-400 text-center mb-8">
              Click each concept to learn how it works
            </p>
            <ConceptSections />
          </div>
        </section>

        {/* Section 3: For Developers */}
        <section className="py-20">
          <div className="container-custom text-center">
            <h2 className="text-3xl font-bold mb-4">For Developers</h2>
            <p className="text-gray-400 max-w-xl mx-auto mb-8">
              Built on the open <span className="text-primary">EWP Protocol</span>. 
              Integrate, extend, or build your own client. The network is yours to shape.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto mb-10">
              <Link href="/docs/getting-started" className="block p-6 bg-dark-surface rounded-lg border border-dark-border hover:border-primary/50 transition-colors">
                <h4 className="font-semibold mb-2">Get Started</h4>
                <p className="text-sm text-gray-500">Run your first node in minutes</p>
              </Link>
              <Link href="/docs/reference/protocol" className="block p-6 bg-dark-surface rounded-lg border border-dark-border hover:border-primary/50 transition-colors">
                <h4 className="font-semibold mb-2">EWP Protocol</h4>
                <p className="text-sm text-gray-500">Technical specification</p>
              </Link>
              <a href="https://github.com/epressworld/epress" target="_blank" rel="noopener noreferrer" className="block p-6 bg-dark-surface rounded-lg border border-dark-border hover:border-primary/50 transition-colors">
                <h4 className="font-semibold mb-2">GitHub</h4>
                <p className="text-sm text-gray-500">Explore the codebase</p>
              </a>
            </div>
            
            <Link href="/docs/getting-started" className="btn-primary inline-flex">
              <Terminal className="w-5 h-5 mr-2" />
              Ready to Dive In?
            </Link>
          </div>
        </section>

        {/* Run Your Node CTA */}
        <section className="py-16 bg-dark-surface">
          <div className="container-custom text-center">
            <h2 className="text-3xl font-bold mb-6">Run Your Own Node</h2>
            <p className="text-gray-400 mb-8 max-w-xl mx-auto">
              Get started with epress in minutes using Docker
            </p>
            <div className="bg-dark-bg rounded-lg p-6 max-w-xl mx-auto border border-dark-border">
              <code className="text-primary font-mono text-sm">
                docker run -d -p 8080:8080 epressworld/epress
              </code>
            </div>
            <div className="mt-8 flex gap-4 justify-center">
              <Link href="/docs/getting-started/installation" className="btn-primary">
                Read the Docs
              </Link>
              <Link href="/download" className="btn-secondary">
                Download
              </Link>
            </div>
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
            <span className="text-sm text-dark-muted">© 2025 epress</span>
          </div>
          <div className="flex gap-6">
            <a href="https://github.com/epressworld/epress" className="text-dark-muted hover:text-dark-text transition-colors">
              GitHub
            </a>
            <a href="#" className="text-dark-muted hover:text-dark-text transition-colors">
              Twitter
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

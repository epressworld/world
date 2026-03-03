import Link from "next/link";
import { DocsSidebar } from "@/components/docs-sidebar";

export const metadata = {
  title: "epress Docs",
  description: "User documentation for installing and using epress.",
};

export default function DocsLayout({ children }) {
  return (
    <div className="min-h-screen bg-dark-bg text-dark-text">
      <header className="border-b border-dark-border">
        <div className="container-custom flex min-h-16 flex-wrap items-center justify-between gap-3 py-2">
          <Link href="/" className="text-sm text-dark-muted hover:text-dark-text">
            Back to Home
          </Link>
          <div className="flex flex-wrap items-center gap-4 text-sm">
            <Link href="/docs/getting-started" className="text-primary hover:text-primary-300">
              User Docs
            </Link>
            <a
              href="https://github.com/epressworld/epress"
              target="_blank"
              rel="noopener noreferrer"
              className="text-dark-muted hover:text-dark-text"
            >
              GitHub
            </a>
          </div>
        </div>
      </header>

      <main className="container-custom py-10">
        <div className="grid gap-8 lg:grid-cols-[260px_minmax(0,1fr)]">
          <aside className="lg:sticky lg:top-8 lg:h-[calc(100vh-4rem)] lg:overflow-auto">
            <DocsSidebar />
          </aside>
          <section className="min-w-0">{children}</section>
        </div>
      </main>
    </div>
  );
}

import Link from "next/link";
import { DocsSidebar } from "@/components/docs-sidebar";
import { DocsPrimaryNav } from "@/components/docs-primary-nav";

export const metadata = {
  title: "epress world Docs",
  description:
    "Documentation for epress world with Node Operator Docs and Developer Docs.",
};

export default function DocsLayout({ children }) {
  return (
    <div className="min-h-screen bg-dark-bg text-dark-text">
      <header className="border-b border-dark-border">
        <div className="container-custom flex min-h-16 flex-wrap items-center justify-between gap-3 py-2">
          <Link href="/" className="text-sm text-dark-muted hover:text-dark-text">
            Back to Home
          </Link>
          <div className="flex flex-wrap items-center gap-3 text-sm">
            <DocsPrimaryNav />
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
        <details className="mb-6 rounded-xl border border-dark-border bg-dark-surface/70 p-4 lg:hidden">
          <summary className="cursor-pointer text-sm font-semibold text-white">
            Page Navigation
          </summary>
          <div className="mt-4">
            <DocsSidebar />
          </div>
        </details>

        <div className="grid gap-8 lg:grid-cols-[260px_minmax(0,1fr)]">
          <aside className="hidden lg:sticky lg:top-8 lg:block lg:self-start">
            <DocsSidebar />
          </aside>
          <section className="min-w-0">{children}</section>
        </div>
      </main>
    </div>
  );
}

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { userDocsNav } from "@/app/docs/config";

export function DocsSidebar() {
  const pathname = usePathname();

  return (
    <div className="space-y-6">
      <div className="rounded-xl border border-dark-border bg-dark-surface/70 p-4">
        <p className="mb-3 text-sm font-semibold text-white">User Docs</p>
        <nav className="space-y-1">
          {userDocsNav.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`block rounded-lg px-3 py-2 text-sm transition-colors ${active ? "bg-primary/15 text-primary border border-primary/35" : "text-dark-muted hover:bg-dark-bg hover:text-dark-text border border-transparent"}`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>

      <div className="rounded-xl border border-dark-border bg-dark-surface/70 p-4">
        <p className="text-sm font-semibold text-white">Developer Docs</p>
        <p className="mt-2 text-sm text-dark-muted">Coming next: setup, configuration, and API references.</p>
      </div>
    </div>
  );
}

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function DocsPrimaryNav() {
  const pathname = usePathname();
  const isDeveloper = pathname.startsWith("/docs/developer");

  return (
    <div className="flex items-center gap-2 rounded-lg border border-dark-border bg-dark-surface/70 p-1">
      <Link
        href="/docs"
        className={`rounded-md px-3 py-1.5 text-sm transition-colors ${!isDeveloper ? "bg-primary/15 text-primary border border-primary/35" : "text-dark-muted hover:text-dark-text"}`}
      >
        Node Operator Docs
      </Link>
      <Link
        href="/docs/developer"
        className={`rounded-md px-3 py-1.5 text-sm transition-colors ${isDeveloper ? "bg-primary/15 text-primary border border-primary/35" : "text-dark-muted hover:text-dark-text"}`}
      >
        Developer Docs
      </Link>
    </div>
  );
}

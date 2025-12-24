"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Github, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";
import { Logo } from "./logo";

const navigation = [
  { name: "Docs", href: "/docs" },
  { name: "API Reference", href: "/api-reference" },
  { name: "Changelog", href: "/changelog" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed left-0 right-0 top-0 z-50">
      <nav className="glass mx-auto flex max-w-7xl items-center justify-between border-b border-border/50 px-6 py-4 lg:px-8">
        {/* Logo */}
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <Logo className="h-8 w-auto" />
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-foreground"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Menu className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        {/* Desktop navigation */}
        <div className="hidden lg:flex lg:gap-x-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-muted transition-colors hover:text-foreground"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-x-4">
          <Link
            href="https://github.com/sagesyn"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm font-medium text-muted transition-colors hover:text-foreground"
          >
            <Github className="h-5 w-5" />
            <span className="sr-only">GitHub</span>
          </Link>
          <Link
            href="/docs/getting-started"
            className="rounded-lg bg-neon-cyan px-4 py-2 text-sm font-semibold text-background transition-all hover:shadow-glow-cyan"
          >
            Get Started
          </Link>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={cn(
          "lg:hidden",
          mobileMenuOpen ? "fixed inset-0 z-50" : "hidden"
        )}
      >
        {/* Backdrop */}
        <div
          className="fixed inset-0 bg-background/80 backdrop-blur-sm"
          onClick={() => setMobileMenuOpen(false)}
        />

        {/* Menu panel */}
        <div className="fixed inset-y-0 right-0 z-50 w-full max-w-sm overflow-y-auto bg-surface px-6 py-6 sm:ring-1 sm:ring-border">
          <div className="flex items-center justify-between">
            <Link href="/" className="-m-1.5 p-1.5">
              <Logo className="h-8 w-auto" />
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-foreground"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <X className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>

          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-border">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold text-foreground hover:bg-surface-elevated"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              <div className="py-6">
                <Link
                  href="https://github.com/sagesyn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="-mx-3 flex items-center gap-2 rounded-lg px-3 py-2 text-base font-semibold text-foreground hover:bg-surface-elevated"
                >
                  <Github className="h-5 w-5" />
                  GitHub
                  <ExternalLink className="h-4 w-4 text-muted" />
                </Link>
                <Link
                  href="/docs/getting-started"
                  className="mt-4 block rounded-lg bg-neon-cyan px-4 py-3 text-center text-sm font-semibold text-background"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

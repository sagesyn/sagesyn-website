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
    <header className="fixed top-0 right-0 left-0 z-50">
      <nav className="glass border-border/50 mx-auto flex max-w-7xl items-center justify-between border-b px-6 py-4 lg:px-8">
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
            className="text-foreground -m-2.5 inline-flex items-center justify-center rounded-md p-2.5"
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
              className="text-muted hover:text-foreground text-sm font-medium transition-colors"
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
            className="text-muted hover:text-foreground flex items-center gap-2 text-sm font-medium transition-colors"
          >
            <Github className="h-5 w-5" />
            <span className="sr-only">GitHub</span>
          </Link>
          <Link
            href="/docs/getting-started"
            className="bg-neon-cyan text-background hover:shadow-glow-cyan rounded-lg px-4 py-2 text-sm font-semibold transition-all"
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
          className="bg-background/80 fixed inset-0 backdrop-blur-sm"
          onClick={() => setMobileMenuOpen(false)}
        />

        {/* Menu panel */}
        <div className="bg-surface sm:ring-border fixed inset-y-0 right-0 z-50 w-full max-w-sm overflow-y-auto px-6 py-6 sm:ring-1">
          <div className="flex items-center justify-between">
            <Link href="/" className="-m-1.5 p-1.5">
              <Logo className="h-8 w-auto" />
            </Link>
            <button
              type="button"
              className="text-foreground -m-2.5 rounded-md p-2.5"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <X className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>

          <div className="mt-6 flow-root">
            <div className="divide-border -my-6 divide-y">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-foreground hover:bg-surface-elevated -mx-3 block rounded-lg px-3 py-2 text-base font-semibold"
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
                  className="text-foreground hover:bg-surface-elevated -mx-3 flex items-center gap-2 rounded-lg px-3 py-2 text-base font-semibold"
                >
                  <Github className="h-5 w-5" />
                  GitHub
                  <ExternalLink className="text-muted h-4 w-4" />
                </Link>
                <Link
                  href="/docs/getting-started"
                  className="bg-neon-cyan text-background mt-4 block rounded-lg px-4 py-3 text-center text-sm font-semibold"
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

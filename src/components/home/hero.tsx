"use client";

import Link from "next/link";
import { ArrowRight, Github } from "lucide-react";
import { ParticleField } from "@/components/effects/particle-field";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-16">
      {/* Particle background */}
      <ParticleField className="absolute inset-0" />

      {/* Radial gradient overlay */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,255,255,0.1)_0%,transparent_70%)]" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          {/* Badge */}
          <div className="animate-fade-in border-border bg-surface/50 mb-8 inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm backdrop-blur-sm">
            <span className="bg-neon-cyan inline-block h-2 w-2 animate-pulse rounded-full" />
            <span className="text-muted">Now in Private Beta</span>
            <ArrowRight className="text-neon-cyan h-4 w-4" />
          </div>

          {/* Headline */}
          <h1
            className="animate-fade-in font-display text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl"
            style={{ animationDelay: "100ms" }}
          >
            The{" "}
            <span className="gradient-text text-glow-cyan">
              Agent Programming
            </span>
            <br />
            Language
          </h1>

          {/* Subheadline */}
          <p
            className="animate-fade-in text-muted mt-6 text-lg leading-8 sm:text-xl"
            style={{ animationDelay: "200ms" }}
          >
            Define agents in a declarative language. Compile to TypeScript,
            Python, or Go. Edit with full LSP support in VSCode, Vim, and
            Neovim.
          </p>

          {/* CTAs */}
          <div
            className="animate-fade-in mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
            style={{ animationDelay: "300ms" }}
          >
            <Link
              href="/docs"
              className="group bg-neon-cyan text-background hover:shadow-glow-cyan flex items-center gap-2 rounded-lg px-6 py-3 text-sm font-semibold transition-all"
            >
              Read the Docs
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="https://github.com/sagesyn"
              target="_blank"
              rel="noopener noreferrer"
              className="border-border bg-surface/50 text-foreground hover:border-neon-cyan/50 hover:bg-surface flex items-center gap-2 rounded-lg border px-6 py-3 text-sm font-semibold backdrop-blur-sm transition-all"
            >
              <Github className="h-5 w-5" />
              Star on GitHub
            </Link>
          </div>

          {/* Terminal preview */}
          <div
            className="animate-fade-in mt-16"
            style={{ animationDelay: "400ms" }}
          >
            <div className="relative mx-auto max-w-2xl">
              {/* Glow effect */}
              <div className="from-neon-cyan/20 via-neon-magenta/20 to-neon-cyan/20 absolute -inset-4 rounded-2xl bg-gradient-to-r opacity-50 blur-2xl" />

              {/* Terminal window */}
              <div className="border-border bg-surface relative overflow-hidden rounded-xl border">
                {/* Title bar */}
                <div className="border-border bg-surface-elevated flex items-center gap-2 border-b px-4 py-3">
                  <div className="h-3 w-3 rounded-full bg-red-500/80" />
                  <div className="h-3 w-3 rounded-full bg-yellow-500/80" />
                  <div className="h-3 w-3 rounded-full bg-green-500/80" />
                  <span className="text-muted ml-4 font-mono text-xs">
                    terminal
                  </span>
                </div>

                {/* Terminal content */}
                <div className="p-6 font-mono text-sm">
                  <div className="flex items-center gap-2">
                    <span className="text-neon-green">$</span>
                    <span className="text-foreground">
                      sagesyn init research-assistant.sag
                    </span>
                  </div>
                  <div className="text-muted mt-4 space-y-1">
                    <p>
                      <span className="text-neon-cyan">✓</span> Created
                      research-assistant.sag
                    </p>
                    <p>
                      <span className="text-neon-cyan">✓</span> Configured MCP
                      servers
                    </p>
                    <p>
                      <span className="text-neon-cyan">✓</span> LSP ready - open
                      in your editor
                    </p>
                    <p className="text-neon-green">
                      ✓ Run: sag compile --target typescript
                    </p>
                  </div>
                  <div className="mt-4 flex items-center gap-2">
                    <span className="text-neon-green">$</span>
                    <span className="animate-terminal-blink bg-neon-cyan inline-block h-4 w-2" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="from-background absolute right-0 bottom-0 left-0 h-32 bg-gradient-to-t to-transparent" />
    </section>
  );
}

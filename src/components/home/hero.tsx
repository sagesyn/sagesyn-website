"use client";

import Link from "next/link";
import { ArrowRight, Github } from "lucide-react";
import { ParticleField } from "@/components/effects/particle-field";

export function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden pt-32">
      {/* Particle background */}
      <ParticleField className="absolute inset-0" />

      {/* Radial gradient overlay */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,255,255,0.1)_0%,transparent_70%)]" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          {/* Badge */}
          <div className="animate-fade-in mb-8 inline-flex items-center gap-2 rounded-full border border-border bg-surface/50 px-4 py-2 text-sm backdrop-blur-sm">
            <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-neon-cyan" />
            <span className="text-muted">Now in Private Beta</span>
            <ArrowRight className="h-4 w-4 text-neon-cyan" />
          </div>

          {/* Headline */}
          <h1
            className="animate-fade-in font-display text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl"
            style={{ animationDelay: "100ms" }}
          >
            The{" "}
            <span className="gradient-text text-glow-cyan">Decision Fabric</span>
            <br />
            for Intelligent Systems
          </h1>

          {/* Subheadline */}
          <p
            className="animate-fade-in mt-6 text-lg leading-8 text-muted sm:text-xl"
            style={{ animationDelay: "200ms" }}
          >
            Build the next generation of agent infrastructure. Coordinate
            intelligent agents, tools, and data as a stable mesh - layered,
            observable, and safe.
          </p>

          {/* CTAs */}
          <div
            className="animate-fade-in mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
            style={{ animationDelay: "300ms" }}
          >
            <Link
              href="/docs/getting-started"
              className="group flex items-center gap-2 rounded-lg bg-neon-cyan px-6 py-3 text-sm font-semibold text-background transition-all hover:shadow-glow-cyan"
            >
              Get Started
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="https://github.com/sagesyn"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-lg border border-border bg-surface/50 px-6 py-3 text-sm font-semibold text-foreground backdrop-blur-sm transition-all hover:border-neon-cyan/50 hover:bg-surface"
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
              <div className="absolute -inset-4 rounded-2xl bg-gradient-to-r from-neon-cyan/20 via-neon-magenta/20 to-neon-cyan/20 opacity-50 blur-2xl" />

              {/* Terminal window */}
              <div className="relative overflow-hidden rounded-xl border border-border bg-surface">
                {/* Title bar */}
                <div className="flex items-center gap-2 border-b border-border bg-surface-elevated px-4 py-3">
                  <div className="h-3 w-3 rounded-full bg-red-500/80" />
                  <div className="h-3 w-3 rounded-full bg-yellow-500/80" />
                  <div className="h-3 w-3 rounded-full bg-green-500/80" />
                  <span className="ml-4 font-mono text-xs text-muted">
                    terminal
                  </span>
                </div>

                {/* Terminal content */}
                <div className="p-6 font-mono text-sm">
                  <div className="flex items-center gap-2">
                    <span className="text-neon-green">$</span>
                    <span className="text-foreground">npx create-sagesyn-app my-agents</span>
                  </div>
                  <div className="mt-4 space-y-1 text-muted">
                    <p>
                      <span className="text-neon-cyan">✓</span> Creating agent
                      mesh...
                    </p>
                    <p>
                      <span className="text-neon-cyan">✓</span> Configuring
                      decision fabric...
                    </p>
                    <p>
                      <span className="text-neon-cyan">✓</span> Setting up
                      observability...
                    </p>
                    <p className="text-neon-green">
                      ✓ Ready! Your agent infrastructure is live.
                    </p>
                  </div>
                  <div className="mt-4 flex items-center gap-2">
                    <span className="text-neon-green">$</span>
                    <span className="inline-block h-4 w-2 animate-terminal-blink bg-neon-cyan" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}

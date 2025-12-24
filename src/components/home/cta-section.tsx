import Link from "next/link";
import { ArrowRight, Github, Mail } from "lucide-react";

export function CTASection() {
  return (
    <section className="relative py-24 sm:py-32">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl">
          {/* Gradient border effect */}
          <div className="absolute -inset-0.5 rounded-3xl bg-gradient-to-r from-neon-cyan via-neon-magenta to-neon-cyan opacity-30 blur-sm" />

          {/* Content container */}
          <div className="relative rounded-3xl border border-border bg-surface p-8 sm:p-16">
            {/* Grid pattern */}
            <div className="absolute inset-0 grid-background opacity-30" />

            <div className="relative mx-auto max-w-2xl text-center">
              <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
                Ready to build the{" "}
                <span className="gradient-text">future</span>?
              </h2>
              <p className="mt-4 text-lg text-muted">
                Join the private beta and start building agent infrastructure
                that scales. Get early access to our SDKs and dedicated support.
              </p>

              {/* CTAs */}
              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Link
                  href="/docs/getting-started"
                  className="group flex w-full items-center justify-center gap-2 rounded-lg bg-neon-cyan px-8 py-4 text-sm font-semibold text-background transition-all hover:shadow-glow-cyan sm:w-auto"
                >
                  Start Building
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  href="https://github.com/sagesyn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-full items-center justify-center gap-2 rounded-lg border border-border bg-surface/50 px-8 py-4 text-sm font-semibold text-foreground backdrop-blur-sm transition-all hover:border-neon-cyan/50 hover:bg-surface sm:w-auto"
                >
                  <Github className="h-5 w-5" />
                  View on GitHub
                </Link>
              </div>

              {/* Contact link */}
              <p className="mt-8 text-sm text-muted">
                Questions?{" "}
                <Link
                  href="mailto:hello@sagesyn.ai"
                  className="inline-flex items-center gap-1 text-neon-cyan transition-colors hover:text-neon-cyan/80"
                >
                  <Mail className="h-4 w-4" />
                  hello@sagesyn.ai
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

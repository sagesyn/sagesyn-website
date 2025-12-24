import Link from "next/link";
import { ArrowRight, Github, Mail } from "lucide-react";

export function CTASection() {
  return (
    <section className="relative py-24 sm:py-32">
      {/* Background */}
      <div className="from-surface absolute inset-0 bg-gradient-to-t via-transparent to-transparent" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl">
          {/* Gradient border effect */}
          <div className="from-neon-cyan via-neon-magenta to-neon-cyan absolute -inset-0.5 rounded-3xl bg-gradient-to-r opacity-30 blur-sm" />

          {/* Content container */}
          <div className="border-border bg-surface relative rounded-3xl border p-8 sm:p-16">
            {/* Grid pattern */}
            <div className="grid-background absolute inset-0 opacity-30" />

            <div className="relative mx-auto max-w-2xl text-center">
              <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
                Ready to build the <span className="gradient-text">future</span>
                ?
              </h2>
              <p className="text-muted mt-4 text-lg">
                Join the private beta and start building agent infrastructure
                that scales. Get early access to our SDKs and dedicated support.
              </p>

              {/* CTAs */}
              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Link
                  href="/docs/getting-started"
                  className="group bg-neon-cyan text-background hover:shadow-glow-cyan flex w-full items-center justify-center gap-2 rounded-lg px-8 py-4 text-sm font-semibold transition-all sm:w-auto"
                >
                  Start Building
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  href="https://github.com/sagesyn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-border bg-surface/50 text-foreground hover:border-neon-cyan/50 hover:bg-surface flex w-full items-center justify-center gap-2 rounded-lg border px-8 py-4 text-sm font-semibold backdrop-blur-sm transition-all sm:w-auto"
                >
                  <Github className="h-5 w-5" />
                  View on GitHub
                </Link>
              </div>

              {/* Contact link */}
              <p className="text-muted mt-8 text-sm">
                Questions?{" "}
                <Link
                  href="mailto:hello@sagesyn.ai"
                  className="text-neon-cyan hover:text-neon-cyan/80 inline-flex items-center gap-1 transition-colors"
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

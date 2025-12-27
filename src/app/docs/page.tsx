import { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import {
  ArrowRight,
  FileCode,
  GitBranch,
  Wand,
  Network,
  BookOpen,
  Terminal,
  Puzzle,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Documentation",
  description:
    "Learn how to use the Sage Agent Programming Language to define, compile, and run intelligent agents.",
};

const agentExample = `agent: hello_world
version: 1.0

model:
  provider: anthropic
  name: claude-sonnet-4

workflow:
  - perceive: { from: trigger.user_input }
  - respond: { format: text, stream: true }`;

const quickLinks = [
  {
    title: "Language Reference",
    description: "Complete syntax reference for .sag files",
    icon: FileCode,
    href: "#language-reference",
    gradient: "from-neon-cyan to-neon-blue",
  },
  {
    title: "Compiler Targets",
    description: "TypeScript, Python, and Go compilation",
    icon: GitBranch,
    href: "#compiler-targets",
    gradient: "from-neon-magenta to-neon-orange",
  },
  {
    title: "LSP & Editor Setup",
    description: "VSCode, Vim, and Neovim extensions",
    icon: Wand,
    href: "#editor-setup",
    gradient: "from-neon-green to-neon-cyan",
  },
  {
    title: "Protocol Primitives",
    description: "MCP, A2A, and AG-UI constructs",
    icon: Network,
    href: "#protocols",
    gradient: "from-neon-blue to-neon-magenta",
  },
];

export default function DocsPage() {
  return (
    <div className="relative min-h-screen">
      {/* Grid background effect */}
      <div className="grid-background fixed inset-0 opacity-50" />

      {/* Main content */}
      <div className="relative z-10">
        <Header />
        <main className="py-16 pt-32">
          <div className="mx-auto max-w-4xl px-6 lg:px-8">
            {/* Page header */}
            <div className="mb-16">
              <div className="border-border bg-surface/50 mb-6 inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm backdrop-blur-sm">
                <BookOpen className="text-neon-cyan h-4 w-4" />
                <span className="text-muted">Documentation</span>
              </div>
              <h1 className="font-display text-4xl font-bold tracking-tight sm:text-5xl">
                Agent Programming{" "}
                <span className="gradient-text">Language</span>
              </h1>
              <p className="text-muted mt-4 text-lg leading-relaxed">
                Define intelligent agents in a clean, declarative syntax.
                Compile to TypeScript, Python, or Go. Edit with full LSP support
                in your favorite editor.
              </p>
            </div>

            {/* Quick start */}
            <section className="mb-16">
              <h2 className="font-display mb-6 text-2xl font-bold">
                Quick Start
              </h2>

              <div className="space-y-6">
                {/* Install */}
                <div className="border-border bg-surface rounded-xl border p-6">
                  <div className="mb-4 flex items-center gap-3">
                    <div className="from-neon-cyan to-neon-blue flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br">
                      <Terminal className="text-background h-4 w-4" />
                    </div>
                    <h3 className="font-display text-lg font-semibold">
                      1. Install the CLI
                    </h3>
                  </div>
                  <div className="bg-surface-elevated overflow-x-auto rounded-lg p-4">
                    <pre className="font-mono text-sm">
                      <code className="text-foreground/90">
                        # npm
                        {"\n"}npm install -g @sagesyn/cli{"\n\n"}# bun{"\n"}bun
                        add -g @sagesyn/cli
                      </code>
                    </pre>
                  </div>
                </div>

                {/* Create agent */}
                <div className="border-border bg-surface rounded-xl border p-6">
                  <div className="mb-4 flex items-center gap-3">
                    <div className="from-neon-magenta to-neon-orange flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br">
                      <FileCode className="text-background h-4 w-4" />
                    </div>
                    <h3 className="font-display text-lg font-semibold">
                      2. Create your first agent
                    </h3>
                  </div>
                  <div className="bg-surface-elevated overflow-x-auto rounded-lg p-4">
                    <pre className="font-mono text-sm">
                      <code className="text-foreground/90">
                        sagesyn init hello.sag
                      </code>
                    </pre>
                  </div>
                  <p className="text-muted mt-4 text-sm">
                    This creates a new .sag file with a basic template:
                  </p>
                  <div className="bg-surface-elevated mt-4 overflow-x-auto rounded-lg p-4">
                    <pre className="font-mono text-sm">
                      <code className="text-foreground/90">{agentExample}</code>
                    </pre>
                  </div>
                </div>

                {/* Compile */}
                <div className="border-border bg-surface rounded-xl border p-6">
                  <div className="mb-4 flex items-center gap-3">
                    <div className="from-neon-green to-neon-cyan flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br">
                      <GitBranch className="text-background h-4 w-4" />
                    </div>
                    <h3 className="font-display text-lg font-semibold">
                      3. Compile to your target language
                    </h3>
                  </div>
                  <div className="bg-surface-elevated overflow-x-auto rounded-lg p-4">
                    <pre className="font-mono text-sm">
                      <code className="text-foreground/90">
                        # Compile to TypeScript{"\n"}sag compile hello.sag
                        --target typescript{"\n\n"}# Compile to Python{"\n"}
                        sag compile hello.sag --target python{"\n\n"}#
                        Compile to Go{"\n"}sag compile hello.sag --target
                        go
                      </code>
                    </pre>
                  </div>
                </div>

                {/* Run */}
                <div className="border-border bg-surface rounded-xl border p-6">
                  <div className="mb-4 flex items-center gap-3">
                    <div className="from-neon-blue to-neon-magenta flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br">
                      <Puzzle className="text-background h-4 w-4" />
                    </div>
                    <h3 className="font-display text-lg font-semibold">
                      4. Run your agent
                    </h3>
                  </div>
                  <div className="bg-surface-elevated overflow-x-auto rounded-lg p-4">
                    <pre className="font-mono text-sm">
                      <code className="text-foreground/90">
                        sag run hello.sag --input &quot;Hello, world!&quot;
                      </code>
                    </pre>
                  </div>
                </div>
              </div>
            </section>

            {/* Why a dedicated language */}
            <section className="mb-16">
              <h2 className="font-display mb-6 text-2xl font-bold">
                Why a Dedicated Language?
              </h2>
              <div className="text-muted space-y-4 leading-relaxed">
                <p>
                  Existing agent frameworks require you to write boilerplate
                  code in Python, TypeScript, or other languages. You spend more
                  time wiring things together than defining agent behavior.
                </p>
                <p>
                  The Agent Programming Language changes this. It provides a{" "}
                  <span className="text-foreground">declarative syntax</span>{" "}
                  purpose-built for defining agents. MCP servers, A2A discovery,
                  and AG-UI streaming are{" "}
                  <span className="text-foreground">language primitives</span>,
                  not afterthoughts.
                </p>
                <p>
                  Write once, compile to TypeScript, Python, or Go. Your team
                  uses whatever runtime they prefer. The language handles the
                  translation.
                </p>
              </div>
            </section>

            {/* Quick links */}
            <section className="mb-16">
              <h2 className="font-display mb-6 text-2xl font-bold">
                Learn More
              </h2>
              <div className="grid gap-4 sm:grid-cols-2">
                {quickLinks.map((link) => (
                  <Link
                    key={link.title}
                    href={link.href}
                    className="border-border bg-surface hover:border-border-glow group flex items-start gap-4 rounded-xl border p-6 transition-all"
                  >
                    <div
                      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br ${link.gradient}`}
                    >
                      <link.icon className="text-background h-5 w-5" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-display text-foreground flex items-center gap-2 font-semibold">
                        {link.title}
                        <ArrowRight className="h-4 w-4 opacity-0 transition-all group-hover:translate-x-1 group-hover:opacity-100" />
                      </h3>
                      <p className="text-muted mt-1 text-sm">
                        {link.description}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </section>

            {/* Coming soon notice */}
            <section className="border-border bg-surface/50 rounded-xl border p-8 text-center backdrop-blur-sm">
              <h3 className="font-display mb-2 text-lg font-semibold">
                Full Documentation Coming Soon
              </h3>
              <p className="text-muted">
                We&apos;re actively building out the complete documentation.
                Join the{" "}
                <Link
                  href="https://github.com/sagesyn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neon-cyan hover:text-neon-cyan/80 underline underline-offset-2"
                >
                  GitHub community
                </Link>{" "}
                to get updates and early access.
              </p>
            </section>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}

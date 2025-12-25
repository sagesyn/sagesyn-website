import { FileCode, GitBranch, Wand } from "lucide-react";
import { cn } from "@/lib/utils";

const features = [
  {
    name: "Declarative Syntax",
    description:
      "Define agents in clean, YAML-like syntax. Focus on what your agent does, not the boilerplate. Native constructs for MCP, A2A, and AG-UI protocols.",
    icon: FileCode,
    gradient: "from-neon-cyan to-neon-blue",
    glow: "shadow-glow-cyan",
  },
  {
    name: "Multi-Target Compilation",
    description:
      "Write once, compile to TypeScript, Python, or Go. Your agent definitions become production-ready code in whatever language your team uses.",
    icon: GitBranch,
    gradient: "from-neon-magenta to-neon-orange",
    glow: "shadow-glow-magenta",
  },
  {
    name: "LSP-Powered Editing",
    description:
      "Full Language Server Protocol support. Autocompletion, hover docs, diagnostics, and refactoring in VSCode, Vim, Neovim, and any LSP-compatible editor.",
    icon: Wand,
    gradient: "from-neon-green to-neon-cyan",
    glow: "shadow-glow-blue",
  },
];

export function ValueProps() {
  return (
    <section className="relative py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
            Agents as{" "}
            <span className="gradient-text">First-Class Citizens</span>
          </h2>
          <p className="text-muted mt-4 text-lg">
            A purpose-built language for defining intelligent agents. Protocol
            primitives, model abstraction, and workflow constructs built right
            in.
          </p>
        </div>

        {/* Feature cards */}
        <div className="mx-auto mt-16 max-w-5xl">
          <div className="grid gap-8 md:grid-cols-3">
            {features.map((feature, index) => (
              <div
                key={feature.name}
                className="group relative"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Card glow on hover */}
                <div
                  className={cn(
                    "absolute -inset-0.5 rounded-2xl bg-gradient-to-r opacity-0 blur transition-opacity duration-500 group-hover:opacity-30",
                    feature.gradient
                  )}
                />

                {/* Card */}
                <div className="border-border bg-surface hover:border-border-glow relative flex flex-col rounded-xl border p-8 transition-all duration-300">
                  {/* Icon */}
                  <div
                    className={cn(
                      "mb-6 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br",
                      feature.gradient
                    )}
                  >
                    <feature.icon className="text-background h-6 w-6" />
                  </div>

                  {/* Content */}
                  <h3 className="font-display text-foreground text-xl font-semibold">
                    {feature.name}
                  </h3>
                  <p className="text-muted mt-3 flex-1 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

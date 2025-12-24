import { Network, Layers, Workflow } from "lucide-react";
import { cn } from "@/lib/utils";

const features = [
  {
    name: "Agent Mesh",
    description:
      "Treat agents like microservices - discoverable, observable, and policy-controlled. Scale from one assistant to hundreds of specialized agents safely.",
    icon: Network,
    gradient: "from-neon-cyan to-neon-blue",
    glow: "shadow-glow-cyan",
  },
  {
    name: "Layered Cognition",
    description:
      "Structure workflows into stages: perception, reasoning, tools, execution, and feedback. Make agent behavior debuggable and auditable.",
    icon: Layers,
    gradient: "from-neon-magenta to-neon-orange",
    glow: "shadow-glow-magenta",
  },
  {
    name: "Protocol Native",
    description:
      "Designed to speak modern agent protocols - MCP-style tool access, A2A patterns, and event buses. Agents coordinate across clouds and runtimes.",
    icon: Workflow,
    gradient: "from-neon-green to-neon-cyan",
    glow: "shadow-glow-blue",
  },
];

export function ValueProps() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
            Infrastructure for the{" "}
            <span className="gradient-text">Agentic Era</span>
          </h2>
          <p className="text-muted mt-4 text-lg">
            Stop treating agents as ad-hoc scripts. Build them as first-class
            infrastructure that continuously coordinates, learns, and executes.
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

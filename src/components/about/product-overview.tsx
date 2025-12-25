import { coreFeatures, protocols } from "@/data/mission";
import {
  Layout,
  Code2,
  Activity,
  Layers,
  Network,
  Zap,
  Globe,
} from "lucide-react";

const featureIconMap: Record<
  string,
  React.ComponentType<{ className?: string }>
> = {
  "visual-canvas": Layout,
  "code-editor": Code2,
  "execution-monitor": Activity,
  "context-inspector": Layers,
};

export function ProductOverview() {
  return (
    <section className="bg-surface py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-foreground text-3xl font-bold tracking-tight sm:text-4xl">
            Core Capabilities
          </h2>
          <p className="text-muted mt-4 text-lg">
            Everything you need to build, test, and deploy intelligent agents
          </p>
        </div>

        {/* Features grid */}
        <div className="mx-auto mt-16 grid max-w-5xl gap-8 lg:grid-cols-2">
          {coreFeatures.map((feature) => {
            const Icon = featureIconMap[feature.id] || Layout;
            return (
              <div
                key={feature.id}
                className="border-border bg-background rounded-2xl border p-8"
              >
                {/* Icon */}
                <div className="bg-brand-gradient mb-4 inline-flex rounded-lg p-3">
                  <Icon className="h-6 w-6 text-white" />
                </div>

                {/* Title */}
                <h3 className="font-display text-foreground text-xl font-semibold">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-muted mt-2">{feature.description}</p>

                {/* Details */}
                <ul className="mt-4 space-y-2">
                  {feature.details.map((detail, index) => (
                    <li
                      key={index}
                      className="text-muted flex items-center gap-2 text-sm"
                    >
                      <span className="bg-brand-cyan h-1.5 w-1.5 rounded-full" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Protocols section */}
        <div className="mx-auto mt-24 max-w-5xl">
          <div className="text-center">
            <h3 className="font-display text-foreground text-2xl font-bold">
              Protocol Native
            </h3>
            <p className="text-muted mt-2">
              Built with first-class support for emerging agent protocols
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {protocols.map((protocol) => (
              <div
                key={protocol.id}
                className="border-border bg-background rounded-xl border p-6 text-center"
              >
                <div className="bg-brand-gradient mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full">
                  {protocol.id === "mcp" && (
                    <Zap className="h-6 w-6 text-white" />
                  )}
                  {protocol.id === "a2a" && (
                    <Network className="h-6 w-6 text-white" />
                  )}
                  {protocol.id === "ag-ui" && (
                    <Globe className="h-6 w-6 text-white" />
                  )}
                </div>
                <h4 className="font-display text-foreground text-lg font-semibold">
                  {protocol.name}
                </h4>
                <p className="text-brand-cyan mt-1 text-sm">
                  {protocol.fullName}
                </p>
                <p className="text-muted mt-3 text-sm">{protocol.purpose}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

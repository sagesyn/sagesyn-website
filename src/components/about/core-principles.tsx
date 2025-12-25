import { corePrinciples } from "@/data/mission";
import {
  Layout,
  Layers,
  Shuffle,
  Network,
  Shield,
  GitBranch,
} from "lucide-react";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  layout: Layout,
  layers: Layers,
  shuffle: Shuffle,
  network: Network,
  shield: Shield,
  "git-branch": GitBranch,
};

export function CorePrinciples() {
  return (
    <section className="bg-surface py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Core Principles
          </h2>
          <p className="mt-4 text-lg text-muted">
            The foundational values that guide everything we build
          </p>
        </div>

        {/* Principles grid */}
        <div className="mx-auto mt-16 grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {corePrinciples.map((principle) => {
            const Icon = iconMap[principle.icon] || Layout;
            return (
              <div
                key={principle.id}
                className="group relative rounded-2xl border border-border bg-background p-6 transition-all hover:border-brand-cyan/50 hover:shadow-lg hover:shadow-brand-cyan/5"
              >
                {/* Icon */}
                <div className="mb-4 inline-flex rounded-lg bg-brand-gradient p-3">
                  <Icon className="h-6 w-6 text-white" />
                </div>

                {/* Title */}
                <h3 className="font-display text-lg font-semibold text-foreground">
                  {principle.title}
                </h3>

                {/* Description */}
                <p className="mt-2 text-sm leading-6 text-muted">
                  {principle.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

import { missionStatement } from "@/data/mission";
import { Check } from "lucide-react";

export function MissionStatement() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          {/* Section header */}
          <div className="text-center">
            <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Our Mission
            </h2>
          </div>

          {/* Mission statement */}
          <div className="mt-12 rounded-2xl border border-border bg-surface p-8 sm:p-12">
            <blockquote className="text-center">
              <p className="text-xl font-medium leading-8 text-foreground sm:text-2xl">
                &ldquo;{missionStatement.statement}&rdquo;
              </p>
            </blockquote>
          </div>

          {/* Pillars */}
          <div className="mt-12">
            <h3 className="text-center text-lg font-semibold text-foreground">
              Core Pillars
            </h3>
            <ul className="mt-6 grid gap-4 sm:grid-cols-2">
              {missionStatement.pillars.map((pillar, index) => (
                <li
                  key={index}
                  className="flex items-center gap-3 rounded-lg border border-border bg-surface-elevated px-4 py-3"
                >
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-cyan/10">
                    <Check className="h-4 w-4 text-brand-cyan" />
                  </div>
                  <span className="text-sm text-foreground">{pillar}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

import { roadmapPhases } from "@/data/roadmap";
import { PhaseCard } from "./phase-card";

export function TimelineView() {
  return (
    <section className="pb-24">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <div className="relative">
          {/* Vertical timeline line */}
          <div className="absolute left-8 top-0 hidden h-full w-0.5 bg-gradient-to-b from-brand-cyan via-brand-indigo to-brand-purple sm:block" />

          {/* Phase cards */}
          <div className="space-y-8">
            {roadmapPhases.map((phase, index) => (
              <div key={phase.id} className="relative sm:pl-20">
                {/* Timeline dot */}
                <div className="absolute left-6 top-8 hidden h-4 w-4 -translate-x-1/2 rounded-full border-4 border-background bg-gradient-to-br from-brand-cyan to-brand-purple sm:block" />

                <PhaseCard phase={phase} isActive={index === 0} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

import { roadmapPhases } from "@/data/roadmap";
import { PhaseCard } from "./phase-card";

export function TimelineView() {
  return (
    <section className="pb-24">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <div className="relative">
          {/* Vertical timeline line */}
          <div className="from-brand-cyan via-brand-indigo to-brand-purple absolute top-0 left-8 hidden h-full w-0.5 bg-gradient-to-b sm:block" />

          {/* Phase cards */}
          <div className="space-y-8">
            {roadmapPhases.map((phase, index) => (
              <div key={phase.id} className="relative sm:pl-20">
                {/* Timeline dot */}
                <div className="border-background from-brand-cyan to-brand-purple absolute top-8 left-6 hidden h-4 w-4 -translate-x-1/2 rounded-full border-4 bg-gradient-to-br sm:block" />

                <PhaseCard phase={phase} isActive={index === 0} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

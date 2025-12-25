import { RoadmapPhase } from "@/data/roadmap";
import { MilestoneList } from "./milestone-list";
import { Clock } from "lucide-react";

type PhaseCardProps = {
  phase: RoadmapPhase;
  isActive?: boolean;
};

const phaseColors = {
  1: { bg: "bg-brand-cyan/10", border: "border-brand-cyan/30", text: "text-brand-cyan" },
  2: { bg: "bg-brand-indigo/10", border: "border-brand-indigo/30", text: "text-brand-indigo" },
  3: { bg: "bg-brand-purple/10", border: "border-brand-purple/30", text: "text-brand-purple" },
  4: { bg: "bg-accent-pink/10", border: "border-accent-pink/30", text: "text-accent-pink" },
};

export function PhaseCard({ phase, isActive = false }: PhaseCardProps) {
  const colors = phaseColors[phase.id as keyof typeof phaseColors];

  return (
    <div
      className={`rounded-2xl border p-6 transition-all sm:p-8 ${
        isActive
          ? `${colors.border} ${colors.bg}`
          : "border-border bg-surface"
      }`}
    >
      {/* Header */}
      <div className="mb-6 flex items-start justify-between">
        <div>
          <div className="flex items-center gap-3">
            <span
              className={`inline-flex h-8 w-8 items-center justify-center rounded-full font-bold ${colors.bg} ${colors.text}`}
            >
              {phase.id}
            </span>
            <div>
              <h3 className="font-display text-xl font-bold text-foreground">
                Phase {phase.id}: {phase.name}
              </h3>
              <p className="text-sm text-muted">{phase.quarter}</p>
            </div>
          </div>
        </div>
        {isActive && (
          <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-cyan/10 px-3 py-1 text-xs font-medium text-brand-cyan">
            <Clock className="h-3 w-3" />
            Current
          </span>
        )}
      </div>

      {/* Goal */}
      <div className="mb-6">
        <p className={`text-lg font-semibold ${colors.text}`}>{phase.goal}</p>
        <p className="mt-2 text-sm text-muted">{phase.description}</p>
      </div>

      {/* Milestones */}
      <div className="mb-6">
        <h4 className="mb-3 text-sm font-semibold text-foreground">
          Milestones
        </h4>
        <MilestoneList milestones={phase.milestones} />
      </div>

      {/* Key Deliverables */}
      <div>
        <h4 className="mb-3 text-sm font-semibold text-foreground">
          Key Deliverables
        </h4>
        <ul className="space-y-2">
          {phase.keyDeliverables.map((deliverable, index) => (
            <li key={index} className="flex items-start gap-2 text-sm text-muted">
              <span className={`mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full ${colors.bg.replace("/10", "")}`} />
              {deliverable}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

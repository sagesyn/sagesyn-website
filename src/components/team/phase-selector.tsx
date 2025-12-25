import { Phase } from "@/data/agents";

type PhaseSelectorProps = {
  phases: Phase[];
  activePhase: number;
  onPhaseChange: (phase: number) => void;
};

export function PhaseSelector({
  phases,
  activePhase,
  onPhaseChange,
}: PhaseSelectorProps) {
  return (
    <div className="flex gap-2">
      {phases.map((phase) => (
        <button
          key={phase.id}
          onClick={() => onPhaseChange(phase.id)}
          className={`flex-1 rounded-lg border p-3 text-left transition-all ${
            activePhase === phase.id
              ? "border-border bg-surface-elevated"
              : "border-border hover:border-border/80"
          }`}
        >
          <div className="mb-1 flex items-center justify-between">
            <span
              className={`text-xs font-medium ${
                activePhase === phase.id ? "text-foreground" : "text-muted"
              }`}
            >
              Phase {phase.id}: {phase.name}
            </span>
            <span className="text-xs text-muted">{phase.quarter}</span>
          </div>
          <p className="text-xs text-muted">{phase.focus}</p>
        </button>
      ))}
    </div>
  );
}

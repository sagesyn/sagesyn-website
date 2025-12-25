import { Milestone } from "@/data/roadmap";
import { Check, Clock, Circle } from "lucide-react";

type MilestoneListProps = {
  milestones: Milestone[];
};

export function MilestoneList({ milestones }: MilestoneListProps) {
  const getStatusIcon = (status: Milestone["status"]) => {
    switch (status) {
      case "completed":
        return (
          <div className="flex h-5 w-5 items-center justify-center rounded-full bg-brand-cyan">
            <Check className="h-3 w-3 text-background" />
          </div>
        );
      case "in_progress":
        return (
          <div className="flex h-5 w-5 items-center justify-center rounded-full border-2 border-brand-cyan">
            <Clock className="h-3 w-3 text-brand-cyan" />
          </div>
        );
      case "upcoming":
        return (
          <div className="flex h-5 w-5 items-center justify-center rounded-full border-2 border-border">
            <Circle className="h-2 w-2 text-muted" />
          </div>
        );
    }
  };

  return (
    <div className="space-y-3">
      {milestones.map((milestone) => (
        <div key={milestone.id} className="flex items-start gap-3">
          {getStatusIcon(milestone.status)}
          <div className="flex-1">
            <p
              className={`text-sm font-medium ${
                milestone.status === "upcoming"
                  ? "text-muted"
                  : "text-foreground"
              }`}
            >
              {milestone.name}
            </p>
            <p className="text-xs text-muted">{milestone.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

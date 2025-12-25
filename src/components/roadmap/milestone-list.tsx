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
          <div className="bg-brand-cyan flex h-5 w-5 items-center justify-center rounded-full">
            <Check className="text-background h-3 w-3" />
          </div>
        );
      case "in_progress":
        return (
          <div className="border-brand-cyan flex h-5 w-5 items-center justify-center rounded-full border-2">
            <Clock className="text-brand-cyan h-3 w-3" />
          </div>
        );
      case "upcoming":
        return (
          <div className="border-border flex h-5 w-5 items-center justify-center rounded-full border-2">
            <Circle className="text-muted h-2 w-2" />
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
            <p className="text-muted text-xs">{milestone.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

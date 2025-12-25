import { Agent } from "@/data/agents";

type AgentCardProps = {
  agent: Agent;
  activePhase: number;
  isSelected: boolean;
  onClick: () => void;
};

export function AgentCard({
  agent,
  activePhase,
  isSelected,
  onClick,
}: AgentCardProps) {
  const effort = agent[`phase${activePhase}` as keyof Agent] as number;

  return (
    <div
      onClick={onClick}
      className={`cursor-pointer rounded-xl border p-4 transition-all ${
        isSelected
          ? "border-border bg-surface-elevated"
          : "border-border hover:border-border/80 bg-surface/30"
      }`}
    >
      <div className="mb-3 flex items-start justify-between">
        <div className="flex items-center gap-3">
          <div
            className="flex h-10 w-10 items-center justify-center rounded-lg text-sm font-bold"
            style={{
              backgroundColor: `${agent.color}15`,
              color: agent.color,
            }}
          >
            {agent.name.slice(0, 2)}
          </div>
          <div>
            <div className="text-sm font-medium text-foreground">
              {agent.name}
            </div>
            <div className="text-xs text-muted">{agent.role}</div>
          </div>
        </div>
        <div className="text-right">
          <div className="text-lg font-bold" style={{ color: agent.color }}>
            {effort}%
          </div>
          <div className="text-xs text-muted">effort</div>
        </div>
      </div>

      {/* Effort bar */}
      <div className="mb-3 h-1.5 overflow-hidden rounded-full bg-surface-elevated">
        <div
          className="h-full rounded-full transition-all duration-500"
          style={{ width: `${effort}%`, backgroundColor: agent.color }}
        />
      </div>

      <p className="line-clamp-2 text-xs text-muted">{agent.scope}</p>
    </div>
  );
}

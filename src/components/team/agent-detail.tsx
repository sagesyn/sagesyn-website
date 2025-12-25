import { Agent, Phase } from "@/data/agents";

type AgentDetailProps = {
  agent: Agent;
  phases: Phase[];
  agents: Agent[];
};

export function AgentDetail({ agent, phases, agents }: AgentDetailProps) {
  return (
    <div className="border-border bg-surface sticky top-24 rounded-xl border p-4">
      {/* Header */}
      <div className="mb-4 flex items-center gap-3">
        <div
          className="flex h-12 w-12 items-center justify-center rounded-lg font-bold"
          style={{
            backgroundColor: `${agent.color}20`,
            color: agent.color,
          }}
        >
          {agent.name.slice(0, 2)}
        </div>
        <div>
          <div className="text-foreground font-bold">{agent.name}</div>
          <div
            className="inline-block rounded px-2 py-0.5 text-xs"
            style={{
              backgroundColor: `${agent.color}20`,
              color: agent.color,
            }}
          >
            {agent.role}
          </div>
        </div>
      </div>

      {/* Scope */}
      <div className="mb-4">
        <div className="text-muted mb-1 text-xs">Scope</div>
        <p className="text-foreground text-sm">{agent.scope}</p>
      </div>

      {/* Skills */}
      <div className="mb-4">
        <div className="text-muted mb-2 text-xs">Skills</div>
        <div className="flex flex-wrap gap-1">
          {agent.skills.map((skill) => (
            <span
              key={skill}
              className="bg-surface-elevated text-muted rounded px-2 py-1 text-xs"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Effort by Phase */}
      <div className="mb-4">
        <div className="text-muted mb-2 text-xs">Effort by Phase</div>
        <div className="space-y-2">
          {phases.map((phase) => {
            const effort = agent[`phase${phase.id}` as keyof Agent] as number;
            return (
              <div key={phase.id} className="flex items-center gap-2">
                <span className="text-muted w-8 text-xs">
                  {phase.quarter.slice(0, 2)}
                </span>
                <div className="bg-surface-elevated h-2 flex-1 overflow-hidden rounded-full">
                  <div
                    className="h-full rounded-full"
                    style={{
                      width: `${effort}%`,
                      backgroundColor: agent.color,
                    }}
                  />
                </div>
                <span className="text-muted w-10 text-right text-xs">
                  {effort}%
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Outputs */}
      <div className="mb-4">
        <div className="text-muted mb-2 text-xs">Outputs</div>
        <div className="space-y-1">
          {agent.outputs.map((output) => (
            <div
              key={output}
              className="text-muted flex items-center gap-2 text-xs"
            >
              <span className="text-muted">→</span>
              {output}
            </div>
          ))}
        </div>
      </div>

      {/* Collaborates With */}
      <div>
        <div className="text-muted mb-2 text-xs">Collaborates With</div>
        <div className="flex flex-wrap gap-1">
          {agent.collaborates.map((c) => {
            if (c === "all") {
              return (
                <span
                  key={c}
                  className="bg-agent-atlas/10 text-agent-atlas rounded px-2 py-1 text-xs"
                >
                  all agents
                </span>
              );
            }
            const collab = agents.find((a) => a.id === c);
            return collab ? (
              <span
                key={c}
                className="rounded px-2 py-1 text-xs"
                style={{
                  backgroundColor: `${collab.color}15`,
                  color: collab.color,
                }}
              >
                {collab.name}
              </span>
            ) : null;
          })}
        </div>
      </div>
    </div>
  );
}

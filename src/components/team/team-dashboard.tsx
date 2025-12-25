"use client";

import { useState } from "react";
import {
  agents,
  phases,
  getOrchestrator,
  getTeamAgents,
  Agent,
} from "@/data/agents";
import { AgentCard } from "./agent-card";
import { AgentDetail } from "./agent-detail";
import { PhaseSelector } from "./phase-selector";
import { TeamStats } from "./team-stats";

type ViewMode = "grid" | "timeline" | "matrix";

export function TeamDashboard() {
  const [selectedAgent, setSelectedAgent] = useState<Agent | null>(null);
  const [activePhase, setActivePhase] = useState(1);
  const [view, setView] = useState<ViewMode>("grid");

  const orchestrator = getOrchestrator();
  const teamAgents = getTeamAgents();

  return (
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      {/* View Toggle */}
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h2 className="font-display text-foreground text-2xl font-bold">
            SageSyn Agentic Team
          </h2>
          <p className="text-muted text-sm">
            12 specialized agents + 1 orchestrator
          </p>
        </div>
        <div className="border-border bg-surface flex gap-1 rounded-lg border p-1">
          {(["grid", "timeline", "matrix"] as ViewMode[]).map((v) => (
            <button
              key={v}
              onClick={() => setView(v)}
              className={`rounded-md px-4 py-1.5 text-xs font-medium transition-all ${
                view === v
                  ? "bg-surface-elevated text-foreground"
                  : "text-muted hover:text-foreground"
              }`}
            >
              {v}
            </button>
          ))}
        </div>
      </div>

      {/* Orchestrator Card */}
      <div
        onClick={() => setSelectedAgent(orchestrator)}
        className={`mb-6 cursor-pointer rounded-xl border p-4 transition-all ${
          selectedAgent?.id === "atlas"
            ? "border-agent-atlas bg-agent-atlas/10"
            : "border-border bg-surface hover:border-agent-atlas/50"
        }`}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div
              className="flex h-12 w-12 items-center justify-center rounded-lg text-lg font-bold"
              style={{
                backgroundColor: `${orchestrator.color}20`,
                color: orchestrator.color,
              }}
            >
              ◆
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-foreground font-bold">
                  {orchestrator.name}
                </span>
                <span
                  className="rounded px-2 py-0.5 text-xs"
                  style={{
                    backgroundColor: `${orchestrator.color}20`,
                    color: orchestrator.color,
                  }}
                >
                  {orchestrator.role}
                </span>
              </div>
              <p className="text-muted text-sm">{orchestrator.scope}</p>
            </div>
          </div>
          <div className="text-muted text-right text-xs">
            <div>Coordinates all agents</div>
            <div>100% allocation all phases</div>
          </div>
        </div>
      </div>

      {/* Phase Selector */}
      <PhaseSelector
        phases={phases}
        activePhase={activePhase}
        onPhaseChange={setActivePhase}
      />

      {/* Main Content */}
      <div className="mt-6 flex gap-6">
        {/* Agent Grid/List */}
        <div className="flex-1">
          {view === "grid" && (
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {teamAgents.map((agent) => (
                <AgentCard
                  key={agent.id}
                  agent={agent}
                  activePhase={activePhase}
                  isSelected={selectedAgent?.id === agent.id}
                  onClick={() => setSelectedAgent(agent)}
                />
              ))}
            </div>
          )}

          {view === "timeline" && (
            <div className="space-y-2">
              {teamAgents.map((agent) => (
                <div
                  key={agent.id}
                  onClick={() => setSelectedAgent(agent)}
                  className={`cursor-pointer rounded-lg border p-3 transition-all ${
                    selectedAgent?.id === agent.id
                      ? "border-border bg-surface-elevated"
                      : "border-border hover:border-border/80"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div
                      className="flex h-8 w-8 shrink-0 items-center justify-center rounded text-xs font-bold"
                      style={{
                        backgroundColor: `${agent.color}15`,
                        color: agent.color,
                      }}
                    >
                      {agent.name.slice(0, 2)}
                    </div>
                    <div className="w-24 shrink-0">
                      <div className="text-foreground text-sm font-medium">
                        {agent.name}
                      </div>
                      <div className="text-muted text-xs">{agent.role}</div>
                    </div>
                    <div className="flex flex-1 gap-1">
                      {[1, 2, 3, 4].map((p) => (
                        <div
                          key={p}
                          className="relative h-6 flex-1 overflow-hidden rounded"
                          style={{ backgroundColor: `${agent.color}10` }}
                        >
                          <div
                            className="absolute inset-y-0 left-0 transition-all"
                            style={{
                              width: `${agent[`phase${p}` as keyof Agent]}%`,
                              backgroundColor:
                                activePhase === p
                                  ? agent.color
                                  : `${agent.color}50`,
                            }}
                          />
                          <span
                            className="absolute inset-0 flex items-center justify-center text-xs font-medium"
                            style={{ color: agent.color }}
                          >
                            {agent[`phase${p}` as keyof Agent]}%
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
              <div className="mt-2 flex gap-1 px-12">
                {phases.map((p) => (
                  <div
                    key={p.id}
                    className="text-muted flex-1 text-center text-xs"
                  >
                    {p.quarter}
                  </div>
                ))}
              </div>
            </div>
          )}

          {view === "matrix" && (
            <div className="border-border overflow-hidden rounded-lg border">
              <table className="w-full text-xs">
                <thead>
                  <tr className="bg-surface">
                    <th className="text-muted p-2 text-left font-medium">
                      Agent
                    </th>
                    <th className="text-muted p-2 text-left font-medium">
                      Primary Skills
                    </th>
                    <th className="text-muted p-2 text-center font-medium">
                      Q1
                    </th>
                    <th className="text-muted p-2 text-center font-medium">
                      Q2
                    </th>
                    <th className="text-muted p-2 text-center font-medium">
                      Q3
                    </th>
                    <th className="text-muted p-2 text-center font-medium">
                      Q4
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {teamAgents.map((agent) => (
                    <tr
                      key={agent.id}
                      onClick={() => setSelectedAgent(agent)}
                      className={`border-border cursor-pointer border-t transition-colors ${
                        selectedAgent?.id === agent.id
                          ? "bg-surface-elevated"
                          : "hover:bg-surface"
                      }`}
                    >
                      <td className="p-2">
                        <div className="flex items-center gap-2">
                          <span
                            className="h-2 w-2 rounded-full"
                            style={{ backgroundColor: agent.color }}
                          />
                          <span className="text-foreground font-medium">
                            {agent.name}
                          </span>
                        </div>
                      </td>
                      <td className="text-muted p-2">
                        {agent.skills.slice(0, 3).join(", ")}
                      </td>
                      {[1, 2, 3, 4].map((p) => (
                        <td key={p} className="p-2 text-center">
                          <span
                            className={`inline-block w-10 rounded py-0.5 text-xs font-medium ${
                              (agent[`phase${p}` as keyof Agent] as number) >=
                              80
                                ? "bg-opacity-30"
                                : "bg-opacity-10"
                            }`}
                            style={{
                              backgroundColor: `${agent.color}30`,
                              color:
                                (agent[`phase${p}` as keyof Agent] as number) >=
                                80
                                  ? agent.color
                                  : `${agent.color}80`,
                            }}
                          >
                            {agent[`phase${p}` as keyof Agent]}%
                          </span>
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

        {/* Detail Panel */}
        <div className="w-80 shrink-0">
          {selectedAgent ? (
            <AgentDetail
              agent={selectedAgent}
              phases={phases}
              agents={agents}
            />
          ) : (
            <div className="border-border bg-surface rounded-lg border p-8 text-center">
              <p className="text-muted text-sm">
                Select an agent to view details
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Stats */}
      <TeamStats />
    </div>
  );
}

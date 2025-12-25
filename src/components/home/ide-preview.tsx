"use client";

import { useState, useEffect } from "react";

const Icons = {
  trigger: () => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className="h-4 w-4"
    >
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  ),
  agent: () => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className="h-4 w-4"
    >
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <circle cx="9" cy="10" r="1.5" fill="currentColor" />
      <circle cx="15" cy="10" r="1.5" fill="currentColor" />
      <path d="M9 15h6" />
    </svg>
  ),
  tool: () => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className="h-4 w-4"
    >
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
    </svg>
  ),
  output: () => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className="h-4 w-4"
    >
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="16" y1="13" x2="8" y2="13" />
      <line x1="16" y1="17" x2="8" y2="17" />
    </svg>
  ),
  play: () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-3.5 w-3.5">
      <polygon points="5 3 19 12 5 21 5 3" />
    </svg>
  ),
  canvas: () => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className="h-3.5 w-3.5"
    >
      <rect x="3" y="3" width="7" height="7" />
      <rect x="14" y="3" width="7" height="7" />
      <rect x="3" y="14" width="7" height="7" />
      <rect x="14" y="14" width="7" height="7" />
    </svg>
  ),
  code: () => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className="h-3.5 w-3.5"
    >
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  ),
  monitor: () => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className="h-3.5 w-3.5"
    >
      <path d="M12 20V10" />
      <path d="M18 20V4" />
      <path d="M6 20v-4" />
    </svg>
  ),
  search: () => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className="h-3.5 w-3.5"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="M21 21l-4.35-4.35" />
    </svg>
  ),
};

type NodeType = "trigger" | "agent" | "tool" | "output";

type Node = {
  id: number;
  type: NodeType;
  name: string;
  x: number;
  y: number;
  model?: string;
  tokens?: number;
};

type Connection = {
  from: number;
  to: number;
};

const nodes: Node[] = [
  { id: 1, type: "trigger", name: "user_input", x: 40, y: 100 },
  {
    id: 2,
    type: "agent",
    name: "research_agent",
    x: 180,
    y: 50,
    model: "claude-sonnet-4",
    tokens: 2840,
  },
  { id: 3, type: "tool", name: "web_search", x: 180, y: 160, tokens: 4200 },
  {
    id: 4,
    type: "agent",
    name: "writer_agent",
    x: 340,
    y: 100,
    model: "gpt-4o",
    tokens: 3100,
  },
  { id: 5, type: "output", name: "file_output", x: 480, y: 100 },
];

const connections: Connection[] = [
  { from: 1, to: 2 },
  { from: 2, to: 3 },
  { from: 3, to: 4 },
  { from: 2, to: 4 },
  { from: 4, to: 5 },
];

function NodeIcon({ type }: { type: NodeType }) {
  const IconComponent = Icons[type] || Icons.trigger;
  return <IconComponent />;
}

export function IDEPreview() {
  const [isRunning, setIsRunning] = useState(false);
  const [activeNodeIndex, setActiveNodeIndex] = useState(-1);
  const [contextUsed, setContextUsed] = useState(0);

  // Auto-run animation on mount and loop
  useEffect(() => {
    const runAnimation = () => {
      setIsRunning(true);
      setActiveNodeIndex(0);
      setContextUsed(0);

      const sequence = [
        { delay: 500, nodeIndex: 0, tokens: 0 },
        { delay: 1000, nodeIndex: 1, tokens: 2840 },
        { delay: 1800, nodeIndex: 2, tokens: 7040 },
        { delay: 2600, nodeIndex: 3, tokens: 10140 },
        { delay: 3400, nodeIndex: 4, tokens: 10140 },
        { delay: 4200, nodeIndex: -1, tokens: 10140 },
      ];

      sequence.forEach(({ delay, nodeIndex, tokens }) => {
        setTimeout(() => {
          setActiveNodeIndex(nodeIndex);
          setContextUsed(tokens);
          if (nodeIndex === -1) {
            setIsRunning(false);
          }
        }, delay);
      });
    };

    // Initial run
    const initialTimeout = setTimeout(runAnimation, 1000);

    // Loop every 6 seconds
    const interval = setInterval(runAnimation, 7000);

    return () => {
      clearTimeout(initialTimeout);
      clearInterval(interval);
    };
  }, []);

  const contextTotal = 128000;
  const contextPct = (contextUsed / contextTotal) * 100;

  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <div className="mx-auto max-w-2xl text-center">
          <div className="bg-brand-cyan/10 border-brand-cyan/30 text-brand-cyan mb-6 inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium">
            <Icons.canvas />
            Visual Agent Builder
          </div>
          <h2 className="font-display text-foreground text-3xl font-bold tracking-tight sm:text-4xl">
            Build Agent Workflows Visually
          </h2>
          <p className="text-muted mt-4 text-lg">
            Connect triggers, agents, and tools in an intuitive node-based
            canvas. Watch context flow through your workflow in real-time.
          </p>
        </div>

        {/* IDE Preview */}
        <div className="mx-auto mt-16 max-w-5xl">
          <div className="border-border bg-surface overflow-hidden rounded-xl border shadow-2xl">
            {/* Title Bar */}
            <div className="border-border bg-surface-elevated flex h-8 items-center justify-between border-b px-3">
              <div className="flex items-center gap-3">
                <div className="flex gap-1.5">
                  <div className="h-2.5 w-2.5 rounded-full bg-red-500/70" />
                  <div className="h-2.5 w-2.5 rounded-full bg-amber-500/70" />
                  <div className="h-2.5 w-2.5 rounded-full bg-emerald-500/70" />
                </div>
                <div className="bg-border h-4 w-px" />
                <span className="font-mono text-xs text-brand-cyan">
                  sagesyn
                </span>
                <span className="text-muted font-mono text-xs">
                  ~/research-assistant
                </span>
              </div>
              <div className="flex items-center gap-3 text-xs">
                <span className="text-muted flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                  ollama:llama3.3
                </span>
                <span className="text-muted/50">v0.1.0</span>
              </div>
            </div>

            {/* Toolbar */}
            <div className="border-border bg-surface-elevated/50 flex h-10 items-center gap-2 border-b px-3">
              <div className="border-border flex items-center rounded border">
                {[
                  { id: "canvas", icon: Icons.canvas, label: "canvas" },
                  { id: "code", icon: Icons.code, label: "code" },
                  { id: "monitor", icon: Icons.monitor, label: "logs" },
                ].map((tab, idx) => (
                  <button
                    key={tab.id}
                    className={`border-border flex items-center gap-1.5 px-3 py-1.5 font-mono text-xs transition-colors ${
                      idx !== 2 ? "border-r" : ""
                    } ${
                      tab.id === "canvas"
                        ? "bg-surface text-foreground"
                        : "text-muted hover:text-foreground"
                    }`}
                  >
                    <tab.icon />
                    <span>{tab.label}</span>
                  </button>
                ))}
              </div>

              <div className="bg-border h-4 w-px" />

              <button
                className={`flex items-center gap-1.5 rounded px-3 py-1.5 font-mono text-xs font-medium transition-all ${
                  isRunning
                    ? "border border-amber-500/30 bg-amber-500/10 text-amber-400"
                    : "border border-emerald-500/30 bg-emerald-500/10 text-emerald-400"
                }`}
              >
                <Icons.play />
                {isRunning ? "running" : "run"}
              </button>

              <div className="flex-1" />

              {/* Context meter */}
              <div className="w-32">
                <div className="mb-0.5 flex justify-between font-mono text-xs">
                  <span className="text-muted">
                    {(contextUsed / 1000).toFixed(1)}k
                  </span>
                  <span className="text-muted/60">{contextPct.toFixed(0)}%</span>
                </div>
                <div className="bg-border h-1.5 overflow-hidden rounded-full">
                  <div
                    className={`h-full transition-all duration-500 ${
                      contextPct < 50
                        ? "bg-emerald-500"
                        : contextPct < 75
                          ? "bg-amber-500"
                          : "bg-red-500"
                    }`}
                    style={{ width: `${Math.min(contextPct, 100)}%` }}
                  />
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="flex h-80">
              {/* Left Sidebar */}
              <div className="border-border bg-surface-elevated/30 hidden w-40 shrink-0 flex-col border-r sm:flex">
                <div className="border-border border-b p-2">
                  <div className="border-border bg-surface text-muted flex items-center gap-1.5 rounded border px-2 py-1.5 font-mono text-xs">
                    <Icons.search />
                    <span>search...</span>
                  </div>
                </div>
                <div className="flex-1 p-2">
                  <div className="text-muted/60 mb-2 px-1 font-mono text-xs uppercase tracking-wider">
                    nodes
                  </div>
                  <div className="space-y-0.5">
                    {(["trigger", "agent", "tool", "output"] as NodeType[]).map(
                      (type) => (
                        <div
                          key={type}
                          className="text-muted hover:bg-surface hover:text-foreground flex items-center gap-2 rounded px-2 py-1.5 font-mono text-xs transition-colors"
                        >
                          <span className="text-muted/70">
                            <NodeIcon type={type} />
                          </span>
                          <span>{type}</span>
                        </div>
                      )
                    )}
                  </div>
                  <div className="text-muted/60 mb-2 mt-4 px-1 font-mono text-xs uppercase tracking-wider">
                    mcp servers
                  </div>
                  <div className="space-y-0.5">
                    {["filesystem", "brave_search", "github"].map((server) => (
                      <div
                        key={server}
                        className="text-muted hover:bg-surface flex items-center justify-between rounded px-2 py-1.5 font-mono text-xs"
                      >
                        <span>{server}</span>
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Canvas */}
              <div
                className="relative flex-1 overflow-hidden"
                style={{
                  backgroundImage: `
                    linear-gradient(rgba(42,50,65,0.4) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(42,50,65,0.4) 1px, transparent 1px)
                  `,
                  backgroundSize: "20px 20px",
                }}
              >
                {/* Connections */}
                <svg className="pointer-events-none absolute inset-0 h-full w-full">
                  {connections.map((conn, i) => {
                    const from = nodes.find((n) => n.id === conn.from);
                    const to = nodes.find((n) => n.id === conn.to);
                    if (!from || !to) return null;
                    const x1 = from.x + 110;
                    const y1 = from.y + 28;
                    const x2 = to.x;
                    const y2 = to.y + 28;
                    const midX = (x1 + x2) / 2;

                    const fromNodeIdx = nodes.findIndex(
                      (n) => n.id === conn.from
                    );
                    const isActive =
                      isRunning &&
                      activeNodeIndex >= 0 &&
                      fromNodeIdx <= activeNodeIndex;

                    return (
                      <g key={i}>
                        <path
                          d={`M ${x1} ${y1} C ${midX} ${y1}, ${midX} ${y2}, ${x2} ${y2}`}
                          fill="none"
                          stroke={isActive ? "#10b981" : "#2a3241"}
                          strokeWidth="2"
                          className={isActive ? "animate-pulse" : ""}
                        />
                        <circle
                          cx={x2}
                          cy={y2}
                          r="4"
                          fill={isActive ? "#10b981" : "#2a3241"}
                        />
                      </g>
                    );
                  })}
                </svg>

                {/* Nodes */}
                {nodes.map((node, nodeIdx) => {
                  const isActive = isRunning && activeNodeIndex === nodeIdx;
                  return (
                    <div
                      key={node.id}
                      className={`absolute transition-all duration-300 ${
                        isActive ? "z-10 scale-105" : ""
                      }`}
                      style={{ left: node.x, top: node.y, width: 110 }}
                    >
                      <div
                        className={`border-border bg-surface rounded border transition-all ${
                          isActive
                            ? "border-brand-cyan shadow-lg shadow-brand-cyan/20"
                            : "hover:border-muted"
                        }`}
                      >
                        <div className="px-2.5 py-2">
                          <div className="mb-1.5 flex items-center justify-between">
                            <div
                              className={`rounded p-1 ${
                                node.type === "agent"
                                  ? "bg-blue-500/10 text-blue-400"
                                  : node.type === "tool"
                                    ? "bg-amber-500/10 text-amber-400"
                                    : node.type === "trigger"
                                      ? "bg-emerald-500/10 text-emerald-400"
                                      : "bg-surface-elevated text-muted"
                              }`}
                            >
                              <NodeIcon type={node.type} />
                            </div>
                            <span
                              className={`h-1.5 w-1.5 rounded-full ${
                                isActive
                                  ? "animate-pulse bg-amber-400"
                                  : "bg-muted/30"
                              }`}
                            />
                          </div>
                          <div className="text-foreground truncate font-mono text-xs font-medium">
                            {node.name}
                          </div>
                          {node.model && (
                            <div className="text-muted/60 mt-0.5 truncate font-mono text-xs">
                              {node.model}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}

                {/* Canvas controls */}
                <div className="border-border bg-surface absolute right-3 bottom-3 flex items-center gap-1 rounded border font-mono text-xs">
                  <button className="text-muted hover:bg-surface-elevated flex h-7 w-7 items-center justify-center">
                    −
                  </button>
                  <span className="text-muted/60 w-10 text-center">100%</span>
                  <button className="text-muted hover:bg-surface-elevated flex h-7 w-7 items-center justify-center">
                    +
                  </button>
                </div>
              </div>
            </div>

            {/* Status Bar */}
            <div className="border-border bg-surface-elevated flex h-6 items-center justify-between border-t px-3 font-mono text-xs">
              <div className="text-muted/60 flex items-center gap-4">
                <span>5 nodes</span>
                <span>3 mcp servers</span>
              </div>
              <div className="text-muted/60 flex items-center gap-4">
                <span className="flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                  connected
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Feature highlights */}
        <div className="mx-auto mt-12 grid max-w-4xl gap-6 sm:grid-cols-3">
          {[
            {
              title: "Multi-Model",
              description:
                "Use Claude, GPT, Gemini, and local models in the same workflow",
            },
            {
              title: "Context Aware",
              description:
                "Automatic context optimization and token tracking across agents",
            },
            {
              title: "Protocol Native",
              description:
                "Built-in support for MCP, A2A, and AG-UI protocols",
            },
          ].map((feature) => (
            <div
              key={feature.title}
              className="border-border bg-surface/50 rounded-lg border p-4 text-center"
            >
              <h3 className="text-foreground font-display font-semibold">
                {feature.title}
              </h3>
              <p className="text-muted mt-1 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

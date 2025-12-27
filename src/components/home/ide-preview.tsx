"use client";

import { useState, useCallback } from "react";

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
  stop: () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-3.5 w-3.5">
      <rect x="4" y="4" width="16" height="16" rx="2" />
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
  context: () => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className="h-3.5 w-3.5"
    >
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M3 9h18" />
      <path d="M9 21V9" />
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
  git: () => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className="h-3.5 w-3.5"
    >
      <circle cx="12" cy="18" r="3" />
      <circle cx="6" cy="6" r="3" />
      <circle cx="18" cy="6" r="3" />
      <path d="M18 9v2a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V9" />
      <path d="M12 12v3" />
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
  tokens: number;
};

type LogEntry = {
  time: string;
  event: string;
  node: string;
  type: string;
  tokens: number;
};

const nodes: Node[] = [
  { id: 1, type: "trigger", name: "user_input", x: 40, y: 130, tokens: 0 },
  {
    id: 2,
    type: "agent",
    name: "research_agent",
    x: 200,
    y: 80,
    model: "claude-sonnet-4",
    tokens: 2840,
  },
  { id: 3, type: "tool", name: "web_search", x: 200, y: 190, tokens: 4200 },
  {
    id: 4,
    type: "agent",
    name: "writer_agent",
    x: 380,
    y: 130,
    model: "gpt-4o",
    tokens: 3100,
  },
  { id: 5, type: "output", name: "file_output", x: 540, y: 130, tokens: 0 },
];

const connections = [
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

function ContextMeter({ used, total }: { used: number; total: number }) {
  const pct = (used / total) * 100;
  const getColor = () => {
    if (pct < 50) return "bg-emerald-500";
    if (pct < 75) return "bg-amber-500";
    return "bg-red-500";
  };
  return (
    <div className="w-full">
      <div className="mb-1 flex justify-between font-mono text-xs">
        <span className="text-neutral-500">
          {(used / 1000).toFixed(1)}k / {(total / 1000).toFixed(0)}k tokens
        </span>
        <span className="text-neutral-400">{pct.toFixed(1)}%</span>
      </div>
      <div className="h-1.5 overflow-hidden rounded-full bg-neutral-800">
        <div
          className={`h-full ${getColor()} transition-all duration-300`}
          style={{ width: `${Math.min(pct, 100)}%` }}
        />
      </div>
    </div>
  );
}

export function IDEPreview() {
  const [activeTab, setActiveTab] = useState("canvas");
  const [selectedNode, setSelectedNode] = useState<Node | null>(null);
  const [isRunning, setIsRunning] = useState(false);
  const [executionLogs, setExecutionLogs] = useState<LogEntry[]>([]);
  const [rightPanel, setRightPanel] = useState("properties");
  const [contextData, setContextData] = useState({
    total: 128000,
    used: 0,
  });

  const simulateExecution = useCallback(() => {
    setIsRunning(true);
    setExecutionLogs([]);
    setContextData({ total: 128000, used: 0 });

    const logs: LogEntry[] = [
      {
        time: "10:23:01.234",
        event: "workflow.started",
        node: "system",
        type: "system",
        tokens: 0,
      },
      {
        time: "10:23:01.456",
        event: "node.activated",
        node: "research_agent",
        type: "start",
        tokens: 1200,
      },
      {
        time: "10:23:02.012",
        event: "tool.invoked → web_search",
        node: "research_agent",
        type: "tool",
        tokens: 2840,
      },
      {
        time: "10:23:04.234",
        event: "tool.response (8 results)",
        node: "web_search",
        type: "data",
        tokens: 4200,
      },
      {
        time: "10:23:04.567",
        event: "context.optimized (-1200 tokens)",
        node: "system",
        type: "optimize",
        tokens: -1200,
      },
      {
        time: "10:23:05.123",
        event: "node.completed",
        node: "research_agent",
        type: "success",
        tokens: 0,
      },
      {
        time: "10:23:05.456",
        event: "node.activated",
        node: "writer_agent",
        type: "start",
        tokens: 3100,
      },
      {
        time: "10:23:08.234",
        event: "output.streaming...",
        node: "writer_agent",
        type: "stream",
        tokens: 1800,
      },
      {
        time: "10:23:12.012",
        event: "file.written → output.md",
        node: "file_output",
        type: "success",
        tokens: 0,
      },
      {
        time: "10:23:12.234",
        event: "workflow.completed (11.0s)",
        node: "system",
        type: "complete",
        tokens: 0,
      },
    ];

    let totalTokens = 0;
    logs.forEach((log, i) => {
      setTimeout(() => {
        setExecutionLogs((prev) => [...prev, log]);
        if (log.tokens !== 0) {
          totalTokens += log.tokens;
          setContextData((prev) => ({
            ...prev,
            used: Math.max(0, totalTokens),
          }));
        }
        if (i === logs.length - 1) setIsRunning(false);
      }, i * 350);
    });
  }, []);

  return (
    <section className="py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <div className="mx-auto mb-8 max-w-2xl text-center">
          <h2 className="font-display text-foreground text-2xl font-bold tracking-tight sm:text-3xl">
            Visual Agent Builder
          </h2>
          <p className="text-muted mt-2 text-base">
            Design multi-agent workflows visually. Click nodes, switch tabs, and
            run the simulation.
          </p>
        </div>

        {/* IDE Preview - Full Interactive */}
        <div className="mx-auto max-w-6xl">
          <div
            className="flex h-[520px] flex-col overflow-hidden rounded-xl border border-neutral-800 bg-neutral-950 text-neutral-200 shadow-2xl"
            style={{
              fontFamily: "'JetBrains Mono', 'SF Mono', 'Fira Code', monospace",
            }}
          >
            {/* Title Bar */}
            <div className="flex h-8 shrink-0 items-center justify-between border-b border-neutral-800 bg-neutral-900 px-3">
              <div className="flex items-center gap-3">
                <div className="flex gap-1.5">
                  <div className="h-2.5 w-2.5 rounded-full bg-neutral-700 transition-colors hover:bg-red-500" />
                  <div className="h-2.5 w-2.5 rounded-full bg-neutral-700 transition-colors hover:bg-amber-500" />
                  <div className="h-2.5 w-2.5 rounded-full bg-neutral-700 transition-colors hover:bg-emerald-500" />
                </div>
                <div className="h-4 w-px bg-neutral-800" />
                <span className="text-xs tracking-wide text-neutral-400">
                  sagesyn
                </span>
                <span className="text-xs text-neutral-600">
                  ~/projects/research-assistant.sag
                </span>
              </div>
              <div className="flex items-center gap-3 text-xs">
                <span className="flex items-center gap-1.5 text-neutral-500">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                  ollama:llama3.3
                </span>
                <span className="text-neutral-700">v0.1.0</span>
              </div>
            </div>

            {/* Toolbar */}
            <div className="flex h-9 shrink-0 items-center gap-2 border-b border-neutral-800 bg-neutral-900/50 px-3">
              <div className="flex items-center rounded border border-neutral-800 bg-neutral-900">
                {[
                  { id: "canvas", icon: Icons.canvas, label: "canvas" },
                  { id: "code", icon: Icons.code, label: "code" },
                  { id: "monitor", icon: Icons.monitor, label: "logs" },
                  { id: "context", icon: Icons.context, label: "context" },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center gap-1.5 border-r border-neutral-800 px-3 py-1.5 text-xs transition-all last:border-r-0 ${
                      activeTab === tab.id
                        ? "bg-neutral-800 text-neutral-100"
                        : "text-neutral-500 hover:bg-neutral-800/50 hover:text-neutral-300"
                    }`}
                  >
                    <tab.icon />
                    <span>{tab.label}</span>
                  </button>
                ))}
              </div>

              <div className="h-4 w-px bg-neutral-800" />

              <button
                onClick={simulateExecution}
                disabled={isRunning}
                className={`flex items-center gap-1.5 rounded px-3 py-1.5 text-xs font-medium transition-all ${
                  isRunning
                    ? "border border-amber-500/30 bg-amber-500/10 text-amber-400"
                    : "border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 hover:bg-emerald-500/20"
                }`}
              >
                {isRunning ? (
                  <>
                    <Icons.stop /> running
                  </>
                ) : (
                  <>
                    <Icons.play /> run
                  </>
                )}
              </button>

              <div className="flex-1" />

              {/* Context indicator */}
              <div className="hidden w-40 sm:block">
                <ContextMeter
                  used={contextData.used}
                  total={contextData.total}
                />
              </div>

              <div className="h-4 w-px bg-neutral-800" />

              <select className="rounded border border-neutral-800 bg-neutral-900 px-2 py-1 text-xs text-neutral-400 focus:border-neutral-700 focus:outline-none">
                <option>claude-sonnet-4</option>
                <option>gpt-4o</option>
                <option>gemini-2.5-pro</option>
                <option>llama3.3:70b</option>
              </select>
            </div>

            {/* Main Content */}
            <div className="flex flex-1 overflow-hidden">
              {/* Left Sidebar */}
              <div className="hidden w-48 shrink-0 flex-col border-r border-neutral-800 bg-neutral-900/30 sm:flex">
                <div className="border-b border-neutral-800 p-2">
                  <div className="flex items-center gap-1.5 rounded border border-neutral-800 bg-neutral-900 px-2 py-1.5 text-xs text-neutral-500">
                    <Icons.search />
                    <span>search...</span>
                  </div>
                </div>

                <div className="flex-1 overflow-auto p-2">
                  <div className="mb-2 px-1 text-xs tracking-wider text-neutral-600 uppercase">
                    nodes
                  </div>

                  <div className="space-y-0.5">
                    {(
                      [
                        { type: "trigger", name: "trigger" },
                        { type: "agent", name: "agent" },
                        { type: "tool", name: "tool" },
                        { type: "output", name: "output" },
                      ] as const
                    ).map((item) => (
                      <div
                        key={item.type}
                        className="flex cursor-grab items-center gap-2 rounded px-2 py-1.5 text-xs text-neutral-400 transition-colors hover:bg-neutral-800 hover:text-neutral-200"
                      >
                        <span className="text-neutral-500">
                          <NodeIcon type={item.type} />
                        </span>
                        <span>{item.name}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-4 mb-2 px-1 text-xs tracking-wider text-neutral-600 uppercase">
                    mcp servers
                  </div>
                  <div className="space-y-0.5 text-xs">
                    {[
                      { name: "filesystem", status: "active" },
                      { name: "brave_search", status: "active" },
                      { name: "github", status: "idle" },
                      { name: "postgres", status: "idle" },
                    ].map((tool) => (
                      <div
                        key={tool.name}
                        className="flex cursor-pointer items-center justify-between rounded px-2 py-1.5 text-neutral-500 hover:bg-neutral-800 hover:text-neutral-300"
                      >
                        <span>{tool.name}</span>
                        <span
                          className={`h-1.5 w-1.5 rounded-full ${tool.status === "active" ? "bg-emerald-500" : "bg-neutral-700"}`}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Main Panel */}
              <div className="flex flex-1 flex-col overflow-hidden">
                {activeTab === "canvas" && (
                  <div
                    className="relative flex-1 overflow-hidden bg-neutral-950"
                    style={{
                      backgroundImage: `
                        linear-gradient(rgba(38,38,38,0.5) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(38,38,38,0.5) 1px, transparent 1px)
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
                        const x1 = from.x + 120;
                        const y1 = from.y + 28;
                        const x2 = to.x;
                        const y2 = to.y + 28;
                        const midX = (x1 + x2) / 2;
                        return (
                          <g key={i}>
                            <path
                              d={`M ${x1} ${y1} C ${midX} ${y1}, ${midX} ${y2}, ${x2} ${y2}`}
                              fill="none"
                              stroke={isRunning ? "#10b981" : "#404040"}
                              strokeWidth="1.5"
                              className={isRunning ? "animate-pulse" : ""}
                            />
                            <circle
                              cx={x2}
                              cy={y2}
                              r="3"
                              fill={isRunning ? "#10b981" : "#404040"}
                            />
                          </g>
                        );
                      })}
                    </svg>

                    {/* Nodes */}
                    {nodes.map((node) => (
                      <div
                        key={node.id}
                        onClick={() => {
                          setSelectedNode(node);
                          setRightPanel("properties");
                        }}
                        className={`absolute cursor-pointer transition-all duration-150 ${
                          selectedNode?.id === node.id ? "z-10" : ""
                        }`}
                        style={{ left: node.x, top: node.y, width: 120 }}
                      >
                        <div
                          className={`rounded border bg-neutral-900 transition-all ${
                            selectedNode?.id === node.id
                              ? "border-neutral-500 shadow-lg shadow-neutral-900"
                              : "border-neutral-800 hover:border-neutral-700"
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
                                        : "bg-neutral-800 text-neutral-400"
                                }`}
                              >
                                <NodeIcon type={node.type} />
                              </div>
                              <span
                                className={`h-1.5 w-1.5 rounded-full ${
                                  isRunning
                                    ? "animate-pulse bg-amber-400"
                                    : "bg-neutral-700"
                                }`}
                              />
                            </div>
                            <div className="truncate text-xs font-medium text-neutral-300">
                              {node.name}
                            </div>
                            {node.model && (
                              <div className="mt-0.5 truncate text-xs text-neutral-600">
                                {node.model}
                              </div>
                            )}
                            {node.tokens > 0 && (
                              <div className="mt-1 text-xs text-neutral-600">
                                {(node.tokens / 1000).toFixed(1)}k tok
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}

                    {/* Canvas controls */}
                    <div className="absolute right-3 bottom-3 flex items-center gap-1 rounded border border-neutral-800 bg-neutral-900 text-xs">
                      <button className="flex h-7 w-7 items-center justify-center text-neutral-500 hover:bg-neutral-800">
                        −
                      </button>
                      <span className="w-12 text-center text-neutral-600">
                        100%
                      </span>
                      <button className="flex h-7 w-7 items-center justify-center text-neutral-500 hover:bg-neutral-800">
                        +
                      </button>
                    </div>
                  </div>
                )}

                {activeTab === "code" && (
                  <div className="flex-1 overflow-auto bg-neutral-950">
                    <div className="p-4 text-xs leading-relaxed">
                      <pre className="text-neutral-400">
                        <code>
                          {`# research-assistant.sag
# Sage Agent Programming Language

agent: research_assistant
version: 1.0

model:
  provider: anthropic
  name: claude-sonnet-4
  context_window: 128000

protocols:
  mcp:
    servers: [brave_search, filesystem]
  a2a:
    discoverable: true
    capabilities: [research, summarize]
  ag_ui:
    stream_events: true

tools:
  - name: web_search
    mcp_server: brave_search
    description: "Search the web"

  - name: write_file
    mcp_server: filesystem
    description: "Write output to file"

workflow:
  - perceive: { from: trigger.user_input }
  - reason:
      depth: 3
      strategy: chain_of_thought
  - execute:
      tools: [web_search]
      parallel: true
  - respond:
      format: markdown
      stream: true
      output: file_output`}
                        </code>
                      </pre>
                    </div>
                  </div>
                )}

                {activeTab === "monitor" && (
                  <div className="flex-1 overflow-auto bg-neutral-950 p-3">
                    <div className="mb-3 flex items-center justify-between text-xs">
                      <span className="text-neutral-500">execution log</span>
                      <div className="flex items-center gap-4 text-neutral-600">
                        <span>
                          tokens:{" "}
                          <span className="text-neutral-400">
                            {contextData.used.toLocaleString()}
                          </span>
                        </span>
                        <span>
                          cost: <span className="text-emerald-400">$0.042</span>
                        </span>
                        <span>
                          duration:{" "}
                          <span className="text-neutral-400">11.0s</span>
                        </span>
                      </div>
                    </div>

                    <div className="space-y-px font-mono">
                      {executionLogs.length === 0 ? (
                        <div className="py-12 text-center text-xs text-neutral-600">
                          press run to start execution
                        </div>
                      ) : (
                        executionLogs.map((log, i) => (
                          <div
                            key={i}
                            className={`flex items-center gap-3 rounded px-2 py-1.5 text-xs ${
                              log.type === "complete"
                                ? "bg-emerald-500/5"
                                : log.type === "optimize"
                                  ? "bg-blue-500/5"
                                  : "hover:bg-neutral-900"
                            }`}
                          >
                            <span className="w-20 shrink-0 text-neutral-700">
                              {log.time}
                            </span>
                            <span
                              className={`w-24 shrink-0 ${
                                log.type === "start"
                                  ? "text-blue-400"
                                  : log.type === "tool"
                                    ? "text-amber-400"
                                    : log.type === "success" ||
                                        log.type === "complete"
                                      ? "text-emerald-400"
                                      : log.type === "optimize"
                                        ? "text-cyan-400"
                                        : log.type === "stream"
                                          ? "text-purple-400"
                                          : "text-neutral-600"
                              }`}
                            >
                              {log.node}
                            </span>
                            <span className="flex-1 text-neutral-400">
                              {log.event}
                            </span>
                            {log.tokens !== 0 && (
                              <span
                                className={`text-xs ${log.tokens > 0 ? "text-neutral-600" : "text-cyan-500"}`}
                              >
                                {log.tokens > 0 ? "+" : ""}
                                {log.tokens}
                              </span>
                            )}
                          </div>
                        ))
                      )}
                    </div>
                  </div>
                )}

                {activeTab === "context" && (
                  <div className="flex-1 overflow-auto bg-neutral-950 p-4">
                    <div className="max-w-2xl">
                      <div className="mb-6">
                        <div className="mb-3 text-xs tracking-wider text-neutral-500 uppercase">
                          context window inspector
                        </div>
                        <ContextMeter
                          used={contextData.used}
                          total={contextData.total}
                        />
                      </div>

                      {/* Visual context breakdown */}
                      <div className="mb-6">
                        <div className="mb-2 text-xs text-neutral-500">
                          allocation
                        </div>
                        <div className="flex h-8 overflow-hidden rounded border border-neutral-800 bg-neutral-900">
                          <div
                            className="h-full border-r border-neutral-800 bg-blue-500/30"
                            style={{ width: "15%" }}
                            title="System prompt"
                          />
                          <div
                            className="h-full border-r border-neutral-800 bg-emerald-500/30"
                            style={{ width: "5%" }}
                            title="User input"
                          />
                          <div
                            className="h-full border-r border-neutral-800 bg-amber-500/30"
                            style={{
                              width: `${Math.min((contextData.used / contextData.total) * 100, 30)}%`,
                            }}
                            title="Tool results"
                          />
                          <div
                            className="h-full bg-purple-500/30"
                            style={{ width: "10%" }}
                            title="Agent responses"
                          />
                        </div>
                        <div className="mt-2 flex gap-4 text-xs">
                          <span className="flex items-center gap-1.5">
                            <span className="h-2 w-2 rounded bg-blue-500/50" />
                            system
                          </span>
                          <span className="flex items-center gap-1.5">
                            <span className="h-2 w-2 rounded bg-emerald-500/50" />
                            input
                          </span>
                          <span className="flex items-center gap-1.5">
                            <span className="h-2 w-2 rounded bg-amber-500/50" />
                            tools
                          </span>
                          <span className="flex items-center gap-1.5">
                            <span className="h-2 w-2 rounded bg-purple-500/50" />
                            output
                          </span>
                        </div>
                      </div>

                      {/* Token breakdown by node */}
                      <div className="mb-6">
                        <div className="mb-2 text-xs text-neutral-500">
                          by node
                        </div>
                        <div className="space-y-1">
                          {nodes
                            .filter((n) => n.tokens > 0)
                            .map((node) => (
                              <div
                                key={node.id}
                                className="flex items-center gap-3 text-xs"
                              >
                                <span className="w-28 text-neutral-500">
                                  {node.name}
                                </span>
                                <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-neutral-900">
                                  <div
                                    className="h-full bg-neutral-600"
                                    style={{
                                      width: `${(node.tokens / contextData.total) * 100 * 10}%`,
                                    }}
                                  />
                                </div>
                                <span className="w-16 text-right text-neutral-600">
                                  {node.tokens.toLocaleString()}
                                </span>
                              </div>
                            ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Right Sidebar */}
              <div className="hidden w-56 shrink-0 flex-col border-l border-neutral-800 bg-neutral-900/30 md:flex">
                <div className="flex border-b border-neutral-800">
                  {["properties", "models"].map((panel) => (
                    <button
                      key={panel}
                      onClick={() => setRightPanel(panel)}
                      className={`flex-1 py-2 text-xs transition-colors ${
                        rightPanel === panel
                          ? "border-b border-neutral-500 text-neutral-200"
                          : "text-neutral-600 hover:text-neutral-400"
                      }`}
                    >
                      {panel}
                    </button>
                  ))}
                </div>

                <div className="flex-1 overflow-auto p-3 text-xs">
                  {rightPanel === "properties" &&
                    (selectedNode ? (
                      <div className="space-y-3">
                        <div>
                          <label className="mb-1 block text-neutral-600">
                            name
                          </label>
                          <input
                            type="text"
                            value={selectedNode.name}
                            className="w-full rounded border border-neutral-800 bg-neutral-900 px-2 py-1.5 text-neutral-300 focus:border-neutral-700 focus:outline-none"
                            readOnly
                          />
                        </div>
                        <div>
                          <label className="mb-1 block text-neutral-600">
                            type
                          </label>
                          <div className="flex items-center gap-2 rounded border border-neutral-800 bg-neutral-900 px-2 py-1.5 text-neutral-400">
                            <NodeIcon type={selectedNode.type} />
                            <span>{selectedNode.type}</span>
                          </div>
                        </div>
                        {selectedNode.type === "agent" && (
                          <>
                            <div>
                              <label className="mb-1 block text-neutral-600">
                                model
                              </label>
                              <select className="w-full rounded border border-neutral-800 bg-neutral-900 px-2 py-1.5 text-neutral-400 focus:outline-none">
                                <option>claude-sonnet-4</option>
                                <option>gpt-4o</option>
                                <option>llama3.3:70b</option>
                              </select>
                            </div>
                            <div>
                              <label className="mb-1 block text-neutral-600">
                                instructions
                              </label>
                              <textarea
                                className="h-24 w-full resize-none rounded border border-neutral-800 bg-neutral-900 px-2 py-1.5 text-neutral-400 focus:border-neutral-700 focus:outline-none"
                                defaultValue="You are a research specialist..."
                              />
                            </div>
                          </>
                        )}
                      </div>
                    ) : (
                      <div className="py-12 text-center text-neutral-700">
                        select a node
                      </div>
                    ))}

                  {rightPanel === "models" && (
                    <div className="space-y-2">
                      {[
                        {
                          name: "anthropic",
                          models: ["claude-sonnet-4", "claude-haiku"],
                          active: true,
                        },
                        {
                          name: "openai",
                          models: ["gpt-4o", "gpt-4o-mini"],
                          active: true,
                        },
                        {
                          name: "ollama",
                          models: ["llama3.3:70b"],
                          active: true,
                        },
                        { name: "google", models: [], active: false },
                      ].map((provider) => (
                        <div
                          key={provider.name}
                          className="rounded border border-neutral-800 bg-neutral-900 p-2"
                        >
                          <div className="mb-1 flex items-center justify-between">
                            <span className="text-neutral-400">
                              {provider.name}
                            </span>
                            <span
                              className={`h-1.5 w-1.5 rounded-full ${provider.active ? "bg-emerald-500" : "bg-neutral-700"}`}
                            />
                          </div>
                          {provider.models.length > 0 ? (
                            <div className="flex flex-wrap gap-1">
                              {provider.models.map((m) => (
                                <span
                                  key={m}
                                  className="rounded bg-neutral-800 px-1.5 py-0.5 text-neutral-500"
                                >
                                  {m}
                                </span>
                              ))}
                            </div>
                          ) : (
                            <span className="text-neutral-700">
                              not configured
                            </span>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Status Bar */}
            <div className="flex h-6 shrink-0 items-center justify-between border-t border-neutral-800 bg-neutral-900 px-3 text-xs">
              <div className="flex items-center gap-4 text-neutral-600">
                <span>5 nodes</span>
                <span>4 mcp servers</span>
                <span className="flex items-center gap-1">
                  <Icons.git />
                  main
                </span>
              </div>
              <div className="flex items-center gap-4 text-neutral-600">
                <span className="flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                  connected
                </span>
                <span>saved</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

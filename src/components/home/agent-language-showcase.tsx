"use client";

import { useState } from "react";
import { Copy, Check, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const agentCode = `agent: research_assistant
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
    description: "Search the web for information"

workflow:
  - perceive: { from: trigger.user_input }
  - reason: { depth: 3, strategy: chain_of_thought }
  - execute: { tools: [web_search] }
  - respond: { format: markdown, stream: true }`;

const compiledExamples = {
  typescript: {
    label: "TypeScript",
    code: `import { Agent, MCPServer } from "@sagesyn/runtime-ts";

const braveSearch = new MCPServer("brave_search");
const filesystem = new MCPServer("filesystem");

export const researchAssistant = new Agent({
  name: "research_assistant",
  model: {
    provider: "anthropic",
    name: "claude-sonnet-4",
    contextWindow: 128000,
  },
  protocols: {
    mcp: { servers: [braveSearch, filesystem] },
    a2a: { discoverable: true, capabilities: ["research", "summarize"] },
    agUi: { streamEvents: true },
  },
  tools: [
    { name: "web_search", mcpServer: braveSearch },
  ],
  workflow: [
    { perceive: { from: "trigger.user_input" } },
    { reason: { depth: 3, strategy: "chain_of_thought" } },
    { execute: { tools: ["web_search"] } },
    { respond: { format: "markdown", stream: true } },
  ],
});`,
  },
  python: {
    label: "Python",
    code: `from sagesyn import Agent, MCPServer

brave_search = MCPServer("brave_search")
filesystem = MCPServer("filesystem")

research_assistant = Agent(
    name="research_assistant",
    model={
        "provider": "anthropic",
        "name": "claude-sonnet-4",
        "context_window": 128000,
    },
    protocols={
        "mcp": {"servers": [brave_search, filesystem]},
        "a2a": {"discoverable": True, "capabilities": ["research", "summarize"]},
        "ag_ui": {"stream_events": True},
    },
    tools=[
        {"name": "web_search", "mcp_server": brave_search},
    ],
    workflow=[
        {"perceive": {"from": "trigger.user_input"}},
        {"reason": {"depth": 3, "strategy": "chain_of_thought"}},
        {"execute": {"tools": ["web_search"]}},
        {"respond": {"format": "markdown", "stream": True}},
    ],
)`,
  },
  go: {
    label: "Go",
    code: `package agents

import "github.com/sagesyn/sagesyn-go"

var braveSearch = sagesyn.NewMCPServer("brave_search")
var filesystem = sagesyn.NewMCPServer("filesystem")

var ResearchAssistant = sagesyn.NewAgent(&sagesyn.AgentConfig{
    Name: "research_assistant",
    Model: sagesyn.Model{
        Provider:      "anthropic",
        Name:          "claude-sonnet-4",
        ContextWindow: 128000,
    },
    Protocols: sagesyn.Protocols{
        MCP:  sagesyn.MCPConfig{Servers: []MCPServer{braveSearch, filesystem}},
        A2A:  sagesyn.A2AConfig{Discoverable: true, Capabilities: []string{"research", "summarize"}},
        AGUI: sagesyn.AGUIConfig{StreamEvents: true},
    },
    Tools: []sagesyn.Tool{
        {Name: "web_search", MCPServer: braveSearch},
    },
    Workflow: []sagesyn.Step{
        {Perceive: sagesyn.PerceiveConfig{From: "trigger.user_input"}},
        {Reason: sagesyn.ReasonConfig{Depth: 3, Strategy: "chain_of_thought"}},
        {Execute: sagesyn.ExecuteConfig{Tools: []string{"web_search"}}},
        {Respond: sagesyn.RespondConfig{Format: "markdown", Stream: true}},
    },
})`,
  },
};

type Language = keyof typeof compiledExamples;

export function AgentLanguageShowcase() {
  const [activeTab, setActiveTab] = useState<Language>("typescript");
  const [copiedAgent, setCopiedAgent] = useState(false);
  const [copiedCompiled, setCopiedCompiled] = useState(false);

  const handleCopyAgent = async () => {
    await navigator.clipboard.writeText(agentCode);
    setCopiedAgent(true);
    setTimeout(() => setCopiedAgent(false), 2000);
  };

  const handleCopyCompiled = async () => {
    await navigator.clipboard.writeText(compiledExamples[activeTab].code);
    setCopiedCompiled(true);
    setTimeout(() => setCopiedCompiled(false), 2000);
  };

  return (
    <section className="relative py-12 sm:py-16">
      {/* Background gradient */}
      <div className="via-surface/50 absolute inset-0 bg-gradient-to-b from-transparent to-transparent" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
            Write <span className="gradient-text">.sag</span>, compile to
            anything
          </h2>
          <p className="text-muted mt-4 text-lg">
            Define agents in a clean, declarative syntax. Compile to TypeScript,
            Python, or Go with a single command.
          </p>
        </div>

        {/* Code showcase */}
        <div className="mx-auto mt-16 max-w-6xl">
          <div className="relative grid gap-6 lg:grid-cols-2 lg:gap-12">
            {/* Arrow - positioned absolutely between panels */}
            <div className="pointer-events-none absolute inset-0 z-10 hidden items-center justify-center lg:flex">
              <div className="from-neon-cyan to-neon-magenta flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r shadow-lg">
                <ArrowRight className="text-background h-6 w-6" />
              </div>
            </div>

            {/* Left: .sag file */}
            <div className="relative">
              {/* Glow */}
              <div className="from-neon-cyan/20 to-neon-blue/20 absolute -inset-4 rounded-2xl bg-gradient-to-r blur-2xl" />

              <div className="border-border bg-surface relative overflow-hidden rounded-xl border">
                {/* Header */}
                <div className="border-border bg-surface-elevated flex items-center justify-between border-b px-4 py-3">
                  <div className="flex items-center gap-3">
                    <div className="flex gap-1.5">
                      <div className="h-3 w-3 rounded-full bg-red-500/80" />
                      <div className="h-3 w-3 rounded-full bg-yellow-500/80" />
                      <div className="h-3 w-3 rounded-full bg-green-500/80" />
                    </div>
                    <span className="text-muted font-mono text-sm">
                      research-assistant.sag
                    </span>
                  </div>
                  <button
                    onClick={handleCopyAgent}
                    className="text-muted hover:bg-surface hover:text-foreground flex items-center gap-2 rounded-md px-3 py-1.5 text-sm transition-colors"
                  >
                    {copiedAgent ? (
                      <>
                        <Check className="text-neon-green h-4 w-4" />
                        Copied!
                      </>
                    ) : (
                      <>
                        <Copy className="h-4 w-4" />
                        Copy
                      </>
                    )}
                  </button>
                </div>

                {/* Code */}
                <div className="h-[480px] overflow-auto p-4">
                  <pre className="font-mono text-sm leading-relaxed">
                    <code className="text-foreground/90">{agentCode}</code>
                  </pre>
                </div>
              </div>
            </div>

            {/* Right: Compiled output */}
            <div className="relative">
              {/* Glow */}
              <div className="from-neon-magenta/20 to-neon-orange/20 absolute -inset-4 rounded-2xl bg-gradient-to-r blur-2xl" />

              <div className="border-border bg-surface relative overflow-hidden rounded-xl border">
                {/* Tab bar */}
                <div className="border-border bg-surface-elevated flex items-center justify-between border-b px-4">
                  <div className="flex items-center gap-2">
                    <span className="text-muted py-3 text-xs tracking-wider uppercase">
                      Compiles to
                    </span>
                    <div className="flex">
                      {(Object.keys(compiledExamples) as Language[]).map(
                        (lang) => (
                          <button
                            key={lang}
                            onClick={() => setActiveTab(lang)}
                            className={cn(
                              "relative px-4 py-3 text-sm font-medium transition-colors",
                              activeTab === lang
                                ? "text-foreground"
                                : "text-muted hover:text-foreground"
                            )}
                          >
                            {compiledExamples[lang].label}
                            {activeTab === lang && (
                              <div className="from-neon-cyan to-neon-magenta absolute right-0 bottom-0 left-0 h-0.5 bg-gradient-to-r" />
                            )}
                          </button>
                        )
                      )}
                    </div>
                  </div>

                  {/* Copy button */}
                  <button
                    onClick={handleCopyCompiled}
                    className="text-muted hover:bg-surface hover:text-foreground flex items-center gap-2 rounded-md px-3 py-1.5 text-sm transition-colors"
                  >
                    {copiedCompiled ? (
                      <>
                        <Check className="text-neon-green h-4 w-4" />
                        Copied!
                      </>
                    ) : (
                      <>
                        <Copy className="h-4 w-4" />
                        Copy
                      </>
                    )}
                  </button>
                </div>

                {/* Code content */}
                <div className="h-[480px] overflow-auto p-4">
                  <pre className="font-mono text-sm leading-relaxed">
                    <code className="text-foreground/90">
                      {compiledExamples[activeTab].code}
                    </code>
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

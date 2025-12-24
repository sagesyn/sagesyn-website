"use client";

import { useState } from "react";
import { Copy, Check } from "lucide-react";
import { cn } from "@/lib/utils";

const codeExamples = {
  typescript: {
    label: "TypeScript",
    code: `import { SageSyn, Agent, Tool } from '@sagesyn/sdk';

// Initialize the decision fabric
const fabric = new SageSyn({
  mesh: 'production',
  observability: true,
});

// Define an agent with layered cognition
const researchAgent = new Agent({
  name: 'researcher',
  perceive: async (input) => {
    return fabric.parse(input);
  },
  reason: async (context) => {
    return fabric.plan(context, { depth: 3 });
  },
  execute: async (plan) => {
    return fabric.run(plan, { tools: [webSearch, database] });
  },
});

// Deploy to the mesh
await fabric.deploy(researchAgent);
console.log('Agent live at:', researchAgent.endpoint);`,
  },
  python: {
    label: "Python",
    code: `from sagesyn import SageSyn, Agent, Tool

# Initialize the decision fabric
fabric = SageSyn(
    mesh="production",
    observability=True,
)

# Define an agent with layered cognition
@fabric.agent(name="researcher")
class ResearchAgent(Agent):
    async def perceive(self, input):
        return await self.fabric.parse(input)

    async def reason(self, context):
        return await self.fabric.plan(context, depth=3)

    async def execute(self, plan):
        return await self.fabric.run(
            plan,
            tools=[web_search, database]
        )

# Deploy to the mesh
await fabric.deploy(research_agent)
print(f"Agent live at: {research_agent.endpoint}")`,
  },
  go: {
    label: "Go",
    code: `package main

import (
    "fmt"
    "github.com/sagesyn/sdk-go"
)

func main() {
    // Initialize the decision fabric
    fabric := sagesyn.New(&sagesyn.Config{
        Mesh:          "production",
        Observability: true,
    })

    // Define an agent with layered cognition
    agent := fabric.NewAgent("researcher", &sagesyn.AgentConfig{
        Perceive: func(input any) (any, error) {
            return fabric.Parse(input)
        },
        Reason: func(ctx any) (any, error) {
            return fabric.Plan(ctx, sagesyn.PlanOpts{Depth: 3})
        },
        Execute: func(plan any) (any, error) {
            return fabric.Run(plan, webSearch, database)
        },
    })

    // Deploy to the mesh
    if err := fabric.Deploy(agent); err != nil {
        panic(err)
    }
    fmt.Printf("Agent live at: %s\\n", agent.Endpoint)
}`,
  },
};

type Language = keyof typeof codeExamples;

export function CodeShowcase() {
  const [activeTab, setActiveTab] = useState<Language>("typescript");
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(codeExamples[activeTab].code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative py-24 sm:py-32">
      {/* Background gradient */}
      <div className="via-surface/50 absolute inset-0 bg-gradient-to-b from-transparent to-transparent" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
            Build with <span className="gradient-text">any language</span>
          </h2>
          <p className="text-muted mt-4 text-lg">
            First-class SDKs for TypeScript, Python, and Go. Define agents with
            clean, declarative APIs.
          </p>
        </div>

        {/* Code window */}
        <div className="mx-auto mt-16 max-w-4xl">
          <div className="relative">
            {/* Glow */}
            <div className="from-neon-cyan/10 via-neon-magenta/10 to-neon-cyan/10 absolute -inset-4 rounded-2xl bg-gradient-to-r blur-2xl" />

            {/* Window */}
            <div className="border-border bg-surface relative overflow-hidden rounded-xl border">
              {/* Tab bar */}
              <div className="border-border bg-surface-elevated flex items-center justify-between border-b px-4">
                <div className="flex">
                  {(Object.keys(codeExamples) as Language[]).map((lang) => (
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
                      {codeExamples[lang].label}
                      {activeTab === lang && (
                        <div className="from-neon-cyan to-neon-magenta absolute right-0 bottom-0 left-0 h-0.5 bg-gradient-to-r" />
                      )}
                    </button>
                  ))}
                </div>

                {/* Copy button */}
                <button
                  onClick={handleCopy}
                  className="text-muted hover:bg-surface hover:text-foreground flex items-center gap-2 rounded-md px-3 py-1.5 text-sm transition-colors"
                >
                  {copied ? (
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
              <div className="overflow-x-auto p-6">
                <pre className="font-mono text-sm leading-relaxed">
                  <code className="text-foreground/90">
                    {codeExamples[activeTab].code}
                  </code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

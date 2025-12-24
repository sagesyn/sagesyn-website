"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const demoLines = [
  { type: "command", content: "sagesyn deploy --mesh production" },
  { type: "output", content: "Deploying agents to production mesh..." },
  { type: "success", content: "✓ researcher-agent deployed" },
  { type: "success", content: "✓ planner-agent deployed" },
  { type: "success", content: "✓ executor-agent deployed" },
  { type: "output", content: "" },
  { type: "command", content: "sagesyn mesh status" },
  { type: "output", content: "" },
  {
    type: "table",
    content: [
      "AGENT            STATUS    LATENCY   REQUESTS",
      "researcher       healthy   12ms      1,247",
      "planner          healthy   8ms       892",
      "executor         healthy   15ms      634",
    ],
  },
  { type: "output", content: "" },
  {
    type: "command",
    content: "sagesyn run --agent researcher 'Find latest AI papers'",
  },
  { type: "output", content: "" },
  { type: "info", content: "[researcher] Perceiving input..." },
  {
    type: "info",
    content: "[researcher] Reasoning with context (depth: 3)...",
  },
  {
    type: "info",
    content: "[researcher] Executing plan with tools: [web_search, arxiv]",
  },
  { type: "output", content: "" },
  { type: "result", content: "Found 12 relevant papers from arxiv.org" },
  {
    type: "result",
    content: "Top result: 'Advances in Multi-Agent Systems' (2024)",
  },
];

export function TerminalDemo() {
  const [visibleLines, setVisibleLines] = useState<number>(0);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    if (visibleLines < demoLines.length) {
      const timer = setTimeout(
        () => {
          setVisibleLines((prev) => prev + 1);
        },
        demoLines[visibleLines]?.type === "command" ? 800 : 200
      );
      return () => clearTimeout(timer);
    } else {
      // Stop typing and reset after a pause
      const resetTimer = setTimeout(() => {
        setIsTyping(false);
      }, 0);
      const loopTimer = setTimeout(() => {
        setVisibleLines(0);
        setIsTyping(true);
      }, 5000);
      return () => {
        clearTimeout(resetTimer);
        clearTimeout(loopTimer);
      };
    }
  }, [visibleLines]);

  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Content */}
          <div>
            <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
              Observe <span className="gradient-text">everything</span>
            </h2>
            <p className="text-muted mt-4 text-lg">
              Full visibility into your agent mesh. Track requests, latency, and
              decisions in real-time. Debug complex multi-agent workflows with
              ease.
            </p>

            <ul className="mt-8 space-y-4">
              {[
                "Real-time metrics and health monitoring",
                "Trace requests across agent boundaries",
                "Audit logs for every decision made",
                "Alert on anomalies and failures",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-sm">
                  <span className="bg-neon-cyan inline-block h-1.5 w-1.5 rounded-full" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Terminal */}
          <div className="relative">
            {/* Glow */}
            <div className="from-neon-cyan/10 to-neon-magenta/10 absolute -inset-4 rounded-2xl bg-gradient-to-r blur-2xl" />

            {/* Window */}
            <div className="border-border bg-surface relative overflow-hidden rounded-xl border">
              {/* Title bar */}
              <div className="border-border bg-surface-elevated flex items-center gap-2 border-b px-4 py-3">
                <div className="h-3 w-3 rounded-full bg-red-500/80" />
                <div className="h-3 w-3 rounded-full bg-yellow-500/80" />
                <div className="h-3 w-3 rounded-full bg-green-500/80" />
                <span className="text-muted ml-4 font-mono text-xs">
                  sagesyn-cli
                </span>
              </div>

              {/* Terminal content */}
              <div className="h-[400px] overflow-hidden p-6 font-mono text-sm">
                {demoLines.slice(0, visibleLines).map((line, index) => (
                  <div
                    key={index}
                    className={cn(
                      "animate-fade-in",
                      line.type === "command" && "mt-2 first:mt-0"
                    )}
                  >
                    {line.type === "command" && (
                      <div className="flex items-center gap-2">
                        <span className="text-neon-green">$</span>
                        <span className="text-foreground">{line.content}</span>
                      </div>
                    )}
                    {line.type === "output" && (
                      <p className="text-muted">{line.content}</p>
                    )}
                    {line.type === "success" && (
                      <p className="text-neon-green">{line.content}</p>
                    )}
                    {line.type === "info" && (
                      <p className="text-neon-blue">{line.content}</p>
                    )}
                    {line.type === "result" && (
                      <p className="text-neon-cyan">{line.content}</p>
                    )}
                    {line.type === "table" &&
                      Array.isArray(line.content) &&
                      line.content.map((row, i) => (
                        <p
                          key={i}
                          className={cn(
                            i === 0 ? "text-muted" : "text-foreground/80"
                          )}
                        >
                          {row}
                        </p>
                      ))}
                  </div>
                ))}

                {/* Cursor */}
                {isTyping && (
                  <div className="mt-2 flex items-center gap-2">
                    <span className="text-neon-green">$</span>
                    <span className="animate-terminal-blink bg-neon-cyan inline-block h-4 w-2" />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

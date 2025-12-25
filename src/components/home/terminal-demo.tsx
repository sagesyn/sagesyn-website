"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const demoLines = [
  {
    type: "command",
    content: "sagesyn compile research.ssag --target typescript",
  },
  { type: "output", content: "Compiling research.ssag..." },
  { type: "success", content: "✓ Parsed agent definition" },
  { type: "success", content: "✓ Validated MCP server references" },
  { type: "success", content: "✓ Generated dist/research-agent.ts" },
  { type: "output", content: "" },
  { type: "command", content: "sagesyn lsp --check" },
  { type: "output", content: "" },
  {
    type: "table",
    content: [
      "DIAGNOSTICS     COUNT    STATUS",
      "errors          0        pass",
      "warnings        1        info",
      "hints           3        info",
    ],
  },
  { type: "output", content: "" },
  {
    type: "command",
    content: 'sagesyn run research.ssag --input "Find AI papers"',
  },
  { type: "output", content: "" },
  { type: "info", content: "[research] Perceiving input..." },
  {
    type: "info",
    content: "[research] Reasoning with context (depth: 3)...",
  },
  {
    type: "info",
    content: "[research] Executing tools: [brave_search, arxiv]",
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
    <section className="relative py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Content */}
          <div>
            <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
              Compile, check, <span className="gradient-text">run</span>
            </h2>
            <p className="text-muted mt-4 text-lg">
              The sagesyn CLI compiles your .ssag files to production code,
              validates with the LSP, and runs agents directly. Full debugging
              with source maps.
            </p>

            <ul className="mt-8 space-y-4">
              {[
                "Compile to TypeScript, Python, or Go",
                "LSP diagnostics from the command line",
                "Run agents locally or in the cloud",
                "Debug with source maps back to .ssag",
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

import { techStack } from "@/data/mission";
import { Box, Code2, Layers, PenTool, Database, Palette } from "lucide-react";

const techIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  desktop: Box,
  frontend: Code2,
  canvas: Layers,
  editor: PenTool,
  database: Database,
  styling: Palette,
};

const techLabels: Record<string, string> = {
  desktop: "Desktop Shell",
  frontend: "Frontend",
  canvas: "Visual Canvas",
  editor: "Code Editor",
  database: "Data Storage",
  styling: "Styling",
};

export function TechStack() {
  return (
    <section className="py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-foreground text-3xl font-bold tracking-tight sm:text-4xl">
            Built with Modern Technology
          </h2>
          <p className="text-muted mt-4 text-lg">
            A carefully selected stack optimized for performance, developer
            experience, and cross-platform compatibility
          </p>
        </div>

        {/* Tech grid */}
        <div className="mx-auto mt-16 grid max-w-4xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {Object.entries(techStack).map(([key, value]) => {
            const Icon = techIcons[key] || Box;
            return (
              <div
                key={key}
                className="border-border bg-surface group hover:border-brand-cyan/50 rounded-xl border p-6 transition-all"
              >
                <div className="mb-4 flex items-center gap-3">
                  <div className="bg-brand-gradient rounded-lg p-2">
                    <Icon className="h-5 w-5 text-white" />
                  </div>
                  <span className="text-muted text-sm">
                    {techLabels[key] || key}
                  </span>
                </div>
                <p className="font-display text-foreground text-lg font-semibold">
                  {value}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

import { openSourceInfo } from "@/data/mission";
import {
  Github,
  MessageCircle,
  Users,
  Code2,
  BookOpen,
  Globe,
} from "lucide-react";
import Link from "next/link";

const contributionIcons: Record<
  string,
  React.ComponentType<{ className?: string }>
> = {
  codeContributions: Code2,
  documentation: BookOpen,
  translations: Globe,
  mcpServers: MessageCircle,
  plugins: Users,
};

const contributionLabels: Record<string, string> = {
  codeContributions: "Code Contributions",
  documentation: "Documentation",
  translations: "Translations",
  mcpServers: "MCP Servers",
  plugins: "Plugins & Extensions",
};

export function OpenSource() {
  return (
    <section className="bg-surface py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          {/* Header */}
          <div className="text-center">
            <div className="bg-brand-cyan/10 border-brand-cyan/30 text-brand-cyan mb-6 inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium">
              <Github className="h-4 w-4" />
              {openSourceInfo.license} Licensed
            </div>
            <h2 className="font-display text-foreground text-3xl font-bold tracking-tight sm:text-4xl">
              Open Source at Heart
            </h2>
            <p className="text-muted mx-auto mt-4 max-w-2xl text-lg">
              SageSyn is built in the open. Join our growing community of
              developers, contributors, and agent builders.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href={`https://${openSourceInfo.repository}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-foreground text-background hover:bg-foreground/90 inline-flex items-center gap-2 rounded-lg px-6 py-3 font-semibold transition-all"
            >
              <Github className="h-5 w-5" />
              View on GitHub
            </Link>
            <Link
              href={`https://${openSourceInfo.repository}#contributing`}
              target="_blank"
              rel="noopener noreferrer"
              className="border-border text-foreground hover:bg-surface-elevated inline-flex items-center gap-2 rounded-lg border px-6 py-3 font-semibold transition-all"
            >
              <Code2 className="h-5 w-5" />
              Contributing Guide
            </Link>
          </div>

          {/* Community channels */}
          <div className="mt-16">
            <h3 className="text-foreground mb-6 text-center text-lg font-semibold">
              Join the Community
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {openSourceInfo.community.map((channel) => (
                <div
                  key={channel}
                  className="border-border bg-background flex items-center gap-2 rounded-full border px-4 py-2"
                >
                  {channel.includes("Discord") && (
                    <MessageCircle className="text-brand-indigo h-4 w-4" />
                  )}
                  {channel.includes("GitHub") && (
                    <Github className="text-foreground h-4 w-4" />
                  )}
                  {channel.includes("Office") && (
                    <Users className="text-brand-cyan h-4 w-4" />
                  )}
                  <span className="text-foreground text-sm">{channel}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Ways to contribute */}
          <div className="mt-16">
            <h3 className="text-foreground mb-6 text-center text-lg font-semibold">
              Ways to Contribute
            </h3>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
              {Object.entries(openSourceInfo.contributing).map(
                ([key, enabled]) =>
                  enabled && (
                    <div
                      key={key}
                      className="border-border bg-background rounded-lg border p-4 text-center"
                    >
                      {(() => {
                        const Icon = contributionIcons[key] || Code2;
                        return (
                          <Icon className="text-brand-cyan mx-auto mb-2 h-6 w-6" />
                        );
                      })()}
                      <span className="text-muted text-sm">
                        {contributionLabels[key] || key}
                      </span>
                    </div>
                  )
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

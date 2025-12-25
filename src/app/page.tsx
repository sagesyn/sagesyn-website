import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/home/hero";
import { IDEPreview } from "@/components/home/ide-preview";
import { ValueProps } from "@/components/home/value-props";
import { AgentLanguageShowcase } from "@/components/home/agent-language-showcase";
import { TerminalDemo } from "@/components/home/terminal-demo";
import { CTASection } from "@/components/home/cta-section";

export default function HomePage() {
  return (
    <div className="relative min-h-screen">
      {/* Grid background effect */}
      <div className="grid-background fixed inset-0 opacity-50" />

      {/* Gradient overlay */}
      <div className="to-background pointer-events-none fixed inset-0 bg-gradient-to-b from-transparent via-transparent" />

      {/* Main content */}
      <div className="relative z-10">
        <Header />
        <main>
          <Hero />
          <IDEPreview />
          <ValueProps />
          <AgentLanguageShowcase />
          <TerminalDemo />
          <CTASection />
        </main>
        <Footer />
      </div>
    </div>
  );
}

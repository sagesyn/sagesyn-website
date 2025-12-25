import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/home/hero";
import { ValueProps } from "@/components/home/value-props";
import { IDEPreview } from "@/components/home/ide-preview";
import { CodeShowcase } from "@/components/home/code-showcase";
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
          <ValueProps />
          <IDEPreview />
          <CodeShowcase />
          <TerminalDemo />
          <CTASection />
        </main>
        <Footer />
      </div>
    </div>
  );
}

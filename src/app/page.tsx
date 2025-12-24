import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/home/hero";
import { ValueProps } from "@/components/home/value-props";
import { CodeShowcase } from "@/components/home/code-showcase";
import { TerminalDemo } from "@/components/home/terminal-demo";
import { CTASection } from "@/components/home/cta-section";

export default function HomePage() {
  return (
    <div className="relative min-h-screen">
      {/* Grid background effect */}
      <div className="fixed inset-0 grid-background opacity-50" />

      {/* Gradient overlay */}
      <div className="pointer-events-none fixed inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />

      {/* Main content */}
      <div className="relative z-10">
        <Header />
        <main>
          <Hero />
          <ValueProps />
          <CodeShowcase />
          <TerminalDemo />
          <CTASection />
        </main>
        <Footer />
      </div>
    </div>
  );
}

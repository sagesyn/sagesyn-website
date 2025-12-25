import { Metadata } from "next";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { RoadmapHero, TimelineView } from "@/components/roadmap";

export const metadata: Metadata = {
  title: "Roadmap | SageSyn - Product Development Phases",
  description:
    "Explore SageSyn's product roadmap: four phases of development throughout 2026, from foundational desktop IDE to enterprise-ready agent platform.",
  openGraph: {
    title: "SageSyn Product Roadmap",
    description:
      "Four phases of development throughout 2026, from foundational desktop IDE to enterprise-ready agent platform.",
  },
};

export default function RoadmapPage() {
  return (
    <div className="bg-background min-h-screen">
      <Header />

      <main className="pt-20">
        <RoadmapHero />
        <TimelineView />
      </main>

      <Footer />
    </div>
  );
}

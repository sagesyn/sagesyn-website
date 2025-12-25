import { Metadata } from "next";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import {
  HeroAbout,
  MissionStatement,
  CorePrinciples,
  WhatIsSageSyn,
  ProductOverview,
} from "@/components/about";

export const metadata: Metadata = {
  title: "About | SageSyn - The Decision Fabric for Intelligent Systems",
  description:
    "Learn about SageSyn's mission to democratize the creation of intelligent systems through the most intuitive, powerful, and flexible desktop IDE for building AI agents.",
  openGraph: {
    title: "About SageSyn",
    description:
      "The most intuitive, powerful, and flexible desktop IDE for creating, testing, and deploying AI agents.",
  },
};

export default function AboutPage() {
  return (
    <div className="bg-background min-h-screen">
      <Header />

      <main className="pt-20">
        <HeroAbout />
        <MissionStatement />
        <WhatIsSageSyn />
        <CorePrinciples />
        <ProductOverview />
      </main>

      <Footer />
    </div>
  );
}

import { Metadata } from "next";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { TeamDashboard } from "@/components/team";

export const metadata: Metadata = {
  title: "Team | SageSyn - Agentic Development Team",
  description:
    "Meet the SageSyn agentic team: 9 specialized AI agents working together to build the next generation of agent infrastructure.",
  openGraph: {
    title: "SageSyn Agentic Team",
    description:
      "9 specialized AI agents working together to build the next generation of agent infrastructure.",
  },
};

export default function TeamPage() {
  return (
    <div className="bg-background min-h-screen">
      <Header />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <p className="gradient-text text-sm font-semibold uppercase tracking-wider">
                Agentic Development
              </p>
              <h1 className="mt-2 font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                Meet the Team
              </h1>
              <p className="mt-6 text-lg leading-8 text-muted">
                SageSyn is built by a specialized team of AI agents, each with
                distinct roles and responsibilities. Working together, they
                coordinate to deliver a cohesive product across all development
                phases.
              </p>
            </div>
          </div>
        </section>

        {/* Dashboard Section */}
        <section className="pb-24">
          <TeamDashboard />
        </section>
      </main>

      <Footer />
    </div>
  );
}

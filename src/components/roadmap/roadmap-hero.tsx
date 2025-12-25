export function RoadmapHero() {
  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="gradient-text text-sm font-semibold tracking-wider uppercase">
            Product Roadmap
          </p>
          <h1 className="font-display text-foreground mt-2 text-4xl font-bold tracking-tight sm:text-5xl">
            Building the Future
          </h1>
          <p className="text-muted mt-6 text-lg leading-8">
            Our development roadmap spans four phases throughout 2026, taking
            SageSyn from foundational desktop IDE to a full enterprise-ready
            agent development platform.
          </p>

          {/* Timeline Overview */}
          <div className="mt-12 flex items-center justify-center gap-4">
            {["Q1", "Q2", "Q3", "Q4"].map((quarter, index) => (
              <div key={quarter} className="flex items-center">
                <div className="flex flex-col items-center">
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-full border-2 ${
                      index === 0
                        ? "border-brand-cyan bg-brand-cyan/10 text-brand-cyan"
                        : "border-border bg-surface text-muted"
                    }`}
                  >
                    <span className="text-sm font-semibold">{quarter}</span>
                  </div>
                  <span className="text-muted mt-2 text-xs">2026</span>
                </div>
                {index < 3 && (
                  <div className="bg-border mx-2 h-0.5 w-8 sm:w-16" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

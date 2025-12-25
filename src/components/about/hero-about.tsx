import { executiveVision } from "@/data/mission";

export function HeroAbout() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-cyan/5 via-brand-indigo/5 to-transparent" />
        <div className="grid-background absolute inset-0 opacity-20" />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          {/* Badge */}
          <div className="mb-8 inline-flex items-center rounded-full border border-brand-cyan/30 bg-brand-cyan/10 px-4 py-1.5 text-sm text-brand-cyan">
            Open Source &bull; Apache 2.0 License
          </div>

          {/* Tagline */}
          <p className="gradient-text text-lg font-semibold uppercase tracking-wider">
            {executiveVision.tagline}
          </p>

          {/* Headline */}
          <h1 className="mt-4 font-display text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
            {executiveVision.headline}
          </h1>

          {/* Subheadline */}
          <p className="mt-6 text-xl leading-8 text-muted">
            {executiveVision.subheadline}
          </p>

          {/* Description */}
          <p className="mx-auto mt-8 max-w-2xl text-base leading-7 text-muted/80">
            {executiveVision.description}
          </p>

          {/* Positioning */}
          <div className="mt-8 inline-flex items-center gap-2 rounded-lg border border-border bg-surface px-6 py-3">
            <span className="text-muted">Think:</span>
            <span className="font-display font-semibold text-foreground">
              {executiveVision.positioning}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

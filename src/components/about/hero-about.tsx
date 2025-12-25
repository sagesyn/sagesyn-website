import { executiveVision } from "@/data/mission";

export function HeroAbout() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10">
        <div className="from-brand-cyan/5 via-brand-indigo/5 absolute inset-0 bg-gradient-to-b to-transparent" />
        <div className="grid-background absolute inset-0 opacity-20" />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          {/* Badge */}
          <div className="border-brand-cyan/30 bg-brand-cyan/10 text-brand-cyan mb-8 inline-flex items-center rounded-full border px-4 py-1.5 text-sm">
            Open Source &bull; Apache 2.0 License
          </div>

          {/* Tagline */}
          <p className="gradient-text text-lg font-semibold tracking-wider uppercase">
            {executiveVision.tagline}
          </p>

          {/* Headline */}
          <h1 className="font-display text-foreground mt-4 text-4xl font-bold tracking-tight sm:text-6xl">
            {executiveVision.headline}
          </h1>

          {/* Subheadline */}
          <p className="text-muted mt-6 text-xl leading-8">
            {executiveVision.subheadline}
          </p>

          {/* Description */}
          <p className="text-muted/80 mx-auto mt-8 max-w-2xl text-base leading-7">
            {executiveVision.description}
          </p>

          {/* Positioning */}
          <div className="border-border bg-surface mt-8 inline-flex items-center gap-2 rounded-lg border px-6 py-3">
            <span className="text-muted">Think:</span>
            <span className="font-display text-foreground font-semibold">
              {executiveVision.positioning}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

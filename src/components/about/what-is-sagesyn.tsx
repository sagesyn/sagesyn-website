import { whatIsSageSyn } from "@/data/mission";
import { Check, X } from "lucide-react";

export function WhatIsSageSyn() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            What is SageSyn?
          </h2>
          <p className="mt-4 text-lg text-muted">
            Understanding what we are—and what we&apos;re not
          </p>
        </div>

        {/* Comparison grid */}
        <div className="mx-auto mt-16 grid max-w-4xl gap-8 lg:grid-cols-2">
          {/* What SageSyn IS */}
          <div className="rounded-2xl border border-brand-cyan/30 bg-brand-cyan/5 p-8">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-cyan/20">
                <Check className="h-5 w-5 text-brand-cyan" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground">
                SageSyn IS
              </h3>
            </div>
            <ul className="space-y-4">
              {whatIsSageSyn.is.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-brand-cyan" />
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* What SageSyn IS NOT */}
          <div className="rounded-2xl border border-destructive/30 bg-destructive/5 p-8">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-destructive/20">
                <X className="h-5 w-5 text-destructive" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground">
                SageSyn is NOT
              </h3>
            </div>
            <ul className="space-y-4">
              {whatIsSageSyn.isNot.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <X className="mt-0.5 h-5 w-5 shrink-0 text-destructive" />
                  <span className="text-muted">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

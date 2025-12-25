import { whatIsSageSyn } from "@/data/mission";
import { Check, X } from "lucide-react";

export function WhatIsSageSyn() {
  return (
    <section className="py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-foreground text-3xl font-bold tracking-tight sm:text-4xl">
            What is SageSyn?
          </h2>
          <p className="text-muted mt-4 text-lg">
            Understanding what we are—and what we&apos;re not
          </p>
        </div>

        {/* Comparison grid */}
        <div className="mx-auto mt-16 grid max-w-4xl gap-8 lg:grid-cols-2">
          {/* What SageSyn IS */}
          <div className="border-brand-cyan/30 bg-brand-cyan/5 rounded-2xl border p-8">
            <div className="mb-6 flex items-center gap-3">
              <div className="bg-brand-cyan/20 flex h-10 w-10 items-center justify-center rounded-full">
                <Check className="text-brand-cyan h-5 w-5" />
              </div>
              <h3 className="font-display text-foreground text-xl font-semibold">
                SageSyn IS
              </h3>
            </div>
            <ul className="space-y-4">
              {whatIsSageSyn.is.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Check className="text-brand-cyan mt-0.5 h-5 w-5 shrink-0" />
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* What SageSyn IS NOT */}
          <div className="border-destructive/30 bg-destructive/5 rounded-2xl border p-8">
            <div className="mb-6 flex items-center gap-3">
              <div className="bg-destructive/20 flex h-10 w-10 items-center justify-center rounded-full">
                <X className="text-destructive h-5 w-5" />
              </div>
              <h3 className="font-display text-foreground text-xl font-semibold">
                SageSyn is NOT
              </h3>
            </div>
            <ul className="space-y-4">
              {whatIsSageSyn.isNot.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <X className="text-destructive mt-0.5 h-5 w-5 shrink-0" />
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

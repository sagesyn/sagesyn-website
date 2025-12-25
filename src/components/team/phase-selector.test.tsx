import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { PhaseSelector } from "./phase-selector";
import { phases } from "@/data/agents";

describe("PhaseSelector component", () => {
  it("renders all phases", () => {
    const onChange = vi.fn();
    render(
      <PhaseSelector phases={phases} activePhase={1} onPhaseChange={onChange} />
    );

    expect(screen.getByText("Q1 2026")).toBeInTheDocument();
    expect(screen.getByText("Q2 2026")).toBeInTheDocument();
    expect(screen.getByText("Q3 2026")).toBeInTheDocument();
    expect(screen.getByText("Q4 2026")).toBeInTheDocument();
  });

  it("renders phase names", () => {
    const onChange = vi.fn();
    render(
      <PhaseSelector phases={phases} activePhase={1} onPhaseChange={onChange} />
    );

    expect(screen.getByText(/Phase 1: Foundation/)).toBeInTheDocument();
    expect(screen.getByText(/Phase 2: Multi-Model/)).toBeInTheDocument();
    expect(screen.getByText(/Phase 3: Advanced/)).toBeInTheDocument();
    expect(screen.getByText(/Phase 4: Enterprise/)).toBeInTheDocument();
  });

  it("calls onPhaseChange when a phase is clicked", () => {
    const onChange = vi.fn();
    render(
      <PhaseSelector phases={phases} activePhase={1} onPhaseChange={onChange} />
    );

    const q2Button = screen.getByText("Q2 2026").closest("button");
    if (q2Button) fireEvent.click(q2Button);

    expect(onChange).toHaveBeenCalledWith(2);
  });
});

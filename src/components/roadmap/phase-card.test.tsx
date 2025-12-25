import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { PhaseCard } from "./phase-card";
import { roadmapPhases } from "@/data/roadmap";

describe("PhaseCard component", () => {
  const mockPhase = roadmapPhases[0];

  it("renders phase number and name", () => {
    render(<PhaseCard phase={mockPhase} />);

    expect(screen.getByText("1")).toBeInTheDocument();
    expect(
      screen.getByText(`Phase ${mockPhase.id}: ${mockPhase.name}`)
    ).toBeInTheDocument();
  });

  it("renders quarter", () => {
    render(<PhaseCard phase={mockPhase} />);
    expect(screen.getByText(mockPhase.quarter)).toBeInTheDocument();
  });

  it("renders goal", () => {
    render(<PhaseCard phase={mockPhase} />);
    expect(screen.getByText(mockPhase.goal)).toBeInTheDocument();
  });

  it("renders description", () => {
    render(<PhaseCard phase={mockPhase} />);
    expect(screen.getByText(mockPhase.description)).toBeInTheDocument();
  });

  it("renders milestones section", () => {
    render(<PhaseCard phase={mockPhase} />);
    expect(screen.getByText("Milestones")).toBeInTheDocument();
  });

  it("renders key deliverables", () => {
    render(<PhaseCard phase={mockPhase} />);
    expect(screen.getByText("Key Deliverables")).toBeInTheDocument();

    mockPhase.keyDeliverables.forEach((deliverable) => {
      expect(screen.getByText(deliverable)).toBeInTheDocument();
    });
  });

  it("shows Current badge when isActive is true", () => {
    render(<PhaseCard phase={mockPhase} isActive={true} />);
    expect(screen.getByText("Current")).toBeInTheDocument();
  });

  it("does not show Current badge when isActive is false", () => {
    render(<PhaseCard phase={mockPhase} isActive={false} />);
    expect(screen.queryByText("Current")).not.toBeInTheDocument();
  });
});

import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { MilestoneList } from "./milestone-list";
import { roadmapPhases } from "@/data/roadmap";

describe("MilestoneList component", () => {
  const mockMilestones = roadmapPhases[0].milestones;

  it("renders all milestones", () => {
    render(<MilestoneList milestones={mockMilestones} />);

    mockMilestones.forEach((milestone) => {
      expect(screen.getByText(milestone.name)).toBeInTheDocument();
    });
  });

  it("renders milestone descriptions", () => {
    render(<MilestoneList milestones={mockMilestones} />);

    mockMilestones.forEach((milestone) => {
      expect(screen.getByText(milestone.description)).toBeInTheDocument();
    });
  });

  it("renders correct number of milestones", () => {
    render(<MilestoneList milestones={mockMilestones} />);

    // Each milestone has a name element
    expect(screen.getByText("Desktop Shell MVP")).toBeInTheDocument();
    expect(screen.getByText("Visual Canvas Core")).toBeInTheDocument();
    expect(screen.getByText("Local Model Support")).toBeInTheDocument();
    expect(screen.getByText("Basic Workflow Execution")).toBeInTheDocument();
  });
});

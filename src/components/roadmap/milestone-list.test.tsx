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
    expect(screen.getByText("Language Specification")).toBeInTheDocument();
    expect(screen.getByText("Parser & AST")).toBeInTheDocument();
    expect(screen.getByText("TypeScript Compiler")).toBeInTheDocument();
    expect(screen.getByText("LSP Core")).toBeInTheDocument();
  });
});

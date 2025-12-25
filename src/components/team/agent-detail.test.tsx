import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { AgentDetail } from "./agent-detail";
import { agents, phases } from "@/data/agents";

describe("AgentDetail component", () => {
  const mockAgent = agents[0]; // ATLAS

  it("renders agent name and role", () => {
    render(<AgentDetail agent={mockAgent} phases={phases} agents={agents} />);

    expect(screen.getByText(mockAgent.name)).toBeInTheDocument();
    expect(screen.getByText(mockAgent.role)).toBeInTheDocument();
  });

  it("renders agent scope", () => {
    render(<AgentDetail agent={mockAgent} phases={phases} agents={agents} />);
    expect(screen.getByText(mockAgent.scope)).toBeInTheDocument();
  });

  it("renders skills section", () => {
    render(<AgentDetail agent={mockAgent} phases={phases} agents={agents} />);
    expect(screen.getByText("Skills")).toBeInTheDocument();
    mockAgent.skills.forEach((skill) => {
      expect(screen.getByText(skill)).toBeInTheDocument();
    });
  });

  it("renders outputs section", () => {
    render(<AgentDetail agent={mockAgent} phases={phases} agents={agents} />);
    expect(screen.getByText("Outputs")).toBeInTheDocument();
    mockAgent.outputs.forEach((output) => {
      expect(screen.getByText(output)).toBeInTheDocument();
    });
  });

  it("renders phase effort chart", () => {
    render(<AgentDetail agent={mockAgent} phases={phases} agents={agents} />);
    expect(screen.getByText("Effort by Phase")).toBeInTheDocument();
    expect(screen.getByText("Q1")).toBeInTheDocument();
    expect(screen.getByText("Q2")).toBeInTheDocument();
    expect(screen.getByText("Q3")).toBeInTheDocument();
    expect(screen.getByText("Q4")).toBeInTheDocument();
  });

  it("renders collaborates with section", () => {
    render(<AgentDetail agent={mockAgent} phases={phases} agents={agents} />);
    expect(screen.getByText("Collaborates With")).toBeInTheDocument();
    // ATLAS collaborates with "all"
    expect(screen.getByText("all agents")).toBeInTheDocument();
  });
});

import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { AgentCard } from "./agent-card";
import { agents } from "@/data/agents";

describe("AgentCard component", () => {
  const mockAgent = agents[0]; // ATLAS

  it("renders agent name and role", () => {
    render(
      <AgentCard
        agent={mockAgent}
        activePhase={1}
        isSelected={false}
        onClick={() => {}}
      />
    );

    expect(screen.getByText(mockAgent.name)).toBeInTheDocument();
    expect(screen.getByText(mockAgent.role)).toBeInTheDocument();
  });

  it("displays effort percentage for selected phase", () => {
    render(
      <AgentCard
        agent={mockAgent}
        activePhase={1}
        isSelected={false}
        onClick={() => {}}
      />
    );

    expect(screen.getByText("100%")).toBeInTheDocument();
    expect(screen.getByText("effort")).toBeInTheDocument();
  });

  it("calls onClick when clicked", () => {
    const onClick = vi.fn();
    render(
      <AgentCard
        agent={mockAgent}
        activePhase={1}
        isSelected={false}
        onClick={onClick}
      />
    );

    const card = screen
      .getByText(mockAgent.name)
      .closest("div[class*='cursor-pointer']");
    if (card) fireEvent.click(card);
    expect(onClick).toHaveBeenCalled();
  });

  it("renders agent scope", () => {
    render(
      <AgentCard
        agent={mockAgent}
        activePhase={1}
        isSelected={false}
        onClick={() => {}}
      />
    );

    expect(screen.getByText(mockAgent.scope)).toBeInTheDocument();
  });
});

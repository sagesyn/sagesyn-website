import { describe, it, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { TeamDashboard } from "./team-dashboard";

describe("TeamDashboard component", () => {
  it("renders the dashboard title", () => {
    render(<TeamDashboard />);
    expect(screen.getByText("SageSyn Agentic Team")).toBeInTheDocument();
  });

  it("renders agent count description", () => {
    render(<TeamDashboard />);
    expect(
      screen.getByText("12 specialized agents + 1 orchestrator")
    ).toBeInTheDocument();
  });

  it("renders phase selector", () => {
    render(<TeamDashboard />);
    expect(screen.getByText("Q1 2026")).toBeInTheDocument();
    expect(screen.getByText("Q2 2026")).toBeInTheDocument();
    expect(screen.getByText("Q3 2026")).toBeInTheDocument();
    expect(screen.getByText("Q4 2026")).toBeInTheDocument();
  });

  it("renders all agent cards", () => {
    render(<TeamDashboard />);
    expect(screen.getByText("ATLAS")).toBeInTheDocument();
    expect(screen.getByText("SAGE")).toBeInTheDocument();
    expect(screen.getByText("FORGE")).toBeInTheDocument();
    expect(screen.getByText("PIXEL")).toBeInTheDocument();
    expect(screen.getByText("CANVAS")).toBeInTheDocument();
    expect(screen.getByText("RUST")).toBeInTheDocument();
    expect(screen.getByText("BRIDGE")).toBeInTheDocument();
    expect(screen.getByText("SENTINEL")).toBeInTheDocument();
    expect(screen.getByText("PIPELINE")).toBeInTheDocument();
    expect(screen.getByText("SCRIBE")).toBeInTheDocument();
    expect(screen.getByText("NEXUS")).toBeInTheDocument();
    expect(screen.getByText("VAULT")).toBeInTheDocument();
    expect(screen.getByText("HERALD")).toBeInTheDocument();
  });

  it("renders view mode toggle", () => {
    render(<TeamDashboard />);
    expect(screen.getByText("grid")).toBeInTheDocument();
    expect(screen.getByText("timeline")).toBeInTheDocument();
    expect(screen.getByText("matrix")).toBeInTheDocument();
  });

  it("shows agent detail when card is clicked", () => {
    render(<TeamDashboard />);

    const atlasCard = screen
      .getByText("ATLAS")
      .closest("div[class*='cursor-pointer']");
    if (atlasCard) fireEvent.click(atlasCard);

    // Should show the agent's scope in the detail panel
    expect(screen.getByText("Skills")).toBeInTheDocument();
  });
});

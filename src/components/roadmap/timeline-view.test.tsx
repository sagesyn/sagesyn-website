import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { TimelineView } from "./timeline-view";

describe("TimelineView component", () => {
  it("renders all four phases", () => {
    render(<TimelineView />);

    expect(screen.getByText("Phase 1: Foundation")).toBeInTheDocument();
    expect(
      screen.getByText("Phase 2: Multi-Model & Tools")
    ).toBeInTheDocument();
    expect(screen.getByText("Phase 3: Advanced Features")).toBeInTheDocument();
    expect(
      screen.getByText("Phase 4: Enterprise & Ecosystem")
    ).toBeInTheDocument();
  });

  it("renders phase goals", () => {
    render(<TimelineView />);

    expect(screen.getByText("Functional Desktop IDE")).toBeInTheDocument();
    expect(
      screen.getByText("Full Model Gateway & MCP Ecosystem")
    ).toBeInTheDocument();
    expect(screen.getByText("v1.0 Stable Release")).toBeInTheDocument();
    expect(
      screen.getByText("Enterprise Features & Plugin Ecosystem")
    ).toBeInTheDocument();
  });

  it("marks first phase as active", () => {
    render(<TimelineView />);
    expect(screen.getByText("Current")).toBeInTheDocument();
  });
});

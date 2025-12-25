import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { TimelineView } from "./timeline-view";

describe("TimelineView component", () => {
  it("renders all four phases", () => {
    render(<TimelineView />);

    expect(
      screen.getByText("Phase 1: Language Foundation")
    ).toBeInTheDocument();
    expect(screen.getByText("Phase 2: Multi-Target & IDE")).toBeInTheDocument();
    expect(
      screen.getByText("Phase 3: Protocols & Runtime")
    ).toBeInTheDocument();
    expect(
      screen.getByText("Phase 4: Ecosystem & Enterprise")
    ).toBeInTheDocument();
  });

  it("renders phase goals", () => {
    render(<TimelineView />);

    expect(
      screen.getByText("Core Language & TypeScript Compiler")
    ).toBeInTheDocument();
    expect(
      screen.getByText("Python/Go Compilers & Visual IDE")
    ).toBeInTheDocument();
    expect(screen.getByText("v1.0 Stable Release")).toBeInTheDocument();
    expect(
      screen.getByText("Package Registry & Cloud Compilation")
    ).toBeInTheDocument();
  });

  it("marks first phase as active", () => {
    render(<TimelineView />);
    expect(screen.getByText("Current")).toBeInTheDocument();
  });
});

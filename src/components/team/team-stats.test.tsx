import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { TeamStats } from "./team-stats";

describe("TeamStats component", () => {
  it("renders the agent count", () => {
    render(<TeamStats />);
    expect(screen.getByText("9")).toBeInTheDocument();
    expect(screen.getByText("Total Agents")).toBeInTheDocument();
  });

  it("renders the phase count", () => {
    render(<TeamStats />);
    expect(screen.getByText("4")).toBeInTheDocument();
    expect(screen.getByText("Development Phases")).toBeInTheDocument();
  });

  it("renders the timeline", () => {
    render(<TeamStats />);
    expect(screen.getByText("12")).toBeInTheDocument();
    expect(screen.getByText("Months Timeline")).toBeInTheDocument();
  });

  it("renders sprints planned", () => {
    render(<TeamStats />);
    expect(screen.getByText("24")).toBeInTheDocument();
    expect(screen.getByText("Sprints Planned")).toBeInTheDocument();
  });
});

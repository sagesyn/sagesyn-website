import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { MissionStatement } from "./mission-statement";

describe("MissionStatement component", () => {
  it("renders the section heading", () => {
    render(<MissionStatement />);
    expect(screen.getByText("Our Mission")).toBeInTheDocument();
  });

  it("renders the mission statement", () => {
    render(<MissionStatement />);
    expect(
      screen.getByText(/democratize the creation of intelligent systems/i)
    ).toBeInTheDocument();
  });

  it("renders the core pillars heading", () => {
    render(<MissionStatement />);
    expect(screen.getByText("Core Pillars")).toBeInTheDocument();
  });

  it("renders the pillars", () => {
    render(<MissionStatement />);
    expect(
      screen.getByText("Visual-first approach to agent development")
    ).toBeInTheDocument();
    expect(screen.getByText("Open source at the core")).toBeInTheDocument();
  });
});

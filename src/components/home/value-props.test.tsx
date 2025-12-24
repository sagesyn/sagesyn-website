import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { ValueProps } from "./value-props";

describe("ValueProps component", () => {
  it("renders section headline", () => {
    render(<ValueProps />);
    expect(screen.getByText(/infrastructure for the/i)).toBeInTheDocument();
    expect(screen.getByText(/agentic era/i)).toBeInTheDocument();
  });

  it("renders section description", () => {
    render(<ValueProps />);
    expect(
      screen.getByText(/stop treating agents as ad-hoc scripts/i)
    ).toBeInTheDocument();
  });

  it("renders Agent Mesh feature", () => {
    render(<ValueProps />);
    expect(screen.getByText("Agent Mesh")).toBeInTheDocument();
    expect(
      screen.getByText(/treat agents like microservices/i)
    ).toBeInTheDocument();
  });

  it("renders Layered Cognition feature", () => {
    render(<ValueProps />);
    expect(screen.getByText("Layered Cognition")).toBeInTheDocument();
    expect(
      screen.getByText(/structure workflows into stages/i)
    ).toBeInTheDocument();
  });

  it("renders Protocol Native feature", () => {
    render(<ValueProps />);
    expect(screen.getByText("Protocol Native")).toBeInTheDocument();
    expect(
      screen.getByText(/designed to speak modern agent protocols/i)
    ).toBeInTheDocument();
  });

  it("renders three feature cards", () => {
    render(<ValueProps />);
    const cards = document.querySelectorAll('[class*="rounded-xl"]');
    expect(cards.length).toBeGreaterThanOrEqual(3);
  });

  it("renders icons for each feature", () => {
    render(<ValueProps />);
    const svgs = document.querySelectorAll("svg");
    expect(svgs.length).toBeGreaterThanOrEqual(3);
  });
});

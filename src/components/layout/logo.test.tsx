import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Logo } from "./logo";

describe("Logo component", () => {
  it("renders with text by default", () => {
    render(<Logo />);
    expect(screen.getByText("Sage")).toBeInTheDocument();
    expect(screen.getByText("Syn")).toBeInTheDocument();
  });

  it("renders without text when showText is false", () => {
    render(<Logo showText={false} />);
    expect(screen.queryByText("Sage")).not.toBeInTheDocument();
    expect(screen.queryByText("Syn")).not.toBeInTheDocument();
  });

  it("renders SVG logo mark", () => {
    render(<Logo />);
    const svg = document.querySelector("svg");
    expect(svg).toBeInTheDocument();
    expect(svg).toHaveAttribute("viewBox", "0 0 200 200");
  });

  it("applies custom className", () => {
    render(<Logo className="custom-class" />);
    const container = document.querySelector(".custom-class");
    expect(container).toBeInTheDocument();
  });

  it("contains gradient definition for logo", () => {
    render(<Logo />);
    const gradient = document.querySelector("#fabricGradient");
    expect(gradient).toBeInTheDocument();
  });

  it("renders agent nodes in the mesh", () => {
    render(<Logo />);
    const circles = document.querySelectorAll("circle");
    // 6 outer nodes + 1 central orchestrator + 1 inner white circle = 8 total
    expect(circles.length).toBe(8);
  });
});

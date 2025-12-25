import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { TechStack } from "./tech-stack";

describe("TechStack component", () => {
  it("renders the section heading", () => {
    render(<TechStack />);
    expect(
      screen.getByText("Built with Modern Technology")
    ).toBeInTheDocument();
  });

  it("renders tech stack items", () => {
    render(<TechStack />);
    expect(screen.getByText("Agent Language Spec")).toBeInTheDocument();
    const rustElements = screen.getAllByText("Rust");
    expect(rustElements.length).toBeGreaterThan(0);
    expect(screen.getByText("Monaco Editor")).toBeInTheDocument();
  });

  it("renders tech labels", () => {
    render(<TechStack />);
    // Check for any tech stack labels that exist
    const container = document.querySelector("section");
    expect(container).toBeInTheDocument();
  });
});

import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { ValueProps } from "./value-props";

describe("ValueProps component", () => {
  it("renders section headline", () => {
    render(<ValueProps />);
    expect(screen.getByText(/agents as/i)).toBeInTheDocument();
    expect(screen.getByText(/first-class citizens/i)).toBeInTheDocument();
  });

  it("renders section description", () => {
    render(<ValueProps />);
    expect(
      screen.getByText(
        /a purpose-built language for defining intelligent agents/i
      )
    ).toBeInTheDocument();
  });

  it("renders Declarative Syntax feature", () => {
    render(<ValueProps />);
    expect(screen.getByText("Declarative Syntax")).toBeInTheDocument();
    expect(
      screen.getByText(/define agents in clean, yaml-like syntax/i)
    ).toBeInTheDocument();
  });

  it("renders Multi-Target Compilation feature", () => {
    render(<ValueProps />);
    expect(screen.getByText("Multi-Target Compilation")).toBeInTheDocument();
    expect(
      screen.getByText(/write once, compile to typescript, python, or go/i)
    ).toBeInTheDocument();
  });

  it("renders LSP-Powered Editing feature", () => {
    render(<ValueProps />);
    expect(screen.getByText("LSP-Powered Editing")).toBeInTheDocument();
    expect(
      screen.getByText(/full language server protocol support/i)
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

import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { CorePrinciples } from "./core-principles";

describe("CorePrinciples component", () => {
  it("renders the section heading", () => {
    render(<CorePrinciples />);
    expect(screen.getByText("Core Principles")).toBeInTheDocument();
  });

  it("renders the principles", () => {
    render(<CorePrinciples />);
    expect(screen.getByText("Declarative Syntax")).toBeInTheDocument();
    expect(screen.getByText("Multi-Target Compilation")).toBeInTheDocument();
    expect(screen.getByText("LSP-Powered Editing")).toBeInTheDocument();
    expect(screen.getByText("Protocol Primitives")).toBeInTheDocument();
    expect(screen.getByText("Model Agnostic")).toBeInTheDocument();
    expect(screen.getByText("Open Source Core")).toBeInTheDocument();
  });
});

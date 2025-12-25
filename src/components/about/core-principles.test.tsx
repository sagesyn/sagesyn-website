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
    expect(screen.getByText("Visual-First Development")).toBeInTheDocument();
    expect(screen.getByText("Context Window Mastery")).toBeInTheDocument();
    expect(screen.getByText("Model Agnostic")).toBeInTheDocument();
    expect(screen.getByText("Protocol Native")).toBeInTheDocument();
    expect(screen.getByText("Local-First Design")).toBeInTheDocument();
    expect(screen.getByText("Open Source Core")).toBeInTheDocument();
  });
});

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
    expect(screen.getByText("Tauri (Rust)")).toBeInTheDocument();
    expect(screen.getByText("React + TypeScript")).toBeInTheDocument();
    expect(screen.getByText("XY Flow (React Flow)")).toBeInTheDocument();
    expect(screen.getByText("Monaco Editor")).toBeInTheDocument();
    expect(screen.getByText("SQLite + DuckDB")).toBeInTheDocument();
    expect(screen.getByText("Tailwind CSS")).toBeInTheDocument();
  });

  it("renders tech labels", () => {
    render(<TechStack />);
    expect(screen.getByText("Desktop Shell")).toBeInTheDocument();
    expect(screen.getByText("Frontend")).toBeInTheDocument();
    expect(screen.getByText("Visual Canvas")).toBeInTheDocument();
  });
});

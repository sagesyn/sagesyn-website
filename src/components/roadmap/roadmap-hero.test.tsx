import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { RoadmapHero } from "./roadmap-hero";

describe("RoadmapHero component", () => {
  it("renders the section label", () => {
    render(<RoadmapHero />);
    expect(screen.getByText("Product Roadmap")).toBeInTheDocument();
  });

  it("renders the main heading", () => {
    render(<RoadmapHero />);
    expect(screen.getByText("Building the Future")).toBeInTheDocument();
  });

  it("renders the description", () => {
    render(<RoadmapHero />);
    expect(
      screen.getByText(/four phases throughout 2026/i)
    ).toBeInTheDocument();
  });

  it("renders all quarter indicators", () => {
    render(<RoadmapHero />);
    expect(screen.getByText("Q1")).toBeInTheDocument();
    expect(screen.getByText("Q2")).toBeInTheDocument();
    expect(screen.getByText("Q3")).toBeInTheDocument();
    expect(screen.getByText("Q4")).toBeInTheDocument();
  });

  it("renders 2026 year labels", () => {
    render(<RoadmapHero />);
    const yearLabels = screen.getAllByText("2026");
    expect(yearLabels.length).toBe(4);
  });
});

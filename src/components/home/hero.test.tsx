import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Hero } from "./hero";

describe("Hero component", () => {
  it("renders main headline", () => {
    render(<Hero />);
    expect(screen.getAllByText(/decision fabric/i).length).toBeGreaterThan(0);
    expect(screen.getByText(/intelligent systems/i)).toBeInTheDocument();
  });

  it("renders beta badge", () => {
    render(<Hero />);
    expect(screen.getByText(/now in private beta/i)).toBeInTheDocument();
  });

  it("renders subheadline", () => {
    render(<Hero />);
    expect(
      screen.getByText(/build the next generation of agent infrastructure/i)
    ).toBeInTheDocument();
  });

  it("renders Get Started CTA button", () => {
    render(<Hero />);
    const getStartedLinks = screen.getAllByText("Get Started");
    expect(getStartedLinks.length).toBeGreaterThan(0);
  });

  it("renders Star on GitHub button", () => {
    render(<Hero />);
    expect(screen.getByText("Star on GitHub")).toBeInTheDocument();
  });

  it("renders terminal preview", () => {
    render(<Hero />);
    expect(screen.getByText(/npx create-sagesyn-app/i)).toBeInTheDocument();
  });

  it("renders terminal output steps", () => {
    render(<Hero />);
    expect(screen.getByText(/creating agent mesh/i)).toBeInTheDocument();
    expect(screen.getByText(/configuring decision fabric/i)).toBeInTheDocument();
    expect(screen.getByText(/setting up observability/i)).toBeInTheDocument();
  });

  it("renders success message in terminal", () => {
    render(<Hero />);
    expect(
      screen.getByText(/your agent infrastructure is live/i)
    ).toBeInTheDocument();
  });

  it("has correct link to docs", () => {
    render(<Hero />);
    const getStartedLinks = screen.getAllByRole("link", { name: /get started/i });
    expect(getStartedLinks[0]).toHaveAttribute("href", "/docs/getting-started");
  });

  it("has correct link to GitHub", () => {
    render(<Hero />);
    const githubLink = screen.getByRole("link", { name: /star on github/i });
    expect(githubLink).toHaveAttribute("href", "https://github.com/sagesyn");
    expect(githubLink).toHaveAttribute("target", "_blank");
  });
});

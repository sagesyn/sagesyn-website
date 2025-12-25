import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Hero } from "./hero";

describe("Hero component", () => {
  it("renders main headline", () => {
    render(<Hero />);
    expect(screen.getByText(/agent programming/i)).toBeInTheDocument();
    const languageElements = screen.getAllByText(/language/i);
    expect(languageElements.length).toBeGreaterThan(0);
  });

  it("renders beta badge", () => {
    render(<Hero />);
    expect(screen.getByText(/now in private beta/i)).toBeInTheDocument();
  });

  it("renders subheadline", () => {
    render(<Hero />);
    expect(
      screen.getByText(/define agents in a declarative language/i)
    ).toBeInTheDocument();
  });

  it("renders Read the Docs CTA button", () => {
    render(<Hero />);
    const readDocsLinks = screen.getAllByText("Read the Docs");
    expect(readDocsLinks.length).toBeGreaterThan(0);
  });

  it("renders Star on GitHub button", () => {
    render(<Hero />);
    expect(screen.getByText("Star on GitHub")).toBeInTheDocument();
  });

  it("renders terminal preview", () => {
    render(<Hero />);
    expect(
      screen.getByText(/sagesyn init research-assistant.ssag/i)
    ).toBeInTheDocument();
  });

  it("renders terminal output steps", () => {
    render(<Hero />);
    expect(
      screen.getByText(/created research-assistant.ssag/i)
    ).toBeInTheDocument();
    expect(screen.getByText(/configured mcp servers/i)).toBeInTheDocument();
    expect(screen.getByText(/lsp ready/i)).toBeInTheDocument();
  });

  it("renders compile command in terminal", () => {
    render(<Hero />);
    expect(
      screen.getByText(/sagesyn compile --target typescript/i)
    ).toBeInTheDocument();
  });

  it("has correct link to docs", () => {
    render(<Hero />);
    const readDocsLinks = screen.getAllByRole("link", {
      name: /read the docs/i,
    });
    expect(readDocsLinks[0]).toHaveAttribute("href", "/docs");
  });

  it("has correct link to GitHub", () => {
    render(<Hero />);
    const githubLink = screen.getByRole("link", { name: /star on github/i });
    expect(githubLink).toHaveAttribute("href", "https://github.com/sagesyn");
    expect(githubLink).toHaveAttribute("target", "_blank");
  });
});

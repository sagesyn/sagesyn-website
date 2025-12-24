import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { CTASection } from "./cta-section";

describe("CTASection component", () => {
  it("renders headline", () => {
    render(<CTASection />);
    expect(screen.getByText(/ready to build the/i)).toBeInTheDocument();
    expect(screen.getByText(/future/i)).toBeInTheDocument();
  });

  it("renders description", () => {
    render(<CTASection />);
    expect(screen.getByText(/join the private beta/i)).toBeInTheDocument();
  });

  it("renders Start Building button", () => {
    render(<CTASection />);
    expect(screen.getByText("Start Building")).toBeInTheDocument();
  });

  it("renders View on GitHub button", () => {
    render(<CTASection />);
    expect(screen.getByText("View on GitHub")).toBeInTheDocument();
  });

  it("renders contact email", () => {
    render(<CTASection />);
    expect(screen.getByText("hello@sagesyn.ai")).toBeInTheDocument();
  });

  it("has correct link to docs", () => {
    render(<CTASection />);
    const startBuildingLink = screen.getByRole("link", {
      name: /start building/i,
    });
    expect(startBuildingLink).toHaveAttribute("href", "/docs/getting-started");
  });

  it("has correct link to GitHub", () => {
    render(<CTASection />);
    const githubLink = screen.getByRole("link", { name: /view on github/i });
    expect(githubLink).toHaveAttribute("href", "https://github.com/sagesyn");
    expect(githubLink).toHaveAttribute("target", "_blank");
  });

  it("has correct link to email", () => {
    render(<CTASection />);
    const emailLink = screen.getByRole("link", { name: /hello@sagesyn.ai/i });
    expect(emailLink).toHaveAttribute("href", "mailto:hello@sagesyn.ai");
  });
});

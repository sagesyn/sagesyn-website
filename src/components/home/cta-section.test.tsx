import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { CTASection } from "./cta-section";

describe("CTASection component", () => {
  it("renders headline", () => {
    render(<CTASection />);
    expect(screen.getByText(/start writing/i)).toBeInTheDocument();
    // Use getAllByText since ".sag" matches both the headline and "sagesyn.ai" email
    const sagElements = screen.getAllByText(/\.sag/i);
    expect(sagElements.length).toBeGreaterThanOrEqual(1);
  });

  it("renders description", () => {
    render(<CTASection />);
    expect(
      screen.getByText(/define agents in a declarative language/i)
    ).toBeInTheDocument();
  });

  it("renders Read the Docs button", () => {
    render(<CTASection />);
    expect(screen.getByText("Read the Docs")).toBeInTheDocument();
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
    const readDocsLink = screen.getByRole("link", {
      name: /read the docs/i,
    });
    expect(readDocsLink).toHaveAttribute("href", "/docs");
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

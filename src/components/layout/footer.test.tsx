import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Footer } from "./footer";

describe("Footer component", () => {
  it("renders logo", () => {
    render(<Footer />);
    expect(screen.getByText("Sage")).toBeInTheDocument();
  });

  it("renders company description", () => {
    render(<Footer />);
    expect(
      screen.getByText(/The Decision Fabric for Intelligent Systems/i)
    ).toBeInTheDocument();
  });

  it("renders Product section links", () => {
    render(<Footer />);
    expect(screen.getByText("Product")).toBeInTheDocument();
    expect(screen.getByText("Documentation")).toBeInTheDocument();
    expect(screen.getByText("API Reference")).toBeInTheDocument();
    expect(screen.getByText("Changelog")).toBeInTheDocument();
  });

  it("renders Resources section links", () => {
    render(<Footer />);
    expect(screen.getByText("Resources")).toBeInTheDocument();
    expect(screen.getByText("Getting Started")).toBeInTheDocument();
    expect(screen.getByText("Guides")).toBeInTheDocument();
  });

  it("renders Company section links", () => {
    render(<Footer />);
    expect(screen.getByText("Company")).toBeInTheDocument();
    expect(screen.getByText("About")).toBeInTheDocument();
    expect(screen.getByText("Team")).toBeInTheDocument();
    expect(screen.getByText("Contact")).toBeInTheDocument();
  });

  it("renders Legal section links", () => {
    render(<Footer />);
    expect(screen.getByText("Legal")).toBeInTheDocument();
    expect(screen.getByText("Privacy Policy")).toBeInTheDocument();
    expect(screen.getByText("Terms of Service")).toBeInTheDocument();
  });

  it("renders social links with external attributes", () => {
    render(<Footer />);
    const githubLink = document.querySelector(
      'a[href="https://github.com/sagesyn"]'
    );
    expect(githubLink).toBeInTheDocument();
    expect(githubLink).toHaveAttribute("target", "_blank");
    expect(githubLink).toHaveAttribute("rel", "noopener noreferrer");
  });

  it("renders copyright notice with current year", () => {
    render(<Footer />);
    const currentYear = new Date().getFullYear().toString();
    expect(screen.getByText(new RegExp(currentYear))).toBeInTheDocument();
  });

  it("renders system status indicator", () => {
    render(<Footer />);
    expect(screen.getByText("All systems operational")).toBeInTheDocument();
  });
});

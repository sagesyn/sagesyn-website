import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { OpenSource } from "./open-source";

describe("OpenSource component", () => {
  it("renders the section heading", () => {
    render(<OpenSource />);
    expect(screen.getByText("Open Source at Heart")).toBeInTheDocument();
  });

  it("renders license badge", () => {
    render(<OpenSource />);
    expect(screen.getByText("Apache 2.0 Licensed")).toBeInTheDocument();
  });

  it("renders GitHub CTA", () => {
    render(<OpenSource />);
    expect(screen.getByText("View on GitHub")).toBeInTheDocument();
    expect(screen.getByText("Contributing Guide")).toBeInTheDocument();
  });

  it("renders community channels", () => {
    render(<OpenSource />);
    expect(screen.getByText("Join the Community")).toBeInTheDocument();
    expect(screen.getByText("GitHub Discussions")).toBeInTheDocument();
    expect(screen.getByText("Discord Community")).toBeInTheDocument();
    expect(screen.getByText("Weekly Office Hours")).toBeInTheDocument();
  });

  it("renders contribution options", () => {
    render(<OpenSource />);
    expect(screen.getByText("Ways to Contribute")).toBeInTheDocument();
    expect(screen.getByText("Code Contributions")).toBeInTheDocument();
    expect(screen.getByText("Documentation")).toBeInTheDocument();
    expect(screen.getByText("Plugins & Extensions")).toBeInTheDocument();
  });
});

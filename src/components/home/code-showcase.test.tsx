import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { CodeShowcase } from "./code-showcase";

// Mock clipboard API
Object.assign(navigator, {
  clipboard: {
    writeText: vi.fn().mockResolvedValue(undefined),
  },
});

describe("CodeShowcase component", () => {
  it("renders section headline", () => {
    render(<CodeShowcase />);
    expect(screen.getByText(/build with/i)).toBeInTheDocument();
    expect(screen.getByText(/any language/i)).toBeInTheDocument();
  });

  it("renders section description", () => {
    render(<CodeShowcase />);
    expect(
      screen.getByText(/first-class sdks for typescript, python, and go/i)
    ).toBeInTheDocument();
  });

  it("renders language tabs", () => {
    render(<CodeShowcase />);
    expect(screen.getByText("TypeScript")).toBeInTheDocument();
    expect(screen.getByText("Python")).toBeInTheDocument();
    expect(screen.getByText("Go")).toBeInTheDocument();
  });

  it("shows TypeScript code by default", () => {
    render(<CodeShowcase />);
    expect(screen.getByText(/from '@sagesyn\/sdk'/i)).toBeInTheDocument();
  });

  it("switches to Python code when Python tab is clicked", () => {
    render(<CodeShowcase />);
    const pythonTab = screen.getByText("Python");
    fireEvent.click(pythonTab);
    expect(screen.getByText(/from sagesyn import/i)).toBeInTheDocument();
  });

  it("switches to Go code when Go tab is clicked", () => {
    render(<CodeShowcase />);
    const goTab = screen.getByText("Go");
    fireEvent.click(goTab);
    expect(
      screen.getByText(/github.com\/sagesyn\/sdk-go/i)
    ).toBeInTheDocument();
  });

  it("renders copy button", () => {
    render(<CodeShowcase />);
    expect(screen.getByText("Copy")).toBeInTheDocument();
  });

  it("copies code to clipboard when copy button is clicked", async () => {
    render(<CodeShowcase />);
    const copyButton = screen.getByText("Copy");
    fireEvent.click(copyButton);

    expect(navigator.clipboard.writeText).toHaveBeenCalled();
  });

  it("shows Copied! message after copying", async () => {
    render(<CodeShowcase />);

    const copyButton = screen.getByText("Copy");
    fireEvent.click(copyButton);

    // Wait for state update
    expect(await screen.findByText("Copied!")).toBeInTheDocument();
  });
});

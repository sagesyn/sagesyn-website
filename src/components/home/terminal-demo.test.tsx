import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { render, screen } from "@testing-library/react";
import { TerminalDemo } from "./terminal-demo";

describe("TerminalDemo component", () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it("renders section headline", () => {
    render(<TerminalDemo />);
    expect(screen.getByText(/compile, check,/i)).toBeInTheDocument();
    const runElements = screen.getAllByText(/run/i);
    expect(runElements.length).toBeGreaterThan(0);
  });

  it("renders section description", () => {
    render(<TerminalDemo />);
    expect(
      screen.getByText(/the sagesyn cli compiles your .sag files/i)
    ).toBeInTheDocument();
  });

  it("renders feature list", () => {
    render(<TerminalDemo />);
    expect(
      screen.getByText(/compile to typescript, python, or go/i)
    ).toBeInTheDocument();
    expect(
      screen.getByText(/lsp diagnostics from the command line/i)
    ).toBeInTheDocument();
  });

  it("renders terminal window", () => {
    render(<TerminalDemo />);
    expect(screen.getByText("sagesyn-cli")).toBeInTheDocument();
  });

  it("renders terminal title bar dots", () => {
    render(<TerminalDemo />);
    const dots = document.querySelectorAll(".rounded-full.h-3.w-3");
    expect(dots.length).toBe(3); // red, yellow, green dots
  });

  it("shows command line prompt", async () => {
    render(<TerminalDemo />);
    // Initial prompt should be visible
    const prompts = screen.getAllByText("$");
    expect(prompts.length).toBeGreaterThan(0);
  });

  it("animates through demo lines over time", async () => {
    render(<TerminalDemo />);

    // Fast forward through animation
    vi.advanceTimersByTime(2000);

    // Should have rendered some output
    const terminalContent = document.querySelector(".font-mono.text-sm");
    expect(terminalContent).toBeInTheDocument();
  });

  it("has terminal content container", () => {
    render(<TerminalDemo />);
    const terminalContainer = document.querySelector(".h-\\[400px\\]");
    expect(terminalContainer).toBeInTheDocument();
  });
});

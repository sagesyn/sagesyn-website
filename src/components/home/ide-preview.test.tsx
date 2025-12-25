import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { render, screen, act } from "@testing-library/react";
import { IDEPreview } from "./ide-preview";

describe("IDEPreview", () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it("renders the section header", () => {
    render(<IDEPreview />);
    expect(screen.getByText("Visual Agent Builder")).toBeInTheDocument();
    expect(
      screen.getByText("Build Agent Workflows Visually")
    ).toBeInTheDocument();
  });

  it("renders the IDE window with title bar", () => {
    render(<IDEPreview />);
    expect(screen.getByText("sagesyn")).toBeInTheDocument();
    expect(screen.getByText("~/research-assistant")).toBeInTheDocument();
  });

  it("renders the toolbar tabs", () => {
    render(<IDEPreview />);
    expect(screen.getByText("canvas")).toBeInTheDocument();
    expect(screen.getByText("code")).toBeInTheDocument();
    expect(screen.getByText("logs")).toBeInTheDocument();
  });

  it("renders the run button", () => {
    render(<IDEPreview />);
    expect(screen.getByText("run")).toBeInTheDocument();
  });

  it("renders the workflow nodes", () => {
    render(<IDEPreview />);
    expect(screen.getByText("user_input")).toBeInTheDocument();
    expect(screen.getByText("research_agent")).toBeInTheDocument();
    expect(screen.getByText("web_search")).toBeInTheDocument();
    expect(screen.getByText("writer_agent")).toBeInTheDocument();
    expect(screen.getByText("file_output")).toBeInTheDocument();
  });

  it("renders the sidebar with node types", () => {
    render(<IDEPreview />);
    expect(screen.getByText("nodes")).toBeInTheDocument();
    expect(screen.getByText("trigger")).toBeInTheDocument();
    expect(screen.getByText("agent")).toBeInTheDocument();
    expect(screen.getByText("tool")).toBeInTheDocument();
    expect(screen.getByText("output")).toBeInTheDocument();
  });

  it("renders MCP servers list", () => {
    render(<IDEPreview />);
    expect(screen.getByText("mcp servers")).toBeInTheDocument();
    expect(screen.getByText("filesystem")).toBeInTheDocument();
    expect(screen.getByText("brave_search")).toBeInTheDocument();
    expect(screen.getByText("github")).toBeInTheDocument();
  });

  it("renders the status bar", () => {
    render(<IDEPreview />);
    expect(screen.getByText("5 nodes")).toBeInTheDocument();
    expect(screen.getByText("3 mcp servers")).toBeInTheDocument();
    expect(screen.getByText("connected")).toBeInTheDocument();
  });

  it("renders feature highlights", () => {
    render(<IDEPreview />);
    expect(screen.getByText("Multi-Model")).toBeInTheDocument();
    expect(screen.getByText("Context Aware")).toBeInTheDocument();
    expect(screen.getByText("Protocol Native")).toBeInTheDocument();
  });

  it("shows model info on agent nodes", () => {
    render(<IDEPreview />);
    expect(screen.getByText("claude-sonnet-4")).toBeInTheDocument();
    expect(screen.getByText("gpt-4o")).toBeInTheDocument();
  });

  it("shows 'running' during animation sequence", async () => {
    render(<IDEPreview />);

    // Initially shows "run"
    expect(screen.getByText("run")).toBeInTheDocument();

    // Fast forward past the initial delay
    await act(async () => {
      vi.advanceTimersByTime(1500);
    });

    // Should now show "running"
    expect(screen.getByText("running")).toBeInTheDocument();
  });

  it("returns to 'run' after animation completes", async () => {
    render(<IDEPreview />);

    // Run through full animation
    await act(async () => {
      vi.advanceTimersByTime(6000);
    });

    // Should be back to "run"
    expect(screen.getByText("run")).toBeInTheDocument();
  });
});

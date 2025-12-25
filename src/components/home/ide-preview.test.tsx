import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { render, screen, fireEvent, act } from "@testing-library/react";
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
  });

  it("renders the IDE window with title bar", () => {
    render(<IDEPreview />);
    expect(screen.getByText("sagesyn")).toBeInTheDocument();
    expect(
      screen.getByText("~/projects/research-assistant.ssag")
    ).toBeInTheDocument();
  });

  it("renders all toolbar tabs", () => {
    render(<IDEPreview />);
    expect(screen.getByText("canvas")).toBeInTheDocument();
    expect(screen.getByText("code")).toBeInTheDocument();
    expect(screen.getByText("logs")).toBeInTheDocument();
    expect(screen.getByText("context")).toBeInTheDocument();
  });

  it("renders the run button", () => {
    render(<IDEPreview />);
    expect(screen.getByText("run")).toBeInTheDocument();
  });

  it("renders the workflow nodes on canvas", () => {
    render(<IDEPreview />);
    expect(screen.getByText("user_input")).toBeInTheDocument();
    expect(screen.getByText("research_agent")).toBeInTheDocument();
    expect(screen.getByText("web_search")).toBeInTheDocument();
    expect(screen.getByText("writer_agent")).toBeInTheDocument();
    expect(screen.getByText("file_output")).toBeInTheDocument();
  });

  it("switches to code tab when clicked", () => {
    render(<IDEPreview />);
    fireEvent.click(screen.getByText("code"));
    expect(
      screen.getByText(/SageSyn Agent Programming Language/)
    ).toBeInTheDocument();
  });

  it("switches to logs tab when clicked", () => {
    render(<IDEPreview />);
    fireEvent.click(screen.getByText("logs"));
    expect(screen.getByText("execution log")).toBeInTheDocument();
    expect(
      screen.getByText("press run to start execution")
    ).toBeInTheDocument();
  });

  it("switches to context tab when clicked", () => {
    render(<IDEPreview />);
    fireEvent.click(screen.getByText("context"));
    expect(screen.getByText("context window inspector")).toBeInTheDocument();
    expect(screen.getByText("allocation")).toBeInTheDocument();
  });

  it("shows running state when run button clicked", async () => {
    render(<IDEPreview />);
    const runButton = screen.getByText("run").closest("button")!;
    fireEvent.click(runButton);
    expect(screen.getByText("running")).toBeInTheDocument();
  });

  it("populates execution logs when running", async () => {
    render(<IDEPreview />);
    fireEvent.click(screen.getByText("logs"));
    fireEvent.click(screen.getByText("run").closest("button")!);

    await act(async () => {
      vi.advanceTimersByTime(1000);
    });

    expect(screen.getByText("workflow.started")).toBeInTheDocument();
  });

  it("selects node and shows properties when clicked", () => {
    render(<IDEPreview />);
    fireEvent.click(screen.getByText("research_agent"));
    // Properties panel should show the selected node
    const nameInput = screen.getByDisplayValue("research_agent");
    expect(nameInput).toBeInTheDocument();
  });

  it("renders MCP servers in sidebar", () => {
    render(<IDEPreview />);
    expect(screen.getByText("mcp servers")).toBeInTheDocument();
    expect(screen.getByText("filesystem")).toBeInTheDocument();
    expect(screen.getByText("brave_search")).toBeInTheDocument();
  });

  it("renders the status bar", () => {
    render(<IDEPreview />);
    expect(screen.getByText("5 nodes")).toBeInTheDocument();
    expect(screen.getByText("4 mcp servers")).toBeInTheDocument();
    expect(screen.getByText("connected")).toBeInTheDocument();
  });

  it("shows model providers panel when models tab clicked", () => {
    render(<IDEPreview />);
    fireEvent.click(screen.getByText("models"));
    expect(screen.getByText("anthropic")).toBeInTheDocument();
    expect(screen.getByText("openai")).toBeInTheDocument();
    expect(screen.getByText("ollama")).toBeInTheDocument();
  });
});

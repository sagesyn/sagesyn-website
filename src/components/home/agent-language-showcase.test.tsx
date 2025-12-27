import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { AgentLanguageShowcase } from "./agent-language-showcase";

// Mock clipboard API
Object.assign(navigator, {
  clipboard: {
    writeText: vi.fn().mockResolvedValue(undefined),
  },
});

describe("AgentLanguageShowcase component", () => {
  it("renders section headline", () => {
    render(<AgentLanguageShowcase />);
    expect(screen.getByText(/write/i)).toBeInTheDocument();
    const ssagElements = screen.getAllByText(/.sag/i);
    expect(ssagElements.length).toBeGreaterThan(0);
    expect(screen.getByText(/compile to anything/i)).toBeInTheDocument();
  });

  it("renders section description", () => {
    render(<AgentLanguageShowcase />);
    expect(
      screen.getByText(/define agents in a clean, declarative syntax/i)
    ).toBeInTheDocument();
  });

  it("renders .sag file example", () => {
    render(<AgentLanguageShowcase />);
    expect(screen.getByText("research-assistant.sag")).toBeInTheDocument();
  });

  it("renders agent code content", () => {
    render(<AgentLanguageShowcase />);
    expect(screen.getByText(/agent: research_assistant/i)).toBeInTheDocument();
    const protocolsElements = screen.getAllByText(/protocols:/i);
    expect(protocolsElements.length).toBeGreaterThan(0);
    const workflowElements = screen.getAllByText(/workflow:/i);
    expect(workflowElements.length).toBeGreaterThan(0);
  });

  it("renders compilation target tabs", () => {
    render(<AgentLanguageShowcase />);
    expect(screen.getByText("TypeScript")).toBeInTheDocument();
    expect(screen.getByText("Python")).toBeInTheDocument();
    expect(screen.getByText("Go")).toBeInTheDocument();
  });

  it("shows TypeScript code by default", () => {
    render(<AgentLanguageShowcase />);
    expect(
      screen.getByText(/import \{ Agent, MCPServer \}/i)
    ).toBeInTheDocument();
  });

  it("switches to Python when Python tab is clicked", () => {
    render(<AgentLanguageShowcase />);
    fireEvent.click(screen.getByText("Python"));
    expect(
      screen.getByText(/from sagesyn import Agent, MCPServer/i)
    ).toBeInTheDocument();
  });

  it("switches to Go when Go tab is clicked", () => {
    render(<AgentLanguageShowcase />);
    fireEvent.click(screen.getByText("Go"));
    expect(screen.getByText(/package agents/i)).toBeInTheDocument();
  });

  it("has copy buttons", () => {
    render(<AgentLanguageShowcase />);
    const copyButtons = screen.getAllByText("Copy");
    expect(copyButtons.length).toBe(2);
  });

  it("shows Copied! after clicking copy button", async () => {
    render(<AgentLanguageShowcase />);
    const copyButtons = screen.getAllByText("Copy");
    fireEvent.click(copyButtons[0]);
    expect(await screen.findByText("Copied!")).toBeInTheDocument();
  });
});

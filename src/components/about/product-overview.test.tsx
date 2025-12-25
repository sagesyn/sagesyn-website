import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { ProductOverview } from "./product-overview";

describe("ProductOverview component", () => {
  it("renders the section heading", () => {
    render(<ProductOverview />);
    expect(screen.getByText("Core Capabilities")).toBeInTheDocument();
  });

  it("renders the protocols section", () => {
    render(<ProductOverview />);
    expect(screen.getByText("Protocol Native")).toBeInTheDocument();
  });

  it("renders protocol names", () => {
    render(<ProductOverview />);
    expect(screen.getByText("MCP")).toBeInTheDocument();
    expect(screen.getByText("A2A")).toBeInTheDocument();
    expect(screen.getByText("AG-UI")).toBeInTheDocument();
  });
});

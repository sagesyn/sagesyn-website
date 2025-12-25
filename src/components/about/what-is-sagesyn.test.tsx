import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { WhatIsSageSyn } from "./what-is-sagesyn";

describe("WhatIsSageSyn component", () => {
  it("renders the section heading", () => {
    render(<WhatIsSageSyn />);
    expect(screen.getByText("What is SageSyn?")).toBeInTheDocument();
  });

  it("renders the IS section", () => {
    render(<WhatIsSageSyn />);
    expect(screen.getByText("SageSyn IS")).toBeInTheDocument();
  });

  it("renders the IS NOT section", () => {
    render(<WhatIsSageSyn />);
    expect(screen.getByText("SageSyn is NOT")).toBeInTheDocument();
  });

  it("renders 'What It Is' items", () => {
    render(<WhatIsSageSyn />);
    expect(
      screen.getByText("A desktop IDE for building AI agents")
    ).toBeInTheDocument();
  });

  it("renders 'What It Is Not' items", () => {
    render(<WhatIsSageSyn />);
    expect(
      screen.getByText("A hosted service or SaaS platform")
    ).toBeInTheDocument();
  });
});

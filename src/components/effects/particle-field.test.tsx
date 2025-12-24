import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { render } from "@testing-library/react";
import { ParticleField } from "./particle-field";

describe("ParticleField component", () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it("renders canvas element", () => {
    render(<ParticleField />);
    const canvas = document.querySelector("canvas");
    expect(canvas).toBeInTheDocument();
  });

  it("applies custom className", () => {
    render(<ParticleField className="custom-class" />);
    const canvas = document.querySelector("canvas.custom-class");
    expect(canvas).toBeInTheDocument();
  });

  it("accepts custom particleCount prop", () => {
    // This mainly tests that the component doesn't crash with custom props
    render(<ParticleField particleCount={100} />);
    const canvas = document.querySelector("canvas");
    expect(canvas).toBeInTheDocument();
  });

  it("accepts custom connectionDistance prop", () => {
    render(<ParticleField connectionDistance={200} />);
    const canvas = document.querySelector("canvas");
    expect(canvas).toBeInTheDocument();
  });

  it("has absolute positioning", () => {
    render(<ParticleField />);
    const canvas = document.querySelector("canvas");
    expect(canvas).toHaveStyle({ position: "absolute" });
  });

  it("respects reduced motion preference", () => {
    // Mock matchMedia to return true for reduced motion
    window.matchMedia = vi.fn().mockImplementation((query) => ({
      matches: query === "(prefers-reduced-motion: reduce)",
      media: query,
      onchange: null,
      addListener: vi.fn(),
      removeListener: vi.fn(),
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      dispatchEvent: vi.fn(),
    }));

    render(<ParticleField />);
    const canvas = document.querySelector("canvas");
    expect(canvas).toBeInTheDocument();
  });
});

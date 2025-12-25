import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { HeroAbout } from "./hero-about";

describe("HeroAbout component", () => {
  it("renders the tagline", () => {
    render(<HeroAbout />);
    expect(
      screen.getByText("The Decision Fabric for Intelligent Systems")
    ).toBeInTheDocument();
  });

  it("renders the main headline", () => {
    render(<HeroAbout />);
    expect(
      screen.getByText("Visual IDE for Building AI Agents")
    ).toBeInTheDocument();
  });

  it("renders the open source badge", () => {
    render(<HeroAbout />);
    expect(
      screen.getByText(/Open Source.*Apache 2.0 License/i)
    ).toBeInTheDocument();
  });

  it("renders the positioning statement", () => {
    render(<HeroAbout />);
    expect(
      screen.getByText("Visual Studio Code meets Node-RED for agents")
    ).toBeInTheDocument();
  });
});

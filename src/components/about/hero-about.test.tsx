import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { HeroAbout } from "./hero-about";

describe("HeroAbout component", () => {
  it("renders the tagline", () => {
    render(<HeroAbout />);
    expect(
      screen.getByText("The Agent Programming Language")
    ).toBeInTheDocument();
  });

  it("renders the main headline", () => {
    render(<HeroAbout />);
    expect(
      screen.getByText("Define Agents. Compile to Any Language.")
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
      screen.getByText("TypeScript is to JavaScript as .sag is to agent SDKs")
    ).toBeInTheDocument();
  });
});

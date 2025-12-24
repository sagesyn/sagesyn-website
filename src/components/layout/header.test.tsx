import { describe, it, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { Header } from "./header";

describe("Header component", () => {
  it("renders logo", () => {
    render(<Header />);
    expect(screen.getAllByText("Sage").length).toBeGreaterThan(0);
  });

  it("renders navigation links", () => {
    render(<Header />);
    expect(screen.getAllByText("Docs").length).toBeGreaterThan(0);
    expect(screen.getAllByText("API Reference").length).toBeGreaterThan(0);
    expect(screen.getAllByText("Changelog").length).toBeGreaterThan(0);
  });

  it("renders Get Started button", () => {
    render(<Header />);
    const buttons = screen.getAllByText("Get Started");
    expect(buttons.length).toBeGreaterThan(0);
  });

  it("opens mobile menu when hamburger is clicked", () => {
    render(<Header />);
    const menuButton = screen.getByRole("button", { name: /open main menu/i });
    fireEvent.click(menuButton);

    // Mobile menu should now be visible
    const closeButton = screen.getByRole("button", { name: /close menu/i });
    expect(closeButton).toBeInTheDocument();
  });

  it("closes mobile menu when close button is clicked", async () => {
    render(<Header />);

    // Open menu
    const menuButton = screen.getByRole("button", { name: /open main menu/i });
    fireEvent.click(menuButton);

    // Close menu
    const closeButton = screen.getByRole("button", { name: /close menu/i });
    fireEvent.click(closeButton);

    // Menu should be hidden (using the hidden class)
    const mobileMenu = document.querySelector('.hidden.lg\\:hidden');
    expect(mobileMenu).toBeTruthy();
  });

  it("has correct navigation link hrefs", () => {
    render(<Header />);
    const docsLink = screen.getAllByRole("link", { name: "Docs" })[0];
    expect(docsLink).toHaveAttribute("href", "/docs");
  });

  it("renders GitHub link with external attributes", () => {
    render(<Header />);
    const githubLinks = document.querySelectorAll('a[href="https://github.com/sagesyn"]');
    expect(githubLinks.length).toBeGreaterThan(0);
    expect(githubLinks[0]).toHaveAttribute("target", "_blank");
    expect(githubLinks[0]).toHaveAttribute("rel", "noopener noreferrer");
  });
});

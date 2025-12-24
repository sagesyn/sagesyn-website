# SageSyn Website - Claude Code Instructions

## Project Overview

This is the official SageSyn company website - a developer-focused, dark cybernetic-themed site for a futuristic agent infrastructure company. The site is built with Next.js 15 and deployed to Cloudflare Pages as a static export.

## Tech Stack

| Layer           | Technology                             |
| --------------- | -------------------------------------- |
| Framework       | Next.js 15 (App Router, static export) |
| Package Manager | Bun                                    |
| UI Components   | shadcn/ui (New York style)             |
| Styling         | Tailwind CSS v4                        |
| Animation       | Motion (Framer Motion)                 |
| Icons           | Lucide React                           |
| Testing         | Vitest + Testing Library               |
| Deployment      | Cloudflare Pages                       |

## Commands

```bash
# Development
bun run dev              # Start dev server with Turbopack
bun run build            # Build for production (static export)
bun run start            # Start production server

# Code Quality
bun run lint             # Run ESLint
bun run lint:fix         # Fix linting issues
bun run format           # Format with Prettier
bun run format:check     # Check formatting
bun run typecheck        # TypeScript type checking

# Testing
bun run test             # Run tests
bun run test:watch       # Run tests in watch mode
bun run test:coverage    # Run tests with coverage report

# Deployment
bun run pages:build      # Build for Cloudflare Pages
bun run pages:preview    # Preview with Wrangler
```

## Project Structure

```
src/
├── app/                      # Next.js App Router
│   ├── layout.tsx            # Root layout with fonts
│   ├── page.tsx              # Home page
│   └── globals.css           # Global styles & Tailwind theme
├── components/
│   ├── ui/                   # shadcn/ui components
│   ├── layout/               # Header, Footer, Logo
│   ├── home/                 # Home page sections
│   │   ├── hero.tsx          # Hero with particle background
│   │   ├── value-props.tsx   # Feature cards
│   │   ├── code-showcase.tsx # Code examples
│   │   ├── terminal-demo.tsx # Animated terminal
│   │   └── cta-section.tsx   # Call to action
│   └── effects/              # Visual effects
│       └── particle-field.tsx # Canvas particle system
├── lib/
│   └── utils.ts              # Utility functions (cn helper)
├── hooks/                    # Custom React hooks
├── types/                    # TypeScript type definitions
└── test/
    └── setup.tsx             # Vitest setup with mocks
```

## Code Style

### TypeScript

- Use strict mode (`strict: true` in tsconfig)
- Prefer `type` over `interface` unless extending
- Use arrow functions for components
- Place component props types inline or as `ComponentNameProps`

```typescript
// Good
export function Button({ variant = "default" }: { variant?: "default" | "outline" }) {
  return <button className={cn("...", variant === "outline" && "...")} />;
}

// Also good for complex props
type CardProps = {
  title: string;
  description?: string;
  icon: React.ComponentType<{ className?: string }>;
};

export function Card({ title, description, icon: Icon }: CardProps) {
  // ...
}
```

### Components

- Use named exports (not default exports)
- Co-locate test files (`component.tsx` + `component.test.tsx`)
- Use absolute imports with `@/` prefix
- Follow Tailwind class ordering (handled by prettier-plugin-tailwindcss)

```typescript
// Imports order
import { useState, useEffect } from "react"; // React
import Link from "next/link"; // Next.js
import { ArrowRight, Github } from "lucide-react"; // External libs
import { cn } from "@/lib/utils"; // Internal utils
import { Button } from "@/components/ui/button"; // Internal components
```

### Styling

- Use Tailwind utility classes
- Custom theme colors defined in `globals.css` using `@theme`
- Use `cn()` helper for conditional classes
- Custom animations defined in `@keyframes`

```typescript
// Using theme colors
<div className="bg-background text-foreground" />
<span className="text-neon-cyan glow-cyan" />
<button className="bg-neon-cyan text-background hover:shadow-glow-cyan" />
```

## Design Tokens

### Colors

```css
/* Dark Base */
--color-background: #0a0d12;
--color-surface: #12161d;
--color-border: #2a3241;

/* Neon Accents */
--color-neon-cyan: #00ffff;
--color-neon-magenta: #ff00ff;
--color-neon-blue: #4d7cff;
--color-neon-green: #00ff88;
--color-neon-orange: #ff6b35;
```

### Typography

- Headings: `font-display` (Space Grotesk)
- Body: `font-sans` (Inter)
- Code: `font-mono` (JetBrains Mono)

## Testing

- Write tests for all components
- Use Testing Library queries (`getByText`, `getByRole`)
- Mock Next.js components (Link, navigation)
- Coverage threshold: 80% lines/statements, 70% functions

```typescript
// Component test example
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { MyComponent } from "./my-component";

describe("MyComponent", () => {
  it("renders correctly", () => {
    render(<MyComponent title="Test" />);
    expect(screen.getByText("Test")).toBeInTheDocument();
  });
});
```

## Git Workflow

- Main branch: `main`
- Feature branches: `feat/feature-name`
- Use conventional commits:
  - `feat:` - New feature
  - `fix:` - Bug fix
  - `chore:` - Maintenance
  - `docs:` - Documentation
  - `refactor:` - Code refactoring

```bash
git checkout -b feat/new-feature
# Make changes
git add .
git commit -m "feat: add new feature"
git push origin feat/new-feature
```

## Deployment

- Push to `main` triggers Cloudflare Pages deployment
- Preview deployments for PRs at `*.sagesyn-website.pages.dev`
- Production: https://sagesyn.ai

## Adding New Components

1. Create component file in appropriate directory
2. Add test file alongside
3. Export from index.ts (if exists)
4. Run tests and ensure coverage

```bash
# Create component
touch src/components/home/new-section.tsx
touch src/components/home/new-section.test.tsx

# Run tests
bun run test
bun run test:coverage
```

## Important Notes

- Static export: No server-side features (API routes, SSR)
- Images must be unoptimized for static export
- All links use `trailingSlash: true` configuration
- Respect `prefers-reduced-motion` for animations

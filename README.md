# SageSyn Website

The official website for **SageSyn** - building the next generation of agent infrastructure.

[![Deploy to Cloudflare Pages](https://img.shields.io/badge/Deploy-Cloudflare%20Pages-orange)](https://pages.cloudflare.com)
[![Next.js](https://img.shields.io/badge/Next.js-15-black)](https://nextjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7-blue)](https://www.typescriptlang.org)
[![License](https://img.shields.io/badge/License-MIT-green)](LICENSE)

## About SageSyn

SageSyn builds **futuristic agent infrastructure** - a coordinated layer where intelligent agents, tools, and data work together as a stable "decision fabric" for modern systems.

### Core Concepts

- **Agent Mesh as First-Class Infra**: Agents treated like microservices - discoverable, observable, and policy-controlled
- **Layered Cognition**: Workflows structured into stages (perception, reasoning, tools, execution, feedback)
- **Protocol-Native & Interop-Friendly**: Designed to speak modern agent protocols (MCP, A2A patterns)

## Tech Stack

| Layer           | Technology                                                   |
| --------------- | ------------------------------------------------------------ |
| Framework       | [Next.js 15](https://nextjs.org) (App Router, Static Export) |
| Package Manager | [Bun](https://bun.sh)                                        |
| UI Components   | [shadcn/ui](https://ui.shadcn.com)                           |
| Styling         | [Tailwind CSS v4](https://tailwindcss.com)                   |
| Content         | [Velite](https://velite.js.org) (MDX)                        |
| Animation       | [Motion](https://motion.dev)                                 |
| Deployment      | [Cloudflare Pages](https://pages.cloudflare.com)             |

## Getting Started

### Prerequisites

- [Bun](https://bun.sh) v1.1.0 or later
- [Node.js](https://nodejs.org) v20 or later (for some tooling)

### Installation

```bash
# Clone the repository
git clone https://github.com/sagesyn/sagesyn-website.git
cd sagesyn-website

# Install dependencies
bun install

# Start development server
bun run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Available Scripts

```bash
# Development
bun run dev          # Start dev server with Turbopack
bun run build        # Build for production
bun run start        # Start production server

# Code Quality
bun run lint         # Run ESLint
bun run lint:fix     # Fix linting issues
bun run format       # Format with Prettier
bun run format:check # Check formatting
bun run typecheck    # TypeScript type checking

# Testing
bun run test         # Run tests
bun run test:watch   # Run tests in watch mode
bun run test:coverage # Run tests with coverage

# Content
bun run content:build # Build content with Velite
bun run content:watch # Watch content changes

# Deployment
bun run pages:build   # Build for Cloudflare Pages
bun run pages:preview # Preview with Wrangler
```

## Project Structure

```
sagesyn-website/
├── .github/
│   ├── workflows/           # GitHub Actions
│   └── dependabot.yml       # Dependency updates
├── content/
│   ├── docs/                # Documentation (MDX)
│   └── changelog/           # Version history
├── public/
│   ├── fonts/               # Custom fonts
│   ├── images/              # Static images
│   └── assets/              # Icons, patterns
├── src/
│   ├── app/                 # Next.js App Router
│   ├── components/
│   │   ├── ui/              # shadcn/ui components
│   │   ├── layout/          # Header, Footer, Nav
│   │   ├── home/            # Home page components
│   │   ├── docs/            # Documentation components
│   │   └── effects/         # Visual effects
│   ├── lib/                 # Utilities
│   ├── hooks/               # Custom hooks
│   └── types/               # TypeScript types
├── docs/                    # Setup guides
├── CLAUDE.md                # Claude Code instructions
└── velite.config.ts         # Content configuration
```

## Deployment

This site is deployed to [Cloudflare Pages](https://pages.cloudflare.com).

### Automatic Deployment

- **Production**: Push to `main` branch triggers deployment to `sagesyn.ai`
- **Preview**: Pull requests get preview URLs at `*.sagesyn-website.pages.dev`

### Manual Deployment

```bash
# Build the site
bun run build

# Deploy with Wrangler
bunx wrangler pages deploy out --project-name=sagesyn-website
```

### Environment Variables

| Variable               | Description                               |
| ---------------------- | ----------------------------------------- |
| `NEXT_PUBLIC_SITE_URL` | Canonical site URL (`https://sagesyn.ai`) |

## Documentation

- [Cloudflare Setup Guide](docs/cloudflare-setup.md) - Configure Cloudflare Pages and domains
- [Contributing Guide](CONTRIBUTING.md) - How to contribute (coming soon)

## Design System

### Color Palette

The site uses a **Dark Cybernetic** theme:

- **Background**: Deep space black (`#0a0d12`)
- **Neon Cyan**: Primary actions (`#00ffff`)
- **Neon Magenta**: Highlights (`#ff00ff`)
- **Neon Blue**: Links (`#4d7cff`)
- **Neon Green**: Success (`#00ff88`)

### Typography

- **Headings**: Space Grotesk / Geist Sans
- **Body**: Inter
- **Code**: JetBrains Mono

## Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

1. Fork the repository
2. Create your feature branch (`git checkout -b feat/amazing-feature`)
3. Commit your changes (`git commit -m 'feat: add amazing feature'`)
4. Push to the branch (`git push origin feat/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Links

- **Website**: [sagesyn.ai](https://sagesyn.ai)
- **Documentation**: [sagesyn.ai/docs](https://sagesyn.ai/docs)
- **GitHub**: [github.com/sagesyn](https://github.com/sagesyn)

---

Built with care by the SageSyn team.

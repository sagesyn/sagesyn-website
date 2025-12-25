export type Agent = {
  id: string;
  name: string;
  role: string;
  scope: string;
  color: string;
  skills: string[];
  phase1: number;
  phase2: number;
  phase3: number;
  phase4: number;
  collaborates: string[];
  outputs: string[];
};

export type Phase = {
  id: number;
  name: string;
  quarter: string;
  focus: string;
};

export const agents: Agent[] = [
  {
    id: "atlas",
    name: "ATLAS",
    role: "Orchestrator",
    scope: "Project coordination, sprint planning, decision making",
    color: "#f59e0b",
    skills: ["Planning", "Coordination", "Architecture Decisions", "Risk Management"],
    phase1: 100,
    phase2: 100,
    phase3: 100,
    phase4: 100,
    collaborates: ["all"],
    outputs: ["Sprint backlogs", "ADRs", "Progress reports"],
  },
  {
    id: "sage",
    name: "SAGE",
    role: "Product",
    scope: "Requirements, specifications, user stories",
    color: "#8b5cf6",
    skills: ["PRDs", "User Stories", "Documentation", "Prioritization"],
    phase1: 40,
    phase2: 30,
    phase3: 30,
    phase4: 50,
    collaborates: ["pixel", "forge", "canvas", "rust"],
    outputs: ["PRDs", "User stories", "Acceptance criteria", "Release notes"],
  },
  {
    id: "forge",
    name: "FORGE",
    role: "Architect",
    scope: "System design, API contracts, technical leadership",
    color: "#ef4444",
    skills: ["System Design", "API Design", "Security", "Performance"],
    phase1: 100,
    phase2: 60,
    phase3: 50,
    phase4: 60,
    collaborates: ["rust", "canvas", "bridge", "atlas"],
    outputs: ["Architecture docs", "API specs", "Schemas", "ADRs"],
  },
  {
    id: "pixel",
    name: "PIXEL",
    role: "UX/Design",
    scope: "Interface design, component library, visual system",
    color: "#ec4899",
    skills: ["UI Design", "Component Systems", "Icons", "Accessibility"],
    phase1: 60,
    phase2: 40,
    phase3: 30,
    phase4: 30,
    collaborates: ["canvas", "sage"],
    outputs: ["Design specs", "Component library", "Theme config", "Icons"],
  },
  {
    id: "canvas",
    name: "CANVAS",
    role: "Frontend",
    scope: "React/TypeScript, visual canvas, Monaco editor",
    color: "#3b82f6",
    skills: ["React", "TypeScript", "XY Flow", "Monaco", "Tailwind"],
    phase1: 100,
    phase2: 80,
    phase3: 100,
    phase4: 80,
    collaborates: ["pixel", "rust", "bridge"],
    outputs: ["React components", "Hooks", "State stores", "UI tests"],
  },
  {
    id: "rust",
    name: "RUST",
    role: "Backend",
    scope: "Tauri shell, runtime, model gateway, context manager",
    color: "#f97316",
    skills: ["Rust", "Tauri", "SQLite", "Async", "Systems"],
    phase1: 100,
    phase2: 100,
    phase3: 80,
    phase4: 80,
    collaborates: ["canvas", "bridge", "forge"],
    outputs: ["Rust modules", "Tauri commands", "Migrations", "Benchmarks"],
  },
  {
    id: "bridge",
    name: "BRIDGE",
    role: "Protocols",
    scope: "MCP, A2A, AG-UI integration",
    color: "#14b8a6",
    skills: ["MCP", "A2A", "AG-UI", "Protocol Design", "Interop"],
    phase1: 20,
    phase2: 100,
    phase3: 100,
    phase4: 80,
    collaborates: ["rust", "canvas", "forge"],
    outputs: ["Protocol adapters", "MCP servers", "A2A cards", "Compliance tests"],
  },
  {
    id: "sentinel",
    name: "SENTINEL",
    role: "QA",
    scope: "Testing, quality assurance, security",
    color: "#22c55e",
    skills: ["Unit Tests", "E2E", "Performance", "Security", "Code Review"],
    phase1: 40,
    phase2: 60,
    phase3: 80,
    phase4: 100,
    collaborates: ["all"],
    outputs: ["Test suites", "Coverage reports", "Bug reports", "Audits"],
  },
  {
    id: "pipeline",
    name: "PIPELINE",
    role: "DevOps",
    scope: "CI/CD, builds, releases, infrastructure",
    color: "#64748b",
    skills: ["GitHub Actions", "Cross-platform", "Docker", "Releases"],
    phase1: 80,
    phase2: 40,
    phase3: 40,
    phase4: 60,
    collaborates: ["atlas", "sentinel", "rust", "canvas"],
    outputs: ["CI workflows", "Build scripts", "Release artifacts", "Configs"],
  },
];

export const phases: Phase[] = [
  { id: 1, name: "Foundation", quarter: "Q1 2026", focus: "Core shell, visual canvas MVP" },
  { id: 2, name: "Multi-Model", quarter: "Q2 2026", focus: "Model gateway, context, MCP" },
  { id: 3, name: "Advanced", quarter: "Q3 2026", focus: "Debugging, monitoring, A2A" },
  { id: 4, name: "Enterprise", quarter: "Q4 2026", focus: "Auth, plugins, ecosystem" },
];

export const getAgentById = (id: string): Agent | undefined => {
  return agents.find((agent) => agent.id === id);
};

export const getOrchestrator = (): Agent => {
  return agents.find((agent) => agent.id === "atlas")!;
};

export const getTeamAgents = (): Agent[] => {
  return agents.filter((agent) => agent.id !== "atlas");
};

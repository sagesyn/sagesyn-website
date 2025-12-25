export type Milestone = {
  id: string;
  name: string;
  description: string;
  status: "completed" | "in_progress" | "upcoming";
};

export type RoadmapPhase = {
  id: number;
  name: string;
  quarter: string;
  goal: string;
  description: string;
  milestones: Milestone[];
  keyDeliverables: string[];
};

export const roadmapPhases: RoadmapPhase[] = [
  {
    id: 1,
    name: "Foundation",
    quarter: "Q1 2026",
    goal: "Functional Desktop IDE",
    description:
      "Establish the core Tauri-based desktop shell with basic visual canvas capabilities and local model support via Ollama.",
    milestones: [
      {
        id: "1.1",
        name: "Desktop Shell MVP",
        description: "Working Tauri app with basic UI framework",
        status: "upcoming",
      },
      {
        id: "1.2",
        name: "Visual Canvas Core",
        description: "XY Flow integration with basic node types",
        status: "upcoming",
      },
      {
        id: "1.3",
        name: "Local Model Support",
        description: "Ollama integration for local LLM execution",
        status: "upcoming",
      },
      {
        id: "1.4",
        name: "Basic Workflow Execution",
        description: "Simple agent workflows with sequential execution",
        status: "upcoming",
      },
    ],
    keyDeliverables: [
      "Tauri desktop shell for macOS, Windows, Linux",
      "Visual canvas with drag-and-drop nodes",
      "Monaco code editor integration",
      "Ollama-powered local inference",
      "Basic execution monitor",
    ],
  },
  {
    id: 2,
    name: "Multi-Model & Tools",
    quarter: "Q2 2026",
    goal: "Full Model Gateway & MCP Ecosystem",
    description:
      "Expand model support to cloud providers and establish the MCP tool ecosystem for extensible agent capabilities.",
    milestones: [
      {
        id: "2.1",
        name: "Model Gateway",
        description: "Unified API for Anthropic, OpenAI, Google, local models",
        status: "upcoming",
      },
      {
        id: "2.2",
        name: "Context Window Manager",
        description: "Advanced context optimization and visualization",
        status: "upcoming",
      },
      {
        id: "2.3",
        name: "MCP Integration",
        description: "Full MCP client with server discovery",
        status: "upcoming",
      },
      {
        id: "2.4",
        name: "Tool Marketplace",
        description: "Curated catalog of MCP servers and tools",
        status: "upcoming",
      },
    ],
    keyDeliverables: [
      "Multi-model support (Claude, GPT-4, Gemini, Llama)",
      "Context window inspector with token visualization",
      "MCP tool browser and installation",
      "Credential management per provider",
      "Cost estimation and tracking",
    ],
  },
  {
    id: 3,
    name: "Advanced Features",
    quarter: "Q3 2026",
    goal: "v1.0 Stable Release",
    description:
      "Production-ready debugging, monitoring capabilities, and A2A protocol support for multi-agent communication.",
    milestones: [
      {
        id: "3.1",
        name: "Debug Mode",
        description: "Step-through debugging with breakpoints",
        status: "upcoming",
      },
      {
        id: "3.2",
        name: "Execution Trace",
        description: "Complete execution history with replay",
        status: "upcoming",
      },
      {
        id: "3.3",
        name: "A2A Protocol",
        description: "Agent-to-agent communication support",
        status: "upcoming",
      },
      {
        id: "3.4",
        name: "v1.0 Release",
        description: "Stable public release with documentation",
        status: "upcoming",
      },
    ],
    keyDeliverables: [
      "Interactive debugger with breakpoints",
      "Execution trace viewer and replay",
      "A2A protocol client implementation",
      "AG-UI event streaming",
      "Performance monitoring dashboard",
    ],
  },
  {
    id: 4,
    name: "Enterprise & Ecosystem",
    quarter: "Q4 2026",
    goal: "Enterprise Features & Plugin Ecosystem",
    description:
      "Enterprise-grade authentication, team collaboration features, and a thriving plugin ecosystem.",
    milestones: [
      {
        id: "4.1",
        name: "Plugin System",
        description: "Extensible plugin architecture with SDK",
        status: "upcoming",
      },
      {
        id: "4.2",
        name: "Team Features",
        description: "Collaboration, sharing, and permissions",
        status: "upcoming",
      },
      {
        id: "4.3",
        name: "Enterprise Auth",
        description: "SSO, RBAC, and audit logging",
        status: "upcoming",
      },
      {
        id: "4.4",
        name: "Cloud Sync",
        description: "Optional cloud backup and sync",
        status: "upcoming",
      },
    ],
    keyDeliverables: [
      "Plugin SDK with TypeScript/Rust support",
      "Community plugin marketplace",
      "Team workspaces with permissions",
      "SSO integration (OIDC, SAML)",
      "Audit logs and compliance tools",
    ],
  },
];

export const getPhaseById = (id: number): RoadmapPhase | undefined => {
  return roadmapPhases.find((phase) => phase.id === id);
};

export const getCurrentPhase = (): RoadmapPhase => {
  // For now, return Phase 1 as current
  return roadmapPhases[0];
};

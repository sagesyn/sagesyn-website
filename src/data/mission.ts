export type CorePrinciple = {
  id: string;
  title: string;
  description: string;
  icon: string;
};

export type Feature = {
  id: string;
  title: string;
  description: string;
  details: string[];
};

export type Protocol = {
  id: string;
  name: string;
  fullName: string;
  description: string;
  purpose: string;
};

export const executiveVision = {
  tagline: "The Decision Fabric for Intelligent Systems",
  headline: "Visual IDE for Building AI Agents",
  subheadline:
    "The most intuitive, powerful, and flexible desktop IDE for creating, testing, and deploying AI agents.",
  description:
    "SageSyn reimagines how developers and teams build AI agents. Combining a visual canvas for workflow design, deep context window control, and model-agnostic architecture, SageSyn empowers builders to create production-grade agentic systems without vendor lock-in.",
  positioning: "Visual Studio Code meets Node-RED for agents",
};

export const missionStatement = {
  statement:
    "To democratize the creation of intelligent systems by providing the most intuitive, powerful, and flexible desktop IDE for building AI agents.",
  pillars: [
    "Visual-first approach to agent development",
    "Deep control over context and memory",
    "Model-agnostic and vendor-neutral",
    "Local-first with optional cloud features",
    "Open source at the core",
  ],
};

export const corePrinciples: CorePrinciple[] = [
  {
    id: "visual-first",
    title: "Visual-First Development",
    description:
      "Design agent workflows visually with a powerful canvas interface. See your agent logic at a glance, debug visually, and iterate faster than ever.",
    icon: "layout",
  },
  {
    id: "context-mastery",
    title: "Context Window Mastery",
    description:
      "Unprecedented visibility and control over context windows. Visualize token usage, optimize prompts, and manage memory across complex agent interactions.",
    icon: "layers",
  },
  {
    id: "model-agnostic",
    title: "Model Agnostic",
    description:
      "Work with any LLM provider—Claude, GPT-4, Gemini, Llama, or your own fine-tuned models. Switch models per agent or even per node.",
    icon: "shuffle",
  },
  {
    id: "protocol-native",
    title: "Protocol Native",
    description:
      "Built from the ground up with MCP, A2A, and AG-UI protocols. First-class support for the emerging standards in agent infrastructure.",
    icon: "network",
  },
  {
    id: "local-first",
    title: "Local-First Design",
    description:
      "Your data stays on your machine by default. Run agents locally with Ollama, with optional cloud features when you need them.",
    icon: "shield",
  },
  {
    id: "open-source",
    title: "Open Source Core",
    description:
      "Apache 2.0 licensed core with a thriving community. Build on SageSyn, contribute back, and shape the future of agent development.",
    icon: "git-branch",
  },
];

export const whatIsSageSyn = {
  is: [
    "A desktop IDE for building AI agents",
    "A visual canvas for designing agent workflows",
    "A unified interface for multiple LLM providers",
    "A deep introspection tool for context windows",
    "An open source project (Apache 2.0)",
    "Protocol-native (MCP, A2A, AG-UI)",
  ],
  isNot: [
    "A hosted service or SaaS platform",
    "A specific agent framework",
    "Tied to a single LLM provider",
    "A chatbot or conversational interface",
    "A no-code / low-code platform",
    "A replacement for coding",
  ],
};

export const coreFeatures: Feature[] = [
  {
    id: "visual-canvas",
    title: "Visual Agent Canvas",
    description:
      "Design complex agent workflows with an intuitive node-based interface.",
    details: [
      "Drag-and-drop node creation",
      "Visual connection management",
      "Real-time execution visualization",
      "Zoom and pan controls",
      "Mini-map navigation",
    ],
  },
  {
    id: "code-editor",
    title: "Integrated Code Editor",
    description: "Monaco-powered editor with full LSP support for agent code.",
    details: [
      "Syntax highlighting for Python, TypeScript, YAML",
      "IntelliSense and autocomplete",
      "Inline documentation",
      "Git integration",
      "Multi-file editing",
    ],
  },
  {
    id: "execution-monitor",
    title: "Real-Time Execution Monitor",
    description:
      "Watch your agents think in real-time with comprehensive observability.",
    details: [
      "Live token streaming",
      "Tool call visualization",
      "Error tracking and alerts",
      "Performance metrics",
      "Cost estimation",
    ],
  },
  {
    id: "context-inspector",
    title: "Context Window Inspector",
    description:
      "Unprecedented visibility into what your agents see and remember.",
    details: [
      "Token usage breakdown",
      "Context allocation visualization",
      "Memory management controls",
      "Optimization suggestions",
      "History replay",
    ],
  },
];

export const protocols: Protocol[] = [
  {
    id: "mcp",
    name: "MCP",
    fullName: "Model Context Protocol",
    description: "The standard for tool and data integration with AI models.",
    purpose:
      "Connect agents to external tools, databases, and services through a unified protocol.",
  },
  {
    id: "a2a",
    name: "A2A",
    fullName: "Agent-to-Agent Protocol",
    description:
      "Enable communication between agents across frameworks and vendors.",
    purpose:
      "Build multi-agent systems where agents can discover, communicate, and collaborate.",
  },
  {
    id: "ag-ui",
    name: "AG-UI",
    fullName: "Agent-User Interface Protocol",
    description: "Standardized events for agent-to-frontend communication.",
    purpose: "Create rich, real-time user interfaces for agent interactions.",
  },
];

export const techStack = {
  desktop: "Tauri (Rust)",
  frontend: "React + TypeScript",
  canvas: "XY Flow (React Flow)",
  editor: "Monaco Editor",
  database: "SQLite + DuckDB",
  styling: "Tailwind CSS",
};

export const openSourceInfo = {
  license: "Apache 2.0",
  repository: "github.com/sagesyn/sagesyn",
  community: ["GitHub Discussions", "Discord Community", "Weekly Office Hours"],
  contributing: {
    codeContributions: true,
    documentation: true,
    translations: true,
    mcpServers: true,
    plugins: true,
  },
};

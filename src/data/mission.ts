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
  tagline: "The Agent Programming Language",
  headline: "Define Agents. Compile to Any Language.",
  subheadline:
    "A declarative language for building AI agents. Write once, compile to TypeScript, Python, or Go.",
  description:
    "SageSyn introduces the Agent Programming Language (.sag) - a clean, YAML-like syntax for defining intelligent agents. With LSP support for VSCode, Vim, and Neovim, plus native constructs for MCP, A2A, and AG-UI protocols, agents become first-class citizens in your development workflow.",
  positioning: "TypeScript is to JavaScript as .sag is to agent SDKs",
};

export const missionStatement = {
  statement:
    "To establish a universal language for defining intelligent agents - one that compiles to any target, integrates with any model, and speaks every protocol.",
  pillars: [
    "Declarative language for agent definition",
    "Multi-target compilation (TS, Python, Go)",
    "LSP support for intelligent editing",
    "Protocol primitives (MCP, A2A, AG-UI)",
    "Visual IDE for workflow design",
  ],
};

export const corePrinciples: CorePrinciple[] = [
  {
    id: "declarative-syntax",
    title: "Declarative Syntax",
    description:
      "Define agents in clean, readable YAML-like syntax. Focus on what your agent does, not the boilerplate. The language handles the complexity.",
    icon: "file-code",
  },
  {
    id: "multi-target",
    title: "Multi-Target Compilation",
    description:
      "Write once, compile to TypeScript, Python, or Go. Your agent definitions become production-ready code in any language your team uses.",
    icon: "git-branch",
  },
  {
    id: "lsp-powered",
    title: "LSP-Powered Editing",
    description:
      "Full Language Server Protocol support. Get autocompletion, hover docs, diagnostics, and refactoring in VSCode, Vim, Neovim, and any LSP-compatible editor.",
    icon: "wand",
  },
  {
    id: "protocol-native",
    title: "Protocol Primitives",
    description:
      "MCP, A2A, and AG-UI are first-class language constructs. Define tool connections, agent discovery, and UI streaming as native syntax, not afterthoughts.",
    icon: "network",
  },
  {
    id: "model-agnostic",
    title: "Model Agnostic",
    description:
      "Work with any LLM provider—Claude, GPT-4, Gemini, Llama, or your own models. The language abstracts the provider, your agents stay portable.",
    icon: "shuffle",
  },
  {
    id: "open-source",
    title: "Open Source Core",
    description:
      "Apache 2.0 licensed compiler, LSP server, and runtime. Build on SageSyn, contribute back, and shape the future of agent development.",
    icon: "github",
  },
];

export const whatIsSageSyn = {
  is: [
    "A programming language for defining AI agents (.sag files)",
    "A multi-target compiler (TypeScript, Python, Go)",
    "An LSP server for intelligent editing",
    "A visual IDE for designing agent workflows",
    "Protocol-native (MCP, A2A, AG-UI as language constructs)",
    "An open source project (Apache 2.0)",
  ],
  isNot: [
    "Yet another agent framework",
    "A hosted service or SaaS platform",
    "Tied to a single LLM provider",
    "A no-code / low-code platform",
    "A chatbot or conversational interface",
    "A replacement for understanding agents",
  ],
};

export const coreFeatures: Feature[] = [
  {
    id: "agent-language",
    title: "Agent Programming Language",
    description:
      "A declarative, YAML-like language purpose-built for defining intelligent agents.",
    details: [
      "Clean, readable syntax for agent definition",
      "Native workflow constructs (perceive, reason, execute, respond)",
      "Protocol primitives (MCP servers, A2A discovery, AG-UI events)",
      "Type-safe tool definitions",
      "Structured model configuration",
    ],
  },
  {
    id: "compiler",
    title: "Multi-Target Compiler",
    description:
      "Compile .sag files to production-ready code in any language.",
    details: [
      "TypeScript target with full type safety",
      "Python target for ML/AI ecosystems",
      "Go target for high-performance systems",
      "Optimized code generation",
      "Source maps for debugging",
    ],
  },
  {
    id: "lsp-server",
    title: "Language Server Protocol",
    description:
      "First-class editor support for an intelligent development experience.",
    details: [
      "Autocompletion for agents, tools, protocols",
      "Hover documentation and type information",
      "Real-time diagnostics and error reporting",
      "Go-to-definition and find references",
      "Refactoring support (rename, extract)",
    ],
  },
  {
    id: "visual-canvas",
    title: "Visual Agent Canvas",
    description:
      "Design and visualize agent workflows with an intuitive node-based interface.",
    details: [
      "Drag-and-drop workflow design",
      "Visual representation of .sag files",
      "Real-time execution visualization",
      "Context window inspector",
      "Integrated execution logs",
    ],
  },
];

export const protocols: Protocol[] = [
  {
    id: "mcp",
    name: "MCP",
    fullName: "Model Context Protocol",
    description: "Define tool integrations as language constructs.",
    purpose:
      "Connect agents to external tools, databases, and services through native syntax. MCP servers become typed dependencies in your .sag file.",
  },
  {
    id: "a2a",
    name: "A2A",
    fullName: "Agent-to-Agent Protocol",
    description:
      "Enable agent discovery and communication as first-class features.",
    purpose:
      "Build multi-agent systems where agents declare their capabilities and discover each other through the language itself.",
  },
  {
    id: "ag-ui",
    name: "AG-UI",
    fullName: "Agent-User Interface Protocol",
    description: "Stream agent events to frontends with native constructs.",
    purpose:
      "Define how your agent communicates with user interfaces - streaming responses, state updates, and interactive elements.",
  },
];

export const techStack = {
  language: "Agent Language Spec",
  compiler: "Rust",
  lspServer: "Rust",
  targets: ["TypeScript", "Python", "Go"],
  visualIde: "Tauri + React",
  editor: "Monaco Editor",
};

export const openSourceInfo = {
  license: "Apache 2.0",
  repository: "github.com/sagesyn/sagesyn",
  packages: [
    "@sagesyn/compiler - Multi-target compiler",
    "@sagesyn/lsp - Language server",
    "@sagesyn/runtime-ts - TypeScript runtime",
    "sagesyn-py - Python runtime",
    "sagesyn-go - Go runtime",
  ],
  community: ["GitHub Discussions", "Discord Community", "Weekly Office Hours"],
  contributing: {
    languageSpec: true,
    compiler: true,
    lspServer: true,
    runtimes: true,
    documentation: true,
  },
};

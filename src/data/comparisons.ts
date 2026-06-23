// Comparison content. Lead with GDAgent's strengths, stay honest about where each
// competitor is stronger. Re-verify competitor claims before big changes — details drift.
export interface Comparison {
  slug: string;
  competitor: string;
  title: string;
  description: string;
  shortVersion: string;
  intro: string;
  strengths: string[]; // where GDAgent is stronger
  theyLead: string[]; // honest: where the competitor leads
  verdict: string;
  reviewed: string;
}

export const comparisons: Comparison[] = [
  {
    slug: "ziva",
    competitor: "Ziva",
    title: "GDAgent vs. Ziva",
    description:
      "GDAgent vs. Ziva for AI-assisted Godot development: subscription and credits versus a one-time price, managed harness versus your own terminal agents, and where each one fits.",
    shortVersion: "Ziva rents you AI by the month. GDAgent lets you bring your own.",
    intro:
      "Ziva is a polished, managed AI assistant for Godot. You pay monthly into its credit balance and work inside its interface. GDAgent is a one-time purchase that runs the real terminal coding agents you already use, inside the editor.",
    strengths: [
      "One-time $9.99. No subscription and no per-message credits.",
      "Bring your own Claude, Codex or OpenCode. Use a free CLI or the AI you already pay for, instead of buying credits every month.",
      "The full terminal agent, not a managed harness. The same tools you'd run in a terminal, now in Godot.",
      "Run several agents at once and arrange them in split-view layouts, with your layout restored next launch.",
      "No telemetry and no servers of our own.",
    ],
    theyLead: [
      "Ziva can generate assets like sprites and textures, not just code.",
      "Ziva supports macOS today. GDAgent is Windows and Linux for now.",
      "Ziva is fully managed: nothing to set up, and an AI balance is included.",
      "Ziva packages one-click helpers like test generation, where GDAgent leaves that to the agent in the terminal.",
    ],
    verdict:
      "If you want a managed, batteries-included assistant and don't mind a monthly subscription, Ziva is a fair choice. If you already use terminal coding agents and want them inside Godot without a second AI bill, GDAgent is built for you.",
    reviewed: "June 2026",
  },
  {
    slug: "summer-engine",
    competitor: "Summer Engine",
    title: "GDAgent vs. Summer Engine",
    description:
      "GDAgent vs. Summer Engine: an AI plugin for the real Godot editor versus a separate AI-native engine, and how to choose.",
    shortVersion: "Summer is a separate engine. GDAgent keeps you in the Godot you already use.",
    intro:
      "Summer Engine is an AI-native engine that is compatible with Godot 4. You move your work into its app, and its hosted AI is billed by usage. GDAgent adds AI agents to the real Godot editor and leaves your project and workflow where they are.",
    strengths: [
      "Works in real Godot. Your project, scenes and shortcuts stay put, with nothing to migrate.",
      "Runs the terminal coding agents you already use, on your own AI.",
      "One-time $9.99, with no usage-based AI billing.",
      "No telemetry and no servers of our own.",
    ],
    theyLead: [
      "Summer is AI-native: the engine itself is built around the AI, rather than adding AI to an existing editor. Its run-and-fix loop is more automatic as a result.",
      "It can generate assets, not just code.",
      "It is free to start.",
    ],
    verdict:
      "Choose Summer Engine if you want an AI-first engine and are willing to adopt a new tool. Choose GDAgent if you want to stay in Godot and bring your own agents.",
    reviewed: "June 2026",
  },
  {
    slug: "free-godot-ai-plugins",
    competitor: "the free Godot AI plugins",
    title: "GDAgent vs. the free Godot AI plugins",
    description:
      "GDAgent vs. free, open-source Godot AI plugins like Agent Godette, Godot AI and GDAI MCP: what the paid version gets you, and when the free tools are the better call.",
    shortVersion:
      "The free plugins give you the parts. GDAgent gives you the assembled, maintained workspace.",
    intro:
      "Several free, open-source plugins bring AI into Godot. Agent Godette runs Claude and Codex in the editor, Godot AI connects MCP clients, GDAI MCP bridges an external IDE, and AI Assistant Hub is a chat panel. They are genuinely good if you are happy wiring things up and maintaining them yourself.",
    strengths: [
      "The full terminal of each agent, not a chat panel or an external client window.",
      "Several agents running at once, arranged in split-view layouts, with layout and session restore.",
      "A built-in Godot prompt library and a guided first-run setup.",
      "Native Rust performance, signed builds, and email support.",
      "One tested, maintained package instead of a set of plugins you assemble yourself.",
    ],
    theyLead: [
      "They are free and open-source.",
      "Godot AI supports more agent clients and runs on macOS.",
      "If you are comfortable setting up and maintaining the integration yourself, they cover the basics well.",
    ],
    verdict:
      "If you will happily assemble and maintain the setup yourself, the free tools are a legitimate choice. GDAgent is the paid, polished and supported version for people who would rather it just work.",
    reviewed: "June 2026",
  },
];

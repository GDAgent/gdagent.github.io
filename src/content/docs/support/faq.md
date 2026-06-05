---
title: "FAQ"
description: "Frequently asked questions about GDAgent"
---

## What is GDAgent?

GDAgent is a Godot editor plugin that brings AI coding assistants directly into your development workflow. It provides a terminal emulator inside Godot where you can run CLI-based AI tools with full access to your project.

## Which AI tools are supported?

GDAgent supports these terminal-based AI coding assistants:

- Claude Code
- Google Antigravity CLI
- Aider
- GitHub Copilot CLI
- Mistral Vibe
- OpenAI Codex CLI
- OpenCode

GDAgent automatically detects which of these tools you have installed.

Bundled Godot MCP integration is a narrower feature than terminal-agent support. Some agents are supported as normal terminal tools without also getting bundled MCP auto-configuration. See the [Support Matrix](/docs/reference/support-matrix) for the current breakdown.

## Do I need my own API keys?

Yes. GDAgent provides the terminal integration — you bring your own API keys or subscriptions. Each AI tool has its own pricing.

## Is my code sent to your servers?

No. GDAgent runs entirely on your machine. Your code never leaves your computer — we don't have servers that process your code. The AI tools you use (Claude Code, Google Antigravity CLI, OpenCode, etc.) have their own privacy policies.

## Licensing

### How many machines can I use?

Each license allows **2 simultaneous activations**. Perfect for a desktop + laptop setup.

### How do I move my license?

1. On the old machine: Launch `gdagent`, click **Deactivate**
2. On the new machine: Launch `gdagent`, enter your key and click **Activate**

### Does it work offline?

Yes. After activation, GDAgent works offline for up to 7 days. It revalidates automatically when you’re back online.

### Do I need an internet connection?

Internet is required for initial activation and periodic revalidation. After that, GDAgent can run offline for up to 7 days. The AI tools you use typically require internet to communicate with their APIs.

### What's the refund policy?

We offer a 30-day money-back guarantee. See our [Refund Policy](/refund) for details.

## Security & Native Binaries

### What precompiled binaries are included in GDAgent?

GDAgent packages three native components:
1. A PTY terminal emulator GDExtension library (`libgdagent.so` / `gdagent.dll`) that powers the native terminals inside Godot.
2. A Godot MCP GDExtension server (`libgodot_mcp.so` / `godot_mcp.dll`) that runs inside the editor process and implements the Model Context Protocol.
3. An MCP stdio-to-TCP bridge helper (`gdagent-mcp`) that acts as a secure local bridge between your CLI agent's stdio stream and Godot's internal TCP listener.

For details, see the [Packaged Binaries & Security](/docs/reference/packaged-binaries) page.

### How do these binaries secure my project?

All communications happen strictly over the local loopback interface (`127.0.0.1`), meaning no ports are exposed to the external network. No project code, scripts, or assets are sent to GDAgent servers. Furthermore, when you export your game, GDAgent's build integrations automatically filter out these binaries and related configuration files, ensuring they never ship in your final game.

## Installation

### Can I use it in multiple Godot projects?

Yes. Press **Install** for each project in `gdagent`. There's no limit on the number of projects.

### How do I update?

1. Download the latest version from your purchase email
2. Launch `gdagent`
3. Select your project and click **Install**

### What Godot versions are supported?

Godot 4.6 and later.

## Troubleshooting

### The plugin doesn't appear in Godot

Launch `gdagent`, select your project, and click **Repair**.

### Does workspace restore resume my terminal conversation?

No. Workspace restore brings back your session organization: tabs, layout, split groups, names, and icons. It does not resume live terminal processes or agent conversation state. See [Workspace Restore](/docs/features/workspace-restore) for details.

### I hit the activation limit

Deactivate from an old machine first, or [contact support](/docs/support/contact) for help.

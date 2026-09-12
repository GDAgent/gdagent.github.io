---
title: "Support Matrix"
description: "Current agent support, session resume, bundled Godot MCP coverage, auto-install behavior, and platform availability"
---

## Current Agent Matrix

| Agent | Terminal Agent | Session Resume | Bundled Godot MCP | Auto-install | Linux | Windows | macOS |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Claude Code | Yes | Yes | Yes | Yes | Yes | Yes | No |
| Google Antigravity CLI | Yes | Yes | Yes | Yes | Yes | Yes | No |
| Aider | Yes | Auto-detected | No | Yes | Yes | Yes | No |
| GitHub Copilot CLI | Yes | Auto-detected | Yes | Yes | Yes | Yes | No |
| Mistral Vibe | Yes | Auto-detected | Yes | Yes | Yes | Yes | No |
| OpenAI Codex CLI | Yes | Yes | Yes | Yes | Yes | Yes | No |
| OpenCode | Yes | Yes | Yes | Yes | Yes | Yes | No |
| Grok Build | Yes | Yes | Yes | Yes | Yes | Yes | No |
| Command Code | Yes | Auto-detected | Yes | Yes | Yes | Yes | No |
| Custom agent (yours) | Yes | No | No | No | Yes | Yes | Yes |

## How To Read This

- **Terminal Agent**: the tool can be launched and used in GDAgent as a normal terminal-based workflow
- **Session Resume**: reopening the editor (or restarting an agent) continues the same AI conversation in each tab — see [Workspace & Session Restore](/docs/features/workspace-restore). "Auto-detected" means GDAgent probes the installed version and enables resume when the tool supports the required flags.
- **Bundled Godot MCP**: GDAgent can auto-configure bundled MCP integration for that tool
- **Auto-install**: GDAgent can run the install command for that tool from the UI

## Notes

- Aider is a supported GDAgent terminal agent, but GDAgent does not auto-configure bundled Godot MCP integration for it.
- Custom agents are the ones you register yourself under Settings -> Agents. GDAgent launches the command you give it and nothing more, so they get no install flow, no bundled MCP config, and no session resume — and no platform restrictions either.
- Terminal scrollback restore works for every agent regardless of the Session Resume column — it replays the previous output above a divider when a tab is restored.
- macOS remains future work in the current product matrix.

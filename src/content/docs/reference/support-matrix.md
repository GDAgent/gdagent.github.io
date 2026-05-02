---
title: "Support Matrix"
description: "Current agent support, bundled Godot MCP coverage, auto-install behavior, and platform availability"
---

## Current Agent Matrix

| Agent | Terminal Agent | Bundled Godot MCP | Auto-install | Auth Step | Linux | Windows | macOS |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Claude Code | Yes | Yes | Yes | Yes | Yes | Yes | No |
| Google Gemini CLI | Yes | Yes | Yes | Yes | Yes | Yes | No |
| Aider | Yes | No | Yes | No | Yes | Yes | No |
| GitHub Copilot CLI | Yes | Yes | Yes | Yes | Yes | Yes | No |
| Mistral Vibe | Yes | Yes | Yes | No | Yes | Yes | No |
| OpenAI Codex CLI | Yes | Yes | Yes | Yes | Yes | Yes | No |
| OpenCode | Yes | Yes | Yes | Yes | Yes | Yes | No |

## How To Read This

- **Terminal Agent**: the tool can be launched and used in GDAgent as a normal terminal-based workflow
- **Bundled Godot MCP**: GDAgent can auto-configure bundled MCP integration for that tool
- **Auto-install**: GDAgent can run the install command for that tool from the UI
- **Auth Step**: the tool commonly needs a follow-up sign-in or setup step after installation

## Notes

- Aider is a supported GDAgent terminal agent, but GDAgent does not auto-configure bundled Godot MCP integration for it.
- macOS remains future work in the current product matrix.
- Installed and ready are different states: a tool can be present on PATH but still need sign-in or first-run setup.

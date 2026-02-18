---
title: "Introducing GDAgent: Bringing AI to the Godot Editor"
description: "Launch day is here. GDAgent puts native AI terminal workflows directly inside Godot so you can ship faster."
date: 2026-02-17
author: "GDAgent Team"
draft: false
---

Every Godot developer who does AI-assisted game development knows this loop:

1. Hit a problem in-editor.
2. Switch to a browser tab.
3. Paste code into a chat.
4. Copy the response back into Godot.
5. Repeat.

This is not very efficient. A better loop would be this:

1. Open a terminal.
2. Paste code into an AI assistant.
3. Wait for the generation to complete.
4. Maybe open another terminal in the meantime.
5. Track all AI agent sessions manually and move the windows around.
6. Reopen the terminals the next time you work on the project again.
7. Repeat.

However, this is still extremely cumbersome and breaks your flow each session. GDAgent exists to remove this friction.

## Why we built GDAgent

GDAgent started as an internal tool to keep AI help where development actually happens: inside Godot.

Instead of embedding a web view, we built a native terminal experience so CLI-based AI tools can run directly in your project workflow.

## What is available today

- Native terminal in Godot (Rust + GDExtension backend)
- Persistent AI sessions across editor restarts
- Split layouts for multi-agent workflows
- First Run Wizard for quick setup
- Prompt templates for common Godot tasks
- One-click install through GDAgent Manager

Supported tools include Claude Code, Google Gemini CLI, Aider, GitHub Copilot CLI, Mistral Vibe, OpenAI Codex CLI, and OpenCode.

## Pricing at launch

- Individual license: $8.99 one-time with discount code `LAUNCH10` (limited time only, normally $9.99)
- 3-day free trial with full access
- 2 machine activations per license
- 30-day money-back guarantee

## What comes next

Current roadmap priorities include:

- macOS support
- Godot MCP server for deeper project interaction
- Auto-snapshots before AI edits
- [...and more](/#roadmap)

## Try it and tell us what to build

If you are building with Godot, try GDAgent and tell us where it helps most and where it still gets in the way.

- Website: <https://gdagent.github.io>
- Issues and feedback: <https://github.com/gdagent/gdagent/issues>

Thanks for being here on launch day.

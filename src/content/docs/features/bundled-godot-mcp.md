---
title: "Bundled Godot MCP"
description: "How bundled Godot MCP integration works in GDAgent and what to expect from supported agents"
---

## What Ships With GDAgent

GDAgent ships with bundled Godot MCP integration. This is a built-in integration for supported agents, not a general custom-tool platform.

## Important Distinction

There are two separate questions:

1. Is the AI tool supported as a terminal agent in GDAgent?
2. Does that tool also get bundled Godot MCP auto-configuration?

Some tools are supported as normal terminal agents without also getting bundled MCP auto-configuration.

Custom agents you register yourself under **Settings > Agents** are always in that second group: GDAgent only knows the command you entered, so it never writes MCP config on their behalf.

## What Auto-Configuration Means

When bundled MCP auto-generation is enabled, GDAgent writes or refreshes its own MCP config entries for the current supported agent. Where the target format allows it, unrelated user-owned config is preserved.

## What You Can Check In The UI

GDAgent's **Settings > About** panel shows bundled MCP status details for the current project, including:

- whether the helper exists
- whether the local bridge or server is reachable
- which agent config target is in use
- the last MCP-related error

That same area also exposes **Regenerate MCP Config** for the current active supported agent.

## If MCP Is Not Available

If your current tool or config does not expose bundled Godot MCP, you can still use GDAgent normally as a terminal-based agent workflow. In that case, rely on the project files directly instead of MCP-backed tool calls.

## Current Scope

Bundled MCP is meant to deepen Godot-specific workflows like scene inspection, project settings checks, and runtime-oriented tasks when the active agent supports it. It is not presented as a broad plugin marketplace or arbitrary custom-tool ecosystem.

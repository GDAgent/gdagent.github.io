---
title: "Troubleshooting"
description: "Common issues and solutions"
---

## Installation Issues

### "GDAgent is not a valid Godot plugin"

The addon wasn't fully installed. Launch `gdagent`, select your project, and click **Repair**.

### The plugin is installed but does not appear in Godot

1. Open **Project > Project Settings > Plugins** and check whether `GDAgent` is listed but disabled.
2. If it is missing entirely, run **Install** or **Repair** again from `gdagent`.
3. Reopen the project after reinstalling if Godot had the project open during the repair.

### "Integrity verification failed"

The signature file is missing or mismatched.

1. Make sure `gdagent.sig` is in the same folder as `gdagent`
2. Re-download if needed — don't mix files from different versions

## License Issues

### "Connection error" during activation

1. Check your internet connection
2. Try again in a few minutes
3. If it persists, run `gdagent doctor` and [contact support](/docs/support/contact)

### "Activation limit reached"

You've used both activations. Either:
- Deactivate from another machine: Press **Deactivate** in `gdagent`
- [Contact support](/docs/support/contact) to reset activations

## Editor Issues

### Terminal not responding

Press `Ctrl+C` to interrupt any stuck process, or close and reopen the tab.

### AI tool not detected

1. Make sure the AI tool is installed and available in your system PATH.
2. If you just installed it, fully close and reopen `gdagent` and Godot so GUI processes pick up the new PATH.
3. If the command works in your shell but not in GDAgent, run `gdagent doctor` and confirm the same executable is visible there.

### The tool is detected but marked as setup or sign-in required

GDAgent distinguishes between a tool being present and a tool being ready.

1. Open the install surface for that tool.
2. Follow the listed sign-in or first-run steps in your normal terminal.
3. Reopen or re-probe after completing auth so GDAgent can refresh its readiness state.

### Bundled Godot MCP is not available in my tab

1. Confirm the active AI tool supports bundled Godot MCP auto-configuration in the [Support Matrix](/docs/reference/support-matrix).
2. Open **Settings > About** in GDAgent and review the bundled MCP status for the current project.
3. If needed, use **Regenerate MCP Config** for the current active supported agent.
4. If the current tool does not support bundled MCP, continue with normal file-based workflows; terminal-agent support still works.

### Restored tabs do not resume the previous terminal process

This is expected. GDAgent restores workspace organization, not live PTY processes or prior AI conversation state. See [Workspace Restore](/docs/features/workspace-restore) for the exact scope.

## Still Stuck?

[Contact support](/docs/support/contact).

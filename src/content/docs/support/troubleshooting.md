---
title: "Troubleshooting"
description: "Fix common GDAgent issues — installation, license activation, AI CLI detection, terminals, and the bundled Godot MCP — with step-by-step solutions."
---

## Installation Issues

### "GDAgent is not a valid Godot plugin"

The addon install is usually partial or interrupted.

1. Run `gdagent status --project /path/to/project`.
2. If the status reports a partial install or missing components, run `gdagent repair --project /path/to/project`.
3. Repair reinstalls the addon payload, bundled MCP files, and the expected `project.godot` integration entries.

### The plugin is installed but does not appear in Godot

1. Open **Project > Project Settings > Plugins** and check whether `GDAgent` is listed but disabled.
2. If it is missing entirely, run **Install** or **Repair** again from `gdagent`.
3. Reopen the project after reinstalling if Godot had the project open during the repair.

### `gdagent status` says partial install or missing components

This means GDAgent found some addon files, but not a complete healthy install.

1. Run `gdagent repair --project /path/to/project`.
2. Let repair finish fully before reopening Godot.
3. If repair fails, read the missing file or permission error in the output, fix that issue, and rerun repair.

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

### Bundled Godot MCP is not available in my tab

1. Confirm the active AI tool supports bundled Godot MCP auto-configuration in the [Support Matrix](/docs/reference/support-matrix).
2. Open **Settings > About** in GDAgent and review the bundled MCP status for the current project.
3. If needed, use **Regenerate MCP Config** for the current active supported agent.
4. If the current tool does not support bundled MCP, continue with normal file-based workflows; terminal-agent support still works.

### Restored tabs do not resume the previous terminal process

This is expected. GDAgent restores workspace organization, not live PTY processes or prior AI conversation state. See [Workspace Restore](/docs/features/workspace-restore) for the exact scope.

## Still Stuck?

[Contact support](/docs/support/contact).

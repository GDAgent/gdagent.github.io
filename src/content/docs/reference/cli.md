---
title: "CLI Reference"
description: "GDAgent command-line interface for automation and scripting"
---

## Synopsis

```bash
gdagent [--json] [--help] [--version] [subcommand]
```

Without a subcommand, `gdagent` launches the GUI manager.

## Commands

- `install` - Install GDAgent addon to a Godot project
- `uninstall` - Uninstall GDAgent addon from a Godot project
- `list-projects` - List detected Godot projects
- `status` - Show GDAgent installation status for a project
- `activate` - Activate a license key
- `deactivate` - Deactivate the current license from this machine
- `doctor` - Run diagnostic checks and generate support report
- `manpage` - Generate a man page for `gdagent`
- `repair` - Repair an existing GDAgent installation
- `new` - Create a new Godot project with GDAgent pre-installed
- `update` - Update the GDAgent addon in one or more Godot projects
- `self-update` - Update the manager executable, optionally updating a project afterward
- `auto-update` - Auto-update the manager and a project's addon with progress in the GUI

For command-specific flags and arguments:

```bash
gdagent <command> --help
```

## Global Options

- `--json` - Output results as JSON for automation
- `--accept-eula` - Explicitly accept the End-User License Agreement (EULA) for CLI commands

## Automation Example

```yaml
- name: Activate and install GDAgent
  env:
    GDAGENT_LICENSE_KEY: ${{ secrets.GDAGENT_LICENSE_KEY }}
  run: |
    printf '%s' "$GDAGENT_LICENSE_KEY" | gdagent activate --accept-eula
    gdagent install -p ${{ github.workspace }} --accept-eula
```

---
title: "CLI Reference"
description: "GDAgent command-line interface for automation and scripting"
---

The `gdagent` CLI lets you install and manage GDAgent from the command line.

## Global Options

| Option | Description |
| --- | --- |
| `--json` | Output in JSON format |
| `--help` | Show help |
| `--version` | Show version |

## Commands

### `gdagent`

Opens the GUI installer.

### `gdagent install`

Install GDAgent to a Godot project.

```bash
gdagent install --project /path/to/project
```

| Option | Description |
| --- | --- |
| `-p, --project <PATH>` | Path to Godot project (required) |
| `--dry-run` | Preview changes without installing |

### `gdagent uninstall`

Remove GDAgent from a project.

```bash
gdagent uninstall --project /path/to/project
```

### `gdagent repair`

Reinstall GDAgent to fix a broken installation.

```bash
gdagent repair --project /path/to/project
```

### `gdagent status`

Check if GDAgent is installed in a project.

```bash
gdagent status --project /path/to/project
```

### `gdagent activate`

Activate your license.

```bash
gdagent activate
```

### `gdagent deactivate`

Deactivate your license from this machine.

```bash
gdagent deactivate
```

### `gdagent doctor`

Run diagnostics and generate a support report.

```bash
gdagent doctor
```

## CI/CD Example

```yaml
- name: Install GDAgent
  env:
    GDAGENT_LICENSE_KEY: ${{ secrets.GDAGENT_LICENSE_KEY }}
  run: |
    printf '%s' "$GDAGENT_LICENSE_KEY" | gdagent activate
    gdagent install --project ${{ github.workspace }}
```

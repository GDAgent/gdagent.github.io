---
title: "CLI Reference"
description: "GDAgent command-line interface for automation and scripting"
---

`gdagent` is a single binary with both GUI and CLI modes:

- `gdagent` opens the GUI manager
- `gdagent <command>` runs in CLI mode

## Global Options

| Option      | Description                                         |
| ----------- | --------------------------------------------------- |
| `--json`    | Output machine-readable JSON for supported commands |
| `--help`    | Show help                                           |
| `--version` | Show version                                        |

## JSON Output Format

When `--json` is enabled, command output is wrapped like this:

```json
{
  "success": true,
  "data": { "...": "..." }
}
```

On failure:

```json
{
  "success": false,
  "error": "human-readable error message"
}
```

## Commands

### `gdagent install`

Install GDAgent into a Godot project.

```bash
gdagent install -p /path/to/project
```

| Option                 | Description                                            |
| ---------------------- | ------------------------------------------------------ |
| `-p, --project <PATH>` | Godot project directory (must contain `project.godot`) |
| `--dry-run`            | Print what would happen without installing             |

Notes:
- A valid license or active trial is required for actual installation.
- On install, existing `addons/gdagent` is replaced before reinstalling.

### `gdagent uninstall`

Remove GDAgent from a project.

```bash
gdagent uninstall -p /path/to/project
```

| Option                 | Description             |
| ---------------------- | ----------------------- |
| `-p, --project <PATH>` | Godot project directory |

### `gdagent repair`

Repair an existing installation (reinstalls the addon).

```bash
gdagent repair -p /path/to/project
```

| Option                 | Description             |
| ---------------------- | ----------------------- |
| `-p, --project <PATH>` | Godot project directory |

### `gdagent status`

Show install state for a project.

```bash
gdagent status -p /path/to/project
```

| Option                 | Description             |
| ---------------------- | ----------------------- |
| `-p, --project <PATH>` | Godot project directory |

Possible status values include:
- `Not installed`
- `Installed`
- `Installed (vX.Y.Z)`
- `Incomplete installation (missing components)`
- `Corrupted installation`

### `gdagent list-projects`

Scan and list detected Godot projects.

```bash
gdagent list-projects
```

Sources include Godot project lists, recent directories, configured search paths, and current directory scanning.

### `gdagent activate`

Activate a license key.

```bash
gdagent activate
```

Behavior:
- In interactive terminals, `gdagent` prompts for the key.
- In non-interactive mode, the key is read from `stdin`.

Example:

```bash
printf '%s' "$GDAGENT_LICENSE_KEY" | gdagent activate
```

### `gdagent deactivate`

Deactivate the current machine.

```bash
gdagent deactivate
```

### `gdagent doctor`

Run diagnostics and print a support report.

```bash
gdagent doctor
```

The report includes:
- version/build info
- system info
- license status
- Godot detection
- AI tool detection
- config snapshot
- detected projects

### `gdagent`

With no subcommand, launches the GUI manager.

## CI/CD Example

```yaml
- name: Activate and install GDAgent
  env:
    GDAGENT_LICENSE_KEY: ${{ secrets.GDAGENT_LICENSE_KEY }}
  run: |
    printf '%s' "$GDAGENT_LICENSE_KEY" | gdagent activate
    gdagent install -p ${{ github.workspace }}
```

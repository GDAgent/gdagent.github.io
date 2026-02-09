---
title: "Troubleshooting"
description: "Common issues and solutions"
---

## Installation Issues

### "GDAgent is not a valid Godot plugin"

The addon wasn't fully installed. Launch `gdagent`, select your project, and click **Repair**.

### "Integrity verification failed"

The signature file is missing or mismatched.

1. Make sure `gdagent.sig` is in the same folder as `gdagent`
2. Re-download if needed — don't mix files from different versions

## License Issues

### "Connection error" during activation

1. Check your internet connection
2. Try again in a few minutes
3. If it persists, run `gdagent doctor` and contact support

### "Activation limit reached"

You've used both activations. Either:
- Deactivate from another machine: `gdagent deactivate`
- Contact support to reset activations

## Editor Issues

### The GDAgent panel is blank

Try closing and reopening Godot. If it persists, run repair.

### Terminal not responding

Press `Ctrl+C` to interrupt any stuck process, or close and reopen the tab.

### AI tool not detected

Make sure the AI tool is installed and in your system PATH. Run `gdagent doctor` to see which tools are detected.

## Still Stuck?

Run diagnostics and contact support:

```bash
gdagent doctor
```

Email the output to [gdagent@protonmail.com](mailto:gdagent@protonmail.com).

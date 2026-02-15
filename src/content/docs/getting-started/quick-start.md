---
title: "Quick Start & Activation"
description: "Activate your license and get GDAgent running in your Godot project in minutes"
---

## 1. Launch GDAgent

Double-click `gdagent` (or `gdagent.exe` on Windows) to open the installer.

## 2. Activate Your License

1. Enter your license key (from your purchase email)
2. Click **Activate**

## 3. Install to Your Project

1. Select your project from the list
2. Click **Install**

## 4. Open Godot

Open your project in Godot. You'll see the GDAgent panel in the bottom dock.

## 5. Start Coding with AI

1. Click the **+** button to open a new AI agent tab
2. Select your preferred AI tool
3. Start chatting with your AI assistant

The AI has full context of your Godot project and can help you write GDScript, create scenes, debug issues, and more.

## License Management

### Deactivate

Moving to a new machine? Free up the seat first:

1. Launch `gdagent`
2. Click **Deactivate**

Then activate on your new machine.

### Offline Use

After activation, GDAgent works offline for up to 7 days. It revalidates automatically when you’re back online.

### Activation Limits

Each license allows **2 simultaneous activations**.

If you hit the limit, deactivate an old machine or [contact support](/docs/support/contact).

### CLI Alternative

For automation or CI/CD, you can activate via command line:

```bash
gdagent activate
```

Or pipe the key via stdin:

```bash
printf '%s' "$GDAGENT_LICENSE_KEY" | gdagent activate
```

## What's Next?

- [Editor Overview](/docs/using-gdagent/editor) - Learn the GDAgent interface
- [Sessions & Tabs](/docs/using-gdagent/sessions) - Organize multiple conversations
- [Keyboard Shortcuts](/docs/using-gdagent/shortcuts) - Speed up your workflow

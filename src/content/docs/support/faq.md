---
title: "FAQ"
description: "Frequently asked questions about GDAgent"
---

## What is GDAgent?

GDAgent is a Godot editor plugin that brings AI coding assistants directly into your development workflow. It provides a terminal emulator inside Godot where you can run Claude Code, Gemini CLI, Aider, and other AI tools with full access to your project.

## Which AI tools are supported?

GDAgent supports these terminal-based AI coding assistants:

- Claude Code
- Google Gemini CLI
- Aider
- GitHub Copilot CLI
- Mistral Vibe
- OpenAI Codex CLI
- OpenCode

GDAgent automatically detects which of these tools you have installed.

## Do I need my own API keys?

Yes. GDAgent provides the terminal integration — you bring your own AI tool and API keys. Each AI tool has its own pricing and setup.

## Is my code sent to your servers?

No. GDAgent runs entirely on your machine. Your code never leaves your computer — we don't have servers that process your code. The AI tools you use (Claude, Gemini, etc.) have their own privacy policies.

## Licensing

### How many machines can I use?

Each license allows **2 simultaneous activations**. Perfect for a desktop + laptop setup.

### How do I move my license?

1. On the old machine: Launch `gdagent`, go to **License** tab, click **Deactivate**
2. On the new machine: Launch `gdagent`, go to **License** tab, enter your key and click **Activate**

### Does it work offline?

Yes. After activation, GDAgent works offline for up to 3 days. It revalidates automatically when you're back online.

### Do I need an internet connection?

Internet is required for initial activation and periodic revalidation. After that, GDAgent can run offline for a limited period. The AI tools you use typically require internet to communicate with their APIs.

### What's the refund policy?

We offer a 30-day money-back guarantee. See our [Refund Policy](/refund) for details.

## Installation

### Can I use it in multiple Godot projects?

Yes. Run `gdagent install` for each project. There's no limit on the number of projects.

### How do I update?

1. Download the latest version from your purchase email
2. Launch `gdagent`, go to **Projects** tab
3. Select your project and click **Repair**

### What Godot versions are supported?

Godot 4.2 and later.

## Troubleshooting

### The plugin doesn't appear in Godot

Launch `gdagent`, select your project, and click **Repair**.

### I hit the activation limit

Deactivate from an old machine first, or [contact support](/docs/support/contact) for help.

---
title: "Prompt Library"
description: "How GDAgent's prompt library works, what is built in, and how user templates fit in"
---

## What It Is

GDAgent includes a built-in prompt library for common Godot workflows. It is designed to be fast to reach for inside the editor, not a prompt-builder or a separate compose window.

## What You Can Do

- Click a card to insert the template into the current terminal input
- Right-click a card to copy it instead of inserting it
- Create, edit, and delete your own templates
- Keep built-in templates read-only so the default library stays consistent

## Built-In Coverage

The bundled library focuses on short, practical Godot workflows such as:

- GDScript bug triage
- Scene and script review
- Refactor requests
- Performance investigation
- Input and action setup
- Signal wiring
- Export and build issue investigation
- Project settings and autoload changes

## User Templates

User templates are stored separately from the built-in library and can be changed at any time. This makes it easy to keep a personal set of team prompts, debugging checklists, or reusable review requests without modifying the shipped defaults.

## Extra Context After Insertion

Some templates intentionally leave room for you to keep typing immediately after insertion. This is useful when the template needs a short description of the specific bug, scene, or system you want the agent to inspect.

## What It Is Not

The prompt library does not try to guess missing details, fill placeholder forms, or replace your tool workflow. It is a fast starting point for common Godot tasks.

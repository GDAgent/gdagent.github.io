---
title: "Workspace Restore"
description: "How GDAgent workspace restore brings back your tabs, layout, split groups, names and icons between launches — and what it does not resume."
---

## What GDAgent Restores

When you reopen a project, GDAgent restores workspace organization such as:

- sessions
- tabs
- tab names and icons
- active layout
- grouped tabs and split layout state

This is why you can reopen the editor and get your previous working structure back quickly.

## What GDAgent Does Not Restore

Workspace restore does **not** currently resume:

- live terminal processes
- prior terminal scrollback as a full resumed session
- AI conversation state inside the external tool itself

That means restored tabs come back as part of the same workspace organization, but not as a resumed PTY process or resumed agent chat.

## Why This Is Still Useful

For many workflows, the valuable part is getting your layout and task organization back: which agents you had open, which tabs belonged together, and how the workspace was arranged.

## Good Mental Model

Think of the current feature as **workspace restore**, not full terminal-session restoration.

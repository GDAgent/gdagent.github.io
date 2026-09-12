---
title: "Workspace & Session Restore"
description: "GDAgent restores your tabs, layout, terminal scrollback, and — for supported agents — the actual AI conversation between editor launches."
---

## What GDAgent Restores

When you reopen a project, GDAgent brings back:

- sessions
- tabs, tab names and icons
- active layout, grouped tabs and split layout state
- **terminal scrollback** — each tab's previous output replays above a
  "restored from previous session" divider
- **the AI conversation itself** — supported agents relaunch with their
  native resume flags and continue the same conversation where it left off

Restored tabs show a **Resumed** badge; hover it to see details. If a
conversation could not be resumed (for example, it expired or its transcript
was deleted), the tab starts a **Fresh** conversation and the badge's tooltip
explains why. Every launch ends in a working terminal either way.

## How Conversation Resume Works

GDAgent tracks a per-tab conversation handle and relaunches each agent
through its own native session mechanism — assigned session ids, session
stores, or history files, depending on the tool. Agents that print or record
their session ids are picked up automatically, so resume also works for
sessions GDAgent did not name itself.

For agents whose resume support varies by version (GitHub Copilot CLI,
Aider, Mistral Vibe, Command Code), GDAgent probes the installed version
first and only injects resume flags the tool actually understands. Custom
agents you register yourself never resume: GDAgent only knows the command
you entered, so it has no session mechanism to reattach to. See the
[Support Matrix](/docs/reference/support-matrix) for the current per-agent
status.

## Choosing the Behavior

In **Settings → General**:

- **Resume Conversations** — `Always` (default) resumes silently, `Ask`
  shows a per-tab "Resume Conversation / Start Fresh" choice before
  launching, and `Never` starts every launch as a fresh conversation.
- **Persist Terminal Scrollback** — toggles saving terminal output between
  editor sessions, with a configurable per-tab size limit.

## Where the Data Lives

Persisted scrollback is stored encrypted in the project's editor data
folder and is removed when you close the tab or delete the session. The
conversation content itself stays where the agent already keeps it — in
that tool's own local session storage.

---
title: "Godot MCP Tools Reference"
description: "A comprehensive reference of the Model Context Protocol (MCP) tools provided by the bundled Godot MCP integration"
---

When you run an AI assistant (like Claude Code) inside GDAgent with the bundled Godot MCP integration enabled, the assistant is granted secure, semantic access to your Godot editor. 

This page catalogs every tool provided to the assistant, explaining what capabilities it unlocks.

---

## Core Tool Directory

The Godot MCP server exposes a rich suite of tools designed to let your AI assistant interact with scenes, scripts, project settings, and game runtime.

### 🔍 Metadata & Info Tools

*   **`help`**
    *   **Description:** Lists all available tools, actions, parameters, and descriptions. Used by the agent to discover capabilities.
*   **`echo`**
    *   **Description:** Echoes back a provided message. Used for connection pinging and diagnostic health checks.
*   **`docs`**
    *   **Description:** Directly queries Godot's built-in `ClassDB` documentation database.
    *   **Capability:** Allows the agent to query details on any Godot class, method signatures, properties, signals, or constants. The agent does not have to guess method names; it can look them up live.

---

### 📂 File & Editor Management Tools

*   **`editor`**
    *   **Description:** Queries the current editor state.
    *   **Capability:** Returns the path of the active scene being edited, current node selections, and editor window layout.
*   **`project`**
    *   **Description:** Inspects and updates project-wide settings and configuration files.
    *   **Capability:** Manages input map settings (adding/modifying keys/buttons), project settings, and autoload singletons.
*   **`resource`**
    *   **Description:** Manages external engine resources (`.tres`, `.res`).
    *   **Capability:** Inspects, lists, creates, or updates parameters in material, collision shape, theme, or texture resources.

---

### 🎬 Scene & Node Manipulation Tools

*   **`scene`**
    *   **Description:** Opens, saves, closes, or instantiates scenes in the editor.
    *   **Capability:** Allows the agent to open a specific `.tscn` file, save active changes, or instantiate sub-scenes into the active scene.
*   **`node`**
    *   **Description:** The primary interface for inspecting and editing the active scene tree.
    *   **Capability:**
        *   `list`: Find and list nodes using patterns, types, or paths.
        *   `get`: Retrieve properties, anchors, positions, and parameters of any node.
        *   `create`: Add new nodes of any engine type or instance other scenes.
        *   `update`: Modify node properties (with automatic type conversion for Vectors, Colors, Rects, etc.).
        *   `delete`: Remove nodes from the scene tree.
        *   `reparent`: Move nodes under different parent hierarchies.
        *   `connect`/`disconnect`: Wire signals between nodes programmatically.
        *   `add_to_group`/`remove_from_group`/`list_groups`: Manage node grouping.
        *   `set_layout`: Apply UI Control node layouts (e.g., center, full rect, top wide).

---

### 💻 Code & Animation Tools

*   **`script`**
    *   **Description:** Dedicated reader and writer for script files (`.gd`, `.cs`).
    *   **Capability:** Exposes actions to read a script file, write new scripts, or apply edits safely with internal code validation.
*   **`animation`**
    *   **Description:** Controls and edits `AnimationPlayer` assets.
    *   **Capability:** Reads, creates, or updates tracks, keyframes, time values, loops, and playback parameters of animations.
*   **`map`**
    *   **Description:** Interface for structural layout grids.
    *   **Capability:** Reads and edits 2D `TileMapLayer` cells and 3D `GridMap` grid blocks, allowing agents to generate level designs.

---

### 🎮 Runtime & Simulation Control Tools

*   **`runtime`**
    *   **Description:** Interacts with the active play mode (running game).
    *   **Capability:**
        *   Starts or stops game execution.
        *   Synthesizes input events (keys, mouse clicks, axis changes) to simulate player behavior.
        *   Captures live viewport screenshots and sends them to the agent (enabling vision-based analysis).
        *   Inspects running tree hierarchies to locate dynamically spawned nodes.
        *   Runs deterministic, frame-timed probes on the engine's physics clock — either an ephemeral GDScript coroutine (`eval`) for conditional waits and derived metrics, or a batched timeline of actions (`batch`) — so input and state sampling land on the exact frame intended, free of round-trip races.

---

## Safety & Undo Integrations

All MCP tool operations operate under strict editor rules:
- **Undo/Redo integration:** Any modification made by the AI (e.g., node creation, signal connection, script updates) goes into Godot's UndoRedo history. You can press `Ctrl+Z` (or `Cmd+Z` on macOS) to instantly revert any action taken by the agent.
- **Strict Path Validation:** The MCP server rejects requests targeting paths outside the project root to prevent security bypasses.

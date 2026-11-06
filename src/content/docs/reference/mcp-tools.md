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
    *   **Description:** Queries the current editor state and runs editor-side automation.
    *   **Capability:** Returns the path of the active scene being edited, current node selections, and editor window layout. `eval` runs a short GDScript snippet inside the editor (for example to inspect loaded resources or call `EditorInterface`) and returns its values and `print()` output without creating a file; a runtime error in the snippet is reported right away with its line number. `run_script` runs an `EditorScript` file and also returns its output.
*   **`project`**
    *   **Description:** Inspects and updates project-wide settings and configuration files.
    *   **Capability:** Manages the project's input map (`input_map.*` actions add, remove, and verify keys, mouse buttons, and joypad buttons, and save `project.godot`), project settings, and autoload singletons. Moving or renaming a file or folder works like the editor's FileSystem dock: `.uid`/`.import` files move along, references in scenes, resources, scripts and project settings are updated, and the editor's open copies are refreshed so it can't save old paths back. Deleting removes those side files too and lists anything that still points at the deleted file.
*   **`resource`**
    *   **Description:** Manages external engine resources (`.tres`, `.res`).
    *   **Capability:** Inspects, lists, creates, or updates parameters in material, collision shape, theme, or texture resources. The agent can compare the editor's in-memory copy with the file on disk and reload a resource that was changed outside the editor, so the editor never saves a stale version over it.

---

### 🎬 Scene & Node Manipulation Tools

*   **`scene`**
    *   **Description:** Opens, saves, closes, or instantiates scenes in the editor.
    *   **Capability:** Allows the agent to open a specific `.tscn` file, save active changes, or instantiate sub-scenes into the active scene.
*   **`node`**
    *   **Description:** The primary interface for inspecting and editing the active scene tree. Every result names the scene it used, and `target_scene` makes an action work on a specific scene instead of the active one.
    *   **Capability:**
        *   `list`: Find and list nodes using patterns, types, or paths.
        *   `get`: Retrieve properties, anchors, positions, and parameters of any node.
        *   `create`: Add new nodes of any engine type or instance other scenes, optionally at a specific child position (`index`).
        *   `update`: Modify node properties (with automatic type conversion for Vectors, Colors, Rects, etc.).
        *   `delete`: Remove nodes from the scene tree.
        *   `reparent`: Move nodes under different parent hierarchies.
        *   `move`: Reorder a node among its siblings by `index`.
        *   `connect`/`disconnect`: Wire signals between nodes programmatically. Connections are saved into the scene.
        *   `add_to_group`/`remove_from_group`/`list_groups`: Manage node grouping.
        *   `set_layout`: Apply UI Control node layouts (e.g., center, full rect, top wide).

---

### 💻 Code & Animation Tools

*   **`script`**
    *   **Description:** Dedicated reader and writer for script files (`.gd`, `.cs`).
    *   **Capability:** Exposes actions to read a script file, write new scripts, or apply edits safely with internal code validation. Scripts are reloaded from disk before use, and `validate` reports the compiler's own messages and waits for a newly created `class_name` to register. `target_scene` picks the scene when attaching or detaching a script.
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
        *   Synthesizes input events (keys, mouse clicks, axis changes) to simulate player behavior. Mouse positions can be given in `window`, `viewport` or `world` coordinates (`space`), so clicks land correctly in stretched games.
        *   Captures live viewport screenshots and sends them to the agent (enabling vision-based analysis), or saves them at full resolution to a file for before/after comparisons. A screenshot can be cropped to a `region` or `around_node` and enlarged with `zoom`, which keeps pixel art crisp.
        *   Inspects running tree hierarchies to locate dynamically spawned nodes.
        *   Runs deterministic, frame-timed probes on the engine's physics clock — either an ephemeral GDScript coroutine (`eval`) for conditional waits and derived metrics, or a batched timeline of actions (`batch`) — so input and state sampling land on the exact frame intended, free of round-trip races.
        *   Measures performance (`perf`): frame-time statistics and spikes, CPU/GPU render time, draw calls, object counts and memory, so the agent can check that a change actually made the game faster.
        *   Handles the debugger: if the game stops on a runtime error or breakpoint, the agent gets the error message and stack right away instead of waiting for a timeout, and code it ran itself is resumed automatically so the game isn't left frozen.
        *   When several game instances are running (**Debug > Customize Run Instances**), each request goes to one session: pass `session_id` to pick it, or the lowest ready session is used.

---

## Safety & Undo Integrations

All MCP tool operations operate under strict editor rules:
- **Undo/Redo integration:** Any modification made by the AI (e.g., node creation, signal connection, script updates) goes into Godot's UndoRedo history. You can press `Ctrl+Z` (or `Cmd+Z` on macOS) to instantly revert any action taken by the agent.
- **Strict Path Validation:** The MCP server rejects requests targeting paths outside the project root to prevent security bypasses.

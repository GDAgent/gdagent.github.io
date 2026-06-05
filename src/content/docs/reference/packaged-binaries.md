---
title: "Packaged Binaries & Security"
description: "Transparency report on precompiled native binaries bundled with GDAgent, their purpose, and security model"
---

GDAgent values transparency, privacy, and security. Because GDAgent integrates deeply with your operating system's terminal capabilities and the Godot Editor's runtime, it includes a small number of precompiled native binaries. 

This page provides a detailed breakdown of what these binaries are, why they are included, and the security guarantees we enforce.

---

## Bundled Binaries Catalog

GDAgent packages three native components within its directories. None of these binaries are "arbitrary"; they are compiled directly from our secure, private Rust codebases.

| File Name / Path | Component Type | Purpose | Language / Tech |
| :--- | :--- | :--- | :--- |
| **GDAgent Native Library**<br/>`addons/gdagent/bin/libgdagent.so`<br/>`addons/gdagent/bin/gdagent.dll` | GDExtension Shared Library | Allocates and manages native pseudo-terminals (PTYs). This is what allows CLI-based agents (like Claude Code or Aider) to render and run natively inside Godot docks. | Rust (`gdext` + native PTY bindings) |
| **Godot MCP Server**<br/>`addons/godot_mcp/libs/<platform>/libgodot_mcp.so`<br/>`addons/godot_mcp/libs/<platform>/godot_mcp.dll` | GDExtension Shared Library | Implements the Model Context Protocol (MCP) server directly inside the Godot Editor. It processes requests to inspect scenes, modify scripts, query ClassDB docs, and control play mode. | Rust (`gdext` + `rmcp`) |
| **MCP Stdio-to-TCP Bridge**<br/>`addons/godot_mcp/bin/gdagent-mcp`<br/>`addons/godot_mcp/bin/gdagent-mcp.exe` | Standalone Executable | A lightweight utility. Because standard AI agents connect to MCP servers over standard input/output (stdio), this binary acts as a secure redirection bridge between the agent's stdio stream and Godot's internal TCP port. | Rust (`tokio` standard streams) |

---

## Security & Privacy Guarantees

### 1. Local-Only Communication
The MCP server inside Godot listens strictly on the local loopback interface (`127.0.0.1:8790` by default). The stdio helper (`gdagent-mcp`) also connects strictly to `127.0.0.1`. **No ports are exposed to your local network or the public internet.** 

### 2. No Code Exfiltration
Your code and assets never leave your machine via GDAgent. GDAgent has no remote processing servers. 
- All AI reasoning and text-generation is performed by your chosen AI tool (e.g., Claude Code, Antigravity CLI, or Aider).
- These CLI tools communicate directly with their official provider APIs (e.g., Anthropic, Google, OpenAI) using the API keys you provide locally.

### 3. Cryptographic Integrity Signatures
To guarantee that the binaries you run have not been modified or tampered with, GDAgent includes cryptographic signature files (`.sig`) next to the native GDExtension libraries. On startup, the plugin validates these signatures using an embedded public key (via Ed25519). If a binary is altered, replaced, or tampered with, GDAgent will safely disable execution of the plugin to protect your workspace.

### 4. Sandboxed Game Exports
When you export your Godot game, GDAgent's export plugin automatically filters out the entire `gdagent` and `godot_mcp` addon directories, including all native helper binaries, configuration files, and keys. **No developer tooling or precompiled helpers will ever be packaged into your production game build.**

---

## Questions & Support

If you have security questions or need to audit the behavior of GDAgent in a high-security environment, please contact us at **security@gdagent.dev**.

---
title: "Installation"
description: "Download and install GDAgent on Windows or Linux"
---

## Requirements

- **Godot Engine**: 4.6 or later
- **Operating Systems**: Windows 11 or Linux, x86_64

macOS and Android support are planned.

## Download

After purchasing GDAgent, you'll receive an email with download links for your platform:

- `gdagent-vX.Y.Z-windows.zip`
- `gdagent-vX.Y.Z-linux.tar.gz`
Keep `gdagent` and `gdagent.sig` together in the same folder.

## Install

### Windows

1. Extract the zip file
2. Double-click `gdagent.exe` to launch

### Linux

1. Extract the archive
2. Double-click `gdagent` to launch (or run from terminal)

## Security & Native Binaries

GDAgent packages several native binaries (GDExtensions and a local stdio redirector bridge) to interface directly with your operating system's pseudo-terminals and Godot's internal runtime. 

To learn more about what these binaries are, how they work, and our security and privacy model, please read the [Packaged Binaries & Security](/docs/reference/packaged-binaries) guide.

### Release Verification (Linux)

We sign all our Linux releases with a GPG key. If you want to manually verify the integrity of the downloaded archive before installing:

1. Import our official GPG public key from the Ubuntu keyserver:
   ```bash
   gpg --keyserver keyserver.ubuntu.com --recv-keys <INSERT_YOUR_KEY_ID_HERE>
   ```
2. Download the release archive and the `.asc` signature file directly from your Lemon Squeezy receipt into the same folder.
3. Verify the signature:
   ```bash
   gpg --verify gdagent-v1.0.0-linux.tar.gz.asc gdagent-v1.0.0-linux.tar.gz
   ```
   *You should see a message indicating a "Good signature" from the GDAgent Team.*

### Verify Checksum (Alternative)

If you do not have GPG installed, you can still verify that your download was not corrupted by checking its SHA-256 hash.

1. Download the `.sha256` checksum file directly from your Lemon Squeezy receipt.
2. Open your terminal in the download folder and run:
   ```bash
   sha256sum -c gdagent-v1.0.0-linux.tar.gz.sha256
   ```
   *You should see an "OK" message if the file is intact.*

## Next Step

- [Quick Start & Activation](/docs/getting-started/quick-start)
- [Godot MCP Tools](/docs/reference/mcp-tools)
- [Packaged Binaries & Security](/docs/reference/packaged-binaries)
- [Support Matrix](/docs/reference/support-matrix)
- [Troubleshooting](/docs/support/troubleshooting)

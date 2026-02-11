---
title: "License Activation"
description: "Activate and manage your GDAgent license"
---

## Activate

1. Launch `gdagent`
2. Go to the **License** tab
3. Enter your license key (from your purchase email)
4. Click **Activate**

That's it — you're ready to install GDAgent to your projects.

## Deactivate

Moving to a new machine? Free up the seat first:

1. Launch `gdagent`
2. Go to the **License** tab
3. Click **Deactivate**

Then activate on your new machine.

## Offline Use

After activation, GDAgent works offline for up to 3 days. It will silently revalidate when you're back online.

## Activation Limits

Each license allows **2 simultaneous activations** — perfect for a desktop and laptop setup.

If you hit the limit, deactivate an old machine or contact support.

---

## CLI Alternative

For automation or CI/CD, you can activate via command line:

```bash
gdagent activate
```

Or pipe the key via stdin:

```bash
printf '%s' "$GDAGENT_LICENSE_KEY" | gdagent activate
```

# Shortcut Runtime Guide

This page explains how to run and contribute to melon Shortcut runtime (Cherri layer).

For the full operational checklist, see [shortcut/README.md](../shortcut/README.md).

Cherri language reference: [https://cherrilang.org/](https://cherrilang.org/).

## What This Component Does

Melon has two connected parts:

1. TypeScript VM/runtime in webport and src
2. Cherri shortcut runtime in shortcut/melon.cherri

The Cherri runtime receives VM syscall requests and executes native Shortcuts actions.

## Local Run Flow

1. Build web runtime bundle:

```bash
npm run build:webport
```

2. Ensure static hosting is available at:

`http://127.0.0.1:5500/dist/webport/index.html`

3. Compile shortcut runtime for local development (no version/URL injection):

```bash
npm run build:shortcut:dev
```

For release-oriented builds that inject version and release webport URL into `shortcut/melon.cherri` before compile:

```bash
npm run build:shortcut
```

4. Open and test:

```bash
open melon.shortcut
```

## When Adding A New Syscall

Update both files in sync:

1. `src/syscall.ts`
2. `shortcut/melon.cherri`

In `shortcut/melon.cherri`, update:

1. `MELON_SYSCALL_ARG_COUNTS`
2. Dispatch `if` block for the new action id

If you miss either side, the syscall will fail at runtime.

## Common Validation Checklist

1. `npm run build:webport`
2. `cherri melon.cherri`
3. Run shortcut once with a simple program like `print("ok")`
4. Run shortcut with at least one new syscall you added

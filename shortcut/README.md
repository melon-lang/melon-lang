# Melon Shortcut Runtime Guide

This folder contains the Shortcut runtime layer of melon, written in Cherri.

Cherri language reference: [https://cherrilang.org/](https://cherrilang.org/).

- Main source: melon.cherri

The Shortcut runtime is the bridge between melon VM syscalls and Siri Shortcuts actions.

## Prerequisites

1. Node.js and npm
2. Cherri CLI installed and available in PATH (`cherri`)
3. A local static server that serves the project root at `http://127.0.0.1:5500`

The runtime URL currently used by melon is:

- `http://127.0.0.1:5500/dist/webport/index.html`

If you use a different port or host, update `MELON_SOURCE_CODE_URL` in melon.cherri.

## First-Time Setup

From repository root:

```bash
npm install
npm run build:webport
```

Start a static server from repository root (example):

```bash
python3 -m http.server 5500
```

Or use VS Code Live Server as long as it serves the same URL path expected by melon.cherri.

## Build The Shortcut

From this folder:

```bash
cherri melon.cherri
```

This generates `melon.shortcut`.

To compile and open quickly on macOS:

```bash
cherri melon.cherri && open melon.shortcut
```

## Typical Development Loop

1. Edit syscall wrappers in `src/syscall.ts` if needed.
2. Edit Cherri dispatch in `shortcut/melon.cherri`.
3. Rebuild web runtime:

```bash
npm run build:webport
```

4. Recompile shortcut:

```bash
cd shortcut
cherri melon.cherri
```

5. Run the shortcut and test behavior.

## Troubleshooting

### Shortcut compile succeeds but signing/save fails on macOS

You may see local signing errors followed by HubSign fallback. This is usually a local signing environment issue, not a Cherri source syntax issue.

### Runtime says it cannot load interpreter page

Check that `dist/webport/index.html` exists and your local server is reachable at `127.0.0.1:5500`.

### New syscall does not run

When adding a syscall, update both sides:

1. `src/syscall.ts` wrapper entry
2. `shortcut/melon.cherri`:
   - syscall id in `MELON_SYSCALL_ARG_COUNTS`
   - dispatch handler block

## Related Docs

- Docs contribution page: ../docs/contribute.md
- Docs runtime guide: ../docs/shortcut-runtime.md

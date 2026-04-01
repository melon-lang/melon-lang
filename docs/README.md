
# Melon

**Write automations for iPhone, iPad, and Mac** - directly in code.

Melon is a simple programming language that runs on Siri Shortcuts. Create powerful automations without installing an app.

## What can you do?

- **Automate anything** - control settings, send messages, manage files
- **Pure code** - no complex UI builder
- **Always with you** - runs natively on your device
- **100% open source** - free to use and modify

## Get Started in 60 Seconds

1. **Install** the melon Shortcut from [here](https://github.com/melon-lang/melon-lang/releases/latest/download/melon.shortcut)
2. **Try the playground** at [melon-lang.github.io/playground](https://melon-lang.github.io/playground/)
3. **Run your first code:**

```melon
print("Hello world!");
```

That's it! Press Run and you'll see the output.

## 📚 Learn

The docs are organized to take you from beginner to advanced:

- **New to programming?** Start with [Get Started](getting-started.md)
- **Know programming already?** Jump to [Language Basics](types.md)
- **Want to build something?** Check out the [Standard Library](syscalls.md)

## 💡 How it Works

**melon** is an orthogonally persistent language. It uses **Siri Shortcuts** as a backend, but allows for more complex and performant automations to be created compared to **Shortcuts** application itself.

It has two main components:
1. **TypeScript VM/runtime** - runs in the web playground and processes your code
2. **Host Shortcut** - hosts the VM, handles system calls, and executes native actions on your device

When you run code, it gets compiled to bytecode and executed by the VM. Whenever your code calls a native function (like `print()`), the VM sends a syscall request to the Host Shortcut. The Shortcut then executes the corresponding native action (like `Show Result`) and sends any results back to the VM.

VM is executed via [JavaScript execution trick](https://talk.automators.fm/t/tip-running-javascript-in-shortcuts-ios-macos/16575). It is written in TypeScript.
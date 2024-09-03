# Melon Programming Language 🍉

**melon** is an orthogonally persistent language designed for creating **automations** for **Apple** devices that run **blazingly fast ⚡**. It uses **Siri Shortcuts** as a backend, but allows for more complex and performant automations to be created compared to **Shortcuts** application itself.

## Documentation

You can learn about melon language features from [here](https://melon-lang.github.io/melon-lang/#/).

## Installation

Start by installing `melon` Shortcut to your device from [here](https://www.icloud.com/shortcuts/861be6b5aa794498a8b1b543262be817). 

This shortcut will serve as our interpreter. 

## Quickstart

### How to use

You can go to the [web playground](https://melon-lang.github.io/playground/) to experiment with melon language features. This playground contains a web editor. Whenever you press **Run** button, it sends your code to `melon` Shortcut that you installed on your device. Then your code gets executed locally by the shortcut.

Or, if you want to use melon within your own Shortcut, just input your code as text to `Run Shortcut (melon)` action in your shortcut as down below.

<div align="center">
    <img src="how-to-use.png" />
</div>

### Hello world program

Try running this snippet.

```
print("Hello world!");
```

In melon, you use native `print` function to display text or other types of data. melon uses `Show Result` action to achieve this.

Also, lines in melon must end with a semicolon.


# Core Functions

These are the fundamental functions built into melon. For more advanced operations, like taking a photo etc. check out the [Standard Library](syscalls.md).

## Output & Input

### `print(...)`

Display values to the user. Pass multiple values and they'll print together.

```melon
print("Hello world!");
print("Count:", 1, 2, 3);
```

### `input(prompt?)`

Ask the user for text input with an optional prompt.

```melon
let name = input("What's your name? ");
print("Hello,", name);
```

## Type Conversion

### `number(value)`

Convert a value to a number. Useful for parsing user input.

```melon
let age = number(input("Age? "));
print("Next year you'll be", age + 1);
```

### `str(value)`

Convert any value to a string.

```melon
print(str(123) + " apples");
```

## Data & Utility

### `len(value)`

Get the length of a string, list, or tuple.

```melon
let word = "melon";
print("Word length:", len(word));
```

### `random()`

Generate a random number between 0 and 1.

```melon
let num = random();
print("Random:", num);
```

## Program Control

### `exit(value?)`

Stop the program and return a value (optional).

```melon
if (x < 0) {
  exit("Invalid input!");
}
```

### `wait(seconds)`

Pause execution for a given number of seconds.

```melon
print("Starting...");
wait(2);
print("Done!");
```

## Advanced

### `syscall(id, ...args)`

Directly call a Shortcuts action by its internal ID. This is rarely needed—use the Standard Library instead.

```melon
syscall("is.workflow.actions.showresult", "Direct call");
```

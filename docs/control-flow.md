# Control Flow Statements <!-- {docsify-all} -->

Melon provides several control flow statements that help manage the execution flow of programs. These include loops and conditional statements. Here’s a comprehensive overview of the supported statements:

### `for` Loop

The `for` loop is used to iterate over a sequence of values or execute a block of code a specific number of times. The loop initialization, condition, and increment/decrement are specified in the loop header.

**Syntax:**
```melon
for (let i = 0; i < 100; i++) {
    // Code to be executed
}
```

**Example:**
```melon
for (let i = 0; i < 5; i++) {
    print(i);
}
// Output: 0 1 2 3 4
```

### `while` Loop

The `while` loop repeatedly executes a block of code as long as the specified condition remains `true`. It is useful when the number of iterations is not known beforehand.

**Syntax:**
```melon
while (condition) {
    // Code to be executed
}
```

**Example:**
```melon
let count = 0;
while (count < 5) {
    print(count);
    count++;
}
// Output: 0 1 2 3 4
```

### `if...else` Statement

The `if...else` statement allows you to execute different blocks of code based on a condition. If the condition evaluates to `true`, the code inside the `if` block is executed; otherwise, the code inside the `else` block is executed.

**Syntax:**
```melon
if (condition) {
    // Code to be executed if the condition is true
} else {
    // Code to be executed if the condition is false
}
```

**Example:**
```melon
let x = 10;
if (x > 5) {
    print("x is greater than 5");
} else {
    print("x is 5 or less");
}
// Output: x is greater than 5
```

### `else if` (Planned)

The `else if` statement, which allows for multiple conditional checks, is planned for future releases. It will enable you to chain multiple conditions together, making your code more flexible and expressive.

**Planned Syntax:**
```melon
if (condition1) {
    // Code to be executed if condition1 is true
} else if (condition2) {
    // Code to be executed if condition2 is true
} else {
    // Code to be executed if neither condition1 nor condition2 is true
}
```

**Planned Example:**
```melon
let x = 10;
if (x > 15) {
    print("x is greater than 15");
} else if (x > 5) {
    print("x is greater than 5 but not greater than 15");
} else {
    print("x is 5 or less");
}
```

### `break`

The `break` statement is used to exit from a loop prematurely. When `break` is encountered inside a loop, the loop terminates immediately, and control passes to the statement following the loop.

**Syntax:**
```melon
for (let i = 0; i < 10; i++) {
    if (condition) {
        break;
    }
    // Code to be executed
}
```

**Example:**
```melon
for (let i = 0; i < 10; i++) {
    if (i == 5) {
        break; // Exits the loop when i equals 5
    }
    print(i);
}
// Output: 0 1 2 3 4
```

### `continue`

The `continue` statement is used to skip the current iteration of a loop and proceed to the next iteration. When `continue` is encountered, the rest of the code inside the loop for the current iteration is skipped, and the loop condition is re-evaluated.

**Syntax:**
```melon
for (let i = 0; i < 10; i++) {
    if (condition) {
        continue;
    }
    // Code to be executed
}
```

**Example:**
```melon
for (let i = 0; i < 10; i++) {
    if (i % 2 == 0) {
        continue; // Skips the rest of the loop when i is even
    }
    print(i);
}
// Output: 1 3 5 7 9
```

# Functions <!-- {docsify-all} -->

Functions in Melon allow you to encapsulate reusable blocks of code, making your programs more organized and modular. Functions can take parameters, execute code, and return values. Here's a comprehensive look at how functions work in Melon:

### Defining a Function

To define a function, use the `function` keyword followed by the function name, a set of parentheses containing any parameters, and a block of code enclosed in curly braces. Parameters are optional and are used to pass values into the function.

**Syntax:**
```melon
function function_name(parameter1, parameter2, ..., parameterN) {
    // Code to be executed
}
```

**Example:**
```melon
function say_hi(name) {
    print("Hello, " + name + "!");
}
```

In this example, the `say_hi` function takes one parameter, `name`, and prints a greeting that includes the provided name.

### Calling a Function

To execute a function, use its name followed by parentheses. If the function requires parameters, pass the appropriate values within the parentheses.

**Syntax:**
```melon
function_name(argument1, argument2, ..., argumentN);
```

**Example:**
```melon
say_hi("Alice"); // Outputs: Hello, Alice!
```

You can call the `say_hi` function with different arguments to generate personalized greetings.

### Return Statement

The `return` statement is used to return a value from a function. When a `return` statement is executed, the function ends, and the specified value is sent back to the caller. If no `return` statement is provided, the function returns `null` by default.

**Syntax:**
```melon
function function_name(parameter1, parameter2, ..., parameterN) {
    // Code to be executed
    return value;
}
```

**Example:**
```melon
function add(a, b) {
    return a + b;
}

let sum = add(5, 3);
print(sum); // Outputs: 8
```

In this example, the `add` function takes two parameters, `a` and `b`, and returns their sum. The returned value is then assigned to the variable `sum`, which is printed.
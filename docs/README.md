
**melon** is an **orthogonally-persistent** programming language designed for creating **blazingly fast** automations for Apple devices.

It is similar to Scriptable, but it is **open source** and **built only using Siri Shortcuts**. You don't need to install an app to use melon.

# Installation

Start by installing `melon` Shortcut to your device from [here](https://www.icloud.com/shortcuts/f32873be34104da59020c32791cf57c3). 

This shortcut will serve as our interpreter. 

# Quickstart

## How to use

You can go to the [web playground](https://melon-lang.github.io/playground/) to experiment with melon language features. This playground contains a web editor. Whenever you press **Run** button, it sends your code to `melon` Shortcut that you installed on your device. Then your code gets executed locally by the shortcut.

Or, if you want to use melon within your own Shortcut, just input your code as text to `Run Shortcut (melon)` action in your shortcut as down below.

<div align="center">
    <img src="/how-to-use.png" />
</div>

## Hello world program

Try running this snippet.

```
print("Hello world!");
```

In melon, you use native `print` function to display text or other types of data. melon uses `Show Result` action to achieve this.

Also, lines in melon must end with a semicolon.

# Basics

## Primitives

Primitives are the basic data types in Melon. They are simple and immutable (except for lists) and form the building blocks for more complex data structures. Melon supports several primitive types:

### Strings

Strings in Melon are sequences of characters enclosed in double quotes (`"`). They can contain letters, numbers, symbols, and whitespace. Strings are immutable, meaning once a string is created, it cannot be modified. Any operation that seems to modify a string actually creates a new string.

Examples:
```melon
let a = "This is a string"; // A simple string
let b = "12345";            // A string containing numbers
let c = "Hello, World!";    // A string with special characters
```

Common operations with strings include concatenation, substring extraction, and checking for inclusion of other strings.

### Numbers

Numbers in Melon represent numeric values. They can be integers or floating-point numbers. Unlike strings, numbers are not enclosed in quotes.

Examples:
```melon
let a = 42;       // An integer
let b = 3.14;     // A floating-point number
let c = -10;      // A negative integer
```

Numbers support a variety of arithmetic operations, including addition, subtraction, multiplication, division, and modulus.

### Booleans

Booleans represent two possible truth values: `true` or `false`. They are primarily used for conditional statements and logical operations.

Examples:
```melon
let is_valid = true;   // Boolean true
let is_done = false;   // Boolean false
```

Booleans are often the result of comparison operations or logical expressions.

### Tuples

Tuples are ordered collections of values that can be of different types. Tuples are immutable, meaning their elements cannot be changed after they are created. They are defined by placing a comma-separated sequence of values inside parentheses.

Examples:
```melon
let my_tuple = (1, "hello", true); // A tuple with an integer, string, and boolean
let coordinates = (10, 20);        // A tuple representing coordinates
```

Tuples are useful for grouping related data together without the overhead of a more complex data structure.

### Lists

Lists in Melon are ordered collections of values, which can be of different types. Lists are mutable, meaning their contents can be modified after they are created. This flexibility makes lists a versatile tool for managing collections of data.

Lists are defined by placing a comma-separated sequence of values inside square brackets (`[]`).

Examples:
```melon
let my_list = [1, 2, 3, 4]; // A list containing four integers
let mixed_list = [1, "apple", true, 3.14]; // A list containing different types of elements
let nested_list = [1, 2, [3, 4], 5]; // A list containing another list
```

### Null

Null is a special primitive type in Melon that represents the absence of a value. It is often used to signify that a variable has no value or that a function does not return a value.

Examples:
```melon
let d = null;   // d is explicitly set to null
```

Null is useful for initializing variables that will later hold other values or for signaling that no valid value is available.

## Operations on Primitives

### String Operations

Strings in Melon are sequences of characters that allow various operations, making them versatile for text manipulation and processing. Here’s a detailed look at the common operations you can perform on strings in Melon:

#### 1. Concatenation

Concatenation is the process of joining two or more strings end-to-end to form a new string. In Melon, the `+` operator is used for string concatenation.

**Example:**
```melon
let str1 = "Hello, ";
let str2 = "world!";
let result = str1 + str2; // result is "Hello, world!"
```

You can concatenate multiple strings at once:
```melon
let part1 = "Concatenating ";
let part2 = "multiple ";
let part3 = "strings.";
let full_sentence = part1 + part2 + part3; // full_sentence is "Concatenating multiple strings."
```

#### 2. Slicing (Planned)

Slicing will allow you to extract a substring from a string using start and end indices. The `start` index would be inclusive, while the `end` index would be exclusive.

**Planned Example:**
```melon
let text = "Melon Programming Language";
let slice1 = text[0:5];  // Expected to be "Melon"
let slice2 = text[6:17]; // Expected to be "Programming"
let slice3 = text[18:];  // Expected to be "Language"
```

#### 3. Length (Planned)

The `len` function is planned to determine the number of characters in a string.

**Planned Example:**
```melon
let phrase = "Count me in!";
let length = len(phrase); // Expected to be 12
```

#### 4. Searching (Planned)

Searching will allow you to find the position of a substring or check for its presence. Functions like `index` and `contains` are planned.

**Planned Example:**
```melon
let sentence = "Find the needle in the haystack.";
let position = sentence.index("needle"); // Expected to be 9
let exists = sentence.contains("needle");  // Expected to be true
let not_found = sentence.index("thread"); // Expected to be -1
```

#### 5. Case Conversion (Planned)

Case conversion functions will allow you to convert strings to all uppercase or all lowercase, making it easier to standardize and compare text.

**Planned Example:**
```melon
let mixed_case = "Melon";
let upper_case = mixed_case.upper(); // Expected to be "MELON"
let lower_case = mixed_case.lower(); // Expected to be "melon"
```

#### 6. Trimming (Planned)

The `trim` function will remove whitespace characters from both ends of a string, which is useful for cleaning up input data.

**Planned Example:**
```melon
let messy_string = "   too much space   ";
let clean_string = messy_string.trim(); // Expected to be "too much space"
```

#### 7. Replacing (Planned)

The `replace` function will allow you to substitute parts of a string with a different substring.

**Planned Example:**
```melon
let original = "I love apples.";
let modified = original.replace("apples", "bananas"); // Expected to be "I love bananas."
```

### Number Operations

Numbers in Melon represent numeric values and can be either integers or floating-point numbers. These numbers are essential for performing mathematical computations and comparisons. Melon provides a variety of operations that can be performed on numbers, making it versatile for handling arithmetic and logical tasks.

#### 1. Arithmetic Operations

Melon supports several basic arithmetic operations that allow you to perform calculations on numbers. These operations include addition, subtraction, multiplication, division, and modulus.

- **Addition (`+`)**: Adds two numbers together.
- **Subtraction (`-`)**: Subtracts one number from another.
- **Multiplication (`*`)**: Multiplies two numbers.
- **Division (`/`)**: Divides one number by another.
- **Modulus (`%`)**: Returns the remainder of a division operation.

**Examples:**
```melon
let a = 10;
let b = 3;

let sum = a + b;         // sum is 13
let difference = a - b;  // difference is 7
let product = a * b;     // product is 30
let quotient = a / b;    // quotient is 3.333... (floating-point division)
let remainder = a % b;   // remainder is 1
```

#### 2. Comparison Operations

Comparison operations allow you to compare two numbers. These operations are commonly used in conditional statements and loops to control the flow of a program.

- **Equal to (`==`)**: Checks if two numbers are equal.
- **Not equal to (`!=`)**: Checks if two numbers are not equal.
- **Greater than (`>`)**: Checks if one number is greater than another.
- **Less than (`<`)**: Checks if one number is less than another.
- **Greater than or equal to (`>=`)**: Checks if one number is greater than or equal to another.
- **Less than or equal to (`<=`)**: Checks if one number is less than or equal to another.

**Examples:**
```melon
let x = 5;
let y = 10;

let isEqual = (x == y);          // isEqual is false
let isNotEqual = (x != y);       // isNotEqual is true
let isGreater = (x > y);         // isGreater is false
let isLess = (x < y);            // isLess is true
let isGreaterOrEqual = (x >= y); // isGreaterOrEqual is false
let isLessOrEqual = (x <= y);    // isLessOrEqual is true
```

#### 3. Increment and Decrement

Increment and decrement operations are shorthand for adding or subtracting 1 from a number, respectively. These operations are useful for loops and iterative processes.

- **Increment (`++`)**: Increases a number by 1.
- **Decrement (`--`)**: Decreases a number by 1.

**Examples:**
```melon
let count = 0;

count++;  // count is now 1
count--;  // count is back to 0
```

The prefix increment (++variable) or decrement (--variable) operators first modify the variable by increasing or decreasing its value by 1, and then return the updated value. On the other hand, the suffix increment (variable++) or decrement (variable--) operators return the variable's current value before performing the increment or decrement. This distinction can affect the outcome of expressions, especially when these operators are used within more complex statements or function calls.

**Examples:**

```
let i = 0;

let x = i++; // x = 0
```

```
let i = 0;

let x = ++i; // x = 1
```

#### 4. Random Number Generation

Melon provides a built-in `random()` function that generates a random floating-point number between 0 (inclusive) and 1 (exclusive). This can be useful for creating random behavior in programs, such as simulations or games.

**Example:**
```melon
let random_number = random(); // Generates a random number between 0 and 1
```

#### 5. Casting (Planned)

Casting is the process of converting one data type to another. For numbers, this might involve converting an integer to a floating-point number or vice versa. While this feature is not yet implemented in Melon, it is planned for future releases.

**Planned Example:**
```melon
let integer_value = 10;
let float_value = toFloat(integer_value);  // Expected to convert 10 to 10.0

let decimal_value = 3.14;
let int_value = toInt(decimal_value);      // Expected to convert 3.14 to 3
```

#### 6. Mathematical Functions (Planned)

Melon plans to support various mathematical functions to perform more complex calculations. These functions might include absolute value, exponentiation, square root, trigonometric functions, and more.

**Planned Examples:**
```melon
let value = -5;
let abs_value = abs(value); // Expected to be 5

let base = 2;
let exponent = 3;
let power = pow(base, exponent); // Expected to be 8

let number = 9;
let square_root = sqrt(number); // Expected to be 3
```

#### 7. Rounding (Planned)

Rounding functions are also planned to help round numbers to the nearest integer or to a specified number of decimal places.

**Planned Examples:**
```melon
let float_num = 3.567;
let rounded = round(float_num);     // Expected to be 4
let rounded_down = floor(float_num); // Expected to be 3
let rounded_up = ceil(float_num);    // Expected to be 4
```

### Boolean Operations

Boolean operations in Melon are fundamental for controlling the flow of programs and making decisions. They operate on Boolean values (`true` and `false`) and are essential for creating conditional statements and loops. Here’s a detailed look at the various Boolean operations available in Melon:

#### 1. Logical AND (`&&`)

The logical AND operation returns `true` if both operands are `true`. If either operand is `false`, the result is `false`. This operation is used to combine multiple conditions in a way that all conditions must be met for the overall expression to be true.

**Example:**
```melon
let a = true;
let b = false;
let result = a && b; // result is false
```

#### 2. Logical OR (`||`)

The logical OR operation returns `true` if at least one of the operands is `true`. If both operands are `false`, the result is `false`. This operation is used when only one of multiple conditions needs to be true for the overall expression to be true.

**Example:**
```melon
let a = true;
let b = false;
let result = a || b; // result is true
```

#### 3. Logical NOT (`!`)

The logical NOT operation inverts the Boolean value of its operand. If the operand is `true`, the result is `false`, and if the operand is `false`, the result is `true`. This operation is used to negate conditions and create opposite logical expressions.

**Example:**
```melon
let a = true;
let result = !a; // result is false
```

#### 4. XOR (Exclusive OR) (Planned)

The XOR operation returns `true` if exactly one of the operands is `true`. If both operands are either `true` or both are `false`, the result is `false`. This operation is useful for situations where you want to ensure that only one of multiple conditions is met.

**Planned Example:**
```melon
let a = true;
let b = false;
let result = a ^ b; // result is true
```

#### 5. Comparison Operators

Boolean operations are frequently combined with comparison operators to form complex conditions. These operators compare two values and return Boolean results:

- **Equal to (`==`)**: Returns `true` if the values are equal.
- **Not equal to (`!=`)**: Returns `true` if the values are not equal.
- **Greater than (`>`)**: Returns `true` if the left value is greater than the right value.
- **Less than (`<`)**: Returns `true` if the left value is less than the right value.
- **Greater than or equal to (`>=`)**: Returns `true` if the left value is greater than or equal to the right value.
- **Less than or equal to (`<=`)**: Returns `true` if the left value is less than or equal to the right value.

**Example:**
```melon
let x = 10;
let y = 20;
let comparison_result = (x < y); // comparison_result is true
```

### List Operations

Lists in Melon are ordered collections of elements that can be of any data type, including other lists. They provide powerful ways to manage and manipulate sequences of data. Here’s a detailed look at the operations you can perform on lists in Melon:

#### 1. Accessing Elements

You can access individual elements of a list using zero-based indexing. The index specifies the position of the element within the list.

**Example:**
```melon
let my_list = [10, 20, 30, 40];
let first_element = my_list[0]; // first_element is 10
let third_element = my_list[2]; // third_element is 30
```

#### 2. Zero-Indexing

Melon lists use zero-based indexing, meaning that the first element of a list is accessed with index `0`, the second with index `1`, and so on.

**Example:**
```melon
let my_list = ['a', 'b', 'c'];
let second_element = my_list[1]; // second_element is 'b'
```

#### 3. Appending Elements

You can add elements to the end of a list using the `+=` operator. This operator allows you to concatenate another list or element to the existing list.

**Example using `+=` operator:**
```melon
let my_list = [1, 2, 3];
my_list += [4, 5]; // my_list is now [1, 2, 3, 4, 5]
```

#### 4. Inserting Elements (Planned)

Inserting an element at a specific position in the list is planned for future releases. This operation will allow you to specify the index where the new element should be added.

**Planned Example:**
```melon
let my_list = [1, 2, 4];
my_list.insert(2, 3); // Inserts 3 at index 2, my_list is now [1, 2, 3, 4]
```

#### 5. Removing Elements (Planned)

The `pop` operation for removing elements by index is planned for future releases.

**Planned Example:**
```melon
let my_list = [1, 2, 3, 4];
my_list.pop(1); // Removes the element at index 1, my_list is now [1, 3, 4]
```

#### 6. Slicing (Planned)
 
Slicing allows you to create a sublist from a list by specifying a start and end index. The start index is inclusive, and the end index is exclusive.

**Example:**
```melon
let my_list = [1, 2, 3, 4, 5];
let sublist = my_list[1:4]; // sublist is [2, 3, 4]
```

You can omit the start or end index to slice from the beginning or to the end of the list, respectively.

**Example:**
```melon
let start_slice = my_list[:3]; // start_slice is [1, 2, 3]
let end_slice = my_list[3:];   // end_slice is [4, 5]
```

#### 7. Length (Planned)

The `len` function is planned to determine the number of elements in a list.

**Planned Example:**
```melon
let list = [1,2,3];
let length = len(list); // Expected to be 3
```

#### 8. Iteration (Planned)

Lists can be iterated over using loops, allowing you to perform operations on each element.

**Example:**
```melon
let my_list = [1, 2, 3, 4];
for(item in my_list) {
    print(item);
}
// Output: 1 2 3 4
```

### Tuple Operations

Tuples in Melon are immutable ordered collections of elements. Unlike lists, tuples cannot be changed after they are created, meaning that you cannot add, remove, or modify elements. However, you can access elements within a tuple. Here’s a detailed look at tuple operations focusing on accessing elements:

#### 1. Accessing Elements

You can access individual elements of a tuple using zero-based indexing, similar to lists. The index specifies the position of the element within the tuple.

**Example:**
```melon
let my_tuple = (10, 20, 30, 40);
let first_element = my_tuple[0]; // first_element is 10
let third_element = my_tuple[2]; // third_element is 30
```

You can also use negative indices to access elements from the end of the tuple. For example, `-1` refers to the last element.

**Example:**
```melon
let last_element = my_tuple[-1]; // last_element is 40
```

Tuples, being immutable, do not support operations that alter their contents. You can only read and access the data stored in them. This immutability ensures that tuples are a reliable and consistent way to group related values that should not change throughout the program.

## Control Flow Statements

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

## Native Functions

Melon provides several native functions to facilitate basic operations in your programs. These functions are built into the language and offer essential capabilities such as outputting data, receiving user input, and terminating the program. Here’s an overview of the native functions available:

### `print`

The `print` function is used to output data to the standard output (typically the console). It can handle various data types, including strings, numbers, and lists, and can accept multiple arguments, which will be printed sequentially with a space separating them.

**Syntax:**
```melon
print(value1, value2, ..., valueN);
```

**Example:**
```melon
let message = "Hello, Melon!";
let number = 42;
let my_list = [1, 2, 3];

print(message); // Outputs: Hello, Melon!
print(number); // Outputs: 42
print(my_list); // Outputs: [1, 2, 3]
print("The number is", number, "and the list is", my_list);
// Outputs: The number is 42 and the list is [1, 2, 3]
```

### `input`

The `input` function is used to receive input from the user. It waits for the user to enter data and then returns that data as a string. This function is useful for interactive programs that require user interaction.

**Syntax:**
```melon
let user_input = input(prompt?);
```

**Example:**
```melon
let name = input("Enter your name: ");
print("Hello, " + name + "!");
// If the user enters "Alice", the output will be: Hello, Alice!
```

### `exit`

The `exit` function terminates the program immediately. Unlike some languages, Melon's `exit` function does not support status codes; it simply ends the program.

**Syntax:**
```melon
exit();
```

**Example:**
```melon
print("This message will be shown.");
exit(); // Terminates the program
print("This message will not be shown."); // This line will not be executed
```
## Functions

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

### Example of Function with Return

Here’s a complete example demonstrating how to define a function with a `return` statement and call it:

```melon
// Define the function
function multiply(x, y) {
    return x * y;
}

// Call the function and use the returned value
let result = multiply(4, 5);
print(result); // Outputs: 20
```

In this example, the `multiply` function takes two parameters, `x` and `y`, and returns their product. The returned value is stored in the variable `result`, which is then printed.


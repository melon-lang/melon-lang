# Variables in Melon

In Melon, variables are used to store data that can be referenced and manipulated throughout your program. Variables provide a way to label and store values that can be used in various operations. This guide covers how to declare variables using the `let` keyword, perform arithmetic operations, and manipulate list values by setting elements at specific indices.

## Declaring Variables with `let`

To declare a variable in Melon, use the `let` keyword followed by the variable name and an initial value assignment. Once declared, a variable can store different types of data, such as strings, numbers, booleans, lists, and more.

**Syntax:**
```melon
let variable_name = initial_value;
```

**Examples:**
```melon
let greeting = "Hello, world!"; // String variable
let age = 25;                   // Number variable
let is_valid = true;            // Boolean variable
let my_list = [1, 2, 3];        // List variable
```

## Reassigning Variables

Once a variable is declared using the `let` keyword, you can update its value by simply assigning a new value to it using the assignment operator (`=`). This operation overwrites the previous value stored in the variable.

**Syntax:**
```melon
variable_name = new_value;
```

**Examples:**
```melon
let count = 10;   // Initial declaration and assignment
print(count);     // Outputs: 10

count = 20;       // Reassigning a new value to 'count'
print(count);     // Outputs: 20

let greeting = "Hello!";
print(greeting);  // Outputs: Hello!

greeting = "Goodbye!"; // Reassigning a new value to 'greeting'
print(greeting);       // Outputs: Goodbye!
```

In these examples, the variables `count` and `greeting` are initially assigned values at the time of declaration. Later, their values are updated by reassigning new data.

## Incrementing and Decrementing Variables

Melon supports the increment (`++`) and decrement (`--`) operators, which provide a shorthand way to increase or decrease a variable's value by `1`.

- **Increment (`++`)**: Increases the variable's value by `1`.
- **Decrement (`--`)**: Decreases the variable's value by `1`.

These operators can be used in both prefix and suffix positions:
- **Prefix (`++variable` or `--variable`)**: Modifies the variable's value before its current value is used in an expression.
- **Suffix (`variable++` or `variable--`)**: Uses the variable's current value in an expression before modifying it.

**Examples:**
```melon
let score = 10;

score++; // Increment 'score' by 1 (score is now 11)
print(score); // Outputs: 11

score--; // Decrement 'score' by 1 (score is now 10)
print(score); // Outputs: 10

let x = 5;
print(++x); // Outputs: 6 (prefix increment, x is incremented before printing)

let y = 8;
print(y++); // Outputs: 8 (suffix increment, y is printed before incrementing)
print(y);   // Outputs: 9
```

In these examples, the increment and decrement operators modify the variables `score`, `x`, and `y` directly, demonstrating both the prefix and suffix usage.

## Arithmetic Assignment Operators

Melon supports several arithmetic assignment operators that simplify performing arithmetic operations on variables. These operators combine a basic arithmetic operation with assignment, allowing you to update the value of a variable directly.

**Supported Operators:**

1. `+=` : Adds a value to a variable and assigns the result to that variable.
2. `-=` : Subtracts a value from a variable and assigns the result to that variable.
3. `*=` : Multiplies a variable by a value and assigns the result to that variable.
4. `/=` : Divides a variable by a value and assigns the result to that variable.

**Examples:**
```melon
let x = 10;

x += 5; // Adds 5 to x (x is now 15)
print(x); // Outputs: 15

x -= 3; // Subtracts 3 from x (x is now 12)
print(x); // Outputs: 12

x *= 2; // Multiplies x by 2 (x is now 24)
print(x); // Outputs: 24

x /= 4; // Divides x by 4 (x is now 6)
print(x); // Outputs: 6
```

These operators provide a concise way to perform arithmetic operations on a variable without repeating the variable name.
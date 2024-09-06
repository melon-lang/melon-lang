# Native Functions <!-- {docsify-all} -->

Melon provides several native functions to facilitate basic operations in your programs. These functions are built into the language and offer essential capabilities such as outputting data, receiving user input, and terminating the program. Here’s an overview of the native functions available:

### `print`

The `print` function is used to output data to the standard output (using `Show Result` action in Siri Shortcuts). It can handle various data types, including strings, numbers, and lists, and can accept multiple arguments, which will be printed sequentially with a space separating them.

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

**Example with input as a number:**

If you need to get a number as input, you can use the native `number()` function.

```melon
let age = number(input("Enter your age: "));

if(age >= 18) {
    print("Here, have a beer!");
}
else {
    print("Here, have a soda!");
}
```

### `number`

The `number` function accepts a string, and parses it as a number.

### `str`

The `str` function accepts a value, and converts it into a string.

### `len`

It returns the length of a given string, list or tuple.

### `random`

The `random` function generates and returns a random number between 0 and 1.

### `exit`

The `exit` function terminates the program immediately. Unlike some languages, Melon's `exit` function does not support status codes; it simply ends the program. 

You can also return back a value to Shortcut using `exit`. 

**Syntax:**
```melon
exit(optional_return_value?);
```

**Example:**
```melon
print("This message will be shown.");
exit("I love you"); // Terminates the program. 'I love you' is returned to the shortcut.
print("This message will not be shown."); // This line will not be executed
```

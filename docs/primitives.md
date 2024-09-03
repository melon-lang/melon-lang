# Primitives <!-- {docsify-all} -->

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

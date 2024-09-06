

# Operations on Primitives <!-- {docsify-all} -->

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

#### 3. Length

The `len` function can be used to determine the number of characters in a string.

**Example:**
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

#### 4. Comparison Operators

Boolean operations are frequently combined with comparison operators to form complex conditions. These operators compare two values and return Boolean results:

- **Equal to (`==`)**: Returns `true` if the values are equal.
- **Not equal to (`!=`)**: Returns `true` if the values are not equal.

**Example:**
```melon
let x = "hello";
let y = "hello";
let comparison_result = (x == y); // comparison_result is true
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

**Example:**
```melon
let my_list = ['a', 'b', 'c'];
let second_element = my_list[1]; // second_element is 'b'
```

#### 2. Appending Elements

You can add elements to the end of a list using the `+=` operator. This operator allows you to concatenate another list or element to the existing list.

**Example using `+=` operator:**
```melon
let my_list = [1, 2, 3];
my_list += [4, 5]; // my_list is now [1, 2, 3, 4, 5]
```

#### 3. Inserting Elements (Planned)

Inserting an element at a specific position in the list is planned for future releases. This operation will allow you to specify the index where the new element should be added.

**Planned Example:**
```melon
let my_list = [1, 2, 4];
my_list.insert(2, 3); // Inserts 3 at index 2, my_list is now [1, 2, 3, 4]
```

#### 4. Removing Elements (Planned)

The `pop` operation for removing elements by index is planned for future releases.

**Planned Example:**
```melon
let my_list = [1, 2, 3, 4];
my_list.pop(1); // Removes the element at index 1, my_list is now [1, 3, 4]
```

#### 5. Slicing (Planned)
 
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

#### 6. Length

The `len` function can be used to determine the number of elements in a list.

**Example:**
```melon
let list = [1,2,3];
let length = len(list); // Expected to be 3
```

#### 7. Iteration (Planned)

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

Tuples, being immutable, do not support operations that alter their contents. You can only read and access the data stored in them. This immutability ensures that tuples are a reliable and consistent way to group related values that should not change throughout the program.

#### 2. Length

The `len` function can be used to determine the number of elements in a tuple.

**Example:**
```melon
let tuple = (1,2,3);
let length = len(tuple); // Expected to be 3

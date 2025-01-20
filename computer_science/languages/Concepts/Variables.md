# Identifiers
#### camel casing 
is a naming convention used in programming where the first letter of each word in a compound word is capitalized
- This makes the name more readable and easier to understand 
- there are two type of camel casing 
	1. Lower Camel Case (camelCase)
		- the first letter of the first word is in lowercase, and the first letter of each subsequent word is capitalized
		- e.g. `myVariableName`
	2. Upper Camel Case (PascalCase)
		- The first letter of every word, including the first word, is capitalized
		- e.g. `MyVariableName`

#### Common Naming rules
1. Variable and Function/Method Naming:
	- **Use Descriptive Names:**    
		- Choose names that clearly describe the purpose of the variable, function, or method.
	    - Example: `totalAmount`, `calculateInterest()`.
	- **Camel Case:**
	    - Use lower camel case (`camelCase`) for variable and function/method names.
	    - Example: `firstName`, `calculateTotal()`.
	- **Avoid Single-Letter Names:**
		- Unless in very small contexts like loop counters (`i`, `j`), avoid single-letter names.
	    - Example: Instead of `x`, use `customerName`.

2. Class and Interface Naming:
	 - **Pascal Case:**
	    - Use upper camel case (`PascalCase`) for class and interface names.
	    - Example: `CustomerAccount`, `InvoiceGenerator`.
	- **Nouns for Classes:**    
	    - Classes typically represent entities or objects, so use nouns.
	    - Example: `Car`, `User`.
	- **Adjectives or Nouns for Interfaces:**
	    - Interfaces often describe capabilities, so use adjectives or nouns.
	    - Example: `Runnable`, `Serializable`.

3. Constant Naming:
	- **All Uppercase Letters:**    
	    - Use all uppercase letters with underscores to separate words.
	    - Example: `MAX_SIZE`, `PI_VALUE`.
	- **Descriptive Names:**
	    - Ensure constants are descriptive of what they represent.
	    - Example: `DEFAULT_TIMEOUT`, `MINIMUM_AGE`.

4. File and Directory Naming:
	- **Match Class or Main Content:**    
	    - The file name should generally match the class name or the primary content within the file.
	    - Example: `User.java` for a `User` class, `index.html` for the main HTML file.
	- **Lowercase with Dashes or Underscores:**
	    - For file names that aren't classes, use lowercase letters, and separate words with dashes or underscores.
	    - Example: `user-profile.html`, `user_data.json`.

5. Naming Boolean Variables
	- **Use Prefixes:**
	    - Prefix boolean variables with `is`, `has`, `can`, or `should`.
	    - Example: `isValid`, `hasAccess`, `canEdit`.

6. Function/Method Parameters
	- **Descriptive and Concise:**
	    - Use descriptive names, but keep them concise to indicate the purpose of the parameter.
	    - Example: `calculateInterest(double principal, double rate)`.

7. Abbreviation and Acronym Usage
	- **Avoid Uncommon Abbreviations:**
	    - Avoid abbreviations that may not be universally understood.
	    - Example: Instead of `cnt`, use `count`.
	- **Uppercase Acronyms:**
	    - If using acronyms, capitalize the entire acronym in PascalCase or camelCase.
	    - Example: `parseHTML()`, `HTTPRequest`.

8. Avoiding Reserved Keywords
	- **Don’t Use Language Keywords:**
	    - Avoid using reserved keywords of the language as variable or function names.
	    - Example: Don’t name a variable `class`, `void`, or `int`.

9. Plural Naming for Collections
	- **Plural Form for Collections:**
	    - If a variable holds a collection of items, name it in the plural form.
	    - Example: `customers`, `orderList`.


10. Consistency
	- **Stick to One Style:**
	    - Be consistent with naming conventions throughout your codebase.
	    - Example: If you start with camelCase for variables, use it consistently.

---

# Data Types 

#### Primitive Data Types
These are the basic data types provided by the language
- Integer
- Floating-point
- character
- boolean
#### Composite Data Types
Composite data types are combination of primitive data types
- Array
	- A collection of elements of the same data type
- string
	- represents a sequence of characters
- struct
	- represents a composite data structure in languages like C
#### Abstract Data Types
These are custom data types defined by the user to represent complex data structures 
- class
	- A blueprint for creating objects 
- Interface
	- Defines a contract that classes must follow
#### Enumeration
- represents a set of named values

## Type Casting
#### Explicit Type Casting
- When converting from one type to another, explicit casting is often required, especially when there's potential data loss
- e.g. `int x = (int) 3.14;`
#### Implicit Type Casting
- Some conversions happen automatically, like from `int` to `float`
- e.g. `float y = 10; //implicitely casted to 10.0`

## Type Checking and Safety
#### Static Typing
- The type of a variable is known at compile-time.
- Example: `int count = 5;` (C++, Java)
#### Dynamic Typing    
- The type of a variable is known at runtime.
- Example: `count = 5` (Python, JavaScript)
#### Strong Typing 
- Prevents operations on incompatible types without explicit conversion.
- Example: You cannot add an `int` and a `String` without converting.
#### Weak Typing
- Allows more flexibility in mixing types.
- Example: JavaScript allows `5 + '5'` resulting in `'55'`.

### **Type Naming in Different Contexts:**
#### Classes and Structs
- *Convention* : Use PascalCase.
- Example
	- `class DataManager { ... }`
	- `struct Point3D { ... }`
- *Rationale* : These represent custom data types or blueprints for objects, so they should be easily identifiable.
#### Enums
- *Convention* : Use PascalCase for the enum name, and usually PascalCase or SCREAMING_SNAKE_CASE for its members.
- Example
	- `enum Status { Active, Inactive, Pending }`
	- `enum ErrorCode { FILE_NOT_FOUND, ACCESS_DENIED }`
- *Rationale* : Enums define a set of named values, so their names should be clear and distinguishable.
#### Interfaces
- *Convention* : Use PascalCase, often prefixed with an "I" in some languages like C#.
- Example
	- `interface IDrivable { void Drive(); }`
- *Rationale* : The "I" prefix is not mandatory but is common in languages like C# to denote that the type is an interface.
#### Primitive Types
- *Convention* : Generally, use lowercase, if multiple words are there, use camel case.
- Example
	- `int age;`
	- `float temperature;`
- *Rationale* : These are fundamental types provided by the language itself and are usually written in lowercase to differentiate from user-defined types.
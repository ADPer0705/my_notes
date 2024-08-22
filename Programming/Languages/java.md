 Developed by Sun Microsystems in 1995, Java is a highly popular, object-oriented programming language. This platform independent programming language is utilized for Android development, web development, artificial intelligence, cloud applications, and much more.
- Developed by James Gosling in May 1995 at sun Microsystems and was later acquired by Oracle Corporation

OOPS in Java refers to Object-Oriented Programming concepts implemented in the Java programming language. Java’s OOP features include classes, objects, inheritance, polymorphism, and encapsulation, enabling modular and efficient code development. Understanding OOPS in Java is essential for building robust, scalable, and maintainable software applications.

- class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible
- It is intended for WORA (Write Once Run Anywhere)
	- Java application are compiled to byte code that can run on any Java Virtual Machine
- Java was designed with core principles : 
	- simplicity
	- robustness 
	- security
	- high performance
	- portability
	- multi-threading
	- dynamic interpretation 
	These principles have made java a preferred 

---
source files in java end with the extension `.java` 
compiled bytecodes ends with the extension `.class`

every program in java (`.java`) starts with a 

A program in java starts with a class declaration
- In every java source file you can have *1 top level public class*
- this class has to match the name of the source file 
	- When we compile Java source code, the compiler generates separate bytecode files for each class. To avoid confusion about where to start executing the program, there is a convention in Java that the source file must contain one `public` class with the same name as the source file. This class's bytecode will have the same name as the source file, with a `.class` extension, and the program execution will start from the `main` method within this class.


> [!NOTE] 
> Java is a case sensitive language, and here uppercase is used in keywords and other places

the following is the main function declaration : 
```java
public static void main (String[] args)
```
- since the '`main`' method is the entry point of the application, it must be accessible to the java runtime environment, which is outside the class
- The '`static`' keyword means that this method belongs to the class, not to any specific instance of the class. The runtime can call this method without creating an instance of the class, which is crucial because the '`main`' method is the starting point of the program, and there might not be any object created yet
- The `main` method serves as the starting point and does not need to return anything to the java runtime environment, hence the return type `void`
- `String[]` indicates that the method accepts an array of `String` objects as a parameter.
	- `args` is the name of the parameter (you can name it anything you like, but `args` is conventional).
	- This array is used to hold any command-line arguments passed to the application when it is executed.
	- For example, if you run the program with `java MyClass Hello World`, then `args` will be an array containing `["Hello", "World"]` 

---

# Variables
declaring and assigning values to the variables is the same as C, C++

```java
int age;
age = 19;
```
or 
```java
int age = 19;
```

> [!NOTE]
> an uninitialized value cannot be used in java

while printing the variables, dynamic values can be inserted in-between sentences as follows :
```java
System.out.println("I am " + age + " years old.");
```
the code in between a set of curly braces, of say either a class or a method, is know as a *block of code*. 


> [!NOTE] 
> To use a class variable in the main method, it has to be static

whenever a variable is declared in the class level, the java compiler assigns a default value to the variable, 
- 0 for numbers

variable identifiers : 
- no blank spaces
- alphabets, number, `_` or `$`
- cannot start with numbers, only starts with alphabets, `_` or `$`
- cannot be a keyword 

camel casing is to be followed as a convention when naming variables with multi word identifiers


---


| Primitive Data Type | Wrapper Class |
| ------------------- | ------------- |
| char                | Character     |
| byte                | Byte          |
| short               | Short         |
| long                | Integer       |
| float               | Float         |
| double              | Double        |
| boolean             | Boolean       |
**NOTE** : `boolean` is the keyword here, not bool


Java was developed by James Gosling in the early 1990s

Developed by Sun Microsystems in 1995, Java is a highly popular, object-oriented programming language. This platform independent programming language is utilized for Android development, web development, artificial intelligence, cloud applications, and much more.
- Developed by James Gosling in May 1995 at sun Microsystems and was later acquired by Oracle Corporation

OOPS in Java refers to Object-Oriented Programming concepts implemented in the Java programming language. Java’s OOP features include classes, objects, inheritance, polymorphism, and encapsulation, enabling modular and efficient code development. Understanding OOPS in Java is essential for building robust, scalable, and maintainable software applications.

- class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible
- It is intended for WORA (Write Once Run Anywhere)
	- Java application are compiled to byte code that can run on any Java Virtual Machine
- Java was designed with core principles : 
	- simplicity
		- java's syntax is easy to learn, especially for those familiar with C or C++
		- It eliminates complex features like pointers and multiple inheritances, making it easier to write, debug, and maintain code
	- robustness 
		- Java language is robust, which means it it reliable
		- It is developed in such a way that it puts a lot of efforts into checking errors as early as possible
		- That's why java's compiler is able to detect even those errors that are not easy to detect by another programming language
		- The main feature of java that makes it robust are 
			- garbage collection
			- exception handling 
			- memory allocation
	- security
		- In java, we don't have pointers,
			- hence we cannot access out-of-bound arrays i.e. it shows `ArrayIndexOutOfBound` Exception if we try to do so
			- This is why several security flaws like stack corruption or buffer overflow are impossible to exploit in java
		- Also, java programs run in an environment that is independent of the OS environment which makes java programs more secure
	- distributed
		- We can create distributed applications using the java programming language
		- *Remote Method Invocation* and Enterprise Java Beans are used for creating distributed applications in java
		- The java programs can easily be distributed on one or more systems that are connected through an internet connection
	- high performance
		- Java architecture is defined in such a way that it reduces overhead during the runtime and at some times java uses *Just-in-Time Compiler (JIT)* where the compiler compiles code on-demand basis where it only compiles those methods that are called making application to execute faster 
	- portability
		- The platform-independent feature of java in which its bytecode can be taken to any platform for execution makes java portable 
		- WORA makes java application to generate a `.class` file that corresponds to out application but contains code in binary format 
		- It provides ease though architecture-neutral design as bytecode is not dependent on any machine architecture
		- It is the primary reason java is used in the enterprising IT industry globally worldwide 
	- multi-threading
		- Java supports multi-threading, enabling concurrent execution of multiple parts of a program 
		- This feature is particularly useful for applications that require high performance such as games and real-time simulations
	- dynamic interpretation 


- **Java is a simple language:** 
	- Java is easy to learn and its syntax is clear and concise. 
	- It is based on C++ (so it is easier for programmers who know C++). 
	- Java has removed many confusing and rarely-used features e.g. explicit pointers, operator overloading, etc. 
	- Java also takes care of memory management and it also provides an automatic garbage collector. This collects the unused objects automatically.
- **Java is a platform-independent language:** 
	- The programs written in Java language, after compilation, are converted into an intermediate level language called the **bytecode** which is a part of the Java platform irrespective of the machine on which the programs run. 
	- This makes java highly portable as its bytecodes can be run on any machine by an interpreter called the Java Virtual Machine(JVM) and thus java provides ‘reusability of code’.
- **Java is an object-oriented programming language:** 
	- OOP makes the complete program simpler by dividing it into a number of objects. 
	- The objects can be used as a bridge to have data flow from one function to another. We can easily modify data and function’s as per the requirements of the program.
- **Java is a robust language:** 
	- Java programs must be reliable because they are used in both consumer and mission-critical applications, ranging from Blu-ray players to navigation systems.
- **Java is a multithreaded language:** 
	- Java can perform many tasks at once by defining multiple threads. 
		- For example, a program that manages a Graphical User Interface (GUI) while waiting for input from a network connection uses another thread to perform and wait’s instead of using the default GUI thread for both tasks. 
		- This keeps the GUI responsive.
- **Java programs can create applets:** 
	- Applets are programs that run in web browsers. 
	- But applets support was deprecated in **Java 9** release and **has been removed in Java 11** release due to waning browser support for the Java plugin.
- **Java does not require any preprocessor:** 
	- It does not require inclusion of header files for creating a Java application.

### Essential Java Terminologies
- `Java Virtual Machine (JVM)`
	- responsible for executing java bytecode
	- It ensures that the output of java program is consistent across different platforms
	- Every OS has a different JVM but the output they produce after the execution of the bytecode is the same across all the OS
	- This is why java is know as platform independent language
- `bytecode`
	- Bytecode is the intermediate representation of java code, generated by the java compiler
	- It is platform-independent and can be executed by the JVM
- `Java Development Kit`
	- aka JDK
	- It is the complete java development kit that includes everything including compiler, JRE, Java debuggers, java docs, etc
	- For the program to execute in java, we need to install JDK on our computer in order to create  and run the java program 
- `Java Runtime Environment`
	- JDK includes JRE
	- JRE installation on our computers allows the java program to run, however we cannot compile it using JRE
	- JRE includes a browser, JVM, applet support, and plugins
- `garbage collector`
	- in java, programmers cannot delete the objects
	- To delete or recollect that memory JVM has a program called Garbage collector
	- Garbage collectors can recollect the objects that are not referenced 
	- This way java make the life of a programmer easy by handling memory management
	- However, programmers should be careful about their code whether they are using objects that have been used for a long time. Because Garbage cannot recover the memory of objects being referenced
- `class paths`
	- It is the file path where the java compiler and the java runtime look for `.class` files to load
	- by default JDK provides many libraries. If you want to include external libraries they should be added to the classpath

> [!NOTE] 
> Basically everything in java is represented in class as an object including the main function


![[History-of-Java.jpg | 650]]

---


# C++ vs Java

| TOPIC                | C++                                                           | Java                                                               |
| -------------------- | ------------------------------------------------------------- | ------------------------------------------------------------------ |
| Memory Management    | Use of pointers, structures, union                            | No use of pointers. Supports references, thread and interfaces.    |
| Libraries            | Comparatively available with low-level functionalities        | Wide range of classes for various high-level services              |
| Multiple Inheritance | Provide both single and multiple inheritance.                 | Multiple inheritances is partially done through interfaces         |
| Operator Overloading | Supports operator overloading                                 | It doesn’t support this feature                                    |
| Program Handling     | Functions and variables can reside outside classes.           | Functions and variables reside only in classes, packages are used. |
| Portability          | Platform dependent, must be recompiled for different platform | Platform independent, byte code generated works on every OS.       |
| Thread Support       | No built-in support for threads, depends on libraries.        | It has built-in thread support.                                    |

# Python vs Java
| TOPIC                | Java                                                                                                           | Python                                                      |
| -------------------- | -------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------- |
| Compilation process  | Java is both compiled and interpreted language, which is first compiled and then interpreted into a byte code. | Python is an interpreted programming language               |
| Code Length          | Longer lines of code as compared to python.                                                                    | 3-5 times shorter than equivalent Java programs.            |
| Syntax Complexity    | Define particular block by curly braces, end statements by ;                                                   | No need of semi colons and curly braces, uses indentation   |
| Ease of typing       | Strongly typed, need to define the exact datatype of variables                                                 | Dynamic, no need to define the exact datatype of variables. |
| Speed of execution   | Java is much faster than python in terms of speed.                                                             | Expected to run slower than Java programs                   |
| Multiple Inheritance | Multiple inheritance is partially done through interfaces                                                      | Provide both single and multiple inheritance                |

---

# JDK
# JVM Architecture
# JIT Compiler

## Differences between JDK, JRE, and JVM
## Differences between JIT ans JVM
## Differences between Bytecode and Machine Code

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
	- `String` is a class
	- `args` is the name of the parameter (you can name it anything you like, but `args` is conventional).
	- This array is used to hold any command-line arguments passed to the application when it is executed.
	- For example, if you run the program with `java MyClass Hello World`, then `args` will be an array containing `["Hello", "World"]` 

---

# Syntax
1. *Comments in Java*
	- There are three types of comments in java
		i. Single Line comments
		```java
		// System.out.println("This is a comment");
		```
		ii. Multi Line Comment
		```java
		/* 
			System.out.println("This is the first line comment");
			System.out.println("This is the second line comment");
		*/
		```
		iii. Documentation Comment, also called a *doc comment*
		```java
		/** documentation */
		```
2. *Source File Name*
	- The name of the source file should exactly match the public class name with the extension of `.java` 
	- The name of the file can be a different name if it does not have any public class
3. *Case Sensitivity*
	- Java is a case-sensitive language
4. *Class Names*
	- Pascal Case
	- underscore are allowed but discourages
	- numbers and `$` are also allowed, although `$` is also discouraged because they are used for a special purpose (for inner and anonymous classes)
5. `public static void main(String [] args)`
	- The method main() is the main entry point into a Java program; this is where the processing starts. Also allowed is the signature `public static void main(String… args)`
6. *Method Names*
	- Camel Case
7. *Identifiers*
	- Identifiers are the names of local variables, instance and class variables, and labels, but also the names for classes, packages, modules and methods. 
		- All Unicode characters are valid, not just the ASCII subset.
		i. All identifiers can begin with a letter, a currency symbol or an underscore ( `_` ). According to the convention, a letter should be lower case for variables.
		
		ii. The first character of identifiers can be followed by any combination of letters, digits, currency symbols and the underscore. The underscore is not recommended for the names of variables. Constants (static final attributes and enums) should be in all Uppercase letters.
		
		iii. Most importantly identifiers are case-sensitive.

		iv. A keyword cannot be used as an identifier since it is a reserved word and has some special meaning.
8. *White Spaces in Java*
		- A line containing only white spaces, possibly with the comment, is known as a blank line, and the Java compiler totally ignores it.
9. *Access Modifiers*
	- These modifiers control the scope of class and methods.
		- Access Modifiers :  default, public, protected, private.
		- Non-access Modifiers :  final, abstract, static, transient, synchronized, volatile, native.

| Access Modifier | Within Class | Within Package | Outside Package by subclass only | Outside Package |
| --------------- | ------------ | -------------- | -------------------------------- | --------------- |
| Private         | Yes          | No             | No                               | No              |
| Default         | Yes          | Yes            | No                               | No              |
| Protected       | Yes          | Yes            | Yes                              | No              |
| Public          | Yes          | Yes            | Yes                              | Yes             |

---

# Data Types
Java is statically typed and also a strongly typed language because, in Java, each type of data (such as integer, character, hexadecimal, packed decimal, and so forth) is predefined as part of the programming language and all constants or variables defined for a given program must be described with one of the Java data types.

### Data Types in Java
****Data types in Java**** are of different sizes and values that can be stored in the variable that is made as per convenience and circumstances to cover up all test cases. Java has two categories in which data types are segregated
1. Primitive Data Type : 
	- such as boolean, char, int, short, byte, long, float, and double
2. Non-Primitive Data Type or Object Data type or Reference Data Types : 
	- such as String, Array, etc.

| Type    | Description             | Default | Size    | Example Literals                            | Range of values                                                       |
| ------- | ----------------------- | ------- | ------- | ------------------------------------------- | --------------------------------------------------------------------- |
| boolean | true or false           | false   | 8 bits  | true, false                                 | true, false                                                           |
| byte    | twos-complement integer | 0       | 8 bits  | (none)                                      | -128 to 127                                                           |
| char    | Unicode character       | \u0000  | 16 bits | ‘a’, ‘\u0041’, ‘\101’, ‘\\’, ‘\’, ‘\n’, ‘β’ | characters representation of ASCII values<br><br>0 to 255             |
| short   | twos-complement integer | 0       | 16 bits | (none)                                      | -32,768 to 32,767                                                     |
| int     | twos-complement intger  | 0       | 32 bits | -2,-1,0,1,2                                 | -2,147,483,648<br><br>to<br><br>2,147,483,647                         |
| long    | twos-complement integer | 0       | 64 bits | -2L,-1L,0L,1L,2L                            | -9,223,372,036,854,775,808<br><br>to<br><br>9,223,372,036,854,775,807 |
| float   | IEEE 754 floating point | 0.0     | 32 bits | 1.23e100f , -1.23e-100f , .3f ,3.14F        | upto 7 decimal digits                                                 |
| double  | IEEE 754 floating point | 0.0     | 64 bits | 1.23456e300d , -123456e-300d , 1e1d         | upto 16 decimal digits                                                |

1. Strings
	- Strings are defined as an array of characters. 
	- The difference between a character array and a string in Java is, that the string is designed to hold a sequence of characters in a single variable whereas, a character array is a collection of separate char-type entities. 
	- Unlike C/C++, Java strings are not terminated with a null character.\
	Syntax : Declaring a string
```java
<String_Type> <string_variable> = “<sequence_of_string>”;

// Declare String without using new operator   
String s = "GeeksforGeeks";   
// Declare String using new operator   
String s1 = new String("GeeksforGeeks"); 
```
2. Class
	- A [class](https://www.geeksforgeeks.org/classes-objects-java/) is a user-defined blueprint or prototype from which objects are created.
	- It represents the set of properties or methods that are common to all objects of one type. 
	- In general, class declarations can include these components, in order:
		1. Modifiers : A class can be public or has default access
		2. Class name : The name should begin with an initial letter (capitalized by convention).
		3. Superclass(if any) : The name of the class’s parent (superclass), if any, preceded by the keyword extends. A class can only extend (subclass) one parent.
		4. Interfaces(if any) :  A comma-separated list of interfaces implemented by the class, if any, preceded by the keyword implements. A class can implement more than one interface.
		5. Body :  The class body is surrounded by braces, { }.

3. Object
	- An Object is a basic unit of Object-Oriented Programming and represents real-life entities.  
	- A typical Java program creates many objects, which as you know, interact by invoking methods. 
	- An object consists of :
		1. *State* : It is represented by the attributes of an object. It also reflects the properties of an object.
		2. *Behavior* : It is represented by the methods of an object. It also reflects the response of an object to other objects.
		3. *Identity* : It gives a unique name to an object and enables one object to interact with other objects.

4. Interface
	- Like a class, an interface can have methods and variables, but the methods declared in an interface are by default abstract (only method signature, no body).
	- Interfaces specify what a class must do and not how. It is the blueprint of the class.
	- An Interface is about capabilities like a Player may be an interface and any class implementing Player must be able to (or must implement) move(). So it specifies a set of methods that the class has to implement.
	- If a class implements an interface and does not provide method bodies for all functions specified in the interface, then the class must be declared abstract.
	- A Java library example is *Comparator Interface* . If a class implements this interface, then it can be used to sort a collection.

5. Array
	- An Array is a group of like-typed variables that are referred to by a common name. Arrays in Java work differently than they do in C/C++.
	- In Java, all arrays are dynamically allocated. 
	- Since arrays are objects in Java, we can find their length using member length. This is different from C/C++ where we find length using size.
	- A Java array variable can also be declared like other variables with [] after the data type.
	- The variables in the array are ordered and each has an index beginning with 0.
	- Java array can also be used as a static field, a local variable, or a method parameter.
	- The size of an array must be specified by an int value and not long or short.
	- The direct superclass of an array type is Object.
	- Every array type implements the interfaces [Cloneable](https://www.geeksforgeeks.org/marker-interface-java/) and [java.io.Serializable](https://www.geeksforgeeks.org/serialization-in-java/) .



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

---

# Parag Sir

java is case sensitive
1. Every java classes are written in pascal case
2. Every java methods are written in camel case
3. Every keywords in java are written in small case only
	- example int, float, etc
4. Every package name always written in small case only
	e.g. `java.util.*`; `nfsu.btech.sem3`
5. Every constant is written in UPPER_CASE only

oracle java doc provides you every class information

```java
String[] args
String args[]
```
The above both are equal, but 
first one has an object args of the data type Array of Strings
second one has an object array named args of the data type String

```java 
int[] a3[]; //here a3 is a two dimensional array
```

Running a java class file from another directory
```terminal
java -cp <path-to-class> <class-file-name>
```
setting the class path 
```
set classpath=/home/adper/Local/java_github/paragSir/demo;.
```
`;.` why ?? => 
setting the environment variables in windows 
in windows class path can also be set from the environment variables

command prompt itself is a DOS OS ??
hence the variables are set temporarily

Misconception : Name of the file and name of the class must be same
only the name of the public class is required to be the same as that of the file

A single java class can have multiple mains

for each in java
```java
for (String name : args) {
	System.out.println(name);
} // will print every string in the array args 
```

There is no manual operator overloading
by default there is some, e.g. concatenation of strings using +

narrowing conversion 
- casting from supertype to subtype

how to round up in binary ??

Scanner => runtime arguments

`printf();` is also supported

properties and methods

```java
int arr[] = new 
```
This is a dynamic array `int arr[]` hence the size is not passed 
In C/C++ it was a static array hence the size was required to be mentioned

Members of class
1. Instance variable
	- aka non static variable
2. class variable
	- aka static variable
3. instance variable
	- non static method
4. class method
	- static method
5. initializer block
	- non static block
6. class initializer block
	- static block
7. constructor

in long, l is required if and only if the value is larger than integer 

if `this.` is not used, the variable considered is the local variable that is passes as the arguments

initialized block is called just before the invocation of the object, first it then the constructor will be called, and constructor overloading will be performed on top of this, this will be executed no matter what

static variable - it is preloaded but will not be invoked until and unless you call them
static method - it is preloaded but will not be invoked until and unless you call them
static block will be called first whenever class is loaded

instance variable
instance method
non-static block 

constructor

---

final 
- variables
- methods
	- cannot be overwritten 
- class
	- cannot make a child class of the class


---

all the members of interface are public, static and 
interface variables are final by default
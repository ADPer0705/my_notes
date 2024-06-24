external links : 
- [# C++ Programming Course - Beginner to Advanced](https://youtu.be/8jLOx1hD3_o?si=FFfkS8S8ePY1nu4I) freecodecamp.org
- My projects :
	- [NFSU](C:\Users\ADMIN\Desktop\files\NFSU\Sem_2\C++\cpp_prac) 
	- [Personal](F:\My_Projects\C++) 
- [My GitHub](https://github.com/ADPer0705/My_C-_Learning_Journey.git)  
- My [OOP](Object_Oriented_Programming) notes

---
# What is C++ ?
- C++ is an object-oriented programming language 
- developed by Bjarne Stroustrup at AT&T Bell laboratories in Murray Hill, New Jersey, USA
- Stoustrup wanted to combine the best of both *Simula67* and *C*, and create a more powerful programming language that supports object oriented programming and still retained the power and elegance of C. Therefore C++ is an extension of C with a major addition of the class construct feature of Simula67, and it was initially called *C with classes*
- C++ is a super-set of C, and hence, in a way, all C programs are C++ programs. However, there are a few minor differences that will prevent a C program to run under C++ compiler
- The C language transformed from a top-down structured design providing language to C++, a bottom-up object-oriented language 

---
# Application of C++
It is a versatile language for handling very large programs and is suitable for performing virtually any programming task, including development of editor, compilers, databases, communication systems and any complex real-life application systems 

- Since C++  allows us to create hierarchy related objects, we can build special object-oriented libraries which can be used later by many programmers 
- While C++ is able to map the real world problems properly, the C part of C++ gives the language the ability to get close to the machine-level details
- C++ programs are easily maintainable and expandable. When a new feature need to be implemented, it is very easy to add to the existing structure of an object 

---
# A Simple C++ Program
## Program Features 
very similar to C
- execution starts at `main()`
- statements end with `;`

## Output Operator 
```
cout << "C++ is better than C." ;
```
The identified `cout` is a predefined object that represents the standard output stream in C++, which in many cases is the screen

The operator `<<` is called the *insertion operator* or the *put to* operator. It inserts (or sends ) the contents of the variable on its right to the object on its left

![[20240317_153828.jpg]]


## The `iostream` file
A C++ program generally contains a preprocessor directive statement at the beginning. Such statements are preceeded with the `#` symbol, which tells the compiler to let the directive be handled by the preprocessor 

some older version of C++ use `iostream.h` , if the compiler do not support ANSI C++ features. It is to be noted that the naming conventions of the header files may vary (e.g. `iostream.hpp` or `iostream.hxx`). We must include the appropriate header file depending upon the contents of the program and the implementation 

![[20240317_154750.jpg]]![[20240317_154756.jpg]]
These are the commonly used old style header files 
Below given are the new header files included in ANSI C++
![[20240317_155137.jpg]]

Apart from the `#include`, the other preprocessor directives such as `#define`, `#error`, etc. work the same as they would in C but their usage is quite limited due to the availability of other means for achieving the same functionality 

## Namespace
*Namespace* is a new concept introduced by ANSI C++ Standards committee. This *defines a scope* for the identifiers that are used in the program. For using the identifiers in the **namespace** scope, we must include the `using` directive
```
using namespace std;
```
`std` is the namespace where ANSI C++ Standard Class libraries are defined, including this directive will bring all the identifiers defined in `std` to the current global scope

## Return type of `main()`
In C++ `main()` returns an integer type value to the operating system, therefore every main function must end with a `return 0;` statement, otherwise a warning or an error may occur. The int return type is to be explicitly mentioned. It is to be noted that the default return type of all the function in C++ is int

## Input Operator
```
cin >> num1;
```
`cin` is a predefined object in C++ that corresponds to the standard input stream
`>>` is the *extraction* or the *get from* operator

![[Screenshot from 2024-04-07 19-38-06.png]]

## Cascading of I/O Operations
Using multiple `<<` or `>>` in one statement is called *cascading*,

# Structure of a C++ Pragram

![[Screenshot from 2024-04-07 19-46-33.png]]

A typical
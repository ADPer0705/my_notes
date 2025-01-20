![[20240317_135427.jpg]]The following are the resources for the content included in this note
- Object Oriented Programming with C++
	- The [C++](main().md) part is here 


---
# Principles of Object Oriented Programming
## Software Crisis
The rapid advances in the software industry, becoming more and more critical in view of the increasing complexity of software system as well as the highly competitive nature of the industry, have created a situation of crisis within the industry. The following issues need to be addressed to face the crisis :
- How to represent the real-life entities of problem in system design ? 
- How to design system with open interface ?
- How to ensure reusability and extensibility of modules ?
- How to develop modules that are tolerant to any changes in the future ?
- How to improve software productivity and decrease software cost ?
- How to improve the quality of the software ?
- How to manage time schedule ?
- How to industrialize the software development process ?

The software industry had  remarkably bad record in delivering products, many of which are wither not finished, or not used, or else are delivered with major errors. A miniscule percentage of products were used as they were delivered, without being subject to any change

Some of the quality issues that must be considered for critical evaluation are 
1. Correctness
2. Maintainability 
3. Reusability 
4. Openness and Interoperability 
5. Portability 
6. Security 
7. Integrity 
8. User friendliness

## Software Evolution 
Ernest Tello compared the evolution of software technology to the growth of a tree. Like a tree, the software evolution has distinct phases or layers, which were built up one by one over the last few decades. However, this analogy fails when considering the life of these layers, coz unlike trees where only the outermost layer is functional, each of the layers in software systems continues to be functional.
![[LayersOfAComputerSoftware.jpg | center | 500]] 

Alan Kay, one of the promoters of the Object-oriented paradigm and the principle designer of [smalltalk](https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwjn5aTe88OEAxUmTWwGHRaUBb4QFnoECA8QAw&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FSmalltalk%23%3A~%3Atext%3DSmalltalk%2520was%2520one%2520of%2520many%2Cothers%25E2%2580%2594were%2520influenced%2520by%2520Smalltalk.&usg=AOvVaw1Ir0ORu1fiKd_21r1jiLeR&opi=89978449) has said, "As complexity increases, architecture dominates the basic material".  To build today's complex software, it is just not enough to put together a sequence of programming statements and sets of procedures and modules, we need to incorporate sound construction techniques and program structures that are easy to comprehend, implement and modify.

Since the dawn of the computer many programming approaches have been tried, which includes
- modular programming 
- top-down programming 
- bottom-up programming 
- structured programming
The primary motivation for each being the concern to handle the increasing complexity of programs that are reliable and maintainable 

With the advent of languages such as C, structured programming became popular and was the main technique 1980's. It was a powerful tool for writing moderately complex programs fairly easily, but as the programs grew larger, it failed to show the desires result in terms of bug-free, easy-to-maintain and reusable programming.

*Object Oriented Programming (OOP)* is an approach to program organisation and development that attempts to eliminate some of the pitfalls of conventional programming methods by incorporating the best of the structured programming features with several powerful new concepts. It is a new way of organizing and developing programs and has nothing to do with any particular language. However not all languages are suitable to implement OOP concepts easily.

## A Look At Procedure Oriented Programming 
conventional programming using high level languages such as COBOL, FORTRAN, and C, is commonly known as Procedure Oriented Programming (POP). In this approach the problem is viewed as a sequence of things to be done, and a number of functions are written to accomplish this tasks. *The primary focus is on FUNCTIONS*. 
![[Aspose.Words.9f55ad87-8d5b-43f7-9606-2a129e5cafcb.003.jpeg | center | 500]]
POP basically consists of writing a list of instructions for the computer to follow, and organizing these instructions into groups known as *functions*. We normally use a *flowchart* to organize these actions and represent the flow of control from one action to another. While we focus on the development of function very little attention is given to the data being used by various functions.

In a multifunctional program, there is global data and there is local data, which is local with respect to a particular function. Global data is more vulnerable to an inadvertent change by a function. In a very large program it is difficult to identify what what data is used by which function. revising the external data structure need revising a huge chunk of the total number of functions, which allows for the bugs to creep in.
![[FuncData.jpg | center ]]


# Object Oriented Programming Paradigm
The major factor in the invention of OOP is to remove some of the flaws encountered in the procedural approach. OOP treats data as a critical element in the program development and does not allow it to flow freely around the system. It ties data to the function that can operate on it and prevents accidental modification from outside functions. OOP allows decomposition of a problem around a number of entities called *Objects* and then builds data and functions around these objects.

Some of the striking features of OOP are :
- Emphasis is on data rather than procedure
- Programs are divided into what are known as objects 
- Data structures are designed such that they characterize the objects 
- Functions that operate on the data of an object are tied in the data structure 
- Data is hidden and cannot be accessed by external functions 
- New data and functions can be easily added whenever necessary 
- Follows *bottom-up* approach in programming 


> [!NOTE] 
> Object Oriented Programming is an approach that provides a way of modularizing programs by creating partitioned memory area for both data and functions that can be used as templates for creating copies of such modules on demand.

thus an object is considered to be a partitioned area of computer memory that stores data and set of operations that can access the data. Since the memory partitions are independent, the objects can be used in a variety of different programs without modifications 

---

# Basic Concepts of OOP

- objects
- classes
- Data Abstraction and Encapsulation 
- Inheritance 
- Polymorphism
- Dynamic Binding
- Message Passing

## Objects 
- basic run-time entities in object-oriented systems 
- they may represent a table of data or any item that the program has to handle or represent user-defined data such as vectors, time and lists
- Programming problems are analyzed in the terms of objects and the communication between them 


- when the program is executed the objects interact by sending messages to each other 
- a message can include the request to execute some function which is a part of an object, and might even request to return some information 
- objects can interact without having to know details of each other's data of code, it is sufficient to know the type of message accepted and the type of response returned by the objects. 

![[20240317_135427.jpg]]


## Classes
- the entire set of data and the code in a object can be made a user defined data type, of which the objects are instances of, which is known as a *class*, i.e. objects are variables of data type class
- each object is associated with the data of type class with which they are created. A class is thus a collection of objects of similar type
- classes are user defined data types and behave like built-in data types of a programming language. The syntax used to create an object is no different than the syntax used to create an integer variable 

## Data Abstraction and Encapsulation 
- The wrapping up of data and function in a single *unit (called class)* is known as *Data Encapsulation*
- It is one of the most striking features of oop, where data is not accessible to function other than those which are wrapped in the class. These functions provide the interface between the data and the program
- This insulation of the data from direct access by the program is called *data hiding* or *information hiding*


- *Abstraction* refers to the act of representing essential features *without including the background details* or explanations 
- classes use the concept of abstraction and are defined as a list of abstract attributes and function to operate on those attributes
- The abstract attributes are sometimes called *data members* as they store the data
- The functions to operate on these attributes are called *methods* or *member functions*

*Note* : Since classes use the concept of data abstraction, they are known as *Abstract data types (ADT)*

## Inheritance 
- *Inheritance* is the process by which objects of one class acquire the properties of objects of other class 
- It supports the concept of *hierarchical classification* 
- The principle behind this sort of division is tat each derived class shared common characteristics with the class from which it is derived 

- In oop, the concept of inheritance provides the idea of *reusability*, where we can add additional features to a class without modifying it 

## Polymorphism
- greek term meaning the ability to take more than one form
- Polymorphism takes place in mainly two forms 
	1. Operator Overloading
		- The process of making an operator to exhibit different behaviors in different instances 
	2. Function Overloading
		- Using a single function name to perform different types of tasks
	- 
![[20240317_143022.jpg]]

Polymorphism plays an important role in allowing objects having different internal structure to share the same external interface. This means that a general class of operations my be accessed in the same manner even though specific actions associated with each operation may differ 
- polymorphism is extensively used in implementing inheritance 

## Dynamic Binding
- Binding refers to the *linking of a procedure call to the code to be executed in response to the call*
- *Dynamic Binding (aka Late Binding)* means that the code associated with a given procedure is not known until the time of the call at run-time
- It is associated with polymorphism and inheritance 

## Message Passing
An object oriented program consists of a set of objects that communicates with each other. The process of programming, therefore, in an Object Oriented language follows the following basic steps :
1. Creating class that define objects and their behaviors
2. Creating objects from the class definitions 
3. Establishing communication among the objects 
The concept of message passing makes it easier to talk about building systems that directly model or simulate their real-world counterparts 

- A message for an object is a request for execution of a procedure, and therefore will invoke a function in the receiving object that generates the desired result
- *Message Passing* involves specifying the name of the object, the name of the function and the information to be sent 
---
# Benefits of OOP
OOP offers several benefits to both the programmer and the user. The principle benefits include :
- Through inheritance, we can eliminate redundant code and extend the use of existing classes 
- We can build programs from standard working modules that communicate with each other, rather than having to write the code from scratch
- The principle of data hiding helps the programmer to build secure programs that cannot be invaded by the code in other parts of the program 
- It is possible to have multiple instances of the code running without interference 
- It is possible to map the objects in the problem domain to those in the program 
- It is easy to partition the work in a project based on objects 
- The data-centered design approach enables us to capture more details of a model in implementable form
- Object-Oriented systems can easily be upgraded from small to large systems 
- Message passing techniques for communication between the objects makes the interface descriptions with external systems much simpler 
- Software complexity can be easily managed 

---
# Object-Oriented Languages
Like structured programming, OOP concepts can be implemented using languages such as C and Pascal, however, the programming becomes clumsy and may generate confusion when the programs grow larger 

depending upon the features they support, languages can be classified into the following two categories :
1. Object-Based programming languages
2. Object-Oriented Programming languages 

*Object-Based programming* mainly supports encapsulation and object identity. Major required features include :
- Data encapsulation 
- Data hiding and access mechanisms
- Automatic initialization and clear-up of objects
- operator overloading 
These languages do not support inheritance and dynamic binding 

*Object-Oriented programming* includes all the features of the object-based programming along with some additional features, namely **Inheritance** and **Dynamic Binding** 

![[20240317_150618.jpg]]

---
# Applications of OOP
The most popular application of object-oriented programming, up to now, has been in the area of user interface designs such as windows 

The promising areas for application of OOP include :
- Real-time systems
- Simulation and modelling
- Object-Oriented databases
- Hypertext, hypermedia and expertise 
- AI and expert systems 
- neural networks and parallel programming
- Decision support and office automation systems 
- CIM / CAM / CAD systems
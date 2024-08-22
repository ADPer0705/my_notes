# Static

---

# Constructors
- a method executed when the object is initialized
	- is used to initialize the object's state (attributes) and allocate resources if needed
- Constructors can be overloaded just like other methods 
- It should have the same name as the class 

- even when there is no constructor, the class attributes are initialized to their default values, or in general the object is properly instantiated
	- this occurs with the help of constructor mechanism that exists in the system 
#### Constructor vs Methods 

| **Constructor**                                                       | **Methods**                                                |
| --------------------------------------------------------------------- | ---------------------------------------------------------- |
| Constructor is used to create and initialize an object                | Method is used to execute certain statements               |
| A constructor is invoked implicitly by the system                     | A method is to be invoked during program code              |
| A constructor is invoked when new keyword is used to create an object | A method is invoked when it is called                      |
| A constructor cannot have a return type                               | A method must have a return type                           |
| A constructor must have the same name as that of the class            | A method shouldn't have the same name as that of the class |
| A constructor cannot be overridden in a child class in inheritance    | A method can be overridden in the child class              |


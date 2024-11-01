TO DO : 
- https://docs.python.org/3/tutorial/

---
# Introduction
## What is Python?

- Python is a dynamically typed, general purpose programming language that supports an object-oriented programming approach as well as a functional programming approach.
- Python is an interpreted and a high-level programming language.
- It was created by Guido Van Rossum in 1989.

## Features of Python

- Python is simple and easy to understand.
- It is Interpreted and platform-independent which makes debugging very easy.
- Python is an open-source programming language.
- Python provides very big library support. Some of the popular libraries include NumPy, Tensorflow, Selenium, OpenCV, etc.
- It is possible to integrate other programming languages within python.

## What is Python used for

- Python is used in Data Visualization to create plots and graphical representations.
- Python helps in Data Analytics to analyze and understand raw data for insights and trends.
- It is used in AI and Machine Learning to simulate human behavior and to learn from past data without hard coding.
- It is used to create web applications.
- It can be used to handle databases.
- It is used in business and accounting to perform complex mathematical operations along with quantitative and qualitative analysis.

when we type python in terminal and start interpreting the commands as we give them, the instance, what is created in the compiler is known as a "*repl*", or a read, evaluate, print loop.

---
# Variables

`player_choice = "rock"` => see, no data types

variable name rule are the same as in every other language

# comments
anything after a `#` is a comment 

# Indentations
unlike most other languages, indentation is python is very significant part of the code as using indentation and not some sort of brackets is how we mark a block of code, be it a function, etc.

---
# Data Types
Python automatically assigns data types to variables, no explicit declaration of data types is needed

checking the type of a variable can be done in two ways, consider a variable `name`
1. type function
	- `type(name)` will return the type of the name
	- `isinstance(name, str)` checks if `name` is an instance of a string and returns either `True` or `False`

also, python can implicitly assign the data type or we can do that explicitly if we want to 
we can also go form int to string and so on, consider the following code 
```python 
num = "20"                    # is a string 
print(isinstance(num, int))   # will return False

age = int(number)             # is now an int
print(isinstance(age, int))   # will return True
```
Although, if the string contained alphabets, it would probably have not worked
It should be noted that here the number variable is converted to int then assigned to age, age is still dynamically typed

There are the following data types in python
- `int` for integers
- `float` for floating point numbers
- `complex` for complex numbers
- `bool` for booleans
- `list` for lists
- `tuple` for tuples
- `range` for ranges
- `dict` for dictionaries 
- `set` for sets


### Boolean
it is to be noted that in python, the boolean values are `True` and `False`, notice the capital initials,
if there are numbers, say there is a numeric variable, only `0` is False, rest every number, even negative numbers are True
In case of strings, if the string is empty, it is False, else it is always True, so is the case for lists, tuples and dictionaries 

### Complex Numbers 
following are the ways of declaring a complex numbers
```python
num1 = 2+3j
num = complex(2,3)
```
further we can access the real or the imaginary part as follows
```python
print(num1.real, num2.imag)   # 2.0 3.0 => output
```

## Enums

firstly, import enums
```python
from enum import enum
```
```
class ann(enum):
	INACTIVE = 0
	ACTIVE = 1

print(ann.ACTIVE)         # ann.ACTIVE
print(ann.ACTIVE.value)   # 1
print(ann(1))             # ann.ACTIVE
print(ann['ACTIVE'])      # ann.ACTIVE

```
in python, enum is the only way to assign constants, so it is how constants are declared
also we can list all the values in enum as follows 
```python
print(list(ann))
```
This gives the following output
```python
[<ann.INACTIVE: 0>, <ann.ACTIVE: 1>]
```


---
# Operators

### Assignment Operator 
`=` => assigns values from the right operand to the left operand 

### Mathematical Operators
- `+` => addition
- `-` => subtraction
- `*` => multiplicat
- `/` => division
- `%` => modulo
- `**` => exponents, e.g. `2 ** 4` gives 16
- `//` => floor division, rounds down the answer, or gives the quotient e.g. `5//2` gives 2

*note* : the `-` can also be used to make a number negative or negative to positive 

*note* : the `+` can also be used to concatenate strings

apart from the above, shorthand operators like `+=` are also supported

### Relational Operators
- `==` => is equal to
- `!=` => is not equal to
- `>` & `>=` => is greater than & is greater than or equal to 
- `<` & `<=` => is less than & is less than or equal to 

### Boolean
- `True` 
- `False` 

there are the following operators  that return the boolean values
- `not`
- `and`
- `or`

**note** : `or` returns the first true value,
consider the following piece of code and the returned values are commented,
play close attention to the last two line
```python
print(0 or 1)           # 1
print(False or 'hey')   # 'hey'
print('hi' or 'hey')    # 'hi'
print([] or False)      # 'False'
print(False or [])      # '[]'
```
**note** : `and` evaluates the second operand only if the first one is false 

### Bitwise Operators
- `&` => binary AND
- `|` => binary OR
- `^` => binary XOR
- `~` => binary NOT
- `<<` => binary shift left
- `>>` => binary shift right

### `is` and `in` operatrs

- `is` is called the identity operator
	- used to compare two objects and returns true if both are the same objects
- `in` is called the membership operator 
	- tell is a value is contained in a list of another sequence 

### Ternary Operator 
it is basically the if...else in a single line 
e.g. `return True if age > 18 else False`

### Logical Operators 
`&&` => Logical and 
`|`   => Logical or

---
# Strings
- enclosed with either a single or a double quote 
- can concatenate using `+` sign 
	- consider the following code
```python
"ADPer"
'ADPer'
name = "ADPer"
name += " is my name"

print(name)  ## 'ADPer is my name'
```
- we can convert an integer to a string 
	- `age = str(18)`
- a string can be multi-line as follows 
```python
print("""
Hello World
This is ADPer 
I am 19 years old
""")
``` 
This gives the output in three lines as typed 
- If we want to the string all caps or lower we can do this
```python
print("ADPer".lower())          # adper
print("ADPer".upper())          # ADPER
print("ADPer is great".title()) # Adper Is Great
```
- There is also the following
	- `replace()` => to replace a specific part of the string 
	- `split()` => split the string on a specific character separator 
	- `strip()` => to trim the whitespace from a string 
	- `join()` => to append new letter to a string
	- `find()` => to find the position of a substring 


- we can also check instead of making the string a certain format as follows 
	- `isalpha()` => to check if the string only contains characters and is not empty
	- `isalnum()` => contains characters or digits and is not empty
	- `isdecimal()` => if string contains digits and is not empty
	- `islower()` or `isupper()` => if the string is all lower or upper case respectively
	- `startswith()` => to check if the string starts with a specific substring 

there are many more string operations, also all of these returns a brand new string and does not modify the original string

- `len()` => gives the length of the string
- `'au' in name` => checks if there is the substring 'au' in the string name

- escape sequence is the `\`, type a `\` to type say a single or a double quote in a string 
	- `\n` gives a new line
	- `\\` gives a backslash(`\`) in the string, cause it might think it to be a escape sequence 

- consider the following code 
```python
name = 'ADPer'

print(name[0])   # A
print(name[1])   # D
print(name[2])   # P
print(name[3])   # e
print(name[4])   # r

# below is negative indexing, it starts counting from the end
print(name[-1])   # r
print(name[-2])   # e
print(name[-3])   # P
print(name[-4])   # D
print(name[-5])   # A
# As shown above, keep in mind 0 is postive, there is not -0 so the -1 is the last character 

print(name[1:4])   # DPe => gives the 1,2,3 index characters
print(name[:3])    # ADP => gives everything upto and but not including index 3
print(name[2:])    # Der => gives everything inlcuding and after index 2
 
```


---
# Input and Output

`print("Hello World")`

There are two ways to combine and print strings :
1. `print("You chose : " + player + "computer chose : " + computer)`
2. using an f-string as follows :
	`print(f"You chose {player}, computer chose {computer}.")`
	which is simpler

taking input after printing something looks like this 
`player_choice = input("Enter a choice (rock, paper , scissors) : ")` 
upon running the code, the console will look like :
```python
Enter a choice (rock, paper , scissors) :
```

---
# Control statements
### `if` Statement

#### Simple `if ... :` Statement
```python
a = 3
b = 5

if a == b :
	some code 
	some more code
```
as shown above, we do indentations instead of {}

#### `if ... else :` statements

```python
if age >= 18 :
	print("You are an adult")
else : 
	print("You are a child")
```

#### `elif` ladder

```python
if age >= 18 :
	print("You are an adult")
elif age > 12 : 
	print("You are a teenager")
else : 
	print("You are a child")
```
---
# Lists 
 
```python
options = ["rock", "paper", "scissor"]
computer_choice = random.choice(options)
```
The above code will make a list of `options` and then randomly make a choice from the list using the `random` library

- allows various heterogeneous data types
- allows duplicate elements 
- Lists can be empty
```python
mylist = list()    # creates an empty list
```
- Lists have indexing as arrays 
	- `options[2]` will give `scissors`
	- This can also be used to modify the lists using indexing
	- just as strings, these also support negative indexing
- `len(list_name)` gives the length of the list 
- lists can be concatenated using the `+` operator 

Adding items to the list
- `listname.append(<_ item to be added _>)` => add items to the end of the list 
- `listname.extend( [ <_ add another list to the current list \_> ] )` => add another list at the end
- `listname += []` add a single item or another list 
Removing items
- `listname.remove(item)` 
- `listname.pop( item )` => returns the item removed then removes it 
Adding items in the middle of the list 
- `listname.insert( index , item)` => adds the item at that index and shifts up the indexed after that 
- slicing : `listname[1:1] = ["Test1", "Test2"]` => adds the two items at index 1, 
	- note that the list will contain the items in that order, first `Test1` then `Test2`
Sorting a List
- It is to be noted that in this case, the list should contain all the values of the same king 
- `listname.sort()`
	- In the case of strings, this will first list out all the upper cases and then all the lower cases,
		- suppose the list contains words starting with upper cases, then there is "bob". here bob will be at the end of the list 
		- `list = [ADPer, SteoSumit, Pytech, ann]`
		- The sorted list will be : `list = [ADPer, Pytech, SteoSumit, ann]`
		- TO solve this : `listname.sort(key=str.lower)`, Then the new sorted list would be : `list = [ADPer, ann, Pytech, SteoSumit]`
sorting without modifying 
- copy the list onto another list then sort that
- if we don't want to sort the list, just want to access a sorted version of the list 
	- `print(sorted(items, key=str.lower()))` will print a sorted version of the list `items` and sort it according to `key=str.lower()`
	- we can also assign a sorted version of the list to another list as follows :       `newlist = sorted(listname)`

- `mylist = [0] * 5` will give `[0, 0, 0, 0, 0]`

when we assign a list to a variable, it copies the reference to the list, so ,
```python
x = ["ANAY", "DHAVAL", "PANDYA"]
y = x     # here the reference to the list pointed to by x is also now copied to 
          # y, so x and y refers to the same list

# if we make some changes to y, it'll make changes to x as well
# in order to prevent it, we can do one of the following 
y = list(x)
y = x[:]
# now any changes to y will not be reflected in x
```
```
---
# Tuples
- immutable groups of items
- `names = ("ADPer", "Pytech", "SteoSumit")`
- Indexing is the same
	- `names.index("Pytech")` will return `1`
	- supports negative indexing
- supports slicing : `names[0:2]` will start at index `0` and end at `2`
	- A sorted version can be accessed without the actual tuple being sorted (immutable) as the same as list : `sorted(names)`
- New Tuples can be created as a mix of existing tuples and maybe more items, but still existing tuples cannot be modified
	- `new_tuple = name + ("Tina", "Quincy")`

---
# Dictionaries 
dictionaries in python are used to store key-value pairs 
```python
dict = {"name" : "ADPer", "color" : "Dark dull Blue"}
``` 
as shown above
here, dict is just the name of the dictionary, it can be anything

the value can also be another variable, which then wouldn't be surrounded by `""`, and so on

we can also return dictionaries

```python
choices = {"player" : player_choice, "computer" : computer_choice}
p_choice = choices["player"]
```
above is shown how to get the value of a key

- to add an item to a dictionary 
	- `dictname.update({key : value})`
- The key is immutable value, but the value can be anything 
- To change the value at a specific index 
	- `choice["player"] = "newValue"`
- get method
	- this can help you set a default value 
	- `print(dog.get("color", "brown"))` 
		- it the above code cannot find a color in the dictionary, it'll return brown, otherwise it'll return the color
- Poping items from a dictionary
	- `dog.popitem()` will remove the last "pair" that was in the dictionary after returning it
	- `dog.pop("name")` will remove the "pair" of key name and its value from the dictionary
- we can check if a key value is there in the dictionary
- we can get the length by `len()`

- we can get a list of all the key values as :  `dog.key()`
	- this will return a list
- similarly we can also list out values : `dog.values()`
- `dogs.items()` will return a list as follows : 
	- `[('name', 'Roger'), ('age', 8), ('color', 'green')]` 
	- in the above list, the first item is `('name', 'Roger')`

- `dog["favorite food"] = "Meat"` => this is how you add items to the list
- `del dog["color"]` => deleted the item color from the dictionary

----
# Sets
```python
names = {"Roger", "Syd"}
```
- mutable
- unordered

we can have intersection of two sets as a new set
```python
set1 = {"Roger", "Syd"}
set2 = {"Roger"}

intersect = set1 & set2                    # This will make intersect = {"Roger"}
```
similarly
- `&` => intersection
- `|` => summation of two sets
- `-` => modulo
- `<` => "is a subset of"
	- `set1 < set2` is the statement "set1 is a subset of set2", and will return true and false accordingly
 - `>` => is a superset of

- `list(set1)` will give a list having all the elements of set1
- we can use `in` and `len()` as usual

- we cannot have two items that are the same, i.e. each item is unique

---
# Functions 

```python
def get_choices():
```
in python, we do indentations instead of `{}` 
every line of code that is indented the same amount is in the same function

```python
def check_win(player, computer):
	some code
	some more code
```

Below are a few global function 
- `any()` => returns True if any of the expressions inside the () separated by `,` are True
- `all()` => similar to any but returns true only if all the values are True

- `abs()` => gives the absolute value
- `round()` => rounds to the nearest integer 
	- `round(5.498, 1)` => rounds to number with 1 decimal place and gives `5.5`

- overloading can be done using default arguments
- just as everywhere else, the changes in values are not reflected outside the function
	- **BUT** If you pass an object that is mutable and change one of it's properties, it is reflected outside 
	- e.g. if we pass a dictionary and change the value of on the keys, it will be reflected everywhere the dictionary is defined 
	- mutable : lists, dictionaries, sets 
	- immutable : Booleans, strings, and tuples
- we can return multiple values by separating with commas
- We can nest functions, just maintain the indentations
- there is a special type of data classification called `nonlocal` 

consider the following example of function declaration : 
```python
sorted(iterable, /, *, key=None, reverse=False)
```
here, all the variables before the `/` are passed only by position, and all the variables after `*` must by passed by keywords only

## Closures
A closure in python is a function object that remembers values in enclosing scopes even if they are not present in memory
- It is a record that stores a function together with an environment: a mapping associating each free variable of the function with the value or reference to which the name was bound when the closure was created.
- free variables are variables that are used locally but defined in an enclosing scope
- A closure—unlike a plain function—allows the function to access those captured variables through the closure’s copies of their values or references, even when the function is invoked outside their scope.

We can get to know what variables are stored inside a Closure with the help of the `__closure__` attribute
- `__closure__` attribute makes use of Cell Objects to store the variables of the Outer Function and because of this, the closure can use these variables even when the Outer Function is terminated.
### When and Why to Use Closures

1. As Python closures are used as callback functions, they provide some sort of data hiding. This helps us to reduce the use of global variables.
2. When we have few functions in our code, closures in Python prove to be an efficient way. But if we need to have many functions, then go for class (OOP).
3. We may have variables in the global scope that are not used by many functions at times. Instead of defining variables in global scope, consider using a closure. They can be defined in the outer function and used in the inner function. Python Closures are also useful for avoiding the use of a global scope.
4. A class in the Python programming language always has the __init__ method. If you only have one extra method, an elegant solution would be to use a closure rather than a class. Because this improves code readability and even reduces the programmer’s workload. Closures in Python can thus be used to avoid the needless use of a class.


---
# Objects 
*Everything in python is an object*
objects have 
1. attributes
2. methods,
which can be accessed using the `.` syntax

```python
age = 8
```
above, now age has access to the properties and methods defined for all int objects 
similarly, a variable holding a list value has access to a different set of properties and methods 

some objects are mutable while others are immutable. If the object provides methods to change its contents and values, they're mutable, otherwise they're immutable

most types defined by python are mutable

example, integers are immutable, and say if we increment an int by one, it creates a new object, a new instance altogether and destroys the previous instance
- lists dictionaries and sets are mutable
- booleans, strings and tuples are immutable

---
# Loops 
in python we have two kinds of loops
- while loops
- for loops

## While loops
```python
while count < 10:
	print("The condition is True")
	count++;
```

## For loops
```python
item = [1, 2, 3, 4]

for item in items:
	print(item)
```
```python
for item in range(15):     # gives a list of number 0 to 14
	print(item)
```
```python
items = [1, 4, 9, 16]

for index, item in enumerate(items):
	print(index, item)

# enumerate returns first the index then the item, hence it'll print first the index of the item, then the item itself
#The following is the output
# 0 1 
# 1 4
# 2 9
# 3 16
```

## Break and Continue
- Break terminates the loops and carries on with the code after the loop
- Continue skips the current iteration and carry on with the next iteration of the same loop

---
# Classes
from the classes we can instantiate an object 

```python
class dog:
	def bark(self)
		print("woof")

roger = dog()       # Instantiating the class object

print(type(roger))  # will return <class '__main__.dog'>
```
Self represents the instance of the class. By using the “self”  we can access the attributes and methods of the class in [Python](https://www.geeksforgeeks.org/python-programming-language/). It binds the attributes with the given arguments. The reason you need to use self. is because Python does not use the @ syntax to refer to instance attributes. [Python](https://www.geeksforgeeks.org/python-programming-language/) decided to do methods in a way that makes the instance to which the method belongs be passed automatically, but not received automatically: the first parameter of methods is the instance the method is called on.

#### What is the use of self in Python?

When working with classes in Python, the term “self” refers to the instance of the class that is currently being used. It is customary to use “self” as the first parameter in instance methods of a class. Whenever you call a method of an object created from a [class](https://www.geeksforgeeks.org/python-classes-and-objects/), the object is automatically passed as the first argument using the “self” parameter. This enables you to modify the object’s properties and execute tasks unique to that particular instance.

## Constructor : `__init__`
```python
class dog:
	def __init__(self, name, age)    # we need to pass two values when creating 
		self.name = name
		self.age = age

	def bark(self)
		print("woof!")

roger = dog(Roger, 8)       # Instantiating the class object

print(roger.name)   # Roger
print(roger.age)    # 8

roger.bark          # woof!

```

## Inheritance

```python
class animal:
	def walk:
		print("walking....")

class dog(animal):                   # we inherited dog from class animal 
	def __init__(self, name, age)    # we need to pass two values when creating 
		self.name = name
		self.age = age

	def bark(self):
		print("woof!")

roger = dog(Roger, 8)       # Instantiating the class object

print(roger.name)   # Roger
print(roger.age)    # 8

roger.bark          # woof!
```

---
# Modules
**Python Module** is a file that contains built-in functions, classes,**its** and variables. There are many **Python modules**, each with its specific work.

A [Python](https://www.geeksforgeeks.org/python-programming-language/) module is a file containing Python definitions and statements. A module can define functions, classes, and variables. A module can also include runnable code.

Grouping related code into a module makes the code easier to understand and use. It also makes the code logically organized.

*Every Python File is a module*

In a typical python program, one file acts as entry points and the other files are modules and exposed functions that can be called from other files 

consider the python code :
```python
def bark():
	print("woof!")
```
now consider the above code is stored in a file `dog.py`,
now we can call bark from another file `main.py` as follows
```python
import dog

dog.bark
```
upon running the `main.py`, `woof!` would be printed

apart from that we can also call the function directly as follows 
```python
from dog import bark

bark()
```
This strategy imports only the bark function, and we can import only the specific functions we need, and we can then call them directly
also the importing depends on the location of the module in the file system
consider a subfolder `lib` contains the modules to be used, say `dog.py`
first we need to add the file `__init__.py` to the sub-folder to tell that it contains python modules, then we can import the dog as 
```python
from lib import dog

dog.bark()
```
or we can 
```python
from lib.dog import bark

bark()
```
common python utilities 
- `math` for math utilities
- `re` for regular expressions
- `json` to work with JSON
- `datetime` to work with dates
- `sqlite3` to use SQLite
- `os` for operating system utilities 
- `random` for random number generation
- `statistics` for statistical utilities 
- `request` to perform HTTP network requests
- `http` to create HTTP servers
- `urllib` to manage URLs

---
# Accepting Arguments from the Command Line
```python
import sys
```
the above shown `sys` module is the general way of handling commands 

#### sys package
```python
print(sys.argv)
```
this will print all the arguments we pass in the command
e.g. 
```python
python main.py ADPer 19
```
will return 
```python
['main.py', 'ADPer', '19']
```
we can use this, say to get the name as follows 
```python
name = sys.argv[1]           # name = ADPer
```

#### argparse package
```python
import argparse
```
This can be used for parsing the arguments passed with the command as follow :

```python
import argparse

parser = argparse.ArgumentParser(description='This program prints the name of my dog')

parser.add_argument('-c', '--color', metavar='color', required=True, help='The color to search for')

args = parser.parse_args()

print(args.color)
```
The above code, when run from the command line as 
```terminal
python temp.py -c red
```
will return ```red``` 
if the program is run without the arguments like 
```terminal
python temp.py 
```
then it will return 
```terminal
usage: temp.py [-h] -c color
temp.py: error: the following arguments are required: -c/--color
```
 we can also specify the argument choices that are acceptable 
```python
import argparse

parser = argparse.ArgumentParser(description='This program prints the name of my dog')

parser.add_argument('-c', '--color', metavar='color', required=True, choices={'red', 'yellow'}, help='The color to search for')

args = parser.parse_args()

print(args.color)
```
following is how we can use this code :
```terminal
┌──(adper㉿ADPer)-[~/Local/python_tutorials]
└─$ python temp.py
usage: temp.py [-h] -c color
temp.py: error: the following arguments are required: -c/--color
                                                                                                                         
┌──(adper㉿ADPer)-[~/Local/python_tutorials]
└─$ python temp.py -c red
red
                                                                                                                         
┌──(adper㉿ADPer)-[~/Local/python_tutorials]
└─$ python temp.py -c brown
usage: temp.py [-h] -c color
temp.py: error: argument -c/--color: invalid choice: 'brown' (choose from 'yellow', 'red')
                                                                                                                         
┌──(adper㉿ADPer)-[~/Local/python_tutorials]
└─$ python temp.py -h      
usage: temp.py [-h] -c color

This program prints the name of my dog

options:
  -h, --help            show this help message and exit
  -c color, --color color
                        The color to search for
                                                                                                                         
┌──(adper㉿ADPer)-[~/Local/python_tutorials]
└─$          
```
---
# Lambda Functions
aka *anonymous functions*, are tiny functions that have no name and only have a single expression are their body,
**NOTE :** it should be an expression, not a statement. An expression returns a value, a statement does not
Lambda function have no name, but they can be assigned to a variable
examples of lambda functions include :
```python
lambda num : num * 2
```
these can be used as :
```python
multiply = lambda a, b : a * b

print(multiply(2, 4))
```
This will print `8` to the console

The utility of lambda function comes when combined with other python functionality
for example with map, filters and reduce

---
# Map, Filter and Reduce
these are three useful global funcitons

## Map
```python
map()
```
map can be used to run a function upon each item in a iterable item like a list, and create a new list with the same number of item, but the value if each item is changed
consider the following example :
```python 
numbers = [1, 2, 3]

def double(a):
	return a * 2

result =  map(double, numbers)

print(list(result))
```
will return 
```terminal
[2, 4, 6]
```
here, whenever the function is a one liner, it is common to use a lambda function
```python
numbers = [1, 2, 3]

double = lambda a : a * 2

result =  map(double, numbers)

print(list(result))
```
or, we can go as follows :
```python
numbers = [1, 2, 3]

result =  map(lambda a : a * 2, numbers)

print(list(result))
```
## Filter 
filter takes a iterable and returns another iterable without some of the items 
```python
numbers = [1, 2, 3, 4, 5, 6]

result = filter(lambda n : n%2 == 0, numbers)

print(list(result))
```

## Reduce
The **reduce(fun,seq)** function is used to **apply a particular function passed in its argument to all of the list elements** mentioned in the sequence passed along.This function is defined in “**functools**” module.

**Working :**  

- At first step, first two elements of sequence are picked and the result is obtained.
- Next step is to apply the same function to the previously attained result and the number just succeeding the second element and the result is again stored.
- This process continues till no more elements are left in the container.
- The final returned result is returned and printed on console.

consider the following program that adds expenses from a list of tuples 
```python
expenses = [                    # list of tuples
	('Dinner', 80)
	('Car repair', 120)
]

sum = 0

for expense in expenses:
	sum += expense[1]

print(sum)
```


instead we can do the following:
```python 
from functools import reduce

expenses = [                    # list of tuples
	('Dinner', 80)
	('Car repair', 120)
]

sum = reduce(lambda a, b : a[1] + b[1], expenses)

print(sum)
```
---
# Recursion
consider the function to find factorial

```python
def factorial(n):
	if n==1 : return 1
	return n * factorial(n-1)
```
if the recursion doesn't stop, python generally gives a recursion error at 1000 calls 

---
# Decorators
Decorators in python are a way to change, enhance or alter in any way how a function works
Decorators are defined with the `@` symbol followed by the decorator name, just before the function definition

[**Decorators**](https://www.geeksforgeeks.org/function-decorators-in-python-set-1-introduction/) are a very powerful and useful tool in Python since it allows programmers to modify the behaviour of a function or class. Decorators allow us to wrap another function in order to extend the behaviour of the wrapped function, without permanently modifying it. But before diving deep into decorators let us understand some concepts that will come in handy in learning the decorators.

As stated above the decorators are used to modify the behaviour of function or class. In Decorators, functions are taken as the argument into another function and then called inside the wrapper function.

```python
@gfg_decorator                          # Exemplary decorator
def hello_decorator():
    print("Gfg")

'''Above code is equivalent to -

def hello_decorator():
    print("Gfg")
    
hello_decorator = gfg_decorator(hello_decorator)'''
```

consider the following example :
```python
def logtime(func):
	def wrapper():
		print("Before")
		val = func()
		print("After")
		return val
	return wrapper

@logtime
def hello():
	print("Hello")

hello()
```
The above code will return the following :
```terminal
┌──(adper㉿ADPer)-[~/Local/python_tutorials]
└─$ python temp.py 
Before
Hello
After
                 
```

---
# Docstrings
[Python](https://www.geeksforgeeks.org/python-programming-language/) documentation strings (or docstrings) provide a convenient way of associating documentation with [Python modules](https://www.geeksforgeeks.org/python-modules/), functions, classes, and methods. It’s specified in source code that is used, like a comment, to document a specific segment of code. Unlike conventional source code comments, the docstring should describe what the function does, not how.

- **Declaring Docstrings**: The docstrings are declared using ”’triple single quotes”’ or “”” triple double quotes “”” just below the class, method, or function declaration. All functions should have a docstring.
- **Accessing Docstrings**: The docstrings can be accessed using the __doc__ method of the object or using the help function. The below examples demonstrate how to declare and access a docstring.
#### What should a docstring look like?

- The doc string line should begin with a capital letter and end with a period.
- The first line should be a short description.
- If there are more lines in the documentation string, the second line should be blank, visually separating the summary from the rest of the description.
- The following lines should be one or more paragraphs describing the object’s calling conventions, side effects, etc.
ref : [geeksforgeeks.org/python-docstrings/](https://www.geeksforgeeks.org/python-docstrings/)
---
# Annotations
Python is dynamically typed, but we can still explicitly mention the data type of a variable
consider the following exampler
```python
def increment(n: int) -> int:        # This says that the funciton accpets an int and then returns a int
	return n + 1

count : int = 0                      # This makes count an integer
```
---
# Exception
syntax :
```python
try: 
	# some lines of code
except <ERROR1>:
	# handler <ERROR1>
except <ERROR2>:
	# handler <ERROR2>
```
now, we can end it with either an except with no errors, for the general error case, or we can end with else, where we specify what is there is no error, then we can have a finally block that will always run
```python
try: 
	# some lines of code
except <ERROR1>:
	# handler <ERROR1>
except <ERROR2>:
	# handler <ERROR2>
except:
	# handle all other exceptionns
else:
	# code to run if no exceptions are found
finally:
	# this code will run always, no matter what
```

consider the following examples :
```python 
result = 2/0
print(result)
```
this will give the result 
```terminal
┌──(adper㉿ADPer)-[~/Local/python_tutorials]
└─$ python temp.py
Traceback (most recent call last):
  File "/home/adper/Local/python_tutorials/temp.py", line 1, in <module>
    result = 2/0
             ~^~
ZeroDivisionError: division by zero
```
now, we can try this :
```python
try:
	result = 2/0
except ZeroDivisionError:
	print("You can't divide by zero!")
else:
	print("Result : ", result)
finally:
	print("This will always be printed")
```
This will give the following output :
```terminal
┌──(adper㉿ADPer)-[~/Local/python_tutorials]
└─$ /bin/python3.12 /home/adper/Local/python_tutorials/temp.py
You can't divide by zero!
This will always be printed
```
we can also raise and exception manually :
```python
raise Exception("An Error!")
```
will give :
```terminal
┌──(adper㉿ADPer)-[~/Local/python_tutorials]
└─$ python3 temp.py 
Traceback (most recent call last):
  File "/home/adper/Local/python_tutorials/temp.py", line 1, in <module>
    raise Exception("An Error!")
Exception: An Error!
```
we can keep the programming running and only print the error statement while raising an error as follows :
```python
try:
	raise Exception("An Error!")
except Exception as error:
	print("An error occured: ", error)
```
This will give
```terminal
┌──(adper㉿ADPer)-[~/Local/python_tutorials]
└─$ python3 temp.py
An error occured:  An Error!
```
---
# Installing packages with pip
```terminal
pip install requests      # Installs requests package
pip install -U requests   # updates a installed package, here requests
pip uninstall requests    # uninstalls requests package 
pip show requests         # shows info about the package, here requests 
```
---
# Lists Compressions
```python
numbers = [1, 2, 3, 4, 5]

numbers_power_2 = [n**2 for n in numbers]       # example of list compression
```
the above code could have been done simply using loops as follows :
```python
numbers = [1, 2, 3, 4, 5]

numbers_power_2 = []
for n in numbers:
	numbers_power_2.append(n**2)
```
---
# Operator Overloading
make objects comparable by making them respond to operators
```python
__add__()      responds to the + operator
__mul__()      responds to the * operator
__sub__()      responds to the - operator
__truediv__()  responds to the / operator
__floordiv__() responds to the // operator
__mod__()      responds to the % operator
__pow__()      responds to the ** operator
__rshift__()   responds to the >> operator
__lshift__()   responds to the << operator
__and__()      responds to the & operator
__or__()       responds to the | operator
__xor__()      responds to the ^ operator
```

---
# Some Things to Keep in mind
- almost no where will it matter if there is *single quotes of double quotes*
- but, say in f strings, if you've used a double string once, it should be single if used again and vice versa
- or just use `f''' <- string -> '''`

If a statement is too long, we can continue on the next line by using a `\`
```python
```


- nonlocal vs global variables
	- global variables are just regular global variables
	- nonlocal is used when we declare a variable inside a nested function and we want to use it in the entire outer function
	- nonlocal variable is useful when we want to use a variable defined in a higher scope but don't want to make it global

following are some of the commonly used functions 
```python
len()
list()
append()
```

#### `as`
The as keyword is **used to create an alias**

Advantages with ‘as’ keyword:
- It is useful where we cannot use the assignment operator such as in the import module.
- It makes code more understandable to humans.
- The keyword as is used to make alias with programmer selected name, It decreases the chance coincide of the name of the module with the variable name.

#### `pass`
we use pass keyword wherever we want to define a function with no block of code, or a class with no member
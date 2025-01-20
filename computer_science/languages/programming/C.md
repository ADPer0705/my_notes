# Introduction
- closely related to but not tied to UNIX
- C is relatively low level
	- it simply means that C deals with the same sort of objects that most computers do, namely characters, numbers, and addresses
	- These may be combined and moved about with the usual arithmetic and logical operators implemented by actual machines
- C provides no operations to deal directly with objects such as character strings, sets, lists, or arrays considered as a whole
- The language does not define any storage allocation facility other than static definition and the stack discipline provided by the local variables of functions, there is no heap or garbage collector
- C itself provides no input-output facilities : there are no READ or WRITE statements, and no wired-in file access methods
	- all these higher level mechanisms must be provided by explicitly-called functions
	- C provides a simple feature using the `malloc()` and `free()` functions that allows a programmer to request a certain amount of memory be allocated dynamically, use the memory and then return the memory to the C runtime library for later reuse
	- The term "*heap*" refers to memory that C manages on our behalf when we need to "borrow" a bit of memory and give it back later
		- There are a couple of issues with a simple heap implementation 
			- if we forget to call `free()` when we are done with the memory, we have created a "*memory leak*"
			- C places the onus of giving back any dynamically allocated memory on the programmer
	- The more difficult problem is after a series of calls to `malloc()` and `free()` the heap space becomes fragmented and some cleanup is needed. This cleanup is called "*garbage collection*"

- C offers only straightforward, single-threaded control flow

---

there are three basic files : 
- STDIN : Standard Input
	- takes the user input
	- default source : keyboard input
	- File descriptor : 0
- STDOUT : Standard Ouput
	- used for displaying output to the user
	- default destination : terminal or console screen
	- file descriptor : 1
- STDERRL : Standard Error
	- used for displaying error messages and diagnostics
	- Default Destination : Terminal or console screen (same as `STDOUT` by default, but can be redirected separately).
	- file descriptor : 2
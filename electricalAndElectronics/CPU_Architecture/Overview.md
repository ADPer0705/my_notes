The CPU Architecture the is most widely used is derived from the The Von Neumann architecture

![[Screenshot 2025-01-04 163321.png | 500]]

### CPU
- Gets instructions from the main memory
- The address to the next instruction to execute is stored in a register called the **instruction pointer** or **IP**
- In a *32-bit* system the register is called *EIP*, and in *64-bit* systems, it is called *RIP*

### Arithmetic Logic Unit
- executes the instruction fetched from the memory
- the results of the executed memory are then stored in either the registers or the memory

### Registers
- CPU's storage
- generally much smaller than the main memory, which is outside the CPU
- helps save time in executing instructions by placing important data in direct access to the CPU

### Memory
- The memory, also called Main memory or RAM
- contains all the code and data for program to run
- when the user runs a program, its code and data are loaded into the memory, from where the CPU accesses it one instruction at a time

---

# Registers Overview
CPU can access data from the registers quicker than any other storage medium

However, its limited size means it has to be used effectively
For this purpose register are divided into four different types : 
- Instruction Pointer
- General Purpose Register
- Status Flag Register
- Segment Register

## The Instruction Pointer
- contains the address of the next instruction to be executed by the CPU
- aka *Program Counter*

- It was originally a *16-bit register* in the *intel 8086 processor* (from where the term x86 originated) and was abbreviated as *IP*
- in *32-bit processors*, the Instruction Pointer became a *32-bit register* called the **EIP** or the extended instruction pointer
- in *64-bit systems* this register became a *64-bit register* called **RIP** (The r here stand for register)

## General Purpose Registers
- used during the general execution of instructions by the CPU
- in a 64-bit system, these registers are extended as 64-bit registers

![[Screenshot 2025-01-04 165622.png | 500]]

They contain the following registers : 
#### EAX or RAX
- aka **Accumulator Register**
- results of arithmetic operations are often stored in this register
- In 32-bit systems, a 32-bit EAX register is present, while a 64-bit RAX register is present in 64-bit systems
- The *last 16 bits* of this register can be *accessed by addressing AX*. Similarly, it can also be addressed in *8 bits by using AL for the lower 8 bits and AH for the higher 8 bits*

#### EBX or RBX
- aka **The Base Register**
- often used to store the base addresses for referencing an offset
- Similar to the EAX/RAX, it can be addressed as 64-bit RBX, 32-bit EBX, 16-bit BX, and 8-bit BH and BL registers.

#### ECX or RCX
- aka **The Counter Register**
- often used in counting operations such as loops, etc.
- Similar to the above two registers, it can be addressed as 64-bit RCX, 32-bit ECX, 16-bit CX, and 8-bit CH and CL

#### EDX or RDX
- aka **The Data Register**
- It is often used in multiplication/division operations
- Similar to the above registers, it can be addressed as 64-bit RDX, 32-bit EDX, 16-bit DX, and 8-bit DH and DL registers. 

#### ESP or RSP
- aka **The Stack Pointer**
- It points to the top of the stack and is *used in conjunction with the Stack Segment* register
- It is a 32-bit register called ESP in 32-bit systems and a 64-bit register called RSP in 64-bit systems. 
- It *can not be ~~addressed as smaller registers~~*.

#### EBP or RBP
- aka **The Base Pointer** 
- It is used to *access parameters passed by the stack*
- It is also *used in conjunction with the Stack Segment* register. 
- It is a 32-bit register called EBP in 32-bit systems and a 64-bit register called RBP in 64-bit systems.

#### ESI or RSI
- aka **The Source Index register**
- It is used for *string operations*.
- It is *used with the Data Segment (DS) register as an offset*. 
- It is a 32-bit register called ESI in 32-bit systems and a 64-bit register called RSI in 64-bit systems.

#### EDI or RDI
- aka **The Destination Index register**
- It is *also used for string operations*
- It is *used with the Extra Segment (ES) register as an offset*
- It is a 32-bit register called EDI in 32-bit systems and a 64-bit register called RDI in 64-bit systems.

#### R8-R15
- These *64-bit general-purpose registers* are *not present in 32-bit systems*
	- They were introduced in the 64-bit systems
- They are *also addressable in 32-bit, 16-bit, and 8-bit modes*
- For example, for the R8 register, we can use R8D for lower 32-bit addressing, R8W for lower 16-bit addressing, and R8B for lower 8-bit addressing. 
	- Here, the suffix D stands for *Double-word*, W stands for *Word*, and B stands for *Byte*.

## Status Flag Registers
- when performing executions, some indication about the status of execution is sometimes required
- This is a single 32-bit register for 32-bit systems, *EFLAGS*, extended to 64-bit for 64-bit systems, *RFLAGS*
- The status flags register consists of individual single-bit flags that can be either 0 or 1

### Zero Flag
- Denoted by **ZF**, 
- the Zero Flag indicates when the result of the last executed instruction was zero
  For example, if an instruction is executed that subtracts a RAX from itself, the result will be 0. In this situation, the ZF will be set to 1.

### Carry Flag
- Denoted by **CF**, 
- The Carry Flag indicates when the last executed instruction resulted in a number too big or too small for the destination. 
  For example, if we add 0xFFFFFFFF and 0x00000001 and store the result in a 32-bit register, the result will be too big for the register. In this case, CF will be set to 1.

### Sign Flag
- The Sign Flag or **SF** 
- indicates if the result of an operation is negative or the most significant bit is set to 1. 
  If these conditions are met, the SF is set to 1; otherwise, it is set to 0.

### Trap Flag
- The Trap Flag or **TF** 
- indicates if the *processor is in debugging mode*. 
- When the TF is set, the CPU will execute one instruction at a time for debugging purposes.
- This can be used by malware to identify if they are being run in a debugger.

| **General Registers** | **Segment Registers** | **Status Registers** | **Instruction Pointer** |
| --------------------- | --------------------- | -------------------- | ----------------------- |
| RAX, EAX, AX, AH, AL  | CS                    | EFLAGS               | EIP, RIP                |
| RBX, EBX, BX, BH, BL  | SS                    |                      |                         |
| RCX, ECX, CX, CH, CL  | DS                    |                      |                         |
| RDX, EDX, DX, DH, DL  | ES                    |                      |                         |
| RBP, EBP, BP          | FS                    |                      |                         |
| RSP, ESP, SP          | GS                    |                      |                         |
| RSI, ESI, SI          |                       |                      |                         |
| RDI, EDI, DI          |                       |                      |                         |
| R8-R15                |                       |                      |                         |
  
## Segment Registers
- 16-bit registers 
- convert the flat memory space into different segments for easier addressing. There are six segment registers, as explained below:

*Code Segment:* The Code Segment (CS) register points to the Code section in the memory.

*Data Segment:* The Data Segment (DS) register points to the program's data section in the memory.

*Stack Segment:* The Stack Segment (SS) register points to the program's Stack in the memory.

*Extra Segments (ES, FS, and GS):* These extra segment registers point to different data sections. These and the DS register divide the program's memory into four distinct data sections.


---

# Memory Overview
When a program is loaded into the memory in the Windows Operating System, it sees an abstracted view of the Memory
- This means the program doesn't have access to the full memory, it only has access to it's memory

![[Screenshot 2025-01-05 154431.png]]

Memory is divided into four sections : 
- Stack
- Heap
- Code
- Data
While here in the diagram it shows the four sections in particular order, this can be different from how they will be all the time

## Code :
- contains the program's code
- Specifically, this section refers to the text section in a Portable Executable file, which includes instructions executed by the CPU
- This section of the Memory has execute permissions, meaning that the CPU can execute the data in this section of the program memory.

## Data
- contains initialized data that is not variable and remains constant
- It refers to the data section in a portable executable file 
- It often contains Global Variables and other data that are not supposed to change during the program's execution

## Heap
- The heap is also know as dynamic memory
- contains variables and data created and destroyed during program execution 
- When a variable is created, memory is allocated for that variable at runtime. And when that variable is deleted, the memory is freed.

## Stack
- one of the most important parts of the memory from a malware analysis point of view
- contains local variables, arguments passed on to the program, and the return address of the parent process that called the program
  Since the return address is related to the control flow of the CPU's instructions, the Stack is often targeted by malware to hijack the control flow

### Stack Layout
- Part of a program's memory that contains the arguments passed to the program, the local variables, and the program's control flow
- Malware often exploits the stack to hijack the control flow of the program

The CPU has two registers to keep track of the stack
- Stack Pointer (ESP or RSP)
- Base Pointer (EBP or RBP)

#### The Stack Pointer 
- points to the top of the stack
- when any element is pushed or popped the location of the stack pointer changes to consider the new element that was pushed on the stack

#### The Base Pointer
- The base pointer of any program remains constant
- This is the reference address where the current program stack tracks its local variables and arguments 

#### Old Base Pointer and Return Address
- Below the Base pointer lies the old base pointer of the calling program (The program that calls the current program). And below the old base pointer lies the return address, where the instruction pointer will return once the current program's execution ends

A common technique to hijack the control flow is to overflow a local variable no the stack such that it overwrites the return address with an address of the malware author's choice. This technique is called Stack Buffer Overflow

#### Arguments 
- The arguments being passed to a function are pushed to the stack before the function starts execution
- The arguments are present right below the return address on the stack

#### Function Prologue and Epilogue
- When a function is called, the stack is prepared for the function to execute 
	- This means that the arguments are pushed to the stack before the start of the function execution
	- After that the return address and the old base pointer address are pushed onto the stack
	- Once these elements are pushed the base pointer address is changed to the top of the stack (Which will be the stack pointer of the caller function at that time)
	  As the function executes the stack pointer move as per the requirements of the function
This portion of code that pushes the arguments, the Return Address, and the Base Pointer onto the Stack and rearranges the Stack and Base Pointers is called the *Function Prologue*

- The old base pointer is popped off the stack and onto the base pointer when the function exits
- The return address is popped off to the instruction pointer
- the stack pointer is rearranged to point to the top of the stack
The part of the code that performs this action is called the *Function Epilogue*
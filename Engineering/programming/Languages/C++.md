# Setup : 

| **Windows**                                                     | **Linux**                                          | **Mac**                                       |
| --------------------------------------------------------------- | -------------------------------------------------- | --------------------------------------------- |
| - Visual Studio Code<br>- Microsoft Visual Studio<br>- CodeLite | - Visual Studio Code<br>- Qt Creator<br>- CodeLite | - Visual Studio Code<br>- XCode<br>- CodeLite |
| - MinGW<br>- Msvc<br>- Clang llvm                               | - GCC<br>- Clang llvm                              | - GCC<br>- Clang Apple <br>- Clang llvm       |
Check this out regarding the features each of the compiler supports :
- https://en.cppreference.com/w/cpp/compiler_support

check this out for installing the compilers : 
- https://winlibs.com/

now, once installed, launch vs code, and in the terminal tab open configure tasks 

![[Screenshot 2024-05-11 191938.jpg]]

then configure the g++ and the clang compilers 
now we need to support c++20, hence go to browser and search support c++20, and you'll get this : `-std=c++20`, put that among the `args` in the `task.json` file, like the other args inside `""` and followed by `,`.

now, to check whether the compilers are properly setup, run the command 
```
#include<iostream>

int main()

{

    auto result = (10 <=> 20) > 0;

    std::cout << result << std::endl;

}
```
and run the `.exe` file, it should return `0`.

all of these instructions can be found under the microsoft extension for C++

now, the `args` can be explained as follows : 

![[Screenshot 2024-05-11 193400.jpg]]

![[Screenshot 2024-05-11 193338.jpg]]

notice the argument generated in the terminal and the args in the task.json file,
for example, here in the args we can change the `fileBasenameNoExtension` to any other name we want to executable to be and it'll always be that name 

now, open the terminal 
`gcc filename.cpp` will compile the file and run it
`.\filename.exe` will run the file 
`dir` will print the working directory
`rm filename` will remove the file "filename" 

In order the get the compiler from microsoft, we had installed Visual Studio. To access that, open the developer powershell which should be there after installing Visual Studio, `cd` to the directory where out project is, and open vs code by `code .` then vs code will open while being aware of the compiler from microsoft, i.e. `cl.exe --version` 
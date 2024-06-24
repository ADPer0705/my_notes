#### What is Bash ?
- A shell language
- Bourne Again shell
	- replaces the Bourne shell
- easy commands
A shell is a user interface for ease of use, which makes it easy for the user to manage the operating system without knowing all of the inner working and the complexity of the os itself 

#### Why Learn bash ?
- most used shell 
- stands the test of time
- comes with linux and other os

#### Why not bash ?
- Lacks features
- no OOP
- Difficult syntax  compared to python
- newer tools like ansible

#### Still useful
- lightweight and always available
- is not mutually exclusive
- basic knowledge makes big difference

---
```bash
echo hello
```
here `echo` is the command to print on the terminal and `hello` is the argument, here a positional arguments  

```bash
cat textfile.txt
```
reads the file, or echoes it out, that is passed as the argument 

```bash
ls 
```
lists all the files in the current directory

```bash
echo $SHELL
```
to check which shell are we running

```bash
bash shelltest.sh
```
will run bash files, these end in `.sh` 

```bash
#!/bin/bash
echo Hello World
```
the `#!` aka the *sha-bang* tell the program which interpreter to use
the path provided here is the default path to bash interpreter in linux systems
upon mentioning it we can run the file by simply typing 
```bash
./shelltest.sh
```
sometimes we need to change the permissions to enable execute perminssion

---

# Variables
we can do this directly from the command line
```bash               
┌──(adper㉿ADPer)-[~/Local/Bash_Tutorials]
└─$ FIRST_NAME=ADPer      

┌──(adper㉿ADPer)-[~/Local/Bash_Tutorials]
└─$ echo Hello $FIRST_NAME
Hello ADPer
```
we can script this as :
```bash
#!/bin/bash

FIRST_NAME=ADPer

echo Hello $FIRST_NAME
```
**NOTE** : no space is mandatory `FIRST_NAME = ADPer` will not work

use of variables :
```bash
#!/bin/bash

## NOT GOOD >>
cp /my/location/from /my/location/to
cp /my/location/from/here /my/loction/to/there

## BETTER

MY_LOCATION_FROM=/my/location/from
MY_LOCATION_TO=/my/location/to

cp $MY_LOCATION_FROM $MY_LOCATION_TO
cp "$MY_LOCATION_FROM/here" "$MY_LOCATION_TO/there"
```

## Taking inputs
```bash
#!/bin/bash

echo what is you name ?
read NAME

echo Hello $NAME
```
---
# Positional Arguments
*Argument* are a specific position
Commands can take in arguments at a specific position, separated by blank space
arguments start from position 1, position 0 is reserved for the shell

arguments can be used as follows :
```bash
#!/bin/bash

echo Hello $1, you are $2 years old
```
this can be executed from the terminal as 
```shell
┌──(adper㉿ADPer)-[~/Local/Bash_Tutorials]
└─$ ./arguments.sh ADPer 19
Hello ADPer, you are 19 years old
```
in the above command, ADPer is at position 1 and 19 is at position 0

---
# Piping
used for redirecting an output to another input
we use the `|` for piping
```bash
ls -l /usr/bin | grep bash
```
The above command will take all the outputs from expression 1, and pass it to the second expression

## Output redirection to a file 
```bash
>      ## symbol to write to a file
>>     ## symbol to append to a file
```
consider the example :
```bash
┌──(adper㉿ADPer)-[~/Local/Bash_Tutorials]
└─$ echo Hello World! > hello.txt                                                                                
┌──(adper㉿ADPer)-[~/Local/Bash_Tutorials]
└─$ cat hello.txt                
Hello World!                                                                              
┌──(adper㉿ADPer)-[~/Local/Bash_Tutorials]
└─$ echo Hello There! > hello.txt                                                                              
┌──(adper㉿ADPer)-[~/Local/Bash_Tutorials]
└─$ cat hello.txt                
Hello There!                                                                                
┌──(adper㉿ADPer)-[~/Local/Bash_Tutorials]
└─$ echo ADPer >> hello.txt

┌──(adper㉿ADPer)-[~/Local/Bash_Tutorials]
└─$ cat hello.txt          
Hello There!
ADPer

```

## Input from a file
just invert the sign
```bash
┌──(adper㉿ADPer)-[~/Local/Bash_Tutorials]
└─$ wc -w hello.txt 
3 hello.txt                                                                               
┌──(adper㉿ADPer)-[~/Local/Bash_Tutorials]
└─$ wc -w < hello.txt
3
```
The `wc` command gives the "word count", and the `-w` flag is for counting the words. we can also count lines and other stuff
but, this function also returns the file name with the count, but, only when we pass the file as a positional argument,
in the second command we pass the file not as a positional argument, and hence it only returns the count

we can use the `<<` in the terminal as follows, to wait for a certain indication that the input is over 
```bash
┌──(adper㉿ADPer)-[~/Local/Bash_Tutorials]
└─$ cat << EOF       
heredoc> I will 
heredoc> Write some lines of code
heredoc> here and it will wait
heredoc> for the word I entered with the << 
heredoc> don't worry this is passed to the cat command
heredoc> hence it might not consider it to be code
heredoc> we'll see        
heredoc> for redability \n        
heredoc> EOF
I will 
Write some lines of code
here and it will wait
for the word I entered with the << 
don't worry this is passed to the cat command
hence it might not consider it to be code
we'll see
for redability \n

```
we can use the `<<<` into the command to pass a line of code instead of a file, 
```bash
wc -w <<< "Hello There, Wordcount!"
```
this will start a input field, cause the `!` before the `"` makes it not consider it as an character, the proper way to do this is 
```bash
wc -w <<< "Hello There, Wordcount! " 
```
now the space will prevent that from happening and the output will be `3`
The string need to be in `" string "`

---
# Test Operators
used to test inputs against some conditions
```bash
┌──(adper㉿ADPer)-[~/Local/Bash_Tutorials]
└─$ [ hello = hello ]                                                                             
┌──(adper㉿ADPer)-[~/Local/Bash_Tutorials]
└─$ echo $?                  
0
```
will return `0` since the first and the second strings are both the same
it is to be noted that space is important 
exit code `0` means that the command was executed without any errors
the second command just is to print the exit code of the previous command

---
# If/Elif/Else
```bash
#!/bin/bash

if [ ${1,,} = ADPer ]; then
	echo "Oh, you're the boss here. WELCOME!"
elif [ ${1,,} = --help ]; then
	echo "just enter the username, duh"
else 
	echo "I don't know who you are, but you're not the boss of me!"
fi

```
in the above bash script `${1,,}` is a parameter expansion, it'll take the first argument and ignore upper or lower case 
also we close out if statements with `fi`
though this isn't a good code, cause for `${1,,}` to work, `nocasematch` should be enables, which by default is disables 

---
# Case statements
```bash
#!/bin/bash
#
case ${1} in
	ADPer | administrator)
		echo "Hello, you're the boss here! "
		;;
	--help)
		echo "didn't you read the type the command name dummy!\n enter your username! "
		;;
	*)
		echo "enter a valid username"
esac

```
---
# Arrays

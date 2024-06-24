## Running the First Few Commands
A large selling point os using OS's such as Ubuntu is how lightweight they can be. This, of course, doesn't come without its disadvantages, where for example, often there is no GUI (Graphical User Interface) or what is also known as a desktop environment that we can use to interact with the machine (unless it has been installed). A large part of interacting with these systems is using the "Terminal"

![[Screenshot from 2024-04-13 23-11-43.png]]

## Interacting with the File System

![[Screenshot from 2024-04-13 23-40-22.png]]

## Searching for Files 
`find` is used for finding files 
If we know the name of the file we can 
`find -name passwords.txt` 

`*` is a 'wildcard' and represents a 'string of characters'

`grep` to look into files
`grep "81.143.211.90" access.log` 

## An Introduction To Shell Operators 

![[Screenshot from 2024-04-13 23-47-23.png]]

---

# DU - Disk Usage 
`du` is a command in linux (short for disk usage) which helps you identify what files/directories are consuming how much space. If you run a simple du command in terminal...

![[Screenshot from 2024-04-27 21-06-43.png]]
## Important flags

|             |                                                                                                                       |     |
| ----------- | --------------------------------------------------------------------------------------------------------------------- | --- |
| Flag        | Description                                                                                                           |     |
| -a          | Will list files as well with the folder.                                                                              |     |
| -h          | Will list the file sizes in human readable format(B,MB,KB,GB)                                                         |     |
| -c          | Using this flag will print the total size at the end. Jic you want to find the size of directory you were enumerating |     |
| -d _number_ | Flag to specify the depth-ness of a directory you want to view the results for (eg. -d 2)                             |     |
| --time      | To get the results with time stamp of last modified.                                                                  | .   |


## Examples

`du -a /home/` will list every file in the /home/ directory with their sizes in KB.

If there's a lot of output you can surely use grep...

`du -a /home/ | grep user` will list any file/directory whose name is containing the string "_user_" in it.

## Final Words

du command can alternate `ls` with the following flags:

`du --time -d 1 .`

It won't specify you the user ownership though, so you can use `stat` command on the file you want to know who is the owner of that particular file 

Syntax: `stat`

---

# grep, Egrep, Fgrep
This tool, is what filters the good output we need from the residue. The official documentation says, *The grep filter searches a file for a particular pattern of characters, and displays all lines that contain that pattern. The pattern that is searched in the file is referred to as the regular expression.* 
Syntax: `grep "PATTERN" file.txt` will search the file.txt for the specified "PATTERN" string, if the string is found in the line, the grep will return the whole line containing the "PATTERN" string.

## The Family Tree
egrep and fgrep are no different from grep(other than 2 flags that can be used with grep to function as both). In simple words, egrep matches the regular expressions in a string, and fgrep searches for a fixed string inside text. Now grep can do both their jobs by using -E and -F flag, respectively.

In other terms, `grep -E` functions same as `egrep` and `grep -F` functions same as `fgrep`

## Important Flags

|       |                                                                                                                                                                                           |
| ----- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Flags | Description                                                                                                                                                                               |
| -R    | Does a recursive grep search for the files inside the folders(if found in the specified path for pattern search; else grep won't traverse diretory for searching the pattern you specify) |
| -h    | If you're grepping recursively in a directory, this flag disables the prefixing of filenames in the results.                                                                              |
| -c    | This flag won't list you the pattern only list an integer value, that how many times the pattern was found in the file/folder.                                                            |
| -i    | I prefer to use this flag most of the time, this is what specifies grep to search for the PATTERN while IGNORING the case                                                                 |
| -l    | will only list the filename instead of pattern found in it.                                                                                                                               |
| -n    | It will list the lines with their line number in the file containing the pattern.                                                                                                         |
| -v    | This flag prints all the lines that are NOT containing the pattern                                                                                                                        |
| -E    | This flag we already read above... will consider the PATTERN as a regular expression to find the matching strings.                                                                        |
| -e    | The official documentation says, it can be used to specify multiple patterns and if any string matches with the pattern(s) it will list it.                                               |
You might be wondering the difference between -E and -e flag. I suggest to understand this as the following:

- -e flag can be used to specify multiple patterns, with multiple use of -e flag( grep -e PATTERN1 -e PATTERN2 -e PATTERN3 file.txt), whereas, -E can be used to specify one single pattern(You can't use -E multiple times within a single grep statement).

Other point that you can use to understand the difference is, -e works on the BREs(Basic Regular Expressions) and -E works on EREs (Extended Regular Expressions).

- BREs tend to match a single pattern in a file (Simplest examples can be direct words like "sun", "comic")
- EREs tend to match 2 or more patterns in a file (To select a no of words like (sun sunyon sandston) the pattern could be "^s.\*n$".

---

# STROPS 
## String Manipulation (STRing OPerationS)
If you're from a programming background you might have used indexing in arrays, slicing in python, or even grepping in terminal..... ALL are means of string manipulation. Especially in BASH, we have a ton of tools to perform a same kind of operation, with different flags or string patterns specified.

for strops, we have the following tools :
- tr
- awk
- sed
- xargs
other command to be familiar with
- sort 
- uniq

## tr
aka the *translate command*, can help in a number of ways, ranging from changing character cases in a string to replacing characters in a string. 

Syntax: `tr [flags] [source]/[find]/[select] [destination]/[replace]/[change]`

![[Screenshot from 2024-06-04 23-15-51.png]]

`tr`  command works on a set of characters

Examples
- If you want to convert every alphabetic character to upper case.

![[Screenshot from 2024-06-04 23-24-48.png]]

- `tr` allows us to select a set by these keywords. In that case the output would be same 
	- `cat file.txt | tr -s '[:lower:]' '[:upper:]`
- if you want to view creds of a user which are in digits 

![[Screenshot from 2024-06-05 00-09-28.png]]


## awk
this is like the all-in-one tool 

*"awk is a scripting language used to manipulating data and generating reports. The awk command programming language requires no compiling, and allows the user to use variables, numeric functions, string functions, and logical operators"*

A GNU project of awk (namely gawk) which is also the one installed on every linux distro, is compatible with both awk and nawk (new-awk; also prhect by AT&T)

syntax : `awk [flags] [select pattern/find(sort)/commands] [input file]`

note : awk does not support getting output via piping 

- If the commands you wrote are in script you can execute the scripts commands by using the `-f` flag and specifying the name of the script file (`awk -f script.awk input.txt`)

Using AWK

- To simply print a file with awk.

![Outputting the same file, one time with cat and one time with awk](https://tryhackme-images.s3.amazonaws.com/user-uploads/5eff6381a8b8f6323ba744fe/room-content/3ca435289ab1db18e0d21b2ab9b36c56.png)  

You can see it simply just printed out data from file.txt.

- To search for a pattern inside a file you enclose the pattern in forward slashes `/pattern/` . For instance, if I want to know who all plays CTF competitions the command should be like: `awk '/ctf/' file.txt`  
    

![](https://tryhackme-images.s3.amazonaws.com/user-uploads/5eff6381a8b8f6323ba744fe/room-content/d35231b4a0a5a378ff6fca85026cd7dd.png)  

Built-In variables in AWK  

Let's talk a little bit about some of the in-built variables. Built-in variables include field variables ($1, $2, $3 .. $n). These field variables are used to specify a piece of data (data separated by a delimeter defaulting to space). If I run `awk '{print $1 $3}' file.txt` it will list me the words that are at 1st and 3rd fields.

![](https://tryhackme-images.s3.amazonaws.com/user-uploads/5eff6381a8b8f6323ba744fe/room-content/449e7ed96e5963d1e86b5d1768e353ad.png)  

You can see, it joined the words together because we didn't specify the output delimeter. We will come to that later in this task. Right now, let's just use a ","(comma) to bring the space.

Note: You may notice the use of {} around the print statement, that's where we used a function. To use commands in awk scripts, you need to mention them inside a function.

![](https://tryhackme-images.s3.amazonaws.com/user-uploads/5eff6381a8b8f6323ba744fe/room-content/3ef149bbfacf96c502357ee9fba3b42d.png)  

Great, this seems a little nice.

Note: The $0 variable points to the whole line.  _Also, make sure to use single quotes('') to specify patterns, awk treats double quotes("") as a raw string. To use double quotes make sure that you escape the ($) sign(s) with a backslash (\) each, to make it work properly._

More on variables  

**NR:** (Number Record) is the variable that keeps count of the rows after each line's execution... You can use NR command to number the lines (`awk '{print NR,$0}' file.txt`). Note that awk considers rows as records.

![](https://tryhackme-images.s3.amazonaws.com/user-uploads/5eff6381a8b8f6323ba744fe/room-content/d688834ef3ced5e4372854c7080ce82e.png)

**FS:** (Field Separator) is the variable to set in case you want to define the field for input stream. The field separation (defaut to space) that we talked above and can be altered to whatever you want while specifying the pattern. FS can be defined to another character(s)(yea, can be plural) at the BEGIN{command}.

![](https://tryhackme-images.s3.amazonaws.com/user-uploads/5eff6381a8b8f6323ba744fe/room-content/b2c02cf22b0b2a4e17a8cc7ecf5246fc.png)  

If you don't know the BEGIN yet, take it as a pattern that we specify and following is the action on that pattern. Similarly, there is END command, this is also a pattern that we specify, following the action to perform on that pattern, and simply, we use them to define _actions_ like Field Separator, Record Separator etc. that are to be performed at the start and at the end of the script, respectively.

`awk "BEGIN {FS='o'} {print $1,$3} END{print 'Total Rows=',NR}"`

![](https://tryhackme-images.s3.amazonaws.com/user-uploads/5eff6381a8b8f6323ba744fe/room-content/95f71444689a3df7ea54d51cd5d8a5a4.png)  

The output is weird because I separated the fields using a letter that was making sense with the words in text. In short, this is actually how a complete script is written in awk.

**RS**: (Record Separator): By default it separate rows with '\n', you can specify something else too.

![](https://tryhackme-images.s3.amazonaws.com/user-uploads/5eff6381a8b8f6323ba744fe/room-content/172bb025bc33e04b42845d0ebddb1ebb.png)  

Notice that their has been a new line created wherever 'o' was used. It also interpreted '\n' used in the text file, so there are new lines after end of every number too.

**OFS****:** (Output Field Separator) You must have gathered some idea by the full form, it is to specify a delimeter while outputing... 

![](https://tryhackme-images.s3.amazonaws.com/user-uploads/5eff6381a8b8f6323ba744fe/room-content/69f626d9996db8c25f09e0882d8f2fba.png)  

I used OFS in both the commands, you can see that only in 2nd one the delimiter was used. Note that the output field separator will separate fields using (:) only when the fields are defined with the print statement. With $0 I didn't had anything else, if it were to be $0,$0 then the lines would be joining their reflection(non-laterally) with a colon(:). 

![](https://tryhackme-images.s3.amazonaws.com/user-uploads/5eff6381a8b8f6323ba744fe/room-content/cdc4c110720a6a1cd374f6562519fc07.png)  

**ORS:** (Output Record Separator) I don't think I really need to specify it's usage...

![](https://tryhackme-images.s3.amazonaws.com/user-uploads/5eff6381a8b8f6323ba744fe/room-content/e2e579b42b0b145eeb4ae4d2792bbc1a.png)  

My delimiter was a double new-line character.

This is not it... There is a lot more on AWK, you can do operations, find string length, use conditions to sort, regex within awk and other fun stuff. But I guess the task is already went a lot longer. Let's quickly move on to some important flags that can come in handy while doing strops.  

JIC if you wanna read more on the tool, here are some great resources regarding awk scripting.  

- [AWK - Workflow - Tutorialspoint](https://www.tutorialspoint.com/awk/awk_workflow.htm) (For learning awk scripting in brief and quick)
- [The printf statement in awk](http://osr5doc.xinuos.com/en/OSUserG/_The_printf_statement.html) (If you want to do more with formatting strings; you can use printf function also)  
    
- [AWK command in Unix/Linux with examples - GeeksforGeeks](https://www.geeksforgeeks.org/awk-command-unixlinux-examples/)
- And if you really want to dive deep on this tool, do check out man pages on gawk
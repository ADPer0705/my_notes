# A Bit Background of Linux
## Where is Linux used ?
Linux is considered much more lightweight. Linux powers things such as 
- Websites 
- Car entertainment/control panels 
- PoS (Point of Scale) systems such as checkout tills and registers in shops 
- Critical infrastructure such as traffic light controllers or industrial sensors 

## Flavors of Linux
"Linux" is an umbrella term for multiple OS's that are based on UNIX operating system. Thanks to UNIX being open-source, variants of Linux comes in all shapes and sizes - suited best for what the system is being used for.

Ubuntu & Debian are some of the most commonplace distributions of Linux because it is so extensible. I.e. you can run Ubuntu as a server (such as a website & web application) or as a fully-fledged desktop. For this series we're using Ubuntu


> [!NOTE]
> Ubuntu server can run on any system with only 512MB of RAM

The first version of the Linux operating system was released on the Internet in **September 1991**. It consisted of 88 files, totaling 231 kilobytes of code. At the time, it would have been difficult to predict that Linux would ten years later be considered as a major threat to Microsoft's dominance in operating systems


---
# Accessing Machine Using SSH (Deploy)

The *Secure Shell Protocol (SSH)* is the common means of connecting to and interacting with the command line of a remote Linux machine 

## What is SSH & How does it work ?
- protocol between devices in an encrypted form 

![[Screenshot from 2024-04-13 23-55-01.png]]

- SSH allows us to remotely execute commands on another device remotely 
- Any data sent between the devices is encrypted when it is sent over a network such as the internet 

Using SSH to login to the Linux Machine, the syntax is very simple, we require 
- The IP address of the remote machine 
- Correct credentials to a valid account to login with on the remote machine
The command to log into remote machine using SSH is `ssh` and then the username of the account, `@` the IP address of the machine.
```
ssh tryhackme@10.10.200.216
```

# Introduction to Flags and Switches
A majority of commands allow for arguments to be provided. These arguments are identified by a hyphen and a certain keyword known as flags or switches 

commands that accept these will also have a `--help` option, that'll list the possible options that the command accepts, provide a brief description and example of how to use it 

### The Man(ual) Pages
The manual pages are a great source of information for both system commands and application available on both Linux machine, which is accessible on the machine itself and [online](https://linux.die.net/man/).
e.g. `man ls`
gives the man pages for `ls`

---

# File System Interaction Continued 

![[Screenshot from 2024-04-14 03-03-35.png]]

removing files and directories 
`rm note` => remove files 
`rm -R mydir` => remove directory

moving can also be used to rename 
`mv note2 note3` => renames note2 to note3

---

# Permissions 101
In Linux one of the features that permission have is they're granular, that whilst a user technically owns a file, if the permissions have been set, then a group of users can also have either the same or a different set of permissions to the exact same file without affecting the file owner itself 

while switching the user with `su` if we provide `su -l` or `--login` switch, we start a shell that is much more similar to the actual user logging into the system - We inherit a lot more properties of the new user i.e. environment variables, and the likes, we also log in into the home directory of the user 

___

# Common Directories 
## `/etc`

- This root directory is one the most important directories on the system.
- It is a commonplace location to store system files that are used by the OS
- some of the important files in the directory are :
	- sudoers
		- contains a list of users and groups that have permission to run sudo or a set of commands as the root user 
	- passwd & shadow
		- these two files are important because they show how the system stores the passwords for each user in encrypted formatting called *sha512*

## `/var`

- 'var' is short for 'variable' 
- stores data that is frequently accessed or written by service or application running of the system. 
- e.g. log files from running system and services are written here 

## `/root`

- unlike `/home` directory, the `/root` folder is actually the home for the "root" system user 
- it is worth a mention as the logical presumption is that this user would have their data in a directory such as "`/home/root`" by default.

## `/tmp`

- A unique root directory
- short form "temporary"
- this directory is volatile and is used to store data that is only needed to be accessed once or twice 
- Similar to the memory of the computer, once it is restarted, the contents of this folder are cleared out 
- What's useful for pen-testers is that any user can write to this folder by default, meaning once we have access to the machine, it serves as a good place to store things like our enumeration scripts 

---
# Terminal Text Editors
1. nano
2. vim

---
# Downloading Files (Wget)
- allows to download files from the web vis HTTP -- as if you were accessing the files in your browser 
```
wget https://assets.tryhackme.com/additional/linux-fundamentals/part3/myfile.txt
```
## Transferring Files From Your Host - SCP (SSH)

- Secure Copy or SC
- a means of securely copying files between two systems 

for sending file through SCP
- The IP of the remote machine
- User on the remote machine 
- Name of the file on the local system 
- Name that we wish to store the file as on the remote system 
```
scp important.txt ubuntu@192.168.1.30:/home/ubuntu/transferred.txt
```
for copying a file from the remote machine 
- The IP of the remote system 
- user on the remote system
- Name of the file on the remote system 
- Name that we wish to store the file as on our system 
```
scp ubuntu@192.168.1.30:/home/ubuntu/documents.txt notes.txt
```
## Serving Files From Your Host
Ubuntu machine comes pre-packaged with python3 which helpfully provides a lightweight and easy-to-use module called "HTTPServer" which turns the computer into a quick and easy web browser where you can serve your files and they can be downloaded and used by another computer using commands such as `curl` and `wget`
- the server serves the files in the directory where the command is run but can be changed,
- run ``python3 -m  http.server`` 
- The server is live as long as the terminal is live 

**NOTE :** Updog is a better and more advanced yet lightweight, since the SSH has no way of indexing 

---

# Processes 
- processes are the programs running on the machine 
- managed by kernel 
- each process has a process ID *(PID)*
- The PID increments for the order in which the process starts i.e. the 60th process will have a PID of 60

## Viewing Processes 
- we can use `ps` to provide a list of the running processes as our user's session and some additional information such as 
	- its status code
	- the session that is running it
	- how much usage time of the CPU it is using
	- the name of the actual program or command that is being executed 
- To see the processes run by other users and those that don't run from a session (i.e. system processes), we need to provide `aux` to the `ps` command, like `ps aux` 

Another very useful command is the `top` command 
- gives real time statistics about the processes 
- refreshes every 10 seconds but will also refresh when you use the arrow keys to browse the various rows 

## Managing Processes 
You can send signals that terminates processes .To kill a command we use the `kill` command and the associated PID e.g. `kill 1337` 
Below are some of the signals that we can send to a process when it is killed, to say how cleanly to kill it 
- SIGTERM - kill the process, but allow it to do some cleanup tasks beforehand
- SIGKILL - Kill the process -doesn't do any cleanup after the fact
- SIGSTOP - Stop/suspend a process 

## How do Processes Start ?

#### Namespaces :
The operating system uses namespaces to ultimately split up the resources available on the computer (ram, cpu and priority) 

namespace are great for security purpose as it is a way of isolating processes from one another -- only those that are in the same namespace will be able to see each other 

PID 0 is a process that is started when the system boots up. The process is the system's init on Ubuntu, such as **systemd**, which is used to provide a way of managing a user's processes and sits in between the operating system and the user 

For example, once a system boots and it initialises, **systemd** is one of the first processes that are started. Any program or piece of software that we want to start will start as what's known as a child process of **systemd**. This means that it is controlled by **systemd**, but will run as its own process (although sharing the resources from **systemd**) to make it easier for us to identify and the likes.

## Getting Process Service to Start on Boot 
consider an example where we're going to be telling the apache web server to be starting apache manually and then telling the system to launch apache2 on boot

Enter the use of `systemctl` -- this command allows us to interact with the **systemd** process/daemon. Continuing on with our example, systemctl is an easy to use command that takes the following formatting: `systemctl [option] [service]`

For example, to tell apache to start up, we'll use `systemctl start apache2`. Seems simple enough, right? Same with if we wanted to stop apache, we'd just replace the `[option]` with stop (instead of start like we provided)

We can do four options with `systemctl`:

- Start
- Stop
- Enable
- Disable

## An Introduction to Backgrounding and Foregrounding in Linux
process can run in two states : 
- background and foreground 
`echo` is a great example as the output of echo will return to you in the foreground, but wouldn't in the background - take the screenshot below, for example.

![[Screenshot from 2024-04-15 12-52-55.png]]

Here we're running `echo "Hi THM"` , where we expect the output to be returned to us like it is at the start. But after adding the `&` operator to the command, we're instead just given the ID of the echo process rather than the actual output - as it is running in the background.

This is great for commands such as copying files because it means that we can run the command in the background and continue on with whatever further commands we wish to execute (without having to wait for the file copy to finish first)

We can do the exact same when executing things like scripts -- rather than relying on the & operator, we can use `Ctrl + Z` on our keyboard to background a process. It is also an effective way of "pausing" the execution of a script or command like in the example below:

![](https://assets.tryhackme.com/additional/linux-fundamentals/part3/bg2.png)

This script will keep on repeating "This will keep on looping until I stop!" until I stop or suspend the process. By using `Ctrl + Z` (as indicated by **T^Z**). Now our terminal is no longer filled up with messages -- until we foreground it

## Foregrounding a Process
Now that we have a process running in the background, for example, our script "background.sh" which can be confirmed by using the `ps aux` command, we can back-pedal and bring this process back to the foreground to interact with.

![](https://assets.tryhackme.com/additional/linux-fundamentals/part3/bg3.png)  

With our process backgrounded using either `Ctrl + Z` or the `&` operator, we can use `fg` to bring this back to focus like below, where we can see the `fg` command is being used to bring the background process back into use on the terminal, where the output of the script is now returned to us.

![](https://assets.tryhackme.com/additional/linux-fundamentals/part3/bg4.png)

![](https://assets.tryhackme.com/additional/linux-fundamentals/part3/bg5.png)

---

# Maintaining Your System

## Automation 

Users may want to schedule a certain action or task to take place after the system has booted. Take, for example, running commands, backing up files, or launching your favourite programs on, such as Spotify or Google Chrome

We're going to be talking about the `cron` process and how we can interact with it via the use of `crontabs`. Crontab is one of the processes that is started during boot, which is responsible for facilitating and managing cron jobs.

![[Pasted image 20240415131620.png]]

A crontab is simply a special file with formatting that is recognised by the `cron` process to execute each line step-by-step. Crontabs require 6 specific values:

| Value | Description                               |
| ----- | ----------------------------------------- |
| MIN   | What minute to execute at                 |
| HOUR  | What hour to execute at                   |
| DOM   | What day of the month to execute at       |
| MON   | What month of the year to execute at      |
| DOW   | What day of the week to execute at        |
| CMD   | The actual command that will be executed. |
Let's use the example of backing up files. You may wish to backup "cmnatic"'s  "Documents" every 12 hours. We would use the following formatting: 

`0 */12 * * * cp -R /home/cmnatic/Documents /var/backups/`

An interesting feature of crontabs is that these also support the wildcard or asterisk (`*`). If we do not wish to provide a value for that specific field, i.e. we don't care what month, day, or year it is executed -- only that it is executed every 12 hours, we simply just place an asterisk.

cron tabs can be confusing and thus there are online tools to generate the cron for you 

Crontabs can be edited by using `crontab -e`, where you can select an editor (such as Nano) to edit your crontab.

![](https://assets.tryhackme.com/additional/linux-fundamentals/part3/cron2.png)  

![](https://assets.tryhackme.com/additional/linux-fundamentals/part3/cron3.png)



## Package Management
#### Introducing Packages and Software Repos 
When developers wish to submit software to the community, they will submit it to an "apt" repository for approval. Two of the most redeeming features of Linux shine to light here 
- User accessibility
- merit of open source tools 
Whilst Operating System vendors will maintain their own repositories, you can also add community repositories to your list! This allows you to extend the capabilities of your OS. Additional repositories can be added by using the `add-apt-repository`command or by listing another provider! For example, some vendors will have a repository that is closer to their geographical location.

#### Managing Your Repositories
We use the `apt` command to install software onto our Ubuntu system. The `apt` command is a part of the package management software also named apt which contains a whole suite of tools that allows us to manage the packages and sources of our software, and to install or remove software at the same time.

One method of adding repositories is to use the `add-apt-repository`. Whilst you can install software through the use of package installers such as `dpkg`, the benefits of apt means that whenever we update our system -- the repository that contains the pieces of software that we add also gets checked for updates

When adding software, the integrity of what we download is guaranteed by the use of what is called GPG (Gnu Privacy Guard) keys. These keys are essentially a safety check from the developers saying, "here's our software". If the keys do not match up to what your system trusts and what the developers used, then the software will not be downloaded.
- GPG stands for GNU Privacy Guard. It is a free and open-source encryption software that uses public-key cryptography. GPG can be used to encrypt files and messages, and to sign files and messages.

consider the example of adding the text editor sublime text 
**1.** Let's download the GPG key and use apt-key to trust it:  `wget -qO - https://download.sublimetext.com/sublimehq-pub.gpg | sudo apt-key add -`

**2.** Now that we have added this key to our trusted list, we can now add Sublime Text 3's repository to our apt sources list. A good practice is to have a separate file for every different community/3rd party repository that we add.
	**2.1.** Let's create a file named **sublime-text.list** in **/etc/apt/sources.list.d** and enter the repository information like so:

![](https://assets.tryhackme.com/additional/linux-fundamentals/part3/sources1.png)  
	**2.2.** And now use Nano or a text editor of your choice to add & save the Sublime Text 3 repository into this newly created file:

![](https://assets.tryhackme.com/additional/linux-fundamentals/part3/sources2.png)  
	**2.3.** After we have added this entry, we need to update apt to recognise this new entry -- this is done using the `apt update` command
	**2.4.** Once successfully updated, we can now proceed to install the software that we have trusted and added to apt using `apt install sublime-text`

Removing packages is as easy as reversing. This process is done by using the `add-apt-repository --remove ppa:PPA_Name/ppa` command or by manually deleting the file that we previously added to. Once removed, we can just use `apt remove [software-name-here]` i.e. `apt remove sublime-text`


## Logs
Located in the `/var/log` directory, these files and folders contain logging information for application and services running on your computer. The Operating System  (OS) has become pretty good at automatically managing these logs in a process that is known as "rotating"

These services and logs are a great way in monitoring the health of your system and protecting it. Not only that, but the logs for services such as a web server contain information about every single request - allowing developers or administrators to diagnose performance issues or investigate an intruder's activity. For example, the two types of log files below that are of interest:

- access log
- error log

![](https://assets.tryhackme.com/additional/linux-fundamentals/part3/log2.png)

There are, of course, logs that store information about how the OS is running itself and actions that are performed by users, such as authentication attempts.

---



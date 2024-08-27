*File Transfer Protocol (FTP)* is a standard network protocol used to **transfer files from one host to another host over a TCP-based network**, such as the internet 
 - often used to upload web pager and other documents from a private development machine to a public web-hosting server 
 - FTP is built on a **client-server architecture** and *uses separate control and data connections* between the client and the server 

A typical FTP session works using two channels : 
- a Command channel (sometimes aka control channel)
- a data channel 

The FTP server may support either active or passive connections, or both 
- In an active FTP connection, the client opens a port and listens. The server is actively required to connect to it 
- In a passive FTP connection, the server opens a port and listens (passively) and the client connects to it 

This separation of command information and data into separate channels is a way of being able to send commands to the server without having to wait for the current data transfer to finish. If both channels were interlinked, you could only enter commands in between data transfers, which wouldn't be efficient for either large file transfers, or slow internet connections.

### Key Concepts of FTP

1. **Clients and Servers:**
    
    - **FTP Client:** A software application used to access and transfer files to and from an FTP server.
    - **FTP Server:** A server that hosts files and responds to requests from FTP clients.
2. **Data Transfer Modes:**
    
    - **Active Mode:** The client opens a port and waits for the server to connect to it.
    - **Passive Mode:** The server opens a port and waits for the client to connect to it. This is often used to traverse firewalls and NAT.
3. **Authentication:**
    
    - **Anonymous FTP:** Allows users to access files without a username and password.
    - **Authenticated FTP:** Requires users to provide a username and password to access the server.
4. **Ports:**
    
    - **Control Connection (Command Port):** Port 21 is used to send commands.
    - **Data Connection (Data Port):** Port 20 is used for data transfer in active mode, and a random port is used in passive mode.

### How FTP Works

1. **Establishing a Connection:**
    
    - The client connects to the server using the control connection on port 21.
    - The server may prompt the client for authentication (username and password).
2. **Command and Response:**
    
    - The client sends FTP commands to the server (e.g., LIST, RETR, STOR).
    - The server responds to these commands, providing information or performing actions as requested.
3. **Data Transfer:**
    
    - For data transfer commands (e.g., downloading or uploading files), a separate data connection is established.
    - Data can be transferred in binary mode (for binary files) or ASCII mode (for text files).

### Common FTP Commands

- **USER:** Specifies the username for authentication.
- **PASS:** Specifies the password for authentication.
- **LIST:** Lists files and directories in the current directory.
- **RETR:** Retrieves (downloads) a file from the server.
- **STOR:** Stores (uploads) a file to the server.
- **PWD:** Prints the current working directory.
- **CWD:** Changes the working directory.
- **QUIT:** Closes the connection.

### Security Considerations

1. **Plaintext Transmission:** FTP transmits data, including usernames and passwords, in plaintext, making it vulnerable to interception. Use secure alternatives like SFTP or FTPS.
    
2. **Firewall and NAT Issues:** FTP can have issues with firewalls and NAT due to its use of separate control and data connections. Passive mode can help mitigate this.
    
3. **Anonymous Access:** If anonymous FTP is enabled, ensure it only provides access to non-sensitive files and directories.
    

### Secure Alternatives to FTP

1. **SFTP (SSH File Transfer Protocol):**
    
    - Uses SSH to encrypt both commands and data.
    - Commonly uses port 22.
2. **FTPS (FTP Secure):**
    
    - Adds support for TLS and SSL to FTP.
    - Can use explicit FTPS (FTPES) or implicit FTPS.

---

# Enumerating FTP 
#enumeration 

1. **Banner Grabbing**
	- Banner grabbing helps identify the FTP server software and version 
	- `telnet <target_ip> 21`
	- `nc -v <target_ip> 21`
	- `nmap -sV -p21 <target_ip>`
2. **Listing FTP directories**
	- establish an FTP connection and do `ls`
3. **Checking for Anonymous Access**
	- many FTP servers allow anonymous access, which can provide access to files without needing credentials 
	``` terminal
	ftp <target_ip>
	Name (target_ip:username): anonymous
	Password: <leave blank>
	```
4. **Using nmap scripts**
	- nmap has built-in scripts for enumerating FTP services 
	- #### Common Nmap FTP Scripts
		- *ftp-anon:* Checks for anonymous FTP login.
		- *ftp-bounce:* Checks for FTP bounce vulnerabilities.
		- *ftp-syst:* Retrieves the system information.
		- *ftp-libopie:* Checks for a specific vulnerability in FreeBSD's ftpd.
	```terminal
	nmap -p 21 --script=ftp-anon,ftp-bounce,ftp-syst,ftp-libopie <target_ip>
	```
5. **Enumerating FTP files and directories**
	- After logging in, you can use FTP commands to navigate and list directories.
	- Common FTP Commands
		- **`ls` or `dir`:** Lists files and directories.
		- **`cd <directory>`:** Changes the directory.
		- **`get <filename>`:** Downloads a file.
		- **`put <filename>`:** Uploads a file.
		- **`pwd`:** Prints the current working directory.
6. **Using for Enumeration**
	- Metasploit can also be used to enumerate FTP services.
7. **Brute Forcing FTP credentials**

### Security Best Practices

1. **Disable Anonymous Access:** Ensure anonymous login is disabled unless absolutely necessary.
2. **Use Strong Passwords:** Enforce strong passwords for FTP accounts.
3. **Use FTPS/SFTP:** Prefer secure alternatives like FTPS or SFTP over plain FTP.
4. **Limit User Permissions:** Restrict user permissions to the minimum required for their tasks.
5. **Keep Software Updated:** Regularly update FTP server software to patch known vulnerabilities.

---

# Exploiting FTP

1. **Anonymous Access Misconfiguration**
	- Some FTP servers are configured to allow anonymous access, which can lead to unauthorized file access 
	- try logging in with the username anonymous and any password or no password 
2. **Default or Weak Credentials**
	- FTP servers often come with default credentials or weak passwords that can be exploited 
	- Use tools like Hydra or Medusa to perform a brute-force attack with a list of common usernames and passwords 
3. **Exposed Sensitive Files**
	- Sometimes sensitive files are stored on FTP servers without proper access control
	- try listing out the files and directories on the server and explore them further and the try getting them with `get <file_name/path>`
4. **FTP Bounce Attack**
	- An FTP bounce attack allows an attacker to use the FTP server to scan other hosts on the network or to proxy connection to other systems 
	- How to check
		- Some FTP servers allows the use of `PORT` command to specify a different IP address and port for data transfer
		- *EXPLOIT* : 
			- Use the nmap FTP bounce scan option to test for this vulnerability 
			`nmap -b <ftp_username>:<ftp_password>@<ftp_server_ip> <target_ip>`
5. **Software Vulnerabilities**
	- Exploiting specific software vulnerabilities in the FTP software itself, such as buffer overflows, misconfigurations,  or un-patched security flaws
	- How to check 
		- identify FTP server software and version using banner grabbing or service detection 
		`nmap -sV -p 21 <server_ip>`
6. **Passive Mode Attack**
	- FTP passive mode can sometimes be exploited by an attacker to gain access to the data connection, especially if the server is behind a poorly configured firewall 
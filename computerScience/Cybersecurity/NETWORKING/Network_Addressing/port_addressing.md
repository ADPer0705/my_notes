aka the *Network Identifier of a process* 
- defined on Transport layer
- identifies a process on a machine, 
- no two processes on a machine can have same port number 
- A port address in TCP/IP is 16 bits in length

A logical port (also called a socket) is little more than an address number that both ends of the communication link agree to use when transferring data. 
- Ports allow a single IP address to be able to support multiple simultaneous communications, each using a different port number. 
- In the Application Layer of the TCP/IP model (which includes the Session, Presentation, and Application Layers of the OSI model) reside numerous application- or service-specific protocols. Data types are mapped using port numbers associated with services. 
	- For example, web traffic (or HTTP) is port 80. 
	- Secure web traffic (or HTTPS) is port 443.  
	- You’ll note that in several cases a service (or protocol) may have two ports assigned, one secure and one insecure. When in doubt, systems should be implemented using the most secure version as possible of a protocol and its services.

- Well-known ports (0–1023): 
	- These ports are related to the common protocols that are at the core of the Transport Control Protocol/Internet Protocol (TCP/IP) model, Domain Name Service (DNS), Simple Mail Transfer Protocol (SMTP), etc.
- Registered ports (1024–49151): 
	- These ports are often associated with proprietary applications from vendors and developers. 
	- While they are officially approved by the Internet Assigned Numbers Authority (IANA), in practice many vendors simply implement a port of their choosing. 
	- Examples include Remote Authentication Dial-In User Service (RADIUS) authentication (1812), Microsoft SQL Server (1433/1434) and the Docker REST API (2375/2376).
- Dynamic or private ports (49152–65535): 
	- Whenever a service is requested that is associated with well-known or registered ports, those services will respond with a dynamic port that is used for that session and then released.

---

# Secure Ports
Clear text information is subject to network sniffing. 
- This tactic uses software to inspect packets of data as they travel across the network and extract text such as usernames and passwords. 
- Network sniffing could also reveal the content of documents and other files if they are sent via insecure protocols. 

below shows some of the insecure protocols along with recommended secure alternatives.
- **21 - FTP**
	- Port 21, File Transfer Protocol (FTP) sends the username and password using plaintext from the client to the server. 
	- This could be intercepted by an attacker and later used to retrieve confidential information from the server. 
	- *The secure alternative, SFTP*
		- *on port 22*
		- Secure File Transfer Protocol
		- uses encryption to protect the user credentials and packets of data being transferred.
- **23 - Telnet**
	- Port 23, telnet, 
	- is used by many Linux systems and any other systems as a basic text-based terminal. 
	- All information to and from the host on a telnet connection is sent in plaintext and can be intercepted by an attacker. 
		- This includes username and password 
		- as well as all information that is being presented on the screen, since this interface is all text. 
	- *Secure Shell (SSH) on port 22* uses encryption to ensure that traffic between the host and terminal is not sent in a plaintext format
- **25 - SMTP**
	- Port 25, Simple Mail Transfer Protocol (SMTP) 
	- it is the default unencrypted port for sending email messages. 
	- Since it is unencrypted, data contained within the emails could be discovered by network sniffing. 
	- The secure alternative is to use *port 587 for SMTP using Transport Layer Security (TLS)* 
		- which will encrypt the data between the mail client and the mail server.
- **37 - Time**
	- Port 37, Time Protocol, 
	- may be in use by legacy equipment 
	- has mostly been *replaced by using port 123 for Network Time Protocol (NTP)* 
		- NTP on port 123 offers better error-handling capabilities, which reduces the likelihood of unexpected errors.
- **53 - DNS**
	- Port 53, Domain Name Service (DNS)
	- is still used widely. 
	- However, using *DNS over TLS (DoT) on port 853* protects DNS information from being modified in transit.
- **80 - HTTP**
	- Port 80, HyperText Transfer Protocol (HTTP) 
	- is the basis of nearly all web browser traffic on the internet. 
	- Information sent via HTTP is not encrypted and is susceptible to sniffing attacks. 
	- *HTTPS using TLS encryption is preferred*
		- *port 443*
		- it protects the data in transit between the server and the browser. 
		- Note that this is *often notated as SSL/TLS*. 
		- Secure Sockets Layer (SSL) has been compromised is no longer considered secure. 
		- It is now recommended for web servers and clients to use Transport Layer Security (TLS) 1.3 or higher for the best protection.
- **143 - IMAP**
	- Port 143, Internet Message Access Protocol (IMAP) 
	- is a protocol *used for retrieving emails*. 
	- IMAP traffic on port 143 is not encrypted and susceptible to network sniffing. 
	- The secure alternative is to *use port 993 for IMAP*,
		- IMAP for SSL/TLS
		- which *adds SSL/TLS* security to encrypt the data between the mail client and the mail server.
- **161/162 - SNMP**
	- Ports 161 and 162, Simple Network Management Protocol
	- commonly used to *send and receive data used for managing infrastructure devices*. 
	- Because sensitive information is often included in these messages, it is recommended to *use SNMP version 2 or 3 (abbreviated SNMPv2 or SNMPv3)* 
		- to include encryption and additional security features. 
		- Unlike many others discussed here, all versions of SNMP use the same ports, so there is not a definitive secure and insecure pairing. 
		- Additional context will be needed to determine if information on ports 161 and 162 is secured or not.
- **445 - SMB**
	- Port 445, Server Message Block (SMB), 
	- used by many versions of Windows *for accessing files over the network*
	- Files are transmitted unencrypted, and many vulnerabilities are well-known 
	- Therefore, *it is recommended that traffic on port 445 should not be allowed to pass through a firewall at the network perimeter*. 
	- A more secure alternative is *port 2049, Network File System (NFS)* 
		- Although NFS can use encryption, it is recommended that NFS not be allowed through firewalls either.
- **389 - LDAP**
	- Port 389, Lightweight Directory Access Protocol (LDAP), 
	- *used to communicate directory information from servers to clients*. 
		- This can be an address book for email or usernames for logins. 
		- The LDAP protocol also allows records in the directory to be updated, introducing additional risk.
	- Since LDAP is not encrypted, it is susceptible to sniffing and manipulation attacks. 
	- *Lightweight Directory Access Protocol Secure (LDAPS)*
		- port *636*
		- adds SSL/TLS security to protect the information while it is in transit.
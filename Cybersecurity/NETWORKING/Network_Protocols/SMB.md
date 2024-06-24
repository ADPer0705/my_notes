i.e. **SERVER MESSAGE BLOCK** protocol
- a client-server communication protocol 
- used for sharing access to files, printers, serial ports and other resources on a network 

The servers make the file system and other resources available to clients on the network. Client computers may have their own hard disks, but they also want access to the shared file systems and printers on the server 

The SMB protocol is 
- known as a response-request protocol 
	- it transmits multiple messages between the client and server to establish a connection 
- Client connects to the server using TCP/IP (actually NetBIOS over TCP/IP as specified in RFC1001 and RFC1002), NerBEUI or IPX/SPX

once they have established a connection, clients can then send commands (*SMBs*) to the server that allows them to access shares, open files, read and write files, and generally do all the sort of things that the user wants to do with the file system. however in the case of SMB these things are done over the internet 

*what runs SMB ?*
- Microsoft Windows Operating Systems *since Windows 95* have included client and server SMB protocol support 
- *Samba*, an open source server that supports the SMB protocol, was released for unix systems

### Key Features :
- **File Sharing** 
	- enables users to access files on remote servers as if they were local 
- **Printer Sharing** 
	- Allows users to send print jobs to printers connected to other computers on the network 
- **Inter-process Communication**
	- Facilitates the sharing of configuration data and other system information between computers 
- **Authentication and Authorization**
	- Ensures that only authorized users can access resources 

---

# Enumerating SMB
Typically, there are SMB share drives on a server that can be connected to and used to view or transfer files. SMB can often be a great starting point for an attacker looking to discover sensitive information 

#### Port Scanning 
The first step of enumeration is to conduct a port scan, to find out as much information as you can about the services, application, structure and operating system of the target machine
#### Enum4Linux
Enum4Linux is a tool 
- used to enumerate SMB shares on both Windows and Linux systems
- It is basically a wrapper around the tools in the Samba package and makes it easy to quickly extract information from the target pertaining to SMB 

The syntax is : 
```terminal
enum4linux [options] ip
```

![[Screenshot from 2024-06-22 15-28-56.png]]

---

# Exploiting SMB
While there are vulnerabilities that can allow remote code execution by exploiting SMB, one's more likely to encounter a situation where the best way into a system is due to misconfigurations is the system. 

here we will see an example exploiting anonymous SMB share access --- a common misconfiguration that can allow us to gain information that will lead to a shell

#### method breakdown 
from our enumeration stage, we know :
- The SMB share location 
- The name of an interesting SMB share 

NOTE : 
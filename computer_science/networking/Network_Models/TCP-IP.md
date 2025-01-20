TCP/IP is the de-facto network reference model make up of interactive layers,each of which provide a specific functionality. It contains independent protocols that can be mixed and matched depending on the needs of the system 

TCP/IP protocol is defined using five layers 
- physical 
- data link 
- network 
- transport 
- application

**note** : in some references the TCP/IP layer is also described into 4 layers
- Application
- Transport
- Internet
- Network Interface

# Physical Layer 
- first layer 
- deals with data in the form of bits 
- mainly handles the host to host communication in the network 
- defined the *encoding techniques*, *transmission medium* and *mode of communication* between two devices 

# Data-Link Layer 
- second layer
- deals with data in the form of data frames 
- performs physical addressing of the data packets by adding the source and the destination addresses known as *MAC address* 
- facilitates delivery of frames within the same network 

- Data link layer also provides *flow control* 
	- prevent faster sending node on one side of the link from overwhelming the slow receiving node on another side of link with large amount of data, more than its capacity 
- *Error Control* 
	- process of detecting and correcting data frames that have been corrupted or lost during transmission.

# Network Layer
- responsible for the transmission of the data between two devices on the different networks 
- It supports IP for identifying the devices uniquely among the networks 
	- This in turn uses four supporting protocols 
		- ARP
			- used to associate an IP address with the physical address 
		- DHCP
			- a network management protocol is used to dynamically assign the IP address and other information to each host on the network 
		- ICMP 
			- used by hosts and gateways to send notifications of communication problems back to the sender 
		- IGMP
			- is used to facilitate the simultaneous transmission of a message to a group of recipients
- also provides 
	- *addressing*
	- *congestion control*
		- a mechanism that controls the entry of data packets into the network enabling a better use of a shared network infrastructure and avoiding congestive data losses 
	- *routing services* 
		- there are multiple routes available from a source to a destination and one of them is to be chosen 
		- he network layer decides the optimal route to be taken 

# Transport Layer
- deals with data in the form of data segments and is responsible fr transporting data and setting up communication between the application layer and the lower layers
- This facilitates end to end communication and error free delivery of data
- It also facilitates flow control between communicating processes by specifying data rates
- the transport layer also provides congestion control 
- There are mainly two protocols working in the transport layer :
	1. [[TCP]]
	2. [[UDP]]

# Application Layer 
- This single layer performs all thee operations of a session, presentation and application layer of the OSI model
- If the user wants to communicate with various networking systems, this layer combines the functions of interfacing with various applications like, data encoding, data translation, etc.
- This important protocols working on this layer are 
	- DNS
	- FTP
	- HTTP
	- Telnet
	etc

---  

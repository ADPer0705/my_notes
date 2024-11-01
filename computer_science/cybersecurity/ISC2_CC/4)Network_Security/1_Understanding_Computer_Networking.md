To properly establish secure data communications, it is important to explore all of the technologies involved in computer communications
- *Hardware*
	- The physical parts of a computer and related devices 
- *Software*
	- Computer programs and associated data that may be dynamically written or modifies during execution
	- NIST SP 80--37 Rev.2
- *Protocols*
	- A set of rules (formats and procedures) to implement and control some type of association (that is communication) between systems
	- NIST SP 800--82 Rev.2
- *Encryption*
	- The process and act of converting the message from its plaintext to ciphertext 
	- Sometimes it is also referred to as enciphering 
	- The two terms are sometimes used interchangeably in literature and have similar meaning 

---

# Types of Networks
There are two basic types of networks:
- **Local area network (LAN)** 
	- A local area network (LAN) is a network typically spanning a single floor or building. This is commonly a limited geographical area.
- **Wide area network (WAN)** 
	- Wide area network (WAN) is the term usually assigned to the long-distance connections between geographically remote networks.

---

# Types of Network Devices 

#### Hub
- Hubs are used to connect multiple devices in a network. 
- They’re less likely to be seen in business or corporate networks than in home networks. 
- Hubs are wired devices and are not as smart as switches or routers.

![[Screenshot from 2024-07-03 23-06-33.png]]


#### Switch
- also known as an intelligent hub. 
- Switches are wired devices that *know the addresses of the devices connected to them and route traffic to that port/device rather than re-transmitting to all devices*.
- Offering greater efficiency for traffic delivery and improving the overall throughput of data, 
- switches are smarter than hubs, but not as smart as routers. 
- Switches can also create separate broadcast domains when used to create VLANs
	- Broadcast transmission is a one-to-many (one-to-everyone) form of sending internet traffic 
	- A Virtual Area Network is a logical group of workstations, servers, and network devices that appear to be on the same LAN despite their geographical distributions 

![[Screenshot from 2024-07-03 23-14-16.png]]

#### Routers
- Routers are used to control traffic flow on networks and are often used to 
	- connect similar networks and 
	- control traffic flow between them. 
- Routers can be wired or wireless 
- can connect multiple switches. 
- Smarter than hubs and switches, *routers determine the most efficient “route” for the traffic to flow across the network*.

![[Screenshot from 2024-07-03 23-15-49.png]]

#### Firewall
- Firewalls are *essential tools in managing and controlling network traffic and protecting the network*. 
- A firewall is a network device *used to filter traffic*. 
- It is *typically deployed between a private network and the internet*, but it can also be deployed between departments (segmented networks) within an organization (overall network). 
- Firewalls filter traffic based on a defined set of rules, also called *filters* or *access control lists*.

![[Screenshot from 2024-07-03 23-17-21.png]]

#### Servers
- A server is a computer that *provides information to other computers on a network*. 
- Some common servers are 
	- web servers, 
	- email servers, 
	- print servers, 
	- database servers and 
	- file servers. 
- All of these are, by design, networked and accessed in some way by a client computer. 
- Servers are usually secured differently than workstations to protect the information they contain.

![[Screenshot from 2024-07-03 23-19-02.png]]

#### Endpoint
- Endpoints are the ends of a network communication link. 
- One end is often at a server where a resource resides, and the other end is often a client making a request to use a network resource. 
- An endpoint can be another server, desktop workstation, laptop, tablet, mobile phone or any other end user device.

![[Screenshot from 2024-07-03 23-20-11.png]]


---

# Other Networking Terms

## Ethernet
- Ethernet (IEEE 802.3) is a standard that defines wired connections of networked devices. 
- This standard defines the way data is formatted over the wire to ensure disparate devices can communicate over the same cables

![[Screenshot from 2024-07-03 23-21-45.png]]

## Device Address
- **Media Access Control (MAC) Address** 
	- Every network device is assigned a Media Access Control (MAC) address. 
	- An example is 00-13-02-1F-58-F5. 
	- The first 3 bytes (24 bits) of the address denote the vendor or manufacturer of the physical network interface. 
	- No two devices can have the same MAC address in the same local network; otherwise an address conflict occurs.
- **Internet Protocol (IP) Address** 
	- While MAC addresses are generally assigned in the firmware of the interface, IP hosts associate that address with a unique logical address. 
	- This logical IP address represents the network interface within the network and can be useful to maintain communications when a physical device is swapped with new hardware. 
	- Examples are 192.168.1.1 and 2001:db8::ffff:0:1.

---


> [!NOTE] NOTE :
> - refer to the notes on network models
> - Network Protocols


Shortening the IPv6 address to human readable format 
- remove the longest sequence of consecutive *zero-fields* and replace with a double colon `::`
- remove the leading zeroes in each field 

---

# Security of a Network
TCP/IP's vulnerabilities are numerous. 
Improperly implemented TCP/IP stacks in various operating systems are vulnerable to various 
- DoS/DDoS attacks 
- fragment attacks
- oversized packet attacks 
- spoofing attacks 
- man-in-the-middle attacks 
TCP/IP is also subject to passive attacks via monitoring or sniffing. 

![[Screenshot from 2024-07-04 13-08-54.png]]

---


> [!NOTE] NOTE
> - refer ports



*Internet Protocol* is the protocol that is used to define the source and destination IP address of a packet as it traverses the internet. It is often used in conjunction with other protocols such as TCP; hence, the often-used conjunction, TCP/IP


> [!NOTE] Title
> **NOTE** : These are the notes for Internet Protocol, The notes pertaining to IP addressing are [here](obsidian://open?vault=Cybersecurity&file=NETWORKING%2FNetwork_Addressing%2FLogical_Address%2FIP%2FIP_Basics) 


Inspiration for the IP packet has been taken from the *postal system*. A postal service is a *connection-less service*, in which letters may be 
- transmitted through multiple routes to reach the destination without setting up a connection between them. 
- Here, the sender and receiver are not sure about each other’s presence, as well as, the sender does not know whether the letter has reached to destination or not.
- IP does not provide guaranteed services. Therefore, It’s services are called Best Effort services
	- No acknowledgment is sent to the sender after receiving the data on the receiver side
- IP protocol is also media independent. 
	- It does not depend on any transmission media, it can carry data on any medium such as twisted pair cable, fiber optics, co-axial cable as well as a wireless medium. 
	- This enables IP packets to move through a long route encompassing different types of networks.

---
# IPv4
- made up of *32 bits of four octets* or *4 groups of 8 bits*
	- there are 4,294,967,296 number of addressed
- each of the four numbers ranges from 0 255 (2^8 values)

## Classes of IP Addresses
IP addresses are generally put into three classes 
- Class A : 0.0.0.0 - 127.255.255.255
- Class B : 128.0.0.0 - 191.255.255.255
- Class C : 192.0.0.0 - 223.255.255.255
sub-netting and subnet masks that vary with these different IP classes 

## Public vs Private IP Addresses
It's important to note that our IP address system has its limitations :
- there are not enough IP address to cover all devices that need to connect to the internet 
	- The IPv4 system we are working with now has only 4.3 billion IP addresses 

As a result, a system was developed to reuse a group of IP addresses within a LAN
- that are not usable over the internet 
- These addresses can be used over and over again within each local area network, but not over the internet, thereby conserving the number of IP addresses necessary to keep the world going 'round
- This private address include : 
	- 192.168.0.0 - 192.168.255.255 
	- 10.0.0.0 - 10.255.255.255 
	- 172.16.0.0 - 172.16.255.255

![[Screenshot from 2024-05-22 19-58-56.png]]

This is your private IP that is only usable on the local area network. To communicate over the internet, your IP address must be translated to a public IP by a NAT device

---
# IP Packet

![[Screenshot from 2024-05-23 01-46-56.png]]

Row 1
- *Version*: This defines the version of IP, *either v4 or v6*.
- *IHL*: Defines the header length.
- *Type of Service (TOS)*: This defines the type of service of this packet. 
	- These include 
		- minimize delay, 
		- maximize throughput, 
		- maximize reliability, and 
		- minimize monetary cost.
	- specify the quality of service (QoS) level for the IP packet.
	- The ToS field was an 8-bit field that allowed packets to be marked with a priority level, indicating the desired treatment of the packet by routers and other networking devices along its path. It allowed for different types of service, such as low-delay, high-throughput, or high-reliability
	- the Type of Service (ToS) field has been replaced by the Differentiated Services Code Point (DSCP) and Explicit Congestion Notification (ECN) fields in modern implementations
- *Total Length*: This defines the total length of the IP datagram (including the data) or the fragment. Its *maximum value is 65,535*, indicating that there are 65,535 bytes in the fragment.

Row 2
- *Identification*: This field uniquely identifies each packet. It can be critical in reassembling fragmented packets.
- *IP Flags*: This *field defines whether the packet is fragmented (M) or not (D)*. The manipulation of the field can be used to evade IDS and firewalls. 
- *Fragment Offset*: This field is used when packets are fragmented. It *defines where the packets should be reassembled from the beginning of the IP header*.

Row 3
- *TTL*: This is the "time to live." This *defines how many hops across the internet before the packet expires*. *It varies by the operating system making it helpful to identify the OS of the sender*.
- *Protocol*: This field defines what protocol is being used with IP. Most often, it will be 
	- 6 for TCP, 
	- 1 for ICMP, 
	- 17 for UDP, among others. 
- *Header Checksum*: This is an error-checking field. It calculates the checksum (a simple algorithm) to determine the integrity of the data in the header. 

Rows 4 & 5
- *Source / Destination*: These rows of the IP header are probably the most important part of the header as it contains the *source and destination IP address*.

Row 6
- *Options*: This field is variable in length, and its use is optional (as you might expect).
- *Padding*: This field is used to fill out, if necessary, the remaining bits and bytes of the header.

---
Based on the first few bits, and the size of a Network ID and host ID, the IP addresses have been divided into f*ive classes A, B, C, D, and E*. 
- These classes facilitate the management and distribution of IP addresses to various users, organizations and groups. 
	- Addresses starting with 0 and one byte of network id are class A addresses. 
	- Class B addresses start with 1 0 and have a network id of two bytes. similarly, 
	- class C starts with 1 1 0 and has 3 bytes of network id. 
- Classes A, B and C are used to assign IP addresses to users or organizations 
- Class D and E do not have network id and host id distribution. Addresses from these classes have special purposes. 
	- Class D addresses, which start with 1110, are used in multicasting, while 
	- class E addresses starting with 1111 are reserved for future use.

---

IPv4 addresses can be unicast, multicast, or broadcast. 
- **Unicast addresses** *identify a single machine and allow one-to-one communication*, found normally on the Internet. 
- **Multicast addresses** *identify a group of machines*, represented by *class D addresses*, and allow *communication from one to many*. 
- **Broadcast addresses** *represent all the machines in a network* and allow *one to all communication* normally used in a local area network.

---

The current version of the IP protocol (version 4) has some issues associated with it
- The *available IP addresses are definite and short*. We are going to consume them shortly. 
- The IPv4 *has some least necessary fields which increase the load over the routers to process*. 
- The IPv4 protocol *does not focus on the quality of service of the communication* instead the data from an interactive communication and email is forwarded with the same priority.

To address the issues of IPv4 protocol, IPv6, the latest version of IP protocol has been developed with an *improved packet header* and *Large size addresses* for increasing the number of addresses.

# IPv6
- recent version of internet protocol address 
- address size of IPv6 is 128-bit number 
	- it allows 3.4 x 10^38 unique IP addresses which seems to be more than sufficient to support trillions of internet devices present now or coming in the future 
	- as the addresses are very large, they're represented in a colon hexadecimal notation to easily manage them 


As, for IPv4 addresses, the IPv6 addresses have also been divided into three categories, but with a difference. These categories are 
- unicast
	- uniquely identifies an interface of an IPv6 node
	- A packet sent to a unicast is delivered to the interface identifies by that address 
- multicast
	- identifies a group of IPv6 interfaces
	- A packet sent to multicast address is processed by all members of the multicast group 
- anycast
	- is assigned to multiple interfaces 
	- A packet sent to an anycast address is delivered to only one of these interfaces, usually the nearest one 

Let’s discuss the improved header of the IPv6 protocol. In this header, 
- the fields like header length, fields related to fragmentation, etc. have been removed to make it smaller in size. 
- Version, payload length, and hop limit have usual meanings and traffic class and flow label are used for providing various quality of service to various applications. 
- In TCP the base header contains only the mandatory information required for communication. The rest of the optional functionality has been represented as extension headers. 
- The next header field points to the next header being carried by the IP packet or behaves in a similar way as a protocol in IPv4 if no extension header is available. 
- The source address and destination address are 128 bits each, representing the sender and receiver of the packet.


Ipv4 and IPv6 protocols have various differences between them. Let’s understand them. 
- IPv4 came in 1981, fully deployed now while IPv6 has been introduced in 1998, and is still in the deployment phase. 
- IPv4 addresses are 32-bit while IPv6 addresses are 128-bit in length. 
- IPv6 has a very large address base compared to ipv4.
- IPv4 addresses are represented in dotted decimal notation, while IPv6 addresses are represented in colon hexadecimal notation.
- IPv4 addresses are configured manually by the administrator or DHCP protocol, while IPv6 allow machines to auto configure themselves by creating their own IP addresses.
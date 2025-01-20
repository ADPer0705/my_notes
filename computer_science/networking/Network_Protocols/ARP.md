ARP stands for **address resolution protocol**. 
- This is a protocol that is used to *resolve IP addresses to MAC Addresses*.
	- The IP address of a device identifies it globally, while the MAC address identifies it locally. 
	- Therefore, a machine needs an IP address for sending data to the Internet and a MAC address is used to deliver the data inside a network.
	- ARP is the technology that is responsible for allowing devices to identify themselves on a network by allowing a device to associate it's MAC address with an IP address on the network
	- As the IP address and MAC Address have no logical relationship, the mapping is maintained in a table called *ARP cache*, which is *populated using ARP protocol*.

To understand, ARP protocol let’s first see, how data travels inside a LAN. 
- Whenever the organization gateway(router) receives a packet from outside, it needs the *MAC address of the target machine*, which it *finds with the help of ARP protocol*. 
- It encapsulates the packet inside a data link layer frame by adding its own MAC address as the sender and the MAC address of the receiver to send to the local machine.

## How ARP works?
Each device within a network has a ledger to store information on, which is called a cache. IN the context of ARP, this cache store the identifiers of other devices on the network

In order to map the two identifiers together (IP and MAC), ARP sends two types of messages : 
1. ARP Request
2. ARP Reply

- When an **ARP request** is sent, a message is broadcasted on the network to other devices asking, "What is the mac address that owns this IP address?" 
- When the other devices receive that message, they will only respond if they own that IP address and will send an **ARP reply** with its MAC address. 
- The requesting device can now remember this mapping and store it in its **ARP cache** for future use

![[Screenshot 2024-12-26 134332.png]]

- When a router receives a packet from outside, it *first checks its ARP cache for the MAC address of the target machine*, based on the IP address of the target machine (As received in the packet). 
- If the MAC address is found in the cache, 
	- the packet is encapsulated in the frame and sent to the target machine.
- If the router does not find the MAC address of the target in the ARP cache on the packet arrival, 
	- an ARP request packet asking the desired MAC address is broadcasted to the entire network. 
	- As a result, the target machine sends a unicast response to the router mentioning it’s MAC address. 
	- Routers records this MAC address in its ARP cache, encapsulates the packet in a frame and sends to the target machine.

The ARP cache is maintained by all the machines in a network and can be seen using ARP –a command.



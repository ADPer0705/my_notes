*Dynamic Host Configuration Protocol* assigns IP addresses dynamically4
- A device does not have the same IP address all the time 
- Most of the time, these IP address assignment are on a local area network
- on LANs we use private IPs
- When each device is connected to the LAN, it must request an IP address. That device sends the request to the DHCP server that assigns an IP address to that system for a fixed length of time, known as a "lease."
- Each time you connect to the LAN, you are likely to receive a different (dynamic) IP address, but usually in the same range. For instance, 192.168.0.0 - 192.168.255.255

IP addresses can be assigned either manually, by entering them physically into a device, or automatically and most commonly by using a _**DHCP** (**D**ynamic **H**ost **C**onfiguration **P**rotocol)_ server. 
- When a device connects to a network, if it has not already been manually assigned an IP address, it sends out a request (_DHCP Discover_) to see if any DHCP servers are on the network. 
- The DHCP server then replies back with an IP address the device could use (_DHCP Offer_). 
- The device then sends a reply confirming it wants the offered IP Address (_DHCP Request_), 
- then lastly, the DHCP server sends a reply acknowledging this has been completed, and the device can start using the IP Address (_DHCP ACK_).

![[Screenshot 2024-12-28 121400.png]]


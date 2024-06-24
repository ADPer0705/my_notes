*Network Address Translation* is a protocol whereby internal IP addresses are 'translated' to an external IP address that can be routed through the internet to its destination.
- private IP addresses of the systems inside the LAN cannot use their IP addresses on the internet because they are not unique (every LAN uses basically the same IP addresses inside their network).

- The NAT device accepts requests to traverse the internet from an internal machine. 
- It then records that machine's IP address in a table and converts the IP address to the external IP address of the router. 
- When the packet returns from its destination, the NAT device looks into the saved table of the original request. 
- It forwards the packet to the internal IP address of the system that made the original request within the LAN. 
When working properly, the individual systems and users don't realize this translation is taking place

![[Screenshot from 2024-05-23 01-08-59.png]]

For instance, the diagram above shows four computers with private IP addresses behind a device that is serving as both a NAT device and a router (not uncommon). The devices use their private IP addresses within the LAN, but when they want to communicate over the internet, the NAT device translates it to one of the public IP addresses that are unique on the internet. In this way, the routers along the way know exactly where to send the packets.
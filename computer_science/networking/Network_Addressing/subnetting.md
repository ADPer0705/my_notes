Subnetting is "splitting up a network into smaller, miniature networks within itself"

Think of it as slicing up a cake for your friends. There's only a certain amount of cake to go around, but everybody wants a piece. Subnetting is you deciding who gets what slice and reserving such a slice of this metaphorical cake.

![[Screenshot 2024-12-26 131846.png]]

Whilst you know where to send information if real life to the correct department, networks need to know as well. Network administrators use subnetting to categorize and assign specific parts of a network to reflect this.

---

**Subnetting is achieved by splitting up the number of hosts that can fit within the network, represented by a number called a subnet mask**

an IP address is made up of four sections called octets. The same goes for a subnet mask which is also represented as a number of four bytes (32 bits), ranging from 0 to 255 (0-255)

Subnets use IP addresses in three different ways:
- Identify the network address
- Identify the host address
- Identify the default gateway

Let's split these three up to understand their purposes into the table below:

| **Type**        | **Purpose**                                                                                                                                    | **Explanation**                                                                                                                                                                                                                                      | **Example**   |
| --------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------- |
| Network Address | This address identifies the start of the actual network and is used to identify a network's existence.                                         | For example, a device with the IP address of 192.168.1.100 will be on the network identified by 192.168.1.0                                                                                                                                          | 192.168.1.0   |
| Host Address    | An IP address here is used to identify a device on the subnet                                                                                  | For example, a device will have the network address of 192.168.1.1                                                                                                                                                                                   | 192.168.1.100 |
| Default Gateway | The default gateway address is a special address assigned to a device on the network that is capable of sending information to another network | Any data that needs to go to a device that isn't on the same network (i.e. isn't on 192.168.1.0) will be sent to this device. These devices can use any host address but usually use either the first or last host address in a network (.1 or .254) | 192.168.1.254 |

Subnetting provides a range of benefits, including :
- Efficiency
- Security
- Full Control
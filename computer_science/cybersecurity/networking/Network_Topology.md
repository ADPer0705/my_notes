### Physical Topology
- The term physical topology refers to the way in which a network is laid out physically. 
- two or more devices connect to a link; two or more links form a topology. 
- The topology of a network is the geometric representation of the relationship of all the links and linking devices (usually called nodes) to one another. 
- There are four basic topologies possible: 
	1. mesh
	2. star
	3. bus
	4. ring
#### Mesh Topology
![[Screenshot from 2024-05-16 23-24-24.png]]

- Mesh In a mesh topology, *every device has a dedicated point-to-point link to every other device*. 
	- The term dedicated means that the link carries traffic only between the two devices it connects. 
- To find the number of physical links in a fully connected mesh network with n nodes, we first consider that each node must be connected to every other node. Node 1 must be connected to n - I nodes, node 2 must be connected to n - 1 nodes, and finally node n must be connected to n - 1 nodes. We need n(n - 1) physical links. However, if each physical link allows communication in both directions (duplex mode), we can divide the number of links by 2. 
	- In other words, we can say that in a mesh topology, we need *n(n -1) /2 duplex-mode links*. 
	- To accommodate that many links, *every device on the network must have n - 1 input/output (VO) ports* to be connected to the other n - 1 stations. 
- A mesh offers several advantages over other network topologies. 
	- First, the use of dedicated links guarantees that each connection can carry its own data load, thus *eliminating the traffic problems* that can occur when links must be shared by multiple devices. 
	- Second, *a mesh topology is robust*. If one link becomes unusable, it does not incapacitate the entire system. 
	- Third, there is the *advantage of privacy or security*. When every message travels along a dedicated line, only the intended recipient sees it. Physical boundaries prevent other users from gaining access to messages. 
	- Finally, *point-to-point links make fault identification and fault isolation easy*. Traffic can be routed to avoid links with suspected problems. This facility enables the network manager to discover the precise location of the fault and aids in finding its cause and solution. 
- Disadvantages of mesh topology
	- The main disadvantages of a mesh are related to *the amount of cabling and the number of I/O ports required*. First, because every device must be connected to every other device, installation and reconnection are difficult. 
	- Second, *the sheer bulk of the wiring can be greater than the available space (in walls, ceilings, or floors) can accommodate*. Finally, the *hardware required to connect each link (I/O ports and cable) can be prohibitively expensive*. 
- For these reasons a mesh topology is usually implemented in a limited fashion, for example, 
	- as a backbone connecting the main computers of a hybrid network that can include several other topologies. 
	- One practical example of a mesh topology is the connection of telephone regional offices in which each regional office needs to be connected to every other regional office.


#### Star Topology

![[Screenshot from 2024-05-17 00-28-00.png]]

- In a star topology, each device has a dedicated *point-to-point link only to a central controller*, *usually called a hub*. The devices are not directly linked to one another. 
- Unlike a mesh topology, a star topology *does not allow direct traffic between devices*. 
- *The controller acts as an exchange* : If one device wants to send data to another, it sends the data to the controller, which then relays the data to the other connected device 
- Advantages of star topology
	- A star topology is *less expensive than a mesh topology*. 
	- In a star, each device needs only one link and one I/O port to connect it to any number of others. This factor also makes it *easy to install and reconfigure*. 
	- Far less cabling needs to be housed, and *additions, moves, and deletions involve only one connection: between that device and the hub*. 
	- Other *advantages include robustness. If one link fails, only that link is affected*. All other links remain active. 
	- This factor also lends itself to *easy fault identification and fault isolation*. As long as the hub is working, it can be used to monitor link problems and bypass defective links. 
- Disadvantages of star topology
	- One big disadvantage of a star topology is the *dependency of the whole topology on one single point, the hub*. If the hub goes down, the whole system is dead. 
	- Although a star requires far less cable than a mesh, each node must be linked to a central hub. For this reason, *often more cabling is required in a star than in some other topologies (such as ring or bus)*. 
- The star topology is used in local-area networks (LANs). High-speed LANs often use a star topology with a central hub.

#### Bus Topology 
![[Screenshot from 2024-05-17 00-35-10.png]]

- The preceding examples all describe point-to-point connections. A bus topology, on the other hand, is *multipoint*. *One long cable acts as a backbone to link all the devices* in a network 
- *Nodes are connected to the bus cable by drop lines and taps*. 
	- A **drop line** is a connection running between the device and the main cable. 
	- A **tap** is a connector that either splices into the main cable or punctures the sheathing of a cable to create a contact with the metallic core. 
	- As a signal travels along the backbone, *some of its energy is transformed into heat*. Therefore, it becomes weaker and weaker as it travels farther and farther. For this reason *there is a limit on the number of taps a bus can support and on the distance between those taps*. 
- Advantages of a bus topology include 
	- *ease of installation*. Backbone cable can be laid along the most efficient path, then connected to the nodes by drop lines of various lengths. 
	- In this way, a bus uses less cabling than mesh or star topologies. In a star, for example, four network devices in the same room require four lengths of cable reaching all the way to the hub. In a bus, this redundancy is eliminated. Only the backbone cable stretches through the entire facility. Each drop line has to reach only as far as the nearest point on the backbone. 
- Disadvantages include 
	- *difficult reconnection and fault isolation*. A bus is usually designed to be optimally efficient at installation. It can therefore be *difficult to add new devices*
	- *Signal reflection at the taps can cause degradation in quality*. This degradation can be controlled by limiting the number and spacing of devices connected to a given length of cable. *Adding new devices may therefore require modification or replacement of the backbone*. 
	- In addition, a fault or break in the bus cable stops all transmission, *even between devices on the same side of the problem*. *The damaged area reflects signals back in the direction of origin, creating noise in both directions.* 
- Bus topology was the one of the first topologies used in the design of early local-area networks. 
- Ethernet LANs can use a bus topology, but they are less popular now for reasons we will discuss later

#### Ring Topology 

![[Screenshot from 2024-05-17 00-45-02.png]]

- In a ring topology, each device has a *dedicated point-to-point connection with only the two devices on either side of it*. 
- A signal is *passed along the ring in one direction*, from device to device, until it reaches its destination. 
- *Each device in the ring incorporates a repeater*. When a device receives a signal intended for another device, its repeater regenerates the bits and passes them along 
- Advantages
	- A ring is relatively easy to install and reconfigure. Each device is linked to only its immediate neighbors (either physically or logically). To add or delete a device requires changing only two connections. 
	- The only constraints are media and traffic considerations (maximum ring length and number of devices). 
	- In addition, *fault isolation is simplified*. Generally in a ring, a signal is circulating at all times. If one device does not receive a signal within a specified period, it can issue an alarm. The alarm alerts the network operator to the problem and its location.
- Disadvantages
	- However, unidirectional traffic can be a disadvantage. In a simple ring, a break in the ring (such as a disabled station) can disable the entire network. 
		- This weakness can be solved by using a dual ring or a switch capable of closing off the break. 
- Ring topology *was prevalent when IBM introduced its local-area network Token Ring*. 
- *Today, the need for higher-speed LANs has made this topology less popular.*

#### Hybrid Topology 
A network can be hybrid. For example, we can have a main star topology with each branch connecting several stations in a bus topology

![[Screenshot from 2024-05-17 00-52-54.png]]

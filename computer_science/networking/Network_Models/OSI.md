# THE OSI MODEL
Established in 1947, the International Standards Organization (ISO) is a multinational body dedicated to worldwide agreement on international standards. *An ISO standard that covers all aspects of network communications is the Open Systems Interconnection model*. It was first introduced in the late 1970s. 
- An **open system** *is a set of protocols that allows any two different systems to communicate regardless of their underlying architecture*. 
- The purpose of the OSI model is to *show how to facilitate communication between different systems without requiring changes to the logic of the underlying hardware and software.* 
- The OSI model is *not a protocol*; it is a model for understanding and designing a network architecture that is flexible, robust, and interoperable
- The OSI model is a layered framework for the design of network systems that allows communication between all types of computer systems. 
- It consists of *seven separate but related layers*, each of which defines a part of the process of moving information across a network. 
- An understanding of the fundamentals of the OSI model provides a solid basis for exploring data communications.

![[Screenshot from 2024-05-20 22-24-16.png]]

**A**nxious **P**ale **S**hakespeare **T**reated **N**ervous **D**runks **P**atiently

the way down
**A**ll **P**eople **S**eem **T**o **N**eed **D**ata **P**rocessing
the way up
**P**lease **D**on’t **T**hrow **S**ausage **P**izza **A**way
## Layered Architecture
The OSI model is composed of seven ordered layers: 
1. physical (layer 1), 
2. data link (layer 2), 
3. network (layer 3), 
4. transport (layer 4), 
5. session (layer 5), 
6. presentation (layer 6), and 
7. application (layer 7)
As the message travels from A to B, it may pass through many intermediate nodes. These intermediate nodes usually involve only the first three layers of the OSI model. *In developing the model, the designers distilled the process of transmitting data to its most fundamental elements*. They identified which networking functions had related uses and collected those functions into discrete groups that became the layers. 
- Each layer defines a family of functions distinct from those of the other layers. 
- By defining and localizing functionality in this fashion, the designers created an architecture that is both comprehensive and flexible. 
- Most importantly, the OSI model allows complete interoperability between otherwise incompatible systems. 
	- Within a single machine, each layer calls upon the services of the layer just below it. 
	- Layer 3, for example, uses the services provided by layer 2 and provides services for layer 4. 
	- Between machines, layer x on one machine communicates with layer x on another machine. This communication is governed by an agreed-upon series of rules and conventions called protocols. 
	- The processes on each machine that communicate at a given layer are called *peer-to-peer processes*. *Communication between machines is therefore a peer-to-peer process using the protocols appropriate to a given layer*.

## Peer-to-Peer Processes

At the physical layer, communication is direct: In Figure, device A sends a stream of bits to device B (through intermediate nodes). At the higher layers, however, communication must move down through the layers on device A, over to device B, and then back up through the layers. *Each layer in the sending device adds its own information to the message it receives from the layer just above it and passes the whole package to the layer just below it. At layer 1 the entire package is converted to a form that can be transmitted to the receiving device. At the receiving machine, the message is unwrapped layer by layer, with each process receiving and removing the data meant for it*. For example, layer 2 removes the data meant for it, then passes the rest to layer 3. Layer 3 then removes the data meant for it and passes the rest to layer 4, and so on.

### Interfaces Between Layers
- The passing of the data and network information down through the layers of the sending device and back up through the layers of the receiving device is made possible by an *interface between each pair of adjacent layers*. 
- *Each interface defines the information and services a layer must provide for the layer above it*. 
- *Well-defined interfaces and layer functions provide modularity to a network*. 
- *As long as a layer provides the expected services to the layer above it, the specific implementation of its functions can be modified or replaced without requiring changes to the surrounding layers*

### Organization of the Layers
The seven layers can be thought of as *belonging to three subgroups*. 
- Layers I, 2, and 3-*physical*, *data link*, and *network*-are the **network support layers**; they 
	- deal with the *physical aspects of moving data from one device to another* (such as electrical specifications, physical connections, physical addressing, and transport timing and reliability). 
- Layers 5, 6, and 7-*session*, *presentation*, and *application*-can be thought of as the **user support layers**
	- they *allow interoperability among unrelated software systems*. 
- Layer 4, the *transport layer*, **links the two subgroups and ensures that what the lower layers have transmitted is in a form that the upper layers can use**. 
The upper OSI layers are almost always implemented in software; lower layers are a combination of hardware and software, except for the physical layer, which is mostly hardware.
Figure gives an overall view of the OSI layers, D7 means the data unit at layer 7, D6 means the data unit at layer 6, and so on. The process starts at layer 7 (the application layer), then moves from layer to layer in descending, sequential order. At each layer, a header, or possibly a trailer, can be added to the data unit. Commonly, the trailer is added only at layer 2. When the formatted data unit passes through the physical layer (layer 1), it is changed into an electromagnetic signal and transported along a physical link

Upon reaching its destination, the signal passes into layer 1 and is transformed back into digital form. The data units then move back up through the OSI layers. As each block of data reaches the next higher layer, the headers and trailers attached to it at the corresponding sending layer are removed, and actions appropriate to that layer are taken. By the time it reaches layer 7, the message is again in a form appropriate to the application and is made available to the recipient.

## Encapsulation
Figure reveals another aspect of data communications in the OSI model: encapsulation. A packet (header and data) at level 7 is encapsulated in a packet at level 6. The whole packet at level 6 is encapsulated in a packet at level 5, and so on. In other words, *the data portion of a packet at level N - 1 carries the whole packet (data and header and maybe trailer) from level N*. The concept is called encapsulation; *level N - 1 is not aware of which part of the encapsulated packet is data and which part is the header or trailer. For level N - 1, the whole packet coming from level N is treated as one integral unit*.

---
# LAYERS IN THE OSI MODEL
## Physical Layer
The physical layer **coordinates the functions required to carry a bit stream over a physical medium**. 
- It deals with the mechanical and electrical specifications of the interface and transmission medium. 
- It also defines the procedures and functions that physical devices and interfaces have to perform for transmission to Occur. 
Figure shows the position of the physical layer with respect to the transmission medium and the data link layer.     

![[Screenshot from 2024-05-21 03-29-41.png]]

The physical layer is responsible for movements of individual bits from one hop (node) to the next.
The physical layer is also concerned with the following:
- *Physical characteristics of interfaces and medium* 
	- The physical layer defines the characteristics of the interface between the devices and the transmission medium. It also defines the type of transmission medium. 
- *Representation of bits* 
	- The physical layer data consists of a stream of bits (sequence of Os or 1s) with no interpretation. 
	- To be transmitted, bits must be encoded into signals--electrical or optical. 
	- The physical layer defines the type of encoding (how Os and Is are changed to signals). 
- *Data rate* 
	- The transmission rate-the number of bits sent each second-is also defined by the physical layer. 
	- In other words, the physical layer defines the duration of a bit, which is how long it lasts. 
- *Synchronization of bits* 
	- The sender and receiver not only must use the same bit rate but also must be synchronized at the bit level. 
	- In other words, the sender and the receiver clocks must be synchronized. 
- *Line configuration* 
	- The physical layer is concerned with the connection of devices to the media. 
	- In a point-to-point configuration, two devices are connected through a dedicated link. 
	- In a multipoint configuration, a link is shared among several devices. 
- *Physical topology* 
	- The physical topology defines how devices are connected to make a network. 
	- Devices can be connected by using a 
		- mesh topology (every device is connected to every other device), 
		- a star topology (devices are connected through a central device), 
		- a ring topology (each device is connected to the next, forming a ring), 
		- a bus topology (every device is on a common link), or 
		- a hybrid topology (this is a combination of two or more topologies). 
- *Transmission mode*
	- The physical layer also defines the direction of transmission between two devices: simplex, half-duplex, or full-duplex. 
		- In simplex mode, only one device can send; the other can only receive. The simplex mode is a one-way communication. 
		- In the half-duplex mode, two devices can send and receive, but not at the same time. 
		- In a full-duplex (or simply duplex) mode, two devices can send and receive at the same time.


## Data Link Layer
The data link layer transforms the physical layer, a raw transmission facility, to a reliable link. It makes the physical layer appear error-free to the upper layer (network layer). Figure shows the relationship of the data link layer to the network and physical layers.

![[Screenshot from 2024-05-21 03-43-26.png]]

**The data link layer is responsible for moving frames from one hop (node) to the next**.

Other responsibilities of the data link layer include the following:
- *Framing* 
	- The data link layer divides the stream of bits received from the network layer into manageable data units called frames. 
- *Physical addressing* 
	- If frames are to be distributed to different systems on the network, the data link layer *adds a header to the frame to define the sender and/or receiver of the frame*. 
	- *If the frame is intended for a system outside the sender's network, the receiver address is the address of the device that connects the network to the next one*. 
- *Flow control* 
	- If the rate at which the data are absorbed by the receiver is less than the rate at which data are produced in the sender, *the data link layer imposes a flow control mechanism to avoid overwhelming the receiver* 
- *Error control* 
	- The data link layer *adds reliability to the physical layer by adding mechanisms to detect and re-transmit damaged or lost frames*. 
	- It also uses a mechanism to *recognize duplicate frames*. 
	- Error control is normally achieved through *a trailer added to the end of the frame*. 
- *Access control* 
	- When two or more devices are connected to the same link, data link layer protocols are necessary to determine which device has control over the link at any given time. 
	- Figure illustrates hop-to-hop (node-to-node) delivery by the data link layer.

![[Screenshot from 2024-05-21 21-54-59.png]]


As the figure shows, communication at the data link layer occurs between two adjacent nodes. 
To send data from A to F, three partial deliveries are made. 
- First, the data link layer at A sends a frame to the data link layer at B (a router). 
- Second, the data link layer at B sends a new frame to the data link layer at E. 
- Finally, the data link layer at E sends a new frame to the data link layer at F. 
Note that the frames that are exchanged between the three nodes have different values in the headers. 
- The frame from A to B has B as the destination address and A as the source address. 
- The frame from B to E has E as the destination address and B as the source address. 
- The frame from E to F has F as the destination address and E as the source address. 
The values of the trailers can also be different if error checking includes the header of the frame.

## Network:
The network layer is *responsible for locating the destination of your request*. For example, the Internet is a huge network; when you want to request information from a webpage, it's the network layer that takes the IP address for the page and figures out the best route to take. 
- At this stage we're working with what is referred to as _Logical_ addressing (i.e. IP addresses) which are still software controlled. 
- Logical addresses are used to provide order to networks, categorising them and allowing us to properly sort them. 
- Currently the most common form of logical addressing is the IPV4 format, which you'll likely already be familiar with (i.e 192.168.1.1 is a common address for a home router).

Some of the Protocols working on this layer include 
- OSPF - Open Shortest Path First
- RIP - Routing Information Protocol

The factors that decide what route is take is decided by the following : 
- what is the shortest path
	- least number of devices to travel across
- what path is most reliable
	- have packets been lost on that path before
- which path has faster physical connection
	- is one path using a copper connection or a fibre connection

## Transport:

The transport layer is a very interesting layer that serves numerous important functions. 
- Its first purpose is to *choose the protocol over which the data is to be transmitted*. 
	- The two most common protocols in the transport layer are 
		1. TCP (**T**ransmission **C**ontrol **P**rotocol) and 
		2. UDP (**U**ser **D**atagram **P**rotocol); 
	- with TCP the transmission is *connection-based* which means that a connection between the computers is established and maintained for the duration of the request. This allows for a reliable transmission, as the connection can be used to ensure that the packets _all_ get to the right place. 
	- A TCP connection allows the two computers to remain in constant communication to ensure that the data is sent at an acceptable speed, and that any lost data is re-sent. 
	- With UDP, the opposite is true; packets of data are essentially thrown at the receiving computer -- if it can't keep up then that's _its_ problem (this is why a video transmission over something like Skype can be pixelated if the connection is bad). 
	- What this means is that TCP would usually be chosen for situations where accuracy is favoured over speed (e.g. file transfer, or loading a webpage), and UDP would be used in situations where speed is more important (e.g. video streaming).
- With a protocol selected, the transport layer then divides the transmission up into bite-sized pieces (over TCP these are called _segments_, over UDP they're called _datagrams_), which makes it easier to transmit the message successfully. 

## Session:

When the session layer receives *the correctly formatted data* from the presentation layer, it looks to see if it can *set up a connection with the other computer across the network*. If it can't then it sends back an error and the process goes no further. 
- If a session _can_ be established then it's the *job of the session layer to maintain it, as well as co-operate with the session layer of the remote computer in order to synchronize communications*. 
- The session layer is particularly important as *the session that it creates is unique to the communication in question*. This is what allows you to make multiple requests to different endpoints simultaneously without all the data getting mixed up (think about opening two tabs in a web browser at the same time)! 
When the session layer has successfully logged a connection between the host and remote computer the data is passed down to Layer 4: the transport Layer.

## Presentation:

The presentation layer receives data from the application layer. This *data tends to be in a format that the application understands, but it's not necessarily in a standardized format that could be understood by the application layer in the receiving computer*. 
- The presentation layer *translates the data into a standardized format*, as well as 
- handling any encryption, compression or other transformations to the data. 
With this complete, the data is passed down to the session layer.

## Application:

The application layer of the OSI model *essentially provides networking options to programs running on a computer*. 
- It *works almost exclusively with applications*, 
- *providing an interface* for them to use in order to transmit data. 
When data is given to the application layer, it is passed down into the presentation layer.  

---
# The OSI Model from a Cybersecurity Perspective

![[Screenshot from 2024-05-23 03-12-10.png]]

- The Application layer generally includes applications such as a browser, word processors, and other applications. This layer’s most important attacks are likely to be exploits. These are attacks that can often embed the hacker’s code within the application to take control of the application and the system.
- At the Presentation layer, the most concerning attack is phishing or sending emails to various people with malicious links.
- At the Session layer, the most important attack is hijacking. Hijacking is where an attacker can take over an existing session established legitimately by the user.
- At the Transport layer, the hacker often does their reconnaissance at this layer.
- At the Network layer, the attackers can conduct Man-in-the-Middle MiTM) attacks where they place themselves between a legitimate user and a server, thereby eavesdropping on the traffic and possibly even altering it.
- At the Data Link Layer, the attacker can spoof the MAC addresses, the globally unique address stamped on every networked device and essential to the proper functioning of a LAN (see ARP). 
- Finally, the Physical layer can be attacked using sniffing. Sniffing is the practice of watching and analyzing network traffic (see Wireshark and Sniffers).
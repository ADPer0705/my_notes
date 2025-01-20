
You can use computer networks for various purposes :
- file sharing
- device sharing
- electronic communication

goals of computer networking :
- resource sharing
- reliability
	- making alternate sources of supply for mishaps or emergencies 
- remote communications
- flexible access

# Data Communication
when we communicate, we share information, and this sharing can be 
- local  
- global
*telecommunication* is communication at a distance, "tele" is Greek for "far"

**Data** : refers to information presented in whatever form is agreed upon by the parties creating and using data
**Data communications** are the exchange of data between two devices via some
form of transmission medium such as a wire cable

For data communications to occur,the communicating devices must be part of a *communication system* made up of a combination of hardware (physical equipment) and software (programs). *The effectiveness of a data communications system* depends on four fundamental characteristics :
1. Delivery 
	- The system must deliver data to the correct destination. 
	- Data must be received by the intended device or user and only by that device or user.
2. Accuracy. 
	- The system must deliver the data accurately. 
	- Data that have been altered in transmission and left uncorrected are unusable.
3. Timeliness. 
	- The system must deliver data in a timely manner. 
	- Data delivered late are useless. 
	- In the case of video and audio, timely delivery means delivering data as they are produced, in the same order that they are produced, and without significant delay. This kind of delivery is called real-time transmission.
4. Jitter
	- Jitter refers to the variation in the packet arrival time. 
	- It is the uneven delay in the delivery of audio or video packets. 
	- For example, let us assume that video packets are sent every 3D ms. If some of the packets arrive with 3D-ms delay and others with 4D-ms delay, an uneven quality in the video is the result

## Components
![[Screenshot from 2024-05-16 18-46-44.png]]

1. Message. 
	- The message is the information (data) to be communicated. 
	- Popular forms of information include text, numbers, pictures, audio, and video.
2. Sender 
	- The sender is the device that sends the data message. 
	- It can be a computer, workstation, telephone handset, video camera, and so on.
3. Receiver. 
	- The receiver is the device that receives the message. 
	- It can be a computer, workstation, telephone handset, television, and so on.
4. Transmission medium
	- The transmission medium is the physical path by which a message travels from sender to receiver. 
	- Some examples of transmission media include twisted-pair wire, coaxial cable, fiber-optic cable, and radio waves
5. Protocol 
	- A protocol is a set of rules that govern data communications. 
	- It represents an agreement between the communicating devices. 
	- Without a protocol, two devices may be connected but not communicating, just as a person speaking French cannot be understood by a person who speaks only Japanese.

## Data Representation
Information today comes in different forms such as text, numbers, images, audio, and
video
#### Text
- In data communications, *text is represented as a bit pattern*, a sequence of bits (Os or 1s). Different sets of bit patterns have been designed to represent text symbols
- Each set is called a code, and the process of representing symbols is called *coding*
- Today, the prevalent coding system is called *Unicode*, which uses *32 bits* to represent a symbol or *character used in any language in the world*. 
- *The American Standard Code for Information Interchange (ASCII)*, developed some decades ago in the United States, now constitutes the first 127 characters in Unicode and is also referred to as Basic Latin.

#### Numbers
- Numbers are also represented by bit patterns. 
- However, a code such as ASCII is not used to represent numbers; the number is directly converted to a binary number to simplify mathematical operations

#### Images
- Images are also represented by bit patterns. 
- In its simplest form, an image is composed of a matrix of pixels (picture elements), where each pixel is a small dot. 
- The size of the pixel depends on the resolution. For example, an image can be divided into 1000 pixels or 10,000 pixels. 
- In the second case, there is a better representation of the image (better resolution), but more memory is needed to store the image
- After an image is divided into pixels, *each pixel is assigned a bit pattern*. 
- The size and the value of the pattern depend on the image
	- For an image made of only black- and-white dots (e.g., a chessboard), a 1-bit pattern is enough to represent a pixel.]
	- If an image is not made of pure white and pure black pixels, you can increase the size of the bit pattern to include gray scale. 
	- For example, to show four levels of gray scale, you can use 2-bit patterns. A black pixel can be represented by 00, a dark gray pixel by 01, a light gray pixel by 10, and a white pixel by 11.
- There are several methods to represent color images. 
	- One method is called RGB, so called because each color is made of a combination of three primary colors: red, green, and blue. 
	- The intensity of each color is measured, and a bit pattern is assigned to it. 
	- Another method is called YCM, in which a color is made of a combination of three other primary colors: yellow, cyan, and magenta.

#### Audio
- Audio refers to the recording or broadcasting of sound or music. 
- Audio is by nature different from text, numbers, or images. 
- It is continuous, not discrete
- Even when we use a microphone to change voice or music to an electric signal, we create a continuous signal

#### Video
- Video refers to the recording or broadcasting of a picture or movie
- Video can either be produced as a continuous entity (e.g., by a TV camera), or it can be a combination of images, each a discrete entity, arranged to convey the idea of motion. 


## Data Flow
Communication between two devices can be 
1. simplexhttps://github.com/rng70/TryHackMe-Roadmap
2. half-duplex
3. full-duplex as
shown in Figure
![[Screenshot from 2024-05-16 19-12-24.png]]

#### Simplex
- the communication is unidirectional, as on a one-way street
-  Only one of the two devices on a link can transmit; the other can only receive 
- Keyboards and traditional monitors are examples of simplex devices
- The keyboard can only introduce input; the monitor can only accept output
- The simplex mode can use the entire capacity of the channel to send data in one direction.

#### Half-Duplex
- each station can both transmit and receive, but not at the same time
- When one device is sending, the other can only receive, and vice versa 
- The half-duplex mode is like a one-lane road with traffic allowed in both directions. When cars are traveling in one direction, cars going the other way must wait
- In a half-duplex transmission, the entire capacity of a channel is taken over by whichever of the two devices is transmitting at the time
- Walkie-talkies and CB (citizens band) radios are both half-duplex systems. 
- The half-duplex mode is used in cases where there is no need for communication in both directions at the same time; the entire capacity of the channel can be utilized for each direction.

#### Full-Duplex
- In full-duplex mode (also called duplex), both stations can transmit and receive simultaneously
- The full-duplex mode is like a two-way street with traffic flowing in both directions at the same time
- In full-duplex mode, signals going in one direction share the capacity of the link with signals going in the other direction
- This sharing can occur in two ways: 
	- Either the link must contain two physically separate transmission paths, one for sending and the other for receiving; or 
	- the capacity of the channel is divided between signals traveling in both directions. 
- One common example of full-duplex communication is the telephone network. 
	- When two people are communicating by a telephone line, both can talk and listen at the same time. 
- The full-duplex mode is used when communication in both directions is required all the time 
- The capacity of the channel, however, must be divided between the two directions.

---
# Networks
A **network** is a set of devices (often referred to as *nodes*) connected by communication links. A node can be a computer, printer, or any other device capable of sending and/or receiving data generated by other nodes on the network.

## Distributed Processing
Most networks use **distributed processing**, in which a task is divided among multiple computers. Instead of one single large machine being responsible for all aspects of a process, separate computers (usually a personal computer or workstation) handle a subset

## Network Criteria
A network must be able to meet a certain number of criteria. The most important of these are performance, reliability, and security.

### Performance
- Performance can be measured in many ways, including 
	- transit time and 
	- response time.
- *Transit time* is the amount of time required for a message to travel from one device to  another. 
- *Response time* is the elapsed time between an inquiry and a response. 
- The performance of a network depends on a number of factors, including the number of users, the type of transmission medium, the capabilities of the connected hardware, and the efficiency of the software. 
- Performance is often evaluated by two networking metrics: 
	1. throughput and 
	2. delay.
- We *often need more throughput and less delay*. However, these two criteria are often contradictory.  
- If we try to send more data to the network, we may increase throughput but we increase the delay because of traffic congestion in the network.

### Reliability
- In addition to accuracy of delivery, network reliability is measured by 
	- the frequency of failure, 
	- the time it takes a link to recover from a failure, and 
	- the network's robustness in a catastrophe.

### Security
- Network security issues include 
	- protecting data from unauthorized access, 
	- protecting data from damage and development
	- implementing policies and procedures for recovery from breaches and data losses.

## Physical Structures
Before discussing networks, we need to define some network attributes.

### Type of Connection
- A network is two or more devices connected through links. 
- A **link** is a communications pathway that transfers data from one device to another. 
	- For visualization purposes, it is simplest to imagine any link as a line drawn between two points. 
	- For communication to occur, two devices must be connected in some way to the same link at the same time. 

There are two possible types of connections: 
	1. point-to-point and 
	2. multi-point. 
#### Point-to-Point
- A point-to-point connection provides a dedicated link between two devices
- The entire capacity of the link is reserved for transmission between those two devices
- Most point-to-point connections use an actual length of wire or cable to connect the two ends, but other options, such as microwave or satellite links, are also possible 
- When you change television channels by infrared remote control, you are establishing a point-to-point connection between the remote control and the television's control system. 

#### Multi-point 
- A multi-point (also called multi-drop) connection is one in which more than two specific devices share a single link 
- In a multi-point environment, the capacity of the channel is shared, 
	1. either spatially
	2. or temporally. 
- If several devices can use the link simultaneously, it is a spatially shared connection. If users must take turns, it is a timeshared connection.
![[Screenshot from 2024-05-16 23-22-37.png]]


### Physical Topology
- The term physical topology refers to the way in which a network is laid out physically. 
- two or more devices connect to a link; two or more links form a topology. 
- The topology of a network is the geometric representation of the relationship of all the links and linking devices (usually called nodes) to one another. 
- There are four basic topologies possible: 
	1. mesh
	2. star
	3. bus
	4. ring

## Network Models
Computer networks are created by different entities. *Standards are needed so that these heterogeneous networks can communicate with one another*. The two best-known standards are 
1. the OSI model and 
2. the Internet model.
The OSI (Open Systems Interconnection) model defines a seven-layer network; the Internet model defines a five-layer network. This book is based on the Internet model with occasional references to the OSI model.

## Categories of Networks
Today when we speak of networks, we are generally referring to two primary categories : 
1. local-area networks and 
2. wide-area networks. 
The category into which a network falls is *determined by its size*. A LAN normally covers an area *less than 2 mi*; a WAN can be *worldwide*. Networks of a *size in between* are normally referred to as 
3. metropolitan-area networks and *span tens of miles*.

### Local Area Networks (LANs)

![[Screenshot from 2024-05-17 13-36-06.png]]

- A local area network (LAN) is usually privately owned and links the devices in a single office, building, or campus. 
- Depending on the needs of an organization and the type of technology used, a LAN can be as simple as two PCs and a printer in someone's home office; or it can extend throughout a company and include audio and video peripherals. Currently, LAN size is limited to a few kilometers 
- LANs are designed to allow resources to be shared between personal computers or workstations. 
	- The resources to be shared can include hardware (e.g., a printer), software (e.g., an application program), or data. 
- A common example of a LAN, found in many business environments, links a workgroup of task-related computers, for example, engineering workstations or accounting PCs. 
	- One of the computers may be given a large-capacity disk drive and may become a server to clients. 
	- Software can be stored on this central server and used as needed by the whole group. 
	- In this example, the size of the LAN may be determined by licensing restrictions on the number of users per copy of software, or by restrictions on the number of users licensed to access the operating system. 
- In addition to size, LANs are distinguished from other types of networks by their transmission media and topology. 
	- In general, a given LAN will use only one type of transmission medium. The most common LAN topologies are bus, ring, and star. 
- Early LANs had data rates in the 4 to 16 megabits per second (Mbps) range. Today, however, speeds are normally 100 or 1000 Mbps 
- Wireless LANs are the newest evolution in LAN technology. We discuss wireless LANs later on

### Wide Area Network

![[Screenshot from 2024-05-17 13-44-18.png]]

- A wide area network (WAN) provides long-distance transmission of data, image, audio, and video information over large geographic areas that may comprise a country, a continent, or even the whole world 
- A WAN can be as complex as the backbones that connect the Internet or as simple as a dial-up line that connects a home computer to the Internet. 
- We normally refer to the first as a *switched WAN* and to the second as a *point-to-point WAN*
	- The switched WAN connects the end systems, which usually comprise a router (internet-working connecting device) that connects to another LAN or WAN. 
	- The point-to-point WAN is normally a line leased from a telephone or cable TV provider that connects a home computer or a small LAN to an Internet service provider (lSP). 
		- This type of WAN is often used to provide Internet access 
	- An early example of a switched WAN is X.25, a network designed to provide connectivity between end users. *X.25* is being gradually replaced by a high-speed, more efficient network called *Frame Relay*. 
	- A good example of a switched WAN is the asynchronous transfer mode (ATM) network, which is a network with fixed-size data unit packets called cells. We will discuss 
- Another example of WANs is the wireless WAN that is becoming more and more popular.

### Metropolitan Area Networks
- A metropolitan area network (MAN) is a network with a size between a LAN and a WAN. 
- It normally covers the area inside a town or a city. 
- It is designed for customers who need a high-speed connectivity, normally to the Internet, and have endpoints spread over a city or part of city. 
- A good example of a MAN is the part of the telephone company network that can provide a high-speed DSL line to the customer. 
- Another example is the cable TV network that originally was designed for cable TV, but today can also be used for high-speed data connection to the Internet


## Interconnection of Networks: Internetwork
- Today, it is very rare to see a WAN, a MAN, or a LAN in isolation; they are connected to one another. 
- *When two or more networks are connected, they become an internetwork, or internet.* 
- As an example, assume that an organization has two offices, one on the east coast and the other on the west coast. 
	- The established office on the west coast has a bus topology LAN; the newly opened office on the east coast has a star topology LAN. 
	- The president of the company lives somewhere in the middle and needs to have control over the company from her home. 
	- To create a backbone WAN for connecting these three entities (two LANs and the president's computer), a switched WAN (operated by a service provider such as a telecom company) has been leased. 
	- To connect the LANs to this switched WAN, however, three point-to-point WANs are required. 
	- These point-to-point WANs can be a high-speed DSL line offered by a telephone company or a cable modern line offered by a cable TV provider

![[Screenshot from 2024-05-17 13-53-13.png]]

---

# The INTERNET
- The Internet is a *communication system* that has brought a wealth of information to our fingertips and organized it for our use. 
- The Internet is a *structured, organized system*.


## A Brief History
- A network is a group of connected communicating devices such as computers and printers. *An internet (note the lowercase letter i) is two or more networks that can communicate with each other*. 
- The most notable internet is called the *Internet (uppercase letter I)*, a collaboration of more than hundreds of thousands of interconnected networks. 
- Private individuals as well as various organizations such as government agencies, schools, research facilities, corporations, and libraries in more than 100 countries use the Internet. Millions of people are users. Yet this extraordinary communication system only came into *being in 1969* 
	- In the mid-1960s, mainframe computers in research organizations were standalone devices. Computers from different manufacturers were unable to communicate with one another. 
	- The *Advanced Research Projects Agency (ARPA) in the Department of Defense (DoD)* was interested in finding a way to connect computers so that the researchers they funded could share their findings, thereby reducing costs and eliminating duplication of effort. 
	- *In 1967, at an Association for Computing Machinery (ACM) meeting, ARPA presented its ideas for ARPANET, a small network of connected computers*. 
	- The idea was that each host computer (not necessarily from the same manufacturer) would be attached to a specialized computer, called an *interface message processor (IMP)*. The IMPs, in turn, would be connected to one another. Each IMP had to be able to communicate with other IMPs as well as with its own attached host. 
	- *By 1969, ARPANET was a reality*. Four nodes, at the University of California at Los Angeles (UCLA), the University of California at Santa Barbara (UCSB), Stanford Research Institute (SRI), and the University of Utah, were connected via the IMPs to form a network. *Software called the Network Control Protocol (NCP) provided communication* between the hosts. 
	- *In 1972, Vint Cerf and Bob Kahn, both of whom were part of the core ARPANET group, collaborated on what they called the Internetting Project*. 
		- Cerf and Kahn's landmark 1973 paper *outlined the protocols to achieve end-to-end delivery of packets*. 
		- This paper on *Transmission Control Protocol (TCP)* included concepts such as *encapsulation, the datagram, and the functions of a gateway*. 
	- Shortly thereafter, *authorities made a decision to split TCP into two protocols: Transmission Control Protocol (TCP) and Internetworking Protocol (lP). IP would handle datagram routing while TCP would be responsible for higher-level functions such as segmentation, reassembly, and error detection. The internetworking protocol became known as TCP/IP.*

## The Internet Today
- The Internet has come a long way since the 1960s. 
- The Internet today is *not a simple hierarchical structure*. It is *made up of many wide- and local-area networks joined by connecting devices and switching stations*. 
- It is difficult to give an accurate representation of the Internet because it is *continually changing*
	- new networks are being added, existing networks are adding addresses, and networks of defunct companies are being removed. 
- Today *most end users who want Internet connection use the services of Internet service providers (lSPs)*. There are international service providers, national service providers, regional service providers, and local service providers.
- The Internet today is run by private companies, not the government

![[Screenshot from 2024-05-17 14-50-38.png]]

#### International Internet Service Providers
At the top of the hierarchy are the international service providers that connect nations together.

#### National Internet Service Providers
- The national Internet service providers are backbone networks created and maintained by specialized companies. There are many national ISPs operating in North America; some of the most well known are SprintLink, PSINet, UUNet Technology, AGIS, and internet Mel. 
- To provide connectivity between the end users, these backbone networks are connected by *complex switching stations* (normally run by a third party) called *network access points (NAPs).* *Some national ISP networks are also connected to one another by private switching stations called peering points*. These normally operate at a high data rate (up to 600 Mbps)

#### Regional Internet Service Providers
Regional internet service providers or regional ISPs are smaller ISPs that are *connected to one or more national ISPs*. They are at the *third level of the hierarchy* with a smaller data rate.

#### Local Internet Service Providers
- Local Internet service providers provide *direct service to the end users*. 
- The local ISPs can be connected to regional ISPs or directly to national ISPs. 
- Most end users are connected to the local ISPs. 
- Note that in this sense, a local ISP can be a company that just provides Internet services, a corporation with a network that supplies services to its own employees, or a nonprofit organization, such as a college or a university, that runs its own network. 
- Each of these local ISPs can be connected to a regional or national service provider.

---

# Protocols and Standards
In this section, we define two widely used terms: protocols and standards. First, we define protocol, which is synonymous with rule. Then we discuss standards, which are agreed-upon rules.

## Protocols
In computer networks, *communication occurs between entities in different systems*. An **entity** *is anything capable of sending or receiving information*. However, two entities cannot simply send bit streams to each other and expect to be understood. For communication to occur, the *entities must agree on a protocol*. 
- A **protocol** is a set of rules that govern data communications. 
- A protocol defines 
	- what is communicated, 
	- how it is communicated, and 
	- when it is communicated.
- The key elements of a protocol are 
	1. syntax, 
	2. semantics, and 
	3. timing. 

#### Syntax
- The term syntax *refers to the structure or format of the data*, meaning the order in which they are presented. 
- For example, a simple protocol might expect the first 8 bits of data to be the address of the sender, the second 8 bits to be the address of the receiver, and the rest of the stream to be the message itself. 
#### Semantics
- The word semantics refers to the *meaning of each section of bits*. *How is a particular pattern to be interpreted, and what action is to be taken based on that interpretation?*
- For example, does an address identify the route to be taken or the final destination of the message? 
#### Timing
- The term timing refers to two characteristics: 
	- when data should be sent and 
	- how fast they can be sent. 
- For example, if a sender produces data at 100 Mbps but the receiver can process data at only 1 Mbps, the transmission will overload the receiver and some data will be lost.

## Standards
 - Standards are essential in *creating and maintaining an open and competitive market* for equipment manufacturers and in *guaranteeing national and international interoperability of data and telecommunications technology and processes*. 
 - Standards *provide guidelines to manufacturers, vendors, government agencies*, and other service providers to ensure the kind of interconnectivity necessary in today's marketplace and in international communications. 
 - Data communication standards fall into two categories: 
	 1. de facto (meaning "by fact" or "by convention") and 
	 2. de jure (meaning "by law" or "by regulation"). 
#### De facto
- Standards that **have not been approved by an organized body but have been adopted as standards through widespread use** are de facto standards. 
- De facto standards are often established originally by manufacturers who seek to define the functionality of a new product or technology
#### De jure
- Those standards that have been *legislated by an officially recognized body* are de jure standards.


## Standards Organizations
Standards are developed through the cooperation of standards creation committees, forums, and government regulatory agencies.

### Standards Creation Committees 
#### International Organization for Standardization (ISO)
- The ISO is a multinational body whose *membership is drawn mainly from the standards creation committees of various governments throughout the world*. The ISO is active in developing cooperation in the realms of scientific, technological, and economic activity.
#### International Telecommunication Union-Telecommunication Standards Sector (ITU-T). 
- By the early 1970s, a number of countries were defining national standards for telecommunications, but there was still little international compatibility. 
- The United Nations responded by forming, as part of its International Telecommunication Union (ITU), a committee, the Consultative Committee for International Telegraphy and Telephony (CCITT). 
- This committee was devoted to the research and establishment of standards for telecommunications in general and for phone and data systems in particular. 
- On March 1, 1993, the name of this committee was changed to the International Telecommunication Union-Telecommunication Standards Sector (ITU-T). 
#### American National Standards Institute (ANSI)
- Despite its name, the American National Standards Institute is a completely private, nonprofit corporation not affiliated with the U.S. federal government. 
- However, all ANSI activities are undertaken with the welfare of the United States and its citizens occupying primary importance
#### Institute of Electrical and Electronics Engineers (IEEE)
- The Institute of Electrical and Electronics Engineers is the *largest professional engineering society in the world*. 
- International in scope, it aims to advance theory, creativity, and product quality in the fields of electrical engineering, electronics, and radio as well as in all related branches of engineering. 
- As one of its goals, the IEEE oversees the development and adoption of international standards for computing and communications. 
#### Electronic Industries Association (EIA)
- Aligned with ANSI, the Electronic Industries Association is a nonprofit organization devoted to the promotion of electronics manufacturing concerns. 
- Its activities include public awareness education and lobbying efforts in addition to standards development. 
- In the field of information technology, the EIA has made significant contributions by defining physical connection interfaces and electronic signaling specifications for data communication 

### Forums
- Telecommunications technology development is moving faster than the ability of standards committees to ratify standards. 
- Standards committees are procedural bodies and by nature slow-moving. To accommodate the need for working models and agreements and to facilitate the standardization process, many special-interest groups have developed forums made up of representatives from interested corporations. 
- The forums work with universities and users to test, evaluate, and standardize new technologies. 
- By concentrating their efforts on a particular technology, the forums are able to speed acceptance and use of those technologies in the telecommunications community. 
- The forums present their conclusions to the standards bodies.

### Regulatory Agencies
- All communications technology is subject to regulation by government agencies such as the *Federal Communications Commission (FCC)* in the United States. 
- The purpose of these agencies is to protect the public interest by regulating radio, television, and wire/cable communications. 
- The FCC has authority over interstate and international commerce as it relates to communications.


## Internet Standards
- An Internet standard is a thoroughly tested specification that is useful to and adhered to by those who work with the Internet. 
- It is a formalized regulation that must be followed. 
- There is a strict procedure by which a specification attains Internet standard status. 
	- A specification begins as an Internet draft. 
	- An Internet draft is a working document (a work in progress) with no official status and a 6-month lifetime. 
	- Upon recommendation from the Internet authorities, a draft may be published as a Request for Comment (RFC). 
	- Each RFC is edited, assigned a number, and made available to all interested parties. RFCs go through maturity levels and are categorized according to their requirement level

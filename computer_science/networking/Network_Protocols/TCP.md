references :
1. https://datatracker.ietf.org/doc/html/rfc9293

---
The transmission control protocol(TCP) is a *transport layer protocol*, 
- which *allows process-to-process communication* between two machines such as communication between a browser on the user’s machine and the Facebook server. 
- provides two-way communication using a connection
- TCP offers many other services to applications, like delivering data in the form of a stream of bytes
- provides *reliable*, *ordered delivery of a stream of bytes* from a program on one computer to another program on another computer
- is used by many internet applications such as the World Wide Web, email, remote administration and file transfer
- It guarantees delivery of a data stream sent from one host to another without duplication or losing data 

| **Advantages of TCP**                                                                    | **Disadvantages of TCP  <br>**                                                                                                                    |
| ---------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| Guarantees the accuracy of data.                                                         | Requires a reliable connection between the two devices. If one small chunk of data is not received, then the entire chunk of data cannot be used. |
| Capable of synchronising two devices to prevent each other from being flooded with data. | A slow connection can bottleneck another device as the connection will be reserved on the receiving computer the whole time.                      |
| Performs a lot more processes for reliability.                                           | TCP is significantly slower than UDP because more work has to be done by the devices using this protocol.                                         |

---

TCP Packets contain various sections of information know as headers that are added from encapsulation

| Header                 | Description                                                                                                                                                                                                                                         |
| ---------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Source Port            | This value is the port opened by the sender to send the TCP packet from. This value is chosen randomly (out of the ports from 0-65535 that aren't already in use at the time).                                                                      |
| Destination Port       | This value is the port number that an application or service is running on the remote host (the one receiving data); for example, a webserver running on port 80. Unlike the source port, this value is not chosen at random.                       |
| Source IP              | This is the IP address of the device that is sending the packet.                                                                                                                                                                                    |
| Destination IP         | This is the IP address of the device that the packet is destined for.                                                                                                                                                                               |
| Sequence Number        | When a connection occurs, the first piece of data transmitted is given a random number. We'll explain this more in-depth further on.                                                                                                                |
| Acknowledgement Number | After a piece of data has been given a sequence number, the number for the next piece of data will have the sequence number + 1. We'll also explain this more in-depth further on.                                                                  |
| Checksum               | This value is what gives TCP integrity. A mathematical calculation is made where the output is remembered. When the receiving device performs the mathematical calculation, the data must be corrupt if the output is different from what was sent. |
| Data                   | This header is where the data, i.e. bytes of a file that is being transmitted, is stored.                                                                                                                                                           |
| Flag                   | This header determines how the packet should be handled by either device during the handshake process. Specific flags will determine specific behaviours, which is what we'll come on to explain below.                                             |

---

| **Step** | **Message** | **Description**                                                                                                                                                                                                                                    |
| -------- | ----------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1        | SYN         | A SYN message is the initial packet sent by a client during the handshake. This packet is used to initiate a connection and synchronise the two devices together (we'll explain this further later on).                                            |
| 2        | SYN/ACK     | This packet is sent by the receiving device (server) to acknowledge the synchronisation attempt from the client.                                                                                                                                   |
| 3        | ACK         | The acknowledgement packet can be used by either the client or server to acknowledge that a series of messages/packets have been successfully received.                                                                                            |
| 4        | DATA        | Once a connection has been established, data (such as bytes of a file) is sent via the "DATA" message.                                                                                                                                             |
| 5        | FIN         | This packet is used to _cleanly (properly)_ close the connection after it has been complete.                                                                                                                                                       |
| #        | RST         | This packet abruptly ends all communication. This is the last resort and indicates there was some problem during the process. For example, if the service or application is not working correctly, or the system has faults such as low resources. |

![[Screenshot 2025-01-04 144959.png]]

Any sent data is given a random number sequence and is reconstructed using this number sequence and incrementing by 1. Both computers must agree on the same number sequence for data to be sent in the correct order. This order is agreed upon during three steps:

1. SYN - Client: Here's my Initial Sequence Number(ISN) to SYNchronise with (0)
2. SYN/ACK - Server: Here's my Initial Sequence Number (ISN) to SYNchronise with (5,000), and I ACKnowledge your initial number sequence (0)
3. ACK - Client: I ACKnowledge your Initial Sequence Number (ISN) of (5,000), here is some data that is my ISN+1 (0 + 1)

| **Device**      | **Initial Number Sequence (ISN)  <br>** | **Final Number Sequence  <br>** |
| --------------- | --------------------------------------- | ------------------------------- |
| Client (Sender) | 0                                       | 0 + 1 = 1                       |
| Client (Sender) | 1                                       | 1 + 1 = 2                       |
| Client (Sender) | 2                                       | 2 + 1 = 3                       |

TCP will close a connection once a device has determined that the other device has successfully received all of the data.
- Because TCP reserves system resources on a device, it is best practice to close TCP connections as soon as possible.

![[Screenshot 2025-01-04 145059.png]]



---

The communicating processes on machines are identified by the **port numbers**, 
- *sixteen-bit binary* numbers, represented by a decimal number. 
- These port numbers *may be well-known, registered, or ephemeral depending on the applications using them*. 
	- The well-known ports 
		- assigned to *popular protocols* such as HTTP, FTP, Telnet, etc.
		- range from 0 to 1023
	- while ephemeral port numbers
		- assigned to the user processes
		- range from 49152 to 65 535. 
	- Registered port numbers 
		- range from 1024 to 49151
		- reserved for specific services upon application by a requesting entity such as popular online goals.


TCP has a rich set of features. 
- It numbers bytes in communication and 
- provides flow control between a pair of fast and slow processes, 
- manages errors using a checksum method, and 
- provides congestion control for the smooth delivery of the data.

In TCP the data is sent in the form of segments. Segments carry bytes of data and are numbered with the number of the first data byte contained in the segment.


---
In TCP the data is sent in the form of segments. Segments carry bytes of data and are numbered with the number of the first data byte contained in the segment.

In the TCP header, there are numerous critical fields that the aspiring hacker and/or forensic investigator should understand.

![[Screenshot from 2024-05-23 02-04-11.png | 650]]

Row 1
*Source Port / Destination Port*: Probably most importantly, these are the source port and destination port. These fields determine what port the communication came from (source) and where it is going (destination).

Row 2
*Sequence Number*: The sequence number is generated by the source machine's TCP stack and is used to make certain that packets are arranged in the proper sequence when they arrive. It is also important in defeating MitM attacks.

Row 3
*Acknowledgment Number*: This is an echo of the Sequence Number sent back by the receiving system. It basically says, "I received the packet with the Sequence #." In this way, the sender knows that the packet has arrived. If the sender does not receive an Acknowledgment Number back in a fixed amount of time, it will resend the packet to make certain the receiver gets the packet. In this way, TCP is reliable (in contrast, UDP does not do this and is, therefore, unreliable).

Row 4
The fourth row has some critical information. Let's skip over the Data Offset and the Reserved fields. That takes us to 8 bits near the middle of Row 4. These are the *infamous flags of the three-way handshake and nmap scans*. The first two bits, CWR and ECE, are beyond the scope of this lesson. *The next six bits are the URG, ACK, PSH, RST, SYN, and FIN flags. These flags are used by TCP to communicate*;
- **SYN**: The opening of a new connection.
- **FIN**: The normal, "soft" closing of a connection.
- **ACK**: The acknowledgment of a packet. All packets after the three-way handshake should have this bit set. 
- **RST**: The hard-close of a connection and is usually used to communicate that the packet has arrived at the wrong port or IP.
- **URG**: This flag indicates that the following data is urgent.
- **PSH**: Push the data past the buffer to the application.
If you are familiar with nmap or hping3 as recon tools, you have used scans utilizing all of these flags. By creating packets with flag combinations that should not be seen in the wild, we may be able to elicit a response from a very secure system or even evade detection.

- **Window Size**: In some diagrams, this is simply described as the Window field. Its role is to communicate the size of the window that the TCP stack has to buffer packets. This is the way that TCP manages flow control. From a recon or forensics perspective, this field alone can be enough to identify the OS that sent the packet. This field varies from OS to OS and even from SP to SP. Given this bit of information, one can predict with about 80% accuracy the OS that sent the packet. In fact, it is this field and a few others (DF and TTL in the IP header) that operating system fingerprinters such as p0f use to identify the OS.

Row 5
- *Checksum*: This field uses a simple algorithm to check for errors. In essence, it is an integrity checker. 
- *URG Pointer*: This field points to the last byte of the sequence number of urgent data. The URG flag must be set in conjunction to activate this field.

Row 6
- *Options*: Like the IP header, the TCP header has an options field to be used if necessary, and it is varying length.
- *Padding*: The padding is necessary to bring the TCP header to a multiple of 32 bits.

---

A connection-oriented transmission requires three phases.
1. Connection Establishment.
2. Data transfer.
3. Connection termination.

*TCP Three Way Handshake*
Every TCP connection starts with a 3-way handshake. The handshake begins with a client sending a packet with the SYN flag set saying, “Hello, I want to talk to you” the server responds with a packet with the SYN and ACK flags set saying, “Hi, I’m willing and able to chat,” and 25 | P a g ethen finally, the client sends a packet with the ACK flag set that acknowledges the response of the server, and then the data transfer can begin

![[Screenshot from 2024-05-23 03-03-51.png]]


After connection establishment, data is transferred in the form of segments.

TCP uses the similar three-way handshake mechanism as of connection setup for connection termination, but with the FIN packets


A **half close connection** is also used in TCP which can be used in a situation, 
- when one party does not want to send data, but other side is still sending the data. 
- In this situation one side may close the connection by sending FIN packet. Other side will be responding with an acknowledgement of FIN but will not send its own FIN packet, till the transmission continues. 
- After completing the data transfer other side will also send FIN and first side will respond with ACK for closing the connection completely.
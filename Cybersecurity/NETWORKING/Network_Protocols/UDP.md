*The User Datagram Protocol (UDP)* a **message oriented protocol** that provides a simple and unreliable, connectionless, unacknowledged service

*User Datagram Protocol* or UDP is a 
- UDP *works on the transport layer* and serves as the intermediary between the application layer and network layer like TCP protocol but with some differences.
- provides error control but not mandatory
- connectionless protocol (vs. TCP, which is connection-oriented and requires a connection such as the 3-way handshake as seen above). 
- It is more lightweight than TCP since it doesn’t have the overhead of 
	- assuring a connection and 
	- making certain that each packet arrives. 
- UDP simply sends packets and forgets about them. 
- This works great in applications where you want efficiency and no one packet is critical such as streaming music or video. 
- Some of the key protocols that use UDP include 
	- DNS (only for queries), 
	- SNMP for network device management, and 
	- NTP for network time synchronization. 


When scanning for UDP ports with tools such as nmap, it can take a bit longer as UDP does not have a response for lost packets or closed ports. Nmap simply waits a specified time, and if no response is returned, it assumes the port is closed. You can scan for UDP nmap with the following command

The *protocol data unit* is called the **user datagram** in UDP protocol. The UDP datagram has the *simplest header of 8 bytes only*. 
- It has four fields, 
	1. source port number, 
	2. destination port number, 
	3. total datagram length, and 
	4. optional checksum. 
- If the checksum is not calculated, it is set to zero. 
- some well-known port numbers, used by UDP applications are 7,9,11, and 13 etc. some more ports used by applications taking the services of UDP. These services include Domain Name Service(DNS), TFTP, NTP etc. 
- UDP is used on transport layer, where a protocol like TCP providing connection-oriented, reliable services with flow control and error control exists. However, UDP has its own set of applications. 
	- UDP is suitable for a process that requires simple request-response communication with little concern for flow control and error control. 
	- Not used for a process such as FTP that needs to send bulk data, as sending the bulk data requires a connection-oriented and reliable service like UDP. 
	- UDP is suitable transport protocol for multicasting. 
		- Multicasting capability is embedded in the UDP software, but not in the TCP software. 
	- UDP is used for the management processes such as SNMP which require to exchange small amounts of data in request-response format. 
	- UDP is normally used for real-time applications such as video conferencing that cannot tolerate uneven delay between sections of a received message.

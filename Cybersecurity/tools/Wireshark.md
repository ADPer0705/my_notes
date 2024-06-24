Wireshark is an open-source packet capture, analyzer and monitoring tool, which is used for education, software development, communication protocol development, and network troubleshooting 

some of the reasons why people use wireshark are :
- network administrators use it to troubleshoot network problems 
- network security engineers use it to examine security problems 
- QA engineers use it to verify network applications 
- developers use it to debug protocol implementations
- people use it to learn network protocol internals 


---
# NETWORK TRAFFIC ANALYSIS USING WIRESHARK
Network traffic analysis 
- is the process of capturing network traffic and inspecting it closely to determine what is happening on the network 
- provides the details of network activities and their communication pattern is a network 

The goal of traffic analysis
- network monitoring 
- accounting and planning 
- performance analysis and improvement 
- security analysis 

wireshark has the following components to perform traffic capture, decode and analysis described below

![[Screenshot from 2024-06-05 15-48-47.png]]

#### Packet Capturing 
Wireshark can capture the packets passing through the host machine using this component. The packets can be captured in
- normal mode
	- a network device accepts only packets addressed to its own MAC address
- promiscuous mode
	- a network device can intercept and read each network packet that arrives from other machines and goes to some other machines also
	- i.e. all the packets passing through its NIC

#### Packet Decoder 
packet decoding is the process to 
- extract out the header and message of the packet 
- identify the parameters for analysis for 
	1. communication pattern
	2. monitoring 
	3. performance
	4. protocol
	5. application analysis
	6. host
	7. location

#### Traffic Analyzer
it identifies
- who communicates with whom and when 
- what types of messages
- how long are the messages
- duration of communication 

### Input for Traffic Analysis
is traffic analysis, the pattern of communication is more important than the content
- analysis is mainly based on packet headerr
- traffic analysis can be done even is encrypted traffic

most traffic analysis requires minimum information like 
- time and duration of a communication 
- details of the communication stream
- identities of the communicating parties
- volumes of data

## Wireshark features
basic features of wireshark
- can listen on more than two interfaces simultaneously 
- packet coloring 
	- packets can be displayed in multiple colors for better analysis
- filters
	- capture filters : capture packets based on some filter criteria
	- display filter : display only packets from the captured packets based on filter criteria
- finding packets
	- apply search to find a set of packets 

### Advanced Wireshark features 
1. network endpoints and conversions 
2. protocol hierarchy statistics 
3. protocol dissections 
4. graphing

---
# WIRESHARK INTERFACE
following include the interface snapshots of wireshark running in windows 10

1. **The MENU**
	- ![[Screenshot from 2024-06-05 17-13-13.png]]
	- wireshark's main menu contains
		- *File*
			- contains items to open and merge capture files, save, print, or export captured files in different formats
		- *Edit*
			- This menu contains items to find a packet,
			- time reference or mark one or more packets 
			- handle configuration profiles 
			- set your preferences 
		- *View*
			- controls the display of the captured data, including 
				- colourization of packets
				- zooming the fonts 
				- showing a packet in a separate window
				- expanding and collapsing trees in packet details 
		- *Go*
			- This menu contains items to go to a specific packets 
		- *Capture*
			- This menu allows you to start and stop captures and edit capture filters 
		- *Analyze*
			- this menu contains items to 
				- manipulate display filters
				- enable or disable the dissection or protocols 
				- configure user-specified decodes and 
				- follow a TCP 
		- *Statistics*
			- contains items to display various statistic windows, including a summary of the packets that have been captured, a display protocol hierarchy statistics and much more 
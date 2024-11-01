**FIREWALL** : simply a program or hardware device that filters the information coming through the internet connection into your private network or computer system

Firewalls can be categorized based on various features like 
- the data being filtered, such as 
	- application level firewalls 
	- packet filter firewalls 
- based on the scope of working, such as
	- host based firewall
	- network based firewall 
- based on implementation
	- software based firewall
	- hardware based firewall

- **An Application Firewall**
	- works on application layer
	- filters the application layer data such as the data related to HTTP, FTP or Telnet protocols etc. working on the application layer 
- **Packet Filtering Firewall**
	- work on network layer 
	- able to filter the traffic based on IP address and port numbers 
- **Host Based Firewalls**
	- protects an individual host machine,
	- is installed on that host only
	- windows firewall is an example of host based firewalls
- **Network Based Firewalls**
	- protects a complete network 
	- it is installed between the network and the internet 
	- the firewalls provided by companies like Checkpoint, CISCO, or Fortinet are network based firewalls 
- **A Hardware Firewall**
	- it is a physical device between your computer and the internet 
	- protects all the computers from any unauthorized internet user accessing private networks connected to the internet 
	- It blocks harmful pieces of data from reaching the system, and protects the network against viruses and malware 
- **Software Firewalls**
	- installed on individual server machines 
	- they intercept each connection request and then determine whether the request is valid or not 

Apart from these classifications, there are some other kinds of firewalls as well
- **statefull firewall**
	- tightens up the rules for TCP traffic 
	- it does this by monitoring of outbound tcp connections 
	- It allows the packets, belonging to any existing tcp connection only 
	- packets flow directly from client to server, provided they match either an "allow" rule or a state-table entry
- **deep packet inspection firewall**
	- able to dig deeper into the packet to analyze the application data to allow or disallow 
	- the traditional firewalls are not able to access the payload or application data, They only deal with the fields available in the header 
- **application proxy firewalls** 
	- acts as a proxy on behalf of websites 
	- all the machines inside the network when make a request to access any website, the request is first intercepted by the proxy 
	- the proxy then checks the rules defined for the destination and allows or blocks traffic accordingly 
	- therefore it is used to block access to unwanted or malicious websites 

firewall is requires to be trained for efficient working. This training is done by defining the rules in its table. The firewall rules may be defined based on 
- protocol
- domains
- IP addresses 
- ports
	etc.
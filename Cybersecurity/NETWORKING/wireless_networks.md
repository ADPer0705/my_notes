- based on radio waves, a transmission  medium without any cables
- wireless technologies are widely used in both homes and business computer networks

based on scale wireless networks can be classified as :
1. PAN 
	- allows the connectivity of personal devices within an area of about 10 meters 
	- e.g. bluetooth networks 
2. LAN
	- allow users in a local area, typically within a range of 100 meters, such as university campus or library, to form a network to gain access to the internet 
	- Wi-Fi networks which are also known by their standard name *IEEE 802.11* are examples of wireless local area networks.
3. MAN 
	- allows the connection of multiple networks such in a metropolitan area such as different buildings in a city 
	- It can be an alternative or a backup to laying copper or fiber cabling 
	- Wi-Max technology or wireless broadband service is an example of a wireless metropolitan area network

Based on the availability of the Access point (the central point in a wireless network), the wireless network can be either 
1. ad-hoc networks 
	- the computers act in a stand-alone way
	- each computer communicates with with each other in peer-to-peer communication mode 
	- No access point (routers of switches) is required for communication between devices
	- for setting up ad-hoc mode, we need to manually configure the wireless adapters of all devices to be in ad-hoc mode 
	- all adapters must use the same channel name or SSID for making the connection active 
2. infrastructure networks
	- it is centrally coordinated (infrastructure mode)
	- all devices are connected to wireless network with the help of Access Point (AP)
	- Wireless APs are usually routers or switches which are connected to the internet by broadband modem 
	- Infrastructure mode deployments are more suitable for larger organizations 
	- The infrastructure mode provides 
		- improved security, 
		- ease of management,
		- much more scalability and stability 
	- however, the infrastructure mode incurs extra cost in deploying access points such as routers or switches 

using wireless networks offers many advantages 
- enable mobility while working 
- mobility results in flexibility of working space 
- the wireless nature of communication also allows expandability 
	- Grow your network efficiently, adding new users and locations without needing to run cables and wires



As the data in wireless networks moves through an open environment, an additional feature, encryption is also provided, which is not available with other LAN standards commonly 
- wireless encryption is the process of protecting a wireless network from attackers who attempt to collect sensitive information by breaching Radio Frequency traffic

Wi-Fi networks initially used the encryption technique **wired equivalent privacy** known as **WEP**. Over time WEP technique was modifies and later replaced with **Wi-FI Protected Access (WPA)** which is now being used as WPA3

*WEP or Wired equivalent privacy* was 
- the first algorithm implemented for Wi-Fi networks. 
- It used RC4 rivest cipher 4 for encryption with 64 and 128-bit keys and used 24 bits’ keys as the initialization vector for encryption. 
- This technique could provide privacy, authentication and data integrity. 
- WEP algorithm is not free from flaws. 
	- No defined method of distributing the keys is available. 
	- The keys, once set are rarely changed, which makes the recovery of messages in the long run possible, by the attackers.

*Wi-Fi protected access or WPA* is the improved algorithm that overcame the flaws of WEP. 
- WPA used 256-bit keys for encryption and keys are renewed periodically. 
- But these features were not enough for protection from the attacks and WPA networks were also attacked like WEP. Therefore, WPA2 was introduced, which uses *Counter Mode Cipher Block Chaining Message Authentication Code Protocol(CCMP)*, better than the *Temporal Key Integrity Protocol (TKIP)* protocol used in WPA making it more difficult for attackers to break it. 
However, WPA2 was also breakable which lead to the introduction of WPA3. 
The latest version of WPA, WPA3 has the following features. 
- Secured handshake for making parties ready to communicate, 
- Wi-Fi Easy Connect to simplify the security configuration process. 
	- It also helps set up a connection between different IoT devices. 
- It uses a new feature called *Opportunistic Wireless Encryption (OWE)* that replaces the 802.11 “open” authentication by providing better protection when using public hotspots and public networks and uses bigger session keys to provide higher level of protection.

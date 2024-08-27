there are three layers of devices 
- layer 1
- layer 2
- layer 3
the layer is the OSI layer

---
# Layer 1 Devices

## Analog Modems
- The word modem is actually derived from a contraction of *modulator/demodulator*
- developed to modulate and demodulate a signal
	- i.e. take a digital signal from a digital node and convert it to a analog signal and vice versa
- developed to create connection between network segments via the *public switched telephone networks (PSTN) and the Plain old telephone system (POTS)*
- provides for a single connection to the network

![[images.jpeg]]

## Hub 

![[hub.jpeg]]

![[hub_symb.png]]

functions as a *concentrater/repeater* 
- doesn't care where the signal comes from, where it goes to
- it takes the signal that comes in on one of the ports and replicates it on all other 
may have a few ports or many ports, but for a variety of reasons, the hub is not very common in modem networking 

# Layer 2 Devices

## Switch

![[switch.png]]

uses an *application-specific integrated circuit (ASIC)* chip 
- this allows the switch to know when a device is on the network and which port s it is connected to via that device's Layer 2 MAC address
- can either be a simple switch or a complex programmable switch
- will only communicate with the LAN
## Wireless Access Point (WAP)

![[wap.png]]

it is a specific type of network bridge that connects the wireless network segments with the wired network segments 
- the most common type of WAP connects 802.11 wireless segment to 802.3 Ethernet segments 
- only communicates to LAN


# Layer 3 Devices 

## Multilayer Switch (MLS)

![[MLS.png]]

provide normal layer 2 services but also provides layer 3 or higher OSI layer services 
most common MLS is a layer 3 switch
- it not only utilized an ASIC chip for switching, but that ASIC chip is also programmed to handle *routing functions*. This allows device to communicate and pass information to non-local network devices 
- It is a highly programmable and complex device

## Routers

![[router.png]]

It is the most common network device used for connecting different networks together utilizing the OSI model's layer 3 logical network information
- uses software programming for decision making as compared to the ASIC chip
- The router uses this programming to 
	- keep track of different networks and
	- what is considered to to be the best possible route to reach those networks 
- It can communicate with both local and non-local devices 
In most cases it will have fewer ports than switches

---
# Security Devices

## Firewall
- can be placed on routers or hosts (software based) or can be its own device 
- functions at multiple layers of the OSI model, specifically 2, 3, 4, and 7
- blocks specific packets from entering or leaving the network
- *Via Stateless Inspection*
	- examine every packet against a set of rules
	- once the packet matches a rule, the rule is enforced and action is taken
- *Via Stateful Inspection*
	- only examine the state of the connection between networks, specifically when a connection is made from an internal network 
	- no packets are examined returning from the external connection
	- as a general rule, external connections are not allowed to be initiated with the internal network
- It is the first line of defense

## Intrusion Detection System (IDS)
-  it is a passive system designed to identify when a network breach or attack against the network is occuring 
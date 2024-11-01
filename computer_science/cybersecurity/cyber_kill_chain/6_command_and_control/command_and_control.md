This term is also known as **C&C or C2 Beaconing** as a type of malicious communication between a C&C server and malware on the infected host. The infected host will consistently communicate with the C2 server; that is also where the beaconing term came from

Until recently, IRC (Internet Relay Chat) was the traditional C2 channel used by attackers. This is no longer the case, as modern security solutions can easily detect malicious IRC traffic

The most common C2 channels used by adversaries nowadays:
- The protocols HTTP on port 80 and HTTPS on port 443 
	- this type of beaconing blends the malicious traffic with the legitimate traffic and can help the attacker evade firewalls.
	  
- DNS (Domain Name Server)
	- The infected machine makes constant DNS requests to the DNS server that belongs to an attacker, this type of C2 communication is also known as *DNS Tunneling*
	  

Important to note that an adversary or another compromised host can be the owner of the C2 infrastructure.
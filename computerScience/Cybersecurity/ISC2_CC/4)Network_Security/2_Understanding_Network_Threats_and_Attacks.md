# Types of Threats 
- **Spoofing**
	- An attack with the goal of gaining access to a target system through the use of a falsified identity. 
	- Spoofing can be used against IP addresses, MAC address, usernames, system names, wireless network SSIDs, email addresses, and many other types of logical identification.
- **Phishing**
	- An attack that attempts to misdirect legitimate users to malicious websites through the abuse of URLs or hyperlinks in emails could be considered phishing
- **DOS/DDOS**
	- A denial-of-service (DoS) attack is a network resource consumption attack that has the primary goal of preventing legitimate activity on a victimized system. 
	- Attacks involving numerous unsuspecting secondary victim systems are known as distributed denial-of-service (DDoS) attacks.
- **Virus**
	- The computer virus is perhaps the earliest form of malicious code to plague security administrators. 
	- As with biological viruses, computer viruses have two main functions—
		1. propagation and 
		2. destruction. 
	- A virus is a self-replicating piece of code that spreads without the consent of a user, but frequently with their assistance (a user has to click on a link or open a file).
- **Worm**
	- Worms pose a significant risk to network security. 
	- They contain the same destructive potential as other malicious code objects with an added twist—they propagate themselves without requiring any human intervention.
- **Trojan**
	- Named after the ancient story of the Trojan horse, the Trojan is a software program that appears benevolent but carries a malicious, behind-the-scenes payload that has the potential to wreak havoc on a system or network. 
	- For example, ransomware often uses a Trojan to infect a target machine and then uses encryption technology to encrypt documents, spreadsheets and other files stored on the system with a key known only to the malware creator.
- **On-Path Attack**
	- In an on-path attack, attackers place themselves between two devices, often between a web browser and a web server, to intercept or modify information that is intended for one or both of the endpoints. 
	- On-path attacks are also known as *man-in-the-middle (MITM) attacks*.
- **Side-channel**
	- A side-channel attack is a passive, noninvasive attack to observe the operation of a device. 
	- Methods include power monitoring, timing and fault analysis attacks.
- **Advanced Persistent Threat (APT)**
	- Advanced persistent threat (APT) refers to *threats* that demonstrate an unusually high level of technical and operational sophistication spanning months or even years. 
	- APT attacks are often conducted by highly organized groups of attackers.
- **Insider Threat**
	- Insider threats are threats that arise from individuals who are trusted by the organization. 
	- These could be disgruntled employees or employees involved in espionage. 
	- Insider threats are not always willing participants. A trusted user who falls victim to a scam could be an unwilling insider threat.
- **Malware**
	- A program that is inserted into a system, usually covertly, with the intent of compromising the confidentiality, integrity or availability of the victim’s data, applications or operating system or otherwise annoying or disrupting the victim.
- **Ransomware**
	- Malware used for the purpose of facilitating a ransom attack. 
	- Ransomware attacks often use cryptography to “lock” the files on an affected computer and require the payment of a ransom fee in return for the “unlock” code.

# Identifying Threats and Tools used to Prevent them

![[Screenshot from 2024-07-07 16-18-16.png]]

## Intrusion Detection Systems (IDS)
An intrusion occurs when an attacker is able to bypass or thwart security mechanisms and gain access to an organization’s resources. 
- Intrusion detection is a specific form of monitoring that monitors recorded information and real-time events to detect abnormal activity indicating a potential incident or intrusion. 
- An intrusion detection system (IDS) automates the inspection of logs and real-time system events to detect intrusion attempts and system failures. 
- An IDS is intended as part of a defense-in-depth security plan. 
- It will work with, and complement, other security mechanisms such as firewalls, but it does not replace them. 
- IDSs can recognize attacks that come from external connections, such as 
	- an attack from the internet, and 
	- attacks that spread internally, such as a malicious worm. 
- A primary goal of an IDS is to provide a means for a timely and accurate response to intrusions. 
	- Once they detect a suspicious event, they respond by sending alerts or raising alarms.
- Intrusion detection and prevention refer to capabilities that are part of isolating and protecting a more secure or more trusted domain or zone from one that is less trusted or less secure. These are natural functions to expect of a firewall, for example.  

IDS types are commonly classified as 
1. **host-based**
	- A host-based IDS (HIDS) monitors a single computer or host
	- A HIDS monitors activity on a single computer, including process calls and information recorded in system, application, security and host-based firewall logs. 
	- It can often examine events in more detail than a NIDS can, and it can pinpoint specific files compromised in an attack. 
	- It can also track processes employed by the attacker. 
	- A benefit of HIDSs over NIDSs is that HIDSs can detect anomalies on the host system that NIDSs cannot detect. 
		- For example, a HIDS can detect infections where an intruder has infiltrated a system and is controlling it remotely. 
	- HIDSs are more costly to manage than NIDSs because they require administrative attention on each system, whereas NIDSs usually support centralized administration. 
	- A HIDS cannot detect network attacks on other systems.
1. **network-based** 
	- A network-based IDS (NIDS) monitors a network by observing network traffic patterns
	- A NIDS monitors and evaluates network activity to detect attacks or event anomalies. 
	- It cannot monitor the content of encrypted traffic but can monitor other packet details. 
	- A single NIDS can monitor a large network by using remote sensors to collect data at key network locations that send data to a central management console. 
	- These sensors can monitor traffic at routers, firewalls, network switches that support port mirroring, and other types of network taps. 
	- A NIDS has very little negative effect on the overall network performance, and when it is deployed on a single-purpose system, it doesn’t adversely affect performance on any other computer. 
	- A NIDS is usually able to detect the initiation of an attack or ongoing attacks, but they can’t always provide information about the success of an attack. 
		- They won’t know if an attack affected specific systems, user accounts, files or applications

### Security Information and Event Management (SIEM)
Security management involves the use of tools that collect information about the IT environment from many disparate sources to better examine the overall security of the organization and streamline security efforts. 
- These tools are generally known as security information and event management (or S-I-E-M, pronounced “SIM”) solutions. 
- The general idea of a SIEM solution is to gather log data from various sources across the enterprise to better understand potential security concerns and apportion resources accordingly.

## Preventing Threats 
While there is no single step you can take to protect against all threats, there are some basic steps you can take that help reduce the risk of many types of threats.
- Keep systems and applications up to date. 
	- Vendors regularly release patches to correct bugs and security flaws, but these only help when they are applied. 
	- Patch management ensures that systems and applications are kept up to date with relevant patches. 
- Remove or disable unneeded services and protocols. 
	- If a system doesn’t need a service or protocol, it should not be running. 
	- Attackers cannot exploit a vulnerability in a service or protocol that isn’t running on a system. 
	- As an extreme contrast, imagine a web server is running every available service and protocol. It is vulnerable to potential attacks on any of these services and protocols. 
- Use intrusion detection and prevention systems. 
	- As discussed, intrusion detection and prevention systems observe activity, attempt to detect threats and provide alerts. 
	- They can often block or stop attacks.  
- Use up-to-date anti-malware software. 
	- We have already covered the various types of malicious code such as viruses and worms. 
	- A primary countermeasure is anti-malware software.  
- Use firewalls. 
	- Firewalls can prevent many different types of threats. 
	- Network-based firewalls protect entire networks, and host-based firewalls protect individual systems

- _Antivirus_
	- The use of antivirus products is strongly encouraged as a security best practice and is a requirement for compliance with the Payment Card Industry Data Security Standard (PCI DSS). 
		- PCI DSS is a Security standard that apply to merchants and service providers who process credit or debit card transactions
	- There are several antivirus products available, and many can be deployed as part of an enterprise solution that integrates with several other security products.
	- Antivirus systems try to identify malware based on the signature of known malware or by detecting abnormal activity on a system. 
		- This identification is done with various types of scanners, pattern recognition and advanced machine learning algorithms.
	- Anti-malware now goes beyond just virus protection as modern solutions try to provide a more holistic approach detecting rootkits, ransomware and spyware. 
	- Many endpoint solutions also include software firewalls and IDS or IPS systems
- _Scans_
	- Regular vulnerability and port scans are a good way to evaluate the effectiveness of security controls used within an organization. 
	- They may reveal areas where patches or security settings are insufficient, where new vulnerabilities have developed or become exposed, and where security policies are either ineffective or not being followed. 
	- Attackers can exploit any of these vulnerabilities.
- _Firewalls_
	- In building construction or vehicle design, a firewall is a specially built physical barrier that prevents the spread of fire from one area of the structure to another or from one compartment of a vehicle to another. 
	- Early computer security engineers borrowed that name for the devices and services that isolate network segments from each other, as a security measure. 
	- As a result, firewalling refers to the process of designing, using or operating different processes in ways that isolate high-risk activities from lower-risk ones.
	- Firewalls enforce policies by filtering network traffic based on a set of rules. 
	- While a firewall should always be placed at internet gateways, other internal network considerations and conditions determine where a firewall would be employed, such as network zoning or segregation of different levels of sensitivity. 
	- Firewalls have rapidly evolved over time to provide enhanced security capabilities. 
		- This growth in capabilities can be seen in the graphic below, which contrasts an oversimplified view of traditional and next-generation firewalls. 
	- It integrates a variety of threat management capabilities into a single framework, including proxy services, intrusion prevention services (IPS) and tight integration with the identity and access management (IAM) environment to ensure only authorized users are permitted to pass traffic across the infrastructure. 
	- While firewalls can manage traffic at Layers 2 (MAC addresses), 3 (IP ranges) and 7 (application programming interface (API) and application firewalls), the traditional implementation has been to control traffic at Layer 4
		- API is a set of routines, standards, protocols, and tools for building software applications or web tool

![[Screenshot from 2024-07-07 16-40-56.png | 650]]

- *Intrusion Preventing System (IPS)*
	- An intrusion prevention system (IPS) is a special type of active IDS that automatically attempts to detect and block attacks before they reach target systems. 
	- A distinguishing difference between an IDS and an IPS is that the IPS is placed in line with the traffic. 
		- In other words, all traffic must pass through the IPS and the IPS can choose what traffic to forward and what traffic to block after analyzing it. 
	- This allows the IPS to prevent an attack from reaching a target. 
	- Since IPS systems are most effective at preventing network-based attacks, it is common to see the IPS function integrated into firewalls. 
	- Just like IDS, there are Network-based IPS (NIPS) and Host-based IPS (HIPS)

![[Screenshot from 2024-07-07 16-48-31.png | 650]]


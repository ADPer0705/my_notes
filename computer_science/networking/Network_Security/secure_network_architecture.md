A properly designed network permits not only internet usage and device communication but also redundancy, optimization, and security.
- In a well-designed network, if a switch goes down, then packets can be redistributed through another route with no loss in uptime.
- If a webserver is compromised, it cannot traverse the network and access important information.
- A system administrator should be confident that their servers are secure if a random device joins a network, knowing that the device is segmented from the rest of the network and cannot access those systems
All of these concepts and scenarios are what separates a functional network from a well-designed network

---

# Network Segmentation
## The need for Secure Segmentation
Let's consider a scenario where a client brings in their own device, a common practice known as BYOD, and say the client's device was infected with a RAT that will attempt to traverse the network the device is connected to and exfiltrate any sensitive information. 
- even with subnetting in place, there is no restriction in place as to where the infected device could connect as long as the proper routes are in place, leaving sensitive information and servers open to unknown device
How do we fix this ? *VLANs*!

VLANs are used to segment portions of a network at layer tow, and differentiate devices 
- VLANs are configured on a switch by adding a "*tag*" to a frame. The **802.1q** or **dot1q** tag will designate the VLAN that the traffic originated from

![[Screenshot 2025-01-06 193711.png | 450]]

The 802.1 tag provides a standard between vendors that will always define the VLAN of a frame
- e.g. if our switches are Cisco and our routers are Juniper, they can send tagged frames and digest them equally because it is standardized

## Tagging Unknow Traffic
- The *Native VLAN* is used for any traffic that is not tagged and passes throgh a switch
- To configure a native VLAN, we must determine what interface and tag to assign them, then set the interface as the default native VLAN

## Routing Between VLANs
how does a VLAN connect to the internet or access resources in other VLANS? Since they are segmented, they cannot communicate outside their tagged devices
- Just as routers are used to communicate between traditional networks, routers can be used to route between VLANs

Before modern solutions were introduced, network engineers would physically connect a switch and router separately for each VLAN present. Nowadays, that problem is solved through the **ROAS** (**R**outer **o**n **a S**tick) design
- VLANs are configured to communicate with a router through a designated interface of a switch, known as a **switch port**
- The connection between a router and a switch is known as a **trunk**
- VLANs are routed through the switch port, requiring only one trunk/connection between the switch and router, hence, "_on a stick_."

Because all tagged traffic comes from a single connection, the router must be able to keep each tagged frame separate. This is accomplished using **virtual sub-interfaces**; these will act similar to physical interfaces and are commonly defined by the VLAN ID; the syntax for sub-interfaces is commonly

---

With the introduction of VLANs, there is a shift in network architecture design to include security as a key consideration.
- *Security*, *optimization*, and *redundancy* should all be considered when designing a network, ideally without compromising one component

How do we properly implement VLANs as a security boundary?
**Security Zones**!
- Security Zones define *what* or *who* is in a VLAN and how traffic can *travel in and out*

Depending on whom you speak to, every network architect may have a different approach/opinion to the language or requirements surrounding security zones

| **Zone  <br>**           | **Explanation  <br>**                                                                                                                            | **Examples**                              |
| ------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------- |
| External                 | All devices and entities outside of our network or asset control.                                                                                | Devices connecting to a web server        |
| DMZ (demilitarized zone) | Separates untrusted networks or devices from internal resources.                                                                                 | BYOD, remote users/guests, public servers |
| Trusted                  | Internal networks or devices. A device may be placed in the trusted zone if there is no confidential or sensitive information.                   | Workstations, B2B                         |
| Restricted               | Any high-risk servers or databases.                                                                                                              | Domain controllers, client information    |
| Management               | Any devices or services dedicated to network or other device management. This zone is less commonly seen and can be grouped with the audit zone. | Virtualization management, backup servers |
| Audit                    | Any devices or services dedicated to security or monitoring. This zone is less commonly seen and can be grouped with management.                 | SIEM, telemetry                           |

while security zones mostly factor in what will happen internally, it is equally important to consider how new traffic or devices will enter the network, be assigned, and interact with internal systems. 
- Most external traffic (HTTP, mail, etc.) will stay in the DMZ
- what is a remote user needs access to an internal resource ?
	- we can easily create rules for resources a user or device can access based on MAC, IP addresses, etc. and enforce them

---

# VPN Basics
- technology that allows devices on separate networks to communicate securely by creating a dedicated path between each other over the internet (known as a **tunnel**)
- devices connected with these tunnels form their own private networks

For example, only devices within the same network (such as within a business) can directly communicate. However, a VPN allows two offices to be connected. Let's take the diagram below, where there are three networks :

![[Screenshot 2025-01-08 160257.png]]

The devices connected on Network #3 are still a part of network #1 and network #2 but also form together to create a private network #3 that only devices that are connected via this VPN can communicate over

| **Benefit**                                                          | **Description**                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| -------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Allows networks in different geographical locations to be connected. | For example, a business with multiple offices will find VPNs beneficial, as it means that resources like servers/infrastructure can be accessed from another office.                                                                                                                                                                                                                                                                                                          |
| Offers privacy.                                                      | VPN technology uses encryption to protect data. This means that it can only be understood between the devices it was being sent from and is destined for, meaning the data isn't vulnerable to sniffing.<br><br>This encryption is useful in places with public WiFi, where no encryption is provided by the network. You can use a VPN to protect your traffic from being viewed by other people.                                                                            |
| Offers anonymity.                                                    | Journalists and activists depend upon VPNs to safely report on global issues in countries where freedom of speech is controlled.<br><br>Usually, your traffic can be viewed by your ISP and other intermediaries and, therefore, tracked. <br><br>The level of anonymity a VPN provides is only as much as how other devices on the network respect privacy. For example, a VPN that logs all of your data/history is essentially the same as not using a VPN in this regard. |

VPN technology has improved over the years. Let's explore some existing VPN technologies below:

| **VPN Technology** | **Description**                                                                                                                                                                                                                                                                                                                             |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| PPP                | This technology is used by PPTP (explained below) to allow for authentication and provide encryption of data. VPNs work by using a private key and public certificate (similar to **SSH**). A private key & certificate must match for you to connect.<br><br>This technology is not capable of leaving a network by itself (non-routable). |
| PPTP               | The **P**oint-to-**P**oint **T**unneling **P**rotocol (**PPTP**) is the technology that allows the data from PPP to travel and leave a network. <br><br>PPTP is very easy to set up and is supported by most devices. It is, however, weakly encrypted in comparison to alternatives.                                                       |
| IPSec              | Internet Protocol Security (IPsec) encrypts data using the existing **I**nternet **P**rotocol (**IP**) framework.<br><br>IPSec is difficult to set up in comparison to alternatives; however, if successful, it boasts strong encryption and is also supported on many devices.                                                             |

---


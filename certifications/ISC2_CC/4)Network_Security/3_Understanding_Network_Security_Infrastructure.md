# On-Premise Data Centers
there are two primary options for data centers : 
- organizations can outsource the data center or 
- own the data center 

If the data center is owned by the organization, it will likely by built on premises 
- a place, like a building for the data center is needed 
- along with power supply, HVAC, fire suppression and redundancy
	- HVAC stands for heating, ventilation and air conditioning 

- **HVAC**
	- heating, ventilation and air conditioning 
	- High-density equipment and equipment within enclosed spaces requires adequate cooling and airflow. 
	- Well-established standards for the operation of computer equipment exist, and equipment is tested against these standards. 
	- For example, 
		- the recommended range for optimized maximum uptime and hardware life is from 64° to 81°F (18° to 27°C), and 
		- it is recommended that a rack have three temperature sensors, positioned at the top, middle and bottom of the rack, to measure the actual operating temperature of the environment. 
	- Proper management of data center temperatures, including cooling, is essential.
	- Cooling is not the only issue with airflow: Contaminants like dust and noxious fumes require appropriate controls to minimize their impact on equipment. 
	- Monitoring for water or gas leaks, sewer overflow or HVAC failure should be integrated into the building control environment, with appropriate alarms to signal to organizational staff. 
	- Contingency planning to respond to the warnings should prioritize the systems in the building, so the impact of a major system failure on people, operations or other infrastructure can be minimized.
- **Data Centers / Closets**
	- The facility wiring infrastructure is integral to overall information system security and reliability. 
	- Protecting access to the physical layer of the network is important in minimizing intentional or unintentional damage. 
	- Proper protection of the physical site must address these sorts of security challenges. 
	- Data centers and wiring closets may include the following:
		- Phone, network, special connections
		- ISP or telecommunications provider equipment
		- Servers
		- Wiring and/or switch components
- **Power**
	- Data centers and information systems in general consume a tremendous amount of electrical power, which needs to be delivered both constantly and consistently. 
	- Wide fluctuations in the quality of power affect system lifespan, while disruptions in supply completely stop system operations.
	- Power at the site is always an integral part of data center operations. Regardless of fuel source, backup generators must be sized to provide for the critical load (the computing resources) and the supporting infrastructure. 
	- Similarly, battery backups must be properly sized to carry the critical load until generators start and stabilize. 
	- As with data backups, testing is necessary to ensure the failover to alternate power works properly.
- **Fire Suppression**
	- For server rooms, appropriate fire detection/suppression must be considered based on 
		- the size of the room, 
		- typical human occupation, 
		- egress routes and 
		- risk of damage to equipment. 
	- For example, water used for fire suppression would cause more harm to servers and other electronic components. Gas-based fire suppression systems are more friendly to the electronics, but can be toxic to humans.

# Redundancy
The concept of redundancy is to *design systems with duplicate components* so that if a failure were to occur, there would be a backup. 
This can apply to the data center as well. 
- Risk assessments pertaining to the data center should identify when multiple separate utility service entrances are necessary for redundant communication channels and/or mechanisms.  

If the organization requires full redundancy, devices should have two power supplies connected to diverse power sources. Those power sources would be backed up by batteries and generators. In a high-availability environment, even generators would be redundant and fed by different fuel types.

![[Screenshot from 2024-07-27 16-53-04.png]]


> [!NOTE]
> UPS : Uninterrupted Power supply

---

# MOU / MOA

> [!NOTE] 
> MOU : Memorandum of Understanding
> MOA : Memorandum of Agreement

Some organizations seeking to minimize downtime and enhance BC (Business Continuity) and DR (Disaster Recovery) capabilities will create agreements with other, similar organizations. 
- They agree that if one of the parties experiences an emergency and cannot operate within their own facility, the other party will share its resources and let them operate within theirs in order to maintain critical functions. 
- These agreements often even include competitors, because their facilities and resources meet the needs of their particular industry. 

For example, Hospital A and Hospital B are competitors in the same city. The hospitals create an agreement with each other: if something bad happens to Hospital A (a fire, flood, bomb threat, loss of power, etc.), that hospital can temporarily send personnel and systems to work inside Hospital B in order to stay in business during the interruption (and Hospital B can relocate to Hospital A, if Hospital B has a similar problem). The hospitals have decided that they are not going to compete based on safety and security—they are going to compete on service, price and customer loyalty. This way, they protect themselves and the healthcare industry as a whole.  

These agreements are called *joint operating agreements (JOA)* or *memoranda of understanding (MOU)* or *memoranda of agreement (MOA)*. Sometimes these agreements are mandated by regulatory requirements, or they might just be part of the administrative safeguards instituted by an entity within the guidelines of its industry. 

The difference between an MOA or MOU  and an SLA is that 
- a Memorandum of Understanding is more directly related to what can be done with a system or the information. 
- The service level agreement goes down to the granular level. 
	- For example, if I'm outsourcing the IT services, then I will need to have two full-time technicians readily available, at least from Monday through Friday from eight to five. 
	- With cloud computing, I need to have access to the information in my backup systems within 10 minutes. 
	- An SLA specifies the more intricate aspects of the services.  

We must be very cautious when outsourcing with cloud-based services, because we have to make sure that we understand exactly what we are agreeing to. If the SLA promises 100 percent accessibility to information, is the access directly to you at the moment, or is it access to their website or through their portal when they open on Monday? That's where you'll rely on your legal team, who can supervise and review the conditions carefully before you sign the dotted line at the bottom.

---

# Cloud

> [!NOTE] Cloud Computing
> A model for enabling ubiquitous, convenient, on-demand network access to a shared pool of configurable computing resources (e.g. networks, servers, storage, applications, and services) than can be rapidly provisioned and released with minimal management effort or service provider interaction 
> NIST 800-145

- Usually associated with an internet-based set of computing resources, and typically sold as a service, provided by a *cloud service provider (CSP)*

Cloud computing is very similar to the electrical or power grid. 
- It is provisioned in a geographic location and is sourced using an electrical means that is not necessarily obvious to the consumer. 
- But when you want electricity, it’s available to you via a common standard interface and you pay only for what you use. 
- In these ways, cloud computing is very similar. It is a *very scalable, elastic and easy-to-use “utility” for the provisioning and deployment of Information Technology (IT) services*.  

There are various definitions of what cloud computing means according to the leading standards, including NIST. The NIST definition provided above is commonly used around the globe, cited by professionals and others alike to clarify what the term “cloud” means

This image depicts cloud computing characteristics, service and deployment models

![[Screenshot from 2024-07-27 17-22-41.png | 450]]


## Cloud Characteristics
Cloud-based assets include any resources that an organization accesses using cloud computing. 
- Cloud computing refers to on-demand access to computing resources available from almost anywhere, and 
- cloud computing resources are highly available and easily scalable. 
- Organizations typically lease cloud-based resources from outside the organization. 
- Cloud computing has many benefits for organizations, which include but are not limited to: 
	- *Usage is metered and priced according to units (or instances) consumed*. This can also be billed back to specific departments or functions.
	- *Reduced cost of ownership*. There is no need to buy any assets for everyday use, no loss of asset value over time and a reduction of other related costs of maintenance and support.
	- *Reduced energy and cooling costs*, along with *“green IT” environment effect* with optimum use of IT resources and systems.
	- Allows an enterprise to *scale up* new software or data-based services/solutions through cloud systems quickly and *without having to install massive hardware locally* 

## Service Models 
Some cloud based services only provide data storage and access. 
- When storing data in cloud, organization must ensure that security controls are in place to prevent unauthorized access to the data 

There are varying levels of responsibility for assets depending on the service model. This includes : 
- maintaining the assets
- ensuring they remain functional 
- keeping the systems and applications up to date with current patches 
In some cases, the cloud service provider is responsible for these steps. In other cases, the consumer is responsible for these steps 

Types of cloud computing service models include 
- *Software as a Service (SaaS)*
	- The cloud customer uses the cloud provider's application running within a cloud infrastructure
	- The application from various client devices through either a thin client interface, such as a web browser, or a program interface
	- SaaS is a distributed model where software applications are hosted by a vendor or cloud service provider and made available to customers over a network resources
	- The consumer does not manage or control the underlying cloud infrastructure including network, servers, operating systems, storage, or even individual application capabilities with the possible exception of limited user-specific applications configuration settings
	- SaaS has many benefits for organizations, which include but are not limited to 
		- Ease of use and limited/minimal administration 
		- Automatic updates 
		- patch management 
			- The user will always be running the latest version and most up-to-date deployment of the software release, as well as any relevant security updates, with no manual patching required 
		- Standardization and Compatibility 
			- All users will have the same version of the software release 
	- Derived from NIST 800-145
- *Platform as a Service (PaaS)*
	- The web-authoring or application development middleware environment that allows applications to be built in the cloud before they're deployed as SaaS assets
	- A cloud provides an environment for customers to use to build and operate their own software
	- PaaS is a way for the customer to rent hardware, operating systems, storage and network capacity over the internet fro a cloud service provider
	- The consumer down not manage or control the underlying cloud infrastructure, including network, servers, operating systems, or storage, but has control over the deployed application and possibly application-hosting environment configurations 
	- A PaaS cloud provides a toolkit for conveniently developing, deploying and administering application software that is structured to support large numbers of consumers, process very large quantities of data and potentially be accessed from any point on the internet
	- PaaS clouds will typically provide a set of software building blocks and a set of development tools such as programming languages and supporting run-time environments that facilitate the construction of high-quality, scalable applications
	- Additionally, PaaS clouds will typically provide tools that assist with the deployment of new applications
	- PaaS clouds will also generally provide and maintain the computing resources (e.g., processing, storage and networking) that consumer applications need to operate
	- PaaS clouds provide many benefits for developers, including that the operating system can be changed and upgraded frequently, along with associated features and system services
- *Infrastructure as a Service (IaaS)*
	- The provider of the core computing, storage and network hardware and software that is the foundation upon which organizations can build and then deploy applications
	- IaaS models provide basic computing resources to consumers. This includes servers, storage, and in some cases, networking resources. 
	- Consumers install operating systems and applications and perform all required maintenance on the operating systems and applications.
	- IaaS is popular in the data center where software and servers are purchased as a fully outsourced service and usually billed on usage and how much of the resource is used
	- Although the consumer has use of the related equipment, the cloud service provider retains ownership and is ultimately responsible for hosting, running and maintenance of the hardware.
	- IaaS is also referred to as hardware as a service 
	- Benefits includes 
		- Ability to scale up and down infrastructure service based on actual usage. This is particularly useful and beneficial where there are significant spikes and dips withing the usage curve for infrastructure 
		- Retain system control at the operating system level 

## Deployment Models
- There are four cloud deployment models. The cloud deployment model also affects the breakdown of responsibilities of the cloud-based assets

The four models are : 
- *public*
	- NIST SP 800-145
		- The cloud infrastructure is provisioned for open use by the general public
		- It may be owned, managed, and operated by a business, academic, or government organization, or some combination of them
		- It exists on the premises of the cloud provider
	- commonly referred to as "cloud for the public"
	- There is no real mechanism, other than applying for and paying for the cloud service
	- A public cloud deployment model includes assets available for any consumer to rent or lease and is hosted by an external cloud service provider (CSP)
	- Service level agreements can be effective at ensuring the CSP provides the cloud-based services at a level acceptable to the organization
- *private*
	- The phrase used to describe a cloud computing platform that is implemented within the corporate firewall, under the control of the IT department 
	- Private clouds begin with the same technical concepts as public clouds, except that instead of being shared with the public, they are generally developed and deployed for a private organization that builds its own cloud 
	- A private cloud is designed to offer the same features and benefits of cloud systems, but removes a number of objections to the cloud computing model, including control over enterprise and customer data, worries about security, and issues connected to regulatory compliance 
	- An organization can also rent resources from a third party and split maintenance requirements based on the service model (IaaS, PaaS, or SaaS)
- *hybrid*
	- A combination of public cloud storage and private cloud storage where some critical data resides in the enterprise's private cloud while other data is stored and accessible from a public cloud storage provider 
	- Hybrid cloud computing is gaining popularity with organizations by providing them with the ability to retain control of their IT environments, conveniently allowing them to use public cloud service to fulfill non-mission-critical workloads, and taking advantage of flexibility, scalability and cost savings
	- Important drivers or benefits of hybrid cloud deployments include : 
		- Retaining ownership and oversight or critical tasks and processes related to technology
		- reusing previous investments in technology within the organization 
		- Control over the most critical business components and systems
		- Cost-effective means to fulfilling non-critical business functions (utilizing public cloud components)
- *community*
	- NIST 800-45
		- A system in which the cloud infrastructure is provisioned for exclusive use by a specific community of consumers from organizations that have shared concerns (e.g. mission, security requirements, policy and compliance considerations)
		- It may be owned, managed and operated by one or more of the organizations in the community, a third party or some combination of them, and it may exist on or off premises 
	- community clouds can be either public or private
	- What makes them unique is that they are generally developed for a particular community. 
		- An example could be a public community cloud focused primarily on organic food, or maybe a community cloud focused specifically on financial services. 
	- The idea behind the community cloud is that people of like minds or similar interests can get together, share IT capabilities and services, and use them in a way that is beneficial for the particular interests that they share


---

# Managed Service Provider (MSP)
A managed service provider (MSP) is a company that *manages information technology assets* for another company. Small- and medium-sized businesses commonly outsource part or all of their information technology functions to an MSP to manage day-to-day operations or to provide expertise in areas the company does not have. Organizations may also use an MSP to provide *network and security monitoring and patching services*. 

Today, many MSPs offer *cloud-based services augmenting SaaS solutions* with *active incident investigation and response activities*. 
- One such example is a *managed detection and response (MDR) service*, where a vendor monitors firewall and other security tools to provide expertise in triaging events. 

Some other common MSP implementations are: 
- Augment in-house staff for projects
- Utilize expertise for implementation of a product or service
- Provide payroll services
- Provide Help Desk service management
- Monitor and respond to security incidents
- Manage all in-house IT infrastructure

---

# Service Level Agreement (SLA)
The *cloud computing service-level agreement (cloud SLA)* is an agreement between a cloud service provider and a cloud service customer *based on a taxonomy of cloud computing– specific terms to set the quality of the cloud services delivered*. It characterizes quality of the cloud services delivered in terms of 
- a set of measurable properties specific to cloud computing (business and technical) and 
- a given set of cloud computing roles (cloud service customer, cloud service provider, and related sub-roles).

Think of a rule book and legal contract—that combination is what you have in a service-level agreement (SLA). 
- In it, the minimum level of service, availability, security, controls, processes, communications, support and many other crucial business elements are stated and agreed to by both parties.  

The purpose of an SLA is to 
- document specific parameters, 
- minimum service levels and 
- remedies for any failure to meet the specified requirements. 
It should also affirm data ownership and specify data return and destruction details. 

Other important SLA points to consider include the following:
- Cloud system infrastructure details and security standards
- Customer right to audit legal and regulatory compliance by the CSP         
- Rights and costs associated with continuing and discontinuing service use
- Service availability
- Service performance
- Data security and privacy
- Disaster recovery processes
- Data location
- Data access
- Data portability
- Problem identification and resolution expectations
- Change management processes
- Dispute mediation processes
- Exit strategy


---

# Network Design
The objective of network design is to satisfy data communication requirements and results in efficient overall performance

## Network Segmentation
Network segmentation involves controlling traffic among networked devices. 

![[Screenshot from 2024-08-08 09-14-03.png]]

Complete or physical network segmentation occurs when a network is isolated from all outside communication, so transactions can only occur between devices within the segmented network

## Demilitarized Zone
A *DMZ* is a network area that is designed to be accessed by outside visitors but still isolated from the private network of the organization

![[Screenshot from 2024-08-08 09-18-27.png]]

The DMZ is often the host of public web, email, file and other resource servers

## Virtual Local Area Network (VLAN)

![[Screenshot from 2024-08-08 09-20-21.png]]

VLANs are created by switches to logically segment a network without altering its physical topology

## Virtual Private Network (VPN)

![[Screenshot from 2024-08-08 09-22-09.png]]

A Virtual Private Network is a communication tunnel that provide point-to-point transmission of both authentication and data traffic over an untrusted network

## Defense in Depth
Defense in depth uses multiple types of access controls in literal or theoretical layers to help an organization avoid a monolithic security stance

## Network Access Control (NAC)

![[Screenshot from 2024-08-08 09-33-02.png]]

Network Access Control (NAC) is a concept of controlling access to an environment through strict adherence to and implementation of security policy

## Defense in Depth
Defense in depth uses a layered approach when designing the security posture of an organization. Using layers of security will deter many attackers and encourage them to focus on other, easier target.

Defense in depth provides more of a starting point for considering all types of controls -- administrative, technological, and physical -- that empowers insiders and operators to work together to protect their organization and its systems

Here are some examples that further explain the concept of defense in depth
- **Data** : 
	- Controls that protect the actual data with technologies such as encryption, data leak prevention, identity and access management and data controls.
- **Application** : 
	- Controls that protect the application itself with technologies such as data leak prevention, application firewalls and database monitors.
- **Host** : 
	- Every control that is placed at the endpoint level, such as antivirus, endpoint firewall, configuration and patch management.
- **Internal network** : 
	- Controls that are in place to protect uncontrolled data flow and user access across the organizational network. Relevant technologies include intrusion detection systems, intrusion prevention systems, internal firewalls and network access controls.
- **Perimeter** : 
	- Controls that protect against unauthorized access to the network. 
	- This level includes the use of technologies such as gateway firewalls, honeypots, malware analysis and secure demilitarized zones (DMZs).
- **Physical** : 
	- Controls that provide a physical barrier, such as locks, walls or access control.
- **Policies, procedures and awareness** : 
	- Administrative controls that reduce insider threats (intentional and unintentional) and identify risks as soon as they appear

![[Screenshot from 2024-08-10 12-00-57.png]]

## Zero Trust


> [!NOTE]
> Removing the design belied that the network has any trusted space. Security is managed at each possible level, representing the most granular asset. Micro-segmentation of workloads is a tool of the model.

- Zero trust networks are often microsegmented networks, with firewalls at nearly every connecting point
- Zero trust encapsulates information assets, the services that apply to them and their security properties

This concept recognizes that once inside a trust-but-verify environment , a user has perhaps unlimited capabilities to roam around, identify assets and systems and potentially find exploitable vulnerabilities.

Zero trust is an evolving design approach which recognizes that even the most robust access control systems have their weaknesses. It adds defenses at the user, asset and data level, rather than relying on perimeter defense. In the extreme, it insists that every process or action a user attempts to take must be authenticated and authorized; the window of trust becomes vanishingly small

While microsegmentation adds internal perimeters, zero trust places the focus on the assets, or data, rather than the perimeter. Zero trust builds more effective gates to protect the assets directly rather than building additional or higher walls
- Microsegmentation is a part of the zero-trust strategy that breaks LANs into very small, highly localized zones using firewalls or similar technologies. At the limits, this places firewall at every connection point

![[Screenshot from 2024-08-10 12-23-07.png]]

## Network Access Control (NAC)
It is important that we both know and control access to an organization's network, both from insides (e.g. employees, contractors) and from outsiders (e.g. customers, corporate partners, vendors). We need to be able to see who or what is attempting to make a network connection

At one time, network access was limited to internal devices. Gradually, that was extended to remote connections, although initially those were the exceptions rather than the norm. This started to change with the concepts of bring your own device (BYOD) and Internet of Things (IoT)

Having identified the need for a NAC solution, we need to identify what capabilities a solution may provide. 
- As we know, everything begins with a policy. 
	- The organization’s access control policies and associated security policies should be enforced via the NAC device(s)
- The NAC device will provide 
	- the network visibility needed for access security and 
	- may later be used for incident response. 
- Aside from identifying connections, it should also be able to provide isolation for non-compliant devices within a quarantined network and provide a mechanism to “fix” the non-compliant elements, such as turning on endpoint protection. 
In short, the goal is to ensure that all devices wishing to join the network do so only when they comply with the requirements laid out in the organization policies. This visibility will encompass internal users as well as any temporary users such as guests or contractors, etc., and any devices they may bring with them into the organization

Ideally each time a network connection is made, and that the device is identified and interrogated to ensure the organization's policies are being met

![[Screenshot from 2024-08-10 15-52-35.png]]


## Network Segmentation (Demilitarized Zone (DMZ))
Network Segmentation is also an effective way to achieve defense in depth for distributed or multi-tiered applications

The use of a DMZ is a common practice in security architecture
- with a DMZ, host systems that are accessible through the firewall are physically separated from the internal network by means of secured switches or by using an additional firewall to control traffic between the web server and the internal network
- Application DMZs (or semi-trusted networks) are frequently used today to access to application server to those networks or systems that have a legitimate need to connect 

![[Screenshot from 2024-08-10 15-58-05.png]]

## Segmentation for Embedded Systems and IoT
An embedded system is a computer implemented as a part of a larger system
- The embedded system is typically designed around a limited set of specific functions in relation to the larger product of which it is a component. 
- Examples of embedded systems include network-attached printers, smart TVs, HVAC controls, smart appliances, smart thermostats and medical devices

Network-enabled devices are any type of portable or non-portable device that has native network capabilities
- This generally assumes the network in question is a wireless type of network, typically provided by a mobile telecommunications company
- Network-enabled devices include smartphones, mobile phones, tablets, smart TVs or streaming media player, network-attached printers, game systems, and much more

The Internet of Things (IoT) is the collection of devices that can communicate over the internet with one another or with a control console in order to affect and monitor the real world. 
- IoT devices might be labeled as smart devices or smart-home equipment
- Many of the ideas of industrial environmental control found in office buildings are finding their way into more consumer-available solutions for small offices or personal homes

Embedded systems and network-enabled devices that communicate with the internet are considered IoT devices and need special attention to ensure that communication is not used in a malicious manner. 
- Because an embedded system is often in control of a mechanism in the physical world, a security breach could cause harm to people and property. 
- Since many of these devices have multiple access routes, such as ethernet, wireless, Bluetooth, etc., special care should be taken to isolate them from other devices on the network. 
- You can impose logical network segmentation with switches using VLANs, or through other traffic-control means, including MAC addresses, IP addresses, physical ports, protocols, or application filtering, routing, and access control management. 
- Network segmentation can be used to isolate IoT environments

![[Screenshot from 2024-08-10 16-06-17.png]]



## Microsegmentation
The toolsets of current adversaries are polymorphic in nature and allow threats to bypass static security controls. 
- Modern cyber-attacks take advantage of traditional security models to move easily between systems within a data center. 
- Microsegmentation aids in protecting against these threats. 
- A fundamental design requirement of microsegmentation is to understand the protection requirements for traffic within a data center and traffic to and from the internet traffic flows. 

When organizations avoid infrastructure-centric design paradigms, they are more likely to become more efficient at service delivery in the data center and become apt at detecting and preventing advanced persistent threats

## Virtual Local Area Networks (VLANs)


> [!NOTE]
> A virtual local area network (VLAN) is a logical group of workstations, servers, and network devices that appears to be on the same LAN despite their geographical distribution

Virtual local area networks (VLANs) allow network administrators to use switches to create software-based LAN segments, which can segregate or consolidate traffic across multiple switch ports. 
- Devices that share a VLAN communicate through switches as if they were on the same Layer 2 network. 
- This image shows different VLANs — red, green and blue — connecting separate sets of ports together, while sharing the same network segment (consisting of the two switches and their connection). 
- Since VLANs act as discrete networks, communications between VLANs must be enabled. 
- Broadcast traffic is limited to the VLAN, reducing congestion and reducing the effectiveness of some attacks. 
- Administration of the environment is simplified, as the VLANs can be reconfigured when individuals change their physical location or need access to different services. 
- VLANs can be configured based on switch port, IP subnet, MAC address and protocols.

VLANs do not guarantee a network’s security. At first glance, it may seem that traffic cannot be intercepted because communication within a VLAN is restricted to member devices. However, there are attacks that allow a malicious user to see traffic from other VLANs (so-called VLAN hopping). The VLAN technology is only one tool that can improve the overall security of the network environment

![[Screenshot from 2024-08-10 16-17-57.png]]

## Virtual Private Network (VPN)


> [!NOTE] 
> A Virtual Private Network (VPN), built on top of existing networks, that can provide a secure communications mechanism for transmission between networks

- A virtual private network (VPN) is not necessarily an encrypted tunnel. It is simply a point-to-point connection between two hosts that allows them to communicate
- Secure communications can, of course, be provided by the VPN, but only if the security protocols have been selected and correctly configured to provide a trusted path over an untrusted network, such as the internet
- Remote users employ VPNs to access their organization’s network, and depending on the VPN’s implementation, they may have most of the same resources available to them as if they were physically at the office. 
- As an alternative to expensive dedicated point-to-point connections, organizations use gateway-to-gateway VPNs to securely transmit information over the internet between sites or even with business partners
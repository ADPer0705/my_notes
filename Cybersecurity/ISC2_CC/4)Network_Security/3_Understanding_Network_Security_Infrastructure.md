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

![[Screenshot from 2024-07-27 17-22-41.png | 650]]


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
- *private*
- *hybrid*
- *community*

fir# What is Security Control ?
A control is a safeguard or a countermeasure designed to preserve Confidentiality, Integrity and Availability of data, i.e. the CIA triad 

Access control involves limiting what **objects** can be available to what **subjects** according to what **rules**

-----
# Controls Overview 
It can be argued that access controls are the heart of an information security program. Access control are both about restricting and granting access to the information system and data.

Access is based on three elements : 
1. **Subjects**
	- A subject can be defined as *any entity that requests access to our assets*.
	- A subject is the initiator of a request for service, therefore it is referred to as "*Active*"
	- A SUBJECT 
		- Is a user, a process, a procedure, a client (or a server), a program, a device such as an endpoint, workstation, smartphone or removable storage device with onboard firmware 
		- Is active 
		- requests a service from an object 
		- should have a level of clearance that relates to its ability to successfully access service or resources 
1. **Objects**
	- By definition, *anything that a subject attempts to access* is referred to as an object 
	- while a subject is active in that it initiates the request, an object is *passive in that it takes no action unless it is called upon*
	- By definition objects are passive hence they so no contain their own access control system and must be protected by some other layer of functionality in the system
	- An object has an owner who has the right to determine who or what should be allowed access to their object
	- An OBJECT
		- Is a building, a computer, a file, a database, a printer or scanner, a server, a communications resource, a block of memory, an input/output port, a person, a software task, thread or process
		- Is anything that provides service to a user 
		- Is passive 
		- Responds to a request 
		- May have a classification 
1. **Rules**
	- RULE : An instruction developed to allow or deny access to a system by comparing the subject to an access control list 
	- FIREWALL : Devices that enforce administrative policies by filtering incoming traffic based on a set of rules 
		- by default firewalls deny access to from any address to any address on any port 
		- For a firewall to be useful it need rules 
	- a RULE :
		- Compare multiple attributes to determine appropriate access 
		- Allow access to an object 
		- Define how much access is allowed
		- Deny access to an object 
		- Apply time-based access 

# Controls Assessment 
Risk reduction depends on the effectiveness of the control. The cost of implementing the controls must align with the value of what is being protected.

---

# Defense in Depth 
all access permissions including the access to the building, the server room, access to the networks, and application and utilities, are all implementations of access control and are part of a *layered defense* strategy, also known as *defense in depth* developed by an organisation 
- layered defense : The use of multiple controls arranged in series to provide several consecutive controls to protect an asset; also called defense in depth
- defense in depth : Information Security strategy integrating people, technology, and operation capabilities to establish variable barriers across multiple layers and missions of the organisation. NIST SP 800-53 Rev 4
	- It applies multiple countermeasures in a layered fashion

---

# Principles of Least Privilege 
The *Principle of least privilege* is a standard of permitting only minimum access necessary for users or programs to fulfill their function. Users are provided access to only the system and programs they need to perform their specific job or tasks 

We use privileged access management, to preserve the confidentiality of information and ensure that it is only available to personnel who are authorized to see it, and is based on the principle of least privileges

sometimes it is necessary to allow users to access the information via a temporary or limited access, for instance, for a specific time period or just within the normal business hours, or access rules can limit the field the users have access to

# Privileged Access Management 
Privileged access management provides the first and perhaps most familiar use case. Consider a human user identity that is granted various create, read, update, and delete privileges on a database. Without privileged access management, the system’s access control would have those privileges assigned to the administrative user in a static way, effectively “on” 24 hours a day, every day. Security would be dependent upon the login process to prevent misuse of that identity. Just-in-time privileged access management, by contrast, includes role-based specific subsets of privileges that only become active in real time when the identity is requesting the use of a resource or service

Consider this scenario explaining why privileged access management is important:

_ABC, Inc., has a small IT department that is responsible for [user provisioning](https://learn.isc2.org/content/enforced/9541-CC-SPT-GLOBAL-1ED-1M/build/chapter_03/module_01/ch03_m01-Privileged_Access_Management.html?ou=9541&d2l_body_type=3#) and administering systems. To save time, the IT department employees added their IDs to the Domain Admins group, effectively giving them access to everything within the Windows server and workstation environment. While reviewing an invoice that was received via email, they opened an email that had a malicious attachment that initiated a [ransomware](https://learn.isc2.org/content/enforced/9541-CC-SPT-GLOBAL-1ED-1M/build/chapter_03/module_01/ch03_m01-Privileged_Access_Management.html?ou=9541&d2l_body_type=3#) attack. Since they are using Domain Admin privileges, the ransomware was able to [encrypt](https://learn.isc2.org/content/enforced/9541-CC-SPT-GLOBAL-1ED-1M/build/chapter_03/module_01/ch03_m01-Privileged_Access_Management.html?ou=9541&d2l_body_type=3#) all the files on all servers and workstations. A privileged access management solution could limit the damage done by this ransomware if the administrator privileges are only used when performing a function requiring that level of access. Routine operations, such as daily email tasks, are done without a higher level of access

# Privileged Accounts 
*Privileged Accounts* are those with permissions beyond those of normal users such as managers and administrators
- An information system account with approved authorization of a privileged user. NIST SP 800-53 Rev. 4

Broadly speaking, these accounts have elevated privileges and are used by many different classes of users, including: 

- Systems administrators, who have the principal responsibilities for operating systems, applications deployment and performance management. 
- Help desk or IT support staff, who often need to view or manipulate endpoints, servers and applications platforms by using privileged or restricted operations. 
- Security analysts, who may require rapid access to the entire IT infrastructure, systems, endpoints and data environment of the organization

Other classes of privileged users can be created on a per-client or a per-project basis, to allow a member of that project or client service team to have greater control over data and applications 

These few examples indicate that organisations often need to delegate the capability to manage and protect information assets to various managerial, supervisory, support or leadership people, with differing levels of authority and responsibility.This delegation, of course, should be contingent upon trustworthiness, since misuse or abuse of these privileges could lead to harm for the organization and its stakeholders.

Typical measures used for moderating the potential for elevated risks from misuse or abuse of privileged accounts include the following: 

- *More extensive and detailed logging* than regular user accounts. The record of privileged actions is vitally important, as both a *deterrent (for privileged account holders that might be tempted to engage in untoward activity)* and an *administrative control (the logs can be audited and reviewed to detect and respond to malicious activity)*. 
	- logging : Collecting and storing user activities in a log, which is a record of the events occurring within an organization's systems and networks. NIST SP 1800-25B
	- Audit : independent review and examination of records and activities to assess the adequacy of system controls, to ensure compliance with established policies and operational procedures. NIST SP 1800-15B
- *More stringent access control than regular user accounts*. even non-privileged users should be required to use MFA methods to gain access to organizational systems and networks. Privileged users—or more accurately, highly trusted users with access to privileged accounts—should be required to go through additional or more rigorous authentication prior to those privileges. Just-in-time identity should also be considered as a way to restrict the use of these privileges to specific tasks and the times in which the user is executing them. 
	- **Just-in-Time (JIT)** access is a fundamental security practice where the privilege granted to access applications or systems is limited to predetermined periods of time, on an as-needed basis
- *Deeper trust verification* than regular user accounts. Privileged account holders should be subject to more detailed background checks, stricter non-disclosure agreements and acceptable use policies, and be willing to be subject to financial investigation. Periodic or event-triggered updates to these background checks may also be in order, depending on the nature of the organization’s activities and the risks it faces. 
- *More auditing than regular user accounts*. Privileged account activity should be monitored and audited at a greater rate and extent than regular usage.

---

# Segregation of Duties 
A core principle of authorization is the principle of *segregation of duties* (also known as separation of duties)
- The practice of ensuring that an organizational process cannot be completed by a single person; forces collusion as a means to reduce insider threats
Segregation of duties is based on the security practice that no one person should control an entire high-risk transaction from start to finish, instead the transaction should be broken into separate parts and requires a different person to execute each part of the transaction. for instance, almost anyone may submit a proposal for a change to a system configuration, but the request must go through technical and management review and gain approval, before it can be implemented.

This steps can prevent fraud or detect an error in the process before implementation. It is possible yet that two individuals can willfully work together to bypass the segregation of duties, so that they could jointly commit fraud. This is known as *Collusion*

Another implementation of segregation of duties is dual control. This would apply at a bank where there are two separate combination locks on the door of the vault. Some personnel know one of the combinations and some know the other, but no one person knows both combinations. Two people must work together to open the vault; thus, the vault is under dual control

## Two Person Integrity
The Two-person rule is a security strategy that requires a minimum of two people to be in an area together, making it impossible for a person to be in the area alone.
- e.g. many access control systems prevent an individual cardholder from entering a selected high-security area unless accompanied by at least one other person 
- This can help reduce *insider threats* to critical areas by requiring at least two individuals to be present at any time
	- An entity with authorized access that has the potential to harm an information system through destruction, disclosure, modification of data, and/or denial of service. NIST SP 800-32

---

# Authorized Versus Unauthorized Personnel
- Subjects are authorized access to object after they have been authenticated
- Authentication is confirming the identity of the subject. once a subject is authenticated, the system checks its authorization to see if it is allowed to complete the action it is attempting.
- This is usually done by a security matrix accessed by the system controlling the access, based on pre-approved levels
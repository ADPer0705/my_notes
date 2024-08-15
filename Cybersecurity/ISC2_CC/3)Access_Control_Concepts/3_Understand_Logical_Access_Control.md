# What are Logical Access Controls ?
Whereas physical access controls are tangible methods or mechanisms that limit someone from getting access to an area or asset, logical access controls are electronic methods that limit someone from getting access to systems, and sometimes even to tangible assets or areas. Types of logical access controls include: 

- Passwords
- Biometrics (implemented on a system, such as a smartphone or laptop)
- Badge/token readers connected to a system

These types of electronic tools limit who can get logical access to an asset, even if the person already has physical access.

---
# Discretionary Access Control (DAC)

*Discretionary access control (DAC)* is a specific type of access control policy that is enforced over all subjects and objects in an information system. In DAC, the policy specifies that a subject who has been granted access to information can do one or more of the following:

- Pass the information to other subjects or objects 
- Grant its privileges to other subjects 
- Change security attributes on subjects, objects, information systems or system components 
- Choose the security attributes to be associated with newly created or revised objects; and/or 
- Change the rules governing access control; mandatory access controls restrict this capability 

*A certain amount of access control is left to the discretion of the object's owner, or anyone else who is authorized to control the object's access. The owner can determine who should have access rights to an object and what those rights should be*. NIST SP800-192

Most information systems in the world are DAC systems. In a DAC system, a user who has access to a file is usually able to share that file with or pass it to someone else. This grants the user almost the same level of access as the original owner of the file. Rule-based access control systems are usually a form of DAC.

Discretionary access control systems allow users to establish or change these permissions on files they create or otherwise have ownership of.

Steve and Aidan, for example, are two users (subjects) in a [UNIX environment](https://learn.isc2.org/content/enforced/9541-CC-SPT-GLOBAL-1ED-1M/build/chapter_03/module_03/ch03_m03-Discretionary_Access_Control_(DAC).html?ou=9541&d2l_body_type=3#) operating with DAC in place. Typically, systems will create and maintain a table that maps subjects to objects, as shown in the image. At each intersection is the set of permissions that a given subject has for a specific object. Many operating systems, such as Windows and the whole Unix family tree (including [Linux](https://learn.isc2.org/content/enforced/9541-CC-SPT-GLOBAL-1ED-1M/build/chapter_03/module_03/ch03_m03-Discretionary_Access_Control_(DAC).html?ou=9541&d2l_body_type=3#)) and [iOS](https://learn.isc2.org/content/enforced/9541-CC-SPT-GLOBAL-1ED-1M/build/chapter_03/module_03/ch03_m03-Discretionary_Access_Control_(DAC).html?ou=9541&d2l_body_type=3#), use this type of data structure to make fast, accurate decisions about authorizing or denying an access request. Note that this data can be viewed as either rows or columns:

- An object’s access control list shows the total set of _subjects_ who have any permissions at all for that specific object.
- A subject’s capabilities list shows each object in the system that said subject has any permissions for.

![[EDU-ELCC-00315-techart-capabilities_list-techart-v02.svg]]

This methodology relies on the discretion of the owner of the access control object to determine the access control subject’s specific rights. Hence, security of the object is literally up to the discretion of the object owner. DACs are not very scalable; they rely on the access control decisions made by each individual object owner, and it can be difficult to find the source of access control issues when problems occur.

## DAC in the Workplace

Most information systems are DAC systems. In a DAC system, a user who has access to a file is able to share that file with or pass it to someone else. It is at the discretion of the asset owner whether to grant or revoke access for a user. For access to computer files, this can be shared file or password protections. For example, if you create a file in an online file sharing platform you can restrict who sees it. That is up to your discretion. Or it may be something low-tech and temporary, such as a visitor’s badge provided at the discretion of the worker at the security desk.

---
# Mandatory Access Control (MAC)
A *mandatory access control (MAC)* policy is one that is uniformly enforced across all subjects and objects within the boundary of an information system. In simplest terms, this means that only properly designated security administrators, as trusted subjects, can modify any of the security rules that are established for subjects and objects within the system. This also means that for all subjects defined by the organization (that is, known to its integrated identity management and access control system), the organization assigns a subset of total privileges for a subset of objects, such that the subject is constrained from doing any of the following:

- Passing the information to unauthorized subjects or objects 
- Granting its privileges to other subjects 
- Changing one or more security attributes on subjects, objects, the information system or system components 
- Choosing the security attributes to be associated with newly created or modified objects 
- Changing the rules governing access control 

MAC is access control that requires the system itself to manage access controls in accordance with the organization's security policies

Although MAC sounds very similar to DAC, the primary difference is who can control access. With Mandatory Access Control, it is mandatory for security administrators to assign access rights or permissions; with Discretionary Access Control, it is up to the object owner’s discretion.

## MAC in the Workplace

Mandatory access control is also determined by the owner of the assets, but on a more across-the-board basis, with little individual decision-making about who gets access.  

For example, at certain government agencies, personnel must have a certain type of security clearance to get access to certain areas. In general, this level of access is set by government policy and not by an individual giving permission based on their own judgment.  

Often this is accompanied by separation of duties, where your scope of work is limited and you do not have access to see information that does not concern you; someone else handles that information. This separation of duties is also facilitated by role-based access control, as we will discuss next.

---
# Role-Based Access Control (RBAC)
*Role-based access control (RBAC)*, as the name suggests, sets up user permissions based on roles. Each role represents users with similar or identical permissions.

*It is an access control system that sets up user permissions based on roles*

A role is created and assigned the access required for personnel working in that role. When a user takes on a job, the administrator assigns them to the appropriate role. If a user leaves that role, the administrator removes that user and then access for that user associated with that role is removed. RBAC works well in an environment with high staff turnover and multiple personnel with similar access requirements

## RBAC in the Workplace

Role-based access control provides each worker privileges based on what role they have in the organization. Only Human Resources staff have access to personnel files, for example; only Finance has access to bank accounts; each manager has access to their own direct reports and their own department. Very high-level system administrators may have access to everything; new employees would have very limited access, the minimum required to do their jobs.  

Monitoring these role-based permissions is important, because if you expand one person’s permissions for a specific reason—say, a junior worker’s permissions might be expanded so they can temporarily act as the department manager—but you forget to change their permissions back when the new manager is hired, then the next person to come in at that junior level might inherit those permissions when it is not appropriate for them to have them. This is called privilege creep or permissions creep. We discussed this before, when we were talking about provisioning new users.  

Having multiple roles with different combinations of permissions can require close monitoring to make sure everyone has the access they need to do their jobs and nothing more. In this world where jobs are ever-changing, this can sometimes be a challenge to keep track of, especially with extremely granular roles and permissions. Upon hiring or changing roles, a best practice is to not copy user profiles to new users. It is recommended that standard roles are established, and new users are created based on those standards rather than an actual user. That way, new employees start with the appropriate roles and permissions.
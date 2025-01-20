# Windows Domains
A Windows Domain is a group of users and computers under the administration of a given business.
- The main idea behind domain is to centralize the administration of common components of a windows computer network in a single repository called the **Active Directory (AD)**
- The server that runs the Active Directory services is known as a **Domain Controller (DC)**

![[Screenshot 2025-01-13 233526.png]]

The main advantages of a configured Windows domain are : 
-  *Centralized identity management*
	- all users across the network can be configured from Active Directory with minimum effort
- *Managing security policies*
	- you can configure security policies directly from active directory and apply them to users and computers across the network as needed

---

# Active Directory
The core of any Windows Domain is the *Active Directory Domain Service (AD DS)*
- This service acts as a catalogue that holds the information of all of the "objects" that exists on you network 
- Amongst the many objects supported by AD, we have
	- users
	- groups
	- machines
	- printers
	- shares
  and many others

#### Users
- One of the most common object types in Active Directory
- Users are one of the objects known as **Security Principals**
	- meaning that they can be authenticated by the domain and can be assigned *privileges over resources* like files or printers
	- You could say that a Security Principle is an object that can act upon resources in the network

Users can represent two types of entities : 
- *People*
	- Users will generally represent persons in your organization that need to access the network, like employees
- *Services*
	- you can also define users to be used by services like IIS or MSSQL
	- every single service requires a user to run, but service users are different from regular users as they will only have the privileges needed to run their specific services 

#### Machines
another type of object within the Active Directory
- for every computer that joins the Active Directory domain, a machine object will be created 
- Machines are also considered Security Principals
	- they too are assigned an account just as any regular user
	- this account has somewhat limited rights within the domain itself

The *machine accounts* themselves are **local administrators** on the assigned computer
- they are generally not supposed to be accessed by anyone except the computer itself
- but as with any other account, if you have the password, you can use it to log in

> [!NOTE] 
> Machine Account passwords are automatically rotated and are generally comprised of 120 random characters

Identifying machine accounts is relatively easy. They follow a specific naming scheme. The machine account name is the computer's name followed by a dollar sign. For example, a machine named `DC01` will have a machine account called `DC01$`.

## Security Groups
you should probably know that you can define user groups to assign access rights to files or other resources to entire groups instead of single user
- this allows for better manageability as you can add users to an existing group, and they will automatically inherit all of the group's privileges
*Security groups* are <u>also considered security principals</u> and, therefore, can have privileges over resources on the network

Several groups are created by default in a domain that can be used to grant specific privileges to users
here are some of the most important groups in a domain : 

| **Security Group** | **Description**                                                                                                                                           |
| ------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Domain Admins      | Users of this group have administrative privileges over the entire domain. By default, they can administer any computer on the domain, including the DCs. |
| Server Operators   | Users in this group can administer Domain Controllers. They cannot change any administrative group memberships.                                           |
| Backup Operators   | Users in this group are allowed to access any file, ignoring their permissions. They are used to perform backups of data on computers.                    |
| Account Operators  | Users in this group can create or modify other accounts in the domain.                                                                                    |
| Domain Users       | Includes all existing user accounts in the domain.                                                                                                        |
| Domain Computers   | Includes all existing computers in the domain.                                                                                                            |
| Domain Controllers | Includes all existing DCs on the domain.                                                                                                                  |
You can obtain the complete list of default security groups from the [Microsoft documentation](https://docs.microsoft.com/en-us/windows/security/identity-protection/access-control/active-directory-security-groups).


## Active Directory Users and Computers
To configure users, groups or machines in Active Directory, we need to *log in to the domain controller* and run "**Active Directory Users and Computers**" <u>from the start menu</u>

This will open up a window where you can see the hierarchy of users, computers and groups that exist in the domain
- These objects are organized in *Organizational Units (OUs)*
- OUs are container objects that allow you to classify users and machine 
- mainly used to define sets of users with similar policing requirements
- *A user can be a part of a single OU at a time*

There are other default containers. These containers are created by Windows automatically and contain the following:
- Builtin 
	- Contains default groups available to any Windows host.
- Computers
	- Any machine joining the network will be put here by default. You can move them if needed.
- Domain Controllers
	- Default OU that contains the DCs in your network.
- Users
	- Default users and groups that apply to a domain-wide context.
- Managed Service Accounts
	- Holds accounts used by services in your Windows domain.

### Managing Users in AD
#### Deleting Extra OUs and Users
If you try to right-click and delete the OU, you will get the following error:

![[38edaf4a8665c257c62556096c69cb6f.png]]

If you try to right-click and delete the OU, you will get the following error:

![[15b282b6e3940f4c26c477a8c21f8266.png]]

This will show you some additional containers and enable you to disable the accidental deletion protection. To do so, right-click the OU and go to Properties. You will find a checkbox in the Object tab to disable the protection

### Delegation
- give specific users some control over some OUs. This process is known as **delegation** 
- allows you to grant users specific privileges to perform advanced tasks on OUs without needing a Domain Administrator to step in.

### Managing Computers in AD
By default, all the machines that join a domain (except for the DCs) will be put in the container called "**Computers**"

Having all our devices there is not the best idea since it's very likely that you want different policies for you servers and the machines that regular users use on a daily basis

While there is no golden rule on how to organise your machines, an excellent starting point is segregating devices according to their use. In general, you'd expect to see devices divided into at least the three following categories:
1. Workstations
	- Workstations are one of the most common devices within an Active Directory domain. 
	- Each user in the domain will likely be logging into a workstation. This is the device they will use to do their work or normal browsing activities. 
	- These devices should never have a privileged user signed into them.  
2. Servers
	- Servers are the second most common device within an Active Directory domain. 
	- Servers are generally used to provide services to users or other servers.
3. Domain Controllers
	- Domain Controllers are the third most common device within an Active Directory domain. 
	- Domain Controllers allow you to manage the Active Directory Domain. These devices are often deemed the *most sensitive devices* within the network as they *contain hashed passwords for all user accounts within the environment*.

---

# Group Policies
The main idea behind organizing users and computers in OUs is to be able to deploy different policies for each OU individually. That way, we can push different configurations and security baselines to users depending on their department.

Windows manages such policies through **Group Policy Objects (GPO)**. 
- GPOs are simply a collection of settings that can be applied to OUs. 
- GPOs can contain policies aimed at either users or computers, allowing you to set a baseline on specific machines and identities.

To configure GPOs, you can use the **Group Policy Management** tool, available from the start menu
- something important to have in mind is that any GPO will apply to the linked OU and any sub-OUs under it 
- you can also apply *Security Filtering* to GPOs so that they are only applied to specific users/computers under an OU. 
	- By default they apply to the *Authenticated Users* group, which includes all user/PCs
- The *Settings* tab includes the actual contents of the GPO and lets us know what specific configurations it applies 
	- each GPO has configurations that apply to computers only and configurations that apply to users only

## GPO Distribution
- GPOs are distributed to the network via a network share called **SYSVOL**, which is *stored in the DC* 
- All users in the domain should typically have access to this share over the network to sync their GPOs periodically 
- The SYSVOL share points by default to the `C:\Windows\SYSVOL\sysvol\` directory on each of the DCs in our network
- Once a change has been made to any GPOs, it might take up to 2 hours for computers to catch up. If you want to force any particular computer to sync its GPOs immediately, you can always run the following command on the desired computer:
  `gpupdate /force`

---

# Authentication Methods
When using Windows domains, *all credentials are stored in the Domain Controllers*. 
- Whenever a user tries to authenticate to a service using domain credentials, the services will need to ask the Domain Controller to verify if they are correct 

Two Protocols can be used for network authentication in Windows domains : 
- **Kerberos**
	- Used by any recent version of windows 
	- this is the default protocol in any recent domain
- **NetNTLM**
	- Legacy authentication protocol kept for compatibility purposes

## Kerberos Authentication

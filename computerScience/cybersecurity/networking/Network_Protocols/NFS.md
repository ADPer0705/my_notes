#### Links to be Referred 
- https://docs.oracle.com/cd/E19683-01/816-4882/6mb2ipq7l/index.html

---

# NETWORK FILE SYSTEM
- a distributed file system protocol 
- originally developed by Sun Microsystems in 1984
- allows users to access to files over a network in a manner similar to how local storage is accessed 
NFS enables file sharing between systems on a network, allowing for centralized data management and efficient resource utilization 

NFS operates over a client-server model
- *Server* : Shares directories and files over the network 
- *Client* : Mounts the shared directories on the server and accesses them as if they were local

NFS Architecture
1. Components
	- NFS Server : The machine that hosts the shared files 
	- NFS Client : The machine that access the shared files
	- RPC (Remote Procedure Call) : 
		- NFS relies on RPC for communication between the client and server
2. NFS Protocol Version
	- NFSv2 : The initial version, supports 32-bit file and limits 
	- NFSv3 : Introduced in 1995, supports larger file sizes, asynchronous writes, and better performance
	- NFSv4 : Introduced in 2000, includes stateful operation, ACLs (Access Control Lists), and better security


First, the client will request to mount a directory from a remote host on a local directory just the same way it can mount a physical device. The mount service will then act to connect to the relevant mount daemon using RPC

The server checks if the user has permissions to mount whatever directory has been requested. It will then return a file handle which uniquely identifies each file and directory that is on the server 

If someone want to access a file using NFS, an RPC call is placed to NFSD (NFS daemon) on the server. This call takes parameters such as : 
- The file handle
- The name of the file to be accessed 
- The user's user ID 
- The user's group ID 
These are used in determining access rights to the specified file. This is what controls user permissions, i.e. read and write of files 
## Setting Up NFS
1. *Server Configuration* 
	1. Install NFS Server 
		- Use a package manager to install NFS server software
		```bash
		sudo apt-get install nfs-kernel-server
		```
	2. Edit Export Files
		- Define the directories to share and their permissions in `/etc/exports`
		```bash
		/mnt/shared_directory client_ip(rw,sync,no_subtree_check)
		```
	3. Export Shared Directories 
		- apply the changes 
		```bash
		sudo exportfs -a
		```
	4. Start NFS Services 
		```bash
		sudo systemctl start nfs-kernel-server
		```
2. *Client Configuration*
	1. Install NFS Client 
		- Use a Package Manager to install NFS client software 
		```bash
		sudo apt-get install nfs-common
		```
	2. Mount NFS Share 
		- mount the shared directory 
		```bash
		sudo mount server_ip:/mnt/shared_directory /mnt/local_mount_point
		```

## NFS Security 
1. Host-Based Access Control:
	- NFS controls access based on client IP addresses specified in the `/etc/exports` file.
1. User ID Mapping:
	- NFS uses UID (User ID) and GID (Group ID) to map users between the client and server.
3. Secure NFS with Kerberos:
	- NFSv4 supports [[kerberos]] authentication to enhance security.

## Performance Considerations
1. Asynchronous vs. Synchronous Writes:
	- **Asynchronous Writes:** Allow NFS to write data to cache before writing to disk, improving performance but risking data loss on failure.
	- **Synchronous Writes:** Ensure data is written to disk before confirming the write operation, providing better data integrity but potentially lower performance.
2. Caching:
	- NFS clients cache file attributes and data to reduce server load and improve performance. However, this can lead to stale data issues.

## Common Use Cases
1. Centralized Home Directories:
	- Storing user home directories on an NFS server allows users to access their files from any client machine on the network.
2. Shared Project Directories:
	- Teams can share project files and directories, ensuring all members have access to the latest versions.
3. Backup Solutions:
	- NFS can be used to store backup files from multiple client machines on a centralized server.

Using the NFS protocol, you can transfer files between computer running windows and other non-windows operating system, or vice-versa
## Troubleshooting NFS
1. Common Issues:
	- Permission Denied: 
		- Ensure correct permissions in `/etc/exports` and on the server directory.
	- Stale NFS File Handle: 
		- Occurs when a file/directory is deleted or moved; remount the NFS share to resolve.
	- Mount Failures: 
		- Check network connectivity and server status.
2. Useful Commands
	- Show Mounted NFS Shares
	```bash
	showmount -e server_ip
	```
	- List Current Modules
	```bash
	mount | grep nfs
	```
	- Check NFS Server Status
	```bash
	sudo systemctl status nfs-kernel-server
	
	```

# Enumerating NFS
#enumeration 

> [!NOTE] ENUMERATION
> Enumeration is defined as "a process which establishes an active connection to the target hosts to discover potential attack vectors in the system, and the same can be used for further exploitation of the system"

In order to do a more advanced enumeration of NFS server, and shares - we're going to need a few tools

#### nfs-common
It is key to interacting with any NFS share from your local machine. It is important to have this package installed on any machine that uses NFS - either as client or server.

It includes programs such as 
- lockd
- statd
- showmount
- nfsstat
- gssd
- idmapd
- mount.nfs
Primarily showmount and mount.nfs are going to be most useful in extracting information from the NFS share. 

#### Port Scanning
done using nmap

### Mounting NFS Shares
The client's system needs a directory where all the content shared by the host server in the export folder can be accessed
Once this folder is created in the system, it can be mounted as : 
```bash
sudo mount -t nfs IP:share /tmp/mount/ -nolock
```


|   Tag    |                                   Function                                   |
| :------: | :--------------------------------------------------------------------------: |
|   sudo   |                                 Run as root                                  |
|  mount   |                          Execute the mount command                           |
|  -t nfs  |            Type of device to mount, then specifying that it's NFS            |
| IP:share | The IP Address of the NFS server, and the name of the share we wish to mount |
| -nolock  |                       Specifies not to use NLM locking                       |

# Exploiting NFS

### root_squash
By default, on NFS shares root squashing is enabled, and prevents anyone connecting to the NFS share from having root access to the NFS volume. This feature helps to mitigate potential security risks by mapping requests from the root user on the client machine to a less privileged user on the server, typically the `nobody` user

#### How root-squashing works : 
- when an NFS client makes a request to the server, the server checks the user ID (UID) of the requesting user 
- If the request comes from the root user (UID 0) on the client, the NFS server maps this request to a less privileged user, often the `nobody` user, which has minimal permissions
- This mapping ensures that the root user on the client does not have root privileges on the server 

#### Configuring root-squashing 
1. Setting Up Root Squashing:
	- Root squashing is configured in the NFS server’s export file, typically `/etc/exports`.
	- The `root_squash` option is used to enable root squashing.
		Example Configuration in `/etc/exports`:
```bash
/home/shared 192.168.1.0/24(rw,sync,no_subtree_check,root_squash)
```
- In this example, the `/home/shared` directory is exported to the network `192.168.1.0/24` with read-write access. The `root_squash` option is enabled, so any request from the root user on any client in this network will be mapped to the `nobody` user.
2. Disabling Root Squashing
	- If you want to disable root squashing (not recommended unless you fully trust all clients), you can use the `no_root_squash` option.
```bash
/home/shared 192.168.1.0/24(rw,sync,no_subtree_check,no_root_squash)
```
- In this case, root users on clients will have root privileges on the NFS server, which can pose significant security risks.

#### Advantages and Disadvantages
- Advantages:
	1. **Enhanced Security:** Prevents root users on client machines from having unrestricted access to the server’s file system.
	2. **Controlled Access:** Ensures that sensitive files and directories are protected from unauthorized modifications by remote root users.
- Disadvantages:
	1. **Limited Administrative Capabilities:** Root squashing can limit legitimate administrative tasks that require root access from the client side.
	2. **Complexity in Management:** May require additional management and configuration to ensure the correct permissions are set for other users.

#### Use Cases 
1. **Multi-User Environments:** In environments where multiple users and systems access shared resources, root squashing adds a layer of security to protect the server’s file system.
2. **Heterogeneous Networks:** In networks with different operating systems and varying security levels, root squashing helps mitigate potential risks from less secure clients.



Remote users are assigned a user "nfsnobody" when connected, which has the least local privileges. If this is turned off, it can allow the creation of SUID bit files, allowing a remote user root access to the connected system

### SUID
**SUID (Set User ID)** is a special file permission if Unix and Unix-like operating systems that allows a file to be executed with the privileges of the file owner, rather than the privileges of the user who is running the file. This feature often allows users to execute programs with temporarily elevated privileges, typically for administrative tasks that requires root access 

- Basic Concept:
	- **Standard Execution:** Normally, when a user runs a file, it executes with the permissions of that user.
	- **SUID Execution:** When a file with the SUID bit set is executed, it runs with the permissions of the file's owner, not the user executing the file.
- How SUID Works
	1. Setting the SUID Bit
		- The SUID bit can be set using the `chmod` command.
		- The symbolic representation is `s` in the owner’s execute position.
		- The octal representation is `4`.
		- This command sets the SUID bit on the specified file
	```bash
	chmod u+s /path/to/file
	```
	2. Checking the SUID Bit 
		- You can check if a file has the SUID bit set using the `ls -l` command.
		- The `s` character will appear in the owner’s execute position
		- The `s` in `-rwsr-xr-x` indicates that the SUID bit is set and the file will execute with the owner's (root's) privileges.
		```bash
		ls -l /path/to/file
		```
		The output might look like this : 
		```bash
		-rwsr-xr-x 1 root root 12345 Jan 01 12:34 /path/to/file
		```



We can leverage SUID to get a shell with these privileges 
#privilege_escalation

### Method

We're able to upload files to the NFS share, and control the permissions of these files thanks to a misconfigured root-squash. We can set the permissions of whatever we upload. We can then log in through SSH and execute files like a bash shell executable to gain a root shell
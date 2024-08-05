#### Links to be Referred 
- https://docs.oracle.com/cd/E19683-01/816-4882/6mb2ipq7l/index.html

---

**NETWORK FILE SYSTEM**
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
New Technology File System

It is a journaling file system 
- In case of a failure, the file system can automatically repair the folders/files on disk using information stored in a log file. This function is not possible with FAT

NTFS addresses many of the limitations of the previous file systems; such as: 
- Supports files larger than 4GB
- Set specific permissions on folders and files
- Folder and file compression
- Encryption ([Encryption File System](https://docs.microsoft.com/en-us/windows/win32/fileio/file-encryption) or **EFS**)

---

On NTFS volumes, you can set permissions that grant or deny access to files and folders.
The permissions are:
- **Full control**
- **Modify**
- **Read & Execute**
- **List folder contents**
- **Read**
- **Write**

![[ntfs-permissions1.png]]

---

Another feature of NTFS is **Alternate Data Streams - ADS**
- it is a file attribute specific to Windows NTFS
- Every file has at least one data stream (`$DATA`), and ADS allows files to contain more than one stream of data
- From a security perspective, malware writers have used ADS to hide data.


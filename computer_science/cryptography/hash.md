Hash Functions are quite different from encryption. 

> [!NOTE]
> There is no key, and it's meant to be impossible (or very very difficult) to go from the output back to the input

 A hash function takes some input data of any size, and create 

popular hashing algorithms are MD4, MD5, SHA1, NTLM

###### Hash Collision
- two difference strings produce the same hash
- pigeonhole effect

MD5 and SHA1 have been attacked, and made technically insecure due to engineering hash collisions. However no attack has yet given a collision in both the algorithms at the same time so if you use the MD5 hash AND the SHA1 hash to compare , you'll see they're different
- https://www.mscs.dal.ca/~selinger/md5collision/
- https://shattered.io/

###### Hashing for Password Verification
- no need to store the key and risk losing it, cause there is no key
- what if two users have same passwords
	- we use "salt", appended at either the end or the front of the string

###### Recognizing password hashes
- Unix style password hashes are fairly easy to recognize as they have a prefix 
	- The standard format is `$format$rounds$salt$hash`
- Windows passwords are hashed using NTLM, which is a variant of md4
	- they're visually identical to md4 and md5 hashes, so it's very important to use context to work out the hash type4


- On linux, password hashes are stored in `/etc/shadow` 
	- This file is normally only readable by root
	- used to be stored in `/etc/passwd`, and were readable by everyone
- On windows, password hashes are stored in the `SAM`
	- *S*ecurity *A*ccount *M*anager file
	- The SAM file is locked and cannot be directly accessed while windows is running
		- Tools like `mimikatz`, `pwdump`, or `hashcat` (for cracking), are often used in penetration testing and digital forensics to extract and work with SAM hashes
		- *Volume Shadow Copy* or booting into another OS (like a linux live USB) can also allow access to the SAM file
	- format
		- `Username:RID:LM_hash:NTLM_hash:::`
			- **`Username`** is the account name.
			- **`RID`** is the Relative Identifier, a part of the user’s security identifier (SID).
			- **`LM_hash`** is the LM hash of the password (often set to `AAD3B435B51404EEAAD3B435B51404EE` if it’s not in use).
			- **`NTLM_hash`** is the NT hash (MD4 hash of the password).

#### What makes Hashes Secure ?
- designed as one-way functions
	- it is easy to calculate the hash value of a given input, however it is a hard problem to find the original input given the hash value
	- In simple terms, a hard problem quickly becomes computationally infeasible in computer science
- This computational problem has its root in mathematics as P vs NP
	- P (Polynomial Time)
		- problem whose solutions can be found in polynomial time
	- NP (Non-deterministic Polynomial Time)
		- Problems in the class NP are those for which a given solution can be checked quickly, even though finding the solution itself might be hard

##### Dictionary Attack
When having the hashed version of a password and the hashing algorithm used, Hashing a large number of words, know as a dictionary, and comparing the hashes, is know as dictionary attack

Tools like [JohnTheRipper](obsidian://open?vault=NOTES&file=computer_science%2Fcybersecurity%2Ftools%2FJohnTheRipper), or John in short
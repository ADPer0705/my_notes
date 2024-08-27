useful refs :
- https://nmap.org/book/nse-usage.html

---

**nmap**, aka network mapper is a free and open-source network scanner. 

It is used to discover hosts and services on a computer network by sending packets and analyzing the responses. It provides a number of features for probing computer networks, including host discovery and service and operating system detection. Its features are extensible using scripts that provide more advances service detection. 

---

Say we have been given an IP (or multiple IP addresses) to perform a security audit on. Before we do anything else, we need to get an idea of the “*landscape*” we are attacking. 
- What this means is that we need to establish which services are running on the targets. 
	- For example, perhaps one of them is running a webserver, and another is acting as a Windows Active Directory Domain Controller. 
The first stage in establishing this “*map*” of the landscape is something called **port scanning**
- When a computer runs a network service, it opens a networking construct called a “port” to receive the connection.  
- Ports are necessary for making multiple network requests or having multiple services available. 
	- For example, when you load several webpages at once in a web browser, the program must have some way of determining which tab is loading which web page. 
	- This is done by establishing connections to the remote webservers using different ports on your local machine. 
	- Equally, if you want a server to be able to run more than one service (for example, perhaps you want your webserver to run both HTTP and HTTPS versions of the site), then you need some way to direct the traffic to the appropriate service. Once again, ports are the solution to this. Network connections are made between two ports – an open port listening on the server and a randomly selected port on your own computer. 
	- For example, when you connect to a web page, your computer may open port 49534 to connect to the server’s port 443.

![[Screenshot from 2024-06-14 23-41-39.png]]

As in the previous example, the diagram shows what happens when you connect to numerous websites at the same time. Your computer opens up a different, high-numbered port (at random), which it uses for all its communications with the remote server.

Every computer has a total of *65535 available ports*; however, many of these are registered as standard ports. 
- For example, a HTTP Webservice can nearly always be found on port 80 of the server. 
- A HTTPS Webservice can be found on port 443. 
- Windows NETBIOS can be found on port 139 and 
- SMB can be found on port 445. 
It is important to note; however, that especially in a CTF setting, it is not unheard of for even these standard ports to be altered, making it even more imperative that we perform appropriate enumeration on the target.

If we do not know which of these ports a server has open, then we do not have a hope of successfully attacking the target; thus, it is crucial that we begin any attack with a port scan. This can be accomplished in a variety of ways – usually using a tool called nmap. 
- Nmap can be used to perform many different kinds of port scan 
- however, the basic theory is this: nmap will connect to each port of the target in turn. 
- Depending on how the port responds, it can be determined as being open, closed, or filtered (usually by a firewall). 
- Once we know which ports are open, we can then look at enumerating which services are running on each port – either manually, or more commonly using nmap.

So, why nmap? The short answer is that it's currently the industry standard for a reason: no other port scanning tool comes close to matching its functionality (although some newcomers are now matching it for speed). It is an extremely powerful tool – made even more powerful by its scripting engine which can be used to scan for vulnerabilities, and in some cases even perform the exploit directly!

---

Nmap can be used with the IP addresses of the host machine, or even the hostname to be scanned by default. 

---

# Scan Types

When port scanning with Nmap, there are three basic scan types. These are:

- TCP Connect Scans (`-sT`)
- SYN "Half-open" Scans (`-sS`)
- UDP Scans (`-sU`)

Additionally there are several less common port scan types. These are:

- TCP Null Scans (`-sN`)
- TCP FIN Scans (`-sF`)
- TCP Xmas Scans (`-sX`)

Most of these (with the exception of UDP scans) are used for very similar purposes, however, the way that they work differs between each scan. This means that, whilst one of the first three scans are likely to be your go-to in most situations, it's worth bearing in mind that other scan types exist.



## TCP Connect Scans `-sT`

To understand the TCP connect scan, it is first important to understand the TCP [three-way handshake](obsidian://open?vault=Cybersecurity&file=NETWORKING%2FNetwork_Protocols%2FTCP)

How does this connect to nmap ?
as the name suggests, a TCP connect scan works by performing the three-way handshake with each target port in turn. In other words, nmap tries to connect to each specified TCP port, and determine whether the service is open by the response it receives 

For example, if a port is closed, [RFC 9293](https://datatracker.ietf.org/doc/html/rfc9293) states that:

_"... If the connection does not exist (CLOSED), then a reset is sent in response to any incoming segment except another reset. A SYN segment that does not match an existing connection is rejected by this means."_

In other words, if Nmap sends a TCP request with the _SYN_ flag set to a **_closed_** port, the target server will respond with a TCP packet with the _RST_ (Reset) flag set. By this response, Nmap can establish that the port is closed.

![[Screenshot from 2024-06-16 16-41-03.png]]

If, however, the request is sent to an _open_ port, the target will respond with a TCP packet with the SYN/ACK flags set. Nmap then marks this port as being _open_ (and completes the handshake by sending back a TCP packet with ACK set).

What if the port is open, but hidden behind a firewall?

Many firewalls are configured to simply **drop** incoming packets. Nmap sends a TCP SYN request, and receives nothing back. This indicates that the port is being protected by a firewall and thus the port is considered to be _filtered_.

That said, it is very easy to configure a firewall to respond with a RST TCP packet. For example, in IPtables for Linux, a simple version of the command would be as follows:

`iptables -I INPUT -p tcp --dport <port> -j REJECT --reject-with tcp-reset`

This can make it extremely difficult (if not impossible) to get an accurate reading of the target(s).



## SYN Scans `-sS`

As with TCP scans, SYN scans (`-sS`) are used to scan the TCP port-range of a target or targets; however, the two scan types work slightly differently. SYN scans are sometimes referred to as "_Half-open"_ scans, or _"Stealth"_ scans.  

Where TCP scans perform a full three-way handshake with the target, SYN scans sends back a RST TCP packet after receiving a SYN/ACK from the server (this prevents the server from repeatedly trying to make the request). In other words, the sequence for scanning an **open** port looks like this:

![[Screenshot from 2024-06-16 16-47-29.png]]

This has a variety of advantages for us as hackers:

- It can be used to bypass older Intrusion Detection systems as they are looking out for a full three way handshake. This is often no longer the case with modern IDS solutions; it is for this reason that SYN scans are still frequently referred to as "stealth" scans.
- SYN scans are often not logged by applications listening on open ports, as standard practice is to log a connection once it's been fully established. Again, this plays into the idea of SYN scans being stealthy.
- Without having to bother about completing (and disconnecting from) a three-way handshake for every port, SYN scans are significantly faster than a standard TCP Connect scan.

There are, however, a couple of disadvantages to SYN scans, namely:

- They require sudo permissions[1] in order to work correctly in Linux. This is because SYN scans require the ability to create raw packets (as opposed to the full TCP handshake), which is a privilege only the root user has by default.
- Unstable services are sometimes brought down by SYN scans, which could prove problematic if a client has provided a production environment for the test.

All in all, the pros outweigh the cons.

   **NOTE :**
For this reason, SYN scans are **the default scans used by Nmap if run with sudo permissions** If run *without sudo permissions, Nmap defaults to the TCP Connect* scan we saw in the previous task.


When using a SYN scan to identify closed and filtered ports, the exact same rules as with a TCP Connect scan apply.If a port is closed then the server responds with a RST TCP packet. If the port is filtered by a firewall then the TCP SYN packet is either dropped, or spoofed with a TCP reset.In this regard, the two scans are identical: the big difference is in how they handle _open_ ports.

SYN scans can also be made to work by giving Nmap the CAP_NET_RAW, CAP_NET_ADMIN and CAP_NET_BIND_SERVICE capabilities; however, this may not allow many of the NSE scripts to run properly



## UDP Scans
- unlike TCP, UDP connections are stateless
	- rather than initiating a connection with a back-and-forth "handshake", UDP connections rely on sending packets to a target port and essentially hoping that they make it. 
	- This makes UDP superb for connections that rely on speed over quality
	- This lack of acknowledgment makes UDP significantly more difficult to scan. 
- The switch for an UDP scan in nmap is `-sU`
- When a packet is sent to an open UDP port, there should be no response. 
	- When this happens the port is referred to as being open/filtered 
	- in other words, it suspects that the port is open, but it could be firewalled.
	- If it gets a response ( which is highly unusual ), then the port is marked as open. 
	- More commonly there is no response, in which case the request is sent a second time as a double-check. If there is still no response, the port is marked as open/unfiltered and nmap moves on 
	- When the packet is sent to a closed UDP port 
		- the target should respond with an ICMP (ping) packet containing a message that the port is unreachable 
		- This clearly identifies closed ports, which nmap marks as such and moves on

Due to this difficulty in identifying whether a UDP port is actually open, UDP sans tends to be incredibly slow in comparison to the various TCP scans (in the region of 20 minutes to scan the fist 1000 ports with a good connection)
- for this reason it is a good practice to run UDP scans with `--top-ports <number>` enabled.
- For example scanning with `nmap -sU --top-ports 20 <target>` will scan the top 20 most commonly used UDP ports, resulting in a much more acceptable scan time 

When scanning UDP ports, nmap usually sends completely empty requests -- just raw UDP packets
that said, for ports which are usually occupied by well-known services, it will instead send a protocol-specific payload which is more likely to elicit a response from which a more accurate result can be drawn



## NULL, FIN and Xmas Scans
NULL, FIN and Xmas scans are less commonly used than any of the above discussed scans. All three are interlinked and are used primarily as they tend to be even stealthier, relatively speaking than a SYN "stealth" scan 

#### NULL scans 
- `-sN`
- as the name suggests, NULL scans are when the TCP requests is sent with no flags set at all
- As per the RFC, the target host should with a RST if the port is closed 
	- A *request for comments* (RFC) is a publication in a series from the principle technical development and standards-settings bodies for the internet, most prominently the Internet Engineering Task Force (IETF)

![[Screenshot from 2024-06-18 09-36-21.png | 650]]

#### FIN scans 
- `-sF` 
- FIN scans work in an almost identical fashion; however, instead of sending a completely empty packet, a request is sent with the FIN flag 
	- FIN flag is usually used to gracefully close an active connection
	- once again, nmap expects a RST if the port is closed 

![[Screenshot from 2024-06-18 09-42-02.png | 650]]

#### Xmas scans 
- `-sX`
- sends a malformed TCP packet and expects a RST response for closed ports 
	- It is referred to as an Xmas scan as the flags that it sets 
		- PSH
		- URG
		- FIN
		give it the appearance of a blinking christmas tree when viewed as a packet capture in wireshark

![[Screenshot from 2024-06-18 09-48-00.png]]


The expected response for open ports with these scans is also identical, and is very similar to that of a UDP scan. 
- If the port is open then there is no response to the malformed packet.
- That is also the expected behavior when if the port is protected by a firewall
so NULL, FIN and Xmas scans will only ever identify ports as 
1. open | filtered 
2. closed
3. filtered 
If a port is identified as filtered with one of these scans then it is usually because the target has responded with an ICMP unreachable packet 

It is also worth noting that while RFC 793 mandated the network hosts respond to malformed packets with a 
- RST TCP packet for closed ports 
- don't respond at all for open ports 
this is not always the case in practice 
- In particular Microsoft Windows (and a lot of CISCO network devices) are known to respond with a RST to any malformed TCP packet, regardless of whether the port is actually open or not. This results in ports showing up as being closed 

That said, the goal is firewall evasion
- many firewalls are configured to drop incoming TCP packets to blocked ports which have the SYN flag set, (thus blocking new connection initiation requests)
- By sending requests which do not  contain the SYN flag, we effectively bypass this kind of firewall.
- While this is good in theory, most modern IDS solutions are savvy to these scan types, so don't rely on then to be 100% effective when dealing with modern systems 



## ICMP network scanning
On first connection to a target network, out first objective is to obtains a *map* of the network structure --- or in other words, we want to see which IP addresses contain active hosts and which do not 

One way to do this is using nmap to do a **ping sweep**
- nmap sends an ICMP packet to each possible IP address for the specified network.
- when it receives a response it marks the IP address that responds as being alive. 
- This is not always accurate; however it can provide something of a baseline and thus is worth covering 

To perform a ping sweep, we use the `-sn` switch in conjunction with IP ranges which can be specified with either a hyphen `-` or CIDR notation 
i.e. we can scan `192.168.0.x` network using 
- `nmap -sn 192.168.0.1-254`
- `nmap -sn 192.168.0.0/24`

*The `-sn` switch tells nmap not to scan any ports ---- forcing it to rely primarily on ICMP echo packets (or ARP packets on a local network, if run with sudo or directly as the root user) to identify targets*


---

# NSE Scripts 
the **Nmap Scripting Engine** (NSE) is an incredibly powerful addition to nmap, extending its functionality quite considerably. NSE Scripts are written in the *Lua programming language*, and can be used to do a variety of things : from scanning for vulnerabilities, to automating exploits for them. The NSE is particularly useful for reconnaissance, however, it is well worth bearing in mind how extensive the script library is 

There are many categories available. Some of the useful ones include : 
- `safe` won't affect the target 
- `intrusive` not safe, likely to affect the target 
- `vuln` scan for vulnerabilities 
- `exploit` attempt to exploit a vulnerability 
- `auth` attempt to bypass authentication for running services
	- e.g. log into an FTP server anonymously 
- `brute` attempts to bruteforce credentials for running services 
- `discovery` attempt to query running services for further information about the network 
	- query an SNMP server 

previously we looked at using the `--script` switch for activating NSE scripts 
```terminal
nmap --script=vuln <target>
```
the above code is for scripts of the category `vuln` other categories work in the same way 
if `--scripts=safe` is run, then any applicable sage scripts will be run against the target 
- *NOTE* : only scripts which target an active service will be activated 

To run a specific script, we would use `--script=<script-name>`, e.g. 
```terminal
--script=http-fileupload-exploiter
```
multiple scripts can be run simultaneously by `,` separation : 
```terminal
--script=smb-enum-users,smb-enum-shares
```
some scripts need flags and can be provided using the `--script-args` switch :
```terminal
nmap -p 80 --script http-put --script-args http-put.url='/dav/shell.php',http put.file='./shell.php'
```
note that the arguments are separated by commas, and connected to the corresponding script with periods (i.e. `<script-name>.<argument>`)

nmap scripts comes with built-in menus, which can be accessed using `nmap --script-help <script-name>`

## Finding the Scripts :
we have two options for finding the scripts. These should ideally be used in conjunction with each other 
1. the page on the [nmap website](https://nmap.org/nsedoc/)
	- contains a list of all the official scripts 
2. nmap stores its scripts on Linux at `/usr/share/nmap/scripts`
	- all of the NSE scripts are stored in this directory by default -- this is where nmap looks for scripts when you specify them 
	- There are two ways to search for installed scripts. 
		- One is by using the `/usr/share/nmap/scripts/script.db` file. Despite the extension, this isn't actually a database so much as a formatted text file containing filenames and categories for each available script. Nmap uses this file to keep track of (and utilise) scripts for the scripting engine; however, we can also _grep_ through it to look for scripts. For example: `grep "ftp" /usr/share/nmap/scripts/script.db`
		- The second way to search for scripts is quite simply to use the `ls` command. For example, we could get the same results as in the previous screenshot by using `ls -l /usr/share/nmap/scripts/*ftp*`. The same techniques can also be used to search for categories of script. For example:  `grep "safe" /usr/share/nmap/scripts/script.db`

#### installing new scripts 
A standard `sudo apt update && sudo apt upgrade` should fix any missing scripts from the local database 

It is also possible to install the scripts manually by downloading the scripts from nmap 
```terminal
sudo wget -O /usr/share/nmap/scripts/<script-name>.nse https://svn.nmap.org/nmap/scripts/<script-name>.nse
```
This must be followed with `namp --script-updatedb` 

It is worth noting that one need the same updatedb command while adding one's own scripts into nmap

---

# Firewall Evasion
 A typical windows host will, with its default firewall, block all ICMP packets. This presents a problem : 
 - not only do we often use *ping* to manually establish the activity of a target, nmap does the same thing by default. 
	 This means that nmap will register a host with this firewall configuration as dead and not bother scanning it at all 

nmap provides and option for getting around this : 
- `-Pn`, 
- which tells nmap to **not bother pinging the host before scanning it**
This means that nmap will always treat the target host as being alive, effectively bypassing the ICMP block;
- this might come at the price of potentially taking a very long time to complete the scan 
	- If the host is dead then nmap will still be checking and double-checking every specifies port


> [!NOTE] NOTE
> If your'e already on the local network, nmap can use the `ARP` request to determine the host activity

There are variety of other switches nmap considers useful for firewall evasion.
The following switches are of particular note : 
- `-f` : used to fragment the packets
	- splits the packet into smaller pieces
	- makes it less likely that the packets will be detected by a firewall or IDS
- `--mtu <number>` : 
	- an alternative to `-f`, providing more control over the size of the packets 
	- accepts a maximum transmission unit size to use for the packets sent 
	- This must be a *multiple of 8*
- `--scan-delay <time>ms` :
	- used to add a delay between packets sent 
	- This is very useful *if network is unstable*, but also for evading any *time-based firewall/IDS triggers* which may be in place 
- `--badsum` : 
	- This is used to generate an invalid checksum for packets. 
	- Any real TCP/IP stack would drop this packet, however, firewalls may potentially respond automatically, without bothering to check the checksum of the packet
	- As such this switch can be used to determine the presence of a firewall / IDS
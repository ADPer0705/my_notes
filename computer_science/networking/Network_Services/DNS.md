*DNS (Domain Name System)* provides a way for us to communicate with devices on the internet without remembering the IP addresses. DNS is a critical component of the internet's infrastructure, converting human-readable domain names into IP-addresses that computers use to identify each other on the network

Tools related to DNS : 
- [[dig]]
- [[dnsdumpster]]
- [[dnsenum]]
- [[hosts]]
- [[nslookup]]


---

# Fundamentals
DNS works as a distributed, hierarchical naming system and relies on name *servers* and *resolvers* to translate domain names to IP addresses. 
- It primarily uses UDP on port 53 for queries, though TCP can be used for larger data transfers or when truncation occurs

## Key DNS concepts 
- *DNS Resolver*
	- A client-side component (often a part of the OS) that handles queries 
	- When you enter a domain name, the resolver first checks the local cache
	- If the requested IP address is not found then it queries the DNS servers
- *Root Servers*
	- The first step in resolving a domain name, pointing to the *Top-Level Domain (TLD)* name servers
	- e.g. `.com` `.org`
- *TLD Servers*
	- They store the IP addresses of *Authoritative Name Servers* for domain under their TLD
- *Authoritative Name Server*
	- Provide the final answer to a DNS query, mapping a domain-name to its IP address
- *Time-to-Live (TTL)*
	- A setting that tells DNS resolvers how long to cache a particular DNS entry

## Domain Hierachy

![[Screenshot from 2024-09-02 00-14-50.png]]

- *TLD (Top-Level Domain)*
	- A TLD is the most right-hand side part of a domain name
	- e.g. in `tryhackme.com` the TLD is `.com`
	- There are two types of TLD
		1. gTLD
			- aka a generic Top-Level Domain
			- historically a gTLD was meant to tell the user the domain name's purpose 
			- e.g. 
				- `.com` would be for commercial purposes
				- `.org` for organization
				- `.edu` for education
				- `.gov` for government 
		2. ccTLD
			- aka a country code Top-Level Domain
			- was used for geographical purposes 
			- e.g. 
				- `.ca` for Canada
				- `.co.uk` for United Kingdom
	- Due to a high demand there has been an influx of new gTLDs
		- [here](https://data.iana.org/TLD/tlds-alpha-by-domain.txt) is a list of over 2000 TLDs
- *Second Level Domain*
	- in `tryhackme.com` the second level domain in `tryhackme`
	- When registering a domain name, the second-level domain is limited to 63 characters + the TLD and can only use `a-z 0-9` and hyphens (cannot start or end with a hyphen or have consecutive hyphens)
- *Subdomain*
	- A subdomain sits on the left-hand side of the second-level domain using a period to separate it 
	- e.g. `admin.tryhackme.com` has the subdomain `admin`
	- A subdomain name has the same creation restriction as the second-level domain
	- You can use multiple subdomains split with periods to create longer names, such as `jupiter.server.tryhackme.com` but the length must be kept to 253 characters or less
	- There is no limit to the number of subdomains you can create for you domain

---

# DNS Records
DNS relies on different types of records to manage the translation of domain names : 
- *A (Address) Record*
	- Maps a domain name to an IPv4 address
	- 'A' stands for address
- *AAAA Record*
	- Maps a domain name to an IPv6 address
	- 'AAAA' since four times storage space is required as the address is four times as long
- *CNAME (Canonical Name) Record*
	- Alias for one domain to another
		- e.g. TryHackMe's online shop has the subdomain `store.tryhackme.com` which returns a CNAME record `shops.shopify.com` 
		- Another DNS request would be made to `shops.shopify.com` to work out the IP address
- *MX (Main Exchange) Record*
	- Specifies mail server for the domain i.e. resolves to the address of the server that handles the email for the domain you are querying 
	- e.g. an MX record response for `tryhackme.com` would look something like `alt1.aspmx.l.google.com`
	- These records also comes with a priority flag. This tells the client in which order to try the servers
		- This is perfect for if the main server goes down and email need to be sent to a backup server
- *NS (Name Server) Record*
	- Points to the authoritative name server for the domain
- *PTR (Pointer) Record*
	- Used in reverse DNS lookup (IP to Domain)
- *TXT (Text Pointer) Record*
	- Stores arbitrary text data, they're free text fields where any text-based data can be stored
	- often used for security purposes
		- e.g. SPF, DKIM for email validation
		- list the servers that have the authority to send an email on behalf of the domain (This can help battle against spam and spoofed email)
		- can also be used to verify the ownership of the domain name when signing up for third party services
- *SRV Record*
	- Generalized service location record used by services like SIP, LDAP
- *SOA (Start of Authority) Record*
	- Contains administrative information about the zone
	- e.g. primary name server, email of the domain administrator

---

# DNS Query Process
When you type a URL into the browser, the following steps occurs : 

![[Screenshot from 2024-09-02 00-44-02.png]]

1. The computer first checks its local cache to see if you've previously looked up the address recently,
	- If not, a request to your Recursive DNS Server will be made
2. A recursive DNS server is usually provided by your ISP, but you can also choose your own
	- This server also has a local cache of recently looked up domain names
	- If a result is found locally, this is sent back to your computer, and your request ends here (this is common for popular and heavily requested services such as Google, Facebook, Twitter). 
	- If the request cannot be found locally, a journey begins to find the correct answer, starting with the internet's root DNS servers.
3. The root server acts as the DNS backbone of the internet
	- their job is to redirect you to the correct Top Level Domain Server, depending on your request. 
	- If, for example, you request [www.tryhackme.com](http://www.tryhackme.com/), the root server will recognise the Top Level Domain of `.com` and refer you to the correct TLD server that deals with `.com` addresses
4. The TLD server holds records for where to find the authoritative server to answer the DNS request
	- The authoritative server is often also known as the *nameserver* for the domain
	- For example, the name server for [tryhackme.com](http://tryhackme.com) is [kip.ns.cloudflare.com](http://kip.ns.cloudflare.com) and [uma.ns.cloudflare.com](http://uma.ns.cloudflare.com)
	- You'll often find multiple nameservers for a domain name to act as a backup in case one goes down
5. An Authoritative DNS server is the server that is responsible for storing the DNS records for a particular domain name and where any updates to you domain name DNS records would be made
	- Depending on the record type, the DNS record is then sent back to the Recursive DNS Server, where a local copy will be cached for future requests and then relayed back to the original client that made the request. 
	- DNS records all come with a TTL (Time To Live) value. 
		- This value is a number *represented in seconds* that the response should be saved for locally until you have to look it up again. 
		- Caching saves on having to make a DNS request every time you communicate with a server.

---

# Types of DNS Servers
1. *Recursive DNS Resolver (Caching DNS Resolver)*
	- Purpose
		- This is the DNS server your computer interacts with first when making a DNS query
		- Its job is to "resolve" the query by communicating with other DNS servers (like root, TLD and authoritative) until it finds the answer
	- Recursive DNS servers are often targeted in DNS amplification attacks 
2. *Root Name Server*
	- Purpose
		- These are the backbone of the DNS system
		- They don't hold domain-specific records but direct queries to the appropriate TLD (Top-Level Domain) servers
	- The root servers are critical infrastructure and often targeted by large-scale DDoS attacks 
3. *TLD (Top-Level Domain) Name Servers*
	- Purpose
		- These servers store information for Top-Level domain and country code TLDs (ccTLDs)
		- They direct queries to the authoritative name servers
4. *Authoritative DNS Servers*
	- Purpose
		- These servers store the actual DNS records (A, AAAA, MX, TXT, etc.) for a domain and provide the definitive answer when a DNS query reaches them
	- misconfiguration here can lead to data leaks, zone hijacking, or poisoning
5. *Forwarding DNS server*
	- Purpose
		- These servers forward queries to an upstream DNS server, such as a recursive DNS resolver
		- They help reduce traffic by caching frequently requested domains
	- Forwarding DNS Servers can be vulnerable to attacks like DNS cache poisoning if not properly secured

---

# DNS Concepts

## DNS Caching
Caching reduces the load on DNS servers by storing previous lookup results
- This is done by DNS resolvers, browsers, and operating systems, each having its own cache
- Cached entries are stored according to the TTL values

## DNS Propagation
DNS changes (like updating an A record) aren't instantaneous
- DNS Propagation refers to the time it takes for the updated DNS records to spread across various DNS servers worldwide 
- This process is influenced by TTL values and can take anywhere from a few minutes to 48 hours

## Reverse DNS (rDNS)
This is the opposite of a DNS lookup, where IP address is translated back into a domain name
- It's mainly used for logging purposes and email verification 

## DNS Security
- *DNS Spoofing/Poisoning*
	- Attackers injects false DNS records into a resolver's cache, causing incorrect IP addresses to be returned, redirecting users to malicious sites
- *DNSSEC (DNS Security Extensions)*
	- A set of security protocols that add a layer of authentication to DNS responses, ensuring that queries are not tampered with
	- DNSSEC uses digital signatures to validate the integrity of responses
- *DDoS on DNS*
	- Distributed Denial of Service attacks on DNS servers, overwhelming them with requests
	- Cloudflare and Google Public DNS are examples of services offering DDoS Protection
- *DNS Amplification*
	- A reflection-based DDoS attack that involves sending a small DNS query that results in a large response, overwhelming the victim
- *DNS Rebinding*
	- An attack that manipulates the DNS resolution process to control victim machines by resolving domain names to malicious IP addresses 
- *DNS Tunneling*
	- Attackers use DNS to tunnel other protocols, bypassing network restrictions or hiding malicious traffic
	- This can be used to #exfiltrate data from a compromised system

---

# DNS and Privacy
With the rise of privacy concerns, traditional DNS has been criticized for its lack of encryption meaning DNS queries are visible to any intermediary between the client and the DNS server. In response new protocols have emerged : 

- *DNS  over HTTPS (DoH)*
	- encrypts DNS queries in HTTPS traffic, preventing ISPs or attackers from spying on DNS requests
	- Services like Cloudflare's 1.1.1.1 or Google Public DNS offer DoH
- *DNS over TLS (DoT)*
	- Similar to DoH but runs DNS queries over TLS connections, providing encryption while maintaining separation from HTTPS traffic

---

# Real World Application of DNS
- *Load Balancing*
	- DNS is often used for load balancing
	- multiple IP addresses are assigned to a single domain, distributing traffic among servers
- *Content Delivery Networks (CDN)*
	- CDNs use DNS to direct users to the nearest server for faster content delivery
- *Anycast DNS*
	- Anycast routing allows multiple DNS servers to share the same IP address, with the nearest routing queries to the closest server, improving performance and reliability
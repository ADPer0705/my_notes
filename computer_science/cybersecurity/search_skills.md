# Evaluation of Search Results
- **Source**: Identify the author or organization publishing the information. Consider whether they are reputable and authoritative on the subject matter. Publishing a blog post does not make one an authority on the subject.
- **Evidence and reasoning**: Check whether the claims are backed by credible evidence and logical reasoning. We are seeking hard facts and solid arguments.
- **Objectivity and bias**: Evaluate whether the information is presented impartially and rationally, reflecting multiple perspectives. We are not interested in authors pushing shady agendas, whether to promote a product or attack a rival.
- **Corroboration and consistency**: Validate the presented information by corroboration from multiple independent sources. Check whether multiple reliable and reputable sources agree on the central claims.

---

# Search Engines
Almost all search engines allows you to carry out advanced searches

Let's consider the search operators supported by Google 
- `"exact phrase"`
	- double quotes indicate that you're looking for pages with the exact word or phrases 
- `site:`
	- This operator lets you specify the domain name to which you want to limit your search
	- For example, we can search for success stories on TryHackMe using 
```google
site:tryhackme.com success stories
```
- `-`
	- The minus sign allows you to omit search results that contain a particular word or phrase 
	- e.g. you want to learn about pyramids, but you don't want to view tourism websites; one approach is to search for `pyramids -tourism` or `-tourism pyramids`
- `filetype:`
	- this one is indispensable for finding files instead of web pages 
	- e.g. `filetype:ppt cyber security`

---

# Specialized Search Engines
Here we refer to search engines used to find specific types of results

## Shodan
- a search engine for *devices connected to the internet* 
- It allows you to search for specific types and versions of servers, networking equipment, industrial control systems, and IoT devices

e.g. say you want to see how many servers are still running Apache 2.4.1 and the distribution across countries 
- To find the answer we can search for `apache 2.4.1`, which will return the list of servers with the string "apache 2.4.1" in their headers

![[5f04259cf9bf5b57aed2c476-1718112514634.png | 450]]

## Censys
Shodan focuses on Internet-connected devices and systems, such as servers, routers, webcams, and IoT devices. Censys, on the other hand, focuses on Internet-connected hosts, websites, certificates, and other *Internet assets*

use cases : 
- enumerating domains in use
- auditing open ports and services
- discovering rogue assets within a network

![[5f04259cf9bf5b57aed2c476-1718112720346.png | 450]]

## VirusTotal
- an online website that provides a virus-scanning service for files using multiple antivirus engines 
- allows users to upload files or provide USLs to scan them against numerous antivirus engines and website scanners in a single operation 
	- They can even input file hashes to check the results of previously uploaded files 
	- Furthermore one can check the community's comments for more insights
		- Occasionally, a file might be flagged as a virus or a Trojan; however, this might not be accurate for various reasons, and that's when community members can provide a more in-depth explanation.

![[5f04259cf9bf5b57aed2c476-1718112692359.png | 450]]

## Have I Been Pwned (HIBP)
does one thing, it tells you if an email address has appeared in a leaked data breach
- Finding one’s email within leaked data indicates leaked private information and, more importantly, passwords. 
	- Many users use the same password across multiple platforms, if one platform is breached, their password on other platforms is also exposed. 
- Indeed, passwords are usually stored in encrypted format; however, many passwords are not that complex and can be recovered using a variety of attacks.

![[5f04259cf9bf5b57aed2c476-1718112534973.png | 450]]


---

# Vulnerabilities and Exploits

## CVE
We can think of the Common Vulnerabilities and Exposures (CVE) program as a *dictionary of vulnerabilities*. 
- It provides a standardized identifier for vulnerabilities and security issues in software and hardware products. 
	- Each vulnerability is assigned a CVE ID with a standardized format like `CVE-2024-29988`. 
- This unique identifier (CVE ID) ensures that everyone from security researchers to vendors and IT professionals is referring to the same vulnerability

## Exploit Database
The Exploit Database lists exploit codes from various authors; some of these exploit codes are tested and marked as verified.

## Github

---

# Technical Documentation

## Linux Manual Pages

## Microsoft Windows
Microsoft provides an official [Technical Documentation](https://learn.microsoft.com/) pages for its products

## Product Documentation

---

# Social Media

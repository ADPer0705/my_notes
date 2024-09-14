The Burp Suite web application security testing framework

Burp Suite is a Java-based framework designed to serve as a comprehensive solution for conducting web application penetration testing. It has become the industry standard tools for *hands-on security assessment of web and mobile applications*, including those that rely on Application Programming Interfaces (APIs)

Simply put, Burp Suite captures and enables manipulation of all the HTTP/HTTPS traffic between a browser and a web server. This fundamental capability forma the backbone of the framework. By intercepting requests users have the flexibility to route them to various components within the Burp Suite framework. 


> [!NOTE] 
> The ability to intercept, view and modify web requests before they reach the target server or even manipulate responses before they are received by out browser makes Burp Suite an invaluable tool for manual web application testing

---

Burp Suite has various editions other than the free community edition but they require proper licencing : 
- **Burp Suite Professional** is an unrestricted version of Burp Suite Community. It comes with features such as:
    
    - An automated vulnerability scanner.
    - A fuzzer/brute-forcer that isn't rate limited.
    - Saving projects for future use and report generation.
    - A built-in API to allow integration with other tools.
    - Unrestricted access to add new extensions for greater functionality.
    - Access to the Burp Suite Collaborator (effectively providing a unique request catcher self-hosted or running on a Portswigger-owned server).
    
    In short, Burp Suite Professional is a highly potent tool, making it a preferred choice for  professionals in the field.
    
- **Burp Suite Enterprise**, in contrast to the community and professional editions, is primarily utilized for continuous scanning. It features an automated scanner that periodically scans web applications for vulnerabilities, similar to how tools like Nessus perform automated infrastructure scanning. Unlike the other editions, which allow manual attacks from a local machine, Burp Suite Enterprise resides on a server and constantly scans the target web applications for potential vulnerabilities.

---

# Features of Burp Suite Community

#### Intercepting HTTP traffic 
- **proxy**
	- Burp Suite's main feature is its intercepting proxy
	- this allows you to capture, inspect, and modify HTTP and HTTPS traffic in real time
	- This is usual for analyzing how the application behaves and crafting specific requests for vulnerability testing

#### Scanning for Vulnerabilities 
- **scanner**
	- Burp Suite's scanner automatically analyzes web application for potential vulnerabilities, like SQL injection, XSS, or insecure authentication mechanisms
	- NOT AVAILABLE IN THE COMMUNITY EDITION

#### Intruder
- **Intruder**
	- This feature allows you to automate custom attacks
	- allows spraying endpoints with requests
	- You can use it for brute forcing login pages, fuzzing inputs, and finding flaws like parameter tampering and injection points 

#### Repeater
- **Repeater**
	- It's useful for manual testing
	- You can capture a request, modify it, and send it repeatedly to see how the server responds
	- Great for testing vulnerabilities like CSRF or experimenting with and crafting different payloads through trial and error or testing the functionality of an endpoint for vulnerabilities 

#### Decoder
- **Decoder**
	- This is a simple tool within burp suite that allows you to encode or decode data in different formats, such as Base64, URL encoding, and HTML encoding
	- it can encode payloads before sending to the target or decode captured information

#### Comparer
- **Comparer**
	- It's used to compare two pieces of data to see subtle differences, either at the word or the byte level
	- This can be used for session hijacking or identifying changes in application behavior

#### Sequencer
- **Sequencer**
	- This tool helps you analyze the quality of randomness in session tokens and other data used for authentication or anti-CSRF mechanisms

Beyond these built-in features, the Java codebase of Burp Suite facilitates the development of extensions to enhance the framework's functionality. 
- these extensions can be written in Java, Python, (using the Java Jython interpreter), or Ruby (using the Java JRuby interpreter)
- The *Burp Suite Extender* module allows for quick and easy loading of extensions into the framework, while the marketplace, know as *BApp Store*, enables downloading of third party modules
	- NOTE : some extensions may require a professional licence


---

# The Dashboard

The burp suite dashboard is divided into four quadrants as follows 
- **Tasks**
	- The tasks menu allows you to define background tasks that Burp Suite will perform while you use the application 
	- In community edition, the default "Live Passive Crawl" task, which automatically logs the pages visited
- **Event Logs**
	- The event log provides information about the actions performed by Burp Suite, such as starting the proxy, as well as details about connections made through the burp
- **Issue Activity**
	- This section is specific to Burp Suite Professional
	- It displays the vulnerability identified by the automated scanner, ranked by severity and filterable based on the certainty of the vulnerability 
- **Advisory**
	- The advisory section provides more detailed information about the identified vulnerabilities, including references and suggested remediation
	- This information can be exported into a report
	- In the community edition this section may not show any vulnerabilities

---

# Navigation

The default navigation is primarily done through the top menu bars, which allow you to switch between modules and access various sub-tabs within each module. The sub-tabs appear in a second menu bar directly below the main menu bar 

#### Detaching tabs 
If you prefer to view multiple tabs separately, you can detach them into separate windows. To do this, go to the **Window** option in the application menu above the **Module Selection** bar. From there, choose the "Detach" option, and the selected tab will open in a separate window. The detached tabs can be reattached using the same method.

|Shortcut|Tab|
|---|---|
|`Ctrl + Shift + D`|Dashboard|
|`Ctrl + Shift + T`|Target tab|
|`Ctrl + Shift + P`|Proxy tab|
|`Ctrl + Shift + I`|Intruder tab|
|`Ctrl + Shift + R`|Repeater tab|

---

# Options
Following are the available options for configuring Burp Suite. There are two types of settings : 
- **Global Settings**
	- affect the entire Burp Suite installation and are applied every time you start the application
	- They provide a baseline configuration for your Burp Suite environment 
- **Project Settings**
	- These settings are specific to the current project and apply only during the session 
	- Burp Suite community edition doesn't support saving any projects, so any project-specific options will be lost when you close Burp

---

# Introduction to Burp Proxy
It enables the capture of requests and responses between the user and the target web server. This intercepted traffic can be manipulated, sent to other tools for further processing, or explicitly allowed to continue to its destination

## Key Points about Proxy
#### Intercepting Requests
- When requests are made through the Burp Proxy, they are intercepted and help back from reaching the target server
- The requests appear in the proxy tab, allowing for further actions such as forwarding, dropping, editing, or sending them to other Burp modules
- To disable the intercept and allow the requests to pass through the proxy without interruption, click the `Intercept is on` button

#### Taking Control
- The ability to intercept requests empowers testers to gain complete control over web traffic, making it invaluable for testing web applications 

#### Capture and Logging
- Burp Suite captures and logs requests make through the proxy by default, even when the interception is turned off
- The logging functionality can be helpful for later analysis and review of prior requests 

#### WebSocket Support
- Burp Suite also captures and logs WebSocket communications, providing additional assistance when analyzing web applications

#### Logs and History
- The captured requests can be viewed in the *HTTP history* and *WebSockets history* sub-tabs, allowing for retrospective analysis and sending the requests to other Burp Suite modules as needed 

Proxy-specific options can be accessed by clicking the **Proxy settings** button. These options provide extensive control over the Proxy’s behaviour and functionality. Familiarise yourself with these options to optimize your Burp Proxy usage.
### Some Notable Features in the Proxy Settings
#### Responses Interception 
- By default, the proxy does not intercept server responses unless explicitly requested on a per-request basis
- The "Intercept responses based on the following rules" checkbox, along with the defined rules, allows for a more flexible response interception

#### Match and Replace 
- The "Match and Replace" section in the **Proxy settings** enables the use of regular expressions (regex) to modify incoming and outgoing requests. 
- This feature allows for dynamic changes, such as modifying the user agent or manipulating cookies.

---

# Connecting through the Proxy (FoxyProxy)
git 
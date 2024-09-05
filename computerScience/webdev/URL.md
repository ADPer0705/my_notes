URL stands for *(Uniform Resource Locator)*
- Essentially a reference to a web resource and specifies its location on a computer network, along with the mechanisms for retrieving it
- URLs are the foundation of how we can access resources over the internet via the HTTP(S) protocol

## Structure of a URL

![[Screenshot from 2024-09-04 19-37-47.png]]

- *Scheme* (Protocol)
	- This defines the protocol to be used to access the resource
	- Common schemes include:
		- `http://` for Hypertext Transfer Protocol
		- `https://` for HTTP Secure
		- `ftp://` for File Transfer Protocol
		- `mailto:` for email links
		- `file://` for accessing local files
- *Host* (Domain or IP Address)
	- This is the domain name (e.g. example.com) or an IP Address that points to the server where the resource is hosted
- *Port*
	- This is the port on the server used to communicate (optional)
	- The default ports are : 
		- `:80` for HTTP
		- `:443` for HTTPS
- *Path* 
	- The path specifies the resource or page you're trying to access on the server
	- It follows the domain name or IP address and typically resembles a file path
- *Query String*
	- This is used to pass parameters to the server and typically starts with a `?`
	- Each parameter is a key-value paired with `&` separating them
- *Fragment*
	- This represents an internal page reference, often starting with `#`
	- It's used to jump to a specific section within a page

## Making a Request
It's possible to make a request to a server with just one line `GET/HTTP/1.1`

![[Screenshot from 2024-09-04 19-45-19.png]]

But for a much richer experience you'll need to send data as well. The other data is sent with what is called `headers`, where headers contain extra information to give to the web server you're communicating with
Example request
```http
 GET / HTTP/1.1
Host: tryhackme.com
User-Agent: Mozilla/5.0 Firefox/87.0
Referer: https://tryhackme.com/
<!-- this line is supposed to be blank, no comments, no anything -->
```
- The request is sending the `GET` method, request the home page with / and telling the server we're using HTTP protocol version 1.1
- We tell the web server we want the website `tryhackme.com`
- We tell the web server we are using `Firefox version 8.7 Browser`
- We are telling the web server that the web page that referred us to this one is `https://tryhackme.com`
- HTTP requests always end with a blank line to inform the web server that the request has finished

Example reponse
```http
 HTTP/1.1 200 OK
Server: nginx/1.15.8
Date: Fri, 09 Apr 2021 13:34:03 GMT
Content-Type: text/html
Content-Length: 98

<html>
<head>
    <title>TryHackMe</title>
</head>
<body>
    Welcome To TryHackMe.com
</body>
</html>
```
- HTTP 1.1 is the version of the HTTP protocol the server is using and then followed by the HTTP Status Code in this case "200 Ok" which tells us the request has completed successfully.  
- This tells us the web server software and version number.  
- The current date, time and timezone of the web server.
- The Content-Type header tells the client what sort of information is going to be sent, such as HTML, images, videos, pdf, XML.  
- Content-Length tells the client how long the response is, this way we can confirm no data is missing.  
- HTTP response contains a blank line to confirm the end of the HTTP response.  
- Lines 7-14 : The information that has been requested, in this instance the homepage.
 

---

## Security Considerations with URLs
- *Phishing Attacks*
	- Attackers can use misleading or disguised URLs to lure users into visiting malicious websites
- *Query Parameter Tampering*
	- If parameters in the query string aren't validated correctly, they can be manipulated to launch attacks such as SQL injectio
- *Man-in-the-Middle Attacks (MitM)*
	- If the URL uses `http` instead of `https`, traffic between the browser and server is unencrypted, making it vulnerable to interception

## URL Encoding
Special Characters in a URL are encoded using a percent `%` symbol followed by the hexadecimal equivalent 
- Space becomes `%20`
- `/` becomes `%2F`
This is important when passing characters in query strings or paths 

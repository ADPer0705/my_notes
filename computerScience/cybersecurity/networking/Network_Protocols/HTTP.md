 The *Hypertext Transfer Protocol (HTTP)* is an **application protocol used for accessing web pages**.

HTTP functions as a **request-response** protocol in the **client-sever computing model**
- The client submits an HTTP request message to the server while accessing a web page
- The sever which stores content, or provides resources, such as HTML files, or performs other functions on behalf of the client 
- response contains completion status information about the request and may contain any content requested by the client in its message body

## What is HTTP ?
- *Definition*
	- HTTP is an application-layer protocol used for transmitting hypertext (like HTML documents)
	- Primarily used for communication between the web browser and servers
- *Stateless*
	- HTTP is stateless, meaning each request is independent 
	- The server does not retain any information about previous requests from the client
		- although cookies and sessions can be used to manage state

---

# HTTP request structure 
A typical HTTP request consists of :
- *request line*
	- Includes the HTTP method (e.g. GET, POST), URL. and HTTP version
- *Header*
	- Provide metadata, such as content type or the user agent
- *Body*
	- Only in method like POST and PUT
	- It carries data (e.g. form data)
e.g. 
```less
GET /index.html HTTP/1.1
Host: www.example.com
User-Agent: Mozilla/5.0
Accept: text/html
```
# HTTP response structure
A response typically includes : 
- *Status Line*
	- Includes the 
		- HTTP version, 
		- a status code, and 
		- a status message
- *Headers*
	- Similar to the request, the headers provide metadata (e.g. Content-Type, server)
- *Body*
	- Contains the content being returned, such as HTML, JSON, etc
```less
HTTP/1.1 200 OK
Content-Type: text/html
Content-Length: 100

<html><body>Hello, world!</body></html>
```

---

# HTTP Methods
HTTP methods are a way for the client to show their intended action when making an HTTP request. There are a lot of HTTP methods, although you'll mostly deal with the GET and the POST methods
- *GET*
	- Requests data from the server 
- *POST*
	- Submits data to the server
- *PUT*
	- Updates data on the server
- *DELETE*
	- Deletes the data on the server
- *HEAD*
	- Requests the headers without the body
- *OPTIONS*
	- Describe the communication options for the target resource
- *PATCH*
	- Partially modifies a resource 

# Status Codes
The HTTP server responds with the first line always containing a status code informing the client of the outcome of their request and also potentially how to handle it
- `1xx`
	- *Informational*
	- Indicates that the request has been received and the process is continuing 
	- This tells the client that the first part of the request has been accepted and they should continue sending the rest of the request
	- e.g. 100 Continue
- `2xx`
	- *Success*
		- Indicates successful processing 
		- e.g. 
			- 200 OK
			- 201 Created
- `3xx`
	- *Redirectional*
		- These are used to redirect the client's request to another resource
			- This can be either to a different webpage or a different website altogather
		- Indicates that further action is required to complete the request
		- e.g. 
			- 301 Moved Permanently
			- 302 Found
- `4xx`
	- *Client Error*
		- Indicates errors caused by client
		- e.g.
			- 404 Not Found
			- 403 Forbidden
- `5xx`
	- *Server Error*
		- Indicates errors caused by the server
		- Usually indicates quite a major problem with the server handling the requests
		- e.g. 
			- 500 Internal Server Error
			- 502 Bad Gateway

#### Common HTTP request Codes
| CODE                             | DESCRIPTION                                                                                                                                                                                                                   |
| -------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **200 - OK**                     | The request was completed successfully.                                                                                                                                                                                       |
| **201 - Created**                | A resource has been created (for example a new user or new blog post).                                                                                                                                                        |
| **301 - Moved Permanently**      | This redirects the client's browser to a new webpage or tells search engines that the page has moved somewhere else and to look there instead.                                                                                |
| **302 - Found**                  | Similar to the above permanent redirect, but as the name suggests, this is only a temporary change and it may change again in the near future.                                                                                |
| **400 - Bad Request**            | This tells the browser that something was either wrong or missing in their request. This could sometimes be used if the web server resource that is being requested expected a certain parameter that the client didn't send. |
| **401 - Not Authorised**         | You are not currently allowed to view this resource until you have authorised with the web application, most commonly with a username and password.                                                                           |
| **403 - Forbidden**              | You do not have permission to view this resource whether you are logged in or not.                                                                                                                                            |
| **405 - Method Not Allowed**     | The resource does not allow this method request, for example, you send a GET request to the resource /create-account when it was expecting a POST request instead.                                                            |
| **404 - Page Not Found**         | The page/resource you requested does not exist.                                                                                                                                                                               |
| **500 - Internal Service Error** | The server has encountered some kind of error with your request that it doesn't know how to handle properly.                                                                                                                  |
| **503 - Service Unavailable**    | This server cannot handle your request as it's either overloaded or down for maintenance.                                                                                                                                     |



---

## Persistent vs Non-Persistent Connections
- *Non-Persistent*
	- By default, HTTP/1.0 closes the connection after each request-response cycle
- *Persistent*
	- HTTP/1.1 introduced persistent connections
	- allowing multiple requests/responses over the same connection, improving efficiency

## HTTP versions 
- *HTTP/1.0*
	- The original version, non-persistent by default
- *HTTP/1.1* 
	- Supports persistent connections, chunked transfer encoding, and better caching mechanisms
- *HTTP/2*
	- Introduced binary framing, multiplexing (multiple requests over a single connection), header compression, and better performance
- *HTTP/3*
	- Uses **QUIC** (Instead of TCP) for faster and more reliable data transfer, with reduced latency and improved securtiy

---
## HTTP Headers
Headers are additional bits of data you can send to the web server when making requests. Although no headers are strictly required when making a HTTP request, you’ll find it difficult to view a website properly.

HTTP headers are crucial for providing additional information about the request or response. Some important headers are : 
- *General Headers*: `Cache-Control`, `Connection`, `Date`.
- *Request Headers*: `Host`, `User-Agent`, `Accept`, `Authorization`.
- *Response Headers*: `Server`, `Set-Cookie`, `Content-Type`.
- *Entity Headers*: `Content-Length`, `Content-Encoding`, `Content-Type`.

#### Common Request Headers
﻿These are headers that are sent from the client (usually your browser) to the server.  
- *Host:* 
	- Some web servers host multiple websites so by providing the host headers you can tell it which one you require, otherwise you'll just receive the default website for the server.  
- *User-Agent:* 
	- This is your browser software and version number, telling the web server your browser software helps it format the website properly for your browser and also some elements of HTML, JavaScript and CSS are only available in certain browsers.  
- *Content-Length:* 
	- When sending data to a web server such as in a form, the content length tells the web server how much data to expect in the web request. This way the server can ensure it isn't missing any data.
- *Accept-Encoding:* 
	- Tells the web server what types of compression methods the browser supports so the data can be made smaller for transmitting over the internet.
- *Cookie:* 
	- Data sent to the server to help remember your information (see cookies task for more information).  
#### Common Response Headers
These are the headers that are returned to the client from the server after a request.
- *Set-Cookie:* 
	- Information to store which gets sent back to the web server on each request (see cookies task for more information).  
- *Cache-Control:* 
	- How long to store the content of the response in the browser's cache before it requests it again.  
- *Content-Type:* 
	- This tells the client what type of data is being returned, i.e., HTML, CSS, JavaScript, Images, PDF, Video, etc. 
	- Using the content-type header the browser then knows how to process the data.  
- *Content-Encoding:* 
	- What method has been used to compress the data to make it smaller when sending it over the internet.

---

## Cookies and Sessions
- *Cookies*
	- Small pieces of data sent by the server to the client and stored in the browser
	- They can be used for maintaining state (like user sessions)
- *Sessions*
	- Typically used in server-side programming to store data related to a user's session 
	- Session IDs are usually managed using cookies 

# Cookies
They're just small piece of data that is stored on your computer. 
- Cookies are saved when you receive a `Ser-cookie` header from your web-server
- Then, every request you make, you'll send cookie data back to the web server
Because HTTP is stateless, (doesn't keep track of your previous requests), cookies can be used to remind the web server who you are, some personal settings for the website or whether you've been to the website before.

![[Screenshot from 2024-09-05 16-18-08.png | 650]]

Cookies can be used for many purposes but are most commonly used for website authentication. The cookie value won't usually be a clear-text string where you can see the password, but a token (unique secret code that isn't easily humanly guessable)

### Viewing you cookies
You can easily view what cookies your browser is sending to a website by using the developer tools, in you browser. Once you have developer tools open, click on the "Network" tab. This tab will show you a list of all the resources your browser has requested. You can click on each one to receive a detailed breakdown of the request and response. If your browser sent a cookie, you will see these on the "Cookies" tab of the request.


---

## Secure HTTP (HTTPS)
- *HTTPS*
	- HTTP over SSL/TLS
	- encrypting the communication between client and server to provide security and data integrity 
- *How it Works*
	- When a client requests an HTTPS connection, SSL/TLS is used to encrypt the data, preventing man-in-the-middle attacks
- *Certifications*
	- Websites use SSL certificates, signed by trusted certificate authorities (CAs), to prove their identity

## Caching in HTTP
- *Cache-Control*
	- Used to control how and for how long content is cached
- *Etag*
	- A unique identifier for a specific version of a resource, used for a cache validation 
- *Expires*
	- Sets an expiration date for cached content
- *304 Not Modified*
	- Sent by the server when a cached version is still valid, saving bandwidth

## HTTP Security Considerations
- *Cross-Site Scripting (XSS)*
	- Attacks that inject malicious scripts into web pages
- *Cross-Site Request Forgery (CSRF)*
	- Attacks that force users to execute unwanted actions on web applications
- *Content Security Policy (CSP)*
	- A mechanism to prevent XSS attacks by restricting the sources of content that can be loaded on a page

## HTTP proxies and Reverse-Proxies
- *HTTP Proxies*
	- Acts as an intermediary between the client and the server
	- handling request on behalf of the client
- *Reverse Proxies*
	- Handles requests on behalf of the server
	- often used for load balancing or security purposes

---

## HTTP/2 Multiplexing
- One of the biggest improvements of HTTP/2 is multiplexing, allowing multiple requests to be sent and responded to concurrently over a single connection 
- This eliminates the need for multiple TCP connections, significantly improving performance 

## QUIC and HTTP/3
- QUIC (Quick UDP Internet Connections)
- A transport layer protocol developed by Google that forms the foundation of HTTP/3
- It provides lower latency and better performance by replacing TCP with UDP and incorporating TLS encryption at the transport layer
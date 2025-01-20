- some of the most common web server software : 
	  Apache, Nginx, IIS and NodeJS

A web server delivers files from root directory 
- default location of nginx and apache 
	- */var/www/html* in linux operating systems 
- IIS uses *C:\inetpub\wwwroot* for the windows operating system
consider the example, if you requested the file at http://www.example.com/picture.jpg, it would send the file */var/www/html/picture.jpg* from it's local hard-drive


## Virtual Hosts
Web servers can host multiple websites with different domain names; to achieve this, they use virtual hosts. 
- The web server software checks the hostname being requested from the HTTP headers and matches that against its virtual hosts 
- *virtual hosts are just text-based configuration files*
- If it finds a match, the correct website will be provided. If no match is found, the default website will be provided instead
- virtual hosts can have their root directory mapped to different locations on the hard-drive 


## Static vs Dynamic Content
#### Static Content
- never changes
- common examples are pictures, JavaScript, CSS, etc. but it can also include HTML that never changes
- These are the files that are directly served from the web server with no changes made to them

#### Dynamic Content
- could change with different requests 
- e.g. consider the homepage of a blog, it'll show the latest entries and if new entries are created it'll change the home page, or consider the search page on the blog
- These changes to what you end up seeing are done in the *backend* with the use of programming and scripting languages. Everything you see on your browser is the *frontend*


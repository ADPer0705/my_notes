## Load Balancers
Provides two main features :
- ensuring high traffic websites can handle the load
- providing a failover if a server becomes unresponsive

Load balancers also perform periodic checks with each server, known as *health check*
- if the server doesn't respond appropriately or doesn't respond, the load balancer will stop sending traffic until it responds appropriately again

## CDN
- excellent resource for cutting down traffic to a busy website 

It allows you to host static files from your website across thousands of servers all over the world
- when a user requests a static file, the CDN works out where the nearest server is physically located and sends the request there instead of potentially the other side of the world

## WAF
- Stands for Web Application Firewall
- protects servers from hacking or denial-of-service attacks
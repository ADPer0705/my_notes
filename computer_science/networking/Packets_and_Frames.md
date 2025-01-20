Packets and Frames are small pieces of data that, when forming together, make a larger piece of information or message. However they're two different things in the OSI model 
- A *frame* is at layer 2 - the data link layer
	- there is no such information as IP addresses
- Think of it as putting an envelope within an envelope and sending it away. The first envelope will be the packet that you mail, but once it is opened, the envelope within still exists and contains data (This is a frame)

It should be safe to assume that when talking about anything IP addresses, we are talking about packets. When the encapsulating information is stripped away, we're talking about the frame itself.

Packets are an efficient way of communicating data across networked devices
- data is exchanged in small pieces, there is less chance of bottlenecking occurring across a network than large messages being sent at once

![[Screenshot 2025-01-04 144117.png]]

Packets have different structures depending upon the type of packet being sent. 
e.g. A packet using the internet protocol will have a set of headers that contain additional pieces of information to the data that is being sent across a network 
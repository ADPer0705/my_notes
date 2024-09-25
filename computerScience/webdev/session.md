A web session refers to the period of interaction between a user and a web application or website, typically starting when the user logs in or opens the site and ending when they log out or close the browser. 
- During this time, the user's activities and data are stored and managed, often using a sessions identifier (session ID) 

### How Web Sessions Work
#### Session Initialization
- When a user accesses a web application, the server generates a unique session ID
- This session ID is sent to the client (browser) and is stored, usually in a cookie

#### Session Management
- As a user navigates through the website, the session ID is sent along with each requests to maintain the context of the session (e.g. user preferences, login state)
- The server users this ID to retrieve and maintain session-specific information

#### Session Storage
- The session data can be stored on the server-side (e.g. in-memory storage, database) or client side (e.g. local storage, cookies)
- Server-side storage is more secure as it reduces the risk of client-side tampering 

#### Session Expiry and Terminates
- Session can expire after a certain period of inactivity or when the user logs out 
- Expired sessions require the user to re-authentication 


### Session Considerations

#### Session Hijacking
- An attackers can steal a session ID and impersonate the user
- This is often mitigated using secure, HTTP-only cookies and implementing measure like rotating sessions IDs

#### Session Fixation
- An attackers sets a session ID before the user logs in, allowing the attackers to use the same ID to access the user's account

### Common Use Cases
- **User Authentication**
	- To track logged-in users across pages
- **Shopping Carts**
	- To maintain a user's cart items without requiring a login
- **Personalization**
	- To store user preferences like language settings or theme

### Key Concepts
- **Cookies**
	- Used to store session IDs and sometimes session data on the client side
- **Session ID**
	- A unique identifier assigned to a session, allowing the server to link requests to the same user


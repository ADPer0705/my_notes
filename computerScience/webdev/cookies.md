> [!NOTE]
> Cookies are small pieces of data stored by a web browser on the user's device. **Cookies** are key-value pairs that a web application will store on the user's browser and that will be automatically repeated on each request to the website that issued them

- They are widely used to store user preferences, session information, and other data that can help provide a more personalized and persistent browsing experience 

### Types of Cookies 
- **Session Cookies**
	- Purpose
		- Temporary cookies that expire once the use closes the browser
	- Use Case
		- Track user activity during a single session, such as maintaining a shopping cart
- **Persistent Cookies**
	- Purpose
		- Remain on the user's device for a set period or until manually deleted
	- Use Case
		- Remember login details or language preferences between sessions
- **Secure Cookies**
	- Purpose
		- Transmitted over secure HTTPS connection only
	- Use Case
		- Used for secure login tokens or sensitive session data
- **HttpOnly Cookies**
	- Purpose
		- Not accessible via JavaScript, providing protection against cross-site scripting (XSS) attacks
	- Use Case
		- Store Session IDs or authentication tokens securely
- **Third-Party Cookies**
	- Purpose
		- Set by a domain other than the one being visited, often used by advertisers 
	- Use Case
		- Track user behavior across different sites for targeted advertising

### Cookie Structure
- **Name-Value Pair**: `name=value`
    - Example: `sessionId=abc123`
- **Domain**: Specifies which domain the cookie belongs to.
- **Path**: Specifies the path within the domain where the cookie is valid.
- **Expiry**: Determines how long the cookie will be stored on the device.
- **Secure**: Ensures the cookie is only sent over HTTPS.
- **HttpOnly**: Restricts access to the cookie from JavaScript.

```terminal
Set-Cookie: sessionId=abc123; Domain=example.com; Path=/; Expires=Wed, 30 Oct 2024 12:00:00 GMT; Secure; HttpOnly
```

### How Cookies are Used
- **Authentication**
	- Store session tokens or user credentials, enabling users to stay logged in 
- **User Preferences**
	- Save Settings like languages, theme, or layout preferences
- **Tracking**
	- Monitor user behavior, such as pages visited or products viewed, often for analytics or marketing
- **State Management**
	- Maintain state in web applications, like items is a shopping cart

### Security Concerns
- **Cookie Theft**
	- Cookies, especially session IDs, can be stolen through XSS attacks if not protected by the *HttpOnly flag*
- **Cross-Site Request Forgery (CSRF)**
	- Attackers can trick a user's browser into making unauthorized requests using their authenticated cookies
- **Session Fixation**
	- An attacker sets a cookie for the victim, and once the victim logs in, the attacker can use the same session ID

### Best Practices
- Use the `HttpOnly` flag to prevent JavaScript access
- Use the `Secure` flag for cookies that contain sensitive data
- Set `SameSite` attribute to control cookie access across sites:
	- `SameSite=Lax` :
		- Cookies are sent with top-level navigation and will block sending cookies along with Cross-site requests (e.g. from third-party sites)
	- `SameSite=Strict` : 
		- Cookies are sent only in a first-party context and not with requests initiated by third-party websites
	- `SameSite=None; Secure` : 
		- Allows cross-site requests but only over HTTPS

### Examples in Code
- Setting a cookie in PHP
```php
setcookie("user", "JohnDoe", time() + (86400 * 30), "/"); // Sets a cookie valid for 30 days
```

- Accessing a Cookie in JavaScript
```javascript
document.cookie = "username=JohnDoe";
let cookieValue = document.cookie.replace(/(?:(?:^|.*;\s*)username\s*\=\s*([^;]*).*$)|^.*$/, "$1");
```

JSON Web Token (JWT) is a compact, URL-safe method for representing claims to be transferred between two parties. It is commonly used for authentication and authorization in web application.

---

# Structure of a JWT
A JWT is made of three parts separated by dots `.`: 
```css
header.payload.signature
```
#### 1. Header
- Typically consists of two parts : 
	- the type of the token, which is `JWT`
	- and the signing algorithm being used such as HMAC SHA256 or RSA
```json
{
  "alg": "HS256",
  "typ": "JWT"
}
```
#### 2. Payload
Contains the claims
- claims are statements about an entity (typically, the user) and additional data

There are three types of claims : 
- **Registered Claim**
	- Predefined claims like 
		- `iss` (issuer)
		- `exp` (expiration time)
		- `sub` (subject)
		- `aud` (audience)
- **Public Claims**
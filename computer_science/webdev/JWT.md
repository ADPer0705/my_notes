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
	- Defined by users, which can be shared and used, such as `username` or `email`
- **Private Claims**
	- Custom claims created to share information between parties that agree on them
```json
{
  "sub": "1234567890",
  "name": "John Doe",
  "admin": true
}
```

#### 3. Signature
- To create signature, you have to take the encoded header, the encoded payload, a secret, the algorithms specified in the header, and sign that 
For example, if you are using the HMAC SHA256 algorithm, the signature will be created as follows:
```scss
HMACSHA256(
  base64UrlEncode(header) + "." +
  base64UrlEncode(payload),
  secret)
```
the resulting JWT looks like this : 
```
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWV9.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c
```

---

# How JWT works
1. User Authentication
	- When a user successfully logs in using their credentials, the server generates a JWT and sends it back to the user
	- The user stores the JWT (usually in local storage or a cookie)

2. Authorization
	- For subsequent requests, the client sends this JWT in the `Authorization` header, prefixed with `Bearer`
	- The server then verifies the JWT to authorize access to protected resources 
```http
GET /protected HTTP/1.1
Host: example.com
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

---

# JWT Claims

- **Registered Claims** (optional but recommended):    
    - `iss` (issuer): Identifies the issuer of the token.
    - `sub` (subject): Identifies the subject of the JWT.
    - `aud` (audience): Identifies the recipients that the JWT is intended for.
    - `exp` (expiration time): The time after which the JWT expires.
    - `nbf` (not before): The time before which the JWT must not be accepted for processing.
    - `iat` (issued at): The time at which the JWT was issued.
    - `jti` (JWT ID): A unique identifier for the JWT.

- **Custom Claims**:    
    - You can include custom fields such as `role`, `permissions`, `department`, etc.

---

# Security Concerns

1. **Signature Verification**:
    
    - JWTs are signed using a secret or a public/private key pair. If the signature is not verified properly, an attacker can forge a token and gain unauthorized access.

2. **Token Storage**:
    
    - Store JWTs securely. Local storage is prone to XSS attacks. Cookies should be `HttpOnly` and `Secure`.

3. **Expiration**:
    
    - Ensure tokens have a reasonable expiration time (`exp` claim). Avoid long-lived tokens to minimize risk if a token is compromised.

4. **Algorithm Confusion**:
    
    - The `alg` field in the header indicates the algorithm used. If the server does not properly check this, attackers can exploit it by setting it to `none` or an unexpected algorithm.

---

# Pros and Cons of JWT

##### Pros
- **Stateless**: The server does not need to store session state, which makes JWTs scalable.
- **Decentralized**: Can be used for Single Sign-On (SSO) between multiple services.
- **Compact and Self-contained**: JWTs can carry all necessary information within themselves.

##### Cons
- **Token Size**: Larger than session IDs and can cause bandwidth issues.
- **Inflexibility**: Once issued, the token cannot be altered without being reissued, making it difficult to manage invalidation.
- **Security Risks**: Improper implementation can lead to vulnerabilities like forgery or token replay attacks.

---

# Best Practices

- Use short-lived JWTs and refresh tokens.
- Validate the `alg` parameter.
- Always check the token's `iss`, `aud`, and `exp` claims.
- Use HTTPS to transmit JWTs securely.
- Implement token revocation by maintaining a blacklist of invalidated tokens, especially for refresh tokens.


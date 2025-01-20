**Cryptography** is about the design and analysis of mathematical techniques that enable secure communications in the presence of malicious adversaries of attackers 

security goals of confidentiality, Integrity, and authentication related to data or information during communication. 
1. Confidentiality means keeping data secret from all but those authorized to see it—messages sent by sender to receiver should not be readable by attackers. 
	- e.g. the sender encrypts the plaintext using a key generating a ciphertext. The ciphertext is send through an insecure communication channel. The receiver deciphers the ciphertext to plaintext using the correct key. While the attacker may get the ciphertext but, as he/she does not have the correct key, he/she cannot get the plaintext. 
2. Data integrity ensures that data has not been altered by unauthorized means 
	- i.e. receiver should be able to detect when data sent by sender has been modified by attacker. 
3. Data origin authentication validates the source of data
	- receiver should be able to verify that data purportedly sent by sender indeed originated with the authentic sender. 

Cryptography helps us in achieving these security goals. Cryptography provides five key security services : 
1. Confidentiality
	- Confidentiality protects plain data from unauthorized access
	- confidentiality is provided by converting the plaintext into cipher text through encryption such that only the intended user with the correct key can have access to the plaintext while at rest or in transit
2. Integrity
	- Integrity is used to define the completeness of the data
	- *Hash Values* in cryptography helps in providing integrity of the data by making sure that the data is not modified from what was actually stored or what was actually stored or what was actually transmitted 
	- A hash value is a fixed length message
	- The hash value is sent along with the cipher message to check the integrity of the message sent by the sender 
3. Authentication
	- Authenticity is used to claim that the sender is indeed an authentic sender and not a hoax
	- Authenticity is provided through digital signature that is created using the private key of the sender
4. Non-repudiation
	- Non-repudiation helps in protecting against refusal by either the sender or the receiver 
	- helps in proving the origin of data sent by the sender or proof of delivery to the receiver if denied
5. Availability
	- Data has to be made available only to the authorized entity for any operation such as reading, writing or any update 

Cryptography can be understood using the cycle of plaintext, encryption, cipher text, and decryption. 
- **Plain text** is the information being transmitted in its raw form. 
- **Encryption** is the process of converting plain text into unintelligible data called cipher text, especially to prevent unauthorized access. 
- **Decryption** is generally the reverse process of encryption. It is the process of decoding the cipher text into plain text. 


Cryptography can be broadly divided into two categories 
1. symmetric key cryptography 
	- the sender and the receiver share the same key. 
	- The shared key is kept secret between the sender and the receiver only. 
	- Encryption and decryption operations are performed using the shared key. 
	- Few of the cryptographic algorithms using this technique are 
		- Data Encryption Standards (DES), 
		- Advanced Encryption Standards (AES) etc.
2. asymmetric key cryptography
	- aka public key cryptography
	- two types of keys are involved :
		1. a public key
		2. a private key
	- while more than one party such as a sender and a receiver involve in data transmission securely and separately,
		- they both announce their public keys to all and keep their private keys secret to themselves 
		- The sender encrypts the message using the public key of the receiver and the receiver decrypts the cipher message using his/her private key 
		- examples of algorithms using this type of encryption :
			- Rivest Shamir Adleman (RSA)
			- Elliptic Curve Cryptography (ECC)
based on the keys being used for encryption and decryption 

**NOTE :** Asymmetric key encryption does not ensure authentication, as anyone, with the public key of the receiver, can send the data to him 


Here are some differences between symmetric and asymmetric key cryptography :

| **Symmetric-Key cryptography**      | **Asymmetric-Key cryptography** |
| ----------------------------------- | ------------------------------- |
| based on sharing secrecy            | based on personal secrecy       |
| symbols are permuted or substituted | numbers are manipulated         |
Asymmetric and symmetric ciphers will exist in parallel and continue to serve the community. They are compliment of each other, the advantages of one can compensate for the disadvantages of other 

### Encoding vs Encryption
#### 1. Encoding*

**Purpose:**

- Encoding is used to **transform data** into a different format, primarily for compatibility, storage, or transmission purposes.
- It ensures that data is in a format that can be correctly interpreted by different systems, devices, or protocols.

**Characteristics:**

- **No Security Focus:** Encoding is **not meant for security**. The main goal is to ensure that the data is in a consistent format that can be understood by different systems.
- **Reversible Without a Key:** Anyone who knows the encoding scheme (e.g., Base64, URL encoding) can decode the information back to its original form.
- **Common Use Cases:** Data encoding for transmission over networks (e.g., converting binary data into ASCII for email), representing special characters in URLs, or encoding text in formats like UTF-8 or Base64.

**Example:**

- **Base64 Encoding:** Used to encode binary data into ASCII characters, commonly seen in email attachments or within JSON web tokens (JWTs).
    
    - Original: `Hello, World!`
    - Encoded (Base64): `SGVsbG8sIFdvcmxkIQ==`
- **URL Encoding:** Special characters in a URL (like spaces or `&`) are replaced with a percentage sign (`%`) followed by their hexadecimal value.
    
    - Original: `Hello World`
    - Encoded: `Hello%20World`

#### 2. Encryption

**Purpose:**

- Encryption is used to **protect data** by converting it into an unreadable format unless the correct decryption key is provided.
- The primary goal of encryption is **confidentiality**. It ensures that only authorized users with the correct decryption key can read the original data.

**Characteristics:**

- **Security-Focused:** Encryption is designed to make data **unreadable to unauthorized parties**. Even if someone intercepts encrypted data, they cannot understand it without the key.
- **Reversible With a Key:** Data can only be decrypted and turned back into its original form using a decryption key (or in some cases, the same key used for encryption, as in symmetric encryption).
- **Common Use Cases:** Securing sensitive information like passwords, banking data, communications, or files.

**Types of Encryption:**

- **Symmetric Encryption:** The same key is used for both encryption and decryption. Examples include AES (Advanced Encryption Standard) and DES (Data Encryption Standard).
- **Asymmetric Encryption:** Uses a pair of keys—one for encryption (public key) and one for decryption (private key). Examples include RSA and ECC.

**Example:**

- **AES Encryption:**
    - Original: `Hello, World!`
    - Encrypted (AES): `5f4dcc3b5aa765d61d8327deb882cf99` (encrypted output would be a binary or hex string, and it looks random).

#### Key Differences:

| **Aspect**          | **Encoding**                          | **Encryption**                        |
| ------------------- | ------------------------------------- | ------------------------------------- |
| **Primary Purpose** | Data transformation for compatibility | Data protection and confidentiality   |
| **Focus**           | Usability, compatibility              | Security, confidentiality             |
| **Reversibility**   | Easily reversible without a key       | Reversible only with a specific key   |
| **Security**        | No security provided                  | Provides security and confidentiality |
| **Common Use**      | Data transmission (e.g., Base64, URL) | Secure communication and data storage |

#### Analogies:

- **Encoding:** Like translating a book from one language to another, ensuring it can be understood by different readers. Anyone who knows the new language can read it.
- **Encryption:** Like locking the book in a safe. Only someone with the key to the safe can access the contents.

#### Additional Concepts:

- **Hashing:** Often confused with encryption, hashing is used to map data to a fixed-length value (like a "fingerprint"). Unlike encryption, it is **one-way** and cannot be reversed. Hashing is used for integrity verification (e.g., passwords, checksums).
- **Encoding + Encryption:** Sometimes, data is both encoded and encrypted. For example, encrypted binary data may be Base64-encoded to make it easier to transmit or store, but the encryption ensures security.

In summary, encoding is used to transform data into a different format for usability, while encryption is used to secure data and ensure confidentiality.


---

## Data Integrity
- it requires that the receiver should get the data that is being transmitted without any change, and if any change has been made to the data, it should be detectable, while received on the receiver end 
there are occasions where we may not even need secrecy but instead must have integrity such as notice issued by the district magistrate to all the schools, regarding holiday on a particular day need to be unchanged but not secret 

- *Hash Functions* play a very important role in ensuring data integrity 
	- It is a function H that accepts a variable-length block of data as input and produces a *fixed-size hash value* 
	- It is a *compression function*, which means that it takes large blocks of data and outputs smaller size data blocks 
	- A "good" hash function has the property that the results of applying the function to a large set of inputs will produce outputs that are 
		- evenly distributed and 
		- apparently random
	- Hash functions are one-way also, therefore it is hard to find the message from the given hash value. 
	Message ‘M’ is encrypted with encryption algorithm ‘E’ resulting in cipher text ‘C’. Hash function ‘H’ has been applied on this cipher text ‘C’ to get fixed size of Hash Code *‘HC’* also known as *digest*. After this the Cipher-text and Hash code are sent to receiver through un-secure channel. Receiver applies Hash function ‘H’ on 'C' to get fixed size of Hash Code ‘HC’ again. This hash code is compared to the received hash code and if found matching, then there is no alteration/modification of message in between and the message is accepted and decrypted using Decryption algorithm. If not found matching, the message is discarded.
if confidentiality is not required the encryption and decryption steps can be avoided 

## Message authentication
or *data origin authentication*, a very important security characteristics, ensures that the message has been received from a legitimate sender, not an adversary

To ensure the integrity of the  message and the data origin authentication i.e. the legitimate sender is the originator of the message, not somebody else, we need to include a secret held by the sender (that is not possessed by the adversary); 
1. MAC and 
2. digital signature 
	are two very popular techniques for ensuring message authentication.
- **Message Authentication Code (MAC)**
	- it is used for ensuring data origin authentication 
	- it provides message integrity and message authentication using a combination of a hash function and a secret key
	- The process can be understood as follows :
		Message ‘M’ is encrypted with encryption algorithm ‘E’ resulting in cipher text ‘C’. Hash function ‘H’ has been applied on this cipher text ‘C’ , along with a secret key possessed by the sender and receiver both ,to get fixed size of Hash Code ‘HC’ also known as MAC or Message Authentication code. After this the Cipher-text and MAC are sent to receiver through unsecure channel. Receiver applies Hash function ‘H’, along with the key on ‘C' to get MAC again. This MAC is compared to the received MAC and if found matching, then there is no alteration/modification of message, and it has been received from the legitimate sender. The message is accepted and decrypted using Decryption algorithm. If not found matching, the message is discarded. If confidentiality is not required, the encryption and decryption steps can be avoided.
- **Digital Signature**
	- It is another way of providing message integrity and authentication ( and some more security services )
	- A MAC uses a secret key to protect the digest; a digital signature uses a pair of private-public keys 
	- the process of signing and verifying a document using digital signature can be described as follows :
		On sender side a hash to compress the message is generated , which is signed using a signing algorithm(equivalent to the encryption process of public key cryptography) and sender’s private key. the signature is appended to the message and sent to the receiver. on receiver side, the signature is verified using verification algorithm (equivalent to the decryption process of public key cryptography) and the public key of the sender. The hash at receiver side is recalculated using the received message and compared with the received hash during the verification process. If both hashes match, then the message is authenticated, otherwise, it is discarded.
	- Here are some differences between digital signatures and pen-based physical signatures known as manual signatures. 
		- The manual signatures are done inside the document to be authenticated while the digital signatures are appended to the document after creation. 
		- The manual signatures are verified by carefully watching, while digital signatures are verified using mathematical computations. 
		- The same manual signature can be used with multiple documents, while one digital signature cannot be used with multiple documents. *It is unique for each document*. 
		- Manual signatures can be duplicated, but digital signatures cannot be duplicated.

## Digital Certification
A digital certificate is a digital file that certifies the identity, a public key of an individual or institution seeking access to computer-based information.
- it is issued by a *certification authority (CA)*
- it serves the purpose as a driver's license or a passport 
- The purpose of a digital certificate is to securely distribute public keys for protecting them from various online frauds 

Digital certificates 
- also known as public key certificates 
- allows key exchange without real-time access to public-key authority 
- It binds an identity to a public key usually with other info such as period of validity, rights of use, etc.
- the CA signs the certificate with its own private key to approve that the public key mentioned in the certificate, officially belongs to the holder 
- with all the contents *signed* by a trusted public-key authority or certification authority, it can be verified by anyone who knows the public key authorities public-key
- Usually all modern web browsers have the public keys of the certifying authorities 
- The certifying authorities issue digital certificates and validate holder's identity and authority by embedding an individual or institution's public-key along with other identifying information into each digital certificate and cryptographically signing it as a tamper-proof seal verifying the integrity of the data within it and validating its use 

Some of the authorized certifying authorities authorized by the controller of certifying authorities, government of INDIA are 
- NIC
- IDRBT
- Safe scipt
- E-Mudra
	etc.

The signed certificates by CA contains 
- its version number
- serial number
- issuer name
- subject name
- public key 
	etc.

here the process of getting a digital certificate issued is described :
- The user(Bob here) creates a key pair using the public key cryptography algorithm and applies for the digital certificate to the Certifying authority by providing the public key and other supporting information and documents. 
- The certifying authority verifies the user’s information and creates the certificate by digitally signing it with its private key. 
- The CA also updates its database with the identity and key pair of the user. 
- After creation, the certificate is ready to be distributed to the public. 
- Anyone having the public key of the CA can verify the certificate and use the public key given in the certificate for communicating with the user.

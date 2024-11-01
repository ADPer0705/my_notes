It is not enough in the modern cyber prone times to provide cyber security just at the application layer. The **IP sec** is a collection of protocols designed by the *Internet Engineering Task Force (IETF)* to provide security for a packet at the network level. 
- IPSec helps create authenticated and confidential packets for the IP layer

IPSec may operate in two different modes :
1. Tunnel mode 
	- is used for securing the payload of IP packets that is the data coming form transport layer 
2. Transport mode
	- protects the complete IP packet including the header 

IPSec is the collection of two security protocols :
1. Authentication Header Protocol
2. Encapsulated Security Protocol
for providing a different set of security features to the application

Here is the difference between the AH and ESP protocols. 
- AH provides 
	- Access Control, 
	- Message authentication, 
	- entity authentication and 
	- protection from replay attacks, 
while ESP provides confidentiality in addition to all the protections provided by AH.

#### Difference Between PGP and S/MIME
PGP is an open source software package that is designed for securing emails. Phil Zimmerman developed it. This protocol takes multiple steps to secure the email. These steps include encryption, ensuring Authentication, Compression, Segmentation, Reassembly. Whereas, S/MIME is a security-enhanced version of Multipurpose Internet Mail Extension (MIME). This protocol also uses public key cryptography for digital sign, encrypt or decrypt the email. User acquires a public-private key pair from a trusted authority and then makes appropriate use of those keys with email applications.

PGP is designed for securing plain text emails. While S/MIME is designed to process emails with many multimedia files.

PGP depends on user key exchange validated by other users in a group. Whereas S/MIME relies on a hierarchically valid certificate for a key exchange, provided by a third party. PGP is less costly as compared to S/MIME. While S/MIME is comparatively expensive.

PGP is good for personal as well as official use. While S/MIME is good for industrial use.

PGP recognizes X.509 certificates. It includes, The PGP version number which identifies the version of PGP, The certificate holder's public key, The certificate holder's information such as “identity" of the user, It also includes The digital signature of the certificate owner — also called a self-signature, The certificate's validity period which defining the certificate's start date/ time and expiration date/ time; The preferred symmetric encryption algorithm for the key — indicating the encryption algorithm to which the certificate owner prefers to have information encrypted. The supported algorithms for encryption are are CAST, IDEA, or Triple-DES. S/MIME is derived from the PKCS#7 data format for the messages and the X.509v3 format for certificates.

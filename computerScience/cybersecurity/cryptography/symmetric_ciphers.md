The symmetric key cryptography algorithms are of two types based on the unit being encrypted 
- first one is the traditional ciphers which are *character-oriented ciphers* 
- the second one is the modern *ciphers which works based on bits or blocks of bits* 

Traditional Ciphers are widely categorized as *substitution ciphers* and *transposition ciphers* 
In substitution ciphers, 
- the symbols in the plain-text are replaced by another symbol to generate the cipher-text 
- The substitution cipher may be mono-alphabetic or poly-alphabetic 
- The relationship between the symbol in the plain-text to the symbol in the cipher-text is 
	- one-to-one in mono-alphabetic
	- one-to-many in poly-alphabetic 
In Transposition Ciphers 
- the overall data remains the same, but the positions of the plain-text are changed 

It may be noted here that encryption algorithms are also known as ciphers 

the following are some of the popular traditional ciphers :
- **The additive cipher**
	- a mono-alphabetic substitution cipher 
	- here the letters of the alphabet are shifted a certain number but remain in the same order 
	- The number in which the alphabet is shifted is called a key 
	- ![[Screenshot from 2024-06-02 22-00-44.png]]
- **The poly-alphabetic substitution** 
	- each occurrence of a character may have a different substitution 
	- The relationship between a character in the plain-text to a character in the cipher-text is one to many
	- For example, “a” could be enciphered as” D” in the beginning of the text, but “N” at the middle. 
	- Example ciphers : 
		- Autokey Cipher, 
		- Playfair cipher, 
		- vigenere cipher
			- It uses a table of alphabets for encryption and decryption purposes, as shown. 
			- During encryption, the plain text is divided among blocks of characters with lengths equal to that of the key. Here the key is FROGFR with a length of 6 characters. 
			- To create the cipher text, the intersection points of the column corresponding to the key character and the row corresponding to the plaintext character is considered. Such as the intersection point for S and F is X, for Q and R is H, etc.
			- ![[Screenshot from 2024-06-02 22-00-44 1.png]]
- **Transposition Cipher**
	- symmetric cipher 
	- reorders symbols. The overall symbol doesn't change only the position changes 
	- It can be a keyless or keyed transposition 
	- ![[Screenshot from 2024-06-02 22-10-12.png]]
	- *Keyed transposition* 
		- ![[Screenshot from 2024-06-02 22-17-17.png]]
		- In keyed transposition, the plaintext is divided into predetermined blocks and a permutation key string is used to permute the characters in each block. 
		- The plaintext is divided into blocks of size as 5. Extra padding is done if the block is not completely filled. For ZONE, the block is not completely filled, and Z is padded.
		- Based on the key, the plaintext ENEMY is permuted. When Key value is 3, the alphabet E(3rd character) is placed at 1st position of the ciphertext. When Key value is 1, the alphabet E(1st character) is placed at 2nd position of the ciphertext. When Key value is 4, the alphabet M(4th character) is placed at 3rd position of the ciphertext. When Key value is 5, the alphabet Y(5th character) is placed at 4th position of the ciphertext. When Key value is 2, the alphabet N(2nd character) is placed at 5th position of the ciphertext. 
		- So, for the plaintext "ENEMY", the ciphertext is "EEMYN. Similarly for plaintext block ZONE, the cipher text is NZEZO using keyed transposition cipher.

The traditional symmetric-key ciphers that we have studied so far are character-oriented ciphers. With the advent of the computers we need bit oriented ciphers. This is because the information to be encrypted is not just text; it can also consist of numbers, graphics, audio, and video data. It is convenient to convert these types of data into a stream of bits, to encrypt the steam, and then to send the encrypted steam.
A modern cipher can be either 
- block cipher 
- stream cipher

- **DES, the Data Encryption Standard** 
	- It is a symmetric key cipher that follows the *Feistel Network structure*( in which the encryption and decryption algorithms are the same). 
	- In DES, the input plain text size is 64 bits, and the output cipher text size is 64 bits. The key size is 64, Number of rounds is 16, with an F function in each round. 
	- In 1990’s the cracking of DES algorithm became possible. A replacement for DES was needed for modern symmetric-key block cipher. 
- **AES or Advanced Encryption Standard algorithm** 
	- emerged for better security, computational efficiency and flexibility in implementation. 
	- It is *symmetric block cipher*. 
	- The inputs are given as blocks of 128 bits. 
	- AES supports variable number of rounds. Based on the number of rounds involved, the cipher key size differs. 
		- If the number of rounds is 10, the key size is 128 bits. Similarly for 12 and 14 rounds the key sizes are 192 and 256 respectively. 
	- The plain text gets transform to cipher-text after passing through the pre-round transformation and all the rounds. 
	- In each round, four types are operations are performed Substitute Bytes, Shift Rows, Mix Columns and Add Round Key. 
	- The final cipher text is sent to the receiver. The receiver deciphers the plain-text using the same cipher key and the same operations are performed to decipher the cipher text.

- **RSA**
	- developed in 1977 by Ron Rivest, Adi Shamir, and Len Adleman at MIT
	- It is a public key cryptographic algorithm 
	- The strength of RSA lies in the *in-integer factorization problem* 
		- It we are given n, which is the product of two large primes, it is very difficult to factorize n into p * q
	- A pair of keys comprising of public key and the private key is used by the RSA algorithm.
	- Public key is available to all, while private key is kept secretly by the receiver 
	- Suppose a sender wants to send some message M, M<n, secretly to the receiver using RSA cryptosystem. 
		- Sender computes 𝐶=𝑀^𝑒 𝑚𝑜𝑑 𝑛 and sends C to the receiver, where e is the public key of the receiver. 
		- On receiving C from the sender, the receiver decrypts C to M using his/her private key d. using formula M= 𝐶^𝑑 𝑚𝑜𝑑 𝑛. the key generation process is also straight forward
- **Elliptical Curve Cryptography (ECC)**
	- The Elliptic Curve Cryptography (ECC) is *modern family of public-key cryptosystems*, which is  *based on the difficulty of the Elliptic Curve Discrete Logarithm Problem (ECDLP)*.
	- ECC implements all major capabilities of the asymmetric cryptosystems: 
		- encryption, 
		- signatures and 
		- key exchange. 
	- It’s simply stronger than RSA for key sizes in use today. 
		- The typical ECC key size of 256 bits is equivalent to a 3072-bit RSA key and 10,000 times stronger than a 2048-bit RSA key. 
		- The elliptic curve equation is given by Ep. In order to perform mathematical operation in ECC, three types of operations, 
			- point addition, 
			- point doubling and 
			- point subtraction 
		needs to be known. 
	- Given the points P(x1, y1) and Q(x2, y2) in an elliptic curve, how to find point R(x3, y3) during point addition or point subtraction is given. 
	- Point subtraction of P(x1, y1) and Q(x2, y2) is performed using the rule of point addition after the y2 coordinate is negated.


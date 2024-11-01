# CIA Triad
#cia 
- Confidentiality
- Integrity
- Availability

Beyond CIA :
- Authenticity
	- non-fraudulent or counterfiet
- Non-Repudiation

## Parkerian Hexad
A set of six security elements : 
1. Availability
2. Utility
3. Integrity
4. Authenticity
5. Confidentiality
6. Possession

# DAD : The not-CIA 
#dad
- Disclosure
- Alteration
- Destruction/Denial

---

There are three foundational security models : 
- Bell-LaPadula model
- The Biba Integrity Model
- The Clark-Wilson Model

# Bell-LaPadula Model
aims to achieving *confidentiality* by specifying three rules : 
- **Simple Security Property**
	- referred to as "no read up"
	- a subject at a lower security level cannot read an object at a higher security level
	- prevents access to sensitive information above the authorized level
- **Star Security Property**
	- This property is referred to as "no write down"
	- a subject at a higher security level cannot write down to an object at a lower security level 
	- prevents disclosure of sensitive information to a subject of lower security level
- **Discretionary-Security Property**
	- uses an access matrix to allow read-write operations 

The first two properties can be summarized as "write up, read down"
- you can share confidential information with people of higher security clearance (write up), and you can receive confidential information from people with lower security clearance 

Limitations
- not designed to handle file sharing 

# Biba Model
The Biba Model aims to achieve *integrity* by specifying two main rules : 
- **The Simple Integrity Property**
	- referred to as "no read down"
	- a higher integrity subject should not read from a lower integrity object 
- Star Integrity Property
	- referred to as "no write up"
	- a lower integrity subject should not write to a higher integrity object 

These two properties can be summarized as "read up, write down"
- in contrast to the Bell-LaPadula model, but it should not be surprising as one deals with confidentiality and the other deals with integrity 

Limitations :
- it does not handle internal threats (insider threats)

# Clark-Wilson Model
aims to achieve *integrity* by using the following steps : 
- **Constrained Data Item (CDI)**
	- refers to data types whose integrity we want to preserve 
- **Unconstrained Data Items (UDI)**
	- refers to all data types beyond CDI, such as user and system input
- **Transformation Procedures (TPs)**
	- These procedures are programmed operations, such as read and write, and should maintain the integrity of CDIs
- **Integrity Verification Procedures (IVPs)**
	- These procedures check and ensure the validity of CDIs


There are many more additional models such as : 
- Brewer and Nash Model
- Goguen-Meseguer Model
- Sutherland Model
- Graham-Denning Model
- Harrison-Ruzzo-Ullman Model

---

# ISO/IEC 19249
ISO => The international Organization for Standardization (ISO)
IEC => The International Electrotechnical Commission (IEC)

*ISO/IEC 19249:2017 Information technology - Security techniques - Catalogue of architectural and design principles for secure products, systems and applications*

It lists five architectural principles : 
1. Domain Separation
2. Layering
3. Encapsulation
4. Redundancy
5. Virtualization

and it teaches five design principles :
1. Least Privilege
2. Attack Surface Minimization
3. Centralized Parameter Validation
4. Centralized General Security Services
5. Preparing for Error and Exception Handling

---

# Zero Trust versus Trust but Verify

## Trust but Verify
- in reality it is not feasible to verify everything
- This requires automated security mechanisms, such as proxy, intrusion detection, and intrusion prevention systems

## Zero Trust
- this principle treats trust as a vulnerability, and consequently, it caters to insider-related threats
- "never trust, always verify" 
- every entity is considered adversarial until proven otherwise. Zero trust does not grant trust to a device based on its location or ownership
- Micro-segmentation is one of the implementations used for zero trust

---

# Threat vs Risk
#### Vulnerability : 
- susceptible to attack or damage 
- in information security, vulnerability is a weakness 

#### Threat
- A threat is a potential danger associated with this weakness or vulnerability 

#### Risk
- concerned with the likelihood of a threat actor exploiting a vulnerability and the consequent impact on the business 
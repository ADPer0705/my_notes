# The CIA Triad
- **Confidentiality, Integrity and Availability**
- *Confidentiality* relates to permitting authorized access to information while at the same time protecting information from improper disclosure
- *Integrity* is the property of information whereby it is used and maintained in a way that ensures its completeness, accuracy, internal consistency and usefulness for a stated purpose
- *Availability* means that system and data are accessible at the time users need them

## Confidentiality 

The national institute of Standards, NIST, in it's special publication 800-66 defines confidentiality as the characteristic of data or information when it is not made available or disclosed to unauthorized persons or processes
 
when many systems are guests, it is difficult to make sure that none of them are accessing through compromised means, while granting access to the authorized devices 

"the security professional’s obligation is to regulate access—protect the data that needs protection, yet permit access to authorized individuals"

- *Personally Identifiable Information (PII)*
	- It pertains to any data about an individual that could be used to identify them 
		1. any information that can be used to distinguish or trace an individual's identity, such as name, social security number, date and place of birth, mother's maiden name, or bio-metrics records; and 
		2. any other information that is linked or linkable to an individual, such as medical, educational, financial and employment information 
	NIST SP800-122
	- at times, a collection of information might be considered a PII but the individual elements might not be, for example date of birth.
- *Protected Health Information (PHI)*
	- Info regarding one's health status
	- Information regarding health status, the provision of healthcare or payment for healthcare as defined in HIPAA (Health Insurance Portability and Accountability Act)
- *Classified or sensitive information*
	- Information that has been determined to require protection against unauthorized disclosure and is marked to indicate its classified status and classification level when in documentary form
	- includes trade secrets, intellectual property, etc

*Sensitivity*
- it is a measure of importance assigned to info by its owner, for the purpose of denoting its need for protection (NIST SP800-60 vol 1 rev 1)
- If improperly disclosed or modified it may cause harm 

## Integrity
measures the degree to which something is whole or complete, internally consistent and correct 

The concept of integrity applies to 
- information or data
- systems and process for business operations 
- organisations 
- people and their actions

*Data Integrity*
- The property that data has not been altered in an unauthorized manner. Data integrity covers data in storage, during processing and while in transit. (NIST SP800-27 Rev A)
- it is to be made sure that the data is recorded, used and maintained in such a way that ensures its completeness 
- data integrity covers data in storage, during processing and while in transit 
- info should be accurate, internally consistent across all related systems and still useful for a stated purpose
- consistency as a part of data integrity, required that all instances of the data be identical in form, content and meaning 

*System Integrity*
- The quality that a system has when it performs in an unimpaired manner, free from unauthorized manipulation of the system, whether intentional or accidental. (NIST SP800-27 Rev A)
- refers to maintenance of a known good configuration and expected operational function as the system processes the information 
- Ensuring integrity begins with an awareness of *state*, which is the current condition of the system
- specifically concerns the ability to document and understand the state of data or a system at a certain point, creating a baseline
- *baseline* can refer to the current state of information - whether it is protected or not
	- A documented, lowest level of security configuration allowed by a standard or organisation.

Going forward from the baseline, the integrity can always be ascertained by comparing the baseline with the current state. Integrity is a primary factor in the reliability of information and systems, and it's need is often dictated not by law but by the need of the organisation to access reliable, accurate information 

## Availability 
It is ensuring timely and reliable access to and use of information by authorized users.
defined as 
- timely reliable access to information and the ability to use it 
- for authorized users only, maintaining the integrity of the system and the data 

The core concept of availability is that data is accessible to authorized users when and where it is needed and in the form and format required 

This doesn't imply the availability of the data 100% of the time, instead having the system and the data meet the requirements of the business for timely and reliable access

some systems and data are far more critical than others, so the security professional must ensure that the appropriate levels of availability are provided 

Availability is often associated with the term *criticality*, as it represents the importance the organisation gives to the data or an information system in performing its operations. Criticality is the measure of the degree to which an organisation depends on the information or information system for the success of a mission or of a business function (NIST SP800-60 Vol 1 Rev 1)

## Summary
in most of the cyber attacks, one of the three triads is hampered with 
- data leaks affects the confidentiality 
- data tampering affects integrity
- ransomware, denial of service, etc. affects availability

---
# Authentication
The process of verifying or proving the user's identification is known as *authentication*.
It is the act of identifying or verifying the eligibility of a station, originator, or individual to access specific categories of information. Typically, a measure designed to protect against fraudulent transmission by establishing the validity of a transmission message, station or originator 

There are three common **factors** of identification
- something you know 
	- passwords and phrases 
	- *PIN* => a personal identification number 
- something you have 
	- *tokens*, memory cards, smart cards 
	- A Token, is a physical object a user possesses and controls that is used to authenticate the user's identity. (NISTIR 7711)
- something you are 
	- *Bio-metrics*, measurable characteristics 
	- Bio-metrics are biological characteristics of an individual, such as a fingerprint, hand geometry, voice, or iris patterns.

## Types of Authentication
There are two *methods* of authentication
- *single-factor authentication (SFA)*
	- use of just one of the three available factors (something you know, something you have, something you are) to carry out the authentication process being requested
- *multi-factor authentication (MFA)*
	- common best practice
	- Using two or more of the distinct instances of the three factors of authentication (something you know, something you have, something you are) for identification purposes

knowledge based identification is often prone to a variety of attacks. e.g. the help-desk  might receive a call to reset a user password, with the challenge being to ensure that the password is reset only for the correct user. For better security, a second or third form of authentication that is based on either a token or a characteristic would be required prior to resetting the password.

*note* : The combined use of a user Id and a password consists of two things that are both forms of knowledge based identification, and since it does not meet the requirements of using *two or more* **methods** of identification, it is not considered MFA. 

## Non-repudiation
The inability to deny taking an action such as creating information, approving information and sending or receiving a message.

*Non-repudiation* is a legal term and is defined as the protection against and individual falsely denying having performed a particular action.

In today’s world of e-commerce and electronic transactions, there are opportunities for the impersonation of others or denial of an action, such as making a purchase online and later denying it. It is important that all participants trust online transactions. Non-repudiation methodologies ensure that people are held responsible for transactions they conducted. 

---

# Privacy

*Privacy* is the right of an individual to control the distribution of information about themselves.

while security and privacy both focus on the protection of data, i.e. confidentiality, there is a difference between them. With the increasing rate at which data is collected and digitally stored across all industries, the push for privacy legislation and compliance with existing policies steadily grows. In today’s global economy, privacy legislation and regulations on privacy and data protection can impact corporations and industries regardless of physical location. Global privacy is an especially crucial issue when considering requirements regarding the collection and security of personal information. An example of a law with multinational implications if the European Union's *General Data Protection Regulation (GDPR)* which applies to all organisations, foreign or domestic, doing business in EU or any persons in EU. These and other laws, including national- and state- level practices, dictate that any entity anywhere in the world handling the private data or people in a particular legal jurisdiction must abide by its privacy requirements. As a member of an organization's data protection team, you will not be required to interpret these laws, but you will need an understanding of how they apply to your organization.

- HIPPA
- GDPR

---
**Authorization** The right or a permission that is granted to a system entity to access a system resource 
**Integrity** The property that data has not been altered in an unauthorized manner
**Confidentiality** The characteristic of data or information when it is not made available or disclosed to unauthorized persons or processes 
**Privacy** The right of an individual to control the distribution of information about themselves
**Availability** Ensuring timely and reliable access to and use of information by authorized users
**Non-repudiation** The inability to deny taking an action, such as sending an email message
**Authentication** Access control process that compares one or more factors of identification to validate that the identity claimed by a user or entity is known to the system

---

# Protecting Information 
As security professionals, we protect the information by using the three of the CIA Triad

The CIA triad is the cornerstone of information security, and as a security professional you will use all its components—confidentiality, integrity, and availability—to protect the information in your charge. Think of it as a three-dimensional way of thinking. There are many different aspects to protecting information and the more you think about it, the more you realize how complex it can be.


# Incident Terminology
When things go wrong, security professional also play the role of the first responders. 
- **Breach** : The loss of control, compromise, unauthorized disclosure, unauthorized acquisition, or any similar occurrence where: a person other than an authorized user accesses or potentially accesses personally identifiable information; or an authorized user accesses personally identifiable information for other than an authorized purpose. NIST SP 800-53 Rev. 5
- **Event** : Any observable occurrence in a network or system. NIST SP 800-61 Rev 2
- **Exploit** : A particular attack. It is named this way because these attacks exploit system vulnerabilities
- **Incident** : An event that actually or potentially jeopardizes the confidentiality, integrity or availability of an information system or the information the system processes, stores or transmits
- **Intrusion** : A security event, or combination of events, that constitutes a deliberate security incident in which an intruder gains, or attempts to gain, access to a system or system resource without authorization. IETF RFC 4949 Ver 2
- **Threat** : Any circumstance or event with the potential to adversely impact organizational operations (including mission, functions, image or reputation), organizational assets, individuals, other organizations or the nation through an information system via unauthorized access, destruction, disclosure, modification of information and/or denial of service. NIST SP 800-30 Rev 1
- **Vulnerability** : Weakness in an information system, system security procedures, internal controls or implementation that could be exploited by a threat source. NIST SP 800-30 Rev 1
- **Zero Day** : A previously unknown system vulnerability with the potential of exploitation without risk of detection or prevention because it does not, in general, fit recognized patterns, signatures or methods

# The Goal of Incident Response 
*Adverse Events* are events with a negative consequence such as system crashes, network packet floods, unauthorized use of system privileges, defacement of a web page or execution of malicious code that destroys data 

The priority of any incident response is to protect life, health and safety. When any decision related to priorities is to be made, always choose safety first 

The primary goal of incident response is to be prepared, which requires having a policy and a response plan that will lead the organisation through the crisis. Some organisations use the word *crisis management* to describe the process 

An event is any measurable occurrence, and most events are harmless. If the event has the potential to disrupt the business's mission, then it is called and *Incident*

An *Incident Response Plan* is the documentation of a predetermined set of instructions or procedures to detect, respond to and limit consequences of a malicious cyber-attack against an organisation's information systems (NIST SP 800-34 Rev 1).

The incident response process is aimed at reducing the impact of an incident so the organisation can resume the interrupted operations as soon as possible. Note that incident response planning is a subset of the greater discipline of *business continuity management (BMC)* 

# Components of Incident Response Plan
The incident policy should reference an incident response plan that all employees will follow, depending on their roles in the process. It is a living representation of an organization’s incident response policy

The organization’s vision, strategy and mission should shape the incident response process. Procedures to implement the plan should define the technical processes, techniques, checklists and other tools that teams will use when responding to an incident

![[Screenshot from 2024-04-04 13-22-23.png|450]]

- **Preparation**
	- Develop a policy approved by management 
	- Identify critical data and systems, single points of failure
	- Train staff on incident response 
	- Implement an incident response team (covered in subsequent topic)
	- Practice Incident Identification (First Response) 
	- Identify Roles and Responsibilities 
	- Plan the coordination of communication between stakeholders 
		- Consider the possibility that a primary method of communication may not be available 
- **Detection and Analysis**
	- Monitor all possible attack vectors 
	- Analyze incident using known data and threat intelligence 
	- Prioritize incident response 
	- Standardize incident documentation 
- **Contaminant, Eradication and Recovery** 
	- Gather evidence 
	- Choose an appropriate contaminant strategy
	- Identify the attacker
	- Isolate the attack 
- **Post-Incident Activity** 
	- Identify evidences that may need to be retained 
	- Document lessons learned 

# Incident Response Team 
A *Security Operations Center (SOC)* is a centralized organisational function fulfilled by an information security team, that monitors, detects, and analyzes events on the network or system to prevent and resolve issues before they result in business disruptions 

Along with the organisational need to establish a SOC is the need to create a suitable incident response team.

Many IT professionals are classified as first responders for incident. They are the first ones on the scene and know how to differentiate typical IT problems from security incidents.

Similarly, IT professionals need specific training so they can determine the difference between a typical problem that needs troubleshooting and a security incident that they need to report and address at a higher level.

A typical incident response team is a cross-functional group of individuals who represent the management, technical and functional areas of responsibility most directly impacted by a security incident. Potential team members include the following 
- Representative(s) of senior management
- Information security professionals
- Legal representatives
- Public affairs/communications representatives
- Engineering representatives (system and network)
Typically team members assist with investigating the incident, assessing the damage, collecting evidence, reporting the incident and initiating recovery procedures. They would also participate in the remediation and lessons learned stages and help with root cause analysis

Many organizations have a dedicated team responsible for investigating any computer security incidents ,commonly known as *computer incident response teams (CIRTs)* or *computer security incident response teams (CSIRTs)*. When an incident occurs, the response team has four primary responsibilities:

- Determine the amount and scope of damage caused by the incident.
- Determine whether any confidential information was compromised during the incident.
- Implement any necessary recovery procedures to restore security and recover from incident-related damage.
- Supervise the implementation of any additional security measures necessary to improve security and prevent recurrence of the incident.
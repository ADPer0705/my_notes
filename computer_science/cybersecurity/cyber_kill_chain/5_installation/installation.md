A backdoor lets and attacker bypass security measures and hide all the access. A backdoor is also known as an access point

Once the attacker gets access to the system, he would want to reaccess the system if he loses the connection to it or if he got detected and got the initial access removed, or if the system is later patched. He will no longer have access to it. That is when the attacker needs to install a **[persistent backdoor](https://www.offensive-security.com/metasploit-unleashed/persistent-backdoors/).** A persistent backdoor will let the attacker access the system he compromised in the past

The persistence can be achieved through : 
- installing  a web shell on the web-server
- installing a backdoor on the victim's machine
	- For example, the attacker can use [Meterpreter](https://www.offensive-security.com/metasploit-unleashed/meterpreter-backdoor/) to install a backdoor on the victim's machine
	  
- Creating or modifying OS services
- Adding the entry to the "run keys" for the malicious payload in the Registry or the Startup Folder
- the attacker can also use the **[Timestomping](https://attack.mitre.org/techniques/T1070/006/)** technique to avoid detection and also make malware appear as a part of a legitimate program.
	- this technique lets attacker modify the file's timestamps, including the modify, access, create and change times
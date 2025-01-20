# Configuration Management Overview


> [!NOTE] Configuration Management
> A process and discipline used to ensure that the only changes made to a system are those that have been authorized and validated

It is both a decision-making process and a set of control processes. 
the basic configuration management process includes components such as 
- identification
	- Baseline identification of a system and all its components, interfaces and documentation
- baselines 
	- A security baseline is a minimum level of protection that can be used as a reference point. 
	- Baselines provide a way to ensure that updates to technology and architectures are subjected to the minimum understood and acceptable level of security requirements.
- Change Control
	- An update process for requesting changes to a baseline, by means of making changes to one or more components in that baseline. 
	- A review and approval process for all changes. 
	- This includes updates and patches.
- Verification and Audit
	- A regression and validation process, which may involve testing and analysis, to verify that nothing in the system was broken by a newly applied set of changes. 
	- An audit process can validate that the currently in-use baseline matches the sum total of its initial baseline plus all approved changes applied in sequence.

Effective use of configuration management gives systems owners, operators, support teams and security professionals another important set of tools they can use to monitor and oversee the configuration of the devices, networks, applications and projects of the organization. 
- An organization may mandate the configuration of equipment through standards and baselines. 
	- The use of standards and baselines can ensure that network devices, software, hardware and endpoint devices are configured in a consistent way and that all such devices are compliant with the security baseline established for the organization. 
- If a device is found that is not compliant with the security baseline, it may be disabled or isolated into a quarantine area until it can be checked and updated.

### Inventory
Making an inventory, catalog or registry of all the information assets that the organization is aware of (whether they already exist, or there’s a wish list or need to create or acquire them) is the first step in any asset management process. It requires that we locate and identify all assets of interest, including (and especially) the information assets:

You can’t protect what you don’t know you have.

It becomes even more challenging to keep that inventory, and its health and status with respect to updates and patches, consistent and current, day in and day out. It is, in fact, quite challenging to identify every physical host and endpoint, let alone gather the data from them all.

### Baseline
The baseline is a total inventory of all the system’s components, hardware, software, data, administrative controls, documentation and user instructions.

Once controls are in place to mitigate risks, the baselines can be referenced. All further comparisons and development are measured against the baselines.

When protecting assets, baselines can be particularly helpful in achieving a minimal protection level of those assets based on value. Remember, 
- if assets have been classified based on value, and meaningful baselines have been established for each of the classification levels, we can conform to the minimum levels required. 
- In other words, if classifications such as high, medium and low are being used, baselines could be developed for each of our classifications and provide that minimum level of security required for each.

### Updates
Repairs, maintenance actions and updates are frequently required on almost all levels of systems elements. 
- Such modifications must be acceptance tested to verify that newly installed (or repaired) functionality works as required. 
- They must also be regression tested to verify that the modifications did not introduce other erroneous or unexpected behaviors in the system. 
- Ongoing security assessment and evaluation testing evaluates whether the same system that passed acceptance testing is still secure.

### Patches

> [!NOTE] Patch Management
> The systematic notification, identification, deployment, installation and verification of operating system and application software code revisions. These revisions are known as patches, hot fixes, and service packs. Source CNSSI 4009


> [!NOTE] Patch
> A software component that, when installed, directly modifies files or device settings related to a different software component without changing the version number or release details for the related software component. Source : ISO/IEC 19770-2

Patch management mostly applies to software and hardware devices that are subject to regular modification. 
- A patch is an update, upgrade or modification to a system or component. 
- These patches may be needed to address a vulnerability or to improve functionality. 
- The challenge for the security professional is maintaining all patches, since they can come at irregular intervals from many different vendors. 
- Some patches are critical and should be deployed quickly, while others may not be as critical but should still be deployed because subsequent patches may be dependent on them. 
- Standards such as the PCI DSS require organizations to deploy security patches within a certain time frame.

There are some issues with the use of patches. 
- Many organizations have been affected by a flawed patch from a reputable vendor that affected system functionality. Therefore, an organization should test the patch before rolling it out across the organization. 
- This is often complicated by the lack of a testing environment that matches the production environment. Few organizations have the budget to maintain a test environment that is an exact copy of production. 
- There is always a risk that the testing will not always be able to test everything, and problems may appear in production that were not apparent in the test environment. To the extent possible, patches should be tested to ensure they will work correctly in production.

If the patch does not work or has unacceptable effects, it might be necessary to roll back to a previous (pre-patch) state. Typically, the criteria for rollback are previously documented and would automatically be performed when the rollback criteria were met.

Many vendors offer a patch management solution for their products. 
- These systems often have certain automated processes, or unattended updates, that allow the patching of systems without interaction from the administrator. 
- The risk of using unattended patching should be weighed against the risk of having unpatched systems in the organization’s network. 
- Unattended (or automated) patching might result in unscheduled outages as production systems are taken offline or rebooted as part of the patch process
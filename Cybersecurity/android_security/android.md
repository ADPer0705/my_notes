- android is the most popular and commonly used mobile operating system 
- It is based on a modified version of the linux kernel and other open-source software, primarily designed for touchscreen mobile devices such as smartphones and tablets
- android is developed by a partnership of developers known as the *Open Handset Alliance* and *commercially sponsored by Google*
- It was disclosed in November 2007, with the first commercial android device, the HTC Dream launched in September 2008

---

# Architecture of Android OS
The foundation of is the linux kernel. 
- Using a linux kernel allows android to take advantage of key security features and 
- allows device manufacturers to develop hardware drivers for a well-known kernel 

- **The Hardware Abstraction Layer (HAL)** consists of multiple library modules, each of which implements an interface for a specific type of hardware component, such as the camera or Bluetooth module 
- For devices running Android Version 5.0 (API level 21) or higher, each app runs in its own process and with its own instance of the **Android Runtime (ART)**.
	- ART is written to run multiple virtual machines on low-memory devices by executing *DEX files*
		- **DEX** stands for *Dalvik Executable* 
		- It is a file format used to execute compiled code in the *Dalvik Virtual Machine (DVM)*
		- DEX files are used to contain compiled code written in JAVA or other languages that are compatible with android platform.
		- The primary role of DEX files is to allow android applications to run on the DVM or the ART 
		- When you write an Android application, the Java code is first compiled into Java bytecode (.class files) using the Java compiler. These class files are then converted into a single or multiple DEX files by the Android SDK's dx tool. This process is known as *dexing*
		- DEX files are optimized for low memory and processing power environments typical of mobile devices 
- Many core Android system components and services, such as ART and HAL, are built from native code that require native libraries written in C and C++
	- The Android platform provides Java framework APIs to expose the functionality of some of these native libraries to apps. 
	- If you are developing an app that requires C or C++ code, you can use the Android NDK to access some of these native platform libraries directly from your native code. 
	- The entire feature set of the Android OS is available to you through APIs written in the Java language. 
	- These APIs form the building blocks you need to create Android apps by simplifying 
		- the reuse of core, 
		- modular system components, and 
		- services, 
		which include the following. 
	- Android comes with a set of core apps for email, SMS messaging, calendars, internet browsing, contacts, and more. 
	- Apps included with the platform have no special status among the apps the user chooses to install. So a third-party app can become the user's default web browser, SMS messenger, or even the default keyboard (some exceptions apply, such as the system's Settings app).

No two apps in Android devices are allowed to talk to each other directly. 
- Communication between them happens via well-defined interfaces exposed by the OS security checks, once the user allows it
- Apps are sandboxed i.e. isolated and cannot talk to each other without user's permissions 
# Codd's Rules
- *E. F. Codd's Rules*
	- Dr. Edgar Frank was a computer scientist while working for IBM
	- He invented the relational model for database management
	- Codd proposed thirteen rules (numbered 0 to 12) if a database management system meets these rules, it can be called a *relational database management system*

0. **The Foundation Rule**
	- The system must qualify as relational, as a database, and as a management system
	- For a system to qualify as a relational database management system *(RDBMS)*, that system must use its relational facilities (exclusively) to manage the database

1. **Information Rule**
	- Data stored in relational model must be the value of some cells of a table
	- All information in the database is to be represented in one and only one way, namely by value in column positions within rows of tables 

2. **Guaranteed Access Rule**
	- All data must be accessible
	- Every data element must be accessible by table name, its primary key, and name of the attribute whose value is to be determined 

3. **Systematic Treatment of Null**
	- The DBMS must allow each field to remain null (or empty)
	- Specifically, it must support a representation of "missing information and inapplicable information" that is systematic, distinct from all regular values and independent of data type

4. **Active Online Catalog**
	- Structure of the database must be stored in an online catalog which can be queried by authorized users 
	- The system must support an online, inline, relational catalog that is accessible to authorized users by means of their  regular query language 
	- That is, users must be able to access the database's structure (catalog) using the same query language that they use to access the database's data

5. **Comprehensive Data Sub-Language Rule**
	- A database should be accessible by a language supported for definition, manipulation and transaction management operations 
	- The system must support at least one relational language that 

6. **View Updating Rule**
	- Different views created for various purposes should be automatically updatable by the system

7. **Highest Level Insert, Update and Delete Rule**
	- Relational model should support insert, delete, update, etc. operations at each level of relations
	- Also, set operations like Union, Intersection, and minus should be supported 

8. **Physical data independence**
	- Any modifications in the physical location of a table should not enforce modification at the application level 

9. **Logical data Independence**
	- Any modifications in the logical or conceptual schema of a table should not enforce modification at the application level
	- For example, merging of two tables into one should not affect application accessing it which is difficult to achieve

10. **Integrity Independence**
	- Integrity constraints modified at database level should not enforce modification at the application level

11. **Distribution Independence**
	- The end user must not able to see a distribution of data over several locations
	- Users should always get the impression that the data is located at one site only
	- If any user is accessing the database, the user doesn't know that another user is also same place only
	- Thus the data must be independent of each user to access it

12. **Non-Subversion Rule**
	- Low-level access to data should not be able to bypass integrity rules to change data

---

# Concepts of DBMS
#### Data

> [!NOTE]
> The term data may be defined as known facts that could be recorded and stored on Computer Media

- It is defined as raw facts from which the required information is produced

#### Information

> [!NOTE] 
> The meaningful form of data or processed data is called as information

- Information is nothing but refined data
- In other way, we can say, information is processed, organized or summarized data

According to *Burch et al*
- information is data that have been put into a meaningful and useful content and communicated to a recipient who uses it to make decisions

#### Meta Data

> [!NOTE]
> A meta data is the data about the data

- The meta data describe objects in the database and makes easier for those objects to be accessed or manipulated
- The meta data describe the database, structure, sizes of data types, constraints, applications, authorization, etc.

There are three main types of meta data : 
1. *Descriptive meta data*
	- It describes a resource for purpose such a discovery and identification
	- In a traditional library cataloging that is form of meta data, title, abstract, author and keywords and example of meta data
2. *Structural meta data*
	- It describes how compound objects are put together 
	- The example is how pages are ordered to form chapters 
3. *Administrative meta data*
	- It provides information to help manage a resource, such as when and how it was created, file type and other technical information, and who can access it
	- There are several subsets of data 

#### Database
- Database is a collective of inter-related data which helps in efficient retrieval, insertion, and deletion of data from database and organizes the data in the form of tables, views, schema, reports etc.
- The data are stored in such a way that they are independent of the programs used by the people for accessing the data
- It is also defined as a collection of logically related data stored together that is designed to meet information requirement of an organization 
- For example, university database organizes the data about students, faculty, and admin staff, etc
- Database are organized by fields, records, and files

#### Fields
- lowest level of data item
- alternatively called as attribute of that entity
- A single item of data within a database or a software program. It is the smallest unit of data item

e.g. a field may be a customer name, address or phone number

#### Record

> [!NOTE]
> A record is a collection of logically related fields, and each field is possessing a fixed number of bytes and is of fixed data type 

- we can say a record is one complete set of fields and each field has some value

Records are of two types : 
- fixed length records
- variable length record 

#### Database File 

> [!NOTE]
> File is a collection of records having the same set of fields arranged in the same sequence

- Generally all the records in a file are of same size and record type but it is not always true
	- The record in a file may be of fixed length of variable length *depending upon the size of the records contained in a file*

#### Data Dictionary
contains information of the data stored in a database and is consulted by the DBMS before any manipulation operation on the database
- stores metadata

Data dictionary is generated for each database and generally stores and manages various types of information
- The complete information about physical database design 
	- e.g. storage structures, access paths, and file sized 
- The information about the database users, their responsibilities and access rights of each user
- The complete information about the schema of the database
- The information about the relationship between the data items referred by the database transactions 

Data dictionaries are of two types : 
1. **Active Data Dictionary**
	- managed automatically by the database management system 
	- always consistent with the current structure and definition of the database 
	
2. **Passive Data Dictionary**
	- It is only for documentation purposes and the data about fields, files and people are maintained into the dictionary for cross-reference 
	- generally managed by the users of the system

---

# DBMS
- The software used to manage database
- acts as interface between users and database itself
- record keeping system
- allows data to be
	- stored
	- maintained 
	- manipulated
	- retrieved
- It consists of DBMS utilities, database and data dictionary

It's responsibilities are : 
- multi-user access control
- security management
- backup and recovery management

## File-Based System
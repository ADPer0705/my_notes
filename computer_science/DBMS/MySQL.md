related notes : 
- [[SQL]]
- [[computerScience/Cybersecurity/databaseSecurity/MySQL]]

---
#### What is MySQL : 
- MySQL is an open-source *relational database management system (RDBMS)* 
- It uses SQL for accessing and managing databases
- developed and maintained by Oracle Corporation, MySQL is widely used for web application and other software solutions 

---

- adding a column
- dropping a column
- Modifying a column 
	- if here in this command the `modify` command does not work use `alter` instead 
	- care should be taken considering the datatype conversion 
```
Alter table <tablename> modify <columnName> datatype(size)
```
e.g. 
```
Alter table empl modify mob number(10)
```
- renaming a column 
	- `Rename`
```
Alter table <tableName> Rename <oldColName> <newColName>
```
e.g. 
```
Alter table empl Rename column mob to emlp_mob
```

---

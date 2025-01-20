* Use <kbd>*</kbd> or <kbd>_</kdb> around the desired text for italics
* Use <kbd>**</kbd> or <kbd>__</kdb> around the desired text for bold
* Use <kbd>*</kbd>, <kbd>+</kbd>, or <kbd>-</kbd> for bullet points 

use [link/image text]{URL} to create a hyperlink 

> [!NOTE]
> Images have an additional exclamation mark in front of the square bracket 
> i.e. : 
> `![image text]{URL}`

The above note can be created using this : 
```markdown
> [!Note] Title
> Content
```

- Keyboard tags : 
	- using the `\<kbd\> text \</kbd\>` can make the text appear as a button on the keyboard 


#### Tables : 
following code will create a table 
````markdown

| HEADER 1 | HEADER 2 | HEADER 3 |
|:----------:|----------:|:----------|
| Centered | Right Aligned | Left Aligned |
| data | more data | even more data |
````
## TO-DO lists 
The following code creates a to-do list
````markdown
- [ ] Task 1
- [X] Task 2
- [ ] Task 3
````

- [ ] Task 1
- [X] Task 2
- [ ] Task 3


# Github Specifics : 

- making a difference column 

````markdown
```diff
10 PRINT "BASIC IS COOL"
 - 20 GOTO 11
 + 20 GOTO 10
```
````

- Visualizing hex colors 
	- this will give the a square of the hex color alongside the text
````markdown
`#C6E48B`
````

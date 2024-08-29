cheatsheets :
- https://vim.rtorr.com/


> [!NOTE] Very, Very, VERRRYYYYYY!!!!!!! IMPORTANT
> :q is to exit vim


gvim => graphical vim 

`:q` => exit
if
	No write since last change 
	you can add ! to override
`:q!` => override and dismiss the changes and quit

: <_ something _ > => this is a terminal command 

keys 
VIM modes :
- normal mode 
	- : => gives terminal command or vim command 
	- d => deleting 
	- i => gets you to insert mode
- insert mode 
	- typing text
	- esc => leaving insert mode 
- visual mode
	- for selecting 

`:w` => write, as in to write the changes to the file
`:wq` => writes and quits 

different ways of entering the insert mode
- i => insert mode starts with the cursor focusing on the digit where the focus currently is
- a => the focus moves to the next space and the focus is now on that 
- o => gets a new line 
- example consider the focus is italics 
	- 1234*5*6789
	- upon : 
		- i => 1234*5*6789
			- so typing x would give 1234x*5*6789
		- a => 1234*5*6789
			- so typing x would give 12345x*6*789
		- o simply gives a new line
			- it is to be noted it is not necessary to be at the end of the line, unlike hitting enter, you can be anywhere in the line
			- it wouldn't break the line where the cursor is, it will leave the existing line as it is, neither will it start modifying the line below, o will give a new line between the two, as if hitting enter at the end of the current line 
- I (capital I) => goes to the beginning of the line and starts typing before the first alphabet
- A => goes to the end of the line and starts typing after the last alphabet 

`:set number` => basically activates line numbers 

each action can be repeated n number of times 
e.g. 5-> (the right arrow) in normal mode will move right 5 times instead of 1

in normal mode
- h => goes left
- j => goes  down
- k => goes up
- l => goes right 

: set relativenumber => instead of giving the actual line numbers it gives the relative line numbers, goes up and down the current line starting from 1 in both the directions 
this is good for jumping 

`:set mouse=a` => activates the mouse 
`:set tabstop=4`
`:set shiftwidth=4` 
`:colorscheme` then `tab` to see the available color scheme
	here are some ones I like
	- default
	- elflord
	- slate
	- desert
	- habamax
	- murphy

settings are lost once you exit vim
to prevent this you want to have a settings file, a configuration file to save your preferences 
- go to, using vim,  `vim ~/.vimrc`
- The below code gives the file I made 
```vim
set mouse=a
set number
set relativenumber
set tabstop=4
set shiftwidth=4
set autoindent
colorscheme elflord
```


`u` => undo
`ctrl + R` => redo
again, for repetition go `3u` or `3 + ctrl + r` 

`v` => goes into visual mode
now wherever we move the the cursor the portion gets selected 
- `d` deletes the selection 
- `esc` leaves but sometimes take 2
- `y` => yanking (copying in vim lingo)
- `p` => pastes what was yanked
	- again, try `10p` to paste 10 times 

below are in normal mode : 
`dd` => deletes line
- `5dd` deletes five lines, the one your'e in and 4 below it
`yy` or `Y` => yanks full line, including the line break
pasting 
- `p` pastes below the current line, 
	- basically the line break is at the start of the line
	- in case of a yanked word, it goes after "the cursor"
- `P` pastes above the current line, 
	- basically the line break is at the end of the line
	- in case of a yanked word, it goes before "the cursor"
`cc` deletes the content of the current line but not the line itself and then enters insert mode in that line
- the line number does not change for the lines below it 
- we can use the visual mode to change the selected text using `c` 
`D` deletes the part of the line after the cursor, including the character currently highlighted by the cursor 
`C` does `cc` on the part of the line after the cursor
`r` replaces the highlighted character by the character following the r

`w` jumps to the next word
- an underscore does not count as a word break
`W` jumps across special characters as well
`b` and `B` goes back words 
`e` jumps to the end of a word
`0` jumps to the beginning of a line and
`$` jumps to the end of the line, but unlike `a` it does not enter the insert mode


`d` is the deletion key
- in visual mode, `d` deletes the selected part
- `dd` deletes the line
- `dw` and `dW` or `db` and `dB` deletes the word
- if your'e in the middle of a word, the above doesn't delete the full word, to do that type `diw` that is 'delete in a word' 
- `de` is the same as `dw`
- `d0` and `d$` deletes from the cursor to the beginning of the end of the line respectively
**NOTE** the above combinations works for yanking, copying, changing etc

`c` is the changing key
- `ci"` is 'change inner quotation' that is it deletes the text inside the quotation and goes into insert mode, you can also go `yi"` or `di"` . similarly we can go `ci(` or `ci{` , etc.

try out `cw` or `5yy`, these are all basically combinations 

if we go to the opening or closing bracket, that is the bracket is highlighted, `%` will jump between those, i.e. from the opening to the closing and vice-versa 
- `d%` deletes everything including the bracket

consider a character, say `a`
- `ta` 'till a' ,jumps to one space before the character 
- `fa` 'find a', jumps to the character 
- `dta` deletes to a and `dfa` deleted till it finds a and thus also deletes the a
- `T` and `F` does the same thing, just to the character just before the cursor instead of the occurrence just after the cursor, 
- just like before, this can be combined with yanking, changing, etc

`gg` => goes to the beginning of a file 
`G` => jumps to the end of the file 
`123G` => jumps to the line 123
`:123` => also jumps to the line 123



---


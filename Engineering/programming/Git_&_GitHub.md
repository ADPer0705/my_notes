github is a code hosting service which works on the gt system
git is a version control system 

git was initially only a terminal utility
Git terminal or git bash allows the basic unix/linux commands.

bitbucket is a free alternative to github
github charges for private repos otherwise it is completely free for public repos or open source codes 

`git status` tells the status for the directory
`git init` initialize the directory as a git repo

running `git status` the first thing while beginning a new work session is a good habit 

![[Screenshot from 2024-05-12 18-53-15.png]]

This is how the git works with and handles the files : 

![[Screenshot from 2024-05-12 18-57-06.png]]

## File Status
There are the following 4 kinds of file status
- untracked
	- new files that git doesn't know about
- modified 
	- changed
	- shown in raad
- staged
	- file is ready to be commited
	- shown in *green*
- unmodified
	- unchanged

git works on a 3 layer model
- working area
- staging area
- commits
the work to be committed is shifted to staging area, so that we can choose which files to commit, cause once staged, all the files are committed at once

#### Git Commands
- **clone** -> Bring a repository that is hosted somewhere like GitHub into folder on your local machine 
- **add** -> Track your files and changes in Git
- **commit** -> save your files in Git
- **push** -> Upload Git commits to a remote repo, like GitHub
- **pull** -> Download changes from a remote repo to your local machine, the opposite of push


`git add .` gets all the files in the working directory to the staging area
`git commit -m "commit message"` commits the files to the branch
`git log` gives the logs of the changes 
`git config --global` make changes to the git config, change your name and email address globally for all commits 
this comes in three forms : 
- `git config --global --edit` opens the file where name and email is stored to edit
- `git config --global user.name "ADPer"` changes the user name
- `git config --global user.email "adper@gmail.com"` changes the user email
A commit is uniquely defined by a hash
	e.g.  c5e8362ea118e31f3577f79a4ad4a2592dafbc4c

## guidelines on writing commit messages 
- language 
	- not "fixed" instead write "fixes"
- go in details about how the changes are implemented and why they're implemented 

## Adding a remote origin or repo
see the documentation provided by github, available where the ssh key is supposed to be added in the settings 

## Push and Pull Command
upon committing the files, the changes are recorded in our branch, but not in the repository itself. To 'push' the changes from our local system to github.

**push** - upload local repo content to remote repo

`git push origin main`
here,
**origin** - is a shorthand name for the remote repository that a project was originally cloned from. More precisely, it is used instead of that original repository's URL - and thereby makes referencing much easier.

**main** - is the branch name

`git pull origin main` 
used to fetch and download content from a remote repo and immediately update the local repo to match that content

`git remote add <- name -> <- link ->`
adds a remote git repo with the name 'name' (as in origin),
'link' is the link to the repo

`git remote -v`
to verify remote

`git branch`
to check git branch

`git branch -M <- new name ->`
to rename a branch
earlier the default branch was 'master', now it's 'main'

`git push -u origin main`
This remembers that we want to push to origin main, and thus all we have to write is `git push` in the command prompt

## Merging Code 
`git diff <- branch name ->` to compare commits, branches, files & more
`git diff <- branch name -> <- f`
`git diff` shows all the changes
`git diff --staged <- name ->` for viewing a specific staged file change
`git diff --staged` 

`git merge <- branch name ->` to merge 2 branches  head is the name of the latest commit by default,
**note** - the above commands act on current branch with the branch whose name is mentioned in the command, as in compare or merge the current branch with the branch whose name is mentioned in the command.

## Branch Commands

`git branch` to check the branch

`git branch -M <- new name ->` to rename branch

`git checkout <- branch name ->` to navigate amongst branches
`git checkout -b <- branch name ->` to create new branch and move there 
`git checkout -d <- branch name ->` to delete a branch, but first we need to move to some other branch
`git push origin --delete <- branch name ->` to delete the branch from remote repo as well

## Undoing Changes
There are the following cases :
1.  Staged Changes 
	resetting the files added to the staging area
	`git reset <- file name ->`
	`git reset` to reset all files 
1. committed changes (for single commit)
	`git checkout` this goes back one commit
2. committed changes (for many commits)
	`git checkout <- commit hash ->` 
	`git checkout --hard <- commit hash ->` 
	take the commit hashes from the commit log

you can see the commit history through `git log`, and to exit, enter `q`

## Staging
`git add -A` stages all
`git add .` stages new and modified without deleted
`git add -u` stages modified and deleted without new

## Cloning
`git clone <- ssh key from the repo ->` creates a new folder by the name of the repo and clones all the files there
`git clone <- ssh key from the repo -> .` clones directly in the current working directory

## Ignoring Certain Files 
maybe required to store say user data, which we do not want to track
create a `.gitignore` 
If you want to ignore a file that is already checked in, you must untrack the file before you add a rule to ignore it. From your terminal, untrack the file.
````shell
git rm --cached FILENAME
````
there is also a list of suggested list of files available on the github - ignoring files 
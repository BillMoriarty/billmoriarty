
So there's some code out there you want to have on your computer.
You need to make a copy of it.
That's called 'clone'
` git clone url_to_the_code_you_want `

After cloning, you can see what is in your current folder with 
` ls -ltr `

Then you need to change into that folder you cloned in order to work with it

`
cd folder_on_your_computer_where_the_code_was_cloned
`


The place online where the code was stored is called the *origin*

---

If you are working on a project on your computer, and want to use git for version control, you need to initialize git in the folder you are working on.

First, open the terminal in the folder you want to use git in. Then run git init.

`
cd INTO_THE_FOLDER_YOU'RE_WORKING_IN
git init
`

---

Once you have done some work, whether creating new files you want git to track, making edits to existing files, you should run "git add" to "stage" the changes for the next "commit."

`git add NAME_OF_FILE `

or, to just add everything that has changed in the folder, use "git add . " <- (the period matters)

` git add . `

---

Next, you need to commit. That's what you always hear growing up, right? Commit.
When you create a "commit" in git, you should include a brief explanation of what you changed in the commit, in human readable language, so your teammates (or, more likely, you in 1 week) can read this and know what the commit contained.

`git commit -m "This commit is to fix the bug about not enough text."`

A commit is not yet a "Git Push." That comes later. Push is what actually sends the bits o'er the innerwebs to GitHub, or wherever you are directing them. 


---

If you need to change the git commit message, you can use "ammend."

`git commit --amend -m "Here is my corrected commit message" `


If you created a commit, but forgot to add an edited file to the commit, use: 

```
git add FILE_NAME.TXT
git commit --amend --NO-EDIT
```

---

If you want to see the status of what files are accounted for in the commit, and which are not, you can ask for the status...

`
git status
`

---

### Git Diff 

Ahhh git diff. Git Duff. 🍻

What is the difference between these two files I am looking at?
What code is in John's file that is not in Sara's file?

What did I delete today that was there yesterday?

Git diff can show you.

Below, in a file called "intro.txt," I hit the enter key, the words "adding another line", and then hit the enter key again.

` git diff `

![](/assets/images/2022-09-30-14-36-53.png)

---

### Git Pull

### Switch to another branch
In git version 3.? they introduced 'switch' which saves a few steps, and is intended to clarify the many uses of git checkout.

`
git switch type_branch_name_to_switch_to
`

if you want to create a new branch and switch to it
`
git switch -c type_branch_name_to_switch_to
`


---

To, in one step, create a new branch and check it out 

git checkout -b branch_name

To create a new branch from a branch called "dev" and switch to it:
` git switch -c branch_name dev ` 
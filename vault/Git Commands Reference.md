---
id: git-commands-reference
title: Git Commands Reference
desc: ''
updated: 1645066003898
created: 1644416082365
---

So there's some code out there you want to have on your computer.
You need to make a copy of it.
That's called 'clone'
```
git clone url_to_the_code_you_want
```

After cloning, you can see what is in your current folder with 
```
ls -ltr
```

Then you need to change into that folder you cloned in order to work with it
```
cd folder_on_your_computer_where_the_code_was_cloned
```


### Git Pull

### Switch to another branch
In git version 3.? they introduced 'switch' which saves a few steps.
```
git switch type_branch_name_to_switch_to

#if you want to create a new branch and switch to it
git switch -c type_branch_name_to_switch_to
```

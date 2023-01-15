
---

Dictionary operations

New empty dictionary
```
new_dict = {}
```

Remove key and key's values from a dictionary. Just delete the key 
```
del my_dictionary['bill']
```

---

floor division vs modulo operator
```
#floor
101 // 4 = 25

#modulo
101 % 4 = 1
```
---

append to a list vs extend a list
(extend is what I expected append to do)
```
x = [1,2,3]
y = [4,5]

x.append(y)
[1,2,3, [4,5] ]

x.extend(y)
[1,2,3,4,5]
```

---

## List operations

Remove item from list
```
# create a list
people = ['bill', 'john', 'sara']

# remove from the list
people.remove('sara)
```

---
### Python in VSCode

To select which version of Python to use, which means selecting a python *interpreter*
- open the Command Palette
![](/assets/images/2022-03-08-10-35-30.png)
- then type: Python:Select Interpreter
- click 'Python:Select Interpreter'
- a drop down menu of python versions should appear
- pick the version you want to use




---

## Virtual Environments

Why do we need virtual environments?
- I'll refer to these below as 'venv'

You can have different versions of Python on your computer.

You can also have different versions of libraries. You might have a couple different of PyTorch. One project your working on might use a library which requires a specific version of another library. 

If you just update some package, one fo your projects might stop working because it can't find a version of something it's looking for. Messy.

Virtual environments let us create a folder in which we install the specific package versions we need for a certain project we're working on.

Then if another project needs an updated version, we can create a virtual environment just for that project, install the required versions, and thus keep our projects required packages separate from each other.

With a virtual environment, we can also have separate versions of Python. Maybe one project needs Python 3.8, and another needs 3.10.

How to make one using command line:
- create an empty folder
- cd into that folder
- run: `python -m venv env` or, if you want to specify the Python version such as  3.9, run `python3.9 -m venv env`

If you look in the folder you created to see what is there, within the 'bin' folder you will see the version of python which was used to create this virtual environment.

Now we want to use this venv.
The word they chose for that action is to 'activate' the venv.

cd into the env/bin/

run: `source activate`

Now you should see: '(env) some_more_words_ bin'

To exit it, run: `deactivate`

Let's start it back up again: run: `source activate`
Ok now that we're in here, we can `pip install` the packages we need for this project.


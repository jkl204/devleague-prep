# Agenda

* Terminal+Shell
* File System
* `git`
* GitHub
* `ssh`
* Functions

---

# Terminal

The window that manages the command line interface (CLI).

Draws characters to the screen (sometimes with colors) and handles keypresses.

---

# Shell

Program that enables our text-based communication with the computer:

* Finds and runs command line programs
* Keeps track of where we are in the file system
* Accessed via the terminal:
    * Sent keypresses from the terminal (via `stdin`)
    * Sends characters to the terminal to be drawn (via `stdout`)

---

# Built In

* Mac OSX: Terminal
* Windows: cmd or PowerShell

# We want

* Mac OSX: iTerm 2 + zshell
* Windows: Git Bash

???

https://git-scm.com/download/win

iterm2.com

https://github.com/robbyrussell/oh-my-zsh
sh -c "$(curl -fsSL https://raw.github.com/robbyrussell/oh-my-zsh/master/tools/install.sh)"

---

# File System

Just a big "tree"

Navigation:
* `~`, `.`, `..`, `/`
* `cd`
* `ls`
* `mkdir`
* `touch`
* `rm` and `rm -r`
* Tab complete is your friend!

---

# `git`

### What is `git`?

A way to track and label all changes to a source code repository

*Test now*
```
git --version
```

---

### What is GitHub?

Like super-powered Dropbox for source code.

Uses `git` to sync intelligently with full knowledge of changes

---

# `ssh`

## What is "public-key" encryption?

* Encrypt with private, decrypt with public
* Encrypt with public, decrypt with private

> Makes security on the internet possible

## What is ssh?

* Stands for "secure shell"
* A "cryptographic network protocol"

*Create github ssh keys now*

???

## Why is this good for us?

* Don't have to enter your password every time


---

# Questions

---

# Functions

1. keyword lets interpreter know you are about to declare a function (`function`)
2. name is how other parts of the program are able to call the function (*anything you want*)
3. parameters are what is allowed to change each time the function is called (`(,)`)
4. body is the recipe to make each time the function is called(`{...}`)

---

# Declaration Syntax

```
function name(param1, param2) {
    var something;
	// create something with param1 and param2...
	return something;
}
```

Create a function named `name` that takes in two parameters, the values of which will be captured/bound/pointed to by `param1` and `param2`.  It will return the value pointed to by the `something` variable.

---

# Declaration Layout

1. Declare local variables (`var` but no `=`)
2. Write logic
3. Helper functions down below

---

# Scope

Layout promotes understanding of scope

Everything in a function can see all of its local variables...

That includes helper functions... and their helper functions... all the way down...

---

# Global Scope

Pretend there is a giant invisible function wrapping the whole file that is called when node runs the file.

N.B. Every function can see the global variables.

---

# Calling

synonyms: "invoke", "apply", "resolve"

Just different ways of thinking about it...

* You were sent the args and you call on the function to help turn them into return values
* You went around with the function swatting sets of args, turning them into return values
* You put the function and args in a pot and watch it transform into the return value

---

# Call Syntax

Just leave off the `function` keyword and the body.

```
name(expression1, expression2);
```

`expression1` and `expression2` resolve to values and are then passed to the function named `name`

 


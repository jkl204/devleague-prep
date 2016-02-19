# Agenda

* `subl`
* `function` review
* `if...else`
* Exercises

---

# `subl`

## What is an "environment variable"?

```
console.log(process.env);
```

## What is the "PATH" environment variable?
```
console.log(process.env.PATH);
```

## Why is this good for us?

* Your CLI will become your primary means of navigating the file system
* `subl` allows us to quickly open files and projects as we navigate from the CLI

---

# Toolbox review

* **Language:** JavaScript
* **CLI (Terminal + Shell):** iTerm + zshell (Mac) or Git Bash (Windows)
* **Editor:** Sublime Text 3
* **Source Code Repository:** Git + GitHub
* **Runtime:** Node (and later a browser)

---

# Oh-my-zsh

(Plugin system for `zshell`)

Let's make sure it is installed

Let's use the theme I created

---

# `function` review

Key ideas:

* Our verbs
* Invoked with values, returns a value
* Parameters are just variables
* Functions are also values

???

Verbs: *call*, *invoke*, *apply*

---

# Function scope tree

The functions in a proram create a *tree*, with each node representing a function *scope*.

The root of the tree is the *global scope*.

A function's position in the tree is determined by where the function is *created* (not *called*).

---

# Function environment

All the variables a function can see depending on its position in the scope tree.

All the variables in the scopes along the ancestor path of that function (unless an child scope overwrites with a variable of the same name).

A function retains its environment even when it is passed around as a value.

---

# Functions as values

```
var fn;
var result;

fn = myFunc;
result = fn("bar")
console.log(result);

function myFunc(myParam) {
	return "foo" + myParam;
}
```

---

# Anonymous functions

 ```
var fn;
var result;

fn = function(myParam) {
  return "foo" + myParam;
};
result = fn("bar")
console.log(result);
```

---

# `if...else`

* comparisons: `>`, `<`, `===`
* negate: `!` (NOT)
* combine: `&&` (AND), `||` (OR)

> N.B. left-to-right short circuiting with '&&'

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else

---

# Stuff to be aware of...

... and avoid whenever possible

Losse equality:

Falsy: https://developer.mozilla.org/en-US/docs/Glossary/Falsy

Actually, falsy-ness has its usefulness...

---

# Exercises

https://gist.github.com/jaywon/8809f95fbb3c1c1d1c63

1. What is `eat` in the first example?  string or variable name?  If latter, where is it getting set?


???

3 buckets:
* Data
   * 5 types
* Logic
   * var
   * function
   * loops
   * conditional
* UI
   * display
   * events

# Agenda

* JavaScript Review
* Modifying Objects and Arrays
* Web Server
* HTTP Request
* HTML Tag Overview
* HTML Exercises

---

# JavaScript Review

## Storing Data: *Values*

* Boolean
* Number
* String
* Object
* Array
* Nothing (null and undefined)

## Manipulating Data

* variables (`var`)
* functions
* branching (`if...else`)
* loops (`for` and `while`)

---

# Values vs. variables

* Variables are not values... they "store"/"point to"/"hold" values

* Expressions resolve to values... a function call is an expression, so is '1 + 1' or 'x <= y'... so is a variable by itself

* Functions take in and return *values*... i.e. the values that the variables are holding, not the variables themselves.  In other words the argument expressions must be resolved *before* the function call happens (this is often called 'strict' evaluation)

* Variables are assigned values (using '='), so the RHS must be resolved before the assignment happens

* If you do not capture the return *value* of a function in a variable, it is lost.

---

# What do variables actually hold?

Just a reference to the actual value (i.e. all variables 'share' actual value)

---

# Immutable Values (the 'primitives')

No need worry...

* Boolean
* String
* Number

---

# Mutable Values

Now we can worry...

* Array
* Object

> N.B. Reassignment changes the *variable*, NOT the *value*

---

# Two key things to remember

* What is done by one, is reflected in all

* Reassigning a variable to a new value does not change the value the other variables are "pointing" to

```
function someFn() {
  var myObj = {};
  modifyObj(myObj);
}

function modifyObj(obj) {
	obj.foo = 'bar';  // <- myObj.foo == 'bar'
	obj = { foo: 'baz' };  // <- myObj still points to { foo: 'bar' }
}
```

---

# Web Server

Like an infinite loop that "serves" a subtree of our file system.

Inside the loop it waits and listens for requests on a port.

## File System Review

A tree

## Ports

Like stdin and stdout for the outside world... Just a way for the "outside world"
to read Strings from and write Strings to our program.

Cannot read and write at the same time, so there is a protocol that describes how
to take turns reading and writing.

That protocol is: HTTP

---

# HTTP GET Request review

`http://<host>:<port><path>?<query>#<fragment>`

HTTP URL Parts:

1. host (e.g. www.devleague.com)
2. port (optional... just a number, defaults to 80 for HTTP and 443 for HTTPS)
3. path (starts with a '/'... just like the file system)
4. query (key-value pairs... just like an `Object`)
5. fragment (only used by the browser... not sent in request... location within a page)



---

# Tree

Vocab:

* Nodes
* Single parent
* Many children
* Node with no children is called a "leaf node"

> We have already seen a tree: **The file system**

---

# HTML

(Hypertext Markup Language)

Just a language for a describing a tree, with these characteristics...

Nodes are either:
* Tag (Element)
* Text

Tags:
* Have a name from a pre-defined set
* Have a set of attributes (set of key-value pairs)
    * Attributes from a pre-defined set of that depends on the tag name
* Special style attribute is itself a set of key-value pairs
    * Those keys are also pre-defined
    * Modifying this style attribute is what CSS is all about (though it does it through other means)
* Have any number of children

Text:
* *cannot* have attributes
* *cannot* have children (i.e. they are always leaf nodes)

Question: how could we model this using JavaScript?

---

# Tags aka. Element Nodes

* Overview of most common tags


---

# HTML Syntax

```html
<elem attrKey1="attrVal1" attrKey2="attrVal2">
  <!-- children go here (P.S. I am a comment) -->
  <childElem>
    childElem's child text node
  </childElem>
  elem's child text node
</elem>
```

But `elem` and `childElem` are not valid HTML elem types

---

# Actual HTML Syntax

```html
<div id="myDivision" class="myStyle">
  <!-- Comments are actually a special type of node too! -->
  <em>
    Something I want to say boldly!
  </em>
  Something that I am not as bold to say.
</div>
```
> N.B. `id` and `class` are allowed attributes for the `div` element type


---

# Node server

1. `$ cd myFirstWebApp`
2. `npm install`

## Tour

* package.json
* node_modules
* server.js

---

# Exercises

1. Syntax
2. Get to know the tags
3. Build from scratch

# Agenda

* CSS Review
* Events
* `this`
* Further Help
* Exercises

---

# Events

> Human-Computer Interaction is a dialogue: an ongoing exchange of messages between both sides.

Your computer "speaks" via the screen and "listens" to key strokes and mouse clicks.

You "listen" with your eyes and "speak" by typing on the keyboard and clicking the mouse.

Events are the units of that dialogue 

---

# Higher Order Functions

Remember that...
1. functions are values
2. functions take in and return values...

Therefore...

Functions can take in and return other functions... these types of functions are called "higher order functions"

---

# Callbacks

A function that is sent to another function to be called at a later time.

"call" a function = apply/invoke it

a "callback" is a way for the function you are calling to continue the conversation later when it is ready (it "calls you back")

e.g. "Call me back when you get a mouse click event to discuss"

---

# Registering Callbacks

### From HTML

'on'-name attributes

### From DOM

```
element.addEventListener(name, callback)
```

---

# `this`

(You don't need it)

Only applies to *methods*

Be careful with higher order functions!

My recommendation: You don't need it (or methods)

---

# Further Help

Code Academy:

* Web Developer Skills
    * Make a Website
    * Make an Interactive Website
	* Learn the Command Line
	* Learn Git
* Language Skills
	* HTML & CSS
	* JavaScript

---

# Exercises

* `element.addEventListener`

### Ex 1

* `document.getElementById`
* `element.children`
* `element.textContent`

### Ex 2
* `document.getElementsByClassName`
* `element.classList`


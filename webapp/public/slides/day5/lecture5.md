# Agenda

* `for` review
* `while`
* `continue`
* `Array.filter`
* Formatting
* `Object`
* closures
* Exercises

---

# `for` Review

You tell me...

Questions (*I love questions*)

Looping as a concept... Why?

---

# `while`

`while(cond)` === `for(;cond;)`

> Lesser known cousin `do...while` always executes once

For our purposes we can just use `for`

---

# `continue`

Skip the rest of the loop block and go to the next step...

Can make logic flow hard to reason about, but can avoid deep nesting

Use sparingly...

---

# `filter`

(Availability in es5?)

---

# Why loops?

Why do we need them?

Do we *need* them?

---

# Formatting

## Block

`{}`

Allows us to group multiple statements

Blocks get a new indent level (tab, 4 spaces, 2 spaces... just be consistent)

Optional for `for`, `if...else`, but just do it... except...

### `else if`

`else` works without curly braces, but we only take advantage of this with `else if`

Remember the branch tree... It really is a binary tree internally

---

# Objects

`{}` (but not a block)

Two uses:
1. Record of structured data
2. Index of key-value pairs

# Object Creation Syntax

Syntax:
```
var myObject =
{ keyOfNumber: 3,
  keyOfBoolean: true,
  'key-of-string': 'str',
  keyOfObject: { key5: 'nested'},
  keyOfArray: [ 0, 1 ] }
```

---

# Properties and Methods

properties are just values that have a label

methods are just properties that are functions

Method examples:

* `console.log`
* `String.split`
* `Array.forEach`

---

# Objects and Arrays in Memoryland

---

# Navigating review

* `..`: go "up" a directory (toward the root)
* `/`: move multiple directories at once
* tab completion
* up arrow

---

# Exercises


---

# Closure Review

Closure is a `function` and its environment

(Remember the scope tree)

Be careful: Environment variables are only resolved when their values are
needed... Be careful about assuming values are locked in place during function
creation (e.g. during a loop with a counter)

---

# Falsy Review

* `''` (type: `string`)
* `null` (type: `Object`)
* `0` (type: `number`)
* `NaN` (type: `number`)
* `false` (type: `boolean`)
* `undefined` (type: `undefined`)

> N.B. `[]` is NOT false... `Array` is actually an `Object`, so its "falsy" value is `null`

---

# `||` and falsy-ness

Expression resolves to real value and not Boolean (unless real value is a Boolean)

## Tip: Using `||` to avoid undefined values

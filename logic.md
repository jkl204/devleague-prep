# Values vs. Variables

**Values** have *types*

**Variables** do not... they just big signs that point to *values*
    * `var` defines *variables*
    * `=` assigns a *variable* to a *value*


Variables are our nouns

# Function

**verbs**

Functions are packaged up repeatable behavior.

Analogy: Recipe

Define vs. Invoke

Parts:

* Name
* Parameters/Arguments
* Return Value

## Declaration

A data type that represents packaged behavior
Can be stored in a variable

Like a recipe

## Invocation


## Arguments and Parameters

* Arguments are the values that are "passed" to the function
* Parameters are the variables that "capture" the passed in arguments

* Parameters represent the things that could change each time a function is called

## Anonymous Function

Just a function without a name... Remember functions are just values!

```
function (x, y) {
	return x + y;
}
```

Remember values are lost unless it is assigned to a variable:

```
var add = function (x, y) {
	return x + y;
}
```

## Declaration

1. keyword lets interpreter know you are about to declare a function (`function`)
2. name is how other parts of the program are able to call the function (*anything you want*)
3. parameters are what is allowed to change each time the function is called (`(,)`)
4. body is the recipe to make each time the function is called(`{...}`)

---

### Declaration Syntax

```javascript
function name(param1, param2) {
  var something;
	// create something with param1 and param2...
	return something;
}
```

Create a function named `name` that takes in two parameters, the values of which will be captured/bound/pointed to by `param1` and `param2`.  It will return the value pointed to by the `something` variable.


### Declaration Layout

1. Declare local variables (`var` but no `=`)
2. Write logic
3. Helper functions down below


## Scope

Layout promotes understanding of scope

Everything in a function can see all of its local variables...

That includes helper functions... and their helper functions... all the way down...


### Global Scope

Pretend there is a giant invisible function wrapping the whole file that is called when node runs the file.

N.B. Every function can see the global variables.


## Calling

synonyms: "invoke", "apply", "resolve"

Just different ways of thinking about it...

* You were sent the args and you call on the function to help turn them into return values
* You went around with the function swatting sets of args, turning them into return values
* You put the function and args in a pot and watch it transform into the return value


### Call Syntax

Just leave off the `function` keyword and the body.

```
name(expression1, expression2);
```

`expression1` and `expression2` resolve to values and are then passed to the function named `name`


# Expression

Something that "resolves" to a value:
* Numerical operations: `4 + 9`
* Comparison operations: `18 < 4` or `'hi' === 'Hi'`
* Logical operations: `true || false`
* Variable: `x`
* Function call: `add(8, 3)`
* Value itself: `'hello'`
* Any combination of the above

### Not Expressions

* for-loops
* if-else blocks
* variable declarations
* variable assignments (*technically this is an expression, but we will not treat it as such*)

### Function Declaration Expressions

* function declaration

This is just a value... so it is an expression

* function name

An expression that resolves to its declaration

## Strict resolution

Expressions must resolve **before** being:
* passed to functions
* returned from functions
* assigned to variables
* used in operations

**Key Point**: Functions take in and return *values* (not *variables*)

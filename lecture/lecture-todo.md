# Goals of the next 3 days

# History

Church?  Lambda calculus
Turing... Turning Machine, Turning Test (Illustrated Primer chapter on Turning Machines)

# Building blocks

* values
* variables
* functions

# Values

Primitives (aka. building blocks):
* 27 (aka *Number*)
* "*String* of characters"
* true (aka. *Boolean*)

Data structures:
* list of values
* set of labeled values
* (lots and lots more)

Values can be:

* Assigned to a variable
* Passed as an argument to a function
* Returned as the result of a function

N.B. *Types* are the different kinds of values that you can have...

# Variable

* Just like math... Placeholder for a value that will be realized when the program executes.

* Variables in JavaScript are unityped, meaning they all have the same type which is a union of all possible types.  This is sometimes described as being un-typed or dynamically typed.

* In other words, only values in JavaScript have (meaningful) types.  The variables and expressions made up of those variables do not... This means you can break stuff :)

    Examples of breaking stuff??


# Functions

Just like math... but not just for numbers

Two parts:
* declaration
* application

N.B. In JavaScript functions declarations are also values

Advanced: Remembering that functions in JavaScript are values (i.e. they can be returned from a function), how could we get the same functionality if functions could only take in single parameter)

# Function declaration

* name
* arguments (array of variables)
* return value

# Function application



# Running the program

Just function application of a top level function


# Data Structures
aka. More complex values

First three:
* *Array*
* *Object*
* *Tree*

# Array
List of values
Finite in length
Indexed into it

You can do this...
```
[
  "value1",
  true,
]
```

But usually it makes more sense to have arrays of the same type

# Object
Set of labeled values
Key-value pairs

```
{
  myBoolean: true,
  myString: "value2",
  myList: [ 27, 52 ],
  myNestedObject: {
    myNumber: 82
  }
}
```

# Tree

# Null: The Billion Dollar Mistake
But it isn't so bad in JavaScript...

Why? Because variables are unityped, so null

null... sigh :)

# DOM

Just a tree that allows any number of children with nodes that each contain an attribute Object (or are text).

# Style attribute

Special attribute that is an Object describing the

# Implementing Array with an Object

# Implementing Tree with Array and Object

# Implementing Object with Tree?

# Annoying bits in JavaScript

* null versus undefined
    "no value" vs. "not set"
* falsity (== vs. ===)

# Getting Loopy
For loops are great for:

1. Iterating through an `Array` to access values within

2. or running a set of instructions over and over again for a set amount of times, executing `functions` or one-off code.

3. or any/all combinations of the above.

# Exercises

## 1. `Presidents - Accessing values in an Array`
Declare a variable named `presidents` which contains the first 5 presidents' last names: `Washington`, `Adams`, `Jefferson`, `Madison`, `Monroe`.

Now write a _FOR_ loop which iterates through this Array.

Within the _FOR_ loop, use `console.log` to:

- Log the value of `i`. Use a message like `Value of i is: ` and append the value of `i` to this String
- Log what is at index `i` in the array. Use a message like `Value at Index is: ` and append the value stored within the Array at that index.

`console.log` is a great tool to give you feed back about your loops and the data that you're working with. When all else fails use `console.log` to inspect and debug your code.

Example output:

```
The value of i is:0
The value at Index is: Washington
The value of i is:1
The value at Index is: Adams
The value of i is:2
The value at Index is: Jefferson
The value of i is:3
The value at Index is: Madison
The value of i is:4
The value at Index is: Monroe
```

**bonus:** could you take the code inside of this FOR loop and encapsulate it inside of a function called `printContent` and still achieve the same result? This new function should accept two parameters.

## 2. `The String of Numbers`
Declare a variable named `stringOfNumbers` and set it's value to `''` (an empty String).

Then write a _FOR_ loop that appends a Number value to that string starting from `10` all the way up to and including `20`.

After the _FOR_ loop, use `console.log` to inspect your variable. In the end your String should look like this `1011121314151617181920`

**bonus:** could you take the code inside of this _FOR_ loop and encapsulate it inside of a function called `appendToString` and still achieve the same result?

## 3. Add only even number to an array

Declare a variable named `evenNumberArray`.

Use a for-loop to add only even numbers to an *Array*.

Add `50` even numbers to the `evenNumberArray` starting with the value `0`.

## 4. `Accessing only the odd indexes of an Array - 'Not Even Brah'`
Someone forgot to fill out this array! Oh noes...

Declare a new variable named `oopsArray` set it's value to be: `[ 'turn' , , 'down' , , 'for' , , 'what' ]`

using a _FOR_ loop, add the string `'nope'` to every odd index.

Example result should look like:

```javascript
`[ 'turn' , 'nope' , 'down' , 'nope' , 'for' , 'nope' , 'what' ]`
```

## 5. Going backwards?!
Using a _FOR_ loop, iterate through the Array stored at `oopsArray` **backwards**. `console.log` each value in the Array.

example output:
```
what
nope
for
nope
down
nope
turn
```

## 6. `isNapTime`
Declare a variable named `isNapTime`. Set it to `false`

Declare a variable named `napSchedule`. Set it's value to be an `Array` with the values `[false, false, true, false, true, true]`

Declare a function named `nap`. This function takes in a single parameter called `schedule`

- If `schedule` is `true` then use `console.log` to display the message `ZzZzZzZz`
- otherwise if `schedule` is `false` use `console.log` to display the message `Gotta get to work!` and then change the value of `isNapTime` to `true`

Now, Write a FOR loop that iterates through the `napSchedule` array and runs the function `nap` while passing in the value at the current position of `napSchedule` into the `nap` function.

example of output:

```
Gotta get to work!
Gotta get to work!
ZzZzZzZz
Gotta get to work!
ZzZzZzZz
ZzZzZzZz
```


## 7. `CopyArray - clone array values`
Declare a variable named `copyOfValuesArray` and set it's value to be an empty array, `[]`.

Declare a variable named `valuesArray` and set it's value to be an array, `[99, 66, 829, 1941, 8, 76]`.

Declare a function named `copyArray` which takes two arguments: `originArray` and `destinationArray`. Inside of this function you will loop through the contents of `originArray` and push each value into `destinationArray`.

To get started, below your function declaration, call your function and pass in the two variables, `valuesArray` and `copyOfValuesArray`. After that, use `console.log` to to inspect the values of `valuesArray` and `copyOfValuesArray` to make sure they have the same values (which means your function worked!).


# Final Boss: Stage 1

***Objective:*** Filter any array by value type

**Given:** The *Array* of miscellaneous values stored in the `miscStorage` variable.

```javascript
miscStorage = [ [], 'Carrots', 9, 'Beets', {}, {name: "Todd B."}, 'Mush' ];
```

**Goal:** Filter out all of the non-*String* values from the *Array*.

**Hint:** Create a function to perform this filtering.
This function should take a single parameter, assumed to be an *Array*.

Have the function return a new *Array* with only the *String* values from the
original *Array*, preserving order.

> N.B. You will need to use the builtin `typeof` operator.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof


# Final Boss: Final Form

![final-boss](https://s3.amazonaws.com/uploads.hipchat.com/54891/2015941/zamX8AqbgYw0QJ8/giphy.gif)

***Objective:*** Change values of objects stored within an Array

It's that time again, we need to graduate the current class of students and
start enrollment for the next class.

**Given:** The *Array* of the students in the current class stored in the
`currentClass` variable.  (Students are represented as *Objects*.)

```javascript
currentClass = [
  {
    name: 'Doug',
    graduated: false,
    enrolled: true
  },
  {
    name: 'Pat',
    graduated: false,
    enrolled: false
  },
  {
    name: 'Marsha',
    graduated: false,
    enrolled: false
  },
  {
    name: 'Moira',
    graduated: false,
    enrolled: true
  },
  {
    name: 'Ben',
    graduated: false,
    enrolled: true
  },
  {
    name: 'Nigel the Giraffe',
    graduated: false,
    enrolled: false
  },
  {
    name: 'Brandon the Shark',
    graduated: false,
    enrolled: true
  }
];
```

**Goal:** For each student in the class:
 * If they are enrolled, change their graduated status to `true`
 * Otherwise, change their enrolled status to `true`

**Hint:** Create a function named `graduateAndSetNewClass` to implement this behavior.
This function should take a single argument, assumed to be an *Array* of *Objects*.
Each *Object* in the *Array* is assumed to have the following properties:
 * `name` (*String*)
 * `graduated` (*Boolean*)
 * `enrolled` (*Boolean*)

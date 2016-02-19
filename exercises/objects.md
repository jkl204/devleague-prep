## Build a car

***Objective:*** Declare an *Object* with properties

Declare a variable in the global scope named `myCar` and set its value to be an object with its keys and values separated by ':', and its key-value pairs separated by commas (`,`). This is a way of declaring a new object and also being able to add property names and values at the moment an object is created.

Include the following properties:
* add a key named `model` and set its value to the name of a car manufacturer.
* add a key named `year` and set it to be a *Number* value.
* add a key named `automaticTransmission` and give it a *Boolean* value.
* add a key named `driver` and set it to be `null`.
* add a key named `passengers` and set it to be an empty array.

Do the same for another variable called `dreamCar`. Give it different values for the `model`, `year`, and `automaticTransmission` properties.


**Bonus:**

What is different between `myCar` and `dreamCar`?

Can you create a function that creates a car taking in those variations as arguments?


## Build a person

***Objective:*** Create an object using a function

**Goal:** Create an *Object* representing a person, given a name and age. Store the created person in a global variable named `me`.

**Hint:** Create a function named `buildPerson` that takes two arguments:
* The first argument is assumed to be a `String`.
* The second argument is assumed to be a `Number`.

Create an empty *Object* inside your function and populate it with properties:
* `name` from the value of the first parameter
* `age` from the value of the second parameter

Then return that *Object*.


## Who's driving this thing?!
As you may have noticed that the `stockCar` doesn't have a driver!

Declare a function that takes three arguments:
* The first argument is assumed to be an *Object* that represents a **car**
* The second argument is assumed be an *Object* that represents a *Person*.
* The third argument is assumed to be a *Boolean* representing whether or not the person can drive a stick shift.


Within this function:
1. Set the `canDriveStick` property of the second argument to be the of the value of the third argument.
2. Set the `driver` property  of the first argument to be value of the first argument.

Invoke your function and pass in your objects, store the result, and inspect your results.


## Detecting transmission

***Objective:*** Read and make decisions from *Object* properties.

**Hint:**
Declare a function that takes a single argument.
Assume the value is an *Object* with the following properties:
* `automaticTransmission` (assumed to be a *Boolean*)
* `driver` (assumed to be an *Object* with a `name` property)

Within this function you will check to see if the car has an automatic or manual transmission and print the results on screen.

If either:
* `automaticTransmission` is true and `driver.canDriveStick` is true
* `automaticTransmission` is false

...then print a message saying `driver.name` is ready to drive.

Otherwise:
* Set `driver` to be `null` and print a message saying (the former) `driver.name` needs to learn to drive stick.

Invoke your function and pass in your object, store the result to a variable and use `console.log` to inspect your results.


# Final Boss

![final-boss](https://lolapug.files.wordpress.com/2012/10/dsc_0400_2.jpg)

## Call the posse, we ridin'!
The Dev League instructors want to ride your whip!

***Objective:*** Populate an *Object* with a nested *Array* of *Objects*.

**Given**:
* An *Array* of passenger names stored in the `passengerList` variable.
* An *Array* of passenger ages stored in the `passengerAges` variable.

```
passengerList =
  [ 'Jon',
    'Jason',
    'Tony',
    'Joe',
    'Jesse',
    'Nigel',
    'Kelli',
    'Marifel',
    'Victor' ];

passengerAges =
  [ 19, 12, 21, 22, 16, 9, 19, 20, 15 ]

```

**Hint:**

Declare a function with three parameters:
* The first will be `car`, assumed to be an *Object*.
* The second will be `names`, assumed to be an *Array* of *Strings*.
* The third will be `ages`, assumed to be an *Array* of *Numbers*.


Assume the *Arrays* contained in `names` and `ages` have the same number of elements, and that values at the same index refer to the same person (e.g. "Jon" is "19", "Jason" is "12").

In the end you will return the **car** but within the function...

You will have to populate the `passengers` array on the **car** object with proper objects that represent a person. Currently you have two arrays, one which contains names and another which contains ages.

You should iterate through the names and ages, pass the values to your `buildPerson` function to build person objects (remember that this function returns a new object). Don't forget that this function actually takes **three** arguments, how will you handle that? (you should not have to change your function).

Example of a loaded Car:

```
{ model: 'Chevy',
  year: 2010,
  automaticTransmission: true,
  driver:
    { name: 'Ray',
      age: 32 },
  passengers:
    [ { name: 'Jon',
        age: 19 },
      { name: 'Jason',
        age: 12 },
      { name: 'Tony',
        age: 21 },
      { name: 'Joe',
        age: 22 },
      { name: 'Jesse',
        age: 16 },
      { name: 'Nigel',
        age: 9 },
      { name: 'Kelli',
        age 19 },
      { name: 'Marifel',
        age: 19 },
      { name: 'Victor',
        age: 19 } ] }
```

## Display passengers
Delcare a function and set one parameter which will be a **car**. This function should print out each passenger's name and age one line at a time.

example output:
```
'Jon, age 19, is riding dirty!'
'Jason, age 12, is riding dirty!'
'Tony, age 21, is riding dirty!'
'Joe, age 22, is riding dirty!'
'Jesse, age 16, is riding dirty!'
'Nigel, age 9, is riding dirty!'
'Kelli, age 19, is riding dirty!'
'Marifel, age 19, is riding dirty!'
'Victor, age 19, is riding dirty!'
```

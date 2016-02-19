# Data

## Type

### 3 Basic Types

* Boolean (`true` or `false`)
* Number (`1`, `47`, `3.14159`)
* String (`'any "string" of characters'`)

### 2 Nothing Types

* `null` -> "Intentional Opt Out"
* `undefined` -> "Missing"

Why two types for the same concept?

### 2 Aggregate Types

* Array -> a list of ordered values
* Object -> a "bag" of values with String labels

### 1 Magic Type

* *Function*


## Boolean

## Number

## String

## `null` and `undefined`

## Array



## Object

Objects are very important and powerful. Below we will start with creating simple objects and work towards building objects that are more complex.

Objects let us store data in much more meaningful and helpful ways, with property names. Each Property of an Object can hold **any** data-type: *Booleans*, *Numbers*, *Strings*, an *Array*, an *Object*, or a *Function*.

### Caveat

Below you may see the term **key-value pair**, this is just another way of referring to an object's **property name** (key) and its **value**.

There may be places where a suggested variable name may have been left out, it is up to you as a programmer to name these variables. **Make 'em good!**

Also, other the instructions may get vague as you progress through this exercise.

### Reference
[Js-Basics Slides - Objects Section](http://slides.com/sgnl/js-basics/#/8)


### Object uses

Two uses:
1. Record of structured data
2. Index of key-value pairs (aka. Map)

### Record usage

***keys are known (static)***

Defined ahead of time:

```javascript
myObject =
  { keyOfNumber: 3,
    keyOfBoolean: true,
    'key-of-string': 'str',
    keyOfObject: { key5: 'nested'},
    keyOfArray: [ 0, 1 ] };

```

Adding/changing properties after the fact:

```javascript
myObject.keyOfNumber = 4;
myObject.newKey = 15;
```

Reading:

```javascript
console.log(myObject.keyOfNumber);

console.log(myObject['key-of-string']);
```


### Properties and Methods

> An object is a collection of properties, and a property is an association between a name (or key) and a value. A property's value can be a function, in which case the property is known as a method.

Example of property:
```
myArr = [ 1, 2, 3 ];
myArr.length  // <- length is property
```

Example of method:
```
console.log  // <- log is method
```


#### Method declaration

(With anonymous function):

```javascript
myObject = {
    myMethod: function (x) {
        // do something with x...
    }
};

// OR...

myObject = {};
myObject.myMethod = function (x) {
    // do something with x...
};
```

### Map usage

***keys are unknown (dynamic)***

Build as you go:

```javascript
myMap = {};
myKey = 'some string';
myValue = 27;

// assign value for a key
myMap[myKey] = myValue;

// read value for a key
console.log(myMap[myKey]);
```


#### Map iteration example: Environment Variables

process.env is just an `Object`

```
for (var key in process.env) {
    if (key === 'PATH') {

        var isWin = /^win/.test(process.platform);
        var delimeter = isWin ? ';' : ':';
        var pathElems = process.env.PATH.split(delimeter);

        for (var k = 0; k < pathElems.length; k++) {
            console.log(key, k, pathElems[k]);
        }
    } else {
        console.log(key, process.env[key]);
    }
}
```

## Function

(see logic)

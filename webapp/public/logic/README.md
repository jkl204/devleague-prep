# `if` statements
`if` statements are a way for our applications to take different __paths__ through our code or make __choices__ about what kind of behavior our application takes based on certain conditions or values in our variables. The variable or value that we are testing to be true is known as the `condition`.

__In Human__: If this condition is true, do something.

```javascript
var isTurnedOn = false;
function flipSwitch(){
  if(isTurnedOn){
    isTurnedOn = false;
  }
}
```

# `if...else` Statements
`If/Else` statments have the same behavior as our `if` statement above but we can add a secondary condition in the case that our `if` statement is not true to take another action instead. What if our light is already turned off when we flip the switch?

__In Human__: If this condition is true, do something, else if it is false, do something else.

```javascript
var isTurnedOn = false;
function flipSwitch(){
  if(isTurnedOn){
    isTurnedOn = false;
  }
  else{
    isTurnedOn = true;
  }
}
```

# For loops
Sometimes we want to loop over a collection of data stored in an `Array`or inspect each character in a `String`. Or we just want to execute a `block` of code a set number of times before continuing on with the execution of our program. `For` loops allow us to execute a `block` of code and at the end of each `iteration` of our for loop we will evaluate a `condition` to determine if our loop should run again similar to our `if` statment.

Our `for` loop is made up of 3 parts:
1. Variable initialization
2. Termination condition
3. Afterthought

__In Human__: While our variable `i` is less than the size of our `Array` retrieve each element in the `Array`. At the end of each loop add 1 to the current value of `i`.

```javascript
var lotteryNumbers = [0, 23, 12, 55, 2, 44, 65];
for(var i = 0; i < lotteryNumbers; i++){
  var currentLotteryNumber = lotteryNumbers[i];
  checkWinningNumber(currentLotteryNumber);
}

function makeCrazyLongString(string){
  var outputString = "";
  for(var i =0; i < 100; i++){
    outputString = outputString.concat(string);
  }
}
makeCrazyLongString('taco');
```


# Exercises

## 1. `function youGetTaco`
Write a function that takes a single argument.

Assume this argument is *String*.

If the value passed into our function is equal to the String `'eat'` have the
function return the *String* value `'EAT TACOS'`.

> What gets returned if action is not equal to 'eat'?


## 2. `function isNumberGreaterThan`
Write a function that takes two variables of type *Number* called `first` and `second`respectively.

Return `true` if the first number is greater than the second.
​

## 3. `function isTrue`
Write a function named `isTrue` with a parameter named `val`.

Assume the value that is passed in is a *Boolean*.

Have the function `return` whether the value is `true`.


## 4. `function isFalse`
Write a function named `isFalse` with a parameter named `val`.

Assume the value that is passed in is a *Boolean*.

Have the function return whether the value is `false`.

> *BONUS 1:* Create a new function `isFalsy`. Remove the assumption that `val` is a *Boolean* and return whether the value is "falsy."

> *BONUS 2:* Create a new function `isTruthy` that uses `isFalsy` and returns the opposite.


## 5. `function isEqual`
Write a function that takes two variables of type `String` called `firstWord` and `secondWord`respectively. Return 'AWWWWRIGHT' if the two are equal otherwise return 'Y U NO MATCH!'.


## 6. `function isNotEqual`
Write a function that takes two variables of type `String` called `firstWord` and `secondWord`respectively. Return 'AWWWWRIGHT' if the two are not equal otherwise return 'Y U MATCH!'.


## 7. `function doubleEquals`
Write a function that takes two variables of type `Boolean` called `first` and `second`respectively. Return `true` if both values are `true` otherwise return `false`.


## 8. `function totalOver30`
Write a function that takes three arguments.

Assume all arguments are of type `Number`.

Return `true` if the sum of all values are greater than 30, otherwise return `false`.


## 9. `function totalUnderWhat`
Write a function that takes four variables of type `Number` called `first` and `second` and `third` and `fourth` respectively. Return `true` if the sum of `first`, `second` and `third` are less than `fourth` otherwise return `false`.


## 10. `function loopToNumber`
Write a function that takes in a `Number` value named `limit` and have the function write a `for` loop that loops the number of times of `limit` and `console.log` each number as the loop executes.


## 11. `function showEachValue`
Write a function that takes in a `Array` value named `characters` that has a sequence of single character `String` values and have the function write a `for` loop that loops for each number of elements in the `Array` and `console.log` each character as the loop executes.


## 12. `function createArrayFromString`
Write a function that takes a single variable of type `String` called `word` and
write a `for` loop that creates an `Array` made up of each character in `word`
except for `A`. We don't want no stinking A in our Array.

> N.B. You will need to use the `Array.push()` method to complete this function.


## 13. `function greatSummator`
Write a function named `greatSummator` that takes in a single argument.

Assume this argument is an `Array` with any number of type `Number`.

Write a for loop to add all numbers in the `Array` and return the sum.


## 14. `function totalUnderWhatFor`
Write a function that takes two arguments.

Assume the first argument is an `Array` with any number of type `Number`.

Assume the second second argument is a `Number`.

Return `true` if the sum of all values in the first argument is less than the
second argument, otherwise return `false`.

> N.B. You can use your `greatSummator` function to get the sum!


## 15. `function checkTrueValues`
Write a function that takes a single argument.

Assume this argument is an `Array` with any number of type `Boolean`.

For each value in the passed in array, call our `isTrue` function.

Return true if all of those calls resolve to true, otherwise return false.

(In other words, if any of the calls to `isTrue` come back `false`, this
function should return `false`.)

/*
 * Function - youGetTaco
​ */

var myFirstAction;
var mySecondAction;

myFirstAction = 'eat';
console.log('1. youGetTaco', myFirstAction, youGetTaco(myFirstAction));

mySecondAction = 'dance';
console.log('1. youGetTaco', mySecondAction, youGetTaco(mySecondAction));

function youGetTaco(action) {
    if (action === 'eat') {
        return 'EAT TACOS';
    }
    // else return undefined; <-- N.B. It does this when no return is sepcified
}

/*
 * isNumberGreaterThan
​ */

function isNumberGreaterThan(first, second) {
    return first > second;
    // OR...
    /*
    if (first > second) {
      return true;
    } else {
      return false;
    }
    */
}

/*
# `Function - isTrue`
Write a function that takes in a `Boolean` value named `val` and have the function `return` whether the value is true.
*/
function isTrue(val) {
    // if we care only about truthy-ness
    return !!val;  // <-- guarantees a Boolean if val is not one

    // if we want to make sure val is a Boolean
    // return val === true;
}

/*
 * isFalse
​ */
function isFalse(val) {
    // if we care only about truthy-ness
    return !val;  // <-- guarantees a Boolean if val is not one

    // if we want to make sure val is a Boolean
    // return val === false;
}

/*
 * `Function - isEqual`
 * Write a function that takes two variables of type `String` called `firstWord` and `secondWord`respectively. Return 'AWWWWRIGHT' if the two are equal otherwise return 'Y U NO MATCH!'.
​ */
function isEqual(firstWord, secondWord) {
    if (firstWord === secondWord) {
        return 'AWWWWRIGHT';
    }
    // `else` keyword not needed...
    // function exits immediately with a `return`
    return 'Y U NO MATCH!';
}

/*
# `Function - isNotEqual`
Write a function that takes two variables of type `String` called `firstWord` and `secondWord`respectively. Return 'AWWWWRIGHT' if the two are not equal otherwise return 'Y U MATCH!'.
​*/
function isNotEqual(firstWord, secondWord) {
    var result; // <-- alternative to multiple `return` statements
    if (firstWord !== secondWord) {
        result = 'AWWWWRIGHT';
    } else {  // <-- if `if` clause doesn't return we need the `else` block
        result = 'Y U MATCH!';
    }
    return result;
}

/*

# `Function - doubleEquals`
Write a function that takes two variables of type `Boolean` called `first` and `second`respectively. Return `true` if both values are `true` otherwise return `false`.
​*/
function doubleEquals(first, second) {
    return first && second;
    // OR without the '&&'...
    /*
    if (isTrue(first)) {
        return isTrue(second);
    }
    return false;
    */
}

/*
 *`Function - totalOver30`
 *
 * Write a function that takes three arguments.
 * Assume all arguments are of type `Number`.
 * Return `true` if the sum of all values are greater than 30, otherwise return
 * `false`.
 */
function totalOver30(first, second, third) {
    return (first + second + third) > 30;
    // OR...
    // return isNumberGreaterThan(greatSummator([first, second, third]), 30)
}

/*
# `Function - totalUnderWhat`
Write a function that takes four variables of type `Number` called `first` and `second` and `third` and `fourth` respectively. Return `true` if the sum of `first`, `second` and `third` are less than `fourth` otherwise return `false`.
​*/
function totalUnderWhat(first, second, third, fourth) {
    return (first + second + third) < fourth;
    // OR...
    // return isNumberGreaterThan(fourth, greatSummator([first, second, third]));
}

/*
 * `Function - loopToNumber`
 * Write a function that takes in a `Number` value named `limit` and have the function write a `for` loop that loops the number of times of `limit` and `console.log` each number as the loop executes.
​ */
function loopToNumber(limit) {
    for (var i = 0; i < limit; i++) {
        console.log(i);
    }
}

/*
 * `Function - showEachValue`
 * Write a function that takes in a `Array` value named `characters` that has a sequence of single character `String` values and have the function write a `for` loop that loops for each number of elements in the `Array` and `console.log` each character as the loop executes.
​ */
function showEachValue(characters) {
    for (var i = 0; i < characters.length; i++) {
        console.log(characters[i]);
    }
}

/*
 * createArrayFromString
 */

var words;
var j;
var jthWord;
var jthWordResult;


words = ['Tomato', 'Pizza', 'Happy', 'Apple'];
for (j = 0; j < words.length; j++) {
    jthWord = words[j];
    jthWordResult = createArrayFromString(jthWord);
    console.log(jthWord, jthWordResult);
}


function createArrayFromString(word) {

    var wordCharsSansA;
    var i;
    var ithChar;

    wordCharsSansA = [];
    for (i = 0; i < word.length; i++) {
        ithChar = word[i];
        if (ithChar !== 'a' && ithChar !== 'A') {
            wordCharsSansA.push(ithChar);
        }
    }
    return wordCharsSansA;
}


/*
 * greatSummator
 */
 function greatSummator(arrayOfNumbers) {

   var sum;
   var i;

   sum = 0;
   for (i = 0; i < arrayOfNumbers.length; i++) {
     sum = sum + i;
   }
   return sum;
}


/*
 * totalUnderWhatFor
 */
function totalUnderWhatFor(arrayOfNumbers, total) {
  return greatSummator(arrayOfNumbers) < total;
}


/*
 * checkTrueValues
 */
function checkTrueValues(arrayOfBools) {

  var i;
  var result;

  result = true;
  for (i = 0; i < arrayOfBools.length; i++) {
    if (!isTrue(arrayOfBools[i])) {
      result = false;
      break;
      // OR just return false here and return true at the bottom
    }
  }
  return result;
}

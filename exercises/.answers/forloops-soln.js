/*
Getting Loopy
For loops are great for:

Iterating through an Array to access values within

or running a set of instructions over and over again for a set amount of times, executing functions or one-off code.

or any/all combinations of the above.
*/

//Exercises

/*
Presidents - Accessing values in an Array

Declare a variable named presidents which contains the first 5 presidents' last names: Washington, Adams, Jefferson, Madison, Monroe.

Now write a FOR loop which iterates through this Array.

Within the FOR loop, use console.log to:

Log the value of i. Use a message like Value of i is: and append the value of i to this String
Log what is at index i in the array. Use a message like Value at Index is: and append the value stored within the Array at that index.
console.log is a great tool to give you feed back about your loops and the data that you're working with. When all else fails use console.log to inspect and debug your code.

Example:

example-1

bonus: could you take the code inside of this FOR loop and encapsulate it inside of a function called printContent and still achieve the same result? This new function should accept two parameters.
*/


printPresidents(['Washington', 'Adams', 'Jefferson', 'Madison', 'Monroe']);


function printPresidents(presidents) {

  var i;
  var president;

  for (i = 0; i < presidents.length; i++) {
    president = presidents[i];
    printContent(president, i);
  }

  // N.B. still set here... how can I get rid of this?
  console.log(i);
  console.log(president);
}


// QQQ: If this is inside the other... does it need both params?
// What if I wanted to use this in a `forEach`?
function printContent(president, i) {
    console.log('Value of i is: ' + i);
    console.log('Value at Index is: ' + president);
}

/*
The String of Numbers

Declare a variable named stringOfNumbers and set it's value to '' (an empty String).

Then write a FOR loop that appends a Number value to that string starting from 10 all the way up to and including 20.

After the FOR loop, use console.log to inspect your variable. In the end your String should look like this 1011121314151617181920

bonus: could you take the code inside of this FOR loop and encapsulate it inside of a function called appendToString and still achieve the same result?
*/

console.log('createStringOfNumbers       ', createStringOfNumbers(10, 21));
console.log('createStringOfArrayOfNumbers', createStringOfArrayOfNumbers(10, 21));


function createStringOfNumbers(start, end) {

  var stringOfNumbers
  var i;

  stringOfNumbers = '';

  for (i = start; i <= end; ++i) {
    stringOfNumbers += i;
  }

  // why global state is bad...presidents.push('Hamilton');
  return stringOfNumbers;
}

function createStringOfArrayOfNumbers(start, end) {

  var arrOfNumbers
  var i;

  arrOfNumbers = [];

  for (i = start; i <= end; ++i) {
    arrOfNumbers.push(i);
  }

  return arrOfNumbers.reduce(appendToString, '');


  function appendToString(stringBeingBuilt, stringToAdd) {
    return stringBeingBuilt + stringToAdd;
  }
}


/*
 * Add only even numbrs to an array
 *
 * Declare a variable named evenNumberArray.
 *
 * Use a for-loop to add only even numbers to an Array.
 *
 * Add 50 even numbers to the evenNumberArray starting with the value 0.
 */

console.log(createEvenNumberArray(50));

function createEvenNumberArray(num) {

  var evenNumberArray;
  var j;

  evenNumberArray = [];

  for (j = 0; j < num * 2; j++) {
   if (j % 2 === 0) {
        evenNumberArray.push(j);
    }
  }

  return evenNumberArray;
}

/*
Accessing only the odd indexes of an Array - 'Not Even Brah'

Someone forgot to fill out this array! Oh noes...

Declare a new variable named oopsArray set it's value to be: [ 'turn' , , 'down' , , 'for' , , 'what' ]

using a FOR loop, add the string 'nope' to every odd index.

Example result should look like:

`[ 'turn' , 'nope' , 'down' , 'nope' , 'for' , 'nope' , 'what' ]`
*/

var oopsArray;
var k;

oopsArray = ['turn', , 'down', , 'for', , 'what'];

for (k = 0; k < oopsArray.length; k++) {
    if (k % 2 === 1) {
    // OR...
    // if (!oopsArray[k]) { <-- using falsy-ness of empty elems
        oopsArray[k] = 'nope';
    }
}

console.log('oopsArray', oopsArray.length, oopsArray);


/*
 * Going backwards?!
 *
 * Using a FOR loop, iterate through the Array stored at oopsArray backwards. console.log each value in the Array.
 *
 * example output:
 *
 * what
 * nope
 * for
 * nope
 * down
 * nope
 * turn
 */

console.log('Going backwards...');
printArrayBackwards(oopsArray);

function printArrayBackwards(arr) {

  var k;

  for (k = arr.length - 1; k >= 0; k--) {
    console.log(arr[k]);
  }
}

/*

isNapTime

Declare a variable named isNapTime. Set it to false

Declare a variable named napSchedule. Set it's value to be an Array with the values [false, false, true, false, true, true]

Declare a function named nap. This function takes in a single parameter called schedule

  - If schedule is true then use console.log to display the message 'ZzZzZzZz'

  - otherwise if schedule is false use console.log to display the message 'Gotta get to work!' and then change the value of isNapTime to true

Now, Write a FOR loop that iterates through the napSchedule array and runs the function nap while passing in the value at the current position of napSchedule into the nap function.
*/

var isNapTime;
var napSchedule;
var p;

isNapTime = false;
napSchedule = [false, false, true, false, true, true];

for (p = 0; p < napSchedule.length; p++) {
    nap(napSchedule[p]);
}


function nap(schedule) {
    if (schedule) {
        console.log('ZzZzZzZz');
    } else {
        console.log('Gotta get to work!');
        isNapTime = true;
    }
}


/*
CopyArray - clone array values

Declare a variable named copyOfValuesArray and set it's value to be an empty array, [].

Declare a variable named valuesArray and set it's value to be an array, [99, 66, 829, 1941, 8, 76].

Declare a function named copyArray which takes two arguments: originArray and destinationArray. Inside of this function you will loop through the contents of originArray and push each value into destinationArray.

To get started, below your function declaration, call your function and pass in the two variables, valuesArray and copyOfValuesArray. After that, use console.log to to inspect the values of valuesArray and copyOfValuesArray to make sure they have the same values (which means your function worked!).
*/


var valuesArray;

valuesArray = [ 99, 66, 829, 1941, 8, 76 ];

console.log('copyArray', valuesArray, copyArray(valuesArray));


function copyArray(originalArr) {

  var arrCopy;
  var i;

  arrCopy = [];

  for (i = 0; i < originalArr.length; i++) {
      arrCopy.push(originalArr[i]);
  }

  return arrCopy;
}



/*
 *
 * Final Boss: Stage 1 - Only String Values
 *
 * Given: The Array of miscelaneous values stored in the miscStorage varaible.
 *
 * Goal: Filter out all of the non-String values from the array
 *
 * Create a function to perform this filtering.
 * This function should take a single parameter, assumed to be an Array.
 *
 * Have the function return a new Array with on the String values from the
 * original Array, preserving order.
 *
 */

var miscStorage;

miscStorage = [ [], 'Carrots', 9, 'Beets', {}, {name: "Todd B."}, 'Mush' ];
console.log('filterStrings', generateArrayOfStrings(miscStorage));

function generateArrayOfStrings(storage) {

    var strStorage;
    var i;
    var storedValue;

    strStorage = [];
    for (i = 0; i < storage.length; i++) {
        storedValue = storage[i];
        if (isString(storedValue)) {
            strStorage.push(storedValue);
        }
    }
    return strStorage;


    function isString(value) {
      return typeof(value) === 'string';
    }
}



/*
 * Final Boss: Final Form
 */
var currentClass;

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

console.log(currentClass);
graduateAndSetNewClass(currentClass);
console.log(currentClass); // <-- notice the changes


function graduateAndSetNewClass(graduatingClass) {

  var i;
  var student;

  for (i = 0; i < graduatingClass.length; i++) {
    student = graduatingClass[i];
    if (student.enrolled) {
        student.graduated = true;
    } else {
        student.enrolled = true;
    }
  }
}

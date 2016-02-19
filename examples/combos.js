var i;
var j;
var k;
var l;
var numbers;
var evenNumbers;

numbers = [ 4, 3, 7, 8];

evenNumbers = numbers.filter(isEven);
//evenNumbers.forEach(print);

myForEach(evenNumbers, print);

function myForEach(arr, fn) {
  var i;

  for (i = 0; i < arr.length; i++) {
    fn(arr[i]);
  }
  

  console.log('forEach is finshed...');
}



for (i = 0; i < numbers.length; i++) {
  if (isEven(numbers[i])) {
    print(numbers[i]);
  }
}

//numbers.forEach(print);

function print(something) {
  console.log(something);
}

function isEven(number) {
  return number % 2 === 0;
}

// what are all number pairs

for (i = 0; i < 10; i++) {
  for (j = 0; j < 10; j++) {
    for (k = 0; k < 10; k++) {
      for (l = 0; l < 10; l++) {
        tryPassword(i, j, k, l); 
      }
    }
  }
}

function tryPassword(a, b, c, d) {
  //console.log(a, b, c, d);
}


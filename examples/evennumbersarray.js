// variables
var evenNumberArrayOf50;
var evenNumberArrayOf10;

// logic
evenNumberArrayOf50 = createEvenNumberArray(50);
console.log(evenNumberArrayOf50);

evenNumberArrayOf10 = createEvenNumberArray(10);
console.log(evenNumberArrayOf10);

// functions
function createEvenNumberArray(count) {
  var i;
  var evenNumberArray;
  var evenNumber;

  evenNumberArray = [];
  for (i = 0; i < count; i++) {
    evenNumber = 2 * i;
    evenNumberArray.push(evenNumber);
  }
  return evenNumberArray;
}





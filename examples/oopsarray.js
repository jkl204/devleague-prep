// variables
var oopsArray;
var i;
var backwardsIndex;

// logic
oopsArray = [
  'turn' , , 'down' , , 'for' , , 'what' ];

/* optimized *
for (i = 1; i < oopsArray.length; i = i+2) {
  oopsArray[i] = 'nope';
}*/

for (i = 0; i < oopsArray.length; i++) {
  if (isOdd(i)) {
    oopsArray[i] = 'nope';
  }
}

console.log(oopsArray);

console.log(oopsArray[6]);
console.log(oopsArray[5]);
console.log(oopsArray[4]);
console.log(oopsArray[3]);
console.log(oopsArray[2]);
console.log(oopsArray[1]);
console.log(oopsArray[0]);

for (i = 0; i < oopsArray.length; i++) {
  backwardsIndex = oopsArray.length - 1 - i;
  console.log(i, oopsArray[backwardsIndex]);
}

for (i = oopsArray.length - 1; i >= 0; i++) {
  console.log(i, oopsArray[i]);
}

// functions
function isOdd(num) {
  return num % 2 === 1; 
}

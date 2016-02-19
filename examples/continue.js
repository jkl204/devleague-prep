var i;
var arr;
var value;
var oddNum;

console.log(Math.PI);

// print out the first 50 odd numbers

for (i = 0; i < 50; i++) {
  oddNum = 2 * i + 1;
  console.log(oddNum); 
}


arr = [ 4, 6, 3, 8, 10, 23, 26, 34, 8 ];

// print out all numbers greater than 10

for (i = 0; i < arr.length; i++) {
  value = arr[i];
  if (value <= 10) {
    continue;
  }

  console.log(value);
}

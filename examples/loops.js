var myArr;
var i;
var j;
var continents;
var firstToStartWithA;
var continent;

continents =
  [ 'North America',
    'South America',
    'Europe',
    'Asia',
    'Africa',
    'Australia',
    'Antarctica' ];

console.log('There are ' +
    continents.length +
    ' continents.');
console.log('They are:');

// option 1
for (i = 0; i < continents.length; i++) {
  continent = continents[i];
  for (j = 0; j < continent.length; j++) {
    console.log(i, j, continent[j]);
  }
}

// option 2
continents.forEach(function (continent) {
  console.log(continent);
});

// option 3
forEach(continents, printContinent);
//continents.forEach(printContinent);

function printContinent(continent, k) {
  console.log(k, continent);
}


// my forEach
function forEach(arr, fn) {
  var i;
  for (i = 0; i < arr.length; i++) {
    fn(arr[i], i);
  }
}





for (i = 0; i < continents.length; i++) {
  continent = continents[i];
  if (continent[0] === 'A') {
    console.log('Found continent starting with A:', continent);
    firstToStartWithA = continent;
    break;
  }
}


console.log('The first continent to start with A:',
    firstToStartWithA);


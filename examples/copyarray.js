var copyOfValuesArray;

copyOfValuesArray = [];

valuesArray = [99, 66, 829, 1941, 8, 76];

copyArray(valuesArray, copyOfValuesArray);

console.log(valuesArray);
console.log(copyOfValuesArray);

function copyArray(originArray, destinationArray) {
  for (i = 0; i < originArray.length; i++) {
    destinationArray.push(originArray[i]);
  }
}

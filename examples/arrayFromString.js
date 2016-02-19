var result;

result = createArrayFromString('hello world');
console.log(result);

result = createArrayFromString('good evening');
console.log(result);

function createArrayFromString(word) {
  var i;
  var ithChar;
  var array;
  
  array = [];

  for (i = 0; i < word.length; i++) {
    ithChar = word[i];
    if (ithChar !== 'a') {
      array.push(ithChar);
    }
  }

  return array;
}

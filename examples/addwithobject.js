// variables
var myObj;
var myModifiedObj;

// logic
myObj = {
  a: 5,
  b: 7,
  result: 0
};

console.log(myModifiedObj);
console.log(myObj);
console.log("CALLING FUNCTION...");
myModifiedObj = addObjectProps(myObj);
console.log(myModifiedObj);
console.log(myObj);

// functions
function addObjectProps(obj) {
  var sum;
  var myNewObj;

  myNewObj = obj;
  sum = obj.a + obj.b;
  myNewObj = {
    a: obj.a,
    b: obj.b,
    result: sum
  };
  return myNewObj;
}

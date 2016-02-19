//2/9/16 code exercise
//J. Lee
//vars
var presidents;
var stringOfNumbers;
var evenNumberArray;
var oopsArray;
var isNapTime;
var napSchedule;
var copyOfValuesArray;
var valuesArray;
//dealing with objects sub declarations...
var miscStorage;
var currentClass;
//end objects vars

//var init, logic
presidents = ['Washington', 'Adams', 'Jefferson', 'Madison', 'Monroe'];
stringOfNumbers = '';

//presidents.forEach(printContent);
//presidents loop
//
for(i = 0; i < presidents.length; i++){
	console.log('The value of i is: ', i);
	console.log('The value at Index is: ', presidents[i]);
}
//*/

//presidents done w/while loop
/*
var i = 0;
while(i < presidents.length){
	console.log('The value of i is: ', i);
	console.log('The value at Index is: ', presidents[i]);
	i++;
}
//*/

//console.log(appendToString(10,20));
//stringOfNumbers loop
for( j = 10, k = 20; j <= k; j++){
	stringOfNumbers += j;
}

//string of numbers done with a while loop
/*
var i = 10;
var numstring = '';
while(i <= 20){
	numstring += i;
	i++;
}
console.log(numstring);
//*/

console.log(stringOfNumbers);

//evenNumberArray loop
evenNumberArray =[];
for(l = 0, m = 0; l < 50; l++){
	evenNumberArray.push(m);
	m += 2;
}
console.log("50 even numbers: ", evenNumberArray);

//evenNumberArray done with while loop
/*
var i = 0;
var evenNumberArray2=[];
while(i < 50){
	evenNumberArray2.push(i*2);
	i++;
}
console.log("50 even numbers while looped", evenNumberArray2);
//*/

//evenNumberArray with recursion, cause why not.
//*
evenNumberArray2 = [];
recurseEvenNumber(50, evenNumberArray2);
console.log("50 even numbers recursive", evenNumberArray2);

//takes the number of desired even numbers to add to the array as ct, adds them from 0 to evenArray
function recurseEvenNumber(ct, evenArray){
	ct--;
	if(ct<0){
		return;
	}
	recurseEvenNumber(ct, evenArray);
	evenArray.push(ct*2);
}
//*/

//odd indicies loop in oopsArray
oopsArray = ['turn', , 'down', , 'for', , 'what'];
for(n = 1; n < oopsArray.length; n += 2){
	oopsArray[n] = 'nope';
}
console.log(oopsArray);

//odd indicies with while loop
/*
var oopsArray2 = ['turn', , 'down', , 'for', , 'what'];
var i = 1;
while(i<oopsArray2.length){
	oopsArray2[i] = 'nope';
	i+=2;
}
console.log(oopsArray2);
//*/

//iterate backwards through oopsArray loop
for(o = oopsArray.length - 1; o >= 0; o--){
	console.log(oopsArray[o]);
}

//iterate backwards using while loop
/*
var i = oopsArray.length-1;
while(i>=0){
	console.log(oopsArray[i]);
	i--;
}
//*/

//isNapTime loop
isNapTime = false;
napSchedule = [false, false, true, false, true, true];
for(p = 0; p < napSchedule.length; p++){
	nap(napSchedule[p]);
}

//isNapTime using while loop
/*
var i =0;
while(i< napSchedule.length){
	nap(napSchedule[i]);
	i++;
}
//*/

//CopytArray - clone array values loop
copyOfValuesArray = [];
valuesArray = [99, 66, 829, 1941, 8, 76];
copyArray(valuesArray, copyOfValuesArray);
console.log('printing out result of copyArray: ',valuesArray, copyOfValuesArray);

//objects logic
//miscStorage
miscStorage = [ [], 'Carrots', 9, 'Beets', {}, {name: "Todd B."}, 'Mush'];
console.log("miscStorage: ", miscStorage);
console.log("only the strings in miscStorage", generateArrayOfStrings(miscStorage));
//currentclass
currentclass = [
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

console.log("Current Class before graduateAndSetNewClass: ");
currentclass.forEach(printClass);

for(p=0; p<currentclass.length; p++){
	graduateAndSetNewClass(currentclass[p]);
}

console.log("Current Class after graduateAndSetNewClass: ");
currentclass.forEach(printClass);

//functions
//function to pass to foreach to just print to console the index/element for presidents exercise
function printContent(pres, presIndex){
	console.log('The value of i is: ', presIndex);
	console.log('The value at Index is: ', pres);
}

//function to recreate stringOfNumbers loop, let's use some recursion for ?simplicity?
//function will take two ints, start and end, and return a string with all ints from start to end appended in a string
function appendToString(start, end){
	if(start === end){ 
		return start; 
	}
	return '' + start + appendToString(start + 1, end);
}

//function for isNapTime
function nap(schedule){
	if(schedule){
		console.log('ZzZzZzZz');
		return;
	}
	console.log('Gotta get to work!');
	isNapTime = true;
	return;
}

//function for CopyArray exercise
function copyArray(originArray, destinationArray){
	for(i = 0; i < originArray.length; i++){
		destinationArray.push(originArray[i]);
	}
}

//function for checking object type in an array, keep only string values and return an array with only the strings
function generateArrayOfStrings(storage){
	var stringArray = [];
	for(i = 0; i < storage.length; i++){
		if(typeof storage[i] === "string"){
			stringArray.push(storage[i]);
		}
	}
	return stringArray;
}

//function to take objects and mess with their attributes/values
//hmm, compiler complained about the keyword class...
function graduateAndSetNewClass(class1){

	if(class1.hasOwnProperty("enrolled") && class1.hasOwnProperty("graduated")){
		
		if(class1.enrolled === true){
			class1.graduated = true;
		}
		else if (class1.enrolled === false) {
			class1.enrolled = true;
		}
	}
}

//helper function to print out object class properties
function printClass(class1, i){
	if(class1.hasOwnProperty("name") && class1.hasOwnProperty("enrolled") && class1.hasOwnProperty("graduated")){
		console.log("student name: ", class1.name, " enrolled: ", class1.enrolled, " graduated: ", class1.graduated);
	}
}
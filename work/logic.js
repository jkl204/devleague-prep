//2.5.16 exercise
//J. Le
var tacoArray = ['T','A','C','O','S','Z'];
var intArray = [3, 4, 5, 6, 7];
var truthArray = [true, true, true, true, true, true, true, false, true];

console.log(youGetTaco("eat"));

console.log("isFalse? false:", isFalse(false));

console.log("doubleEquals? true false:", doubleEquals(true, false))

console.log("isEqual: pizza , cat:", isEqual("pizza", "cat"));

console.log("isNotEqual: pizza , cat:", isNotEqual("pizza", "cat"));

console.log("showEachValue:");
showEachValue(tacoArray);

console.log("totalUnderWhat 2, 3, 4, 10:", totalUnderWhat(2, 3, 4, 10));

console.log("looptoNumber, limit 3:");
looptoNumber(3);

//showEachValue("StringArray");
console.log("createArrayFromString:");
createArrayFromString("WACO TACO");

console.log("totalUnderWhatFor:",totalUnderWhatFor(intArray, 30));

console.log("checkTrueValues:", checkTrueValues(truthArray));

//fcns
function youGetTaco(action){
	if(action === "eat"){ 
		return "EAT TACOS";
	}
}

function isNumberGreaterThan(first, second) {
	return (first > second);
}

function isTrue(val){ 
	return val;
}

function isFalse(val){
	return !(val);
}

function isEqual(firstWord, secondWord){
	if (firstWord === secondWord){
		return "AWWWWRIGHT";
	}
	else {
		return "Y U NO MATCH!";
	}
}

function isNotEqual(firstWord, secondWord){
	if (firstWord !== secondWord){
		return "AWWWWRIGHT";
	}
	else {
		return "Y U MATCH!";
	}
}

function doubleEquals(first, second){
	return (first && second);
}

function totalOver30(first, second, third){
	return((first + second + third) > 30);
}

function totalUnderWhat(first, second, third, fourth){
	return ((first + second + third) < fourth);
}

function looptoNumber(limit){
	var count;
	for (count = 1; count <= limit; count++){
		console.log(count);
	}
}

function showEachValue(characters){
	var start;
	//console.log(characters.length);
	if(characters.length === 0 || characters.length === undefined){
		return;
	}

	for(start = 0; start < characters.length; start++){
		console.log(characters[start]);
	}
	return;
}

function createArrayFromString(word){
	var start;
	var wordArray;
	
	if(word.length === 0 || word.length === undefined){
		return '';
	}

	wordArray = [];
	for(start = 0; start < word.length; start++){
		if(word[start] !== 'A') {
			wordArray.push(word[start]);
		}
	}
	console.log(wordArray);
	return wordArray;
}

function greatSummator(NumArray){
	var start;
	var sum;

	if(NumArray.length === 0 || NumArray.length === undefined){
		return 0;
	}

	sum = 0;
	for(start = 0; start < NumArray.length; start++){
		sum += NumArray[start];
	}
	
	//console.log("greatSummator", sum);
	return sum;
}

function totalUnderWhatFor(NumArray, total){
	return (greatSummator(NumArray) < total);
}

function checkTrueValues(BoolArray){
	var start;
	var allTrue;
	allTrue = true;
	
	if(BoolArray.length === 0 || BoolArray.length === undefined){
		return false;
	}

	for(start = 0; start < BoolArray.length; start++){
		
		if((typeof BoolArray[start]) !== "boolean"){
			console.log("checkTrueValues, non boolean value found in the array")
			return false;
		}

		allTrue = (allTrue && BoolArray[start]);
	}

	return allTrue;
}

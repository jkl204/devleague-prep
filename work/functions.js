//J. Lee

var a;
var b;
var sum;
var difference;
var product;
var howMany;
var myFullName;
var canDrinkBeer;

a = 2;
b = 3;

add();
subtract();
multiply();

checkDifference();
checkSum();
checkProduct();

console.log(addThenSubtract(4,5,7));

a = 2;
b = 3;

myFullName = createFullName("jarren", "lee");
console.log(myFullName);
canDrinkBeer = verifyDrinkingAge(30);
console.log("canDrinkBeer?", canDrinkBeer);
addThenMultiply(a, b, b);
//console.log("test please");
repeater();

function add(){
	sum = a + b;
	return sum;
}

function subtract(){
	difference = a - b;
	return difference;
}

function multiply(){
	product = b * a;
	return product;
}

function checkDifference(){
	console.log("My football teamlost " + difference + " times this week.");
	return;
}

function checkSum(){
	console.log("I CAN ADDZ " + sum + " NUMBERS");
	return;
}

function checkProduct(){
	console.log(product * difference);
	return;
}

function addThenSubtract(int1, int2, int3){
	a = int1;
	b = int2;
	a = add();
	b = int3;
	return subtract();
	//?return difference;
}

function addThenMultiply(int1, int2, int3){
	a = int1;
	b = int2;
	a = add();
	b = int3;
	howMany = multiply();
	return product;
	//?return product;
}

function createFullName(firstName, lastName){
	return firstName + " " + lastName;
}

function verifyDrinkingAge(age){
	return age >= 21;
}

function throwParty(){
	if (canDrinkBeer) {
		console.log("This party will have an open bar.");
	}
	else {
		console.log("The party will have tons of cake!");
	}
}

function eatFood(firstName, lastName, food){
	console.log(createFullName(firstName, lastName) + " loves to eat " + food);
	return;
}

function repeater(){
	if (canDrinkBeer) {
		repeat("Bacon Pancakes, makin' Bacon Pancakes...", howMany);
	}
	else {
		repeat("Let it go.... Let it go.... LET IT GOOOOOOoOoOoOo...", howMany)
	}
	return;

	function repeat(stringRepeated, times){
		if (times < 1){
			return;
			//console.log("No more...",stringRepeated)
		}
		else if (times == 1) {
			console.log(stringRepeated);
		}
		else {
			console.log(stringRepeated);
			repeat(stringRepeated, times - 1)
		}
		return;
	}

}

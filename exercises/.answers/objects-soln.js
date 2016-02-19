var plainBox;
var passengerList;
var passengerAges;
var myCar;


plainBox = {};
putStuff(plainBox);
console.log(plainBox.contents);
console.log(shuffle(plainBox.contents));
console.log(plainBox.contents);


passengerList = [ 'Jon', 'Jason' ];
passengerAges = [ 19, 12 ];

myCar = {
	model: 'Chevy',
	year: 2010,
	passengers: []
};

weRidin(myCar, passengerList, passengerAges);

displayPassengers(myCar);


function putStuff(box) {

	var i;

	//box.contents = box.contents || [];
	//if (box.contents === undefined) {
	if (!box.contents) {
		box.contents = [];
	}
	for (i = 0; i < 10; i++) {
		box.contents.push(getRandomNumberBetween(0, 100));
	}
	return box;
}

function buildPerson(name, age) {
	var person;
	person = {};
	person.name = name;
	person.age = age;
	return person;
}

function weRidin(car, names, ages) {

	var i;
	var passenger;
	//car.passengers = car.passengers || [];

	for (i = 0; i < names.length; i++) {
		passenger = buildPerson(names[i], ages[i]);
		car.passengers.push(passenger);
	}

	return car;
}

function displayPassengers(car) {

	var i;
	var passenger;

	for (i = 0; i < car.passengers.length; i++) {
		passenger = car.passengers[i];
		console.log(
			passenger.name +
			', age ' +
			passenger.age +
			', is riding dirty!');
	}
}




/* Optional */

/*
 * low and high are inclusive
 *
 * Math.random() returns [0, 1)
 * So (2, 5) becomes:
 * 1. floor(~[0, (5 + 1) - 2)) + 2
 * 2. floor(~[0, 4)) + 2
 * 3. ~[0, 3] + 2
 * 4. ~[2, 5]
 */
function getRandomNumberBetween(low, high) {
	return Math.floor(Math.random() * (high + 1 - low)) + low;
}

function shuffle(arr) {

	var i;
	var j;
	var shuffledArr;

	// Fisher-Yates in-place shuffling algorithm
	/*var tmp;
	shuffledArr = arr;
	for (i = arr.length - 1; i >= 1; i--) {
		j = getRandomNumberBetween(0, i);
		tmp = shuffledArr[i];
		shuffledArr[i] = shuffledArr[j];
		shuffledArr[j] = tmp;
	}*/

  // Fisher-Yates "inside-out" algorithm (for copying array)
	shuffledArr = [];
	for (i = 0; i < arr.length; i++) {
	  j = getRandomNumberBetween(0, i);
		if (j !== i) {
			shuffledArr.push(shuffledArr[j]);
			shuffledArr[j] = arr[i];
		} else {
		  shuffledArr.push(arr[i]);
		}
	}

	return shuffledArr;
}

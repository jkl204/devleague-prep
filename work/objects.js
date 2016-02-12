//J. Lee
//exercise 2/11/2016

//-----var declarations
var plainBox;
var stockCar = {
	model: "Toyota",
	year: 2015,
	automaticTransmission: false,
	driver: null,
	passengers: []
};
var plainPerson;
var arrayOfObjects;
var a_b_res_Object;
var plainBoxPointer;
var passengerList;
var passngerAges;

//------logic
//plainbox exercise
plainBox = {};

plainBox.color = "red";
plainBox.size = 13;
plainBox.contents = [];

//plainperson exercise
plainPerson = {};
buildPerson(plainPerson, "Jake", 42);
console.log("plainPerson object", plainPerson);
console.log("plainPerson name", plainPerson.name);
console.log("plainPerson age", plainPerson.age);

//array of objects exercise
arrayOfObjects = [
  {
    id: 0,
    date: "Monday Jan 25 2015 2:01 PM",
    total: "279.38"
  },
  {
    id: 1,
    date: "Monday Jan 27 2015 11:31 AM",
    total: "79.80"
  },
  {
    id: 2,
    date: "Monday Feb 1 2015 7:56 AM",
    total: "15.62"
  },
  {
    id: 3,
    date: "Monday Feb 1 2015 9:43 AM",
    total: "19.83"
  },
  {
    id: 4,
    date: "Monday Feb 1 2015 11:08 PM",
    total: "56.69"
  },
  {
    id: 5,
    date: "Monday Feb 13 2015 10:22 AM",
    total: "137.92"
  },
  {
    id: 6,
    date: "Monday Feb 14 2015 6:54 PM",
    total: "938.65"
  },
  {
    id: 7,
    date: "Monday Feb 14 2015 7:17 PM",
    total: "43.77"
  },
  {
    id: 8,
    date: "Monday Feb 14 2015 7:18 PM",
    total: "28.54"
  },
  {
    id: 9,
    date: "Monday Feb 14 2015 7:18 PM",
    total: "194.33"
  }
];

console.log("\nprint orders exercise: ")
printProcessedOrders(arrayOfObjects);

//addition with object exercise
a_b_res_Object = {
	a: 1,
	b: 2,
	result: 7
};

console.log("Result Before addition: ", a_b_res_Object.result);
objectAddition(a_b_res_Object);
console.log("Result After addition: ", a_b_res_Object.result);

//print sum exercise
console.log("\nprint sum exercise");
printObjectAddResult(a_b_res_Object);
a_b_res_Object.a = 3;
a_b_res_Object.b = 4;
objectAddition(a_b_res_Object);
printObjectAddResult(a_b_res_Object);

//plainbox exercise
console.log("\nplainbox exercise");
plainBoxPointer = stuffBox(plainBox);
console.log(plainBoxPointer);

//detect transmission exercise
console.log("\ndetecting transmission: ");
typeOfTransmission(stockCar);

//set driver exercise
console.log("\nset driver exercise: ");
setDriver(stockCar, plainPerson);
console.log(stockCar);

//add passengers exercise
console.log("\nadd passengers exercise:");
passengerList = ['Jon', 'Jason', 'Tony', 'Joe', 'Jesse', 'Nigel', 'Kelli', 'Marifel', 'Victor'];
passengerAges = [19, 12, 21, 22, 16, 9, 19, 20, 15];
AllAboard(stockCar, passengerList, passengerAges);
console.log(stockCar);

//print riders exercise
console.log("\nprint car passengers exercise:");
printRiders(stockCar);

//-----functions
function buildPerson(person, nameString, age){
	person.name = nameString;
	person.age = age;
	return person;
}

function printProcessedOrders(orders){
	for( i = 0; i < orders.length; i++){
		console.log("=====");
		console.log("id: ", orders[i].id);
		console.log("purchase date: ", orders[i].date);
		console.log("purchase total: ", orders[i].total);
	}
}

//addition with object exercise
function objectAddition(someObject){
	someObject.result = someObject.a + someObject.b;
	return someObject;
}

//print sum exercise
function printObjectAddResult(resultObject){
	resultObject.output = resultObject.a + ' + ' + resultObject.b + ' = ' + resultObject.result;
	console.log(resultObject.output);
	return resultObject;
}

//plainbox exercise
function stuffBox(box){
	if(!Array.isArray(box.contents)){
		console.log("box contents not an array?");
		return;
	}
	for( i = 0; i < 10; i++){
		box.contents.push(Math.floor(Math.random() * 10 + 1));
	}
	return box;
}

//transmission exercise
function typeOfTransmission(car){
	if( car.automaticTransmission === true ){
		console.log("This " + car.year + " " + car.model + " comes with an automatic transmission.");
	}
	else {
		console.log("Sorry, this " + car.year + " " + car.model + " drives with a stick.")
	}
	return;
}

//car driver exercise
function setDriver(car, human){
	car.driver = human;
	return;
}

//add passengers exercise
function AllAboard(car, names, ages){
	var passenger;

	if(!Array.isArray(car.passengers)) {
		console.log("car passengers not an array?");
		return;
	}

	if(names.length === ages.length){
		for(i = 0; i < ages.length; i++){
			passenger = {};
			car.passengers.push(buildPerson(passenger, names[i], ages[i]));
		}
	}

	passenger = null;
	return;
}

//print riders exercise
function printRiders(car){
	
	if(!Array.isArray(car.passengers)){
		console.log("car riders not an array?");
		return;
	}

	if (car.passengers.length > 0){
		var riders = car.passengers;
		for( i = 0; i < riders.length; i ++){
			console.log(riders[i].name + ", age " + riders[i].age + ", is riding dirty!");
		}
		riders = null;
	}
}

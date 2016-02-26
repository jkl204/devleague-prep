window.onload = function(){

var products;
var table;
var tableBody;
var tableRow;

// var tableDiv;
var priceSum;
var i;

table = document.getElementById("contentTable");
tableBody = document.getElementById("contentTableBody");

products = [
  { "name": "Lusicious Jello Mix", "description": ["Very Elegant", "Trending item", "Come in Purple"], "price": 80.65 },
  { "name": "Tarnished Standing Desk", "description": ["Modular", "Works for both Tall and Loud People", "Smells like Productivity"], "price": 1654.99},
  { "name": "Hand-made Hand Grenades", "description": ["Such gift!", "Much boom!", "Very safe for kids"], "price": 10.44},
  { "name": "Pan-fried Cookie Dough", "description": ["Chocolate", "Family-size", "Hot Mess"], "price": 16.99 },
  { "name": "Fancy Dress Hanger", "description": ["Keep organized", "On Sale"], "price": 67.32 },
  { "name": "Snarky Britsh Mustache 3-Pack", "description": ["Sharing is caring!", "Hugs not drugs", "As seen on 'So You Think You Can Dance - Nigeria!'"], "price": 1.99 },
];

loadTable();

function loadTable(){
	products.forEach(appendTableRow);
	appendSubTotal();
}

function appendTableRow(product){
	var tableCell1;
	var tableCell2;
	var tableCell3;
	// tableDiv = document.createElement("div");
	tableCell1 = document.createElement("td");
	tableCell2 = document.createElement("td");
	tableCell3 = document.createElement("td");
	tableRow = document.createElement("tr");

	tableCell1.textContent = product.name;
	tableCell2.textContent= product.description;
	tableCell3.textContent = product.price;
	// tableCell1.appendChild(tableDiv);
	tableRow.appendChild(tableCell1);
	tableRow.appendChild(tableCell2);
	tableRow.appendChild(tableCell3);
	tableBody.appendChild(tableRow);
}

function appendSubTotal(){
	var tableCell1;
	var tableCell2;
	var tableCell3;
	//tableDiv = document.createElement("div");
	tableCell1 = document.createElement("td");
	tableCell2 = document.createElement("td");
	tableCell3 = document.createElement("td");
	tableRow = document.createElement("tr");

	// tableDiv.textContent = "Subtotal : " + calcSubTotal();
	tableCell1.textContent = "Subtotal: ";
	tableCell2.textContent = " ";
	tableCell3.textContent = calcSubTotal();
	tableRow.appendChild(tableCell1);
	tableRow.appendChild(tableCell2);
	tableRow.appendChild(tableCell3);
	tableBody.appendChild(tableRow);
}

function calcSubTotal(){
	priceSum = 0;

	for(i = 0; i < products.length; i++){
		priceSum += products[i].price;
	}

	return priceSum;
}

}
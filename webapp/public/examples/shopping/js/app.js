var shoppingCart = [
  {
    name: 'Socks',
    price: 5,
    description: 'Clean',
    quantity: 0
  },
  {
    name: 'Shirt',
    price: 10,
    description: 'Also clean',
    quantity: 0
  },
  {
    name: 'Jacket',
    price: 15,
    description: 'Questionable cleanliness',
    quantity: 0
  }
];

function createOptions(quantityElem) {
  for (var i = 0; i < 10; i++) {
    var optionElem = document.createElement('option');
    optionElem.value = i;
    optionElem.textContent = i;
    quantityElem.appendChild(optionElem);
  }
}

function createUpdatePriceHandler(item, quantityElem, priceElem) {
  return function() {
    updatePrice(item, quantityElem, priceElem);
  }
}

function updatePrice(item, selectElem, priceElem) {
    var optionElem =  selectElem.options[selectElem.selectedIndex];
    var selectedQuantity = optionElem.value;
    console.log('Price is updated', item.name, selectedQuantity);
    priceElem.textContent = '$' + (item.price * selectedQuantity);
    item.quantity = selectedQuantity;
}

function createItemElement(item, shoppingCartContainer) {

    var itemElem = document.createElement('div');

    var labelElem = document.createElement('div');
    labelElem.innerHTML = '<b>' + item.name + '</b>';
    itemElem.appendChild(labelElem);

    var quantityElem = document.createElement('select');
    createOptions(quantityElem);
    itemElem.appendChild(quantityElem);

    var priceElem = document.createElement('div');
    updatePrice(item, quantityElem, priceElem); // initial value
    itemElem.appendChild(priceElem);


    quantityElem.addEventListener('change', createUpdatePriceHandler(item, quantityElem, priceElem));

    shoppingCartContainer.appendChild(itemElem);
}

function createUpdateSubtotalHandler(totalElem) {
  return function() {
    updateSubtotal(totalElem);
  }
}

function updateSubtotal(totalElem) {
  var subtotal = 0;
  for (var i = 0; i < shoppingCart.length; i++) {
    subtotal += shoppingCart[i].price * shoppingCart[i].quantity;
  }
  console.log('subtotal is now', subtotal);
  totalElem.textContent = '$' + subtotal;
}

function setUpSubtotalSection(shoppingCartContainer) {
  var totalElem = document.createElement('div');
  updateSubtotal(totalElem);
  shoppingCartContainer.appendChild(totalElem);

  var buttonElem = document.createElement('button');
  buttonElem.textContent = 'Update Price';
  buttonElem.addEventListener('click', createUpdateSubtotalHandler(totalElem))
  shoppingCartContainer.appendChild(buttonElem);
}

window.onload = function() {
  var shoppingCartContainer = document.getElementById('myShoppingCart');

  for (var i = 0; i < shoppingCart.length; i++) {
    var item = shoppingCart[i];
    createItemElement(item, shoppingCartContainer);
  }

  setUpSubtotalSection(shoppingCartContainer);
}

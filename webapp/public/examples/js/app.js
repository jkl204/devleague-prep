function addLastName() {

  var lastNameElem = document.createElement('span');

  var lastNameText = document.createTextNode('Egesdal');

  lastNameElem.id = 'myLastName';
  lastNameElem.appendChild(lastNameText);

  var myNameElem = document.getElementById('myName');

  myNameElem.appendChild(lastNameElem);
}

window.onload = function () {

	alert('window.onload called...');
	console.log('window.onload called...');
	var buttonElement =
	  document.getElementById('mybutton');

	function printMyString() {
		console.log(this.myString);
	}

	function doRegisterCallback(element) {
  		var that = this;
  		console.log('Registering', element.id, this.myString);
  		element.addEventListener('click', function () {
			console.log(that.myString);
		});
  	}

	var myObject = {
	  myString: 'hello',
	  registerCallback: doRegisterCallback 
	};

	myObject.registerCallback(buttonElement);
};

window.onclose = function () {
	alert('closing...');
	console.log('closing...');
}

window.onbeforeunload = function () {
	alert('about to unload');
	console.log('about to unload');
}
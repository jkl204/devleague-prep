window.onload = function () {

	var childClassElements;
	var i;
	var childClassElement;

	function setUpChildClassClickHandler(childClassElem) {
		function eventHandler() {
		  	var paragraphElement = childClassElem.children[1];
		  	if (paragraphElement.classList.contains('show')) {
		  		paragraphElement.classList.remove('show');
		  	} else {
		  		paragraphElement.classList.add('show');
		  	}
		 }

  		childClassElem.addEventListener('click', eventHandler);
	}


  // add an event listener to the `child` class.
  childClassElements = document.getElementsByClassName('child');
  for (i = 0; i < childClassElements.length; i++) {
  	childClassElement = childClassElements[i];
  	setUpChildClassClickHandler(childClassElement);
  }


  // inspect the .css file
    // when a `child` class is clicked your code will add CSS styles which will show the
    // secret toy element.
    //Click on an element will only show that element's toy, no one elses.
};
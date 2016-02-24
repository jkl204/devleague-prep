window.onload = function () {

	var childClassElems;
	var i;
	var childClassElem;

  // For each element with the class 'child'...
	// Add an event listener on the 'click' event
  childClassElems = getChildClassElements();
  for (i = 0; i < childClassElems.length; i++) {
  	childClassElem = childClassElems[i];
		childClassElem.addEventListener('click', createEventListener(childClassElem));
  }

	// When that event occurs toggle the  CSS styles which will show the secret
	// toy element. (Inspect the .css file to figure out what class this is.)
  function createEventListener(childClassElem) {

    var secretToyElem;
		var secretToyClassName;

		secretToyClassName = 'show';
		secretToyElem = childClassElem.children[1];

		return handleClick;

		function handleClick() {
			secretToyElem.classList.toggle(secretToyClassName);
		 }
	}

	function getChildClassElements() {
		return document.getElementsByClassName('child');
	}
};

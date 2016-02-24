window.onload = function () {

	var childClassElems;

  // For each element with the class 'child'...
	// Add an event listener on the 'click' event
  childClassElems = getChildClassElements();

	/* YOUR LOOP CODE HERE */

	// When that event occurs toggle the  CSS styles which will show the secret
	// toy element. (Inspect the .css file to figure out what class this is.)
  function createEventListener(childClassElem) {

    var secretToyElem;
		var secretToyClassName;

		/* YOUR VARIABLE ASSIGNMENT CODE HERE */

		return handleClick;

		function handleClick() {
			secretToyElem.classList.toggle(secretToyClassName);
		 }
	}

	function getChildClassElements() {
		/* YOUR ELEMENTS RETRIEVAL CODE HERE */
	}
};

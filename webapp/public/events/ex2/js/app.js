window.onload = function () {

	var childClassElems;
	var i;

  // For each element with the class 'child'...
	// Add an event listener on the 'click' event
  childClassElems = getChildClassElements();

	/* YOUR LOOP CODE HERE */
	for(i=0; i<childClassElems.length; i++){
		childClassElems[i].addEventListener("click", createEventListener(childClassElems[i]));
	}

	// When that event occurs toggle the  CSS styles which will show the secret
	// toy element. (Inspect the .css file to figure out what class this is.)
  function createEventListener(childClassElem) {

    	var secretToyElem;
		var secretToyClassName;
		var hiddenClassList;
		var i;

		secretToyClassName = null;
		i = 0;

		var all = document.getElementsByTagName("*");
		//console.log(all.length);

		//doable, need to search css sheet to check which element has classes that result in display:none
		for ( i=0; i < all.length; i++) {
		 	if(window.getComputedStyle(all[i]).display == "none"){
		 		if(all[i].className != ""){
		 			hiddenClassList = all[i].classList;
		 			//console.log(hiddenClassList);
		 		}
			}else{
				//console.log(window.getComputedStyle(all[i]).display);
			}
		}

		var classes = document.styleSheets[0].rules || document.styleSheets[0].cssRules;
		for( i=0; i < hiddenClassList.length; i++){
		    for (var x = 0; x < classes.length; x++) {
		    	console.log(classes[x].selectorText);
		        if (classes[x].selectorText == hiddenClassList[i]) {
		            (classes[x].cssText) ? alert(classes[x].cssText) : alert(classes[x].style.cssText);
		        }
		    }
		}

		secretToyClassName = "show";

		//this assumes the hidden elements classes are the same
		secretToyElem = childClassElem.getElementsByClassName("secret-toy")[0];

		/* YOUR VARIABLE ASSIGNMENT CODE HERE */

		return handleClick;

		function handleClick() {
			secretToyElem.classList.toggle(secretToyClassName);
		 }
	}

	function getChildClassElements() {
		/* YOUR ELEMENTS RETRIEVAL CODE HERE */
		//getelementsbyclassname?
		return document.getElementsByClassName("child");
	}
};

window.onload = function () {
	
	function getNavMenuElement() {
		return document.getElementById('navMenu');
	}

	function addListItemListener(listItemElement) {

		function handleClick () {
			// this event should log to the console the text inside of the <a> tag
			var anchorTag = listItemElement.firstChild;
			console.log(anchorTag.textContent);
		}
		// Make it listen for a Click event
		listItemElement.addEventListener('click', handleClick);
	}

	// add an event listener to each li element inside of the nav menu.
	var navMenuElement = getNavMenuElement();
	var listItemElements = navMenuElement.children; 

	for (var i = 0; i < listItemElements.length; i++) {
		var listItemElement = listItemElements[i];
		addListItemListener(listItemElement);
	}

    // the event should only log one word per click.
};

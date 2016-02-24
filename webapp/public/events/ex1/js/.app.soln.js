window.onload = function () {

  var listItemElems;
  var listItemElem;
  var i;

	listItemElems = getNavMenuListItems();

  // For each li element inside of the nav menu
	for (i = 0; i < listItemElems.length; i++) {
		listItemElem = listItemElems[i];

    // add an event listener on 'click' events
    listItemElem.addEventListener('click', createEventListener(listItemElem));
	}

	// this event should log to the console the text inside of the <a> tag
  // the event should only log one word per click.
	function createEventListener (listItemElem) {
		
    var anchorElem;
		anchorElem = listItemElem.firstChild;

		function handleClick() {
		  console.log(anchorElem.textContent);
		}
	}

  function getNavMenuListItems() {
    var navMenuElem;
    navMenuElem = document.getElementById('navMenu');
    return navMenuElem.children;
  }
};

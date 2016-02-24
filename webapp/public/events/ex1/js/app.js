window.onload = function () {

  var listItemElems;

	listItemElems = getNavMenuListItems();

  // For each li element inside of the nav menu add an event listener on 'click' events.
  // Your event listener should be the handleClick function implemented below.

  /* YOUR LOOP CODE HERE */


	// This event should log to the console the text inside of the <a> tag.
  function createEventListener (listItemElem) {

    /* YOU CAN FIND THE <a> TAG HERE */

    return handleClick;

    function handleClick() {
      /* YOUR 'click' EVENT LOGIC HERE */
    }
  }

  function getNavMenuListItems() {
    /* YOUR ELEM RETRIEVAL CODE HERE */
  }
};

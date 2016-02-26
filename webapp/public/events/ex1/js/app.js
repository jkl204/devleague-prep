window.onload = function () {

  var listItemElems;
  var i;

	listItemElems = getNavMenuListItems();

  // For each li element inside of the nav menu add an event listener on 'click' events.
  // Your event listener should be the handleClick function implemented below.

  /* YOUR LOOP CODE HERE */
  for(i=0; i<listItemElems.length; i++){
    listItemElems[i].addEventListener("click", createEventListener(listItemElems[i]));
  }


	// This event should log to the console the text inside of the <a> tag.
  function createEventListener (listItemElem) {

    /* YOU CAN FIND THE <a> TAG HERE */
    var link = listItemElem.children[0];
    
    //link.addEventListener("click", handleClick);
    //hmm, anchor doesn't have an onclick attribute...
    //link.onClick = handleClick;
    //console.log(listItemElem.children[0].text);

    return handleClick;

    function handleClick() {
      /* YOUR 'click' EVENT LOGIC HERE */
      console.log(link.text);
    }
  }

  function getNavMenuListItems() {
    /* YOUR ELEM RETRIEVAL CODE HERE */
    var uList;
    var j;
    var eleArray;
    eleArray = [];
    uList = document.getElementById('navMenu');

    for(j=0; j<uList.children.length; j++){
      eleArray.push(uList.children[j]);
    }
    return eleArray;
  }
};

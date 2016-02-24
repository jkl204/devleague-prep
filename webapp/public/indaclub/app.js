window.addEventListener('load', init);
console.log('before load complete...');


function init() {

    var theLine;
    var bouncer;
    var lineIndex;

    var i;
    var theLineElem;

    theLine = [
    {
        name: 'George',
        money: 20,
        age: 22
    },
    {
        name: 'Sam',
        money: 50,
        age: 20
    },
    {
        name: 'Sam',
        money: 50,
        age: 20
    },
    {
        name: 'Sam',
        money: 50,
        age: 20
    },
    {
        name: 'Sam',
        money: 50,
        age: 20
    },
    {
        name: 'Sam',
        money: 50,
        age: 20
    },
    {
        name: 'Sam',
        money: 50,
        age: 20
    },
    {
        name: 'Sam',
        money: 50,
        age: 20
    },
    {
        name: 'Sam',
        money: 50,
        age: 20
    },
    {
        name: 'Shaniqua',
        money: 0,
        age: 25 
    }];

    lineIndex = 0;

    bouncer = document.getElementById('bouncer');
    bouncer.addEventListener('click', process);

    theLineElem = document.getElementById('daline');
    for (i = 0; i < theLine.length; i++) {
        addPersonToList(theLine[i], theLineElem);
    }

    // functions...
    function process() {
        
        var person;
        var theList;

        if (lineIndex >= theLine.length) {
            console.log('no more people');
            return;
        }

        person = theLine[lineIndex];
        console.log('processing...', lineIndex, person);
        if (shouldLetSomeoneIn(person)) {
            console.log('letting them in...');
            theList = document.getElementById('indaclub');
        } else {
            console.log('hmmm... not for you...');
            theList = document.getElementById('ondacurb');
        }

        addPersonToList(person, theList);
        removeFirstItemFromList(theLineElem);

        lineIndex = lineIndex + 1;
    }
}

function removeFirstItemFromList(ulElem) {
    var firstChild;

    console.log('Removing first item from', ulElem);
    firstChild = ulElem.children[0];
    ulElem.removeChild(firstChild);
}

function addPersonToList(myPerson, daList) {

    var listItemElem;
    var textNode;

    listItemElem = document.createElement('li');
    textNode = document.createTextNode(myPerson.name);
    listItemElem.appendChild(textNode);
    //listItemElem.textContent = myPerson.name;

    daList.appendChild(listItemElem);
}

function isUnderAge(person) {
  return (person.age < 21);
}

function hasCoverCharge(person) {
  return (person.money >= 10);
}

function hasEnoughToBribe(person) {
  return person.money >= 100;
}

function shouldLetSomeoneIn(person) {
  return (!isUnderAge(person) && hasCoverCharge(person))
      || hasEnoughToBribe(person);
}



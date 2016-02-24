window.onload = function () {

  var myFirstAction;
  var mySecondAction;
  var exElem;
  var result;

  // exercise 1
  exElem = document.getElementById('ex1-eq');
  result = youGetTaco('eat');
  if (result === 'EAT TACOS') {
    exElem.textContent = 'YAY';
  } else {
    exElem.textContent = 'youGetTaco("eat") should be "EAT TACOS" but was: ' + result;
  }

  exElem = document.getElementById('ex1-ne');
  result = youGetTaco('dance');
  if (result === undefined) {
    exElem.textContent = 'YAY';
  } else {
    exElem.textContent = 'youGetTaco("dance") should be undefined but was: ' + result;
  }

  // exercise 2
  // TODO: random number
  exElem = document.getElementById('ex2-gt');
  result = isNumberGreaterThan(5, 4);
  if (result) {
    exElem.textContent = 'YAY';
  } else {
    exElem.textContent = 'isNumberGreaterThan(5, 4) should be true but was: ' + result;
  }

  exElem = document.getElementById('ex2-lt');
  result = isNumberGreaterThan(5, 6);
  if (!result) {
    exElem.textContent = 'YAY';
  } else {
    exElem.textContent = 'isNumberGreaterThan(5, 6) should be false but was: ' + result;
  }

  exElem = document.getElementById('ex2-eq');
  result = isNumberGreaterThan(5, 5);
  if (!result) {
    exElem.textContent = 'YAY';
    document.getElementById('ex2').classList.add('list-group-item-success');
  } else {
    exElem.textContent = 'isNumberGreaterThan(5, 5) should be false but was: ' + result;
    document.getElementById('ex2').classList.add('list-group-item-danger');
  }

  // exercise 3
}

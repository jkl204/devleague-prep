window.onload = function(){
  var myName = 'Jon';

  // function saySomeonesName(name, elementId){
  //   document.getElementById(elementId).innerHTML = name;
  // }

  // saySomeonesName(myName, 'myName');

  //THIS IS JUST AN EXAMPLE OF HOW TO CREATE ELEMENTS
  function generateDocument(){
    //1. document.createElement
    //2. element.appendChild

    var div1;
    var div2;
    var div3;
    var div4;
    var span1;
    var span2;
    var span3;
    var span4;
    var par1;

    //1
    div1 = document.createElement('div');
    span1 = document.createElement('span');
    span1.id = "myName";
    span1.textContent = "Jason";
    div1.appendChild(span1);
    document.body.appendChild(div1);
    //<div id='someId'>TEST</div>

    //2
    div2 = document.createElement('div');
    span2 = document.createElement('span');
    span2.id = "yourName";
    span2.textContent = "Joe";
    div2.appendChild(span2);
    document.body.appendChild(div2);

    //3
    div3 = document.createElement('div');
    span3 = document.createElement('span');
    span3.id = "neighborName";
    span3.textContent = "Victor";
    div3.appendChild(span3);
    document.body.appendChild(div3);

    //4
    div4 = document.createElement('div');
    span4 = document.createElement('span');
    par1 = document.createElement('p');
    div4.id = "nested";
    span4.id = "deeperNested";
    par1.id = "superNested";
    par1.textContent = "YAY";
    span4.appendChild(par1);
    div4.appendChild(span4);
    document.body.appendChild(div4);

  }

  generateDocument();
};
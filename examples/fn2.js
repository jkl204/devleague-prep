var players;
var isSenior;

console.log(console);

players = [
  {
    name: 'Han',
    canPlay: false,
    grade: 9
  },
  {  
    name: 'Chewbacca',
    canPlay: true,
    grade: 10
  }
];

for (i = 0; i < oopsArray.length; i++) {
  if (isOdd(i)) {
    oopsArray[i] = 'nope';
  }
}

function isOdd(number) {
  return number % 2 === 1
}


var thirdPlayer;
thirdPlayer = {}; 
thirdPlayer.name = 'Leia';
thirdPlayer.canPlay = true;

players.push(thirdPlayer);


for (i = 0; i < players.length; i = i + 1) {
  tryOutForVarsity(players[i]);
}

function tryOutForVarsity(player) {

  var isSenior;

  if (player.canPlay) {
    console.log(player.canPlay, isSenior, 'Congrats!');
  } else {
    isSenior = checkIfSenior(player);
    if (isSenior) {
      console.log(player.canPlay, isSenior, 'Apply for DevLeague');
    } else {
      console.log(player.canPlay, isSenior, 'Maybe next year...');
    } 
  }
}

function checkIfSenior(player) {
  return player.grade > 11;
}


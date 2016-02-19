var i;
var players;
var player;

players = [
  {
    name: 'Mark',
    canPlay: false,
    grade: 13,
    homeroom: 'Victor'
  },
  {
    name: 'Chewbacca',
    canPlay: true,
    grade: 10,
    homeroom: 'M. Falcon'
  }
];

// print out the name of each player

for (i = 0; i < players.length; i++) {
  player = players[i];
  console.log(player.name);
  console.log(player.grade);
}


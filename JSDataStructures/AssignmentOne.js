const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// create one playeer array for the each team as player1  and player2
const [player1, player2] = game.players;
console.log(player1);
console.log(player2);
// first player in the any above array as the goal keeper and others as the fieldplayer
console.log("Q2--->");
const [gk, ...fieldplayer] = game.players;

// add player from both  the array into newarray called all players
console.log("Q3---------->");
let allPlayers = [...player1, ...player2];
console.log(allPlayers);

// during the game team  used  three substitute player so create new array with all tem  original players and ..other three substitue playe like x1,x2,x3
console.log("Q4---->");
const finalPlayer = [...player1, "Thiago", "kholi", "gill"];
console.log(finalPlayer);

console.log("Q5--->");
const {
  odds: { team1, x: draw, team2 },
} = game;
console.log(team1, draw, team2);

console.log("Q6");
function printGoals([...playerNames]) {
  console.log(...playerNames);
}
printGoals([...game.scored]);

console.log("Q--->7");
game.odds.team1 < game.odds.team2 &&
  console.log(` team 1 with odd=${game.odds.team1} won the match`);

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

// 1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")

console.log("q1--->");

for (const [numberOfGoals, name] of game.scored.entries()) {
  console.log(numberOfGoals + 1, name);
}

// 2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
console.log("q2--->");

let count = 0;
let sum = 0;
for (const values of Object.values(game.odds)) {
  sum = sum + values;
  count++;
}
const average = sum / count;
console.log(average);

// 3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
//       Odd of victory Bayern Munich: 1.33
//       Odd of draw: 3.25
//       Odd of victory Borrussia Dortmund: 6.5

console.log("Q3--->");
for (const [teamname, ...score] of Object.entries(game.odds)) {
  if (game[teamname]) {
    console.log("odd of victory " + game[teamname] + " " + score);
  } else {
    console.log("odd of draw " + " " + score);
  }
}

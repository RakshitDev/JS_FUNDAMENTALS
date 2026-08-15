const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",

  players: [
    ["Neuer", "Pavard", "Martinez"],
    ["Burki", "Schulz", "Hummels"],
  ],

  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// Create Map
const rest = new Map();

// Add entries
rest.set(1, game.team1);
rest.set(game.odds, "all the odds");

const arr = game.players;

rest.set(arr, "hello");

// Check key
console.log(rest.has(arr)); // true

// Delete entry
console.log(rest.delete(arr)); // true

// Iterate Map
for (const [key, value] of rest) {
  console.log(key, value);
}

// Object → Map
const user = {
  name: "Rakshit",
  age: 25,
  job: "dev",
};

const userMap = new Map(Object.entries(user));

console.log(userMap);
console.log(userMap.get("name")); // Rakshit

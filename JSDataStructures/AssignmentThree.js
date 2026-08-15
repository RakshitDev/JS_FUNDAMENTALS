const gameEvents = new Map([
  [17, "⚽️ GOAL"],
  [36, "🔁 Substitution"],
  [47, "⚽️ GOAL"],
  [61, "🔁 Substitution"],
  [64, "🔶 Yellow card"],
  [69, "🔴 Red card"],
  [70, "🔁 Substitution"],
  [72, "🔁 Substitution"],
  [76, "⚽️ GOAL"],
  [80, "⚽️ GOAL"],
  [92, "🔶 Yellow card"],
]);

// 1
const events = new Set([...gameEvents.values()]);
console.log(events);

// 2
gameEvents.delete(64);

// 3
console.log(
  `An event happened, on average, every ${90 / gameEvents.size} minutes`,
);

for (const [key, value] of gameEvents) {
  if (key < 45) {
    console.log(`[FIRSTHALF] ${key}:${value}`);
  } else {
    console.log(`[SECONDHALF] ${key}:${value}`);
  }
}

///////////////////////////////////////
// Coding Challenge #4

// Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.

const convertToCamelCase = (variables) => {
  const words = variables.toLowerCase().trim().split("_");
  let first = words[0];
  for (let i = 1; i < words.length; i++) {
    first = first + words[i][0].toUpperCase() + words[i].slice(1);
    console.log(first);
  }
};

convertToCamelCase("Rakshit_xyza ");

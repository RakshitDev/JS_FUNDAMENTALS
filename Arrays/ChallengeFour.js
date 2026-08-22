const breeds = [
  {
    breed: "German Shepherd",
    averageWeight: 32,
    activities: ["fetch", "swimming"],
  },
  {
    breed: "Dalmatian",
    averageWeight: 24,
    activities: ["running", "fetch", "agility"],
  },
  {
    breed: "Labrador",
    averageWeight: 28,
    activities: ["swimming", "fetch"],
  },
  {
    breed: "Beagle",
    averageWeight: 12,
    activities: ["digging", "fetch"],
  },
  {
    breed: "Husky",
    averageWeight: 26,
    activities: ["running", "agility", "swimming"],
  },
  {
    breed: "Bulldog",
    averageWeight: 36,
    activities: ["sleeping"],
  },
  {
    breed: "Poodle",
    averageWeight: 18,
    activities: ["agility", "fetch"],
  },
];

// #1
const averageWeight = breeds.find((dog) => dog.breed === "Husky").averageWeight;

console.log(averageWeight);

// # 2
const breed = breeds.find(
  (dog) =>
    dog.activities.includes("running") && dog.activities.includes("fetch"),
);

// or
const all = breeds.filter(
  (breed) =>
    breed.activities.includes("fetch") && breed.activities.includes("running"),
);

console.log(all);

// 3
const allActivities = breeds.flatMap((dog) => dog.activities);
console.log(allActivities);

// 4
const unique = new Set(breeds.flatMap((dog) => dog.activities));
console.log(unique);

// 6
const truth = breeds
  .map((dog) => dog.averageWeight)
  .every((weight) => weight > 10);
console.log(truth);

// 7
const active = breeds.every((dog) => dog.activities.length >= 3);

console.log(active);

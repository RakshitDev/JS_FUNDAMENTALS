const dogs = [
  { weight: 22, curFood: 250, owners: ["Alice", "Bob"] },
  { weight: 8, curFood: 200, owners: ["Matilda"] },
  { weight: 13, curFood: 275, owners: ["Sarah", "John", "Leo"] },
  { weight: 18, curFood: 244, owners: ["Joe"] },
  { weight: 32, curFood: 340, owners: ["Michael"] },
];

// - Formula for calculating recommended food portion: recommendedFood = weight ** 0.75 * 28. (The result is in grams of food, and the weight needs to be in kg)
// - Eating too much means the dog's current food portion is larger than the recommended portion, and eating too little is the opposite.
// - Eating an okay amount means the dog's current food portion is within a range 10% above and below the recommended portion (see hint).

// 1. Loop over the array containing dog objects, and for each dog, calculate the recommended food portion (recFood) and add it to the object as a new property. Do NOT create a new array, simply loop over the array (We never did this before, so think about how you can do this without creating a new array).

// for calculatinf the recfood portion weight *.75*28

// with for off
for (const dog of dogs) {
  dog.recfood = dog.weight ** 0.75 * 28;
}
console.log(dogs);

// const updateDogs = dogs.map((dog) => {
//   return {
//     ...dog,
//     recfood: dog.weight * 0.028,
//   };
// });
// console.log(updateDogs);// this create the new array which  is not necessary

// with for each
// dogs.forEach((dog) => {
//   dog.recfood = dog.weight * 0.028;
// });
// console.log(dogs, "-->");

// 2. Find Sarah's dog and log to the console whether it's eating too much or too little. HINT: Some dogs have multiple users, so you first need to find Sarah in the owners array, and so this one is a bit tricky (on purpose) 🤓

// first  is to loop over the array and get object where owner name is seraha

// with filter -->array will be returned
const sarahDog = dogs.filter((dog) => dog.owners.includes("Sarah"));
console.log(sarahDog);

if (sarahDog[0].curFood > sarahDog[0].recfood) {
  console.log("Sarah's dog is eating too much");
} else {
  console.log("Sarah's dog is eating too little");
}

// find returnn the object
const Sarah = dogs.find((dog) => dog.owners.includes("Sarah"));

if (Sarah.curFood > Sarah.recfood) {
  console.log("Sarah's dog is eating too much");
} else {
  console.log("Sarah's dog is eating too little");
}

// 3. Create an array containing all owners of dogs who eat too much (ownersTooMuch) and an array with all owners of dogs who eat too little (ownersTooLittle).

// let toMuchOwners = [];
// let toLittleOwners = [];

// for (const dog of dogs) {
//   if (dog.curFood > dog.recfood) {
//     console.log(dog.curFood, "-");
//     console.log(dog.recfood, "--------");
//     toMuchOwners.push(...dog.owners);
//   } else {
//     toLittleOwners.push(...dog.owners);
//   }
// }
// console.log(toMuchOwners);
// console.log(toLittleOwners);

const toMuchOwners = dogs
  .filter((dog) => dog.curFood > dog.recfood)
  .flatMap((dog) => dog.owners);

const tolittleOwners = dogs
  .filter((dog) => dog.curFood < dog.recfood)
  .flatMap((dog) => dog.owners);
console.log(toMuchOwners);
console.log(tolittleOwners);

// 4. Log a string to the console for each array created in 3., like this: "Matilda and Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat too little!"

console.log(`${toMuchOwners.join(" and ")}'s dogs eat too much!`);

console.log(`${tolittleOwners.join(" and ")}'s dogs eat too little!`);

// 5. Log to the console whether there is ANY dog eating EXACTLY the amount of food that is recommended (just true or false)
const istherDog = dogs.some((dog) => dog.curFood === dog.recfood); // ture or false for any one
console.log(istherDog);

// 6. Log to the console whether ALL of the dogs are eating an OKAY amount of food (just true or false)

const isThereAll = dogs.every(
  (dog) => dog.curFood >= dog.recfood * 0.9 && dog.curFood <= dog.recfood * 1.1,
);

console.log(isThereAll);

// 7. Create an array containing the dogs that are eating an OKAY amount of food (try to reuse the condition used in 6.)

const okayDogs = dogs.filter(
  (dog) => dog.curFood >= dog.recfood * 0.9 && dog.curFood <= dog.recfood * 1.1,
);

console.log(okayDogs);

// 8. Group the dogs into the following 3 groups: 'exact', 'too-much' and 'too-little', based on whether they are eating too much, too little or the exact amount of food, based on the recommended food portion.
const doggroups = Object.groupBy(dogs, (dog) => {
  if (dog.curFood === dog.recfood) {
    return "exact";
  } else if (dog.curFood > dog.recfood) {
    return "too-much";
  } else {
    return "too-little";
  }
});
console.log(doggroups);

// 9. Group the dogs by the number of owners they have

const dogsByOwners = Object.groupBy(dogs, (dog) => dog.owners.length);

console.log(dogsByOwners);

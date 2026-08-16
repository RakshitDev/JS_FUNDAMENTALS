const movements = [150, -250, 320, -180, 450, -120, 600, -350];

////////////////////////////////////////////////////////////
// 1. FOR...OF
////////////////////////////////////////////////////////////

// for...of is used to LOOP over the elements of an iterable.
//
// movements.entries() gives us:
// [index, value]
//
// Example:
// [0, 150]
// [1, -250]
// [2, 320]
//
// We use destructuring:
// const [index, mov]
//
// IMPORTANT:
// for...of can be stopped using break or skipped using continue.
//
// for...of DOES NOT automatically create a new array.

console.log("FOR OF");

for (const [index, mov] of movements.entries()) {
  if (mov > 0) {
    console.log(`${index + 1}: you have deposited ${mov} rupees`);
  } else {
    console.log(`${index + 1}: you have withdrawn ${mov} rupees`);
  }
}

////////////////////////////////////////////////////////////
// 2. forEach()
////////////////////////////////////////////////////////////

// forEach() executes a callback function once for every element.
//
// The callback receives:
// 1. current element
// 2. index
// 3. entire array
//
// Syntax:
//
// movements.forEach(function (mov, index, array) {
//   ...
// });
//
// IMPORTANT:
// forEach() does NOT create a new array.
//
// Also, you cannot use break or continue directly inside
// the forEach() callback.

console.log("FOR EACH");

movements.forEach(function (mov, index) {
  if (mov > 0) {
    console.log(`${index + 1}: you have deposited ${mov} rupees`);
  } else {
    console.log(`${index + 1}: you have withdrawn ${mov} rupees`);
  }
});

////////////////////////////////////////////////////////////
// 3. forEach() with arrow function
////////////////////////////////////////////////////////////

// This is the SAME forEach() method as above.
//
// The only difference is the syntax of the callback.
//
// Normal function:
// function (mov, index) {
//   ...
// }
//
// Arrow function:
// (mov, index) => {
//   ...
// }
//
// The behavior is the same.

console.log("FOR EACH WITH ARROW");

movements.forEach((mov, index) => {
  if (mov > 0) {
    console.log(`${index + 1}: you have deposited ${mov} rupees`);
  } else {
    console.log(`${index + 1}: you have withdrawn ${mov} rupees`);
  }
});

////////////////////////////////////////////////////////////
// 4. map()
////////////////////////////////////////////////////////////

// map() also executes a callback for every element.
//
// BUT the important difference is:
//
// map() CREATES AND RETURNS A NEW ARRAY.
//
// Whatever you RETURN from the callback becomes an element
// in the new array.
//
// Original:
// movements
//
//        ↓ map()
//
// New:
// movementsNew
//
// IMPORTANT:
// map() should normally be used when you want to TRANSFORM
// the elements into something else.

console.log("MAP");

const movementsNew = movements.map(function (mov, index) {
  if (mov > 0) {
    return `${index + 1}: you have deposited ${mov} rupees`;
  } else {
    return `${index + 1}: you have withdrawn ${mov} rupees`;
  }
});

console.log(movementsNew);

////////////////////////////////////////////////////////////
// 4. reduce Method
////////////////////////////////////////////////////////////

const newMovements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// calculate the sum of the array
const balance = newMovements.reduce((acc, mov) => acc + mov, 0);
console.log("TOTLA BALANCE IS :" + balance);

// find the max value
const max = newMovements.reduce((acc, mov) => {
  if (acc > mov) {
    return acc;
  } else {
    return mov;
  }
}, movements[0]);
console.log(max);

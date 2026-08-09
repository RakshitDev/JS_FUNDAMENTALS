"use strict";
//Array Decturing of single elements from array
const number = [1, 2, 3, 4];

const a = number[0];
const b = number[1];
const c = number[2];

console.log(a, b, c);

// Desctruring all the elements inside the array
const [x, y, z] = number;
console.log(x, y, z);

// Data needed for first part of the section
const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
  order: function (starteIndex, mainIndex) {
    return [this.starterMenu[starteIndex], this.mainMenu[mainIndex]];
  },
};

let [caone, catTwo] = restaurant.categories;
console.log(caone, catTwo);

// interchanging the value without using temp varable

[caone, catTwo] = [catTwo, caone];

console.log(caone, catTwo);

const [stater, mainCourse] = restaurant.order(2, 1);

console.log(
  "For starter  " +
    stater +
    " and for the for maincous the food is  " +
    mainCourse,
);

// nested array descturing
const numberTwo = [1, 2, [3, 4]];
// const [i, j, k] = numberTwo;
// console.log(i, j, k); // but this still give the third vallue in the array now

const [i, j, [k, l]] = numberTwo;
console.log(i, j, k, l);

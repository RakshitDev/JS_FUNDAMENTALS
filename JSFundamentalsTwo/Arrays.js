"use strict";

// we can store multiple releared values to store inside the single varable  f1,f2,f3 three different
const friend1 = "Rakshit";
const friend2 = "Ramesh";
const friend3 = "Rakesh";

// store all the values inside the array with sigle reference
const friends = ["Rakshit", "Ramesh", "Rakesh"];
console.log(friends);

// accessing the array elements
console.log(friends[0]);
console.log(friends[1]);
console.log(friends[2]);

console.log("-===============================->");

// Accessing the last element inside the array
console.log(friends[friends.length - 1]);

// as array is primist even though declared with const the value inside the array can be changed
friends[0] = 1122;
console.log(friends);

// but primitive const change throws the error
// const name = "name";
// name = "Ramesh";
// console.log(name);

// in js array can hold the values of different type
const names = ["Rakshit", 1, "Ramesh"];
console.log(names);

// using the array with function
const calculateAge = (birthYear) => 2026 - birthYear;

const year = [2000, 1999, 1998, 2001, 2002];

const age = [
  calculateAge(year[0]),
  calculateAge(year[1]),
  calculateAge(year[2]),
  calculateAge(year[3]),
  calculateAge(year[4]),
];
console.log(age);

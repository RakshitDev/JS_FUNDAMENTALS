"use strict";
// Even nuumber Check
let number;
const isEven = (number) => number % 2 === 0;
const evenCheck = isEven(2);
if (evenCheck) {
  console.log(`${number} is even number `);
} else {
  console.log(`${number} is odd number `);
}

const arr = [1, 2, 3, 4, 5, 6];

// # 1 Slice

console.log(arr.slice(2)); //[3, 4, 5, 6];
// this give new array contaning the element from the specied index and it does not mutate the origanal array

console.log(arr.slice(2, 4)); //slice(startindex, end-1 index )  op->[2,4]

console.log(arr.slice()); //create the shalow copie

// # 2  Splice
// this method mutate the orignal array ,
console.log("splice---------->");
console.log(arr.splice(2)); //eleminate the all element form the position 2    [3, 4, 5, 6]
console.log(arr); //so the remaninfg wil be [1,2]
// usually used to eleminate the element this  is used

let arr1 = [1, 2, 3, 4, 5, 6, 7];
console.log(arr1.splice(2, 4), "---"); //from second till  first is the starting index and next on is now many [3,4,5,6]

console.log(arr1); //[1,2,7]

// # 3 revere

let letter = ["a", "b", "c", "d"];
console.log(letter.reverse()); //reverse the entire array // mutate the original array  ['d', 'c', 'b', 'a']
console.log(letter); // ['d', 'c', 'b', 'a']---orignL GET CHANGED

// # 4 concat // helps in joining two array

let num = [1, 2, 3];
let num1 = [4, 5, 6];
console.log(num.concat(num1)); // [1, 2, 3, 4, 5, 6]
// or simply this can alos be done with the help of spread operator
console.log([...num, ...num1]); //1, 2, 3, 4, 5, 6]

// # 5 join //method that converts all elements of an array into one string,

const arr2 = ["Hello", "World", "JavaScript"];

console.log(arr2.join(" ")); //Hello World JavaScript

// # 6 at helps in givng the element form the particular index
console.log(arr2.at(1)); //World

// ------------------------FOR OF AND FOR EACH
const transactions = [100, 200, -300, -400, 600, 800];

// loopin with for  of loop
for (const [i, transaction] of transactions.entries()) {
  if (transaction > 0) {
    console.log(`${i + 1}:  deposited :${transaction} ruppes`);
  } else {
    console.log(`${i + 1}:  withdrawn :${Math.abs(transaction)} ruppes`);
  }
}
console.log("--------------------FOR EACH -------->");

transactions.forEach(function (transaction, index, array) {
  if (transaction > 0) {
    console.log(`${index + 1}:  deposited :${transaction} ruppes`);
  } else {
    console.log(`${index + 1}:  withdrawn :${Math.abs(transaction)} ruppes`);
  }
});
// functtion is the call back function called bt forwach loop which accept element=transation, index, array and this order should be followed

// --------------FOR EACH ON MAPS------------------
const currencies = new Map([
  ["Rupee", "India"],
  ["Dollar", "America"],
  ["Dharams", "Uae"],
]);

currencies.forEach(function (value, key, map) {
  console.log(`${key}:${value}`);
});

// Data
const account1 = {
  owner: "Jonas Schmedtmann",
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: "Jessica Davis",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: "Steven Thomas Williams",
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: "Sarah Smith",
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// #7 find method it helps in finding the element in the array based on the condition and if the condition is met it return the first element to satsify tthe condition

const user = accounts.find(
  (account) => account.owner === "Steven Thomas Williams",
);
console.log("finding the user object============>");
console.log(user);

//# 8 find index of method  it give you the index of the particular element in the array based on the condition

// # 9  find last index of  give last index of the element which satsify the conditiion

// #10 Some method it is same as the include but inculde check for the given value and some for the give condition
console.log(movements.include(-130)); //true
const greaterTransaction = movements.some((mov) => mov > 500); //true

// #11 every method

// some method

//  flat

// flatmap

// and and or short circuting

console.log(3 || "Rakshit"); //3
console.log("" || "Rakshit"); //Rakshit
console.log(undefined || null); //null
console.log(true || 0); //true
console.log("" || undefined || 0 || "hello"); //hello

// or perator will return the first truty value or if all of them are falsy then it will return the last faly value
const home = {};

// short circuting can also be  used to set defaut values like tirnery operator
const guest = home.guest ? home.guest : 10;

// whit short circutinng
const guestOne = home.guest || 10; // adding the guest value with the shortcircuting
console.log(guest);
console.log(guestOne);

// and operatior
console.log("3" && "Rakshit"); //rakshit
console.log(0 && "Rakshit"); //0

// and operator return the first falsy value or the last truty value if everthing is truty values
console.log("hello" && 23 && null && "Rakshit"); //here not alll values are thuthy value so the first falsy value is null it will return null

const resturent = {};
//and operator can be used  for avoiding the if statments
if (resturent.orderPiza) {
  resturent.OrderPizza("Corn PIzza");
}

// with and
resturent.orderPiza && resturent.orderPiza("corn");

// One important problem with using the OR (||) operator or truthy/falsy checks
// is that values like 0, "", false, null, and undefined are considered falsy.
// This can cause a problem when 0, "", or false is a valid value that we want to keep.

// For example:
const numberOfGuest = 0;

// Using a ternary operator:
// const checkGuest = numberOfGuest ? numberOfGuest : 10;
//
// Here, JavaScript checks whether numberOfGuest is truthy or falsy.
// Since numberOfGuest is 0, and 0 is a falsy value,
// the condition becomes false.
// Therefore, the second value (10) is selected.
//
// Result:
// 0 ? 0 : 10
//        ↓
//       10
//
// But this is a problem because 0 is a valid value.
// In this example, 0 means that there are actually zero guests,
// and we don't want JavaScript to replace 0 with 10.
//
// To avoid this problem, we can use the nullish coalescing operator (??).

const checkGuest = numberOfGuest ?? 10;

// The nullish coalescing operator (??) uses the right-hand value
// ONLY when the left-hand value is null or undefined.
//
// Since numberOfGuest is 0:
// 0 is NOT null
// 0 is NOT undefined
//
// Therefore, ?? keeps the original value 0.
//
// Result:
// 0 ?? 10
// ↓
// 0
//
// This is different from the OR (||) operator:
//
// 0 || 10
// ↓
// 10
//
// because || treats 0 as a falsy value,
// while ?? only checks for null and undefined.

console.log(checkGuest);

const rest1 = {
  name: "kashi",
  numberOfGuest: 10,
};

const rest2 = {
  name: "kailash",
  owner: "Mahadev",
};

console.log(
  "------------------------------------------------------------------->",
);

// if  guest are not there then assign the default value =20
// rest1.numberOfGuest = rest1.numberOfGuest || 20;
// rest2.numberOfGuest = rest2.numberOfGuest || 20;

// these above statements can be writtena as

rest1.numberOfGuest ||= 20;
rest2.numberOfGuest ||= 20;

console.log(rest1);
console.log(rest2);

// if owner is present change the owener name
rest1.owner ||= "namit";
rest2.owner ||= "namit";
console.log(rest1);
console.log(rest2);

// one thins here is that if the number of guest =0 then the falsy value will be executed  and default value willl be set to avoid that we can use ??= which only consider only null or undefined value
console.log("------------------------------>");
const home1 = {
  number: 0,
};
const home2 = {
  number: 20,
};
home1.number ||= 10;
console.log(home1); // op-10 even though ther is the default zero it give zero as the faly  value so to avoid it we user the next statement
home1.number ??= 10; //0
home2.number ??= 10; //20
console.log(home1);
console.log(home2);

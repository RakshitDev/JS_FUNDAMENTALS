// Class:-act as the blue print to the object

// instance is the real object which was created uing the class

// There are n number of ways to design the class but there are 4 principal needs to be followeed in order to build the class
// 1)abstraction :hiding  necessary implementation and showing only required details is abstration
// 2)Encapsulation:is keeping some property of the class to private so that  they cannot be accessed from outside
// 3)Polymorphism:a class can overwite the method it inherited from its parent ..or ablity of the methd to behave differentyl when different objects are passed through it ..
// 4)inheritance:child class able to access and all property of the parent  class is called inheritance throught extend keyword

// All objects are liked to a prototype

// Prototyp inheritance :-prototype consist of the method which are accessable to all the objects  that linked to  that prototype object

// in js how to implement the oop?
// => there are three different ways of doing this in js
// 1)Constructor function
// 2)ES6 class
// 3)Object.create()

// 1)Constructor Function:

const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

// the above function is just the regualr function

//  now hot to callll a constructor function

const Rakshit = new Person("Rakshit", 26);

// 1)New {} empty object us created
// 2)function is called then this ={} this start to refere that empty object
// 3) {} empty object is linked to the prototype
// 4) function automatically return {}

console.log(Rakshit); //this points towards the object

const jonas = new Person("jonas", 55);
console.log(jonas);

// one thing to observer here is that Rakshit and jonas dont have age and firstname they in herited it from the the person  constructor function

Person.prototype.calAge = function () {
  console.log("hello World");
};

console.log(Object.getPrototypeOf(jonas));
console.log(jonas.__proto__.__proto__);

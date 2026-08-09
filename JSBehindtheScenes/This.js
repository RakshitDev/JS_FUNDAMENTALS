// "use strict";
let name = "Rakshit";

function test() {
  console.log(this.name);
}

// test();

const person = {
  name: "Rakshit",

  greet() {
    console.log(this);
  },
};

// person.greet();

function show() {
  console.log(this.name);
}

const person1 = {
  name: "Rakshit",
  show,
};

const person2 = {
  name: "Rahul",
  show,
};

person1.show();
person2.show();

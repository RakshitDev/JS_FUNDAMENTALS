"use strict";
const user = {
  name: "Rakshit",
  birthYear: 2000,
  job: "Software Engineer",
  friends: ["Ramesh", "Mahesh", "suresh"],
  hasDrivingLiscence: true,
  calculateAge: function () {
    this.age = 2026 - this.birthYear;
    return this.age;
  },
  getSummary: function () {
    return `${this.name} is the ${this.calculateAge()} old  whose friends are  ${this.friends} and has also driving liscence`;
  },
};
console.log(user.getSummary());
console.log(user);
console.log(user.age); // this.age this create age property inside the object

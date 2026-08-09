"use strict";
const Mark = {
  fullName: "Mark",
  mass: 78,
  height: 169,
  calculateBmi: function () {
    this.markBmi = (this.mass / this.height) * this.height;
    return this.markBmi;
  },
};

const Jhon = {
  fullName: "jhon",
  mass: 92,
  height: 195,
  calculateBmi: function () {
    this.markBmi = (this.mass / this.height) * this.height;
    return this.markBmi;
  },
};

if (Mark.calculateBmi > Jhon.calculateBmi) {
  console.log(
    `Mark Smith's BMI ${Mark.calculateBmi()} is higher than Mark Miller's ${Jhon.calculateBmi()}!`,
  );
} else {
  console.log(
    `Jhon Smith's BMI ${Jhon.calculateBmi()} is higher than Mark Miller's ${Mark.calculateBmi()}!`,
  );
}

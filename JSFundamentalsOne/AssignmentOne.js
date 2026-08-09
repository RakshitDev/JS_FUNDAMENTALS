let jhonMass = 85;
let jhonHeight = 1.76;

let markMass = 95;
let markHeight = 1.88;

let markBmi = markMass / markHeight / 2;
let jhonBmi = jhonMass / jhonHeight / 2;

const markHigherBMI = markBmi > jhonBmi;

if (markHigherBMI) {
  console.log("Mark's BMI " + markBmi + " is higher than John's " + jhonBmi);
} else {
  console.log("John's BMI is higher than Mark's!");
}

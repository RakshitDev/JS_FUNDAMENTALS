// Declarative type
function calculateAge(birthYear) {
  return 2026 - birthYear;
}
const age = calculateAge(2000);
console.log(age);

// Expression Function
const calculateAgeOne = function (birthYear) {
  return 2026 - birthYear;
};
const ageOne = calculateAge(2000);
console.log(age);

// Arrow Function
const calculateAgeTwo = (birthYear) => 2026 - birthYear;
const ageTwo = calculateAgeTwo(2000);
console.log(ageTwo);

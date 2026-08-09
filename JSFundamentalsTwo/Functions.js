"use strict ";
function getStudentOnject(name, section, marks) {
  const student = {
    name: name,
    section: section,
    marks: marks,
  };
  return student;
}

console.log(getStudentOnject("rakshit", "12", "98"));

// arrow function
const age = (x) => 2037 - x; //insingle line there is no need for the return statement
console.log(age(15));

// multiline arrow function
const person = {
  age: 2000,
  name: "Rakshit ",
};

const calculatePersonRetirmentAge = (person) => {
  return {
    personAge: 2037 - person.age,
    personName: person.name,
  };
};

console.log(calculatePersonRetirmentAge(person));

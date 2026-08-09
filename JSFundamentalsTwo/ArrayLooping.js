const jonasArray = [
  "Jonas",
  "Schmedtmann",
  2037 - 1991,
  "teacher",
  ["Michael", "Peter", "Steven"],
];

const types = [];
for (let i = 0; i < jonasArray.length; i++) {
  console.log(jonasArray[i], typeof jonasArray[i]);
}

// looping is done to iterate over the array
const years = [1991, 2007, 1969, 2020, 2000];
const ages = [];

for (let i = 0; i < years.length; i++) {
  ages[i] = 2026 - years[i];
}

console.log(ages);

// contnue and break propert of the loop
// conthine stips the current iteration and breaks breaks the loping

const names = ["Rakshit", "Ramesh", "suresh"];
for (let i = 0; i < names.length; i++) {
  if (names[i] === "Ramesh") {
    break;
  }
  console.log(names[i]);
}

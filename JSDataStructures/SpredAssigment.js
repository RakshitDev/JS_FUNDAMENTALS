const user = {
  name: "Rakshit",
  age: 24,
};
const updatedUser = {
  city: "Bengalore",
  ...user,
  age: 25,
};
console.log(updatedUser);

// shalow copy

const arr = [
  {
    name: "a",
  },
];
const copy = [...arr];
copy[0].name = "b";
console.log(copy);
console.log(arr);

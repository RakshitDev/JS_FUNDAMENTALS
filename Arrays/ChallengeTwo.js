const juliesDogAges = [5, 2, 4, 1, 15, 8, 3];
const brunoDogAges = [16, 6, 10, 5, 6, 1, 4];
// const calculateHumanAges = function (arr) {
//   const humAgeDog = arr.map((age) => {
//     if (age <= 2) {
//       return 2 * age;
//     } else {
//       return 16 + age * 4;
//     }
//   });
//   // humandog=[4 2 36 40 44]
//   const adultDog = humAgeDog.filter((age) => age > 18);
//   console.log(...adultDog);

//   const averageAdultDogAge = adultDog.reduce((acc, age) => acc + age, 0);
//   const average = averageAdultDogAge / adultDog.length;
//   console.log(average);
// };
// calculateHumanAges(juliesDogAges);
// calculateHumanAges(brunoDogAges);

// do this with
const calculateHumanAges = (arr) => {
  const averageAge = arr
    .map((age) => (age <= 2 ? 2 * age : 16 + age * 4))
    .filter((age) => age > 18)
    .reduce((acc, age, i, arr) => acc + age / arr.length, 0);
  console.log(averageAge);
};
calculateHumanAges(juliesDogAges);

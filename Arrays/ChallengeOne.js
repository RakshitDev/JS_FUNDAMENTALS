const juLiesData = [1, 5, 7, 2, 6];
const katesData = [1, 5, 7, 2, 6];

const checDogs = function (f1, f2) {
  // this creates the shalow copy

  const shallow = f1.slice();
  // remove first element
  shallow.splice(0, 1);
  // remove the last two element
  shallow.splice(-2);

  const newArray = [...shallow, ...f2];

  newArray.forEach(function (dog, index) {
    if (dog > 3) {
      console.log(
        `Dog Number  ${index + 1} an adult and it is ${dog} year old  `,
      );
    } else {
      console.log(
        `Dog Number  ${index + 1} an puppy and it is ${dog} year old  `,
      );
    }
  });
};

checDogs(juLiesData, katesData);

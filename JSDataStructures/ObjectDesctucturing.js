const restaurant = {
  names: "Classico Italiano",
  locations: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

// how to destructure the objects
const { name, locations, starterMenu } = restaurant;

// while descturing the object changing the propertyname
const { starterMenu: starters, mainMenu: mainCourse } = restaurant;

// assignin the default values to the object
const {
  names = "Inidan cusine",
  time = "9:30",
  otherLocation = ["punjab", "delhi"],
} = restaurant;

// mutating the variables
let a = 10;
let b = 20;
let c = 30;
console.log(a, b);

const number = { a: 20, b: 10, c: 30 };
({ a, b } = number);
console.log(a, b);

// destructuring the the nested objects

const {
  openingHours: {
    fri: { open, close },
  },
} = restaurant;
console.log(open, close);

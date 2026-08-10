// optional chaning with

const openingHours = {
  mon: {
    open: 9,
    close: 12,
  },
  tue: {
    open: 9,
    close: 12,
  },
  wed: {
    open: 9,
    close: 12,
  },
  thrus: {
    open: 9,
    close: 12,
  },
  fri: {
    open: 9,
    close: 12,
  },
  sat: {
    open: 9,
    close: 12,
  },
  sun: {
    open: 0,
    close: 12,
  },
};

const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
  order: function (starteIndex, mainIndex) {
    return [this.starterMenu[starteIndex], this.mainMenu[mainIndex]];
  },
  openingHours,
};

// Without optional chaining
// console.log(restaurant.openingHours.monday.open);
// ❌ TypeError: Cannot read properties of undefined (reading 'open')

// With optional chaining
// console.log(restaurant.openingHours.monday?.open);
// ✅ undefined

const days = ["mon", "tue", "wed", "thrus", "fri", "sat", "sun"];

// #1 Method
for (const day of days) {
  const open = restaurant.openingHours[day]?.open ?? "closed";
  console.log(open, "resturent");
}
// #2  METHOD CALL
console.log(restaurant.order?.(0, 1) ?? "Order does not exisst");

//#3  ARRAY
const newUsers = [{ name: "Rakshit" }, { name: "Ramesh" }, { name: "Rakesh" }];

console.log(newUsers[5]?.name || "user does not exist");

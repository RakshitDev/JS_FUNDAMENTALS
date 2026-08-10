const operninHours = {
  mon: { time: "9:30am to 9:30 pm" },
  tue: { time: "9:30am to 9:30 pm" },
  wed: { time: "9:30am to 9:30 pm" },
};
// now if is want to add this inside the resturent object i used to write like openingHours:openingHourse but with es6 feature i can simple do this openingHours line number 16
const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
  order: function (starteIndex, mainIndex) {
    return [this.starterMenu[starteIndex], this.mainMenu[mainIndex]];
  },
  operninHours,
};

// write function inside the object
const resturent = {
  // order: function () {
  //   console.log("food ordered");
  // },//this insted of  adding the function to variable we can directly write it as

  order() {
    console.log("food orderd");
  },
};

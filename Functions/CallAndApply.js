const kingfisher = {
  name: "kingfisher",
  flightCode: "KF",
  bookings: [],

  book(flightNumber, name) {
    console.log(
      `${name} booked a seat on ${this.name} flight ${this.flightCode}${flightNumber}`,
    );

    this.bookings.push({
      flight: `${this.flightCode}${flightNumber}`,
      name,
    });
  },
};

kingfisher.book("256", "Rakshit");
kingfisher.book("256", "Darshan");

console.log(...kingfisher.bookings);

const book = kingfisher.book;

const airIndia = {
  name: "AIRAINDIA",
  flightCode: "AI",
  bookings: [],
};

// call() immediately invokes the function.
// The first argument specifies what `this` should refer to.
// The remaining arguments are passed individually to the function.
book.call(airIndia, 100, "Danu");

console.log(airIndia);

// apply() is similar to call(), but the arguments are passed
// as an array instead of as individual arguments.
book.apply(airIndia, [100, "Rakshit"]);

const others = [100, "Rakesh"];

// We can use the spread operator with call()
// to unpack the array into individual arguments.
book.call(airIndia, ...others);

// bind() is similar to call() and apply(), but it does NOT
// immediately invoke the function.
// Instead, bind() returns a new function with `this` permanently
// set to the object provided.
const bookAirIndia = book.bind(airIndia);

// bookAirIndia is the new function returned by bind().
// When we call it, `this` inside book() refers to airIndia.
bookAirIndia("212", "Rakshit");

const user = {
  name: "Rakshit",

  greet() {
    alert(`Hello ${this.name}`);
  },
};

const greetUser = user.greet.bind(user);

// const newGreet = user.greet.call(user);
// call() executes greet() immediately when this line runs.

const button = document.querySelector("#greetBtn");

button.addEventListener("click", greetUser);
// greetUser is NOT executed here.
// We are giving the function to addEventListener.
// It will be executed when the button is clicked.

// partial application
const addTax = (rate, value) => value + value * rate;

const addActualTax = addTax.bind(null, 0.23);

console.log(addActualTax(1000));

// wtiting the above code in the form  of hifher order function
const addTax = (rate) => {
  return (value) => {
    return value + value * rate;
  };
};

const kingfisher = {
  name: "kingfisher",
  flightCode: "KF",
  bookings: [],
  book(flightNumber, name) {
    console.log(
      `${name} booked a seat on ${this.name} flight ${this.flightCode}${flightNumber} `,
    );
    this.bookings.push({ flight: `${this.flightCode}${flightNumber}`, name });
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

book.call(airIndia, 100, "Danu");
console.log(airIndia);

const user = {
  name: "Rakshit",

  greet() {
    console.log(this.name, "----->");
  },
};

user.greet(); /// this will not be the refereing to the object calling the function //this behaviour depends on how the object is being called

const greet = user.greet;
console.log(greet());

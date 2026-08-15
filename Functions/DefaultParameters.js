const bookings = [];

// ES6 allows us to assign default values directly while defining parameters.
// The default value can also be an expression that uses another parameter. //line no

const bookFlight = function (
  flightNumber,
  numberOfPassenger = 1,
  price = numberOfPassenger * 1000,
) {
  // In ES5, default values were commonly set using short-circuiting (||)
  // and reassignment:

  // flightNumber = flightNumber || 15;
  // numberOfPassenger = numberOfPassenger || 1;
  // price = price || 1000;

  const booking = {
    flightNumber,
    numberOfPassenger,
    price,
  };

  console.log(booking);
  bookings.push(booking);
};

bookFlight("LH256", 2, 100);

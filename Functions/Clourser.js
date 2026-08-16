const secureBooking = function () {
  let passengercount = 0;
  return function () {
    console.log(`${passengercount++} passenger`);
  };
};

const booking = secureBooking();

(function () {
  const header = document.querySelector("#h1");
  header.style.color = "red";
  header.addEventListener("click", function () {
    header.style.color = "blu";
  });
})();

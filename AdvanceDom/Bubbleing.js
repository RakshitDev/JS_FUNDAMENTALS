// now the task is to find which btn was pressed how will this be done generally

const btnApple = document.querySelector(".btn-apple");
const btnBanana = document.querySelector(".btn-banana");
const btnMango = document.querySelector(".btn-mango");

// btnApple.addEventListener("click", function (e) {
//   console.log(e.target, "clicked");
// });

// btnBanana.addEventListener("click", function (e) {
//   console.log(e.target, "clicked");
// });

// btnMango.addEventListener("click", function (e) {
//   console.log(e.target, "clicked");
// });

// now here we attached three listners for three different btn imagine if there are 100 btn we will be attaching 100 listner normally

// to avoide this we can genreally use even bubbling concept
// add one event listner to the parent

const container = document.querySelector("#container");
container.addEventListener("click", function (e) {
  console.log(e.target.textContent, "Clicked");
});

// you want to remove the proct after the delete btn is pressed

// option like before selecd each element an then when event hapeens that eventhandler i executed and deleated or bubbling slect the parent type

const cart = document.querySelector("#cart");
cart.addEventListener("click", function (e) {
  e.target.parentElement.remove();
});

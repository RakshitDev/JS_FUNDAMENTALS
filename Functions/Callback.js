// Function that reciever  another function as the argument  or return another function is called higher irder function

// Number :1 function accepting the another function as the argument

// callback function
const upperCase = function (str) {
  const [first, ...others] = str.split(" ");
  return [first.toUpperCase(), ...others].join(" ");
};

// HIGHER ORDER FUNCTION
const transForm = function (str, fn) {
  console.log(`${fn.name}  transformed ${fn(str)}`);
};

transForm("javaScript is the programming language", upperCase);

// Here transform is the HIGER ORDER FUNCTIOn the function that recieve or return the function

// UpperCase is the callback function that is passed as the orgument to another function which can call is whever it need

//Number :2 Function returning another function
const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greetuser = greet("hello");
greetuser("Rakshit");

// insted of doing that in two step you can also do it as
greet("hello")("Rakseh");

// lets try to write the above function in the from of the arrow function
// const sayGreet = (greeting) => {
//   return (name) => {
//     console.log(`${greeting} ${name}`);
//   };
// };
// sayGreet("hello")("jonas");

// or
const sayGreet = (greeting) => (name) => console.log(`${greeting} ${name}`);

sayGreet("hell")("haiwan");

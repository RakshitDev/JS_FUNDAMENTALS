// Add operation---push, unshift
const names = ["Rakshit", "ramesh", "suresh"];
// push is the inbuilt method that can add element to end of the array
names.push("naresh");
console.log(names);

// unshift is also the method of add operation  which add the element to the begining of the array
names.unshift("muskesh");
console.log(names);

// push and unshift returns the new array length
console.log("arrary length before adding new element", names.length);
const newLength = names.push("hemanth");
console.log("arrary length after adding new element", names.length);

const newslength = names.unshift("prashant");
console.log("arrary length after newslength adding new element", names.length);
console.log(
  "=======================================================<REMOVE  OPERATIONS>=====================",
);
// ====================================Remove Operation====================================================>

// pop---remove end emement
console.log("before pop", names);
names.pop();
console.log("after pop", names);

// shifted removes the begining element
console.log("before shift", names);
names.shift();
console.log("after shift", names);
console.log(
  "=======================================================<find  OPERATIONS>=====================",
);

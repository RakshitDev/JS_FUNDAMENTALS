const flight = "lh236";

const user = {
  name: "Rakshit",
  passport: 123456,
};

const checkInUser = function (flight, user) {
  // Primitive value: a copy of the value is passed.
  // Changing it inside the function does NOT affect the original.
  flight = "lh746";

  // Object: the reference value is copied.
  // Both `user` variables point to the SAME object,
  // so changing its property affects the original object.
  user.name = "Mr." + user.name;

  if (user.passport === 123456) {
    alert("user checked in");
  } else {
    alert("invalid passport");
  }
};

checkInUser(flight, user);

console.log(flight); // "lh236" → original primitive is unchanged
console.log(user); // { name: "Mr.Rakshit", passport: 123456 }

// IMPORTANT:
// JavaScript is technically PASS-BY-VALUE.
// For objects, the value being passed is a REFERENCE to the object.
// Therefore, both references point to the same object.

const name = "Rakshit";
function first() {
  const age = 30;
  if (age >= 30) {
    const decade = 3;
    var millenial = true;
  }
  function second() {
    const hob = "Businesss";
    console.log(`${name} is a ${age} year old ${hob} man`);
  }
  second();
}
first();

// name is global variable is accessable everywhere
// age is local to function one but still function two is able to access it because of the scope chaning
// scope chaining gos from child to parent  from parent to gobal scope
// here var does not belong to if block scope it will be releated to the functional scope one
// like that second function cannot access decade variable  from if block becasuse they are two seprate childs which are written seprately

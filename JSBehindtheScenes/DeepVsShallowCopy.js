// create and object and then try to copy that object into another object
const Jessica = {
  firstName: "Jessica",
  lasName: "william",
  age: 27,
  family: ["Alice", "Bob"],
};

const marriedJesica = Jessica;

function changeFirstNameAfterMarriage(original, marriedName) {
  original.lasName = marriedName;
}
changeFirstNameAfterMarriage(marriedJesica, "Davis");

//  print and check if both the object are same or not
// console.log("BEFORE:", Jessica);
// console.log("AFTER:", marriedJesica);

//  the ouput say that the last name in both the object is Davis but what we were trying to achieve was jessca with william as lastname and marriedJessica Davis as the lastname

// when we copy one object to another normally  the refernce is copied so changinf the one object will change the other object property so how to avoid this

// usind spread operator

const JessicaCopy = { ...Jessica };

JessicaCopy.lasName = "Bonac";

// console.log("BEFORE:", marriedJesica);
// {firstName: 'Jessica', lasName: 'Davis', age: 27, family: Array(2)}
// age
// :
// 27
// family
// :
// (2) ['Alice', 'Bob']
// firstName
// :
// "Jessica"
// lasName
// :
// "Davis"
// console.log("AFTER:", JessicaCopy);
// {firstName: 'Jessica', lasName: 'Bonac', age: 27, family: Array(2)}
// age
// :
// 27
// family
// :
// (2) ['Alice', 'Bob']
// firstName
// :
// "Jessica"
// lasName
// :
// "Bonac"

// the last name in the married =jesica and jessicapy is not different but the problem here with the spread operatory is that it will not be able to change the object completely

// for example try to add new mermber inside the jessiccopy those member will alo reflect inside the merried jesica beacuse object are copy by reference inside the shalow copy

JessicaCopy.family.push("Aman", "Rob");

// console.log("BEFORE:", marriedJesica);

// {firstName: 'Jessica', lasName: 'Davis', age: 27, family: Array(4)}
// age
// :
// 27
// family
// :
// (4) ['Alice', 'Bob', 'Aman', 'Rob']
// firstName
// :
// "Jessica"
// lasName
// :
// "Davis"

// console.log("AFTER:", JessicaCopy);
// {firstName: 'Jessica', lasName: 'Bonac', age: 27, family: Array(4)}
// age
// :
// 27
// family
// :
// (4) ['Alice', 'Bob', 'Aman', 'Rob']
// firstName
// :
// "Jessica"
// lasName
// :
// "Bonac"

// inorder to deep copy we use somethnig called as the structred clone
const jessicaClone = structuredClone(marriedJesica);
jessicaClone.family.push("tejas", "yogi");

console.log("BEFORE:", marriedJesica);
// {firstName: 'Jessica', lasName: 'Davis', age: 27, family: Array(4)}
// age
// :
// 27
// family
// :
// (4) ['Alice', 'Bob', 'Aman', 'Rob']
// firstName
// :
// "Jessica"
// lasName
// :
// "Davis"
console.log("After:", jessicaClone);

// {firstName: 'Jessica', lasName: 'Davis', age: 27, family: Array(6)}
// age
// :
// 27
// family
// :
// (6) ['Alice', 'Bob', 'Aman', 'Rob', 'tejas', 'yogi']
// firstName
// :
// "Jessica"
// lasName
// :
// "Davis"

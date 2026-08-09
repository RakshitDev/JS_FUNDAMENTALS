const a = "Rakshit";
first();
function first() {
  const b = "hello";
  second();
  function second() {
    const c = "hi";
    third();
  }
}
function third() {
  const d = "game";
  console.log(d);
}

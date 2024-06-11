// var c = 300;
let a = 50; //global scope
if (true) {
  let a = 10; //block scope
  const b = 20;
  // console.log("Inner:", a);
  // var c = 30;
}
// console.log(a); //It gives a is not defined
// console.log(b); // It gives b is not defined
// console.log(c);

function one() {
  const username = "Mudit";

  function two() {
    const website = "youtube";
    console.log(username);
  }
  // console.log(website);
  two();
}
// one();

// ++++++++++ Interesting ++++++++

if (true) {
  const username = "mudit";
  if (username === "mudit") {
    const website = "youtube";
    // console.log(username + website);
  }
  // console.log(website);
}
// console.log(username);

console.log(addOne(2));
function addOne(num) {
  return num + 1;
}

console.log(addTwo(5));
const addTwo = function (num) {
  return num + 2;
};

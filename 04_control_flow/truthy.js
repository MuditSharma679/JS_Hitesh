const userEmail = [];

// if (userEmail) {
//   console.log("Got user email");
// } else {
//   console.log("Don't have user email");
// }

// Falsy values that gives false as an output

// false, 0 , -0, BigInt, 0n , "", null, undefined, NaN

// truthy value : empty [] , {}, "0", 'false'," " (one space), function(){}

// if(userEmail.length === 0){
//   console.log("Array is empty");
// }

const emptyObj = {};

if (Object.keys(emptyObj).length === 0) {
  // console.log("Object is empty");
}

// Object.keys(emptyObj) is equivalent to an array.

// Nullish Coalescing Operator (??): null undefined
// The nullish coalescing (??) operator is a logical operator that returns its right-hand side operand when its left-hand side operand is null or undefined, and otherwise returns its left-hand side operand.

let val1;
// val1 = 15 ?? 10;
// val1 = null ?? 10;
// val1 = undefined ?? 15;
// val1 = null ?? 10 ?? 20;

// console.log(val1);

// Ternary Operator

// condition ? true : false

const iceTeaPrice = 100;

iceTeaPrice >= 80
  ? console.log("Greater than 80")
  : console.log("less than 80");

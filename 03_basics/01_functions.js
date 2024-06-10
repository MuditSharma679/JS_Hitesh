function sayMyName() {
  console.log("M");
  console.log("U");
  console.log("D");
  console.log("I");
  console.log("T");
}
// sayMyName();

// function addTwoNumbers(number1, number2) {
//   console.log(number1 + number2);
// }
// addTwoNumbers(3, 5);

function addTwoNumbers(number1, number2) {
  // let result = number1 + number2;
  // return result; // after return kuch bhi work nhi krega
  return number1 + number2;
}
const result = addTwoNumbers(5, 5);
// console.log("Result :", result);

function loginUserMessage(username) {
  if (!username) {
    console.log("Please enter a username");
    return;
  }
  return `${username} just logged in `;
}
// console.log(loginUserMessage("Mudit"));
// console.log(loginUserMessage());

// function calculateCartPrice(val1, val2, ...num1) {
//   return num1;
// }
// console.log(calculateCartPrice(100, 200, 300, 500));

const user = {
  username: "mudit",
  price: 199,
};

function handleObject(anyObject) {
  // console.log(
  //   `Username is ${anyObject.username} and price is ${anyObject.price}`
  // );
}
// handleObject(user)
// handleObject({
//   username: "sam",
//   price: 399,
// });

const myNewArray = [200, 300, 400, 500];

function returnSecondValue(getArray) {
  return getArray[1];
}

console.log(returnSecondValue(myNewArray));

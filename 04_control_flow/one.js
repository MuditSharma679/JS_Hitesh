// If

if (true) {
  // internal code execute hoga,if false then nhi hoga
}

const isUserLoggedIn = true;
if (isUserLoggedIn) {
  // console.log("Login Successful");
}

//  <, >, <=, >=, ==, !=, ===

// if (3 != 2) {
//   console.log("executed");
// }

// if (2 === "2") {
//   console.log("Equal");
// } else {
//   console.log("Not Equal");
// }

// const temperature = 41;

// if (temperature < 50) {
//   console.log(`Less than 50`);
// } else {
//   console.log(`Greater than 50`);
// }
// console.log(`There is a warning of heatwaves`);

// const score = 200;

// if (score > 100) {
//   let power = "fly";
//   console.log(`User Power: ${power}`);
// }
// console.log(`User Power: ${power}`);

const balance = 1000;
// this is known as implicit scope, but this not a good practice.
// if (balance > 500) console.log("test"), console.log("test2");

// if (balance < 500) {
//   console.log("Less than 500");
// } else if (balance < 750) {
//   console.log("Less than 750");
// } else if (balance < 900) {
//   console.log("Less than 900");
// } else {
//   console.log("Less than 1200");
// }

const userLoggedIn = true;
const debitCard = true;

if (userLoggedIn && debitCard) {
  console.log("Allow to buy a course");
}

const loggedInFromEmail = true;
const loggedInFromGoogle = false;
if (loggedInFromGoogle || loggedInFromEmail) {
  console.log("User Logged In");
}

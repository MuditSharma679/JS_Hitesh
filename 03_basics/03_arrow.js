const user = {
  username: "mudit",
  price: 999,

  welcomeMessage: function () {
    // console.log(`${this.username}, Welcome to website and price is ${this.price}`
    // );
    // console.log(this);
  },
};
// **** this is to access variable that are in current context.
// user.welcomeMessage();
user.username = "sam";
// user.welcomeMessage();

// function chai() {
//   let username = "mudit"
//   console.log(this);
// }
// chai();

// const chai = function () {
//   let username = "mudit";
//   console.log(this.username);
// };

// ** we cannot use this keyword in arrow function
const chai = () => {
  let username = "mudit";
  console.log(this.username);
};
// chai();

// ** Basic Arrow function
// const addTwo = (num1, num2) => {
//   return num1 + num2;
// };
// console.log(addTwo(5, 4));

// ** Implicit return Arrow Function means one line function, yaha return ki need nhi hoti ku ki ek hi line ka code he.

const addTwo = (num1, num2) => num1 + num2;

const addTwo_1 = (num1, num2) => num1 + num2;
// If we use small paranthesis, then return lgane ki need nhi he but curley bracket me lgana pedega.
// console.log(addTwo_1(4, 6));

const addTwo_2 = (num1, num2) => ({ username: "mudit" });
console.log(addTwo_2());

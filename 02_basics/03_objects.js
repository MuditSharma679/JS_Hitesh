// If object literals ki trh bnega to singleton nhi he
// If constructor ki trh banega to singleton hoga

// object literals

const mySym = Symbol("lastName");

const JsUser = {
  name: "Mudit",
  "full name": "Mudit Sharma",
  [mySym]: "Sharma",
  age: 18,
  location: "Jaipur",
  email: "mudit@google.com",
  isLoggedIn: false,
  lastLoginDays: ["Mondays", "Saturdays"],
};
// console.log(JsUser.email);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);

JsUser.email = "mudit@chatgpt.com";
// Object.freeze(JsUser);
// Freeze fix the value we can't change it after freeze
JsUser.email = "mudit@openai.com";
// console.log(JsUser);

JsUser.greeting = function () {
  console.log("Hello JS User");
};
JsUser.greetingTwo = function () {
  console.log(`Hello JS User, ${this.name}`);
};
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());

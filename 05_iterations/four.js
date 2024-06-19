// for-in loop : loops through the keys of an object.
// The for-in loop is used to iterate over the properties of an object. The variable is assigned the name of each property in the object as the loop iterates over them.
// How to iterate keys and values from object using for loop

// const myObject = {
//   js: "Javascript",
//   cpp: "C++",
//   rb: "ruby",
//   swift: "swift by Apple",
// };

// for (const key in myObject) {
//   console.log(`${key} shortcut is ${myObject[key]}`);
// }

const programming = ["Js", "Java", "PHP", "C++"];

for (const key in programming) {
  // console.log(key);
  // console.log(programming[key]);
  console.log(key, ":-", programming[key]);
}

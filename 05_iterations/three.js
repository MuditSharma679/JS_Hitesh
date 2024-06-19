// for-of loop : loops through the values of an object.
// The for-of loop is used to iterate over the values of an iterable object, such as an array or a string.
// The variable is assigned the value of each element in the object as the loop iterates over them

// ["","",""]
// [{},{},{}]

const arr = [1, 2, 3, 4, 5];

for (const num of arr) {
  // console.log(num);
}

// const greetings = "Hello World";
// for (const greet of greetings) {
//   if (greet == " ") {
//     console.log(`Space is detected`);
//     continue;
//   }
//   console.log(`Each Character is ${greet}`);
// }

//****  Map has key-value pairs, it returns unique value. Does not give duplicate value.
// const map = new Map();

// map.set("IN", "India");
// map.set("USA", "United States Of America");
// map.set("Fr", "France");
// map.set("IN", "India");

// for (const key in map) {
//   console.log(key);
// }

// // console.log(map);

// for (const [key, value] of map) {
//   console.log(key, ":-", value);
// }

// This code gives an error ->
// const myObject = {
//   game1: "NFS",
//   game2: "Spiderman",
// };

// for (const [key, value] of myObject) {
//   console.log(Key, ":-", value);
// }

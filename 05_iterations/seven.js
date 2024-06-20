// ****Map :-  The map method is used to create a new array with the result of a callback function called on each element in the original array. The callback function takes one argument, the current element, and returns the new value for that element.
const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// const newNums = myNumbers.map((num) => num + 10);

// Chaining : where we use method in method like map in map, filter in map etc

const newNums = myNumbers
  .map((num) => num * 10)
  .map((num) => num + 1)
  .filter((num) => num >= 40);

console.log(newNums);

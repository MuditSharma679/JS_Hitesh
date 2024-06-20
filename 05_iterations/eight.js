// Reduce :- The reduce method is used to reduce an array to a single value. The reduce method takes a callback function as its argument, which is called on each element in the array. The callback function takes two arguments, the accumulator and the current element, and returns the new value for the accumulator.

const myNums = [1, 2, 3];

// const myTotal = myNums.reduce(function (acc, currval) {
//   console.log(`acc:${acc} and currval:${currval}`);
//   return acc + currval;
// }, 0);

const myTotal = myNums.reduce((acc, currval) => acc + currval, 0);
// 0 is the initial value that goes to accumulator for the first time only, we will take any value like 1,3,2 etc.
// console.log(myTotal);

const shoppingCart = [
  {
    itemName: "Js Course",
    price: 2999,
  },
  {
    itemName: "Android App Course",
    price: 7999,
  },
  {
    itemName: "Data Science Course",
    price: 12999,
  },
];
const toPay = shoppingCart.reduce((acc, item) => acc + item.price, 0);
console.log(toPay);

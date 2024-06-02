const myArray = [0, 1, 2, 3, 4, 5];
const myHeroes = ["Superman", "Batman"];

// Another method of declaring an Array.
const myArr2 = new Array(1, 2, 3, 4);
// console.log(myArray[1]);
// console.log(myArr2[2]);

// *********Array Methods : - ******

// myArray.push(6);
// myArray.push(7);
// myArray.pop();
// myArray.unshift(9); // Add element to first index
// myArray.shift(); // Remove element from first index

// console.log(myArray.includes(9));
// console.log(myArray.indexOf(5));

// const newArr = myArray.join();
// Join converts values to string.
// console.log(newArr);
// console.log(myArray);

console.log("A", myArray);
const myn1 = myArray.slice(1, 3);
// slice does not include the last range.

console.log(myn1);
console.log("B", myArray);

const myn2 = myArray.splice(1, 3);
// splice removes the element from original array and it includes last range also. It manipulates array.
console.log(myn2);
console.log("C", myArray);

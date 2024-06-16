// for

// for (let i = 0; i <= 10; i++) {
//   const element = i;
//   if (element == 5) {
//     console.log(`5 is best number`);
//   }
//   console.log(` i = ${element}`);
// }

// for (let i = 0; i <= 10; i++) {
//   console.log(`Outer Loop Value: ${i}`);
//   for (let j = 0; j <= 10; j++) {
//     // console.log(`Inner Loop Value ${j} and inner loop ${i}`);
//     console.log(i + "*" + j + "=" + i * j);
//   }
// }

// let myArray = ["Tata", "Hyundai", "Ford", "Suzuki"];
// console.log(myArray.length);

// for (let i = 0; i < myArray.length; i++) {
//   const element = myArray[i];
//   console.log(element);
// }

// break and continue skips value

// for (let index = 1; index <= 20; index++) {
//   if (index == 5) {
//     console.log(`5 is detected`);
//     break;
//   }
//   console.log(`Value of i is ${index}`);
// }
for (let index = 1; index <= 20; index++) {
  if (index == 6) {
    console.log(`6 is detected`);
    continue;
  }
  console.log(`Value of i is ${index}`);
}

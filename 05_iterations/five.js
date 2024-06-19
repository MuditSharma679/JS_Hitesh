const coding = ["js", "ruby", "java", "C++", "Kotlin"];

// coding.forEach(function (val) {
//   console.log(val);
// });

// coding.forEach((items) => {
//   console.log(items);
// });

// function printMe(item) {
//   console.log(item);
// }
// coding.forEach(printMe);

// coding.forEach((item, index, arr) => {
//   console.log(item, index, arr);
// });

const myCoding = [
  {
    languageName: "JavaScript",
    languageFileName: "Js",
  },
  {
    languageName: "Java",
    languageFileName: "java",
  },
  {
    languageName: "Python",
    languageFileName: "py",
  },
];

myCoding.forEach((item) => {
  console.log(
    `Language is ${item.languageName} and filename is ${item.languageFileName}`
  );
});

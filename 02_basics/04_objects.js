const course = {
  courseName: "JS in Hindi",
  price: "Rs 999",
  courseInstructor: "Mudit",
};
// console.log(course.courseInstructor);

// Object Destructuring
const { courseInstructor: instructor, courseName, price } = course;
console.log(instructor, courseName, price);

// JSON format
// {
//   "name" : "mudit",
//   "courseName": "JS hindi",
//   "price":"free"
// }

[{}, {}, {}];

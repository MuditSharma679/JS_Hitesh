const course = {
  courseName: "JS in Hindi",
  price: "Rs 999",
  courseInstructor: "Mudit",
};
// console.log(course.courseInstructor);
const { courseInstructor: instructor, courseName, price } = course;
console.log(instructor, courseName, price);

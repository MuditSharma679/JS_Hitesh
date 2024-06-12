//(IIFE) Immediately Invoked Function Expression
// ***Immediately Invoked Function Expressions (IIFE) are JavaScript functions that are executed immediately after they are defined. They are typically used to create a local scope for variables to prevent them from polluting the global scope.***IIFEs are commonly used to create private scope in JavaScript, allowing variables and functions to be encapsulated and inaccessible from outside the function.

(function chai() {
  console.log(`DB connected`);
})();
// There semicolon is must when we use two IIFE together otherwise it gives error.
((name) => {
  console.log(`DB two connected ${name}`);
})("mongoDB");

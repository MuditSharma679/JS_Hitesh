// Dates

let myDate = new Date();
// console.log(myDate.toString());
// console.log(myDate.toDateString());

// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleTimeString());

// console.log(myDate.toISOString());

let myCreateDate = new Date(2023, 0, 23);
// console.log(myCreateDate.toDateString());

let myCreateDate_1 = new Date("06-02-2024");
// console.log(myCreateDate_1.toLocaleString());

let myTimeStamp = Date.now();
// console.log(Math.floor(Date.now() / 1000));

let newDate = new Date();
// console.log(newDate);
// console.log(newDate.getMonth() + 1);
// console.log(newDate.getDay());

newDate.toLocaleString("default", {
  weekday: "long",
});

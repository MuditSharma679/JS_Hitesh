let score = "33";
let score_2 = "33ab"; // This is not a pure number

// console.log(typeof score);

let valueInNumber = Number(score);
let valueInNumber_2 = Number(score_2);

// console.log(typeof valueInNumber);
// console.log(valueInNumber);
// console.log(valueInNumber_2);

// "33" => 33
// "33ab" => NaN
// true => 1 ; false => 0

let isLoggedIn = 1;

let booleanIsLoggedIn = Boolean(isLoggedIn);
// console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
// "" => false
// "mudit" => true

let anyNumber = 33;
let stringNumber = String(anyNumber);

// console.log(stringNumber);
// console.log(typeof stringNumber);

//**************************** Operations ******************************/

let value = 3;
let negValue = -value;
// console.log(negValue);

// console.log(2 + 2);
// console.log(2 - 2);
// console.log(2 * 2);
// console.log(2 ** 3);
// console.log(2 / 3);
// console.log(2 % 3);

let str1 = "hello";
let str2 = " Mudit";
let str3 = str1 + str2;
// console.log(str3);

// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + 2 + 2);
// console.log(1 + 2 + "2");

// console.log(+true);
// console.log(+"");

let x = 3;
const y = x++; // Postfix

// console.log(`x:${x}, y:${y}`);

let a = 3;
const b = ++a; //Prefix

// console.log(`a:${a}, b:${b}`);

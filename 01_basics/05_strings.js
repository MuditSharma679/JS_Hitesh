const name = "Mudit Sharma";
const repoCount = 50;

// console.log(name + repoCount);

console.log(`Hello my name is ${name} and my repoCount is ${repoCount} `);

const gameName = new String("mudit_ji_lion");

// console.log(gameName[0]);
// console.log(gameName.__proto__);
console.log(gameName.length);
// console.log(gameName.toUpperCase());

// console.log(gameName.charAt(2));
// console.log(gameName.indexOf("d"));

const newString = gameName.substring(0, 5);
// console.log(newString);

const anotherString = gameName.slice(-11, 4);
// console.log(anotherString);

const myVar = "hello";
// console.log(myVar.slice(-4, 4));

const newStringOne = "   mudit    ";
// console.log(newStringOne);
// console.log(newStringOne.trim());

const url = "https://mudit.com/mudit%20sharma";
console.log(url.replace("%20", "-"));

console.log(url.includes("mudit"));

console.log(gameName.split("_"));

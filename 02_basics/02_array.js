const Tata = ["Tiago", "Tiagor", "Altroz", "Nexon", "Harrier"];
const Mahindra = ["Bolero", "Scorpio", "XUV 700"];

// Tata.push(Mahindra);
// push existing array pr hi push krta he but concat returns a new array.
// console.log(Tata);
// console.log(Tata[5][1]);

// const allComp = Tata.concat(Mahindra);
// console.log(allComp);

// Spread Operator = denoted by ...(triple dot)
const allNewComp = [...Tata, ...Mahindra];
// console.log(allNewComp);

const another_Comp = [1, 2, 3, [4, 5, 6, [1, 2]], [7, 8, 9]];
const real_another_comp = another_Comp.flat(1);
// console.log(real_another_comp);

console.log(Array.isArray("Mudit"));
console.log(Array.from("Mudit"));
// it converts value into array

console.log(Array.from({ name: "Mudit" })); //interesting bcz it gives empty array, we have to tell whether make array with key or value.

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3));

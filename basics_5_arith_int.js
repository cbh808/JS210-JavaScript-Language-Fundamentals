const readlineSync = require("readline-sync");

console.log("Enter the first number:");
let a = Number(readlineSync.prompt());
console.log("Enter the second number:");
let b = Number(readlineSync.prompt());

console.log(`==> ${a} + ${b} = ${a + b}`);
console.log(`==> ${a} - ${b} = ${a - b}`);
console.log(`==> ${a} * ${b} = ${a * b}`);
console.log(`==> ${a} / ${b} = ${a / b}`);
console.log(`==> ${a} % ${b} = ${a % b}`);
console.log(`==> ${a} ** ${b} = ${a ** b}`);
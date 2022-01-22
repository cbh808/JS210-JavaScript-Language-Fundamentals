function getRidOfSpaces(phrase) {
  return phrase.split(' ').join('');
}

const readlineSync = require('readline-sync');
console.log("Please enter a phrase: ");
let phrase = String(readlineSync.prompt());

let phraseLengthWithSpaces = phrase.length;
let phraseLengthWithoutSpaces = getRidOfSpaces(phrase).length;

console.log(`There are ${phraseLengthWithSpaces} characters including spaces in "${phrase}".`);
console.log(`There are ${phraseLengthWithoutSpaces} characters excluding spaces in "${phrase}".`);

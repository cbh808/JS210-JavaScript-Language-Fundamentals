// Convert strings to numbers by writing a function that takes a positive
// integer or zero, and converts it to a string.
// No use of any of standard conversion functions available in JS
// e.g. String(), Number.prototype.toString, or an expression 
// such as '' + number. 
// Your function should construct the string by analyzing and manipulating 
// the number.

const DIGITS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

function integerToString(integer) {
  let string = '';
  let number;

  do {
    number = integer % 10;
    string = DIGITS[number] + string;
    integer = (integer - number) / 10;
  } while (integer > 0);

  return string;
}


console.log(integerToString(4321));      // "4321"
console.log(integerToString(0));         // "0"
console.log(integerToString(5000));      // "5000"
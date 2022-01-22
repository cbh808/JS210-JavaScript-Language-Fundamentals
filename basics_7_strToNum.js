  
  /* For this exercise we're going to learn more about type conversion by implementing our own parseInt function that converts a string of numeric characters (including an optional plus or minus sign) to a number.

// The function takes a string of digits as an argument, and returns the appropriate number. Do not use any of the built-in functions for converting a string to a number type.

// For now, do not worry about leading + or - signs, nor should you worry about invalid characters; assume all characters will be numeric.

// Examples:
// stringToInteger('4321');      // 4321
// stringToInteger('570');       // 570

Solution 1:
// Algorithm: use implicit conversion of `-` operator */

// function stringToInteger(string) {
//   return string - 0;
// }

// console.log(stringToInteger('4321'));
// console.log(stringToInteger('570'));


/* Solution 2
Algorithm:
create object literal
  keys as digits in string form & values as corresponding number
  create result variable and assign to number 0
iterate over characters
  obtain value of current digit and multiply by multiple of 10
  corresponding to digit in number
  add value of current digitn to result
return result
  */
const DIGITS = {
  '0': 0, '1': 1, '2': 2, '3': 3, '4': 4,
  '5': 5, '6': 6, '7': 7, '8': 8, '9': 9,
};

function stringToInteger(string) {
  let value = 0;
  for (let idx = 0; idx < string.length; idx += 1) {
    let key = string[idx];
    value += DIGITS[key] * Math.pow(10, (string.length - 1) - idx);
  }
  return value;
}

console.log(stringToInteger('4321'));
console.log(stringToInteger('570'));
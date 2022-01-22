// extend function by adding the ability to represent negative numbers
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

function signedIntegerToString(integer) {
  if (integer === 0) {
    return '0';
  } else if (integer > 0) {
    return '+' + integerToString(integer);
  } else {
    return '-' + integerToString(-integer);
  }
}

console.log(signedIntegerToString(4321));      // "+4321"
console.log(signedIntegerToString(-123));      // "-123"
console.log(signedIntegerToString(0));         // "0"
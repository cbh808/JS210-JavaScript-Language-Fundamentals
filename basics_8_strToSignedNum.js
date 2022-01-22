// extend function of previous problem

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

function stringToSignedInteger(string) {

  if (string[0] === '-') {
    return -(stringToInteger(string.slice(1)));
  } else if (string[0] === '+') {
    return (stringToInteger(string.slice(1)));
  } else {
    return stringToInteger(string);
  }
}

console.log(stringToSignedInteger('4321'));      // 4321
console.log(stringToSignedInteger('-570'));      // -570
console.log(stringToSignedInteger('+100'));      // 100
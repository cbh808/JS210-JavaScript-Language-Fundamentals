const DIGITS = {
  '0': 0, '1': 1, '2': 2, '3': 3, '4': 4,
  '5': 5, '6': 6, '7': 7, '8': 8, '9': 9,
};

function stringToInteger(string) {
  let value = 0;
  let negative = false;
  let positive = false;

  for (let idx = 0; idx < string.length; idx += 1) {
    let key = string[idx];

    if (key === '-') {
      negative = true;
      continue;
    } else if (key === '+') {
      positive = true;
      continue;
    }

    value += DIGITS[key] * Math.pow(10, (string.length - 1) - idx);
  }
  if (negative) {
    return '-' + value;
  } else if (positive) {
    return '+' + value;
  } else
    return value;
}

console.log(stringToSignedInteger('4321'));      // 4321
console.log(stringToSignedInteger('-570'));      // -570
console.log(stringToSignedInteger('+100'));      // 100
const DIGITS = {
  '0': 0, '1': 1, '2': 2, '3': 3, '4': 4,
  '5': 5, '6': 6, '7': 7, '8': 8, '9': 9,
};

function stringToSignedInteger(string) {
  let value = 0;
  let negative = false;

  for (let idx = 0; idx < string.length; idx += 1) {
    let key = string[idx];

    if (key === '-') {
      negative = true;
      continue;
    } else if (key === '+') {
      continue;
    }

    value += DIGITS[key] * Math.pow(10, (string.length - 1) - idx);
  }
  if (negative) {
    value *= -1;
  }

  return value;
}

console.log(stringToSignedInteger('4321'));      // 4321
console.log(stringToSignedInteger('-570'));      // -570
console.log(stringToSignedInteger('+100'));      // 100
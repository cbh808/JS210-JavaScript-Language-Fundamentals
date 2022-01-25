function reverse(inputForReversal) {
  if (typeof inputForReversal === 'string') {
    return reverseString(inputForReversal);
  } else {
    return reverseArray(inputForReversal);
  }
}

function reverseString(string) {
  let stringAsArray = string.split('')
  let array = reverseArray(stringAsArray);
  return array.join('')
}

function reverseArray(array) {
  let result = [];
  for (let i = array.length - 1; i >= 0; i -= 1) {
    result[result.length] = array[i];
  }
  return result;
}


console.log(reverse('Hello'));           // "olleH"
console.log(reverse('a'));               // "a"
console.log(reverse([1, 2, 3, 4]));      // [4, 3, 2, 1]
console.log(reverse([]));                // []

const array = [1, 2, 3];
console.log(reverse(array));             // [3, 2, 1]
console.log(array);                      // [1, 2, 3]
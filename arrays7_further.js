// reimplement shift and unshift methods without using the splice method

function shift(array) {
  let firstElement = array[0];  // undefined if array is empty
  for (let idx = 1; idx < array.length; idx += 1) {
    array[idx - 1] = array[idx];
  }
  array.pop();
  return firstElement;
}

function unshift(array, ...args) {
  let newArray = [];
  newArray.length = (array.length + args.length);
  
  for (let idx = 0; idx < array.length; idx += 1) {
    newArray[idx + args.length] = array[idx];
  }
  args.reverse

  for (let idx = 0; idx < args.length; idx += 1) {
     newArray[idx] = args[idx];
  }

  for (let idx = 0; idx < newArray.length; idx += 1) {
    array[idx] = newArray[idx];
  }
  return array.length;
}

console.log(shift([1, 2, 3]));                // 1
console.log(shift([]));                       // undefined
console.log(shift([[1, 2, 3], 4, 5]));        // [1, 2, 3]

console.log(unshift([1, 2, 3], 5, 6));        // 5
console.log(unshift([1, 2, 3]));              // 3
console.log(unshift([4, 5], [1, 2, 3]));      // 3

const testArray = [1, 2, 3];
console.log(shift(testArray));                // 1
console.log(testArray);                       // [2, 3]
console.log(unshift(testArray, 5));           // 3
console.log(testArray);                       // [5, 2, 3]

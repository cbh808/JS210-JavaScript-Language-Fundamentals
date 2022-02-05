/*
implement `Array.prototype.slice`
Rules:
`slice` function takes 3 args
  - array
  - integer, begin index, >=0
  - integer, end index, >=0
If value of `begin` or `end` > length of array, set to array length.

Returns new array with extracted elements
  - from index `begin` upto but not incl. `end`

NO MUTATION of original array allowed

DataStructures
input: array, integer, integer
output: array, with extracted elements

Algorithm:
declare `result` array
declare `begin` and `end` based on rules:
  if > array.length, set to array.length, else to value passed in
iterate over input array from index `begin` to less than index `end`
push each element to the result array
return `result`

*/
function setIndex(number, limit) {
  return number > limit ? limit : number
}

function slice(array, begin, end) {
  let result = [];
  begin  = setIndex(begin, array.length);
  end    = setIndex(end, array.length);

  for (let idx = begin; idx < end; idx += 1) {
    result.push(array[idx]);
  }

  return result;
}

console.log(slice([1, 2, 3], 1, 2));               // [2]
console.log(slice([1, 2, 3], 2, 0));               // []
console.log(slice([1, 2, 3], 5, 1));               // []
console.log(slice([1, 2, 3], 0, 5));               // [1, 2, 3]

const arr1 = [1, 2, 3];
console.log(slice(arr1, 1, 3));                     // [2, 3]
console.log(arr1);                                  // [1, 2, 3]



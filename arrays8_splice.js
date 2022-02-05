/*
Implement `Array.prototype.splice`
Rules:
`splice` function takes following args:
  - array `array`
  - integer `start`, a start index, >=0
  - integer `deleteCount`, identifies number of elements to delete, >=0
  - 0 or more optional elements, to be added into array
If value of `start` > length of array, set to array length.
If value of delete count > (array len - start) extends past end of array
  - set `deleteCount` to (array length - start)

Remove `deleteCount` number of elements from array starting at index `start`

Insert any optional elements from start index into array

If no optional args provided, function only removes elements
Return new array containing deleted elements, empty array if none deleted
MUTATION of original array

DataStructure
[0, 1, 2, 3, 4]
len = 5
start = 1
deleteCount = 4
4 not greater than len - start (5 -1) => deleteCount stays same
delete Count = 5
5 > len - start (5 - 1)=> deleteCount = len - start

Algorithm
get `start` index
get `deleteCount` number
  if start + deleteCount > array length, reassign to array length 
mutate original array with 
return `slice` based on start, and end of start + `deleteCount`
*/

function setIndex(number, limit) {
  return number > limit ? limit : number
}

function setDeleteCount(number, start, limit) {
  return number > limit - start ? limit - start : number;
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

function splice(array, start, deleteCount, ...args) {

  start = setIndex(start, array.length);
  deleteCount = setDeleteCount(deleteCount, start, array.length);
  
  const arrayCopy = slice(array, 0, array.length);
  const elementCount = args.length;
  const newLength = array.length + elementCount - deleteCount;
  array.length = newLength;

  for (let i = 0; i < elementCount; i += 1) {
    array[start + i] = args[i];
  }

  let copyBackCount = arrayCopy.length - (start + deleteCount);
  for (let i = 0; i < copyBackCount; i += 1) {
    array[start + elementCount + i] = arrayCopy[start + deleteCount + i];
  }

  return slice(arrayCopy, start, start + deleteCount);
}

console.log(splice([1, 2, 3], 1, 2));              // [2, 3]
console.log(splice([1, 2, 3], 1, 3));              // [2, 3]
console.log(splice([1, 2, 3], 1, 0));              // []
console.log(splice([1, 2, 3], 0, 1));              // [1]
console.log(splice([1, 2, 3], 1, 0, 'a'));         // []

const arr2 = [1, 2, 3];
console.log(splice(arr2, 1, 1, 'two'));             // [2]
console.log(arr2);                                  // [1, "two", 3]

const arr3 = [1, 2, 3];
console.log(splice(arr3, 1, 2, 'two', 'three'));    // [2, 3]
console.log(arr3);                                  // [1, "two", "three"]

const arr4 = [1, 2, 3];
console.log(splice(arr4, 1, 0));                    // []
console.log(splice(arr4, 1, 0, 'a'));               // []
console.log(arr4);                                  // [1, "a", 2, 3]

const arr5 = [1, 2, 3];
console.log(splice(arr5, 0, 0, 'a'));               // []
console.log(arr5);                                  // ["a", 1, 2, 3]

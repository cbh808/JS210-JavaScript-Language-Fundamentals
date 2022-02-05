/*
Check if two arrays when compared, contain the same values.
The values in the array do not have to be in the same order
The values of one array must match one to one with number of 
  and data type of values in other array

Data Structures
input: 2 arrays
output: boolean

Algorithm
sort each array
compare values one by one
  - if all values strictly equivalent return TRUE
  - else return FALSE
*/

function areArraysEqual(array1, array2) {
  array1.sort();
  array2.sort();
  return array1.every( (value,index) => {
    return value === array2[index];
  });
}

console.log(areArraysEqual([1, 2, 3], [1, 2, 3]));                  // true
console.log(areArraysEqual([1, 2, 3], [3, 2, 1]));                  // true
console.log(areArraysEqual(['a', 'b', 'c'], ['b', 'c', 'a']));      // true
console.log(areArraysEqual(['1', 2, 3], [1, 2, 3]));                // false
console.log(areArraysEqual([1, 1, 2, 3], [3, 1, 2, 1]));            // true
console.log(areArraysEqual([1, 2, 3, 4], [1, 1, 2, 3]));            // false
console.log(areArraysEqual([1, 1, 2, 2], [4, 2, 3, 1]));            // false
console.log(areArraysEqual([1, 1, 2], [1, 2, 2]));                  // false
console.log(areArraysEqual([1, 1, 1], [1, 1]));                     // false
console.log(areArraysEqual([1, 1], [1, 1]));                        // true
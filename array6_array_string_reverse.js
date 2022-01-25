// implement your own version of the Array.prototype.reverse method. 

// implementation to differ from the built-in method as follows:
//     It should accept either a string or an array as an argument
//     It should return a new string or array

/*
input: collection, index-based
output: collection, values at each index reversed

Data structures:
strings are primitives and chars cannot be reassigned directly
array elements can be reassigned directly in a new result array

Alg.
check if string or array

iterate over indexes from index 0 to end of collection


function reverse(inputForReversal) {
  
}

reverse('Hello');           // "olleH"
reverse('a');               // "a"
reverse([1, 2, 3, 4]);      // [4, 3, 2, 1]
reverse([]);                // []

const array = [1, 2, 3];
reverse(array);             // [3, 2, 1]
array;                      // [1, 2, 3]
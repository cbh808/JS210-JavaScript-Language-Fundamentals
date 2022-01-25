// implement your own version of the Array.prototype.reverse method. 

// implementation to differ from the built-in method as follows:
//     It should accept either a string or an array as an argument
//     It should return a new string or array

function reverse(inputForReversal) {
  // ...
}

reverse('Hello');           // "olleH"
reverse('a');               // "a"
reverse([1, 2, 3, 4]);      // [4, 3, 2, 1]
reverse([]);                // []

const array = [1, 2, 3];
reverse(array);             // [3, 2, 1]
array;                      // [1, 2, 3]
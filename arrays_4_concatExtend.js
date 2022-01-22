// unlimited amount of args after first array arg. //


function concat(array1, ...secondArgument) {
  let newArray = [];
  //add arg1 (array) to new array
  for (let i = 0; i < array1.length; i +=1) {
    newArray.push(array1[i]);
  }
  // if 2nd arg array => new loop, else bracket notation to add element
  secondArgument.forEach( element => {
    if (Array.isArray(element)) {
    for (let i = 0; i < element.length; i +=1) {
      newArray.push(element[i]);
    }
  } else {
      newArray[newArray.length] = element;
    }
  });

  return newArray;
}

console.log(concat([1, 2, 3], [4, 5, 6]));          // [1, 2, 3, 4, 5, 6]
console.log(concat([1, 2], 3));                     // [1, 2, 3]
console.log(concat([2, 3], ['two', 'three']));      // [2, 3, "two", "three"]
console.log(concat([2, 3], 'four'));                // [2, 3, "four"]


const obj = { a: 2, b: 3 };
const newArray = concat([2, 3], obj);
console.log(newArray);                              // [2, 3, { a: 2, b: 3 }]
obj.a = 'two';
console.log(newArray);                              // [2, 3, { a: "two", b: 3 }]

const arr1 = [1, 2, 3];
const arr2 = [4, 5, obj];
const arr3 = concat(arr1, arr2);
console.log(arr3);                                  // [1, 2, 3, 4, 5, { a: "two", b: 3 }]
obj.b = 'three';
console.log(arr3);                                  // [1, 2, 3, 4, 5, { a: "two", b: "three" }]

arr3[5].b = 3;                         // or, `arr3[5]['b'] = 3;`
console.log(obj);                                   // { a: "two", b: 3 }
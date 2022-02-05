/*
The program below uses the array returned by oddities as part of a comparison. 
Explain the results of these comparisons.

Examples:
function oddities(array) {
  const oddElements = [];

  for (let i = 0; i < array.length; i += 2) {
    oddElements.push(array[i]);
  }

  return oddElements;
}

oddities([2, 3, 4, 5, 6]) === [2, 4, 6];      // false
oddities(['abc', 'def']) === ['abc'];         // false

Answer:

Strict equivalence for arrays in JS evaluates if the arrays being compared
are the same objects, not only if they have the same values.
Therefore when the arrays returned by the oddities function are 
strictly compared to array literals haveing the same values, this returns
`false` because they do not reference the same objects.
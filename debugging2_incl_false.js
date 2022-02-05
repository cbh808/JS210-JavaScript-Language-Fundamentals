/*
function includesFalse searches a list of primitives for the boolean false.
If false is found, the function immediately returns true.
If no occurrence of false found returns false.

The last method invocation doesn't return as expected.
Why is that? Fix the code so that it behaves as intended.

input:array
output: boolean

Alg: iterate over list

Reason:
The expected value is 'false', because the boolean `false` does not appear in
the input array.
The loose eqivalence operator `==`, however, evaluates to true when the number 0
is loosely compared with the boolean `false`. This is why the the last array
evaluates to 'true' when passed to the function includesFalse as an argument.
The way to fix the bug is to change the comparison operator to `===`.

`==` also called 'abstract equality operator'
*/

function includesFalse(list) {
  for (let i = 0; i < list.length; i++) {
    let element = list[i];

    if (element === false) {
      return true;
    }
  }

  return false;
}

// returns:
console.log(includesFalse([8, null, 'abc', true, 'launch', 11, false]));       // true
console.log(includesFalse(['programming', undefined, 37, 64, true, 'false'])); // false
// below evaluates to `true` with loose equality, `false` with strict equality
console.log(includesFalse([9422, 'lambda', true, 0, '54', null]));
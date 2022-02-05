/*
Function placeABet below accepts a guess from the user between 1 and 25.
The function should determine a winning number and return a message
to user indicating whether it is a winning guess.

When invoking placeABet, an error is raised.
Fix the bug and explain what caused it.

function `generateRandomInt` is defined as a function expression.
Therefore it is not accessible outside of the function expression.
It is only available locally, and the invocation in the code
of generateRandomInt() is outside of this scope.


*/
function placeABet(guess) {
  (function generateRandomInt() {
    return Math.floor(Math.random() * 25) + 1;
  });

  const winningNumber = generateRandomInt();

  if (guess < 1 || guess > 25) {
    return 'Invalid guess. Valid guesses are between 1 and 25.';
  }

  if (guess === winningNumber) {
    return "Congratulations, you win!";
  } else {
    return "Wrong-o! You lose.";
  }
}

const userGuess = parseInt(prompt('Input a guess between 1-25'), 10);
alert(placeABet(userGuess));
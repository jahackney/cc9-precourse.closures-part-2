/* exported gameGenerator accountGenerator randomInteger */
/*
We've written a few tests for your Game Generator function which you can find them in the 'specs' folder.
By the end of this exercise, you'll be writing tests for the functions yourself.
*/



function randomInteger(n) {
  return Math.floor(Math.random() * (n + 1));
}

function gameGenerator(upper) { //take a number input that provides the 'upper bound' (limit)
  let guesses = 0; //keep track of how many guesses have been made
  let upperBound = upper;
  let winningNumber = randomInteger(upperBound); // generate a random number between 0 and the upper bound
  return {
    guess: function(n) { //have a method guess that allows you to guess the number and returns true or false if the guess is right or wrong
      guesses++; 
      if (n > upperBound) {
        return false;
      } else if (n === winningNumber) {
        return true;
      } else {
         return false;
      }
    },

    reset: function() { //have a method reset that resets the game (new winning number, reset guesses, same upper bound)
      guesses = 0;
      winningNumber = randomInteger(upperBound);
    },

    giveUp: function() { //have a method giveUp that returns the correct number and resets the game
      let lastWinningNumber = winningNumber;
      this.reset();
      return lastWinningNumber;
    },
  
    numberGuesses:function() { //have a method numberGuesses that provides a way to see the number of guesses that have been made
      return guesses;
      }
    } 
  }


function accountGenerator(initial) {
  let balance = initial;

  return {
    withdraw: function(amount) {
      if (balance - amount >= 0) {
        balance = balance - amount;
        return `Here’s your money: $${amount}`;
      }
      return "Insufficient funds.";
    },
    deposit: function(amount) {
      balance = balance + amount;
      return `Your balance is: $${balance}`;
    }
  };
}

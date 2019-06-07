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
  function TransactionMessage(type, amount, before, after, status) {
    this.type = type;
    this.amount = amount;
    this.before = before;
    this.after = after;
    this.status = status;
    this.time = new Date(); //Use the Date object to incorporate a key time into the transactions
  };

  let balance = initial;
  let history = [];
  let wApproved = [];
  let dApproved =[];

  if (initial === undefined) {
    balance = 0;
  }
  return {
    withdraw: function(amount) { //Change withdraw to return a transaction object
      if (balance - amount >= 0 && amount > 0) {
        balance = balance - amount;
        let approvedWithdraw = new TransactionMessage('withdrawal', amount, balance + amount, balance, 'approved');
        history.unshift(approvedWithdraw);
        wApproved.push(amount);
        return approvedWithdraw;
      } 
      let deniedWithdraw = new TransactionMessage('withdrawal', amount, balance, balance - amount , 'denied');
      history.unshift(deniedWithdraw);
      return deniedWithdraw;
    },
    deposit: function(amount) { //Change deposit to return a transaction object
      if (balance + amount > balance) {
        balance = balance + amount;
        let approvedDeposit = new TransactionMessage('deposit', amount, balance - amount, balance, 'approved');
        history.unshift(approvedDeposit);
        dApproved.push(amount);
        return approvedDeposit;
      }
      let deniedDeposit = new TransactionMessage('deposit', amount, balance, balance + amount, 'denied');
      history.unshift(deniedDeposit);
      return deniedDeposit;
    },
    getBalance: function() { //Add function getBalance that returns the current balance
      return balance;
    },
    transactionHistory: function(n) { //Implement a function transactionHistory to get the last n withdrawals or deposits
      return history.slice(0, n);
    },
    averageTransaction: function() { //Implement a function averageTransaction that determines the average withdrawal and deposit amounts.
      return {
        withdrawal: wApproved.reduce((a, b) => a + b) / wApproved.length,
        deposit: dApproved.reduce((a, b) => a + b) / dApproved.length
      }
    }

  };
} 







 



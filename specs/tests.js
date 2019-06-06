describe("gameGenerator", () => {
  it("should be there", () => {
    expect(gameGenerator).toBeDefined();
    expect(typeof gameGenerator).toBe("function");
  });

  it("should generate some games!", () => {
    const game = gameGenerator(4);
    expect(typeof game).toBe("object");
  });

  it("should have just one winning number", () => {
    const bound = 4;
    const game = gameGenerator(bound);
    const number = [];
    for (let i = 0; i <= bound; i++) {
      if (game.guess(i)) {
        number.push(i);
      }
    }
    expect(number.length).toBe(1);
  });

  it("should have a reset method", () => {
    let num = 5;
    let test = gameGenerator(5);
    test.guess(6);
    test.guess(7);
    test.reset();
    expect(test.numberGuesses()).toEqual(0)
    
  });

  it("return the correct number of guesses", () => {
    const n = 4;
    let test = gameGenerator(5);
    for (let i = 0; i < n; ++i) test.guess(1);
    expect(test.numberGuesses()).toEqual(n);
  });
});

describe("accountGenerator", () => {
  it("should be there", () => {
    expect(accountGenerator).toBeDefined();
    expect(typeof accountGenerator).toBe("function");
  });
  //Add function getBalance that returns the current balance
  it("should return the current balance", () => {
    let test = accountGenerator();
    test.deposit(42);
    test.withdraw(5);
    expect(test.getBalance()).toBe(37);
  });
  //Change withdraw to return a transaction object
   //Change deposit to return a transaction object
  it("should generate an object", () => {
    const test = accountGenerator(6);
    expect(typeof test.withdraw(4)).toBe("object");
    expect(typeof test.deposit(2)).toBe("object");
  });
 //Implement a function transactionHistory to get the last n withdrawals or deposits
 it("should get the last n withdrawals or deposits", () => {
    let num = 3;
    let test = accountGenerator();
    test.deposit(42);
    test.withdraw(5);
    test.withdraw(1);
    test.deposit(71);
    let hist = test.transactionHistory(num);
    expect(hist.length).toBe(num);
});
  //Implement a function averageTransaction that determines the average withdrawal and deposit amounts
  it("should determine the average withdrawal and deposit amounts", () => {
    let num = 3;
    let test = accountGenerator();
    test.deposit(42);
    test.withdraw(5);
    test.withdraw(1);
    test.deposit(71);
    let avg = test.averageTransaction();
    expect(avg.deposit).toBe(56.5);
    expect(avg.withdrawal).toBe(3);
    });
});

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
    const num = 5;
    const test = gameGenerator(num);
    let g = null;
    for (let i = 0; i <= num; i++) {
      if (test.guess(i)) {
        g = (i + 1);
      }        
    }
    expect(test.numberGuesses()).toEqual(g);
  });
});

describe("accountGenerator", () => {
  it("should be there", () => {
    expect(accountGenerator).toBeDefined();
    expect(typeof accountGenerator).toBe("function");
  });

  it("should have some tests", () => {
    expect(false).toBeTruthy();
  });
});

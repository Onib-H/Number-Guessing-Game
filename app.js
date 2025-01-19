const prompt = require("prompt-sync")();

function numberGuessingGame() {
  console.log("Welcome to Number Guessing Game");
  console.log("I've picked number between 1 and 100. Can you guess it?");

  const random = Math.trunc(Math.random() * 100 + 1);
  let attempt = 0,
    choice = 0;
  let guessCorrectly = false;

  function guessingGame() {
    const guess = parseInt(prompt("Enter your guess(1-100):"));

    if (isNaN(guess) || guess < 1 || guess > 100) {
      console.log("Please enter a valid number between 1 and 100");
      guessNumber();
      return;
    }

    attempt++;

    if (guess === random) {
      let attempts = attempt === 1 ? "attempt" : "attempts";
      console.log(
        `Congratulation! You guess the number in ${attempt} ${attempts}`
      );
      guessCorrectly = true;
    } else if (guess > random) {
      console.log("Too High");
      guessingGame();
    } else {
      console.log("Too Low");
      guessingGame();
    }
  }

  guessingGame();

  if (guessCorrectly) {
    console.log("Thank you for playing!");
  }
}
numberGuessingGame();

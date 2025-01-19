const prompt = require("prompt-sync")();

function numberGuessingGame() {
  console.log("Welcome to Number Guessing Game.");
  console.log("I've picked number between 1 and 100. Can you guess it?");
  console.log("You have a 10 attempts.");

  const random = Math.trunc(Math.random() * 100 + 1);
  let attempt = 0;
  let guessCorrectly = false;
  const maxAttempt = 10;

  while (!guessCorrectly && attempt < maxAttempt) {
    let guess = parseInt(prompt("Enter your guess(1-100):"));

    if (isNaN(guess) || guess < 1 || guess > 100) {
      console.log("Please enter a valid number between 1 and 100");
      continue;
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
    } else {
      console.log("Too Low");
    }

    if (!guessCorrectly && attempt < maxAttempt) {
      console.log(`You have ${maxAttempt - attempt} attempts remaining.`);
    }
  }
  if (!guessCorrectly) {
    console.log(`Game over! The correct number was ${random}.`);
  }
  console.log("Thank you for playing!");
}
numberGuessingGame();

const prompt = require("prompt-sync")();

console.log("Welcome to Number Guessing Game");
console.log("I've picked number between 1 and 100. Can you guess it?");

const random = Math.trunc(Math.random() * 100 + 1);
let attempt = 0,
  choice = 0;

while (choice != random) {
  choice = prompt("Enter your guess(1-100):");
  choice = Number(choice);
  attempt++;

  if (choice > random) {
    console.log("Too high");
  } else if (choice < random) {
    console.log("Too low");
  }
}
if (attempt == 1) {
  console.log(`Congratulations! You guess the number in ${attempt} attempt`);
} else {
  console.log(`You guess the number in ${attempt} attempts`);
}

console.log("Thanks for playing!");

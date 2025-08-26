// Number Guessing Game
// User tries to guess a randomly generated number between 1 and 100
// Input: user's guess via prompt
// Output: feedback via alert (too high, too low, correct)
// Steps: generate random number -> prompt user for guess -> check guess -> provide feedback -> repeat until correct
// Note: Use Math.random() to generate random number, use while loop for repeated guessing
// Example: random number = 42, user guesses 30 -> "Too low!", user guesses 50 -> "Too high!", user guesses 42 -> "Correct!"
// Variables: randomNumber, guessed, attempts, running
// Conditions: if guessed < randomNumber -> "Too low!", else if guessed > randomNumber -> "Too high!", else -> "Correct!"
// Increment attempts on each valid guess
// Stop loop when guessed correctly

const minNumber = 1;
const maxNumber = 100;

const randomNumber = Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;

let attempts = 0;
let guessed;
let running = true;

while (running) {

    guessed = prompt(`Guess a number between ${minNumber} and ${maxNumber}:`);
    guessed = Number(guessed);
    if (isNaN(guessed)) {
        alert("Please enter a valid number.");
    }
    else if (guessed < minNumber || guessed > maxNumber) {
        alert(`Please enter a number between ${minNumber} and ${maxNumber}.`);
    }
    else{
        attempts++;
        if (guessed === randomNumber) {
            alert(`Congratulations! You've guessed the number ${randomNumber} in ${attempts} attempts.`);
            running = false;
        }
        else if (guessed < randomNumber) {
            alert("Too low! Try again.");
        }
        else {
            alert("Too high! Try again.");
        }
    }
}
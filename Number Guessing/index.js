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
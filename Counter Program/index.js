// Counter Program
// HTML elements: buttons (id="Decrease", "Reset", "Increase"), div (id="count")
// JavaScript code to handle button clicks and update counter display
// Initialize counter variable
// Add event listeners to buttons
// On button click, update counter variable and display updated value
// Decrease button: decrement counter
// Reset button: set counter to 0
// Increase button: increment counter
// Display counter value in div
// Example: initial counter = 0, click Increase -> counter = 1, display "1"
// Steps: get HTML elements -> initialize counter -> add event listeners -> update and display counter on button clicks
// Note: Use textContent to update div content


const Decrease = document.getElementById("Decrease");
const Reset = document.getElementById("Reset");
const Increase = document.getElementById("Increase");
const count = document.getElementById("count");

let counter = 0;

Increase.onclick = function() {
    counter++;
    count.textContent = counter;
}

Decrease.onclick = function() {
    counter--;
    count.textContent = counter;
}

Reset.onclick = function() {
    counter = 0;
    count.textContent = counter;
}


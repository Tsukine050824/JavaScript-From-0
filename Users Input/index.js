// Circumference Calculator
// Formula: C = 2 * π * r
// HTML elements: input box for radius, button to calculate, display result
// JavaScript code to handle button click, calculate circumference, display result
// Get HTML elements
// Add event listener to button
// On button click, get radius input, convert to number, calculate circumference, display result
// Example: radius = 5 -> circumference = 31.4
// Steps: get elements -> add event listener -> get input -> convert to number -> calculate circumference -> display result
// Note: Use Number() to convert input string to number, use textContent to update display
// Use constant for Pi value (3.14)
// HTML structure assumed to be present in the corresponding HTML file


const Pi = 3.14;
let radius;
let circumference;

document.getElementById("mySubmit").onclick = function() {
    radius = document.getElementById("myText").value;
    radius = Number(radius);
    circumference = 2 * Pi * radius;
    document.getElementById("myh2").textContent = circumference + " is the circumference.";
}
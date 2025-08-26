// If-Else
// Check age category and display message
// Categories: old (100+), adult (18-99), young (<18)
// Input: age from user
// Output: message based on age category
// Example: age = 25 -> "You are adult"
// Steps: get input -> convert to number -> check conditions -> display message
// Note: Use if-else if-else structure
// HTML elements: input (id="ageInput"), button (id="checkBtn"), div (id="result")
// JavaScript code to handle button click and display result
// Get HTML elements
// Add event listener to button
// On button click, get age input, convert to number, check conditions, display message
// Conditions: if age >= 100 -> "You are old", else if age >= 18 -> "You are adult", else -> "You are young"


const ageInput = document.getElementById("ageInput");
const checkAgeButton = document.getElementById("checkBtn");
const resultDiv = document.getElementById("result");
let age;

checkAgeButton.onclick = function() {
    age = ageInput.value;
    age = Number(age);
    if( age >= 100){
        resultDiv.textContent = "You are old";
    }
    else if( age >= 18){
        resultDiv.textContent = "You are adult";
    }
    else{
        resultDiv.textContent = "You are young";
    }
}
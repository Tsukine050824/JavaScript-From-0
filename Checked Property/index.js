// Checked Property
// Check if checkbox is checked and which radio button is selected
// HTML elements: checkbox (id="myCheckBox"), radio buttons (id="Visabtn", "Masterbtn", "Paypalbtn"), button (id="checkBtn"), divs (id="result", "payresult")
// JavaScript code to handle button click and display results
// Get HTML elements
// Add event listener to button
// On button click, check checkbox state and selected radio button, display results
// Example: checkbox checked -> "Checked", radio button Visa selected -> "Visa Card Selected"
// Note: Use .checked property to check state of checkbox and radio buttons
// Conditions: if checkbox.checked -> "Checked", else -> "Not Checked"
// if Visabtn.checked -> "Visa Card Selected", else if Masterbtn.checked -> "Master Card Selected", else if Paypalbtn.checked -> "Paypal Selected", else -> "No Payment Method Selected"
// Steps: get elements -> add event listener -> check states -> display results
// HTML structure assumed to be present in the corresponding HTML file




const checkBox = document.getElementById('myCheckBox');
const Visabtn = document.getElementById('Visabtn');
const Masterbtn = document.getElementById('Masterbtn');
const Paypalbtn = document.getElementById('Paypalbtn');
const check = document.getElementById('checkBtn');
const result = document.getElementById('result');
const payresult = document.getElementById('payresult');

check.onclick = function() {
    if(checkBox.checked){
        result.textContent = "Checked";
    }
    else{
        result.textContent = "Not Checked";
    }

    if(Visabtn.checked){
        payresult.textContent = "Visa Card Selected";
    } else if(Masterbtn.checked){
        payresult.textContent = "Master Card Selected";
    } else if(Paypalbtn.checked){
        payresult.textContent = "Paypal Selected";
    } else {
        payresult.textContent = "No Payment Method Selected";
    }
}
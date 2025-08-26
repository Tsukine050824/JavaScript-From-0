// Temperature Conversion
// Convert between Celsius and Fahrenheit
// Formula: C = (F - 32) * 5/9, F = (C * 9/5) + 32
// HTML elements: input box, radio buttons for conversion type, button to convert, display result
// JavaScript code to handle conversion and display result
// Get HTML elements
// Add event listener to button
// On button click, get input value, check selected conversion type, perform conversion, display result
// Example: input 100, select toFahrenheit -> output 212°F
// Steps: get elements -> add event listener -> get input -> check conversion type -> perform conversion -> display result
// Note: Use parseFloat to convert input string to number, use toFixed(2) to format result to 2 decimal places



const textBox = document.getElementById("textBox");
const toFahrenheit = document.getElementById("toFahrenheit");
const toCelsius = document.getElementById("toCelsius");
const result = document.getElementById("result");

let temperature;

function convert(){
    if(toFahrenheit.checked){
        temperature = (parseFloat(textBox.value) * 9/5) + 32;
        result.textContent = `${textBox.value}°C is ${temperature.toFixed(2)}°F`;
    } else if(toCelsius.checked){
        temperature = (parseFloat(textBox.value) - 32) * 5/9;
        result.textContent = `${textBox.value}°F is ${temperature.toFixed(2)}°C`;
    }
    else{
        result.textContent = "Please select a conversion type.";
    }
}
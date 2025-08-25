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
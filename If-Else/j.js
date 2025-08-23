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
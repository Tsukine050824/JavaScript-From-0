const Button = document.getElementById("generateBtn");
const Label1 = document.getElementById("resultLabel1");
const Label2 = document.getElementById("resultLabel2");
const Label3 = document.getElementById("resultLabel3");
const min = 1;
const max = 6;
let randomNum1;
let randomNum2;
let randomNum3;

Button.onclick = function() {
    randomNum1 = Math.floor(Math.random() * max) + min;
    randomNum2 = Math.floor(Math.random() * max) + min;
    randomNum3 = Math.floor(Math.random() * max) + min;
    Label1.textContent = randomNum1;
    Label2.textContent = randomNum2;
    Label3.textContent = randomNum3;
}


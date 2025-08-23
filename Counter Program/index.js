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


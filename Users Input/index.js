const Pi = 3.14;
let radius;
let circumference;

document.getElementById("mySubmit").onclick = function() {
    radius = document.getElementById("myText").value;
    radius = Number(radius);
    circumference = 2 * Pi * radius;
    document.getElementById("myh2").textContent = circumference + " is the circumference.";
}
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
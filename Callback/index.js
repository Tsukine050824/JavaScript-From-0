// Callback function example
// A callback function is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action.
// Here, we define a function 'sum' that takes two numbers and a callback function. After calculating the sum, it calls the callback function with the result.




/// Using console to display result
sum( displayPage, 5, 10 );

/// Using page to display result
function sum(callback,a,b){
    let result = a + b;
    callback(result);
}

// Callback functions
function displayConsole(result){
    console.log("The result is: " + result);
}

// Callback function to display result on the page
function displayPage(result){
    document.getElementById("H1").textContent = result;
}


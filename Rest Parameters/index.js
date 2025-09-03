// Rest Parameters: allows a function to accept an indefinite number of arguments as an array, providing a way to represent variadic functions in JavaScript.
//(...rest) syntax is used to collect all remaining arguments into an array.\
// (...spread) syntax is used to spread elements of an array or iterable object into individual arguments.
// Example


// Using (...rest) to collect arguments into an array
function listFoods(...foods) {
    console.log(...foods);
}
// Using (...spread) to spread array elements into individual arguments
function getFoods(...foods) {
    return foods;
}

const food1 = "Pizza";
const food2 = "Burger";
const food3 = "Pasta";
const food4 = "Salad";
const food5 = "Sushi";

listFoods(food1, food2, food3, food4, food5); // Output: Pizza Burger Pasta Salad Sushi

const allFoods = getFoods(food1, food2, food3, food4, food5);
console.log(allFoods); // Output: [ 'Pizza', 'Burger', 'Pasta', 'Salad', 'Sushi' ]

// Another Example with string.join()
function combineStrings(...strings) {
    return strings.join(" ");
}

const combined = combineStrings("Hello", "world!", "This", "is", "JavaScript.");
console.log(combined); // Output: "Hello world! This is JavaScript."
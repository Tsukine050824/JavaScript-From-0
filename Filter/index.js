// Filter : custom filter function for arrays


let numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Custom filter function to filter even numbers
let EvenFilter = numberArray.filter(Even)
let OddFilter = numberArray.filter(Odd)

// Callback function to check if a number is even
function Even(evenNumber) {
    return evenNumber % 2 === 0;
}
// Callback function to check if a number is odd
function Odd (oddNumber) {
    return oddNumber % 2 !== 0;
}

// Display the results
console.log("Even Numbers : " + EvenFilter);
console.log("Odd Numbers : " + OddFilter);
// Output:
// Even Numbers : 2,4,6,8,10
// Odd Numbers : 1,3,5,7,9

// The filter() method creates a new array with all elements that pass the test implemented by the provided function.
// It does not modify the original array.
// The callback function should return a boolean value (true or false).
// If the callback function returns true, the element is included in the new array; otherwise, it is excluded.
// The filter() method can be used with any type of array, including arrays of objects.
// It is a powerful tool for creating subsets of data based on specific criteria.
// The filter() method is often used in combination with other array methods like map() and reduce() for more complex data manipulation tasks.
// The filter() method is supported in all modern browsers and Node.js environments.
// Another example: 

const ages = [32, 33, 16, 40, 24,15, 12, 18];
const adults = ages.filter(Adult);
const minors = ages.filter(Minor);



function Adult(element) {
    return element >= 18;   
}
function Minor(element) {
    return element < 18;   
}

console.log("Adults : " + adults); // Adults : 32,33,40,24
console.log("Minors : " + minors); // Minors : 16,15,12,18

// The filter() method can also be used with arrow functions for more concise code

const fruits = ['apple', 'banana', 'grape', 'mango', 'orange', 'kiwi'];
const longFruits = fruits.filter(fruit => fruit.length > 5);
console.log("Fruits with more than 5 letters: " + longFruits); // Fruits with more than 5 letters: banana,grape,mango,orange
const shortFruits = fruits.filter(fruit => fruit.length <= 5);
console.log("Fruits with 5 or fewer letters: " + shortFruits); // Fruits with 5 or fewer letters: apple,kiwi
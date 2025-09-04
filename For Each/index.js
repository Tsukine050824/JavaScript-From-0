// For Each Method Examples

// Basic usage of forEach to log each number in an array

let numbers = [1, 2, 3, 4, 5];
numbers.forEach(function(number) {
    console.log(number);
});

// Using arrow function syntax
numbers.forEach(number => console.log(number));

// Example with an array of objects
let users = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 35 }
];
// Logging user details
users.forEach(user => console.log(`${user.name} is ${user.age} years old.`));

// Modifying elements in an array
let doubled = [];
numbers.forEach(number => {
    doubled.push(number * 2);
});
// doubled now contains [2, 4, 6, 8, 10]
console.log(doubled); // Output: [2, 4, 6, 8, 10]

// Using forEach with index
numbers.forEach((number, index) => {
    console.log(`Index: ${index}, Value: ${number}`);
});

// Note: forEach does not return a new array, it simply executes the provided function once for each array element.
// If you need to create a new array based on the original, consider using map() instead.

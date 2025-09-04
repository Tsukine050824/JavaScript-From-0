const numbers = [1, 2, 3, 4, 5];

// Using map to create a new array with each number squared
const squaredNumbers = numbers.map(square);
const cubedNumbers = numbers.map(cuba)

function square(num) {
    return Math.pow(num, 2);
}
function cuba(num) {
    return Math.pow(num, 3);
}

console.log('Squared Numbers:', squaredNumbers); // Output: [1, 4, 9, 16, 25]
console.log('Cubed Numbers:', cubedNumbers); // Output: [1, 8, 27, 64, 125]



const names = ['Alice', 'Bob', 'Charlie'];

// Using map to create a new array with each name in uppercase
const upperCaseNames = names.map(toUpperCase);
function toUpperCase(name) {
    return name.toUpperCase();
}
function toLowerCase(name) {
    return name.toLowerCase();
}
console.log('Uppercase Names:', upperCaseNames); // Output: ['ALICE', 'BOB', 'CHARLIE']
console.log('Lowercase Names:', names.map(toLowerCase)); // Output: ['alice', 'bob', 'charlie']


const dates = ['2023-01-01', '2023-02-15', '2023-03-30'];
const formattedDates = dates.map(formatDate);

// Using map to create a new array with formatted date strings
function formatDate(dateStr) {
    const parts = dateStr.split('-');
    return `${parts[2]}/${parts[1]}/${parts[0]}`;
    
}
console.log('Formatted Dates:', formattedDates); // Output: ['01/01/2023', '15/02/2023', '30/03/2023']

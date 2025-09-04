// reduce method executes a reducer function (that you provide) on each element of the array, resulting in a single output value.
// The reducer function takes four arguments: accumulator, currentValue, currentIndex, sourceArray.
// The most common use of reduce is to sum up all the elements in an array.
// Here is an example of using reduce to sum up all the elements in an array:

// Example: Sum of all elements in an array
const price = [5, 10, 15, 20, 25, 30];

// Using reduce to sum up all elements in the array
const total = price.reduce(sum);

// Reducer function to sum two numbers
function sum(accumulator, currentValue  ) {
  return accumulator + currentValue;
}

// Output the total sum
console.log(total); // Output: 105

// In this example, the reduce method iterates through each element in the price array, applying the sum function to accumulate the total sum of all elements. The final result is stored in the total variable and printed to the console.
// The initial value of the accumulator is the first element of the array, and the currentValue starts from the second element. The process continues until all elements have been processed, resulting in a single output value.
// You can also provide an initial value for the accumulator as the second argument to reduce. If you don't provide an initial value, the first element of the array is used as the initial accumulator value.
const totalWithInitialValue = price.reduce(sum, 10); // Initial value is 10
console.log(totalWithInitialValue); // Output: 115

// Another example: Maximum value in an array
const grades = [90, 80, 70, 60, 50];

const maxGrade = grades.reduce(getMax);
const minGrade = grades.reduce(getMin);

function getMin(accumulator, currentValue) {
  return Math.min(accumulator, currentValue);
}

function getMax(accumulator, currentValue) {
  return Math.max(accumulator, currentValue);
}

console.log(maxGrade); // Output: 90
console.log(minGrade); // Output: 50
// In this example, the reduce method is used to find the maximum value in the grades array by comparing each element with the current maximum value stored in the accumulator.
// The final result is the maximum value in the array, which is printed to the console.
// The reduce method is a powerful tool for aggregating data in arrays and can be used for various purposes such as summing values, finding maximum or minimum values, counting occurrences, and more.

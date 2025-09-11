// Array of object: là một mảng các đối tượng, mỗi đối tượng có thể có các thuộc tính khác nhau.
// Ví dụ:
const fruits = [
    { name: 'Apple', color: 'Red', price: 1.2 },
    { name: 'Banana', color: 'Yellow', price: 0.5 },
    { name: 'Cherry', color: 'Red', price: 2.0 },
    { name: 'Orange', color: 'Orange', price: 1.5 }
]
// Truy cập vào các thuộc tính của đối tượng trong mảng
console.log(fruits[0].name); // Output: Apple
console.log(fruits[1].color); // Output: Yellow
console.log(fruits[2].price); // Output: 2.0

// đẩy một đối tượng mới vào mảng
fruits.push({ name: 'Grapes', color: 'Purple', price: 3.0 });
console.log(fruits);

// pop: loại bỏ phần tử cuối cùng của mảng
fruits.pop();
console.log(fruits);

// slice: cắt một phần của mảng và trả về một mảng mới
const redFruits = fruits.slice(0, 2);
console.log(redFruits);

// forEach: lặp qua từng phần tử trong mảng
fruits.forEach(fruit => {
    console.log(`${fruit.name} is ${fruit.color} and costs $${fruit.price}`);
    console.log(fruit)
});

// map: tạo một mảng mới bằng cách áp dụng một hàm cho từng phần tử trong mảng
const fruitNames = fruits.map(fruit => fruit.name);
console.log(fruitNames);

// filter: 
const expensiveFruits = fruits.filter(fruit => fruit.price > 1.0);
console.log(expensiveFruits);

// reduce: tính tổng giá của tất cả các loại trái cây
const totalPrice = fruits.reduce((total, fruit) => total + fruit.price, 0);
console.log(totalPrice);

const maxPriceFruit = fruits.reduce((max, fruit) => (fruit.price > max.price ? fruit : max), fruits[0]);
console.log(maxPriceFruit);
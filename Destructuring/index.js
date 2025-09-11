// Destructuring: làm việc với mảng và object
// Ví dụ 1: đổi giá trị của 2 biến
let a = 1;
let b = 2;
// Cách thông thường

[a, b] = [b, a]; // Destructuring
console.log(a, b);

// Ví dụ 2: Đổi element trong mảng
let color = ['red', 'green', 'blue', 'yellow', 'purple'];
[color[0], color[2]] = [color[2], color[0]];
console.log(color); // ['blue', 'green', 'red']

// Ví dụ 3: gán giá trị trong object
const [first, second, third, ...extra] = color;
console.log(first, second, third); // blue green red
console.log(extra); // ['yellow', 'purple']

// Ví dụ 4: trích giá trị trong object
const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    job: "Developer"
}
const person2 = {
    firstName: 'Jane',
    lastName: 'Smith',
    age: 25,
    job: "Designer"
}
const { firstName, lastName, age, job } = person;
console.log(firstName, lastName, age, job); // John Doe 30 Developer

// Ví dụ 5: đổi tên biến khi trích giá trị trong object
function display({firstName, lastName, age, job}) {
    console.log(`name: ${firstName} ${lastName}, age: ${age}, job: ${job}`);
}
display(person); // name: John Doe, age: 30, job: Developer
display(person2); // name: Jane Smith, age: 25, job: Designer
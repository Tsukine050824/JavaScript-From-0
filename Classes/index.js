// class: là một khuôn mẫu để tạo ra các object với cùng một cấu trúc và thuộc tính
// class được giới thiệu trong ES6 (ECMAScript 2015) như một cách mới để tạo ra các object và làm cho mã dễ đọc và bảo trì hơn
// class sử dụng từ khóa class để định nghĩa một lớp mới, và bên trong lớp có thể có các thuộc tính và phương thức
// Các thuộc tính và phương thức được định nghĩa bên trong constructor, và từ khóa this được sử dụng để tham chiếu đến instance hiện tại của lớp
// Ví dụ:

class product {
    constructor(name, price, category) {
        this.name = name; // thuộc tính name
        this.price = price; // thuộc tính price
        this.category = category; // thuộc tính category
    }
    displayInfo() { // phương thức displayInfo
        console.log(`Product: ${this.name}, Price: $${this.price.toFixed(2)}, Category: ${this.category}`);
    }

    CaculatetotalPrice(quantity) { // phương thức CaculatetotalPrice
        return this.price * quantity + tax;
    }
}

const quantity = 4;
const tax = 0.1; // thuế 10%

const product1 = new product('Laptop', 1000, 'Electronics'); // tạo ra một instance mới của product
const product2 = new product('Phone', 500, 'Electronics'); // tạo ra một instance mới của product


product1.displayInfo(); // gọi phương thức displayInfo của product1
product2.displayInfo(); // gọi phương thức displayInfo của product2
console.log(`Total Price for ${quantity} ${product1.name}: $${product1.CaculatetotalPrice(quantity)}`); // gọi phương thức CaculatetotalPrice của product1
console.log(`Total Price for ${quantity} ${product2.name}: $${product2.CaculatetotalPrice(quantity)}`); // gọi phương thức CaculatetotalPrice của product2
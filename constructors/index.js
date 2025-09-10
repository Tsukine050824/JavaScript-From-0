// constructors là các hàm đặc biệt được sử dụng để tạo ra các object mới với cùng một cấu trúc và thuộc tính
// Các constructors thường được đặt tên với chữ cái đầu tiên viết hoa để phân biệt với các hàm thông thường
// Khi gọi một constructor, ta sử dụng từ khóa new để tạo ra một instance (thể hiện) mới của object đó
// Bên trong constructor, từ khóa this được sử dụng để tham chiếu đến instance hiện tại đang được tạo ra
// Các thuộc tính và phương thức có thể được thêm vào instance thông qua this
// Ví dụ:

function Car(make, model, year,color) {
    this.make = make; // thuộc tính make
    this.model = model; // thuộc tính model
    this.year = year; // thuộc tính year
    this.color = color; // thuộc tính color
    this.drive = function() { // phương thức start
        console.log(`The ${this.color} ${this.make} ${this.model} is driving.`);
    }
}

const car1 = new Car('Toyota', 'Camry', 2020,'red'); // tạo ra một instance mới của Car
const car2 = new Car('Honda', 'Civic', 2019,'blue'); // tạo ra một instance mới của Car

console.log(car1.make); // Toyota
console.log(car1.model); // Camry
console.log(car1.year); // 2020
console.log(car1.color); // red 
car1.drive(); // The red Toyota Camry is driving.

console.log(car2.make); // Honda
console.log(car2.model); // Civic
console.log(car2.year); // 2019
console.log(car2.color); // blue
car2.drive(); // The blue Honda Civic is driving.

// Constructors rất hữu ích khi bạn cần tạo ra nhiều object với cùng một cấu trúc và thuộc tính, giúp tiết kiệm thời gian và công sức trong việc viết mã
// Ngoài ra, constructors cũng giúp tổ chức mã tốt hơn và làm cho nó dễ đọc và bảo trì hơn
//Static: là một từ khóa trong JavaScript được sử dụng để định nghĩa các phương thức hoặc thuộc tính tĩnh trong một lớp (class).
// Các phương thức hoặc thuộc tính tĩnh không thuộc về bất kỳ instance cụ thể nào của lớp, mà thay vào đó thuộc về chính lớp đó.
// Điều này có nghĩa là bạn có thể truy cập chúng mà không cần phải tạo một instance của lớp.
// Các phương thức hoặc thuộc tính tĩnh thường được sử dụng cho các chức năng tiện ích hoặc các hằng số liên quan đến lớp.
// Ví dụ:
class MathUtil {
    static PI = 3.14159; // thuộc tính tĩnh
    static getDiameter(radius) { // phương thức tĩnh
        return radius * 2;
    }
    static getCircumference(radius) { // phương thức tĩnh
        return 2 * MathUtil.PI * radius;
    }
    static getArea(radius) { // phương thức tĩnh
        return MathUtil.PI * radius * radius;
    }
}
console.log(MathUtil.getDiameter(5)); // truy cập phương thức tĩnh mà không cần tạo instance
console.log(MathUtil.PI); // truy cập thuộc tính tĩnh mà không cần tạo instance
console.log(MathUtil.getCircumference(4)); // truy cập phương thức tĩnh mà không cần tạo instance
console.log(MathUtil.getArea(3)); // truy cập phương thức tĩnh mà không cần tạo instance
// Trong ví dụ trên, MathUtil là một lớp với các phương thức và thuộc tính tĩnh.
// Bạn có thể gọi các phương thức và truy cập thuộc tính tĩnh trực tiếp từ lớp mà không cần tạo một instance của MathUtil.

// Lưu ý rằng bạn không thể truy cập các phương thức hoặc thuộc tính tĩnh từ bên trong các phương thức không tĩnh của lớp mà không sử dụng tên lớp.
// Ví dụ:
class User {
    static userCount = 0; // thuộc tính tĩnh
    constructor(name) {
        this.name = name;
        User.userCount++; // truy cập thuộc tính tĩnh từ bên trong constructor
    }
    static getUserCount() { // phương thức tĩnh
        console.log(`Total users: ${User.userCount}`);
    }
    sayHello() {
        console.log(`Hello, my name is ${this.name}`);
    }

}
const user1 = new User("Alice");
console.log(user1.name); // Alice
user1.sayHello(); // Hello, my name is Alice
const user2 = new User("Bob");
console.log(user2.name); // Bob
user2.sayHello(); // Hello, my name is Bob
const user3 = new User("Charlie");
console.log(user3.name); // Charlie
user3.sayHello(); // Hello, my name is Charlie
User.getUserCount(); // Total users: 3
// Trong ví dụ trên, userCount là một thuộc tính tĩnh được sử dụng để đếm số lượng người dùng được tạo ra.
// Mỗi khi một instance mới của User được tạo, userCount sẽ tăng lên.
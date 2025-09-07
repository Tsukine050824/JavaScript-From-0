// Object: là một kiểu dữ liệu phức tạp trong JavaScript
// Object là một tập hợp các cặp key-value (khóa-giá trị)
// Key là một chuỗi (string) hoặc một biểu tượng (symbol)
// Value có thể là bất kỳ kiểu dữ liệu nào, bao gồm cả các object khác
// Object được sử dụng để lưu trữ và quản lý dữ liệu có cấu trúc phức tạp
// Object có thể chứa các thuộc tính (properties) và phương thức (methods)
// Thuộc tính là các cặp key-value, trong đó key là tên thuộc tính và value là giá trị của thuộc tính
// Phương thức là các hàm (functions) được gán cho một thuộc tính của object
// Object có thể được tạo ra bằng cách sử dụng cú pháp literal (dấu ngoặc nhọn {}) hoặc bằng cách sử dụng từ khóa new

//This: là một từ khóa đặc biệt trong JavaScript
// This đại diện cho object hiện tại
// Giá trị của this phụ thuộc vào ngữ cảnh mà nó được sử dụng
// Trong một phương thức của object, this đại diện cho object đó
// Trong một hàm thông thường, this đại diện cho object toàn cục (global object) hoặc undefined trong chế độ strict
// Trong một hàm mũi tên (arrow function), this kế thừa giá trị từ ngữ cảnh bao quanh nó
// Việc sử dụng this giúp truy cập và thao tác với các thuộc tính và phương thức của object hiện tại
// This không thể được gán lại giá trị mới,cũng như k dùng được với arrow function
// Ví dụ:
const person = {
    FirstName : 'John',
    LastName : 'Doe',
    Age : 25,
    isEmployed : true,
    sayHello : function() {
        console.log('Hello, my name is ' + this.FirstName + ' ' + this.LastName);
        // this đại diện cho object hiện tại
    },
    eat: function() {
        console.log(this.FirstName + ' is eating.');
        
    }
}

const person2 = {
    FirstName : 'Jane',
    LastName : 'Smith',
    Age : 30,
    isEmployed : false,
    sayHello : function() {
        console.log('Hello, my name is ' + this.FirstName + ' ' + this.LastName);
        // this đại diện cho object hiện tại
    },
    eat: function() {
        console.log(this.FirstName + ' is eating.');
    }
}

console.log(person.FirstName); // John
console.log(person['LastName']); // Doe
console.log(person.Age);
console.log(person.isEmployed); // true
person.sayHello(); // Hello, my name is John Doe

// Thêm thuộc tính mới
person.Address = '123 Main St';
console.log(person.Address); // 123 Main St

console.log(person2.FirstName); // Jane
console.log(person2['LastName']); // Smith
console.log(person2.Age);
console.log(person2.isEmployed); // false
person2.eat(); // Jane is eating.

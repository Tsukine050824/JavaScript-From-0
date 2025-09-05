// Arrow function: hàm mũi tên
// Arrow function là một cách viết ngắn gọn hơn của function expression
// Arrow function không có từ khóa function
// Arrow function sử dụng ký hiệu => để phân tách danh sách tham số và thân hàm
// Arrow function không có từ khóa this riêng, nó kế thừa từ phạm vi bao quanh nó
// Arrow function không có từ khóa arguments, nó không thể truy cập đối tượng arguments
// Arrow function không thể được sử dụng như một hàm khởi tạo (constructor)
// Arrow function dành cho 1 hàm ngắn gọn, không có nhiều logic phức tạp
//Ví dụ:
const add = (a, b) => {
    return a + b;
};
console.log(add(2, 3)); // 5
// Trong ví dụ này, hàm add được định nghĩa bằng arrow function
// Hàm này nhận hai tham số a và b, và trả về tổng của chúng
// Hàm này được gọi với các đối số 2 và 3, kết quả là 5
// Nếu hàm chỉ có một biểu thức trả về, ta có thể bỏ qua dấu ngoặc nhọn và từ khóa return
const multiply = (a, b) => a * b;
console.log(multiply(2, 3)); // 6
// Trong ví dụ này, hàm multiply được định nghĩa bằng arrow function
// Hàm này nhận hai tham số a và b, và trả về tích của chúng
// Hàm này được gọi với các đối số 2 và 3, kết quả là 6
// Nếu hàm chỉ có một tham số, ta có thể bỏ qua dấu ngoặc đơn
const square = x => x * x;
console.log(square(4)); // 16
// Trong ví dụ này, hàm square được định nghĩa bằng arrow function
// Hàm này nhận một tham số x, và trả về bình phương của nó
// Hàm này được gọi với đối số 4, kết quả là 16
// Nếu hàm không có tham số, ta phải sử dụng dấu ngoặc đơn rỗng
const greet = () => 'Hello';
console.log(greet()); // Hello

// Ví dụ phức tạp hơn về arrow function
const numbers = [1, 2, 3, 4, 5];
// Sử dụng arrow function với phương thức map để tạo một mảng mới với các số bình phương
const squares = numbers.map(n => Math.pow(n, 2));
console.log(squares); // [1, 4, 9, 16, 25]
// Sử dụng arrow function với phương thức filter để tạo một mảng mới với các số chẵn
const evens = numbers.filter(n => n % 2 === 0);
console.log(evens); // [2, 4]
// Sử dụng arrow function với phương thức reduce để tính tổng các số
const sum = numbers.reduce((acc, n) => acc + n, 0);
console.log(sum); // 15
// Trong các ví dụ này, ta sử dụng arrow function để định nghĩa các hàm ngắn gọn cho các phương thức mảng
// Arrow function giúp mã nguồn trở nên ngắn gọn và dễ đọc hơn
// Tuy nhiên, cần lưu ý rằng arrow function không phù hợp cho tất cả các trường hợp
// Chẳng hạn, nếu cần sử dụng từ khóa this hoặc arguments, hoặc nếu hàm có nhiều logic phức tạp, thì nên sử dụng function expression thông thường
 
const hello = (name, age) => {console.log(`Hello ${name}`)
    console.log(`You're ${age} years old`);
}
hello('Alice', 30);
// Trong ví dụ này, hàm hello được định nghĩa bằng arrow function
// Hàm này nhận hai tham số name và age, và in ra lời chào với tên và tuổi
// Tuy nhiên, do arrow function không có từ khóa this riêng, nên nếu ta cố gắng sử dụng this bên trong hàm này, nó sẽ không hoạt động như mong đợi

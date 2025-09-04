
// Function expression: gán một hàm vào một biến
// Hàm này có thể được gọi thông qua biến
// Hàm có thể được truyền như một đối số cho các hàm khác
// Hàm có thể được trả về từ các hàm khác
// Hàm có thể được sử dụng như một IIFE (Immediately Invoked Function Expression)
//Vi dụ:
setTimeout(function(){
    console.log("This is a delayed message.");
}, 3000)
// Hàm này không có tên, nó là một hàm vô danh (anonymous function)
// Hàm này được truyền như một đối số cho hàm setTimeout
// Sau 3 giây, hàm này sẽ được thực thi và in ra thông điệp

//Ví dụ khác: 
//Sử dụng function declaration trước, sau đó sử dụng function expression
const numbers = [1, 2, 3, 4, 5];
const squares = numbers.map(square);
function square(num) {
    return Math.pow(num, 2);
}
console.log(squares); // [1, 4, 9, 16, 25]
// Trong ví dụ này, hàm square được định nghĩa bằng function declaration
// Hàm này được truyền như một đối số cho phương thức map của mảng numbers
// Kết quả là một mảng mới chứa các bình phương của các số ban đầu
// Bây giờ, ta sẽ viết lại ví dụ trên sử dụng function expression
const numbers2 = [1, 2, 3, 4, 5];
const squares2 = numbers2.map(function(num) {
    return Math.pow(num, 2);
});
console.log(squares2); // [1, 4, 9, 16, 25]
// Trong ví dụ này, hàm vô danh được định nghĩa bằng function expression
// Hàm này được truyền trực tiếp như một đối số cho phương thức map của mảng numbers2
// Kết quả là một mảng mới chứa các bình phương của các số ban đầu
// Cả hai ví dụ đều cho kết quả giống nhau, nhưng cách viết khác nhau
// Function expression thường được sử dụng khi ta cần định nghĩa hàm một cách nhanh chóng và không cần tái sử dụng nó nhiều lần
// Function declaration thường được sử dụng khi ta cần định nghĩa hàm một cách rõ ràng và có thể tái sử dụng nó nhiều lần
// Thêm về lập phương các số
const cube = numbers2.map(function(num) {
    return Math.pow(num, 3);
});
console.log(cube); // [1, 8, 27, 64, 125]
// Trong ví dụ này, hàm vô danh được định nghĩa bằng function expression
// Hàm này được truyền trực tiếp như một đối số cho phương thức map của mảng numbers2
// Kết quả là một mảng mới chứa các lập phương của các số ban đầu
const odd = numbers2.map(function(num) {
    return num % 2 !== 0;
});
console.log(odd); // [true, false, true, false, true]
// Trong ví dụ này, hàm vô danh được định nghĩa bằng function expression
// Hàm này được truyền trực tiếp như một đối số cho phương thức map của mảng numbers2
// Kết quả là một mảng mới chứa các giá trị boolean, true nếu số là lẻ, false nếu số là chẵn
const even = numbers2.map(function(num) {
    return num % 2 === 0;
});
console.log(even); // [false, true, false, true, false]
// Trong ví dụ này, hàm vô danh được định nghĩa bằng function expression
// Hàm này được truyền trực tiếp như một đối số cho phương thức map của mảng numbers2
// Kết quả là một mảng mới chứa các giá trị boolean, true nếu số là chẵn, false nếu số là lẻ

// sort: là một hàm sắp xếp mảng theo thứ tự tăng dần hoặc giảm dần
// Cú pháp: array.sort(compareFunction)
// Trong đó:
// compareFunction (tùy chọn): Hàm so sánh để xác định thứ tự sắp xếp. Nếu không cung cấp, các phần tử sẽ được chuyển đổi thành chuỗi và so sánh theo thứ tự Unicode.
// Hàm compareFunction nhận hai đối số a và b, và trả về:
// Một số âm nếu a nên đứng trước b.
// Một số dương nếu a nên đứng sau b.
// 0 nếu a và b được coi là bằng nhau.
// Trả về: Mảng đã được sắp xếp (thay đổi mảng gốc).
let numbers = [4, 2, 5, 1, 3];
numbers.sort((a, b) => a - b);
console.log(numbers); // Kết quả: [1, 2, 3, 4, 5]


const students = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 20 },
    { name: 'Charlie', age: 23 }
];
// students.sort((a, b) => b.age - a.age);
students.sort((a, b) => a.name.localeCompare(b.name));
console.log(students);
// Kết quả: [{ name: 'Bob', age: 20 }, { name: 'Charlie', age: 23 }, { name: 'Alice', age: 25 }]
